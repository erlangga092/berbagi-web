import { GetStaticPaths, GetStaticProps } from "next";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { ParsedUrlQuery } from "querystring";
import Meta from "../../components/Meta";
import styles from "../../styles/blog.module.css";
import { IPost } from "../../types/post";
import { getAllPosts, getPost } from "../../utils/mdxUtils";

type BlogPageProps = {
    source: MDXRemoteSerializeResult;
    frontMatter: Omit<IPost, "slug">;
};

export default function BlogPage(props: BlogPageProps) {
    const { source, frontMatter } = props;
    return (
        <>
            <Meta title="Community" />
            <div className="max-w-screen-lg bg-white rounded p-6 md:p-12 mx-auto space-y-6">
                <h1 className="text-gray-700 font-bold text-2xl md:text-3xl tracking-normal leading-normal md:leading-relaxed">
                    {frontMatter.title}
                </h1>
                <p className="text-sm md:text-base text-gray-400 tracking-normal leading-relaxed">
                    {frontMatter.date}
                </p>
                <div className={styles.blog}>
                    <MDXRemote {...source} />
                </div>
            </div>
        </>
    );
}

interface IParams extends ParsedUrlQuery {
    slug: string;
}

export const getStaticProps: GetStaticProps = async (ctx) => {
    const { slug } = ctx.params as IParams;
    const { content, data } = getPost(slug);
    const mdxSource = await serialize(content, { scope: data });
    return {
        props: {
            source: mdxSource,
            frontMatter: data,
        },
    };
};

export const getStaticPaths: GetStaticPaths = () => {
    const posts = getAllPosts(["slug"]);

    const paths = posts.map((post) => {
        return {
            params: {
                slug: post.slug,
            },
        };
    });

    return {
        paths,
        fallback: false,
    };
};

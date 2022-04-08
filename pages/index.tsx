import type { GetStaticProps } from "next";
import ArticleCard from "../components/ArticleCard";
import Card from "../components/Card";
import Meta from "../components/Meta";
import { IPost } from "../types/post";
import { getAllPosts } from "../utils/mdxUtils";

type HomeProps = {
    posts: Array<IPost>;
};

const ParagraphTitle = () => {
    return (
        <div className="space-y-3 my-8">
            <div className="title">
                <p className="text-gray-500 font-medium text-base md:text-lg">
                    Why Choose Us
                </p>
            </div>
            <div className="subtitle">
                <p className="text-gray-700 font-bold text-xl md:text-2xl">
                    Online Learning Platform
                </p>
                <p className="text-gray-700 font-bold text-xl md:text-2xl">
                    following International Curriculum
                </p>
            </div>
        </div>
    );
};

export default function Home({ posts }: HomeProps) {
    return (
        <main className="w-full">
            <Meta title="Home" />
            <ParagraphTitle />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full">
                {posts &&
                    posts.map((post) => {
                        return (
                            <ArticleCard
                                key={post.slug}
                                title={post.title}
                                description={post.description}
                                slug={post.slug}
                            />
                        );
                    })}
            </div>
            <ParagraphTitle />
            <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-8 w-full">
                <Card
                    title="Case Study"
                    subTitle="Build real world projects in the field of information technology"
                />
                <Card
                    title="Consultation"
                    subTitle="Join private group to consult with Mentor"
                />
                <Card
                    title="Lifetime Access"
                    subTitle="No learning restriction, you may learn at your own schedule"
                />
                <Card
                    title="Portfolio"
                    subTitle="Learn and get the work to build a dream career"
                />
                <Card
                    title="Pixel Matters"
                    subTitle="Class project built with a good design concept"
                />
                <Card
                    title="Offline Mode"
                    subTitle="You can still learn even without internet"
                />
                <Card
                    title="Made By Indonesian"
                    subTitle="Material created and delivered by Indonesian creators"
                />
                <Card
                    title="Completion Certificate"
                    subTitle="Complete classes and final projects to get official certificate"
                />
            </div>
        </main>
    );
}

export const getStaticProps: GetStaticProps = async () => {
    const posts = getAllPosts(["title", "slug", "date", "description"]);

    return {
        props: {
            posts,
        },
    };
};

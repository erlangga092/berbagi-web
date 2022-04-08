import Head from "next/head";

type MetaProps = {
    title: string;
};

export default function Meta(props: MetaProps) {
    const { title } = props;

    return (
        <Head>
            <title>{`${title} - Berbagi.com`}</title>
        </Head>
    );
}

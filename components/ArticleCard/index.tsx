import Image from "next/image";
import Link from "next/link";
import * as React from "react";

type ArticleCardProps = {
    title: string;
    description: string;
    slug: string;
};

const ArticleCard: React.FC<ArticleCardProps> = ({
    title,
    description,
    slug,
}) => {
    return (
        <section className="bg-white rounded p-6 md:p-8">
            <div className="space-y-3 md:space-y-4">
                <div className="mb-8 md:mb-10">
                    <Image
                        src={
                            "https://buildwithangga.com/themes/front/images/ic_access.svg"
                        }
                        width={70}
                        height={70}
                        alt="img-card"
                    />
                </div>
                <Link href={`/blog/${slug}`}>
                    <a className="text-gray-700 text-xl md:text-2xl font-bold hover:underline">
                        {title}
                    </a>
                </Link>
                <p className="text-gray-700 text-base md:text-lg leading-7 md:leading-8">
                    {description}
                </p>
            </div>
        </section>
    );
};

export default ArticleCard;

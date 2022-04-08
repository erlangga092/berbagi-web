import Image from "next/image";
import * as React from "react";

type CardProps = {
    title: string;
    subTitle: string;
};

const Card: React.FC<CardProps> = ({ title, subTitle }) => {
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
                <h5 className="text-gray-700 text-xl md:text-2xl font-bold">
                    {title}
                </h5>
                <p className="text-gray-700 text-base md:text-lg leading-7 md:leading-8">
                    {subTitle}
                </p>
            </div>
        </section>
    );
};

export default Card;

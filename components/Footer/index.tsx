import Image from "next/image";
import Link from "next/link";
import { BetaLogo } from "../../assets";
import * as React from "react";

type FooterLinkProps = {
    title: string;
    href?: string;
};

const FooterLink: React.FC<FooterLinkProps> = ({ title, href = "/" }) => {
    return (
        <Link href={href}>
            <a className="text-gray-700 font-regular text-base md:text-lg">
                {title}
            </a>
        </Link>
    );
};

export default function Footer() {
    return (
        <footer className="w-full px-4 grid-cols-1 sm:px-12 grid sm:grid-cols-1 lg:grid-cols-3 gap-12 md:gap-32 py-8 md:py-16">
            <section className="w-full col-span-1 sm:col-span-1">
                <div className="w-full sm:w-5/6 space-y-6">
                    <Image src={BetaLogo} width={55} height={55} alt="logo" />
                    <div className="space-y-2 md:space-y-3">
                        <p className="text-gray-700 text-base md:text-lg font-regular">
                            Website untuk belajar pemrograman yang sangat
                            berpengalaman di bidangnya masing-masing
                        </p>
                    </div>
                    <p className="text-gray-700 text-base md:text-lg font-regular">
                        <span className="text-gray-700 text-base md:text-lg">
                            &copy;
                        </span>{" "}
                        2019-2022 Berbagi
                    </p>
                </div>
            </section>
            <section className="col-span-1 sm:col-span-2">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="space-y-12 md:space-y-16">
                        <div className="space-y-2 md:space-y-3 flex flex-col">
                            <h5 className="font-bold text-gray-800 text-lg">
                                Products
                            </h5>
                            <FooterLink title="Tips" />
                            <FooterLink title="Online Course" />
                            <FooterLink title="Design Resources" />
                        </div>
                        <div className="space-y-2 md:space-y-3 flex flex-col">
                            <h5 className="font-bold text-gray-800 text-lg">
                                Explore
                            </h5>
                            <FooterLink title="Roadmap Belajar" />
                            <FooterLink title="All Course" />
                        </div>
                    </div>
                    <div className="space-y-12 md:space-y-16">
                        <div className="space-y-2 md:space-y-3 flex flex-col">
                            <h5 className="font-bold text-gray-800 md:text-lg text-base">
                                Community
                            </h5>
                            <FooterLink title="Showcase" />
                            <FooterLink title="Testimonials" />
                            <FooterLink title="Mentors" />
                        </div>
                        <div className="space-y-2 md:space-y-3 flex flex-col">
                            <h5 className="font-bold text-gray-800 md:text-lg text-base">
                                Useful Links
                            </h5>
                            <FooterLink title="Privacy & Policy" />
                            <FooterLink title="Terms & Conditions" />
                        </div>
                    </div>
                    <div className="space-y-12 md:space-y-16">
                        <div className="space-y-2 md:space-y-3 flex flex-col">
                            <h5 className="font-bold text-gray-800 md:text-lg text-base">
                                Company
                            </h5>
                            <FooterLink title="About" />
                            <FooterLink title="Our Timeline" />
                            <FooterLink title="Contact" />
                            <FooterLink title="Careers" />
                        </div>
                    </div>
                    <div className="space-y-2 md:space-y-3 flex flex-col">
                        <h5 className="font-bold text-gray-800 md:text-lg text-base">
                            Language
                        </h5>
                        <FooterLink title="English (US)" />
                        <FooterLink title="Bahasa Indonesia" />
                    </div>
                </div>
            </section>
        </footer>
    );
}

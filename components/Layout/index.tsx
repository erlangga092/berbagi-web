import React from "react";
import Footer from "../Footer";
import Header from "../Header";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout(props: LayoutProps) {
    return (
        <div className="w-full">
            <Header />
            <div className="px-4 md:px-12 pt-4 pb-12 w-full">
                {props.children}
            </div>
            <Footer />
        </div>
    );
}

import App from "next/app";
import Router from "next/router";
import NProgress from "nprogress";
import Layout from "../components/Layout";
import { MdxComponentsProvider } from "../context/mdxContext";
import "../styles/globals.css";

const progress = NProgress.configure({ showSpinner: false });

export default class MyAppp extends App {
    public componentDidMount() {
        // NProgress
        Router.events.on("routeChangeStart", () => progress.start());
        Router.events.on("routeChangeComplete", () => progress.done());
        Router.events.on("routeChangeError", () => progress.done());
    }

    public componentWillUnmount() {
        // NProgress
        Router.events.off("routeChangeStart", () => progress.start());
        Router.events.off("routeChangeComplete", () => progress.done());
        Router.events.off("routeChangeError", () => progress.done());
    }

    public render() {
        const { Component, pageProps } = this.props;

        return (
            <MdxComponentsProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </MdxComponentsProvider>
        );
    }
}

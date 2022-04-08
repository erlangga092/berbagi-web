import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { BetaLogo } from "../../assets";

type MenuListProps = {
    title: string;
    href: string;
};

const MenuList = (props: MenuListProps) => {
    const { title, href = "/" } = props;

    return (
        <Link href={href}>
            <a className="font-medium text-base md:text-lg text-gray-700 hover:text-blue-700">
                {title}
            </a>
        </Link>
    );
};

const NavbarDropdown = () => {
    return (
        <div className="w-full px-4 sm:px-12 flex flex-col">
            <div className="space-y-3 flex flex-col">
                <MenuList title="Kelas" href="/class" />
                <MenuList title="Resources" href="/resources" />
                <MenuList title="Community" href="/community" />
            </div>
        </div>
    );
};

export default function Header() {
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();
    const isDesktop = useMediaQuery({
        query: "(min-width: 1280px)",
    });

    useEffect(() => {
        setShowDropdown(false);
    }, [isDesktop]);

    useEffect(() => {
        const handleDropdownChange = () => {
            setShowDropdown(false);
        };

        return router.events.on("routeChangeStart", handleDropdownChange);
    }, [router.events]);

    return (
        <>
            <header className="w-full h-28 md:h-32 px-4 sm:px-12 flex items-center">
                <section className="w-full flex items-center">
                    <Link href="/">
                        <a className="mr-16 xl:mr-10">
                            <Image
                                src={BetaLogo}
                                width={55}
                                height={55}
                                alt="logo"
                            />
                        </a>
                    </Link>
                    {!showDropdown ? (
                        <div className="hidden space-x-8 sm:hidden xl:flex">
                            <MenuList title="Articles" href="/class" />
                            <MenuList title="Categories" href="/resources" />
                            <MenuList title="Tags" href="/community" />
                        </div>
                    ) : null}
                </section>
                <section className="w-full flex justify-end">
                    {isDesktop ? (
                        <div>
                            <button className="bg-gray-200 text-gray-800 px-5 py-3 rounded-full outline-none hover:bg-gray-300">
                                Sign In
                            </button>
                        </div>
                    ) : (
                        <button
                            className="space-y-2 p-2 hover:ring hover:ring-gray-600 rounded-sm"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <span className="block w-8 h-0.5 bg-gray-600"></span>
                            <span className="block w-8 h-0.5 bg-gray-600"></span>
                            <span className="block w-5 h-0.5 bg-gray-600"></span>
                        </button>
                    )}
                </section>
            </header>
            {showDropdown ? <NavbarDropdown /> : null}
        </>
    );
}

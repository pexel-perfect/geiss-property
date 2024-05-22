"use client";
import Link from "next/link";
import React from "react";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import { Logo } from "./icons";
import { siteConfig } from "@/config/site";

const Navbar: React.FC = () => {
    const [isOpenNav, setIsOpenNav] = React.useState<boolean>(false);
    const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
    const [isDropdownOpen, setIsDropdownOpen] = React.useState<boolean>(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY > 0;
            setIsScrolled(scrolled);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className={`mx-auto w-full shadow fixed top-0 left-0  z-50 ${isScrolled
            ? "bg-grayBackground bg-opacity-100 duration-500"
            : " bg-opacity-20 "
            }`}>
            <nav
                className={`container-x md:flex font-primary justify-around  items-center py-4`}
            >
                <div className="flex justify-between items-center z-10">
                    <Link href={"/"} className="flex-shrink-0">
                        <p className="text-primary font-extrabold text-2xl uppercase">
                            <Logo />
                        </p>
                    </Link>
                    <span className="block md:hidden z-50">
                        {isOpenNav ? (
                            <RxCross2 onClick={() => setIsOpenNav(false)} color="white" />
                        ) : (
                            <RxHamburgerMenu onClick={() => setIsOpenNav(true)} color="white" />
                        )}
                    </span>
                </div>

                <ul
                    className={` flex flex-col  md:flex-row md:gap-4 gap-4 py-8 md:py-0 md:opacity-100 ${isOpenNav ? "opacity-100 " : "opacity-0 "
                        } md:items-center md:justify-end md:static absolute left-0 px-7 md:px-0 transition-all ease-in duration-300 bg-grayBackground text-white lg:bg-transparent md:bg-opacity-0 w-full z-auto`}
                >
                    {siteConfig.navItems.map((item) => (
                        <li onClick={() => setIsOpenNav(false)} key={item.label} className=" uppercase font-secondary font-[500] text-[17px]">
                            <Link href={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;

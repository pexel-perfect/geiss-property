'use client'
import React, { useState } from 'react';
import { Logo } from "@/components/icons";
import { siteConfig } from "@/config/site";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
// Replace "your-close-icon-library" with the actual library you're using
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Navbar as NextUINavbar
} from "@nextui-org/navbar";
import clsx from "clsx";
import NextLink from "next/link";

export const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const handleMobileMenuToggle = () => {
		setIsMobileMenuOpen((prev) => !prev);
	};

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="py-4 relative">
			<NavbarContent className="basis-1/5 sm:basis-full" justify="start">
				<NavbarBrand as="li" className="gap-3 max-w-fit">
					<NextLink className="flex justify-start items-center gap-1" href="/">
						<Logo />
					</NextLink>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent
				className="hidden sm:flex basis-1/5 sm:basis-full"
				justify="end"
			>
				<ul className="hidden lg:flex gap-5 justify-start ml-2">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href}>
							<NextLink
								className={clsx(
									"data-[active=true]:text-light text-light data-[active=true]:font-medium uppercase font-secondary font-[500] text-[17px]"
								)}
								href={item.href}
							>
								{item.label}
							</NextLink>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			{/* Mobile menu */}
			<div
				className="sm:hidden basis-1 pl-4 text-primary cursor-pointer relative z-51"
				onClick={handleMobileMenuToggle}
			>
				{isMobileMenuOpen ? <AiOutlineClose /> : <RxHamburgerMenu />}
			</div>

			{isMobileMenuOpen && (
				<div className='absolute md:hidden'>
					<div className="fixed top-20  w-full -z-40 flex justify-center">
						<div className="bg-grayBackground w-3/4 max-w-sm rounded shadow-lg p-4">
							<div className="mt-4">
								{siteConfig.navItems.map((item, index) => (
									<NextLink
										key={index}
										className="block py-2 text-description hover:text-grayBackground hover:bg-gray-200 px-4"
										href={item.href}
										onClick={closeMobileMenu}
									>
										{item.label}
									</NextLink>
								))}
							</div>
						</div>
					</div>
				</div>
			)}
		</NextUINavbar>
	);
};

import { Link } from "@nextui-org/link";
import {
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	NavbarMenu,
	NavbarMenuItem,
	NavbarMenuToggle,
	Navbar as NextUINavbar,
} from "@nextui-org/navbar";
import { siteConfig } from "@/config/site";
import clsx from "clsx";
import NextLink from "next/link";
import { Logo } from "@/components/icons";

export const Navbar = () => {
	return (
		<NextUINavbar maxWidth="xl" position="sticky" className="py-4">
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
									"data-[active=true]:text-light text-light data-[active=true]:font-medium uppercase  font-secondary font-[500] text-[17px]"
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
			<NavbarContent className="sm:hidden basis-1 pl-4 text-primary" justify="end">
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu >
				<div className="mx-4 mt-6 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item}-${index}`} >
							<Link
								className="text-light"
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</NextUINavbar>
	);
};

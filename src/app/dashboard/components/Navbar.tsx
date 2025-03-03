"use client";

import { useState, useEffect, ReactNode } from "react";

import {
	Navbar as HeroUINavbar,
	NavbarBrand,
	NavbarContent,
	NavbarMenuToggle,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { addToast } from "@heroui/toast";
import { SearchIcon } from "@/src/components/icons";

import { useSidebar } from "@/src/context/sidebar-context";

export default function Navbar() {
	const { data } = useSession();
	const router = useRouter();

	const { isOpen, toggleSidebar } = useSidebar();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleSignOut = async () => {
		addToast({
			title: "Signing out...",
			color: "danger",
		});

		await signOut({ redirect: false });

		addToast({
			title: "Signed out",
			description: "You have been signed out successfully",
			color: "success",
		});
		router.push("/auth/login"); // ✅ Redirect without page reload
	};

	useEffect(() => {
		if (isMenuOpen) {
			toggleSidebar(true);
			console.log(isOpen);
		} else {
			toggleSidebar(false);
			console.log(isOpen);
		}
	}, [isMenuOpen, setIsMenuOpen]);

	return (
		<HeroUINavbar isBordered onMenuOpenChange={setIsMenuOpen} className="z-50">
			<NavbarContent className="sm:hidden" justify="start">
				<NavbarMenuToggle
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				/>
			</NavbarContent>
			<NavbarContent justify="start" className="sm:hidden">
				<NavbarBrand className="mr-4">
					<p className="hidden sm:block font-bold text-inherit">KCM1</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className="hidden sm:flex" justify="center">
				<Input
					classNames={{
						base: "w-full h-10",
						mainWrapper: "h-full",
						input: "text-small",
						inputWrapper:
							"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
					}}
					placeholder="Type to search..."
					size="sm"
					startContent={<SearchIcon size={18} />}
					type="search"
				/>
			</NavbarContent>

			<NavbarContent as="div" className="items-center" justify="end">
				<Dropdown placement="bottom-end">
					<DropdownTrigger>
						<Avatar
							isBordered
							as="button"
							className="transition-transform"
							color="secondary"
							name="Jason Hughes"
							size="sm"
							src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
						/>
					</DropdownTrigger>
					<DropdownMenu aria-label="Profile Actions" variant="flat">
						<DropdownItem key="profile" className="h-14 gap-2">
							<p className="font-semibold">Signed in as</p>
							<p className="font-semibold">{data?.user.email}</p>
						</DropdownItem>
						<DropdownItem key="settings">My Settings</DropdownItem>
						<DropdownItem key="team_settings">Team Settings</DropdownItem>
						<DropdownItem key="analytics">Analytics</DropdownItem>
						<DropdownItem key="system">System</DropdownItem>
						<DropdownItem key="configurations">Configurations</DropdownItem>
						<DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
						<DropdownItem key="logout" color="danger">
							<Link onPress={handleSignOut} color="foreground">
								Sign out
							</Link>
						</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</NavbarContent>
		</HeroUINavbar>
	);
}

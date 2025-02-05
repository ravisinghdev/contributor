"use client";

import {
	FaHome,
	FaUsers,
	FaChartPie,
	FaCreditCard,
	FaBell,
} from "react-icons/fa";

import { useState } from "react";

import {
	Navbar,
	NavbarBrand,
	NavbarMenuToggle,
	NavbarContent,
	NavbarItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";

import { usePathname } from "next/navigation";

import {
	Dropdown,
	DropdownItem,
	DropdownMenu,
	DropdownTrigger,
} from "@heroui/dropdown";
import { Avatar } from "@heroui/avatar";
import { SearchIcon } from "@/components/icons";
import { Input } from "@heroui/input";
import clsx from "clsx";

import { link as linkStyles } from "@heroui/theme";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";

const menuItems = [
	{ name: "Home", icon: <FaHome />, link: "/dashboard" },
	{ name: "Users", icon: <FaUsers />, link: "/dashboard/users" },
	{ name: "Analytics", icon: <FaChartPie />, link: "/dashboard/stats" },
	{ name: "Payments", icon: <FaCreditCard />, link: "/dashboard/payments" },
	{ name: "Notifications", icon: <FaBell />, link: "/dashboard/notifications" },
];

export default function Sidebar({ children }: { children: React.ReactNode }) {
	const [expanded, setExpanded] = useState(true); // Sidebar mobile toggle

	const pathname = usePathname();

	return (
		<div className="min-w-full">
			{/* Navbar */}
			<Navbar shouldBlockScroll className="w-full">
				{/* Sidebar opener */}
				<NavbarContent as="div" justify="start">
					<NavbarContent className="sm:hidden">
						<NavbarMenuToggle
							aria-label={expanded ? "Close menu" : "Open menu"}
							onClick={() => setExpanded(!expanded)}
						/>
					</NavbarContent>

					<NavbarContent className="sm:hidden pr-3">
						<NavbarBrand>
							<p className="font-bold text-inherit">ACME</p>
						</NavbarBrand>
					</NavbarContent>

					<NavbarContent className="hidden sm:flex pr-3">
						<NavbarBrand>
							<p className="font-bold text-inherit">ACME</p>
						</NavbarBrand>
					</NavbarContent>
				</NavbarContent>

				{/* Search Bar */}
				<NavbarContent as={"div"} justify="center">
					<Input
						classNames={{
							base: "max-w-full sm:max-w-[20rem] h-10",
							mainWrapper: "h-full",
							input: "text-small",
							inputWrapper:
								"h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
						}}
						placeholder="Type to search..."
						startContent={<SearchIcon size={18} />}
						type="search"
					/>
				</NavbarContent>

				{/* Avatar Dropdown */}
				<NavbarContent as="div" justify="end">
					<NavbarItem className="hidden sm:flex gap-2">
						<ThemeSwitch />
					</NavbarItem>

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
								<p className="font-semibold">zoey@example.com</p>
							</DropdownItem>
							<DropdownItem key="settings">My Settings</DropdownItem>
							<DropdownItem key="team_settings">Team Settings</DropdownItem>
							<DropdownItem key="analytics">Analytics</DropdownItem>
							<DropdownItem key="system">System</DropdownItem>
							<DropdownItem key="configurations">Configurations</DropdownItem>
							<DropdownItem key="help_and_feedback">
								Help & Feedback
							</DropdownItem>
							<DropdownItem key="logout" color="danger">
								Log Out
							</DropdownItem>
						</DropdownMenu>
					</Dropdown>
				</NavbarContent>
			</Navbar>

			{/* Sidebar */}
			<aside
				id="logo-sidebar"
				className={`fixed top-0 left-0 w-[20%] min-h-screen pt-20 transition-transform 
          ${!expanded ? "translate-x-0 w-0" : "-translate-x-full"} 
         border-r border-gray-200 sm:translate-x-0`}
				aria-label="Sidebar"
			>
				<div className="h-full px-3 pb-4 overflow-y-auto">
					<ul className="space-y-2 font-medium">
						{menuItems.map((item, index) => (
							<li
								key={index}
								className={clsx(
									`text-2xl`,
									pathname == item.link && "p-1  rounded-lg bg-default-100"
								)}
							>
								<Link
									href={item.link}
									className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white group"
								>
									<span className="w-5 h-5 text-default-700 transition duration-75 group-hover:text-default-900 dark:group-hover:text-white">
										{item.icon}
									</span>
									<span className="ms-3">{item.name}</span>
								</Link>
							</li>
						))}
					</ul>
				</div>
			</aside>

			{/* Page Content */}
			<div className="p-4 sm:ml-64">{children}</div>
		</div>
	);
}

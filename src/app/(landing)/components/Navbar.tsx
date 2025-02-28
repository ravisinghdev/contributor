"use client";

import {
	Navbar as HeroUINavbar,
	NavbarContent,
	NavbarMenu,
	NavbarMenuToggle,
	NavbarBrand,
	NavbarItem,
	NavbarMenuItem,
} from "@heroui/navbar";
import {
	Modal,
	ModalContent,
	ModalHeader,
	ModalBody,
	ModalFooter,
	useDisclosure,
} from "@heroui/modal";
import { Checkbox } from "@heroui/checkbox";
import { Button } from "@heroui/button";
import { Kbd } from "@heroui/kbd";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";

import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import {
	EyeFilledIcon,
	EyeSlashFilledIcon,
	MailIcon,
	SearchIcon,
} from "@/src/components/icons";

import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { signIn, useSession } from "next-auth/react";

const Navbar = () => {
	const pathname = usePathname();
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isVisible, setIsVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const router = useRouter();

	const { data } = useSession();

	const toggleVisibility = () => setIsVisible((prev) => !prev);

	const handleSubmit = async () => {
		try {
			setIsLoading(true);

			if (!email || !password) {
				toast.error("Email and password are required!");
				return;
			}

			const result = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});

			if (result?.error) {
				toast.error("Invalid credentials");
			} else {
				toast.success("User logged in...");
				onOpenChange(); // Close modal on success
				router.push("/dashboard");
			}
		} catch (error) {
			toast.error("Something went wrong!");
		} finally {
			setIsLoading(false);
		}
	};

	const searchInput = (
		<Input
			aria-label="Search"
			classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
			endContent={<Kbd className="hidden lg:inline-block">K</Kbd>}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);

	return (
		<HeroUINavbar maxWidth="xl" position="sticky">
			<NavbarContent justify="end">
				<NavbarBrand>
					<Link href="/" className="font-bold text-xl text-inherit">
						KCP1
					</Link>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent>
				<ul className="hidden lg:flex gap-4">
					{siteConfig.navItems.map((item) => (
						<NavbarItem key={item.href} isActive={pathname === item.href}>
							<Link
								href={item.href}
								color={pathname === item.href ? "primary" : "foreground"}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</ul>
			</NavbarContent>

			<NavbarContent justify="start" className="hidden sm:flex">
				<NavbarItem>
					<ThemeSwitch />
				</NavbarItem>

				<NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>

				<NavbarItem className="hidden lg:flex">
					<Button
						onPress={data ? () => router.push("/dashboard") : onOpen}
						variant="flat"
						color="warning"
					>
						{data ? "Dashboard" : "Login"}
					</Button>
				</NavbarItem>
			</NavbarContent>

			{/* Login Modal */}
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
				<ModalContent>
					{(onClose) => (
						<>
							<ModalHeader>Log in</ModalHeader>
							<ModalBody>
								<Input
									label="Email"
									placeholder="Enter your email"
									variant="bordered"
									endContent={
										<MailIcon className="text-2xl text-default-400" />
									}
									onChange={(e) => setEmail(e.target.value)}
								/>
								<Input
									label="Password"
									placeholder="Enter your password"
									variant="bordered"
									type={isVisible ? "text" : "password"}
									endContent={
										<button
											aria-label="toggle password visibility"
											type="button"
											onClick={toggleVisibility}
										>
											{isVisible ? (
												<EyeSlashFilledIcon className="text-2xl text-default-400" />
											) : (
												<EyeFilledIcon className="text-2xl text-default-400" />
											)}
										</button>
									}
									onChange={(e) => setPassword(e.target.value)}
								/>
								<div className="flex justify-between py-2 px-1">
									<Checkbox>Remember me</Checkbox>
									<Link href="#" color="primary">
										Forgot password?
									</Link>
								</div>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="flat" onPress={onClose}>
									Close
								</Button>
								<Button
									color="primary"
									isLoading={isLoading}
									onPress={handleSubmit}
								>
									Sign in
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal>

			<NavbarContent className="sm:hidden justify-end">
				<ThemeSwitch />
				<NavbarMenuToggle />
			</NavbarContent>

			<NavbarMenu>
				{searchInput}
				<div className="mx-4 mt-2 flex flex-col gap-2">
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem key={`${item.href}-${index}`}>
							<Link
								color={pathname === item.href ? "primary" : "foreground"}
								href={item.href}
								size="lg"
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</div>
			</NavbarMenu>
		</HeroUINavbar>
	);
};

export default Navbar;

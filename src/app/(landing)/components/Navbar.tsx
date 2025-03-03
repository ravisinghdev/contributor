"use client";

import { useState } from "react";

// Hero UI Components
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
import { Input } from "@heroui/input";

// Icons
import {
	EyeFilledIcon,
	EyeSlashFilledIcon,
	MailIcon,
	SearchIcon,
} from "@/src/components/icons";

// Next.js
import Link from "next/link";
import { siteConfig } from "@/src/config/site";
import { ThemeSwitch } from "@/src/components/theme-switch";
import { usePathname, useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import { addToast } from "@heroui/toast";
import clsx from "clsx";

const Navbar = () => {
	const pathname = usePathname();
	const router = useRouter();

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { isOpen, onOpen, onOpenChange } = useDisclosure();
	const [isVisible, setIsVisible] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState("");

	const { data } = useSession();

	const toggleVisibility = () => setIsVisible((prev) => !prev);

	// ✅ Prevent full page reload by handling navigation manually
	const handleNavigation = (event: React.MouseEvent, href: string) => {
		event.preventDefault(); // ❌ Prevent default anchor behavior
		router.push(href); // ✅ Use Next.js client-side navigation
	};

	const handleSubmit = async () => {
		try {
			setError("");
			setIsLoading(true);

			// ✅ Prevent empty email/password submission
			if (!email || !password) {
				addToast({
					title: "Email and password are required!",
					color: "danger",
				});
				setIsLoading(false);
				return;
			}

			const result = await signIn("credentials", {
				email,
				password,
				redirect: false,
			});

			if (result?.error) {
				addToast({
					title: "Invalid Credentials",
					description: "Please check your email and password",
					color: "danger",
				});
			} else {
				addToast({
					title: "Login Successful",
					description: "Redirecting to dashboard...",
					color: "success",
				});
				await router.push("/dashboard"); // ✅ Ensure navigation completes
			}

			if (result?.url) {
				router.replace("/dashboard");
			}
		} catch (error: any) {
			setError(error?.message ?? "Something went wrong!"); // ✅ Safe error handling
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<>
			<HeroUINavbar
				isBordered
				isMenuOpen={isMenuOpen}
				onMenuOpenChange={setIsMenuOpen}
				classNames={{
					item: [
						"flex",
						"relative",
						"h-full",
						"items-center",
						"data-[active=true]:after:content-['']",
						"data-[active=true]:after:absolute",
						"data-[active=true]:after:text-primary-600",
					],
				}}
			>
				<NavbarContent className="sm:hidden" justify="start">
					<NavbarMenuToggle
						aria-label={isMenuOpen ? "Close menu" : "Open menu"}
					/>
				</NavbarContent>

				<NavbarContent className="sm:hidden pr-3" justify="center">
					<NavbarBrand>
						<p className="font-bold text-inherit">KCP1</p>
					</NavbarBrand>
				</NavbarContent>

				<NavbarContent className="hidden sm:flex gap-4" justify="center">
					<NavbarBrand>
						<p className="font-bold text-inherit">KCP1</p>
					</NavbarBrand>

					{/* ✅ Fixed Navigation */}
					{siteConfig.navItems.map((item, index) => (
						<NavbarItem
							key={`${item.href}-${index}`}
							isActive={pathname === item.href}
						>
							<Link
								href={item.href}
								className={
									pathname == item.href
										? "text-primary-600 font-bold"
										: "text-default-900"
								}
							>
								{item.label}
							</Link>
						</NavbarItem>
					))}
				</NavbarContent>

				<NavbarContent justify="end">
					<NavbarItem className={"space-x-2"}>
						<ThemeSwitch />

						{/* Search Input */}
						<Input
							aria-label="Search"
							classNames={{ inputWrapper: "bg-default-100", input: "text-sm" }}
							endContent={<Kbd className="inline-block">K</Kbd>}
							labelPlacement="outside"
							placeholder="Search..."
							startContent={
								<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
							}
							type="search"
						/>

						{/* Right side button */}
						{data?.user ? (
							// ✅ Redirect to Dashboard when logged in
							<Link href="/dashboard">
								<Button color="warning" variant="flat">
									Dashboard
								</Button>
							</Link>
						) : (
							// ✅ Open Login Modal when not logged in
							<Button onPress={onOpen} color="warning" variant="flat">
								Get Started
							</Button>
						)}
					</NavbarItem>
				</NavbarContent>

				{/* Mobile menu */}
				<NavbarMenu>
					{siteConfig.navItems.map((item, index) => (
						<NavbarMenuItem
							key={`${item.href}-${index}`}
							isActive={pathname === item.href}
						>
							<Link
								href={item.href}
								className={
									pathname == item.href
										? "text-primary-600 font-bold"
										: "text-default-900"
								}
							>
								{item.label}
							</Link>
						</NavbarMenuItem>
					))}
				</NavbarMenu>
			</HeroUINavbar>

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
		</>
	);
};

export default Navbar;

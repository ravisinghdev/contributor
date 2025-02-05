export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "Kendranchal Colony Phase 1 Landing Page",
	description: "Our works that are done by your small contribution...",
	navItems: [
		{
			label: "Home",
			href: "/",
			isActive: "/",
		},
		{
			label: "Why",
			href: "/why",
			isActive: "/why",
		},
		{
			label: "Gallery",
			href: "/gallery",
			isActive: "/gallery",
		},
		{
			label: "About",
			href: "/about",
			isActive: "/about",
		},
	],
	navMenuItems: [
		{
			label: "Profile",
			href: "/profile",
		},
		{
			label: "Dashboard",
			href: "/dashboard",
		},
		{
			label: "Projects",
			href: "/projects",
		},
		{
			label: "Team",
			href: "/team",
		},
		{
			label: "Calendar",
			href: "/calendar",
		},
		{
			label: "Settings",
			href: "/settings",
		},
		{
			label: "Help & Feedback",
			href: "/help-feedback",
		},
		{
			label: "Logout",
			href: "/logout",
		},
	],
	links: {
		dashboard: "/dashboard",
	},
};

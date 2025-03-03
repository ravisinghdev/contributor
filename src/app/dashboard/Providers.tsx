import { SidebarProvider } from "@/src/context/sidebar-context";

interface ILayoutProps {
	children: React.ReactNode;
}

export const Providers = ({ children }: ILayoutProps) => {
	return <SidebarProvider>{children}</SidebarProvider>;
};

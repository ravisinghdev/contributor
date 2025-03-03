import { Providers } from "./Providers";

interface IDashboardLayoutProps {
	children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
	return <Providers>{children}</Providers>;
};

export default DashboardLayout;

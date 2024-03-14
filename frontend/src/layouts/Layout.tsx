import Header from "../components/Header";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-6">{children}</div>
    </div>
  );
};

export default Layout;

interface LayutProps {
    children: React.ReactNode
};

const Layout = ({ children }: LayutProps) => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            {children}
        </div>
    );
};

export default Layout;
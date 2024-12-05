import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex flex-col content-center items-center justify-center min-h-screen p-4 bg-[url('https://img.freepik.com/premium-vector/elearning-concept-laptop-as-book-dark-blue-background-online-education-technology_387612-38.jpg')]">
            {children}
        </div>
    );
}
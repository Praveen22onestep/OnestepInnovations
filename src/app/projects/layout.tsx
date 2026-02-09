import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "What We Solve | One Step Innovations",
    description:
        "Industry-specific AI solutions for manufacturing, FMCG, and supply chain operations.",
};

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

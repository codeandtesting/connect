import type { Metadata } from "next";
import IndustriesContent from "./IndustriesContent";

export const metadata: Metadata = {
    title: "Industry Capabilities | 200+ AI Voice Operations",
    description: "Explore CONEKT's database of 200+ specialized AI voice operations across Healthcare, Real Estate, Automotive, and more. Find the perfect automated workflow for your business.",
    openGraph: {
        title: "CONEKT | Industry Capabilities",
        description: "200+ pre-trained AI operations ready to automate your business phone lines.",
    },
};

export default function IndustriesPage() {
    return <IndustriesContent />;
}

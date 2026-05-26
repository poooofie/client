import { useState } from "react";

import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/sections/HeroSection";
import FeedSection from "../components/sections/FeedSection";
import ExperimentsSection from "../components/sections/ExperimentsSection";
import FailuresSection from "../components/sections/FailuresSection";
import AboutSection from "../components/sections/AboutSection";

export default function Home() {
    const [activeExperiment, setActiveExperiment] =
        useState(null);

    return (
        <div className="flex flex-col">
        <Navbar />

        <HeroSection />

        <FeedSection />

        <ExperimentsSection
            setActiveExperiment={setActiveExperiment}
        />

        <FailuresSection />

        <AboutSection />
        </div>
    );
}
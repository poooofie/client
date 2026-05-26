import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section
        id="home"
        className="min-h-screen flex items-center justify-center"
        >
        <div className="text-center">
            <motion.h1
            className="text-7xl font-serif"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            >
            hi...
            </motion.h1>

            <p className="mt-6 text-zinc-600">
            i build things that make learning feel like play.
            </p>
        </div>
        </section>
    );
}
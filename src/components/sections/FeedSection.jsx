import { motion } from "framer-motion";
import { ARTICLES } from "../../data/articles";

export default function FeedSection() {
    return (
        <section
            id="feed"
            className="pt-40 flex flex-col gap-16"
        >
            <h2 className="text-6xl font-serif">
                feed your mind
            </h2>

            <div className="grid md:grid-cols-2 gap-10">
                {ARTICLES.map((article) => (
                <motion.div
                    key={article.id}
                    whileHover={{ y: -6 }}
                    className="flex flex-col gap-4"
                >
                    <img
                    src={article.image}
                    alt={article.title}
                    className="rounded-2xl"
                    />

                    <div>
                    <p className="text-sm text-[#B8975A]">
                        {article.date}
                    </p>

                    <h3 className="text-3xl font-serif">
                        {article.title}
                    </h3>

                    <p className="text-zinc-600">
                        {article.excerpt}
                    </p>
                    </div>
                </motion.div>
                ))}
            </div>
        </section>
    );
}
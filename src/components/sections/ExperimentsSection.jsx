import { EXPERIMENTS } from "../../data/expreiments";

export default function ExperimentsSection({
    setActiveExperiment,
    }) {
    return (
        <section
            id="experiments"
            className="pt-40 flex flex-col gap-16"
        >
            <h2 className="text-6xl font-serif">
                experiments
            </h2>

            <div className="flex gap-6 overflow-x-auto">
                {EXPERIMENTS.map((exp) => (
                <button
                    key={exp.id}
                    onClick={() => setActiveExperiment(exp)}
                    className="min-w-[260px] p-4 rounded-2xl border"
                >
                    <img
                    src={exp.image}
                    alt={exp.title}
                    className="rounded-xl"
                    />

                    <div className="mt-4">
                    <h3 className="text-2xl font-serif">
                        {exp.title}
                    </h3>

                    <p className="text-sm text-zinc-600">
                        {exp.description}
                    </p>
                    </div>
                </button>
                ))}
            </div>
        </section>
    );
}
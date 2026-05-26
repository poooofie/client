import { FAILURES } from "../../data/failures";

export default function FailuresSection() {
    return (
        <section
            id="failures"
            className="pt-40"
        >
            <h2 className="text-6xl font-serif mb-20">
                failures
            </h2>

            <div className="flex flex-col gap-16">
                {FAILURES.map((failure) => (
                <div key={failure.year}>
                    <h3 className="text-3xl text-[#B8975A]">
                    {failure.year}
                    </h3>

                    <p className="text-zinc-600 mt-2">
                    {failure.text}
                    </p>
                </div>
                ))}
            </div>
        </section>
    );
}
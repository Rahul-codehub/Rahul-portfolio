"use client";

import Reveal from "@/components/Reveal";

const About = () => {
    return (
        <section
            id="about"
            className="py-16 md:py-20"
        >

            <div className="max-w-6xl mx-auto px-4">

                <Reveal>

                    {/* Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
                        About Rahul
                    </h2>

                    {/* Content Card */}
                    <div
                        className="
                        glass
                        rounded-3xl
                        p-8 md:p-10
                        border border-white/10
                        "
                    >

                        <div className="text-gray-300 text-lg leading-relaxed text-justify">
                            <p>
                                I am Rahul Kumar, a B.Tech Computer Science and Engineering student at COER University (graduating in 2027). I specialize in Full-Stack MERN Development and AI Application Engineering, with a strong focus on combining modern web architectures with intelligent AI features
                            </p>

                            <p>
                                My technical stack includes C++, Python, React.js, Node.js, Express.js, MongoDB, LangChain, FAISS, Socket.IO, and Docker. Having gained practical experience as a MERN Stack Developer Intern at Codec Technologies and won recognitions in university hackathons, I enjoy building scalable web platforms, real-time architectures, and RAG/LLM-driven systems. My goal is to advance as an AI Engineer, crafting scalable, high-performance solutions that bridge artificial intelligence with intuitive user experiences.
                            </p>

                        </div>
                    </div>

                </Reveal>

            </div>

        </section>
    );
};

export default About;
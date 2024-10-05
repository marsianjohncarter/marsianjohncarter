const TopSection = () => {
    return (
        <section className="bg-gray-900 pt-10">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <div className="bg-gray-800 border-red-200 border hover:border-red-300 shadow-lg hover:shadow-red-400/40 transition-all ease-in-out duration-300 rounded-lg p-8 md:p-12 mb-8">
                    <h1 className="text-white text-3xl md:text-5xl font-extrabold mb-2">
                        Hello! 
                    </h1>
                    <p className="text-lg font-normal text-gray-400 mb-6">
                        My name is john and I'm a Frontend/Flask Backend/Machine Learning/ developer
                    </p>

                    <a
                        href="#skills"
                        className="inline-flex justify-center items-center transition-all py-2.5 px-5 text-base font-medium text-center text-white rounded-lg bg-red-700 hover:bg-red-800 focus:ring-4  dark:focus:ring-red-900"
                    >
                        Jump to my skills
                        <svg
                            className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 14 10"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M1 5h12m0 0L9 1m4 4L9 9"
                            />
                        </svg>
                    </a>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-gray-800 border border-red-200 hover:border-red-300 shadow-lg hover:shadow-red-400/40 transition-all ease-in-out duration-300 rounded-lg p-8 md:p-12">
                        <a
                            href="#"
                            className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-green-400 mb-2"
                        >
                            <svg
                                className="w-2.5 h-2.5 me-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 18 18"
                            >
                                <path d="M17 11h-2.722L8 17.278a5.512 5.512 0 0 1-.9.722H17a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1ZM6 0H1a1 1 0 0 0-1 1v13.5a3.5 3.5 0 1 0 7 0V1a1 1 0 0 0-1-1ZM3.5 15.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM16.132 4.9 12.6 1.368a1 1 0 0 0-1.414 0L9 3.55v9.9l7.132-7.132a1 1 0 0 0 0-1.418Z" />
                            </svg>
                            Skills
                        </a>
                        <h2 className="text-white text-3xl font-extrabold mb-2">
                            Technical Proficiencies
                        </h2>
                        <p className="text-lg font-normal text-gray-400 mb-4">
                            Discover the technical foundation that drives my
                            work. I possess a strong command of programming
                            languages, frameworks, and tools. My expertise in
                            specific skills allows me to tackle complex
                            challenges and deliver high-quality results.
                        </p>
                        <a
                            href="#"
                            className="text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                    <div className="bg-gray-800 border border-red-200 hover:border-red-300 shadow-lg hover:shadow-red-400/40 transition-all ease-in-out duration-300 rounded-lg p-8 md:p-12">
                        <a
                            href="#"
                            className="text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded-md bg-gray-700 text-purple-400 mb-2"
                        >
                            <svg
                                className="w-2.5 h-2.5 me-1.5"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15"
                                />
                            </svg>
                            Code
                        </a>
                        <h2 className="text-white text-3xl font-extrabold mb-2">
                            Featured Works
                        </h2>
                        <p className="text-lg font-normal text-gray-400 mb-4">
                            Explore the code, learn about the technologies used,
                            and understand the thought process behind my design
                            decisions.
                        </p>
                        <a
                            href="#"
                            className="text-blue-500 hover:underline font-medium text-lg inline-flex items-center"
                        >
                            Read more
                            <svg
                                className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 10"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M1 5h12m0 0L9 1m4 4L9 9"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopSection;

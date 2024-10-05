const skillsDict = {
    Languages: [
        {
            name: "Javascript",
            level: "Advanced",
            percentage: "98",
        },
        {
            name: "Python",
            level: "Advanced",
            percentage: "98",
        },
        {
            name: "CSS",
            level: "Proficient",
            percentage: "95",
        },
        {
            name: "HTML",
            level: "Advanced",
            percentage: "100",
        },
        {
            name: "SASS",
            level: "Familiar",
            percentage: "70",
        },
        {
            name: "Php",
            level: "Not worth noticing",
            percentage: "5",
        },
    ],

    Tools: [
        {
            name: "Git",
            level: "Advanced",
            percentage: "99",
        },
        {
            name: "Github",
            level: "Advanced",
            percentage: "99",
        },
        {
            name: "Vite",
            level: "Advanced",
            percentage: "100",
        },
        {
            name: "Firebase",
            level: "Proficient",
            percentage: "90",
        },
        {
            name: "Render",
            level: "Proficient",
            percentage: "95",
        },
        {
            name: "MongoDB",
            level: "Weak",
            percentage: "20",
        },
    ],

    Libraries: [
        {
            name: "React",
            level: "Advanced",
            percentage: "98",
        },
        {
            name: "Tailwind",
            level: "Advanced",
            percentage: "100",
        },
        {
            name: "Bootstrap",
            level: "Advanced",
            percentage: "100",
        },
        {
            name: "Flask",
            level: "Advanced",
            percentage: "99",
        },
        {
            name: "Numpy",
            level: "Advanced",
            percentage: "97",
        },
        {
            name: "Pandas",
            level: "Advanced",
            percentage: "99",
        },
    ],

    Other: [
        {
            name: "Machine Learning",
            level: "Advanced",
            percentage: "98",
        },
        {
            name: "Deep Learning",
            level: "Advanced",
            percentage: "98",
        },
        {
            name: "Frontend (react + tailwind)",
            level: "proficient",
            percentage: "95",
        },
        {
            name: "Backend (python + flask)",
            level: "proficient",
            percentage: "95",
        },
        {
            name: "Linux",
            level: "Advanced",
            percentage: "97",
        },
        {
            name: "Windows",
            level: "Advanced",
            percentage: "96",
        },
        {
            name: "Vscode",
            level: "Advanced",
            percentage: "98",
        },
    ],
};

const Skills = () => {
    return (
        <>
            <h1 id="skills" class="mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl lg:text-6xl text-white text-center underline underline-offset-3 decoration-8 decoration-red-500 bg-clip-border p-6 bg-gradient-to-r from-stone-700 via-red-500 to-red-400 border border-red-500 rounded-lg hover:shadow-lg hover:shadow-red-400 transition-all duration-300 py-8 px-4 mx-auto max-w-screen-xl lg:py-16">Skills</h1>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                <View skills={skillsDict} />
            </div>
        </>
    );
};


const View = ({ skills }) => {
    return (
        <>
            {Object.keys(skills).map((key, index) => (
                <div
                    key={index}
                    className="w-full max-w-md p-4 rounded-lg sm:p-8 bg-gray-800 border-red-200 border hover:border-red-300 shadow-xl hover:shadow-red-400 transition-all ease-in-out duration-300"
                >
                    <div className="flex items-center justify-between mb-4">
                        <h5 className="text-xl font-bold leading-none text-white">
                            {key}
                        </h5>
                    </div>
                    <div class="flow-root">
                        <ul
                            role="list"
                            className="divide-y divide-gray-700"
                        >
                            {skills[key].map((skill, index) => (
                                <li key={index} className="py-3 sm:py-4">
                                    <div className="flex items-center ">
                                        <div className="flex-shrink-0">
                                            <img
                                                className="w-8 h-8 rounded-full"
                                                src="/docs/images/people/profile-picture-5.jpg"
                                                alt="Thomas image"
                                            />
                                        </div>
                                        <div className="flex-1 min-w-0 m-2">
                                            <p className="text-sm font-medium truncate text-white">
                                                {skill.name} - {skill.level}
                                            </p>
                                            <div className="w-full  rounded-full h-2.5 mb-4 mt-4 bg-gray-700">
                                                <div
                                                    className={"h-2.5 rounded-full bg-green-500 " + (+skill.percentage > 85 ? "bg-green-600 " : +skill.percentage > 60 && +skill.percentage < 70 ? "bg-yellow-200 " : +skill.percentage > 50 ? "bg-yellow-500 " : "bg-red-500 ")}
                                                    style={{ width: `${skill.percentage}%` }}
                                                />
                                            </div>
                                            <p className="text-sm truncate text-gray-400">
                                                {skill.level}
                                            </p>
                                        </div>
                                        <div className="inline-flex items-center text-base font-semibold text-white">
                                            {skill.percentage}%
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Skills;

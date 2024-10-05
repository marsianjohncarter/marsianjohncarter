const Footer = () => {
    return (
        <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024{" "}
                    <a href="https://flowbite.com/" className="link transition-all ease-in-out duration-300">
                        marsianjohncarter
                    </a>
                    . All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="#" className="me-4 md:me-6 link transition-all ease-in-out duration-300">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="#" className="me-4 md:me-6 link transition-all ease-in-out duration-300">
                            Privacy Policy
                        </a>
                    </li>
                    <li>
                        <a href="#" className="me-4 md:me-6 link transition-all ease-in-out duration-300">
                            Licensing
                        </a>
                    </li>
                    <li>
                        <a href="#" className="link transition-all ease-in-out duration-300">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;

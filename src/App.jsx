import { useState } from "react";
import NavBar from "./components/navbar/navbar.jsx";
import TopSection from "./components/topSection/topSection.jsx";
import Footer from "./components/footer/footer.jsx";
import Skills from "./components/skills/skills.jsx";

import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <TopSection />
            <Skills />
            <Footer />
        </>
    );
}

export default App;

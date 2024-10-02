import { useState } from "react";
import NavBar from "./components/navbar/navbar.jsx";
import TopSection from "./components/topSection/topSection.jsx";


import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <NavBar />
            <TopSection />
            <div className="h-[5000px] w-full bg-black"></div>
        </>
    );
}

export default App;

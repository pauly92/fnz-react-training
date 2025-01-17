import React from "react";
import { useNavigate } from "react-router-dom";

const About: React.FC = () => {
    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate("/contact");
    };

    return (
    <div>
        <h1>About This Project</h1>
        <button onClick={handleNavigate}>Need more info? Contact us!</button>
    </div>
    );
};

export default About;

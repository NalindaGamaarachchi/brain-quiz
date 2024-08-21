import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const Home = () => {
  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="container">
      <h1>Welcome to the Brain Quiz</h1>
      <button onClick={startQuiz}>Take the Quiz</button>
    </div>
  );
};

export default Home;

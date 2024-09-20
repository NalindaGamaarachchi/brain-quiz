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
      <h1>欢迎参加大脑测试</h1>
      <button onClick={startQuiz}>参加测试</button>
    </div>
  );
};

export default Home;

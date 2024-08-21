import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const questions = [
  "ORGANIZATION IS EXCELLENT.",
  "GET EASILY DISTRACTED.",
  "ATTENTION SPAN IS POOR.",
  "IT IS EASY TO BE PATIENT AND WAIT IN LINE.",
  "LOSE TRAIN OF THOUGHT RIGHT IN THE MIDDLE OF TALKING ABOUT SOMETHING.",
  "HAVE TROUBLE DELAYING GRATIFICATION.",
  "STRUGGLE WITH MEMORY.",
  "MEMORY IS WORSE THAN IT WAS 10 YEARS AGO.",
  "HAVE TROUBLE REMEMBERING NAMES.",
  "EXERCISE MORE THAN TWICE PER WEEK.",
  "GET AT LEAST 7-8 HOURS OF SLEEP A DAY.",
  "DIET TENDS TO BE POOR AND HAPHAZARD.",
  "DRINK MORE THAN 2 NORMAL SIZE (8 OUNCES) CUPS OF COFFEE A DAY.",
  "DRINK SUGAR SWEETENED SODA EVERY DAY.",
  "HAVE MORE THAN 4 NORMAL SIZE ALCOHOLIC DRINKS EACH WEEK.",
  "SMOKE CIGARETTES OR CIGARS OR EXPOSED TO SECONDHAND SMOKE.",
  "SPEND MORE THAN AN HOUR A DAY WATCHING TV.",
  "HAVE TROUBLE GETTING AND STAYING ASLEEP.",
  "UNDER HIGH STRESS AT WORK OR HOME.",
  "CLOSE RELATIONSHIPS ARE HEALTHY AND SATISFYING.",
  "INVOLVED IN NEW LEARNING ACTIVITIES OR BRAIN TRAINING GAMES.",
  "TEND TO NOTICE WHAT IS WRONG MORE THAN WHAT IS RIGHT.",
  "TEND TO BE ARGUMENTATIVE OR OPPOSITIONAL.",
  "THOUGHTS TEND TO LOOP AND GET STUCK IN MIND.",
  "STRUGGLE WITH FEELING SAD OR BLUE.",
  "STRUGGLE WITH WORRY.",
  "HAVE TROUBLE LETTING GO OF HURTS FROM THE PAST.",
  "THOUGHTS ARE NEGATIVE.",
  "SELF-ESTEEM IS REALLY GOOD.",
  "HAVE TROUBLE EXPERIENCING JOY.",
  "TEND TO TAKE THINGS THE WRONG WAY.",
  "HAVE DIFFICULTY RELAXING.",
  "TENDENCY TO PREDICT THE WORST.",
  "SENSITIVE TO CRITICISM.",
  "BITE FINGERNAILS OR PICK AT SKIN.",
  "FEEL TENSE OR NERVOUS.",
  "ENERGY LEVEL MOST DAYS IS EXCELLENT.",
  "STRUGGLE WITH CRAVINGS.",
];

const Quiz = () => {
  const [responses, setResponses] = useState(Array(38).fill(0));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleResponse = (value) => {
    const newResponses = [...responses];
    newResponses[currentQuestion] = value;
    setResponses(newResponses);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      navigate("/result", { state: { responses: newResponses } });
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container">
      <div className="wrapper">
        <h2>{questions[currentQuestion]}</h2>
        <div style={{ marginTop: "20px" }}>
          <button onClick={() => handleResponse(1)}>Never</button>
          <button onClick={() => handleResponse(2)}>Rarely</button>
          <button onClick={() => handleResponse(3)}>Occasionally</button>
          <button onClick={() => handleResponse(4)}>Frequently</button>
          <button onClick={() => handleResponse(5)}>Very Frequently</button>
        </div>
      </div>
      <div id="progress-bar">
        <div id="progress">
          <div style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;

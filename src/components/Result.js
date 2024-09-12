import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const determineBrainType = (responses) => {
  // Helper function to calculate total score in each question range
  const calculateSectionScore = (start, end) => {
    return responses.slice(start, end).reduce((sum, val) => sum + val, 0);
  };

  // Calculate the total scores for each section
  const flexibleThinkingScore = calculateSectionScore(0, 10); // Q1-10
  const focusImpulseControlScore = calculateSectionScore(10, 20); // Q11-20
  const moodConcernsScore = calculateSectionScore(20, 30); // Q21-30
  const stressAnxietyScore = calculateSectionScore(30, 39); // Q31-39

  // Define thresholds for brain types based on weighted scores
  const brainTypeScores = [
    {
      type: "Brain Type 1: Compulsive",
      thresholds: { flexibleThinking: 25 },
    },
    {
      type: "Brain Type 2: Impulsive",
      thresholds: { focusImpulseControl: 25 },
    },
    {
      type: "Brain Type 3: SAD",
      thresholds: { moodConcerns: 25 },
    },
    {
      type: "Brain Type 4: Anxious",
      thresholds: { stressAnxiety: 25 },
    },
    {
      type: "Brain Type 5: Impulsive-Compulsive",
      thresholds: { flexibleThinking: 20, focusImpulseControl: 20 },
    },
    {
      type: "Brain Type 6: Compulsive-SAD",
      thresholds: { flexibleThinking: 20, moodConcerns: 20 },
    },
    {
      type: "Brain Type 7: Compulsive-Anxious",
      thresholds: { flexibleThinking: 20, stressAnxiety: 20 },
    },
    {
      type: "Brain Type 8: Compulsive-SAD-Anxious",
      thresholds: {
        flexibleThinking: 15,
        moodConcerns: 15,
        stressAnxiety: 15,
      },
    },
    {
      type: "Brain Type 9: Impulsive-SAD",
      thresholds: { focusImpulseControl: 20, moodConcerns: 20 },
    },
    {
      type: "Brain Type 10: Impulsive-Anxious",
      thresholds: { focusImpulseControl: 20, stressAnxiety: 20 },
    },
    {
      type: "Brain Type 11: Impulsive-SAD-Anxious",
      thresholds: {
        focusImpulseControl: 15,
        moodConcerns: 15,
        stressAnxiety: 15,
      },
    },
    {
      type: "Brain Type 12: Impulsive-Compulsive-SAD",
      thresholds: {
        flexibleThinking: 15,
        focusImpulseControl: 15,
        moodConcerns: 15,
      },
    },
    {
      type: "Brain Type 13: Impulsive-Compulsive-Anxious",
      thresholds: {
        flexibleThinking: 15,
        focusImpulseControl: 15,
        stressAnxiety: 15,
      },
    },
    {
      type: "Brain Type 14: Impulsive-Compulsive-SAD-Anxious",
      thresholds: {
        flexibleThinking: 10,
        focusImpulseControl: 10,
        moodConcerns: 10,
        stressAnxiety: 10,
      },
    },
    {
      type: "Brain Type 15: SAD-Anxious",
      thresholds: { moodConcerns: 20, stressAnxiety: 20 },
    },
  ];

  // Compare the user's scores to the thresholds to determine the closest match
  let bestMatch = "Brain Type 16: No Specific Type";
  let highestScore = 0;

  brainTypeScores.forEach((brainType) => {
    const { thresholds, type } = brainType;
    let confidenceScore = 0;

    if (
      thresholds.flexibleThinking &&
      flexibleThinkingScore >= thresholds.flexibleThinking
    )
      confidenceScore += 1;
    if (
      thresholds.focusImpulseControl &&
      focusImpulseControlScore >= thresholds.focusImpulseControl
    )
      confidenceScore += 1;
    if (thresholds.moodConcerns && moodConcernsScore >= thresholds.moodConcerns)
      confidenceScore += 1;
    if (
      thresholds.stressAnxiety &&
      stressAnxietyScore >= thresholds.stressAnxiety
    )
      confidenceScore += 1;

    if (confidenceScore > highestScore) {
      highestScore = confidenceScore;
      bestMatch = type;
    }
  });

  return bestMatch;
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { responses } = location.state;

  const brainType = determineBrainType(responses);

  // Calculate the total score and convert it to a percentage
  const totalScore = responses.reduce((a, b) => a + b, 0);
  const maxScore = 39 * 5;
  const scorePercentage = Math.round((totalScore / maxScore) * 100);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f4f4f9",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
          maxWidth: "500px",
          width: "100%",
        }}
      >
        <h1
          style={{ color: "#4CAF50", fontSize: "2.5rem", marginBottom: "10px" }}
        >
          Your Brain Type
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#333", marginBottom: "20px" }}>
          {brainType}
        </p>
        <h2 style={{ color: "#333", fontSize: "1.5rem", marginBottom: "20px" }}>
          Your Score
        </h2>
        <p
          style={{
            fontSize: "2rem",
            color: "#333",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Total: {scorePercentage}%
        </p>
        <button
          onClick={() => navigate("/")}
          style={{
            backgroundColor: "#6fa8dc",
            border: "none",
            color: "white",
            padding: "15px 30px",
            borderRadius: "25px",
            fontSize: "16px",
            cursor: "pointer",
            transition: "background-color 0.3s, transform 0.2s",
            marginTop: "20px",
          }}
        >
          Take the Quiz Again
        </button>
      </div>
    </div>
  );
};

export default Result;

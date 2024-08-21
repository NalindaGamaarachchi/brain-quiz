import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const determineBrainType = (responses) => {
  // Calculate category scores based on question groups
  let memoryScore = responses.slice(6, 9).reduce((a, b) => a + b, 0);
  let executiveFunctionScore = responses.slice(0, 3).reduce((a, b) => a + b, 0);
  let attentionScore = responses.slice(1, 4).reduce((a, b) => a + b, 0);
  let emotionalRegulationScore = responses
    .slice(24, 36)
    .reduce((a, b) => a + b, 0);
  let problemSolvingScore = responses.slice(21, 24).reduce((a, b) => a + b, 0);
  let creativityScore = responses.slice(28, 30).reduce((a, b) => a + b, 0);
  let healthHabitsScore = responses.slice(9, 21).reduce((a, b) => a + b, 0);

  // Normalize the scores
  const maxScorePerCategory = 15;
  const memoryPercentage = (memoryScore / maxScorePerCategory) * 100;
  const executiveFunctionPercentage =
    (executiveFunctionScore / maxScorePerCategory) * 100;
  const attentionPercentage = (attentionScore / maxScorePerCategory) * 100;
  const emotionalRegulationPercentage = (emotionalRegulationScore / 60) * 100;
  const problemSolvingPercentage =
    (problemSolvingScore / maxScorePerCategory) * 100;
  const creativityPercentage = (creativityScore / maxScorePerCategory) * 100;
  const healthHabitsPercentage = (healthHabitsScore / 65) * 100;

  // Logic to determine brain type based on score ranges
  if (memoryPercentage > 75 && executiveFunctionPercentage > 75) {
    return "Brain Type 2: Strong Memory and Executive Function";
  } else if (creativityPercentage > 75 && problemSolvingPercentage > 75) {
    return "Brain Type 3: Creative Problem-Solver";
  } else if (emotionalRegulationPercentage > 75 && attentionPercentage > 75) {
    return "Brain Type 4: Emotionally Intelligent";
  } else if (healthHabitsPercentage > 75 && executiveFunctionPercentage > 75) {
    return "Brain Type 5: Health-Conscious Executive";
  } else if (memoryPercentage < 40 && emotionalRegulationPercentage < 40) {
    return "Brain Type 6: Memory-Focused with Emotional Challenges";
  } else if (attentionPercentage > 75 && problemSolvingPercentage > 75) {
    return "Brain Type 7: Detail-Oriented Problem-Solver";
  } else if (executiveFunctionPercentage > 75 && creativityPercentage > 75) {
    return "Brain Type 8: Executive Innovator";
  } else if (creativityPercentage > 75 && emotionalRegulationPercentage < 50) {
    return "Brain Type 9: Creative but Emotionally Volatile";
  } else if (
    memoryPercentage < 40 &&
    executiveFunctionPercentage < 40 &&
    healthHabitsPercentage < 40
  ) {
    return "Brain Type 10: Needs Cognitive and Health Improvements";
  } else if (problemSolvingPercentage > 75 && attentionPercentage < 40) {
    return "Brain Type 11: Strategic Thinker with Attention Challenges";
  } else if (attentionPercentage > 75 && executiveFunctionPercentage > 75) {
    return "Brain Type 12: Highly Focused Executive";
  } else if (
    creativityPercentage < 50 &&
    emotionalRegulationPercentage < 50 &&
    healthHabitsPercentage > 75
  ) {
    return "Brain Type 13: Health-Oriented with Creative and Emotional Challenges";
  } else if (memoryPercentage > 75 && emotionalRegulationPercentage > 75) {
    return "Brain Type 14: Emotionally Resilient with Strong Memory";
  } else if (attentionPercentage < 50 && healthHabitsPercentage > 75) {
    return "Brain Type 15: Health-Conscious but Easily Distracted";
  }

  const minScore = Math.min(
    memoryPercentage,
    executiveFunctionPercentage,
    attentionPercentage,
    emotionalRegulationPercentage,
    problemSolvingPercentage,
    creativityPercentage,
    healthHabitsPercentage
  );
  const maxScore = Math.max(
    memoryPercentage,
    executiveFunctionPercentage,
    attentionPercentage,
    emotionalRegulationPercentage,
    problemSolvingPercentage,
    creativityPercentage,
    healthHabitsPercentage
  );
  const isBalanced = maxScore - minScore <= 20; // Adjusted balance threshold

  if (isBalanced) {
    return "Brain Type 16: Balanced Brain Across All Categories";
  }

  return "Brain Type Unknown";
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { responses } = location.state;

  const brainType = determineBrainType(responses);

  // Calculate the total score and convert it to a percentage
  const totalScore = responses.reduce((a, b) => a + b, 0);
  const maxScore = 38 * 5;
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

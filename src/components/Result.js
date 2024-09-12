import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

const determineBrainType = (responses) => {
  const countSevereResponsesInRange = (start, end) => {
    return responses.slice(start, end).filter((val) => val >= 4).length;
  };

  const countModerateResponsesInRange = (start, end) => {
    return responses.slice(start, end).filter((val) => val >= 3).length;
  };

  const flexibleThinkingSevere = countSevereResponsesInRange(0, 10);
  const focusImpulseControlSevere = countSevereResponsesInRange(10, 20);
  const moodConcernsSevere = countSevereResponsesInRange(20, 30);
  const stressAnxietySevere = countSevereResponsesInRange(30, 39);

  const flexibleThinkingModerate = countModerateResponsesInRange(0, 10);
  const focusImpulseControlModerate = countModerateResponsesInRange(10, 20);
  const moodConcernsModerate = countModerateResponsesInRange(20, 30);
  const stressAnxietyModerate = countModerateResponsesInRange(30, 39);

  // High priority combinations (3 or more severe responses)
  if (
    flexibleThinkingSevere >= 3 &&
    focusImpulseControlSevere >= 3 &&
    moodConcernsSevere >= 3 &&
    stressAnxietySevere >= 3
  ) {
    return "Brain Type 14: Impulsive-Compulsive-SAD-Anxious (High Severity)";
  }
  if (
    flexibleThinkingSevere >= 3 &&
    focusImpulseControlSevere >= 3 &&
    stressAnxietySevere >= 3
  ) {
    return "Brain Type 13: Impulsive-Compulsive-Anxious (High Severity)";
  }
  if (
    flexibleThinkingSevere >= 3 &&
    focusImpulseControlSevere >= 3 &&
    moodConcernsSevere >= 3
  ) {
    return "Brain Type 12: Impulsive-Compulsive-SAD (High Severity)";
  }
  if (
    focusImpulseControlSevere >= 3 &&
    moodConcernsSevere >= 3 &&
    stressAnxietySevere >= 3
  ) {
    return "Brain Type 11: Impulsive-SAD-Anxious (High Severity)";
  }

  // Moderate combinations (2 or more moderate responses)
  if (
    flexibleThinkingModerate >= 2 &&
    moodConcernsModerate >= 2 &&
    stressAnxietyModerate >= 2
  ) {
    return "Brain Type 8: Compulsive-SAD-Anxious (Moderate Severity)";
  }
  if (flexibleThinkingModerate >= 2 && stressAnxietyModerate >= 2) {
    return "Brain Type 7: Compulsive-Anxious (Moderate Severity)";
  }
  if (focusImpulseControlModerate >= 2 && stressAnxietyModerate >= 2) {
    return "Brain Type 10: Impulsive-Anxious (Moderate Severity)";
  }
  if (focusImpulseControlModerate >= 2 && moodConcernsModerate >= 2) {
    return "Brain Type 9: Impulsive-SAD (Moderate Severity)";
  }

  // Single category conditions
  if (flexibleThinkingModerate >= 2) {
    return "Brain Type 1: Compulsive (Moderate)";
  }
  if (focusImpulseControlModerate >= 2) {
    return "Brain Type 2: Impulsive (Moderate)";
  }
  if (moodConcernsModerate >= 2) {
    return "Brain Type 3: SAD (Moderate)";
  }
  if (stressAnxietyModerate >= 2) {
    return "Brain Type 4: Anxious (Moderate)";
  }

  // Default type if none of the conditions are met
  return "Brain Type 16: No Specific Type";
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

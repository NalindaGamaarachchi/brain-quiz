import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

// Define brain type descriptions and improvements based on the PDF
const brainTypeDetails = {
  "Brain Type 1: Compulsive": {
    details: [
      "Struggle with cognitive inflexibility and getting stuck on thoughts.",
      "Trouble shifting attention and seeing options.",
    ],
    improvements: ["Exercise.", "Higher carbohydrate diet."],
  },
  "Brain Type 2: Impulsive": {
    details: [
      "Decreased activity in the prefrontal cortex leading to impulsivity.",
      "Struggle with controlling behavior, attention, and focus.",
    ],
    improvements: ["Structured goal setting.", "High-quality protein diet."],
  },
  "Brain Type 3: SAD": {
    details: [
      "Increased activity in the deep limbic system leading to feelings of sadness.",
      "Tendency to use food or substances to medicate sadness.",
    ],
    improvements: [
      "Learn how to kill ANTs (automatic negative thoughts).",
      "Balanced diet with protein and complex carbohydrates.",
    ],
  },
  "Brain Type 4: Anxious": {
    details: [
      "Increased activity in the basal ganglia, causing anxiety and tension.",
      "Physical symptoms like muscle tension and headaches.",
    ],
    improvements: [
      "Meditation and diaphragmatic breathing.",
      "Supplements like GABA and magnesium.",
    ],
  },
  "Brain Type 5: Impulsive-Compulsive": {
    details: [
      "Combination of impulsive and compulsive traits, with struggles in behavior control.",
      "Tend to have issues controlling thoughts and behavior.",
    ],
    improvements: [
      "Structured goal setting.",
    ],
  },
  "Brain Type 6: Compulsive-SAD": {
    details: [
      "Compulsive tendencies with feelings of sadness and low self-esteem.",
      "Get stuck on depressive or anxious thoughts.",
    ],
    improvements: [
      "Kill ANTs (automatic negative thoughts).",
      "Intense exercise and serotonin boosters.",
    ],
  },
  "Brain Type 7: Compulsive-Anxious": {
    details: [
      "Combination of anxiety and compulsive traits.",
      "Overactivity in the basal ganglia leads to excessive worry.",
    ],
    improvements: [
      "Meditation and hypnosis.",
      "Supplements like serotonin and GABA boosters.",
    ],
  },
  "Brain Type 8: Compulsive-SAD-Anxious": {
    details: [
      "Combination of compulsive, sad, and anxious traits.",
      "Struggle with cognitive inflexibility and worrisome thoughts.",
    ],
    improvements: [
      "Kill ANTs (automatic negative thoughts).",
      "Supplements to boost serotonin, dopamine, and GABA.",
    ],
  },
  "Brain Type 9: Impulsive-SAD": {
    details: [
      "Combination of impulsivity and mood concerns.",
      "Struggle with impulse control and feelings of sadness.",
    ],
    improvements: [
      "Structured goal setting.",
      "Supplements like green tea and SAMe.",
    ],
  },
  "Brain Type 10: Impulsive-Anxious": {
    details: [
      "Combination of impulsive behavior and anxiety.",
      "Experience physical symptoms like muscle tension and headaches.",
    ],
    improvements: [
      "Meditation and diaphragmatic breathing.",
      "Supplements to boost dopamine and GABA.",
    ],
  },
  "Brain Type 11: Impulsive-SAD-Anxious": {
    details: [
      "Combination of impulsive behavior, sadness, and anxiety.",
      "Struggle with controlling behavior and mood.",
    ],
    improvements: [
      "Structured goal setting.",
      "Supplements like green tea and GABA.",
    ],
  },
  "Brain Type 12: Impulsive-Compulsive-SAD": {
    details: [
      "Combination of impulsive, compulsive, and sad traits.",
      "Struggle with shifting attention and getting stuck on negative thoughts.",
    ],
    improvements: [
      "Structured goal setting.",
      "Supplements like green tea and 5HTP.",
    ],
  },
  "Brain Type 13: Impulsive-Compulsive-Anxious": {
    details: [
      "Combination of impulsive, compulsive, and anxious traits.",
      "Struggle with controlling thoughts and behaviors.",
    ],
    improvements: [
      "Meditation and diaphragmatic breathing.",
      "Supplements like green tea and saffron.",
    ],
  },
  "Brain Type 14: Impulsive-Compulsive-SAD-Anxious": {
    details: [
      "Complex mix of impulsive, compulsive, sad, and anxious traits.",
      "Struggle with both thought and behavior control.",
    ],
    improvements: [
      "Structured goal setting.",
      "Supplements like 5HTP and GABA.",
    ],
  },
  "Brain Type 15: SAD-Anxious": {
    details: [
      "Combination of mood-related concerns and anxiety.",
      "Feelings of depression and anxiety with physical symptoms.",
    ],
    improvements: [
      "Kill ANTs (automatic negative thoughts).",
      "Supplements like SAMe and GABA.",
    ],
  },
  "Brain Type 16: No Specific Type": {
    details: [
      "No specific brain type identified due to low tendencies.",
      "Consider reassessing the answers or reviewing with someone close.",
    ],
    improvements: [
      "Follow general brain health improvement strategies.",
      "Balanced diet and exercise for overall brain health.",
    ],
  },
};

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

  // Updated logic with more granular score thresholds
  if (
    flexibleThinkingScore >= 38 &&
    focusImpulseControlScore >= 38 &&
    moodConcernsScore >= 35 &&
    stressAnxietyScore >= 35
  ) {
    return "Brain Type 14: Impulsive-Compulsive-SAD-Anxious"; // Reserved for very high responses like 'Very Frequently'
  } else if (
    flexibleThinkingScore >= 30 &&
    focusImpulseControlScore >= 30 &&
    moodConcernsScore >= 25 &&
    stressAnxietyScore >= 25
  ) {
    return "Brain Type 5: Impulsive-Compulsive"; // "Frequently" with moderate scores
  } else if (
    focusImpulseControlScore >= 30 &&
    moodConcernsScore >= 25 &&
    stressAnxietyScore >= 25
  ) {
    return "Brain Type 9: Impulsive-SAD"; // Differentiates "Frequently" and "Very Frequently"
  } else if (focusImpulseControlScore >= 30 && stressAnxietyScore >= 30) {
    return "Brain Type 10: Impulsive-Anxious";
  } else if (flexibleThinkingScore >= 30) {
    return "Brain Type 1: Compulsive";
  } else if (focusImpulseControlScore >= 30) {
    return "Brain Type 2: Impulsive";
  } else if (moodConcernsScore >= 30) {
    return "Brain Type 3: SAD";
  } else if (stressAnxietyScore >= 30) {
    return "Brain Type 4: Anxious";
  }

  // Add logic for lower score ranges (moderate responses like 'Occasionally')
  if (
    flexibleThinkingScore >= 20 &&
    focusImpulseControlScore >= 20 &&
    moodConcernsScore >= 20 &&
    stressAnxietyScore >= 20
  ) {
    return "Brain Type 12: Impulsive-Compulsive-SAD";
  } else if (focusImpulseControlScore >= 20 && moodConcernsScore >= 20) {
    return "Brain Type 11: Impulsive-SAD-Anxious";
  } else if (flexibleThinkingScore >= 20 && stressAnxietyScore >= 20) {
    return "Brain Type 7: Compulsive-Anxious";
  }

  // Fallback for when scores are very low (Rarely, Occasionally)
  return "Brain Type 16: No Specific Type";
};



const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { responses } = location.state;

  // Fix score calculation: total score and percentage
  const totalScore = responses.reduce((a, b) => a + b, 0);
  const maxScore = 39 * 5; // 39 questions, max score of 5 for each question
  const scorePercentage = Math.round((totalScore / maxScore) * 100);

  const brainType = determineBrainType(responses);
  const brainTypeInfo = brainTypeDetails[brainType] || {
    details: ["No details available for this brain type."],
    improvements: ["No improvement suggestions available."],
  };

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
        <h3>Characteristics</h3>
        <ul style={{ textAlign: "left" }}>
          {brainTypeInfo.details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
        <h3>Action Plan</h3>
        <ul style={{ textAlign: "left" }}>
          {brainTypeInfo.improvements.map((improvement, index) => (
            <li key={index}>{improvement}</li>
          ))}
        </ul>
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

import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

// Define brain type descriptions based on the PDF
const brainTypeDescriptions = {
  "Brain Type 1: Compulsive": `
    People with this brain type have increased activity in the front part of the brain, particularly in the anterior cingulate gyrus. 
    They tend to have trouble shifting attention, get stuck on worrisome or anxious thoughts, and struggle with cognitive inflexibility.`,

  "Brain Type 2: Impulsive": `
    Impulsive individuals often have decreased activity in the prefrontal cortex (PFC), associated with low dopamine levels. 
    They struggle with controlling their behavior, attention span, and tend to be disorganized or impulsive.`,

  "Brain Type 3: SAD": `
    This type is linked to mood concerns and often shows increased activity in the limbic areas of the brain. 
    People may struggle with feelings of sadness, depression, low self-esteem, and may experience physical symptoms such as fatigue or pain.`,

  "Brain Type 4: Anxious": `
    Anxious individuals tend to have increased activity in the basal ganglia, associated with feelings of fear, tension, and nervousness. 
    They often experience physical symptoms like muscle tension, headaches, or palpitations.`,

  "Brain Type 5: Impulsive-Compulsive": `
    This type combines both impulsive and compulsive characteristics, with increased anterior cingulate gyrus activity and decreased PFC activity. 
    People with this type may struggle with controlling both their behavior and their thoughts.`,

  "Brain Type 6: Compulsive-SAD": `
    A combination of compulsive and mood-related tendencies, with increased anterior cingulate and limbic system activity. 
    These individuals often get stuck on anxious or depressive thoughts and may have low self-esteem or feelings of hopelessness.`,

  "Brain Type 7: Compulsive-Anxious": `
    This type combines compulsive and anxious characteristics, often showing increased anterior cingulate gyrus and basal ganglia activity. 
    They tend to worry excessively and may have trouble letting go of fearful thoughts.`,

  "Brain Type 8: Compulsive-SAD-Anxious": `
    This type exhibits a mix of compulsive, sad, and anxious traits. They may struggle with shifting their attention and get stuck in worrisome, depressive, or anxious thoughts.`,

  "Brain Type 9: Impulsive-SAD": `
    A combination of impulsive behavior and mood concerns, characterized by low activity in the PFC and increased activity in the limbic areas. 
    Individuals may feel sadness or low self-esteem while struggling with impulse control.`,

  "Brain Type 10: Impulsive-Anxious": `
    Impulsive behavior combined with anxiety, characterized by low dopamine levels and overactivity in the basal ganglia. 
    Individuals may feel tense or nervous and struggle with controlling impulses.`,

  "Brain Type 11: Impulsive-SAD-Anxious": `
    A combination of impulsive, sad, and anxious traits. People with this type struggle with controlling behavior and may feel anxious, sad, or depressed.`,

  "Brain Type 12: Impulsive-Compulsive-SAD": `
    People with this type have a combination of impulsive, compulsive, and mood-related traits. 
    They may get stuck on compulsive thoughts while struggling with feelings of sadness or low impulse control.`,

  "Brain Type 13: Impulsive-Compulsive-Anxious": `
    This type shows a mix of impulsive, compulsive, and anxious behavior. 
    These individuals often struggle with controlling their thoughts and behavior, especially under stress.`,

  "Brain Type 14: Impulsive-Compulsive-SAD-Anxious": `
    A complex brain type showing characteristics of impulsivity, compulsivity, mood issues, and anxiety. 
    People with this type often struggle with controlling both thoughts and behavior while feeling anxious or sad.`,

  "Brain Type 15: SAD-Anxious": `
    Individuals with this type experience a combination of mood-related concerns and anxiety. 
    They may feel depressed or anxious, and often experience physical symptoms like muscle tension or fatigue.`,

  "Brain Type 16: No Specific Type": `
    No specific brain type identified, but this may suggest the individual does not show significant tendencies in any particular category. 
    It might be useful to re-evaluate the answers with someone who knows the individual well.`,
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
  const brainTypeDescription = brainTypeDescriptions[brainType];

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
        <p
          style={{
            fontSize: "1.25rem",
            color: "#666",
            marginTop: "20px",
          }}
        >
          {brainTypeDescription}
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

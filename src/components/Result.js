import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

// Define brain type descriptions and improvements
const brainTypeDetails = {
  "Brain Type 1: Compulsive": {
    spectFindings: [
      "Increased activity in the front part of the brain, especially in an area called the anterior cingulate gyrus which is thought of as the brain’s gear shifter.",
      "Commonly associated with low levels of the neurotransmitter serotonin.",
    ],
    characteristics: [
      "Have trouble shifting their attention.",
      "Tend to get stuck on worrisome thoughts, anxious or depressing thoughts, thoughts of food, or compulsive behaviors.",
      "Tend to get stuck or locked into one course of action.",
      "Tend to have trouble seeing options.",
      "Want to have things their way.",
      "Struggle with cognitive inflexibility.",
      "Tend to see too many errors in themselves and others.",
      "Tend to hold grudges.",
      "Have problems with oppositional or argumentative behavior.",
      "Nighttime-eating syndrome: tend to gorge at night and not be hungry early in the day.",
    ],
    actionPlan: [
      "Learn how to distract yourself when you get a thought in your head more than three times.",
      "Intense exercise.",
      "A higher complex carbohydrate diet.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Natural ways to boost serotonin, such as exercise, complex carbohydrates, and dietary supplements such as 5HTP, inositol and saffron, the combination of which can be found in Serotonin Mood Support.",
    ],
  },
  "Brain Type 2: Impulsive": {
    spectFindings: [
      "Decreased activity in the PFC, which is commonly associated with low brain dopamine levels.",
    ],
    characteristics: [
      "Struggle with impulsivity and trouble controlling their behavior, even though they may start each day with good intentions.",
      "Results from too little activity in the brain’s prefrontal cortex (PFC) - low dopamine levels in the brain.",
      "Being inattentive, distracted, bored, off task, and impulsive.",
      "Often seen in people who have ADD/ADHD.",
      "Associated with longstanding issues of short attention span, distractibility, disorganization, restlessness, and impulsivity.",
    ],
    actionPlan: [
      "Structured goal setting.",
      "Intense exercise.",
      "A higher high-quality protein diet.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Natural ways to boost dopamine include intense exercise, highly interesting activities, and dietary supplements such as green tea, rhodiola and ashwagandha, found in Focus & Energy Optimizer.",
    ],
  },
  "Brain Type 3: Sad or Emotional": {
    spectFindings: [
      "Increased activity in the deep limbic areas of the brain.",
      "Decreased activity in the PFC, commonly associated with low brain dopamine or norepinephrine levels.",
    ],
    characteristics: [
      "Tend to use food or other substances to medicate underlying feelings of sadness and to calm the emotional storms in their brains.",
      "Often struggle with feelings of boredom, loneliness, depression, low self-esteem, and pain issues.",
      "May experience decreased libido, periods of crying, low energy levels, and lack of interest in usually pleasurable activities.",
      "Struggle with feelings of guilt, helplessness, hopelessness, or worthlessness.",
      "For some, feelings come and go with the seasons and tend to worsen in winter.",
      "Experience mild feelings of chronic sadness, called dysthymia.",
      "Suffer from more serious depressions.",
      "More commonly seen in women.",
    ],
    actionPlan: [
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Intense exercise.",
      "A balanced diet between protein and complex carbohydrates.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplement such as SAMe found in SAMe Mood & Movement Support.",
    ],
  },
  "Brain Type 4: Anxious": {
    spectFindings: [
      "Increased activity in the basal ganglia, which is commonly caused by low levels of the calming neurotransmitter GABA.",
    ],
    characteristics: [
      "Tend to use food or other substances to medicate underlying feelings of anxiety, tension, nervousness, and fear.",
      "Plagued by feelings of panic, fear, and self-doubt.",
      "May suffer physical symptoms of anxiety, such as muscle tension, nail biting, headaches, abdominal pain, heart palpitations, shortness of breath, and sore muscles.",
      "Tend to hold grudges.",
      "Tend to predict the worst.",
      "Look to the future with fear.",
      "May be excessively shy, easily startled, and freeze in emotionally charged situations.",
    ],
    actionPlan: [
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Meditation.",
      "Hypnosis.",
      "Diaphragmatic breathing.",
      "Relaxing music.",
      "Intense exercise.",
      "A balanced diet between protein and complex carbohydrates.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements such as GABA, B6, magnesium and lemon balm found in GABA Calming Support.",
    ],
  },
  "Brain Type 5: Impulsive-Compulsive": {
    spectFindings: [
      "Decreased activity in the PFC, commonly associated with low brain dopamine levels.",
      "Increased anterior cingulate gyrus activity, commonly caused by low brain serotonin levels.",
    ],
    characteristics: [
      "Have a combination of both impulsive and compulsive features.",
      "Particularly common in the children and grandchildren of alcoholics or people who have a significant family history of alcoholism.",
      "Common for people with bulimia.",
    ],
    actionPlan: [
      "Learn how to distract yourself when you get a thought in your head more than three times.",
      "Structured goal setting.",
      "Intense exercise.",
      "A balanced diet between complex carbohydrates and protein.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Natural ways to increase serotonin and dopamine include intense exercise, a balanced diet, and a combination of dietary supplements such as Serotonin Mood Support at night and Focus & Energy Optimizer in the morning and afternoon.",
    ],
  },
  "Brain Type 6: Compulsive-SAD": {
    spectFindings: [
      "Increased activity in the anterior cingulate gyrus, which is commonly caused by low brain serotonin levels.",
      "Increased activity in the deep limbic system.",
      "Decreased activity in the prefrontal cortex, which is associated with low levels of dopamine and norepinephrine.",
    ],
    characteristics: [
      "Have trouble shifting their attention.",
      "Tend to dwell on worrisome or depressing thoughts.",
      "May also get stuck on thoughts of food or eat as a way to medicate underlying feelings of sadness or depression.",
      "May develop compulsive behaviors and tend to get stuck or locked into one course of action.",
      "May struggle with feelings of boredom, loneliness, low self-esteem, guilt, helplessness, hopelessness, worthlessness, and pain issues.",
      "When pain is an issue, they can get stuck on thoughts about the pain.",
      "Tend to hold grudges.",
      "Have problems with oppositional or argumentative behavior.",
    ],
    actionPlan: [
      "Learn how to distract yourself when you get a thought in your head more than three times.",
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Intense exercise.",
      "A higher complex carbohydrate diet.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "A combination of dietary supplements that boost both serotonin, dopamine, and norepinephrine, such as Serotonin Mood Support and SAMe Mood & Movement Support.",
    ],
  },
  "Brain Type 7: Compulsive-Anxious": {
    spectFindings: [
      "Increased activity in the anterior cingulate gyrus, which is commonly caused by low brain serotonin levels.",
      "Overactivity in the basal ganglia, which is associated with low levels of the calming neurotransmitter GABA.",
    ],
    characteristics: [
      "Tend to get stuck on compulsive behaviors and anxious or fearful thoughts.",
      "Have trouble shifting their attention from these thoughts.",
      "Tend to use food or other substances to medicate their feelings of anxiety, tension, nervousness, and fear.",
      "May be plagued by feelings of panic, fear, and self-doubt.",
      "Suffer physical symptoms of anxiety, such as muscle tension, nail biting, headaches, abdominal pain, heart palpitations, shortness of breath, and sore muscles.",
      "Tend to focus on worrisome thoughts about these ailments.",
      "Tend to hold grudges.",
      "Have problems with oppositional or argumentative behavior.",
    ],
    actionPlan: [
      "Learn how to distract yourself when you get a thought in your head more than three times.",
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Meditation.",
      "Hypnosis.",
      "Diaphragmatic breathing.",
      "Relaxing music.",
      "Intense exercise.",
      "A higher complex carbohydrate diet.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements that boost serotonin and GABA, such as Serotonin Mood Support and GABA Calming Support.",
    ],
  },
  "Brain Type 8: Compulsive-SAD-Anxious": {
    spectFindings: [
      "Increased activity in the anterior cingulate gyrus, commonly caused by low brain serotonin levels.",
      "Increased activity in the deep limbic system.",
      "Decreased activity in the prefrontal cortex, associated with low levels of dopamine and norepinephrine.",
      "Overactivity in the basal ganglia, commonly associated with low levels of the calming neurotransmitter GABA.",
    ],
    characteristics: [
      "Have trouble shifting their attention.",
      "Tend to get stuck on worrisome, depressing, anxious, or fearful thoughts.",
      "Tend to use food or other substances to medicate their feelings of sadness, depression, anxiety, tension, nervousness, fear, panic, self-doubt, boredom, loneliness, low self-esteem, guilt, helplessness, hopelessness, or worthlessness.",
      "May suffer physical symptoms of anxiety and depression, such as chronic pain, muscle tension, nail biting, headaches, abdominal pain, heart palpitations, shortness of breath, and sore muscles.",
      "Tend to struggle with cognitive inflexibility.",
      "Have trouble seeing options.",
      "Tend to hold grudges.",
      "Have problems with oppositional or argumentative behavior.",
    ],
    actionPlan: [
      "Learn how to distract yourself when you get a thought in your head more than three times.",
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Meditation.",
      "Hypnosis.",
      "Diaphragmatic breathing.",
      "Relaxing music.",
      "Intense exercise.",
      "A balanced diet.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements that boost serotonin, dopamine, norepinephrine, and GABA, such as a combination of Serotonin Mood Support, SAMe Mood & Movement Support, and GABA Calming Support.",
    ],
  },
  "Brain Type 9: Impulsive-SAD": {
    spectFindings: [
      "Decreased activity in the PFC, commonly associated with low brain dopamine and norepinephrine levels.",
      "Increased activity in the deep limbic areas of the brain.",
    ],
    characteristics: [
      "Struggle with feelings of sadness combined with impulsive behavior.",
      "May start each day with good intentions, but when feelings of boredom, loneliness, depression, low self-esteem, guilt, helplessness, hopelessness, or worthlessness come up, they have trouble controlling their behavior and tend to use food or other substances to medicate their feelings.",
      "Struggle with problems with attention span, forethought, impulse control, organization, motivation, and planning.",
      "Nearly impossible to stick with a brain healthy eating plan or lifestyle despite their best efforts.",
      "Often struggle with chronic pain issues.",
      "Common among emotional overeaters.",
    ],
    actionPlan: [
      "Structured goal setting.",
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Intense exercise.",
      "A higher protein diet.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements such as green tea and SAMe found in Focus & Energy Optimizer and SAMe Mood & Movement Support.",
    ],
  },
  "Brain Type 10: Impulsive-Anxious": {
    spectFindings: [
      "Decreased activity in the PFC, commonly associated with low brain dopamine levels.",
      "Overactivity in the basal ganglia.",
    ],
    characteristics: [
      "Struggle with feelings of anxiety combined with impulsive behavior.",
      "May start each day with good intentions, but when feelings of anxiety, tension, nervousness, fear, panic, or self-doubt come up, they have trouble controlling their behavior and tend to use food or other substances to medicate their feelings.",
      "Struggle with problems with attention span, forethought, impulse control, organization, motivation, and planning.",
      "Nearly impossible to stick with a brain healthy eating plan or lifestyle despite their best efforts.",
      "May also suffer physical symptoms of anxiety, such as muscle tension, nail biting, headaches, abdominal pain, heart palpitations, shortness of breath, and sore muscles.",
      "Common among emotional overeaters.",
    ],
    actionPlan: [
      "Structured goal setting.",
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Meditation.",
      "Hypnosis.",
      "Diaphragmatic breathing.",
      "Relaxing music.",
      "Intense exercise.",
      "A balanced diet between high quality protein and high quality carbohydrates.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements that increase dopamine and GABA found in a combination of Focus & Energy Optimizer and GABA Calming Support.",
    ],
  },
  "Brain Type 11: Impulsive-SAD-Anxious": {
    spectFindings: [
      "Decreased activity in the PFC, commonly associated with low brain dopamine and norepinephrine levels.",
      "Increased activity in the deep limbic areas of the brain.",
      "Overactivity in the basal ganglia, associated with low GABA levels.",
    ],
    characteristics: [
      "Struggle with feelings of sadness and anxiety combined with impulsive behavior.",
      "May start each day with good intentions, but when feelings of anxiety, depression, boredom, loneliness, low self-esteem, tension, nervousness, fear, panic, self-doubt, guilt, helplessness, hopelessness, or worthlessness come up, they have trouble controlling their behavior and tend to use food or other substances to medicate their feelings.",
      "Struggle with problems with attention span, forethought, impulse control, organization, motivation, and planning.",
      "Nearly impossible to stick with a brain healthy eating plan or lifestyle despite their best efforts.",
      "Often struggle with physical symptoms of anxiety and depression, such as chronic pain, muscle tension, nail biting, headaches, abdominal pain, heart palpitations, shortness of breath, and sore muscles.",
      "Common among emotional overeaters.",
    ],
    actionPlan: [
      "Structured goal setting.",
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Meditation.",
      "Hypnosis.",
      "Diaphragmatic breathing.",
      "Relaxing music.",
      "Intense exercise.",
      "A balanced diet between high quality protein and high quality carbohydrates.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements such as green tea, SAMe, GABA, B6, magnesium and lemon balm found in Focus & Energy Optimizer, SAMe Mood & Movement Support, and GABA Calming Support.",
    ],
  },
  "Brain Type 12: Impulsive-Compulsive-SAD": {
    spectFindings: [
      "Decreased activity in the PFC, commonly associated with low brain dopamine and norepinephrine levels.",
      "Increased activity in the anterior cingulate gyrus, commonly caused by low brain serotonin levels.",
      "Increased activity in the deep limbic areas of the brain.",
    ],
    characteristics: [
      "Struggle with feelings of sadness, poor impulse control, and compulsive tendencies.",
      "Have trouble shifting their attention.",
      "Tend to get stuck on worrisome or depressing thoughts, thoughts of food, or compulsive behaviors.",
      "Struggle with problems with attention span, forethought, impulse control, organization, motivation, and planning.",
      "May start their day with good intentions, but when feelings of sadness, depression, boredom, loneliness, low self-esteem, guilt, helplessness, hopelessness, worthlessness, or pain issues arise, they have trouble controlling their behavior and tend to use food or other substances to medicate their feelings.",
      "Tend to hold grudges.",
      "Have problems with oppositional or argumentative behavior.",
    ],
    actionPlan: [
      "Learn how to distract yourself when you get a thought in your head more than three times.",
      "Structured goal setting.",
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Intense exercise.",
      "A balanced diet between high quality protein and high quality carbohydrates.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements such as green tea, 5HTP, inositol, saffron and SAMe found in a combination of Focus & Energy Optimizer, Serotonin Mood Support, and SAMe Mood & Movement Support.",
    ],
  },
  "Brain Type 13: Impulsive-Compulsive-Anxious": {
    spectFindings: [
      "Decreased activity in the PFC, commonly associated with low brain dopamine levels.",
      "Increased activity in the anterior cingulate gyrus, commonly caused by low brain serotonin levels.",
      "Increased activity in the basal ganglia, commonly associated with low GABA levels.",
    ],
    characteristics: [
      "Struggle with feelings of anxiety, poor impulse control, and compulsive tendencies.",
      "Have trouble shifting their attention.",
      "Tend to get stuck on anxious or worrisome thoughts, thoughts of food, or compulsive behaviors.",
      "Struggle with problems with attention span, forethought, impulse control, organization, motivation, and planning.",
      "May start their day with good intentions but when feelings of anxiety, tension, nervousness, fear, panic, or self-doubt come up, they have trouble controlling their behavior and tend to use food or other substances to medicate their feelings.",
      "May also suffer physical symptoms of anxiety, such as muscle tension, nail biting, headaches, abdominal pain, heart palpitations, shortness of breath, and sore muscles.",
      "Tend to hold grudges.",
      "Have problems with oppositional or argumentative behavior.",
    ],
    actionPlan: [
      "Learn how to distract yourself when you get a thought in your head more than three times.",
      "Structured goal setting.",
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Meditation.",
      "Hypnosis.",
      "Diaphragmatic breathing.",
      "Relaxing music.",
      "Intense exercise.",
      "A balanced diet between high quality protein and high quality carbohydrates.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements such as a combination of green tea, 5HTP, inositol, saffron, and GABA found in Focus & Energy Optimizer, Serotonin Mood Support, GABA Calming Support.",
    ],
  },
  "Brain Type 14: Impulsive-Compulsive-SAD-Anxious": {
    spectFindings: [
      "Decreased activity in the PFC, commonly associated with low brain dopamine and norepinephrine levels.",
      "Increased activity in the anterior cingulate gyrus, commonly caused by low brain serotonin levels.",
      "Increased activity in the deep limbic areas of the brain.",
      "Overactivity in the basal ganglia, commonly associated with low GABA levels.",
    ],
    characteristics: [
      "Struggle with feelings of anxiety and depression, poor impulse control, and compulsive tendencies.",
      "Have trouble shifting their attention.",
      "Tend to get stuck on anxious or depressing thoughts, thoughts of food, or compulsive behaviors.",
      "Struggle with problems with attention span, forethought, impulse control, organization, motivation, and planning.",
      "May start each day with good intentions, but when feelings of anxiety, depression, boredom, loneliness, low self-esteem, tension, nervousness, fear, panic, self-doubt, guilt, helplessness, hopelessness, or worthlessness come up, they have trouble controlling their behavior and tend to use food or other substances to medicate their feelings.",
      "May also suffer physical symptoms of anxiety, such as muscle tension, nail biting, headaches, abdominal pain, heart palpitations, shortness of breath, and sore muscles.",
      "Tend to hold grudges.",
      "Have problems with oppositional or argumentative behavior.",
    ],
    actionPlan: [
      "Learn how to distract yourself when you get a thought in your head more than three times.",
      "Structured goal setting.",
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Meditation.",
      "Hypnosis.",
      "Diaphragmatic breathing.",
      "Relaxing music.",
      "Intense exercise.",
      "A balanced diet between high quality protein and high quality carbohydrates.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements such as 5HTP, green tea, SAMe and GABA found in Serotonin Mood Support, Focus & Energy Optimizer, SAMe Mood & Movement Support, GABA Calming Support.",
    ],
  },
  "Brain Type 15: SAD-Anxious": {
    spectFindings: [
      "Increased activity in the deep limbic areas of the brain.",
      "Decreased activity in the PFC, commonly associated with low brain dopamine and norepinephrine levels.",
      "Overactivity in the basal ganglia, commonly associated with low GABA levels.",
    ],
    characteristics: [
      "Tend to use food or other substances to medicate underlying feelings of anxiety and sadness and to calm the emotional storms in their brains.",
      "Often struggle with feelings of anxiety, depression, boredom, loneliness, low self-esteem, tension, nervousness, fear, panic, self-doubt, guilt, helplessness, hopelessness, or worthlessness.",
      "May suffer physical symptoms of anxiety and depression, such as chronic pain, muscle tension, nail biting, headaches, abdominal pain, heart palpitations, shortness of breath, and sore muscles – as if having an overload of tension and emotion.",
    ],
    actionPlan: [
      "Learn how to kill the ANTs (automatic negative thoughts).",
      "Meditation.",
      "Hypnosis.",
      "Relaxing music.",
      "Intense exercise.",
      "A balanced diet between protein and complex carbohydrates.",
      "Fish oil, such as Omega-3 Power.",
      "Optimize vitamin D level.",
      "Dietary supplements such as SAMe and GABA found in SAMe Mood & Movement Support and GABA Calming Support.",
    ],
  },
  "Brain Type 16: No Brain Type": {
    spectFindings: [
      "Some people do not have a brain type, or they are not insightful and need someone else who knows them well to fill out the questionnaire.",
    ],
    characteristics: [
      "If you do not have a brain type, use all the other strategies in The Amen Solution to have the brain and body you have always wanted.",
    ],
    actionPlan: [],
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

  // Add logic to determine the brain type based on the scores
  if (
    flexibleThinkingScore >= 38 &&
    focusImpulseControlScore >= 38 &&
    moodConcernsScore >= 35 &&
    stressAnxietyScore >= 35
  ) {
    return "Brain Type 14: Impulsive-Compulsive-SAD-Anxious";
  } else if (
    flexibleThinkingScore >= 30 &&
    focusImpulseControlScore >= 30 &&
    moodConcernsScore >= 25 &&
    stressAnxietyScore >= 25
  ) {
    return "Brain Type 5: Impulsive-Compulsive";
  } else if (
    focusImpulseControlScore >= 30 &&
    moodConcernsScore >= 25 &&
    stressAnxietyScore >= 25
  ) {
    return "Brain Type 9: Impulsive-SAD";
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

  return "Brain Type 16: No Brain Type";
};

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { responses } = location.state;

  // Determine brain type based on responses
  const brainType = determineBrainType(responses);
  console.log("Determined Brain Type:", brainType); // Log for debugging

  // Get brain type details, or use a fallback if no match
  const brainTypeInfo = brainTypeDetails[brainType] || {
    spectFindings: [],
    characteristics: [],
    actionPlan: [],
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

        <h3>SPECT Findings</h3>
        <ul style={{ textAlign: "left" }}>
          {brainTypeInfo.spectFindings.length > 0 ? (
            brainTypeInfo.spectFindings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))
          ) : (
            <li>No SPECT findings available.</li>
          )}
        </ul>

        <h3>Characteristics</h3>
        <ul style={{ textAlign: "left" }}>
          {brainTypeInfo.characteristics.length > 0 ? (
            brainTypeInfo.characteristics.map((characteristic, index) => (
              <li key={index}>{characteristic}</li>
            ))
          ) : (
            <li>No characteristics available.</li>
          )}
        </ul>

        <h3>Action Plan</h3>
        <ul style={{ textAlign: "left" }}>
          {brainTypeInfo.actionPlan.length > 0 ? (
            brainTypeInfo.actionPlan.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))
          ) : (
            <li>No action plan available.</li>
          )}
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

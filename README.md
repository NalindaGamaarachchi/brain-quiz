# Brain Quiz

Runs the app

### `npm install`

### `npm start`

## Logic in Result.js

Categorize Questions by Cognitive Domains: 
Divide the questions into categories like Memory, Executive Function, Attention, Emotional Regulation.

Score Calculation: Sum the scores for each category.

Brain Type Mapping: Map the scores from these categories to specific brain types using thresholds or ranges that define each type.

```bash
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
 ```

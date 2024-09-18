import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

// Define brain type descriptions and improvements
const brainTypeDetails = {
  "Brain Type 1: Compulsive": {
    spectFindings: [
      "大脑前部活动增加，尤其是在被称为前扣带回的区域，通常被认为是大脑的变速器。",
      "通常与低水平的神经递质血清素有关。",
    ],
    characteristics: [
      "难以转移注意力。",
      "容易陷入担忧的想法、焦虑或沮丧的想法、食物想法或强迫行为中。",
      "容易陷入某一行动方向，难以改变。",
      "难以看到其他选择。",
      "希望事情按照自己的方式进行。",
      "在认知灵活性方面有困难。",
      "对自己和他人看到的错误过多。",
      "容易怀恨在心。",
      "有对抗或争论行为的问题。",
      "晚间饮食综合症：晚上暴食，早上不饿。",
    ],
    actionPlan: [
      "当一个想法在你脑海中出现三次以上时，学会分散注意力。",
      "高强度运动。",
      "高复杂碳水化合物饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
      "自然方式提升血清素，例如锻炼、复杂碳水化合物和5HTP、肌醇和藏红花等膳食补充剂的组合。",
    ],
  },
  "Brain Type 2: Impulsive": {
    spectFindings: [
      "前额皮质（PFC）活动减少，通常与大脑中低水平的多巴胺有关。",
    ],
    characteristics: [
      "难以控制冲动行为，即使他们每天都开始有良好的意图。",
      "前额皮质活动过少，导致注意力不集中、分心、无聊、偏离任务和冲动。",
      "通常出现在患有ADD/ADHD的人群中。",
      "与注意力短暂、分心、缺乏组织、坐立不安和冲动长期相关。",
    ],
    actionPlan: [
      "制定结构化目标。",
      "高强度锻炼。",
      "高质量蛋白质饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
      "自然提升多巴胺的方式包括高强度运动、极具趣味的活动和绿茶、红景天、冬虫夏草等膳食补充剂。",
    ],
  },
  "Brain Type 3: Sad or Emotional": {
    spectFindings: [
      "大脑深层边缘系统活动增加。",
      "前额皮质活动减少，通常与大脑中低水平的多巴胺或去甲肾上腺素有关。",
    ],
    characteristics: [
      "倾向于用食物或其他物质来缓解内心的悲伤并平息大脑中的情感风暴。",
      "经常感到无聊、孤独、抑郁、自尊心低下和痛苦问题。",
      "可能出现性欲减退、哭泣期、能量低下和对通常愉快活动缺乏兴趣。",
      "感到内疚、无助、绝望或一文不值的情绪。",
      "有些人的情绪随季节变化而波动，冬季更严重。",
      "经历轻度的慢性悲伤，称为持续性抑郁症。",
      "遭受更严重的抑郁症困扰。",
      "女性中更常见。",
    ],
    actionPlan: [
      "学会消灭自动负面想法（ANTs）。",
      "高强度锻炼。",
      "平衡蛋白质和复杂碳水化合物的饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
      "膳食补充剂如SAMe可以在SAMe Mood & Movement Support中找到。",
    ],
  },
  "Brain Type 4: Anxious": {
    spectFindings: ["基底神经节活动增加，通常与低水平的镇静神经递质GABA有关。"],
    characteristics: [
      "容易用食物或其他物质来缓解焦虑、紧张、神经质和恐惧感。",
      "被恐慌、恐惧和自我怀疑的情绪困扰。",
      "可能会经历焦虑的身体症状，如肌肉紧张、咬指甲、头痛、腹痛、心悸、呼吸短促和肌肉酸痛。",
    ],
    actionPlan: [
      "学会消灭自动负面想法（ANTs）。",
      "冥想。",
      "催眠。",
      "横膈膜呼吸。",
      "放松音乐。",
      "高强度锻炼。",
      "平衡蛋白质和复杂碳水化合物的饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
      "膳食补充剂如GABA、维生素B6、镁和柠檬香蜂草，可以在GABA Calming Support中找到。",
    ],
  },
  "Brain Type 5: Impulsive-Compulsive": {
    spectFindings: [
      "前额皮质活动减少，通常与低水平的多巴胺有关。",
      "前扣带回活动增加，通常由低水平的血清素引起。",
    ],
    characteristics: [
      "具有冲动和强迫的双重特征。",
      "在有酗酒史的家庭中更为常见。",
      "常见于患有暴食症的人。",
    ],
    actionPlan: [
      "当一个想法在你脑海中出现三次以上时，学会分散注意力。",
      "制定结构化目标。",
      "高强度锻炼。",
      "平衡复杂碳水化合物和蛋白质的饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
      "自然方式增加血清素和多巴胺，包括高强度运动、平衡饮食，结合膳食补充剂如Serotonin Mood Support和Focus & Energy Optimizer。",
    ],
  },
  "Brain Type 6: Compulsive-SAD": {
    spectFindings: [
      "前扣带回活动增加，通常由低水平的血清素引起。",
      "大脑深层边缘系统活动增加。",
      "前额皮质活动减少，通常与低水平的多巴胺和去甲肾上腺素有关。",
    ],
    characteristics: [
      "难以转移注意力。",
      "容易陷入忧虑或抑郁的想法中。",
      "可能也会纠结于食物想法或用饮食缓解内心的悲伤或抑郁。",
    ],
    actionPlan: [
      "当一个想法在你脑海中出现三次以上时，学会分散注意力。",
      "学会消灭自动负面想法（ANTs）。",
      "高强度锻炼。",
      "高复杂碳水化合物饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
    ],
  },
  "Brain Type 7: Compulsive-Anxious": {
    spectFindings: [
      "前扣带回活动增加，通常由低水平的血清素引起。",
      "基底神经节活动过度，通常与低水平的镇静神经递质GABA有关。",
    ],
    characteristics: [
      "容易纠结于强迫行为和焦虑或恐惧的想法。",
      "难以从这些想法中转移注意力。",
      "容易用食物或其他物质来缓解焦虑、紧张、神经质和恐惧感。",
    ],
    actionPlan: [
      "当一个想法在你脑海中出现三次以上时，学会分散注意力。",
      "学会消灭自动负面想法（ANTs）。",
      "冥想。",
      "催眠。",
      "横膈膜呼吸。",
      "放松音乐。",
      "高强度锻炼。",
      "高复杂碳水化合物饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
    ],
  },
  "Brain Type 8: Compulsive-SAD-Anxious": {
    spectFindings: [
      "前扣带回活动增加，通常由低水平的血清素引起。",
      "大脑深层边缘系统活动增加。",
      "前额皮质活动减少，通常与低水平的多巴胺和去甲肾上腺素有关。",
      "基底神经节活动过度，通常与低水平的镇静神经递质GABA有关。",
    ],
    characteristics: [
      "难以转移注意力。",
      "容易陷入忧虑、抑郁、焦虑或恐惧的想法中。",
      "容易用食物或其他物质来缓解内心的悲伤、抑郁、焦虑、紧张、恐惧、恐慌、自我怀疑、无聊、孤独、低自尊、内疚、无助、绝望或一文不值的感觉。",
    ],
    actionPlan: [
      "当一个想法在你脑海中出现三次以上时，学会分散注意力。",
      "学会消灭自动负面想法（ANTs）。",
      "冥想。",
      "催眠。",
      "横膈膜呼吸。",
      "放松音乐。",
      "高强度锻炼。",
      "平衡饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
    ],
  },
  "Brain Type 9: Impulsive-SAD": {
    spectFindings: [
      "前额皮质活动减少，通常与低水平的多巴胺和去甲肾上腺素有关。",
      "大脑深层边缘系统活动增加。",
    ],
    characteristics: [
      "挣扎于悲伤的情绪和冲动行为的结合。",
      "可能每天都开始有良好的意图，但当无聊、孤独、抑郁、低自尊、内疚、无助、绝望或一文不值的感觉出现时，难以控制自己的行为，容易用食物或其他物质来缓解这些情绪。",
    ],
    actionPlan: [
      "制定结构化目标。",
      "学会消灭自动负面想法（ANTs）。",
      "高强度锻炼。",
      "高蛋白饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
    ],
  },
  "Brain Type 10: Impulsive-Anxious": {
    spectFindings: [
      "前额皮质活动减少，通常与大脑中低水平的多巴胺有关。",
      "基底神经节活动过度。",
    ],
    characteristics: [
      "焦虑情绪和冲动行为的结合。",
      "可能每天都开始有良好的意图，但当焦虑、紧张、神经质、恐惧、恐慌或自我怀疑的情绪出现时，难以控制自己的行为。",
    ],
    actionPlan: [
      "制定结构化目标。",
      "学会消灭自动负面想法（ANTs）。",
      "冥想。",
      "催眠。",
      "横膈膜呼吸。",
      "放松音乐。",
      "高强度锻炼。",
      "平衡高质量蛋白质和碳水化合物的饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
    ],
  },
  "Brain Type 11: Impulsive-SAD-Anxious": {
    spectFindings: [
      "前额皮质活动减少，通常与低水平的多巴胺和去甲肾上腺素有关。",
      "大脑深层边缘系统活动增加。",
      "基底神经节活动过度，通常与低水平的GABA有关。",
    ],
    characteristics: [
      "挣扎于悲伤和焦虑情绪的结合，以及冲动行为的困扰。",
      "可能每天都开始有良好的意图，但当焦虑、抑郁、无聊、孤独、低自尊、紧张、神经质、恐惧、恐慌、自我怀疑、内疚、无助、绝望或一文不值的感觉出现时，难以控制自己的行为。",
    ],
    actionPlan: [
      "制定结构化目标。",
      "学会消灭自动负面想法（ANTs）。",
      "冥想。",
      "催眠。",
      "横膈膜呼吸。",
      "放松音乐。",
      "高强度锻炼。",
      "平衡高质量蛋白质和碳水化合物的饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
    ],
  },
  "Brain Type 12: Impulsive-Compulsive-SAD": {
    spectFindings: [
      "前额皮质活动减少，通常与低水平的多巴胺和去甲肾上腺素有关。",
      "前扣带回活动增加，通常由低水平的血清素引起。",
      "大脑深层边缘系统活动增加。",
    ],
    characteristics: [
      "挣扎于悲伤、冲动控制不良和强迫倾向。",
      "难以转移注意力。",
    ],
    actionPlan: [
      "当一个想法在你脑海中出现三次以上时，学会分散注意力。",
      "制定结构化目标。",
      "学会消灭自动负面想法（ANTs）。",
      "高强度锻炼。",
      "平衡高质量蛋白质和碳水化合物的饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
    ],
  },
  "Brain Type 13: Impulsive-Compulsive-Anxious": {
    spectFindings: [
      "前额皮质活动减少，通常与低水平的多巴胺有关。",
      "前扣带回活动增加，通常由低水平的血清素引起。",
      "基底神经节活动过度，通常与低水平的GABA有关。",
    ],
    characteristics: [
      "挣扎于焦虑、冲动控制不良和强迫倾向。",
      "难以转移注意力。",
    ],
    actionPlan: [
      "当一个想法在你脑海中出现三次以上时，学会分散注意力。",
      "制定结构化目标。",
      "学会消灭自动负面想法（ANTs）。",
      "冥想。",
      "催眠。",
      "横膈膜呼吸。",
      "放松音乐。",
      "高强度锻炼。",
      "平衡高质量蛋白质和碳水化合物的饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
    ],
  },
  "Brain Type 14: Impulsive-Compulsive-SAD-Anxious": {
    spectFindings: [
      "前额皮质活动减少，通常与低水平的多巴胺和去甲肾上腺素有关。",
      "前扣带回活动增加，通常由低水平的血清素引起。",
      "大脑深层边缘系统活动增加。",
      "基底神经节活动过度，通常与低水平的GABA有关。",
    ],
    characteristics: [
      "挣扎于焦虑和抑郁情绪、冲动控制不良和强迫倾向。",
      "难以转移注意力。",
    ],
    actionPlan: [
      "当一个想法在你脑海中出现三次以上时，学会分散注意力。",
      "制定结构化目标。",
      "学会消灭自动负面想法（ANTs）。",
      "冥想。",
      "催眠。",
      "横膈膜呼吸。",
      "放松音乐。",
      "高强度锻炼。",
      "平衡高质量蛋白质和碳水化合物的饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
    ],
  },
  "Brain Type 15: SAD-Anxious": {
    spectFindings: [
      "大脑深层边缘系统活动增加。",
      "前额皮质活动减少，通常与低水平的多巴胺和去甲肾上腺素有关。",
      "基底神经节活动过度，通常与低水平的GABA有关。",
    ],
    characteristics: [
      "倾向于用食物或其他物质来缓解内心的焦虑和悲伤，并平息大脑中的情感风暴。",
    ],
    actionPlan: [
      "学会消灭自动负面想法（ANTs）。",
      "冥想。",
      "催眠。",
      "放松音乐。",
      "高强度锻炼。",
      "平衡蛋白质和复杂碳水化合物的饮食。",
      "鱼油，如Omega-3。",
      "优化维生素D水平。",
      "膳食补充剂如SAMe和GABA可以在SAMe Mood & Movement Support和GABA Calming Support中找到。",
    ],
  },
  "Brain Type 16: No Brain Type": {
    spectFindings: [
      "有些人没有明确的大脑类型，或者他们对自己不够了解，需要让了解他们的人来填写问卷。",
    ],
    characteristics: [
      "如果你没有大脑类型，请使用《Amen Solution》中的所有其他策略来拥有你一直想要的大脑和身体。",
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

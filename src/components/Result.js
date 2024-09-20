import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css";

// Define brain type descriptions and improvements
const brainTypeDetails = {
  "类型1: 强迫型": {
    spectFindings: [
      "大脑前部活动增加，尤其是在前扣带回这个被认为是大脑“换挡器”的区域的活动的增加",
      "一般被认为是和神经递质血清素水平较低有关",
    ],
    characteristics: [
      "转移注意力困难",
      "容易陷入忧虑，焦虑，抑郁情绪中，以及对食物的想法或强迫行为中",
      "容易陷入或者困在单一行为模式中",
      "常常难以看到其他可选方案",
      "想要事务按照他们的方式进行",
      "缺乏认知弹性",
      "容易在他们自己或者其他人身上看到很多错误",
      "容易怀恨在心",
      "存在对抗性或争辩行为的问题",
      "夜餐综合症：倾向于晚上暴饮暴食，在白天早上时候没有食欲",
    ],
    actionPlan: [
      "当一个想法在你头脑中反复出现三次以上的时候学着分散注意力",
      "高强度运动",
      "饮食采用高复杂度的碳水化合物",
      "鱼油，比如Omega-3 Power鱼油",
      "优化维生素D水平",
      "通过自然的方式提升血清素水平，比如锻炼，多样化的碳水来源；以及5-羟色氨酸（5HTP），肌醇，番红花等膳食补充剂，Serotonin Mood Support可以提供以上膳食补充组合。",
    ],
  },
  "类型2: 冲动型": {
    spectFindings: ["前额叶皮层活动降低，通常和低多巴胺水平有关"],
    characteristics: [
      "容易冲动，难以控制他们的行为，尽管每天开始时他们可能带着良好的意愿",
      "由于大脑前额叶皮层（PFC）活动过低-大脑内多巴胺水平过低",
      "心不在焉，注意力分散，无聊，偏离任务和冲动",
      "在注意力缺陷障碍/注意力缺陷多动障碍（ADD/ADHD）人群中较为常见--与注意力时间短，注意力分散，缺少规划性，躁动不安和冲动这些长期存在的问题有关",
    ],
    actionPlan: [
      "结构化的目标设定",
      "高强度运动",
      "更多高质量蛋白的膳食",
      "鱼油，比如Omega-3 Power鱼油",
      "优化维生素D水平",
      "天然的方式增加多巴胺分泌包括高强度运动，趣味度高的活动，以及绿茶，红景天，睡茄等膳食补充剂，Focus & Energy Optimizer可以提供以上膳食补充",
    ],
  },
  "类型3: 悲伤型": {
    spectFindings: [
      "大脑深部边缘区活动增加",
      "前额叶皮层（PFC）活动降低，通常与大脑低多巴胺水平或者去甲肾上腺素水平相关",
    ],
    characteristics: [
      "倾向于用食物或其他物质来缓解悲伤的情绪和平息他们大脑中的情绪风暴",
      "经常受到无聊，孤独，抑郁，自卑和疼痛问题的困扰",
      "可能出现性欲减退，哭泣，精力低下，和对通常愉悦的活动缺乏兴趣的体验",
      "需要对抗负罪感，无助感，绝望感或者无价值感等感情",
      "部分）情感会跟随季节的变化，且倾向于在冬天加重",
      "体验到轻度的慢性悲伤感，也即恶劣心境",
      "承受更多的抑郁感",
      "在女性中更常见",
    ],
    actionPlan: [
      "学会消除自发性的负面情感（ANTs）",
      "高强度运动",
      "蛋白质和复杂碳水化合物的均衡膳食",
      "鱼油，比如Omega-3 Power鱼油",
      "优化维生素D水平",
      "补充含S-腺苷甲硫氨酸（SAMe）的膳食补充剂，比如SAMe Mood & Movement Support",
    ],
  },
  "类型4: 焦虑型": {
    spectFindings: ["基底节活动增加，通常由于镇定神经递质GABA水平低下导致"],
    characteristics: [
      "倾向于通过食物或其他物质来缓解焦虑、紧张、神经质和恐惧等情绪",
      "常常被恐慌、恐惧和自我怀疑的情绪困扰",
      "可能会出现焦虑的身体症状，如肌肉紧张、咬指甲、头痛、腹痛、心悸、呼吸急促和肌肉酸",
    ],
    actionPlan: [
      "学习如何消除自动负面思维（ANTs）",
      "冥想",
      "催眠 ",
      "横膈膜呼吸",
      "放松的音乐 ",
      "高强度运动 ",
      "蛋白质和复杂碳水化合物的平衡饮食 ",
      "鱼油，如Omega-3 Power鱼油",
      "优化维生素D水平 ",
      "使用含GABA、B6、镁和柠檬香蜂草的膳食补充剂，如GABA Calming Support",
    ],
  },
  "类型 5: I冲动-强迫型": {
    spectFindings: [
      "前额叶皮层（PFC）活动减少，通常与大脑多巴胺水平低有关",
      "前扣带回（anterior cingulate gyrus）活动增加，通常是由大脑血清素水平低引起的",
    ],
    characteristics: [
      "具有冲动和强迫特征的组合",
      "特别常见于酗酒者的子女和孙子孙女，或有显著酗酒家族史的人群",
      "贪食症患者中也很常见",
    ],
    actionPlan: [
      "学会在脑中出现同一想法超过三次时分散注意力",
      "结构化目标设定",
      "高强度运动",
      "复杂碳水化合物和蛋白质之间的平衡饮食",
      "鱼油，如Omega-3 Power鱼油",
      "优化维生素D水平。",
      "自然增加血清素和多巴胺的方法包括强度运动、平衡饮食，以及膳食补充剂的组合，如夜间使用Serotonin Mood Support，早晨和下午使用Focus & Energy Optimizer",
    ],
  },
  "类型6: 强制-悲伤型": {
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
  "类型7: 强迫-焦虑型": {
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
  "类型8: 强迫-悲伤-焦虑型": {
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
  "类型9: 冲动-悲伤型": {
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
  "类型10: 冲动-焦虑型": {
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
  "类型11: 冲动-悲伤-焦虑型": {
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
  "类型12: 冲动-强迫-悲伤型": {
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
  "类型13: 冲动-强迫-焦虑型": {
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
  "类型14: 冲动-强迫-悲伤-焦虑型": {
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
  "类型15: 悲伤-焦虑型": {
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
  "类型16: 无类型": {
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
    return "类型14: 冲动-强迫-悲伤-焦虑型";
  } else if (
    flexibleThinkingScore >= 30 &&
    focusImpulseControlScore >= 30 &&
    moodConcernsScore >= 25 &&
    stressAnxietyScore >= 25
  ) {
    return "类型 5: I冲动-强迫型";
  } else if (
    focusImpulseControlScore >= 30 &&
    moodConcernsScore >= 25 &&
    stressAnxietyScore >= 25
  ) {
    return "类型9: 冲动-悲伤型";
  } else if (focusImpulseControlScore >= 30 && stressAnxietyScore >= 30) {
    return "类型10: 冲动-焦虑型";
  } else if (flexibleThinkingScore >= 30) {
    return "类型1: 强迫型";
  } else if (focusImpulseControlScore >= 30) {
    return "类型2: 冲动型";
  } else if (moodConcernsScore >= 30) {
    return "类型3: 悲伤型";
  } else if (stressAnxietyScore >= 30) {
    return "类型4: 焦虑型";
  }

  return "类型16: 无类型";
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
          你的大脑类型
        </h1>
        <p style={{ fontSize: "1.5rem", color: "#333", marginBottom: "20px" }}>
          {brainType}
        </p>

        <h3>SPECT 结果</h3>
        <ul style={{ textAlign: "left" }}>
          {brainTypeInfo.spectFindings.length > 0 ? (
            brainTypeInfo.spectFindings.map((finding, index) => (
              <li key={index}>{finding}</li>
            ))
          ) : (
            <li>没有可用的 SPECT 结果.</li>
          )}
        </ul>

        <h3>特征</h3>
        <ul style={{ textAlign: "left" }}>
          {brainTypeInfo.characteristics.length > 0 ? (
            brainTypeInfo.characteristics.map((characteristic, index) => (
              <li key={index}>{characteristic}</li>
            ))
          ) : (
            <li>没有可用的特征.</li>
          )}
        </ul>

        <h3>行动计划</h3>
        <ul style={{ textAlign: "left" }}>
          {brainTypeInfo.actionPlan.length > 0 ? (
            brainTypeInfo.actionPlan.map((plan, index) => (
              <li key={index}>{plan}</li>
            ))
          ) : (
            <li>没有可用的行动计划</li>
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
          再次进行测试
        </button>
      </div>
    </div>
  );
};

export default Result;

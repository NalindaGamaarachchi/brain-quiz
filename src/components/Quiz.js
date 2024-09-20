import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

const questions = [
  "组织能力很优秀。",
  "容易分心。",
  "注意力差。",
  "排队时很容易保持耐心。",
  "在谈论某件事时突然失去思路。",
  "难以延迟满足感。",
  "记忆力差。",
  "记忆力比10年前更差。",
  "很难记住名字。",
  "每周锻炼超过两次。",
  "每天至少睡7-8小时。",
  "饮食不规律且随意。",
  "每天喝超过2杯（8盎司）咖啡。",
  "每天喝含糖饮料。",
  "每周喝超过4杯正常大小的酒。",
  "吸烟或暴露在二手烟环境中。",
  "每天看电视超过一小时。",
  "难以入睡和保持睡眠。",
  "在工作或家庭中承受着巨大压力。",
  "亲密关系健康且令人满意。",
  "参与新的学习活动或脑力训练游戏。",
  "更容易注意到问题，而不是解决方案。",
  "倾向于争论或对立。",
  "思想经常在脑海中循环。",
  "难以摆脱悲伤或沮丧。",
  "感到焦虑不安。",
  "难以放下过去的伤害。",
  "思想负面。",
  "自尊非常好。",
  "难以感受到快乐。",
  "容易误解别人。",
  "很难放松。",
  "倾向于预料最坏的结果。",
  "对批评很敏感。",
  "咬指甲或抠皮肤。",
  "感到紧张或焦虑。",
  "大多数时候能量充沛。",
  "难以抗拒渴望。",
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
          <button onClick={() => handleResponse(1)}>从不</button>
          <button onClick={() => handleResponse(2)}>很少</button>
          <button onClick={() => handleResponse(3)}>偶尔</button>
          <button onClick={() => handleResponse(4)}>经常</button>
          <button onClick={() => handleResponse(5)}>非常频繁</button>
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

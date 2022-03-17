import style from "./dragNdrop.module.scss";
import { Card } from "../../components/card";
import { Dustbin } from "../../components/dustbin";
import { Header } from "../../components/Header";
import axios from "axios";
import React from "react";

export const DragDrop: React.FC = () => {
  const [answers, setAnswers] = React.useState<{ text: string; id: number }[]>(
    []
  );
  const [questions, setQuestions] = React.useState<
    { text: string; answer: string; id: number }[]
  >([]);

  React.useEffect(() => {
    (async () => {
      const answers = await axios.get(
        "https://622a1acfbe12fc4538b24619.mockapi.io/answers"
      );
      const questions = await axios.get(
        "https://622a1acfbe12fc4538b24619.mockapi.io/questions"
      );
      setAnswers(answers.data);
      setQuestions(questions.data);
    })();
  }, []);

  return (
    <div className={style.page}>
      <Header />
      <div className={style.answers}>
        {answers.map((item) => (
          <Card name={item.text} />
        ))}
      </div>
      <div className={style.grid}>
        {questions.map((item) => (
          <div className={style.cell}>
            <Dustbin answerText={item.answer} textProps={item.text} />
          </div>
        ))}
        <div className={style.btn}>
          <button>
            Next Card
            <img src="/arrow.png" />
          </button>
        </div>
      </div>
    </div>
  );
};

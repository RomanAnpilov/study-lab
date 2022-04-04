import style from "./dragNdrop.module.scss";
import { Card } from "../../components/card";
import { Dustbin } from "../../components/dustbin";
import { Header } from "../../components/Header";
import axios from "axios";
import React from "react";

type MainContextProps = {
  addAnswer: (id: string, answer: string) => void;
  ContextData: { id: string; answer: string }[];
};

export const MainContext = React.createContext<MainContextProps>(
  {} as MainContextProps
);

export const DragDrop: React.FC = () => {
  const [answers, setAnswers] = React.useState<{ text: string; id: number }[]>(
    []
  );
  const ContextData: { id: string; answer: string }[] = [];

  const addAnswer = (id: string, answer: string) => {
    ContextData.push({ id: id, answer: answer });
  };
  const [rightAnswers, setRightAnswers] = React.useState(0);
  const checkAnswer = () => {
    console.log(ContextData);
    let counter = 0;
    for (let i = 0; i < ContextData.length; i++) {
      console.log(1);
      if (ContextData[i].answer === questions[i].answer) {
        counter += 1;
      }
    }
    console.log("aaa");
    console.log(rightAnswers);
    setRightAnswers(counter);
    
  };

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
    <MainContext.Provider value={{ addAnswer, ContextData }}>
      {console.log(ContextData)}
      <div className={style.page}>
        <Header />

        <div className={style.flex}>
          <div className={style.answers}>
            {answers.map((item) => (
              <Card name={item.text} />
            ))}
          </div>
          <div className={style.grid}>
            {questions.map((item) => (
              <div className={style.cell}>
                <Dustbin id={item.id} textProps={item.text} />
              </div>
            ))}
            <div className={style.btn}>
              <button onClick={() => checkAnswer()}>
                Check answers
              </button>
              <p>Right answers {rightAnswers}/ 12</p>
            </div>
          </div>
        </div>
      </div>
    </MainContext.Provider>
  );
};

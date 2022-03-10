import style from "./dragNdrop.module.scss";
import { Card } from "../../components/card";
import { Dustbin } from "../../components/dustbin";
import { Header } from "../../components/Header";
import axios from "axios";
import React from "react";

export const DragDrop: React.FC = () => {
  const [answers, setAnswers] = React.useState<{text: string, id: number}[]>([]);

  React.useEffect(() => {
    (async () => {
      const {data} = await axios.get(
        "https://622a1acfbe12fc4538b24619.mockapi.io/answers"
      );
      setAnswers(data);
    })();
  }, []);

  return (
    <div className={style.page}>
      <Header />
      {console.log(answers)}

      <div className={style.answers}>
       {answers.map((item) => <Card name={item.text} />)}
      </div>

      <div className={style.grid}>
        <div className={style.cell}>
          <Dustbin textProps="23" />
        </div>
        <div className={style.cell}>
          <Dustbin textProps="43" />
        </div>
        <div className={style.cell}>
          <Dustbin textProps="53" />
        </div>
        <div className={style.cell}>
          <Dustbin textProps="63" />
        </div>
        <div className={style.cell}>
          <Dustbin textProps="73" />
        </div>
        <div className={style.cell}>
          <Dustbin textProps="83" />
        </div>
        <div className={style.cell}>
          <Dustbin textProps="93" />
        </div>
        <div className={style.cell}>
          <Dustbin textProps="103" />
        </div>
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

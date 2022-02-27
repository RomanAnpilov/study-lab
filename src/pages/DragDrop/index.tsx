import style from "./dragNdrop.module.scss";
import { Card } from "../../components/card";
import { Dustbin } from "../../components/dustbin";
import { Header } from "../../components/Header";

export const DragDrop: React.FC = () => {
  return (
    <div className={style.page}>
        <Header/>
      <div className={style.answers}>
        <Card name="1"/>
        <Card name="2"/>
        <Card name="3"/>
      </div>

      <div className={style.grid}>
        <div className={style.cell}>
          <Dustbin />
        </div>
        <div className={style.cell}>
          <Dustbin />
        </div>
        <div className={style.cell}>
          <Dustbin />
        </div>
      </div>
    </div>
  );
};

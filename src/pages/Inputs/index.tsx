import style from "./dragNdrop.module.scss";
import { Card } from "../../components/card";
import { Dustbin } from "../../components/dustbin";
import { Header } from "../../components/Header";

export const Inputs: React.FC = () => {
  return (
    <div className={style.page}>
      <Header />
     

      <div className={style.grid}>
        <div className={style.cell}>
          2+2=?
          <span className={style.input}>
            <input type="text" placeholder="Gradient border focus fun" />
            <span></span>
          </span>
        </div>
        <div className={style.cell}>
          2+2=?
          <span className={style.input}>
            <input type="text" placeholder="Gradient border focus fun" />
            <span></span>
          </span>
        </div><div className={style.cell}>
          2+2=?
          <span className={style.input}>
            <input type="text" placeholder="Gradient border focus fun" />
            <span></span>
          </span>
        </div><div className={style.cell}>
          2+2=?
          <span className={style.input}>
            <input type="text" placeholder="Gradient border focus fun" />
            <span></span>
          </span>
        </div>
        <div className={style.cell}>
          2+2=?
          <span className={style.input}>
            <input type="text" placeholder="Gradient border focus fun" />
            <span></span>
          </span>
        </div>
        <div className={style.cell}>
          2+2=?
          <span className={style.input}>
            <input type="text" placeholder="Gradient border focus fun" />
            <span></span>
          </span>
        </div>
      </div>
    </div>
  );
};

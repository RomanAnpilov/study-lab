import style from "./main.module.scss";
import clsx from "clsx";

export const MainPage: React.FC = () => {
  return (
    <div className={style.body}>
      
      <div className={clsx(style.mainBlock)}>
        <div>
        <h1>Мои тесты</h1>
        <div className={style.grid}>
          <div className={style.card}>
            <h1>Стереометрия</h1>
            <h3>До - 24.2.2022 15:00🔥</h3>
            <div className={style.info}>
              <div>
                <h2>15 вопросов</h2>
                <p>10 минут</p>
              </div>

              <img src="arrow.png" alt="" />
            </div>
          </div>
          <div className={style.card}>
            <h1>Стереометрия</h1>
            <h3>До - 24.2.2022 15:00🔥</h3>
            <div className={style.info}>
              <div>
                <h2>15 вопросов</h2>
                <p>10 минут</p>
              </div>

              <img src="arrow.png" alt="" />
            </div>
          </div>
          <div className={style.card}>
            <h1>Стереометрия</h1>
            <h3>До - 24.2.2022 15:00🔥</h3>
            <div className={style.info}>
              <div>
                <h2>15 вопросов</h2>
                <p>10 минут</p>
              </div>

              <img src="arrow.png" alt="" />
            </div>
          </div>
          <div className={style.card}>
            <h1>Стереометрия</h1>
            <h3>До - 24.2.2022 15:00🔥</h3>
            <div className={style.info}>
              <div>
                <h2>15 вопросов</h2>
                <p>10 минут</p>
              </div>

              <img src="arrow.png" alt="" />
            </div>
          </div>
          <div className={style.card}>
            <h1>Стереометрия</h1>
            <h3>До - 24.2.2022 15:00🔥</h3>
            <div className={style.info}>
              <div>
                <h2>15 вопросов</h2>
                <p>10 минут</p>
              </div>

              <img src="arrow.png" alt="" />
            </div>
          </div>
          <div className={style.card}>
            <h1>Стереометрия</h1>
            <h3>До - 24.2.2022 15:00🔥</h3>
            <div className={style.info}>
              <div>
                <h2>15 вопросов</h2>
                <p>10 минут</p>
              </div>

              <img src="arrow.png" alt="" />
            </div>
          </div>
        </div>
        </div>
        
        <div>
            <h1>Мои оценки</h1>
            <div className={style.grades}>
                <div>
                    <h3>Производная - 22/30 - 4🥇</h3>
                </div>
                <div>
                    <h3>Производная - 22/30 - 4🥇</h3>
                </div>
                <div>
                    <h3>Производная - 22/30 - 4🥇</h3>
                </div>
                <div>
                    <h3>Производная - 22/30 - 4🥇</h3>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

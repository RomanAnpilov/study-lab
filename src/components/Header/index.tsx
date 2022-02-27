import style from "./Header.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={style.header}>
      <h1 className={style.logo}>MathAcademy✨</h1>
    </header>
  );
};

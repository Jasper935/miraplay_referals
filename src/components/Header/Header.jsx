import css from "./Header.module.css";
import logo from "../../images/logo.svg";

export const Header = ({onClick}) => {
  return (
    <header className={css.header}>
      <div className={css.logoWrap}>
        <img src={logo} alt="logo" className={css.logo} />
        <h5 className={css.logoText}>MIRAPLAY</h5>
      </div>
      <div className={css.btnWrap}>
        <button onClick={()=>onClick()} className={css.btn}>Вход</button>
        <button onClick={()=>onClick()} className={css.btn}>Регистрация</button>
      </div>
    </header>
  );
};

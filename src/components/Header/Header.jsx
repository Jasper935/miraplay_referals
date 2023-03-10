import css from "./Header.module.css";
import logo from "../../images/logo.svg";

export const Header = ({onLogin,
  onRegister, isButtonsDisabled}) => {
  return (
    <header className={css.header}>
      <div className={css.logoWrap}>
        <img src={logo} alt="logo" className={css.logo} />
        <h5 className={css.logoText}>MIRAPLAY</h5>
      </div>
      <div className={css.btnWrap}>
        <button className={css.btn} disabled={isButtonsDisabled?true:false} onClick={()=>!isButtonsDisabled&&onLogin()} >Вход</button>
        <button className={css.btn} disabled={isButtonsDisabled?true:false} onClick={()=>!isButtonsDisabled&&onRegister()} >Регистрация</button>
      </div>
    </header>
  );
};

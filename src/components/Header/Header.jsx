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
        <button disabled={isButtonsDisabled?true:false} onClick={()=>!isButtonsDisabled&&onLogin()} className={css.btn}>Вход</button>
        <button disabled={isButtonsDisabled?true:false} onClick={()=>!isButtonsDisabled&&onRegister()} className={css.btn}>Регистрация</button>
      </div>
    </header>
  );
};

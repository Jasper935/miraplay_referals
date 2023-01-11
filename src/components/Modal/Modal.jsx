import css from "./Modal.module.css";

export const Modal = ({ register, logIn }) => {
  return (
    <form action="submit" className={css.form}>
      <h5 className={css.title}>
        {register
          ? "Введите данные для регистрации"
          : "Введите данные для входа"}
      </h5>
      <input className={css.input} type="email" placeholder="ЭЛЕКТРОННАЯ ПОЧТА" />
      <input className={css.input} type="text" placeholder="ПАРОЛЬ" />
      <button className={css.btn} type="submit">{register ? "Регистрациия" : "Вход"}</button>
    </form>
  );
};

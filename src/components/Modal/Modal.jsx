import css from "./Modal.module.css";

export const Modal = ({ register, logIn, closeModal }) => {
  const onSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form action="submit" className={css.form} onSubmit={onSubmit}>
      <h5 className={css.title}>
        {register && "Введите данные для регистрации"}
        {logIn && "Введите данные для входа в аккаунт"}
      </h5>
      <input
        className={css.input}
        type="email"
        placeholder="ЭЛЕКТРОННАЯ ПОЧТА"
      />
      <input className={css.input} type="text" placeholder="ПАРОЛЬ" />
      <button className={css.btn} type="submit">
        {register && "Регистрациия" }
        {logIn&& "Вход"}
      </button>
      <button className={css.closeBtn} onClick={() => closeModal()}>
        x
      </button>
    </form>
  );
};

import css from "./Welcome.module.css";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

export const Welcome = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const onLogin = () => {
    setIsLoginOpen(true);
  };
  const onRegister = () => {
    setIsRegisterOpen(true);
  };

  const closeModal = () => {
    setIsLoginOpen(false);
    setIsRegisterOpen(false);
  };
  return (
    <div className={css.container}>
      <Header
        onLogin={onLogin}
        onRegister={onRegister}
        isButtonsDisabled={(isLoginOpen || isRegisterOpen) && true}
      />
      <div className={css.imgWrap}>
        <div
          className={
            isLoginOpen || isRegisterOpen ? css.contentDisabled : css.content
          }
        >
          <h1 className={css.headTitle}>
            Зарабатывай на реферальной программе
          </h1>
          <div className={css.btnGroup}>
            <button className={css.btn} onClick={()=>setIsRegisterOpen(true)}> Хочу начать! </button>
            <button className={css.btn}> Как это работает? </button>
          </div>
          </div>
          <div
            className={
              isLoginOpen || isRegisterOpen ? css.modal : css.modalDisabled
            }
          >
            <Modal
              register={isRegisterOpen ? true : false}
              closeModal={closeModal}
            />{" "}
          </div>
        
      </div>
    </div>
  );
};

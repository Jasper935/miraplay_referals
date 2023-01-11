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
  const onRegister= () => {
    setIsRegisterOpen(true);
  };

  const closeModal=()=>{
    setIsLoginOpen(false)
    setIsRegisterOpen(false)

  }
  return (
    <div className={css.container}>
      <Header onLogin={onLogin} onRegister={onRegister} isButtonsDisabled={(isLoginOpen||isRegisterOpen)&&true}/>
      <div className={css.imgWrap}>
        <h1 className={isLoginOpen||isRegisterOpen ? css.headTitleDisabled : css.headTitle}>
          {" "}
          
          Зарабатывай на реферальной программе
        </h1>
        <div className={isLoginOpen||isRegisterOpen ? css.modal : css.modalDisabled}>
          <Modal register={isRegisterOpen?true:false} logIn={setIsLoginOpen?true:false} closeModal={closeModal} />{" "}
        </div>
      </div>
    </div>
  );
};

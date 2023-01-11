import css from "./Welcome.module.css";
import { Header } from "../../components/Header/Header";
import { useState } from "react";
import { Modal } from "../../components/Modal/Modal";

export const Welcome = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onClick = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <div className={css.container}>
      <Header onClick={onClick} />
      <div className={css.imgWrap}>
        <h1 className={isModalOpen ? css.headTitleDisabled : css.headTitle}>
          {" "}
          
          Зарабатывай на реферальной программе
        </h1>
        <div className={isModalOpen ? css.modal : css.modalDisabled}>
          <Modal register={true} />{" "}
        </div>
      </div>
    </div>
  );
};

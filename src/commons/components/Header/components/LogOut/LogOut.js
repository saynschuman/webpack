import React from "react";
import Tooltip from "src/commons/components/Tooltip";
import styles from "../../Header.module.scss";
import logoutImg from "../../img/out.png";

const LogOut = () => {
  const id = "logOut";
  const text = "Выход из системы";
  return (
    <>
      <Tooltip target={id} text={text} />
      <img id={id} className={styles.logoutImg} src={logoutImg} alt={"info"} />
    </>
  );
};

export default LogOut;

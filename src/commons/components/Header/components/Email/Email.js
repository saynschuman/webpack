import React from "react";
import styles from "../../Header.module.scss";
import mailImg from "../../img/mail.png";
import Tooltip from "src/commons/components/Tooltip";

const Email = () => {
  const id = "tooltipEmail";
  const text =
    "По ЛЮБЫМ вопросам можно обращаться в отдел поддержки по электронной почте: support@promrg.ru";
  return (
    <>
      <Tooltip target={id} text={text} />
      <div className={styles.HeaderItemLinks} id={id}>
        <img className={styles.phoneImg} src={mailImg} alt={"info"} />
        <a href="mailto:support@promrg.ru" className={styles.HeaderLink}>
          support@promrg.ru
        </a>
      </div>
    </>
  );
};

export default Email;

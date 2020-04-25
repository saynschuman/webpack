import React from "react";
import styles from "../../Header.module.scss";
import phoneImg from "../../img/phone.png";
import Tooltip from "src/commons/components/Tooltip";

const PhoneNumber = () => {
  const id = "tooltipPhone";
  const text =
    "Контактный телефон службы поддержки: +7(495)663-71-07, доб. 101";
  return (
    <>
      <Tooltip target={id} text={text} />
      <div className={styles.HeaderItemLinks} id={id}>
        <img className={styles.phoneImg} src={phoneImg} alt={"info"} />
        <a href="tel:+7(495)663-71-07" className={styles.HeaderLink}>
          +7(495)663-71-07
        </a>
      </div>
    </>
  );
};

export default PhoneNumber;

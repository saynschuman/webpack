import React from "react";
import { Link } from "react-router-dom";
import logoImg from "./img/logo.svg";
import styles from "./Header.module.scss";
import PhoneNumber from "./components/PhoneNumber/PhoneNumber";
import Email from "./components/Email/Email";
import LogOut from "./components/LogOut/LogOut";
import { clientAPI } from "src/commons/api/client";

const Header = (props) => {
  const logout = () => {
    console.log("logOut");
  };

  const loadUser = async () => {
    const activeUser = await clientAPI.user.getActiveUser();
  };

  React.useEffect(() => {
    loadUser();
  }, []);

  return (
    <div className={styles.HeaderWrapper}>
      <div className={styles.Header}>
        <Link to="/">
          <img className={styles.logoImg} src={logoImg} alt="logo" />
        </Link>
        <PhoneNumber />
        <Email />
        <div className={styles.HeaderItem}>
          <div>
            <div className={styles.HeaderItemName}>firstName lastName</div>
            <div className={styles.HeaderItemCompany}>
              props.activeUser.company_title
            </div>
          </div>
          <div onClick={logout}>
            <LogOut />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

import React, { useState } from "react";
import { Tooltip } from "reactstrap";
import css from "./style.module.scss";

const TooltipComponent = ({ target, text, mail, closeCourse, isTop }) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);

  return (
    <Tooltip
      placement={isTop ? "top" : "bottom"}
      isOpen={tooltipOpen}
      target={target}
      toggle={toggle}
      className={css.tooltip}
      delay={{ show: 150, hide: 0 }}
    >
      {closeCourse && (
        <span>
          {closeCourse} <br />
        </span>
      )}
      {text}{" "}
      {mail && (
        <>
          <span style={{ textDecoration: "underline" }}>support@promrg.ru</span> <br /> с просьбой
          продлить курс
        </>
      )}
    </Tooltip>
  );
};

export default TooltipComponent;

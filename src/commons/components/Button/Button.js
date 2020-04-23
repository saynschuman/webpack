import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Wrapper = styled.button`
  color: ${({ color }) => color};
  background: ${({ background }) => background};
  border-radius: ${({ borderRadius }) => borderRadius}px;
  font-size: ${({ fontSize }) => fontSize}px;
  border: ${({ border }) => border};
  padding: ${({ padding }) => padding};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  cursor: pointer;
  text-transform: ${({ textTransform }) => textTransform};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

Button.propTypes = {
  disabled: PropTypes.bool,
  textTransform: PropTypes.string,
  background: PropTypes.string,
  borderRadius: PropTypes.number,
  children: PropTypes.node,
  color: PropTypes.string,
  fontSize: PropTypes.number,
  border: PropTypes.string,
  padding: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default Button;

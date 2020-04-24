// @flow

import * as React from "react";
import styled from "styled-components";

type Props = {
  disabled?: boolean,
  textTransform?: string,
  background?: string,
  borderRadius?: number,
  children: React.Node,
  color?: string,
  fontSize?: number,
  border?: string,
  padding?: string,
  width?: string,
  height?: string,
};

const Wrapper: React.ComponentType<Props> = styled.button`
  color: ${({ color }) => (!!color ? color : "#000")};
  background: ${({ background }) => (!!background ? background : "buttonface")};
  border-radius: ${({ borderRadius }) => (!!borderRadius ? borderRadius : 3)}px;
  font-size: ${({ fontSize }) => (!!fontSize ? fontSize : 14)}px;
  border: ${({ border }) => (!!border ? border : "1px solid #999")};
  padding: ${({ padding }) => (!!padding ? padding : "5px")};
  height: ${({ height }) => (!!height ? height : "auto")};
  width: ${({ width }) => (!!width ? width : "auto")};
  cursor: ${({ cursor }) => (!!cursor ? cursor : "pointer")};
  text-transform: ${({ textTransform }) =>
    !!textTransform ? textTransform : "none"};
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  &:focus {
    outline: none;
  }
`;

const Button = (props: Props): React.Node => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default Button;

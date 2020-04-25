import styled from "styled-components";

export default styled.div`
  @font-face {
    font-family: "FSAlbert";
    src: url("../fonts/FS Albert Pro.otf");
  }

  @font-face {
    font-family: "Roboto";
    src: url("../fonts/roboto-regular-webfont.woff");
    font-weight: normal;
    font-style: normal;
  }

  div,
  span,
  label,
  button,
  input,
  select,
  textarea {
    font-family: FSAlbert, sans-serif !important;
  }
`;

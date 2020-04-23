import React from "react";
import { storiesOf } from "@storybook/react";
import {
  withKnobs,
  text,
  boolean,
  color,
  number,
} from "@storybook/addon-knobs";
import Button from "./Button";

const stories = storiesOf("Common", module);
stories.addDecorator(withKnobs);

stories.add("Button", () => {
  return (
    <Button
      disabled={boolean("Disabled", false)}
      textTransform={text("text-transform", "uppercase")}
      color={color("color", "#fff")}
      background={color("background", "#3FC02A")}
      borderRadius={number("border-radius", 16)}
      fontSize={number("font-size", 14)}
      border={text("border", "none")}
      padding={text("padding", "5px 20px")}
      width={text("width", "auto")}
      height={text("height", "auto")}
    >
      {text("inner text", "active")}
    </Button>
  );
});

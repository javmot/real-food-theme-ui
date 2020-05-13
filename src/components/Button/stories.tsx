import React from "react";
import { action } from "@storybook/addon-actions";

import Button from "./index";
import { Styled } from "theme-ui";

export default {
  component: Button,
  title: "Button",
  excludeStories: /.*Data$/,
};

export const buttonData = {
  id: "1",
  children: "Test Button",
};

export const actionsData = {
  onClick: action("onClick"),
};

export const Default = () => (
  <>
    <Styled.h1>Almost before we knew it, we had left the ground.</Styled.h1>
    <Button {...buttonData} {...actionsData}></Button>
  </>
);

export const Secondary = () => (
  <Button {...buttonData} {...actionsData} variant="secondary"></Button>
);

/** @jsx jsx */
import { jsx } from "theme-ui";
import { Button } from "theme-ui";

export default (props) => (
  <Button
    sx={{
      outline: "transparent",
      cursor: "pointer",
      variant: (theme) => theme.buttons[props.size] || "buttons.regular",
    }}
    {...props}
  />
);

/** @jsx jsx */
import { jsx } from "theme-ui";
import { useState } from "react";
import { Input, Label, Box } from "theme-ui";

let idx = 0;
const unique = () => `styled-field-${idx++}`;

const Field = ({
  label,
  as: Control = Input,
  name = unique(),
  status: initialStatus = "normal",
  ...props
}) => {
  const [status, setStatus] = useState(initialStatus);

  const onFocusChange = (focus) => (e) => {
    setStatus(focus ? "focus" : "normal");

    if (focus && props.onFocus) props.onFocus(e);
    if (!focus && props.onBlur) props.onBlur(e);
  };

  return (
    <Box>
      <Label
        htmlFor={name}
        sx={{
          variant: `forms.label.status.${status}`,
        }}
        {...props}
      >
        {label}
      </Label>
      <Control
        sx={{
          variant: `forms.status.${status}`,
        }}
        {...props}
        onFocus={onFocusChange(true)}
        onBlur={onFocusChange(false)}
        id={name}
        name={name}
      ></Control>
    </Box>
  );
};

export default Field;

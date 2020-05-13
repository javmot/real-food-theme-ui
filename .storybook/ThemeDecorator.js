import React from "react";
import ThemeProvider from "../src/ThemeProvider";

const ThemeDecorator = (storyFn) => <ThemeProvider>{storyFn()}</ThemeProvider>;

export default ThemeDecorator;

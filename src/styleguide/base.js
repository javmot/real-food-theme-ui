/** @jsx jsx */
import { jsx } from "theme-ui";
import { Styled } from "theme-ui";
import { TypeScale, TypeStyle, ColorPalette } from "@theme-ui/style-guide";
export default () => (
  <div>
    <Styled.h2>Base Styles</Styled.h2>
    <Styled.h3>Color Palette</Styled.h3>
    <ColorPalette />
    <Styled.h3>Type Scale</Styled.h3>
    <TypeScale />
    <Styled.h3>Font Styles</Styled.h3>
    <TypeStyle
      fontFamily="heading"
      fontWeight="heading"
      fontSize="4"
      lineHeight="heading"
      sx={{
        color: "heading",
      }}
    >
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, saepe?
    </TypeStyle>
    <TypeStyle
      fontFamily="body"
      fontWeight="body"
      fontSize="3"
      lineHeight="body"
    >
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, ullam?
    </TypeStyle>
  </div>
);
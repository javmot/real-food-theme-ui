export default {
  regular: {
    px: 5,
    py: 2,
    fontSize: 2,
    fontWeight: "heading",
  },
  primary: {
    color: "background",
    bg: "primary",
    "&:hover": {
      bg: "primaryDark",
    },
    "&:active": {
      bg: "primaryLight",
    },
  },
  zIndices: [-1, 0, 1, 10, 100],
  outline: {
    color: "primary",
    bg: "background",
    boxShadow: (theme) =>
      `inset 0 0 0 ${theme.borderWidths[2]}px ${theme.colors.primary}`,
    "&:hover": {
      bg: "grayLighter",
      boxShadow: (theme) =>
        `inset 0 0 0 ${theme.borderWidths[2]}px ${theme.colors.primaryDark}`,
    },
    "&:active": {
      bg: "grayLight",
    },
  },
  muted: {
    color: "background",
    bg: "muted",
    "&:hover": {
      bg: "mutedDark",
    },
    "&:active": {
      bg: "mutedLight",
    },
  },
};

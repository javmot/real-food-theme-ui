/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex } from "theme-ui";
import { NavLink } from "react-router-dom";

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1) || "Base";
}

function getPathName(path = "") {
  return capitalize(path.replace(/[/|-]/gi, " ").trim());
}
export default ({ paths = [] }) => (
  <Flex
    as="aside"
    p={4}
    sx={{
      flexDirection: "column",
    }}
  >
    {paths.map((path) => (
      <NavLink
        sx={{
          color: "inherit",
          textDecoration: "none",
          fontWeight: "bold",
          p: 2,
          "&:hover, &:focus, &.active": {
            color: "primary",
          },
        }}
        exact
        key={path}
        to={path}
      >
        {getPathName(path)}
      </NavLink>
    ))}
  </Flex>
);

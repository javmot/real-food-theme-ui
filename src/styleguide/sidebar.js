/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex, NavLink } from "theme-ui";
import { NavLink as RouterLink } from "react-router-dom";

function capitalize(name) {
  return name.charAt(0).toUpperCase() + name.slice(1);
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
        key={path}
        to={path}
        p={2}
        strict={true}
        exact={true}
        as={RouterLink}
      >
        {getPathName(path)}
      </NavLink>
    ))}
  </Flex>
);

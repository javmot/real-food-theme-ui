/** @jsx jsx */
import { jsx } from "theme-ui";
import { Flex, NavLink } from "theme-ui";
import { Link } from "react-router-dom";

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
      <NavLink key={path} to={path} p={2} as={Link}>
        {getPathName(path)}
      </NavLink>
    ))}
  </Flex>
);

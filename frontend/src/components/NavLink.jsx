import * as React from "react";
import Button from "@mui/material/Button";
import { Box } from "@mui/material";
import styled from "@emotion/styled";

const pages = [
  {
    title: "Home",
    sub: ["Home1"],
  },
  {
    title: "Shop",
    sub: ["Shop1", "shop2"],
  },
  { title: "Blogs", sub: ["Blogs1"] },
];

export default function NavLink() {
  const NavBox = styled(Box)(({ theme }) => ({
    position: "relative",
    "&:hover": {
      "& .showMenu": {
        display: "block",
        transform: "translateY(0px)",
        background: theme.palette.primary.main,
      },
    },
  }));

  const NavMenu = styled(Box)(({ theme }) => ({
    position: "absolute",
    textAlign: "center",
    display: "none",
    transform: "translateY(5px)",
    transitionDuration: 1,
  }));

  return (
    <Box display="flex">
      {pages.map(({ title, sub }) => (
        <NavBox key={title} position="relative">
          <Button sx={{ color: "black", fontSize: "1rem", fontWeight: 500 }}>
            {title}
          </Button>
          <NavMenu className="showMenu">
            {sub.map((s) => {
              console.log({ s, title });
              return (
                <Button key={s} sx={{ color: "black" }}>
                  {s}
                </Button>
              );
            })}
          </NavMenu>
        </NavBox>
      ))}
    </Box>
  );
}

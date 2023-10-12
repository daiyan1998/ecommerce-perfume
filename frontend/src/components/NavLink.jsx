import * as React from "react";
import Button from "@mui/material/Button";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import Link from "next/link";

const pages = [
  {
    title: "Home",
    navigate: "/",
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
      {pages.map(({ title, sub, navigate }) => (
        <NavBox key={title} position="relative">
          <Link href={navigate ? navigate : ""}>
            <Button sx={{ color: "black", fontSize: "1rem", fontWeight: 500 }}>
              {title}
            </Button>
          </Link>
          <NavMenu className="showMenu" bgcolor="white">
            {sub?.map((s) => {
              return (
                <Typography
                  sx={{
                    display: "block",
                    cursor: "pointer",
                    bgcolor: "white",
                    color: "black",
                    p: "1rem 2rem",
                    ":hover": {
                      bgcolor: "black",
                      color: "white",
                    },
                  }}
                  key={s}
                >
                  {s}
                </Typography>
              );
            })}
          </NavMenu>
        </NavBox>
      ))}
    </Box>
  );
}

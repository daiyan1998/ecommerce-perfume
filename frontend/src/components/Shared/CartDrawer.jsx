import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Badge, Divider, IconButton, Stack, Typography } from "@mui/material";
import {
  CloseOutlined,
  LocalMallOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import Image from "next/image";

export default function CartDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: { lg: 250, xs: "100%" },
        height: "calc(100% - 74px)",
      }}
      role="presentation"
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box display="flex" justifyContent="space-between" p={2}>
        <Stack direction="row" alignItems="center" gap={1}>
          <LocalMallOutlined />
          <Typography>0 Item</Typography>
        </Stack>
        <IconButton>
          <CloseOutlined onClick={toggleDrawer(anchor, false)} />
        </IconButton>
      </Box>
      <Divider />
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
      >
        <Image src="/shopping-bag.svg" height={300} width={200} />
        <Typography p={1} align="center">
          Your shopping bag is empty. Start shopping
        </Typography>
      </Box>
    </Box>
  );

  return (
    <div>
      <>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
          onClick={toggleDrawer("right", true)}
          variant="contained"
        >
          <Badge badgeContent={17} color="error">
            <ShoppingCartOutlined />
          </Badge>
        </IconButton>
        <Drawer
          anchor="right"
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </>
    </div>
  );
}

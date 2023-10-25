import { CloseOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";

const CartItem = ({ item }) => {
  const { image, name, price, qty } = item;
  return (
    <Stack flexDirection="row" p={1}>
      <Box>
        <Image src={image} height={70} width={70} alt="perfume" />
      </Box>
      <Box flexGrow={1} px={1}>
        <Typography>{name}</Typography>
        <Typography>
          {price} × {qty}
        </Typography>
        <Typography>{price * qty}</Typography>
      </Box>
      <div>
        <IconButton>
          <CloseOutlined />
        </IconButton>
      </div>
    </Stack>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
  }),
};

export default CartItem;

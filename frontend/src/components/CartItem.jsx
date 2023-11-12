import { removeFromCart } from "@/slices/cartSlice";
import { CloseOutlined } from "@mui/icons-material";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

const CartItem = ({ item }) => {
  const { _id, image, name, price, qty, ml } = item;

  const dispatch = useDispatch();

  const removeFromCartHandler = (id, ml) => {
    dispatch(removeFromCart({ id, ml }));
  };
  return (
    <Stack flexDirection="row" p={1}>
      <Box>
        <Image src={image} height={70} width={70} alt="perfume" />
      </Box>
      <Box flexGrow={1} px={1}>
        <Typography>
          {name} - {ml}ML
        </Typography>
        <Typography>
          {price} × {qty}
        </Typography>
      </Box>
      <div>
        <IconButton onClick={() => removeFromCartHandler(_id, ml)}>
          <CloseOutlined />
        </IconButton>
      </div>
    </Stack>
  );
};

CartItem.propTypes = {
  item: PropTypes.shape({
    _id: PropTypes.string,
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    qty: PropTypes.number,
    ml: PropTypes.number,
  }),
};

export default CartItem;

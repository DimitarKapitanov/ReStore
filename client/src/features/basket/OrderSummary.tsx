import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import {
  Box,
  Button,
  Container,
  Divider,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import { useStoreContext } from "../../app/context/StoreContext";

export default function OrderSummary() {
  const { basket } = useStoreContext();
  const [deliveryPrice, setDeliveryPrice] = useState(35);

  const calculateTotal = useCallback(() => {
    if (!basket?.items) return 0;

    return basket?.items.reduce(
      (total, item) => total + (item.price / 100) * item.quantity,
      0
    );
  }, [basket?.items]);

  useEffect(() => {
    if (!basket?.items) return;
    setDeliveryPrice((calculateTotal() ?? 0) > 500 ? 0 : 35);
  }, [basket?.items, calculateTotal]);

  const finalTotal = () => {
    const subtotal = calculateTotal();
    if (subtotal === undefined) return 0;
    const discount = subtotal > 500 ? subtotal * 0.2 : 0;
    return subtotal - discount + deliveryPrice;
  };

  return (
    <Container className="order-summary">
      <Typography variant="h4" gutterBottom>
        Order Summary
      </Typography>
      <Box className="order-summary-box">
        <Typography variant="body1">Product</Typography>
        <Typography variant="body1" className="order-summary-box-bold">
          ${calculateTotal().toFixed(2)}
        </Typography>
      </Box>
      {calculateTotal() > 500 && (
        <Box className="order-summary-box">
          <Typography variant="body1">Discount (-20%)</Typography>
          <Typography
            variant="body1"
            color="error"
            className="order-summary-box-bold"
          >
            -${(calculateTotal() * 0.2).toFixed(2)}
          </Typography>
        </Box>
      )}
      <Box className="order-summary-box">
        <Typography variant="body1">Delivery</Typography>
        <Typography variant="body1" className="order-summary-box-bold">
          ${deliveryPrice.toFixed(2)}
        </Typography>
      </Box>
      <Divider sx={{ mb: "20px" }} />
      <Box className="order-summary-box">
        <Typography variant="h6">Total</Typography>
        <Typography variant="h6" className="order-summary-box-bold">
          ${finalTotal().toFixed(2)}
        </Typography>
      </Box>
      <Box className={`order-summary-box order-summary-promo`}>
        <TextField
          className="order-summary-promo-code"
          placeholder="Enter promo code"
          variant="outlined"
          size="medium"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <LocalOfferIcon />
                </InputAdornment>
              ),
              sx: { maxHeight: "46px" },
            },
          }}
        />
        <Button
          className="order-summary-promo-button"
          variant="contained"
          size="medium"
        >
          Apply
        </Button>
      </Box>
      <Button
        className="checkout-button"
        variant="contained"
        sx={{ width: "100%", mt: 2, mb: "20px" }}
      >
        Go to Checkout
      </Button>
    </Container>
  );
}

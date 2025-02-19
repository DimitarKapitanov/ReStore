import { Delete } from "@mui/icons-material";
import { Box, Button, Grid2, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomNumberInput from "../../app/layout/CustomNumberInput";
import { BasketItem } from "../../app/models/basket";
import { useAppDispatch, useAppSelector } from "../../app/store/configureSore";
import { removeBasketItemAsync, updateBasketItemAsync } from "./basketSlice";

interface Props {
  item: BasketItem;
}

export default function BasketItemCard({ item }: Props) {
  const navigate = useNavigate();
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  const handleQuantityChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    newValue: number | undefined
  ) => {
    if (newValue) {
      dispatch(
        updateBasketItemAsync({
          productId: item.productId,
          quantity: newValue,
        })
      );
    }
  };

  return (
    <Grid2 container sx={{ p: 2 }} spacing={2}>
      <Grid2 size={3}>
        <img
          src={item.pictureUrl}
          alt={item.name}
          style={{
            width: "100%",
            backgroundColor: "#ffffff",
            borderRadius: "9px",
            cursor: "pointer",
          }}
          onClick={() => navigate(`/catalog/${item.productId}`)}
        />
      </Grid2>
      <Grid2 size={9}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5">{item.name}</Typography>
              <Button
                variant="contained"
                size="small"
                sx={{ minWidth: "30px", padding: "5px", color: "red" }}
                onClick={() =>
                  dispatch(
                    removeBasketItemAsync({
                      productId: item.productId,
                      quantity: item.quantity,
                      name: "del",
                    })
                  )
                }
                loading={
                  status === "pendingRemoveItem" + item.productId + "del"
                }
              >
                <Delete />
              </Button>
            </Box>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Brand: <span style={{ marginLeft: 6 }}> {item.brand}</span>
            </Typography>
            <Typography
              variant="body1"
              sx={{ display: "flex", alignItems: "center" }}
            >
              Type: <span style={{ marginLeft: 6 }}>{item.type}</span>
            </Typography>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body1">
              ${(item.price / 100).toFixed(2)}
            </Typography>
            <CustomNumberInput
              defaultValue={item.quantity}
              onChange={handleQuantityChange}
            />
          </Box>
        </Box>
      </Grid2>
    </Grid2>
  );
}

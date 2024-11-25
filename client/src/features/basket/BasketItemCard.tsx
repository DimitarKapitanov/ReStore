import { Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Grid2, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import agent from "../../app/api/agent";
import { useStoreContext } from "../../app/context/StoreContext";
import CustomNumberInput from "../../app/layout/CustomNumberInput";
import { BasketItem } from "../../app/models/basket";

interface Props {
  item: BasketItem;
}

export default function BasketItemCard({ item }: Props) {
  const navigate = useNavigate();
  const { setBasket, removeItem } = useStoreContext();
  const [loading, setLoading] = useState(false);
  const handleQuantityChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    newValue: number | undefined
  ) => {
    if (newValue) {
      agent.Basket.updateItem(item.productId, newValue)
        .then((basket) => {
          setBasket(basket);
          toast.success("Quantity updated successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("An error occurred while updating the quantity");
        });
    }
  };

  function handleRemoveItem(productId: string, quantity: number) {
    setLoading(true);
    agent.Basket.removeItem(productId, quantity)
      .then(() => {
        removeItem(productId, quantity);
        toast.success("Item removed successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("An error occurred while removing the item");
      })
      .finally(() => setLoading(false));
  }
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
              <LoadingButton
                variant="contained"
                size="small"
                sx={{ minWidth: "30px", padding: "5px", color: "red" }}
                onClick={() => handleRemoveItem(item.productId, item.quantity)}
                loading={loading}
              >
                <Delete />
              </LoadingButton>
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

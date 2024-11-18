import { Delete } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Box, Grid2, Typography } from "@mui/material";
import CustomNumberInput from "../../app/layout/CustomNumberInput";
import { BasketItem } from "../../app/models/basket";

interface Props {
  item: BasketItem;
  onQuantityChange: (productId: string, quantity: number) => void;
  onRemove: (productId: string, quantity: number) => void;
  loading: boolean;
}

export default function BasketItemCard({
  item,
  onQuantityChange,
  onRemove,
  loading,
}: Props) {
  const handleQuantityChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    newValue: number | undefined
  ) => {
    if (newValue) {
      onQuantityChange(item.productId, newValue);
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
          }}
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
          {/* Product name, brand, type and remove item button*/}
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h5">{item.name}</Typography>
              <LoadingButton
                variant="contained"
                size="small"
                sx={{ minWidth: "30px", padding: "5px", color: "red" }}
                onClick={() => onRemove(item.productId, item.quantity)}
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

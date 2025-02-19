import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  useTheme,
} from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";
import { useAppDispatch, useAppSelector } from "../../app/store/configureSore";
import { currencyFormat } from "../../app/util/util";
import { addBasketItemAsync } from "../basket/basketSlice";
import TextRating from "./TextRating";

interface Props {
  readonly product: Product;
}

export default function ProductCard({ product }: Props) {
  const theme = useTheme();
  const isLightTheme = theme.palette.mode === "light";
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <Card sx={{ width: "100%", borderRadius: "20px" }}>
      <CardMedia
        sx={{
          height: 298,
          backgroundSize: "contain",
          bgcolor: "primary.light",
          userSelect: "none",
        }}
        image={product.pictureUrl}
        title={product.name}
        component={Link}
        to={`/catalog/${product.id}`}
      />
      <CardHeader
        title={product.name}
        titleTypographyProps={{
          sx: {
            fontWeight: "bold",
            color: isLightTheme ? "#000000" : "#ffffff",
            fontSize: "16px",
          },
        }}
        sx={{ paddingBottom: 0 }}
      />
      <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
        <TextRating />
        <Typography variant="body2" color="text.secondary">
          {product.brand} / {product.type}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            gutterBottom
            color="secondary"
            variant="h5"
            sx={{ mb: 0 }}
          >
            {currencyFormat(product.price)}
          </Typography>
          <CardActions sx={{ padding: 0 }}>
            <Button
              sx={{ color: "success.light", padding: 0 }}
              aria-label="add to shopping cart"
              onClick={() =>
                dispatch(addBasketItemAsync({ productId: product.id }))
              }
              loading={status === "pendingAddItem" + product.id}
            >
              <AddShoppingCartIcon />
            </Button>
          </CardActions>
        </Box>
      </CardContent>
    </Card>
  );
}

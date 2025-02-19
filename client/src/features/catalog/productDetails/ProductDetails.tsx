import { Container, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NotFound from "../../../app/errors/NotFound";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/store/configureSore";
import { fetchProductAsync, productSelectors } from "../catalogSlice";
import ProductInfo from "./ProductInfo";
import TabsPanel from "./TabPanel";

export default function ProductDetails() {
  const { basket } = useAppSelector((state) => state.basket);
  const { status: productStatus } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();
  const { id } = useParams<{ id: string }>();
  const product = useAppSelector((state) =>
    productSelectors.selectById(state, id!)
  );

  const [tabValue, setTabValue] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const items = basket?.items.find((x) => x.productId === product?.id);

  useEffect(() => {
    if (items) {
      setQuantity(items.quantity);
    }
    if (!product && id) dispatch(fetchProductAsync(id));
  }, [id, items, product, dispatch]);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  if (productStatus.includes("pending"))
    return <LoadingComponent message="Loading product..." />;
  if (!product) return <NotFound />;

  return (
    <Container sx={{ pt: 9 }}>
      <Grid container spacing={6} sx={{ mt: 0 }}>
        <Grid size={7}>
          <img
            src={product.pictureUrl}
            alt={product.name}
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid
          size={5}
          sx={{ boxShadow: "0 0 5px #ccc", padding: "15px 20px !important" }}
        >
          <Typography variant="h3">{product.name}</Typography>
          <Divider sx={{ mb: 2 }} />
          <Typography variant="h4" color="secondary">
            ${(product.price / 100).toFixed(2)}
          </Typography>
          <ProductInfo
            product={product}
            quantity={quantity}
            setQuantity={setQuantity}
          />
        </Grid>
      </Grid>
      <TabsPanel
        description={product.description}
        tabValue={tabValue}
        handleTabChange={handleTabChange}
      />
    </Container>
  );
}

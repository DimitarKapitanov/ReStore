import { Box, Container } from "@mui/material";
import { useEffect } from "react";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureSore";
import Filters from "./Filters";
import ProductList from "./ProductList";
import { fetchProductsAsync, productSelectors } from "./catalogSlice";

export default function Catalog() {
  const products = useAppSelector(productSelectors.selectAll);
  const { productLoaded, status } = useAppSelector((state) => state.catalog);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!productLoaded) {
      dispatch(fetchProductsAsync());
    }
  }, [productLoaded, dispatch]);

  if (status.includes("pending"))
    return <LoadingComponent message="Loading products..." />;

  return (
    <Container maxWidth="xl" sx={{ mt: 10 }}>
      <Box className="box-card">
        <Filters />
        <Box sx={{ flex: 1 }}>
          <ProductList products={products} />
        </Box>
      </Box>
    </Container>
  );
}

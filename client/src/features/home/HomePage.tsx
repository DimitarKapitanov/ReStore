import { Container, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import Brands from "./Brands";
import DressStyle from "./DressStyle";
import Head from "./Head";
import NewProducts from "./NewProducts";

export default function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.recentlyAddedProducts()
      .then((response) => setProducts(response))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent message="Welcome ..." />;

  return (
    <Container sx={{ maxWidth: "100% !important", padding: "0 !important" }}>
      <Head />
      <Brands />
      <NewProducts
        products={products}
        buttonLink="/catalog"
        headerName="NEW ARRIVALS"
      />
      <Divider />
      <NewProducts
        products={products}
        buttonLink="/catalog"
        headerName="TOP SELLING"
      />
      <DressStyle />
    </Container>
  );
}

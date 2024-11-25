import { Container, Divider, Grid2 as Grid, Typography } from "@mui/material";
import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import agent from "../../../app/api/agent";
import NotFound from "../../../app/errors/NotFound";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Product } from "../../../app/models/product";
import ProductInfo from "./ProductInfo";
import TabsPanel from "./TabPanel";

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});
  const [tabValue, setTabValue] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const response = await agent.Catalog.details(id!);
        setProduct(response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const handleAddToItem = async (productId: string) => {
    setLoadingStates((prevState) => ({ ...prevState, [productId]: true }));
    try {
      await agent.Basket.addItem(productId, quantity).finally(() =>
        setLoadingStates((prevState) => ({
          ...prevState,
          [productId]: false,
        }))
      );
      toast.success("Item added to basket");
      setTimeout(() => {
        navigate("/basket");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuantityChange = (
    _event: React.ChangeEvent<HTMLInputElement>,
    newValue: number | undefined
  ) => {
    if (newValue) {
      setQuantity(newValue);
    }
  };

  if (loading) return <LoadingComponent message="Loading product..." />;
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
            onQuantityChange={handleQuantityChange}
            onAddToCart={handleAddToItem}
            loading={loadingStates[product.id]}
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

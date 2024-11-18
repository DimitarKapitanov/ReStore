import { Container, Divider, Grid2, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Basket } from "../../app/models/basket";
import BasketItemCard from "./BasketItemCard";
import OrderSummary from "./OrderSummary";

export default function BasketPage() {
  const [loading, setLoading] = useState(true);
  const [basket, setBasket] = useState<Basket | null>(null);
  const [loadingStates, setLoadingStates] = useState<{
    [key: string]: boolean;
  }>({});

  useEffect(() => {
    agent.Basket.get()
      .then((response) => {
        console.log("Basket response --> ", response);
        setBasket(response);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  const handleQuantityChange = (productId: string, quantity: number) => {
    agent.Basket.updateItem(productId, quantity)
      .then(() => {
        setBasket((prevBasket) => {
          if (!prevBasket) return null;
          const updatedItems = prevBasket.items.map((item) =>
            item.productId === productId ? { ...item, quantity } : item
          );
          return { ...prevBasket, items: updatedItems };
        });
      })
      .catch((error) => console.log(error));
  };

  const handleRemoveItem = async (productId: string, quantity: number) => {
    try {
      setLoadingStates((prevState) => ({ ...prevState, [productId]: true }));

      await agent.Basket.removeItem(productId, quantity)
        .then((response) => {
          if (response === 200) {
            //remove item from basket
            const newBasket = basket!.items.filter(
              (item) => item.productId !== productId
            );
            if (basket) setBasket({ ...basket, items: newBasket });
          }
        })
        .catch((error) => console.log(error))
        .finally(() =>
          setLoadingStates((prevState) => ({
            ...prevState,
            [productId]: false,
          }))
        );
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <LoadingComponent />;
  if (!basket || basket?.items.length === 0)
    return <Typography variant="h3">Your basket is empty</Typography>;

  return (
    <Container sx={{ pt: 9 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Your basket
      </Typography>
      <Grid2 container spacing={6} sx={{ mt: 0 }}>
        <Grid2
          size={7}
          sx={{
            border: "1px solid rgba(0, 0, 0, 0.1)",
            borderRadius: "20px",
            p: 2,
            boxShadow: "-24px 0px 50px 0px rgba(0,0,0,0.75)",
          }}
        >
          {basket.items.map((item, index) => (
            <Fragment key={item.pictureUrl}>
              <BasketItemCard
                key={item.productId}
                item={item}
                onQuantityChange={handleQuantityChange}
                onRemove={handleRemoveItem}
                loading={loadingStates[item.productId] || false}
              />
              {index < basket.items.length - 1 && <Divider />}
            </Fragment>
          ))}
        </Grid2>
        <Grid2 size={5}>
          <OrderSummary items={basket?.items || []} />
        </Grid2>
      </Grid2>
    </Container>
  );
}

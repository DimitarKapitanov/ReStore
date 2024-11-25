import {
  Box,
  Button,
  Container,
  Divider,
  Grid2,
  Link,
  Typography,
} from "@mui/material";
import { Fragment } from "react";
import { useStoreContext } from "../../app/context/StoreContext";
import BasketItemCard from "./BasketItemCard";
import OrderSummary from "./OrderSummary";
export default function BasketPage() {
  const { basket } = useStoreContext();

  if (!basket || basket?.items.length === 0)
    return (
      <Box
        sx={{
          display: "flex",
          mt: 10,
          flexDirection: "column",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography variant="h3">Your basket is empty!</Typography>
        <Typography variant="h5" sx={{ mt: 2 }}>
          Go back to the catalog and start adding items to your basket!
        </Typography>
        {/* back to catalog button */}
        <Button
          color="secondary"
          sx={{ mt: 5 }}
          component={Link}
          href="/catalog"
          variant="contained"
        >
          Back to catalog
        </Button>
      </Box>
    );

  return (
    <Container sx={{ pt: 9 }}>
      <Typography variant="h3" sx={{ mb: 4 }}>
        Your basket
      </Typography>
      <Grid2
        container
        spacing={6}
        sx={{ mt: 0, minHeight: "100vh", alignItems: "flex-start" }}
      >
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
              <BasketItemCard key={item.productId} item={item} />
              {index < basket.items.length - 1 && <Divider />}
            </Fragment>
          ))}
        </Grid2>
        <Grid2 size={5} sx={{ position: "sticky", top: 120 }}>
          <OrderSummary />
        </Grid2>
      </Grid2>
    </Container>
  );
}

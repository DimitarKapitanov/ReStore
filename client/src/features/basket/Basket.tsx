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

    useEffect(() => {
        agent.Basket.get()
            .then(response => setBasket(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <LoadingComponent />;
    if (!basket) return <Typography variant='h3'>Your basket is empty</Typography>

    // function handleRemoveProduct(id: any): void {
    //     throw new Error('Function not implemented.');
    // }

    // function handleQuantityChange(productId: string, arg1: number): void {
    //     throw new Error('Function not implemented.');
    // }
    // const totalPrice = basket.items.reduce((sum, product) => sum + product.price * product.quantity, 0);
    return (
        <Container sx={{ pt: 9 }}>
            <Typography variant='h3' sx={{ mb: 4 }}>Your basket</Typography>
            <Grid2 container spacing={6} sx={{ mt: 0 }}>
                <Grid2 size={7} sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '20px', p: 2, boxShadow: '-24px 0px 50px 0px rgba(0,0,0,0.75)' }}>
                    {basket.items.map((item, index) => (
                        <Fragment key={item.pictureUrl}>
                            <BasketItemCard item={item} key={item.productId} />
                            {index < basket.items.length - 1 && <Divider />}
                        </Fragment>
                    ))}
                </Grid2>
                <Grid2 size={5}>
                    <OrderSummary items={basket.items} />
                </Grid2>
            </Grid2>
        </Container>
    );
}
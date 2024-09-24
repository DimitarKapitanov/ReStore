import { Container, Grid2, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Basket } from "../../app/models/basket";
import BasketItemCard from "./BasketItemCard";

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
            <Typography variant='h3'>Your basket</Typography>
            <Grid2 container spacing={6} sx={{ mt: 0 }}>
                <Grid2 size={7}>
                    {basket.items.map(item => (
                        <BasketItemCard item={item} key={item.productId} />
                    ))}
                </Grid2>
                <Grid2 size={5}>

                </Grid2>


            </Grid2>
        </Container>
    );
}
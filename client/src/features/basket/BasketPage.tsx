import { Add as AddIcon, Delete as DeleteIcon, Remove as RemoveIcon } from '@mui/icons-material';
import {
    Box,
    Button,
    Container,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Paper,
    TextField,
    Typography
} from '@mui/material';
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Basket } from "../../app/models/basket";

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
    function handleRemoveProduct(id: any): void {
        throw new Error('Function not implemented.');
    }

    function handleQuantityChange(productId: string, arg1: number): void {
        throw new Error('Function not implemented.');
    }
    const totalPrice = basket.items.reduce((sum, product) => sum + product.price * product.quantity, 0);
    return (
        <Container maxWidth="md">
            <Typography variant="h4" gutterBottom>
                Shopping Cart
            </Typography>
            <Paper elevation={3}>
                <List>
                    {basket.items.map((product) => (
                        <ListItem key={product.productId} divider>
                            <ListItemText
                                primary={product.name}
                                secondary={`Price: $${product.price.toFixed(2)}`}
                            />
                            <Box display="flex" alignItems="center" mr={2}>
                                <IconButton
                                    size="small"
                                    onClick={() => handleQuantityChange(product.productId, product.quantity - 1)}
                                >
                                    <RemoveIcon />
                                </IconButton>
                                <TextField
                                    value={product.quantity}
                                    onChange={(e) => handleQuantityChange(product.productId, parseInt(e.target.value) || 0)}
                                    type="number"
                                    slotProps={{ input: { style: { width: '70px' } } }}
                                    sx={{ width: '50px', mx: 1 }}
                                />
                                <IconButton
                                    size="small"
                                    onClick={() => handleQuantityChange(product.productId, product.quantity + 1)}
                                >
                                    <AddIcon />
                                </IconButton>
                            </Box>
                            <Box display="flex" alignItems="center">
                                <Typography variant="body2" sx={{ mr: 2 }}>
                                    ${(product.price * product.quantity).toFixed(2)}
                                </Typography>
                                <IconButton edge="end" onClick={() => handleRemoveProduct(product.productId)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Box>
                        </ListItem>
                    ))}
                </List>
            </Paper>
            <Box mt={3} display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="h6">
                    Total: ${totalPrice.toFixed(2)}
                </Typography>
                <Button variant="contained" color="primary">
                    Checkout
                </Button>
            </Box>
        </Container>
    );
}
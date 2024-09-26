import { Box, Button, Container, Divider, TextField, Typography } from '@mui/material';

interface Props {
    items: { name: string; quantity: number; price: number }[];
}

export default function OrderSummary({ items }: Props) {
    const calculateTotal = () => {
        return items.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <Container sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '20px', p: 4, boxShadow: '24px 0px 50px 0px rgba(0,0,0,0.75)' }}>
            <Typography variant="h4" gutterBottom>Order Summary</Typography>
            <Box className='order-summary-box'>
                <Typography variant="body1">Product</Typography>
                <Typography variant="body1" className='order-summary-box-bold'>${(calculateTotal() / 100).toFixed(2)}</Typography>
            </Box>
            {calculateTotal() / 100 > 500 && (
                <Box className='order-summary-box'>
                    <Typography variant="body1">Discount (-20%)</Typography>
                    <Typography variant="body1" color='error' className='order-summary-box-bold'>-${((calculateTotal() / 100) * 0.20).toFixed(2)}</Typography>
                </Box>
            )}
            {calculateTotal() / 100 > 500 ? (
                <Box className='order-summary-box'>
                    <Typography variant="body1">Delivery Free</Typography>
                    <Typography variant="body1" className='order-summary-box-bold'>$0.00</Typography>
                </Box>
            ) : (
                <Box className='order-summary-box'>
                    <Typography variant="body1">Delivery</Typography>
                    <Typography variant="body1" className='order-summary-box-bold'>$35.00</Typography>
                </Box>
            )}
            <Divider sx={{ mb: '20px' }} />
            <Box className='order-summary-box'>
                <Typography variant="h6">Total</Typography>
                <Typography variant="h6" className='order-summary-box-bold'>${((calculateTotal() / 100) - ((calculateTotal() / 100) * 0.20)).toFixed(2)}</Typography>
            </Box>
            <Box className='order-summary-box'>
                <TextField label="Enter promo code" variant="filled" />
                <Button variant="contained">Apply</Button>
            </Box>
            <Button variant="contained" sx={{ width: '100%', mt: 2, mb: '20px' }}>
                Go to Checkout
            </Button>
        </Container >
    );
};

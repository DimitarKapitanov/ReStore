import { Box, Button, Grid2, Typography } from '@mui/material';
import { BasketItem } from "../../app/models/basket";

interface Props {
    item: BasketItem;
}

export default function BasketItemCard({ item }: Props) {
    const handleIncrease = (id: number) => {
        // Логика за увеличаване на количеството
        console.log(`Increase quantity for item with id: ${id}`);
    };

    const handleDecrease = (id: number) => {
        // Логика за намаляване на количеството
        console.log(`Decrease quantity for item with id: ${id}`);
    };
    return (
        <Grid2 container sx={{ border: '1px solid rgba(0, 0, 0, 0.1)', borderRadius: '20px', p: 2 }} spacing={2} >
            <Grid2 size={3} >
                <img src={item.pictureUrl} alt={item.name} style={{ width: '100%', backgroundColor: '#ffffff', borderRadius: '9px' }} />
            </Grid2>
            <Grid2 size={9}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
                    <Box>
                        <Typography variant='h5'>{item.name}</Typography>
                        <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }}>Brand: <span style={{ marginLeft: 6 }}> {item.brand}</span></Typography>
                        <Typography variant='body1' sx={{ display: 'flex', alignItems: 'center' }}>Type: <span style={{ marginLeft: 6 }}>{item.type}</span></Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography variant='body1'>${(item.price / 100).toFixed(2)}</Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => handleDecrease(item.quantity)}
                                sx={{ minWidth: '30px', padding: '5px' }}
                            >
                                -
                            </Button>
                            <Typography variant='body1' sx={{ margin: '0 10px' }}>{item.quantity}</Typography>
                            <Button
                                variant="contained"
                                size="small"
                                onClick={() => handleIncrease(item.quantity)}
                                sx={{ minWidth: '30px', padding: '5px' }}
                            >
                                +
                            </Button>
                        </Box>
                    </Box>
                </Box>
            </Grid2>
        </Grid2>
    )
}

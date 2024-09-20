import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { LoadingButton } from '@mui/lab';
import { Box, Card, CardActions, CardContent, CardHeader, CardMedia, Typography, useTheme } from "@mui/material";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import agent from '../../app/api/agent';
import { Product } from "../../app/models/product";
import TextRating from './TextRating';

interface Props {
    readonly product: Product;
}

export default function ProductCard({ product }: Props) {
    const theme = useTheme();
    const isLightTheme = theme.palette.mode === 'light';
    const [loading, setLoading] = useState(false);

    function handleAddToItem(productId: string) {

        setLoading(true);
        agent.Basket.addItem(productId).catch(error => console.log(error)).finally(() => setLoading(false));
    }

    return (
        <Card sx={{ width: '100%', borderRadius: '20px' }} >
            <CardMedia
                sx={{ height: 298, backgroundSize: 'contain', bgcolor: 'primary.light', userSelect: 'none' }}
                image={product.pictureUrl}
                title={product.name}
                component={Link}
                to={`/catalog/${product.id}`}
            />
            <CardHeader
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: isLightTheme ? '#000000' : '#ffffff', fontSize: '16px' }
                }}
                sx={{ paddingBottom: 0 }}
            />
            <CardContent sx={{ paddingTop: 0, paddingBottom: 0 }}>
                <TextRating />
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Typography gutterBottom color='secondary' variant="h5" sx={{ mb: 0 }}>
                        ${(product.price / 100).toFixed(2)}
                    </Typography>
                    <CardActions sx={{ padding: 0 }}>
                        <LoadingButton
                            sx={{ color: "success.light", padding: 0 }}
                            aria-label="add to shopping cart"
                            onClick={() => handleAddToItem(product.id)}
                            loading={loading}
                        >
                            <AddShoppingCartIcon />
                        </LoadingButton>
                    </CardActions>
                </Box>
            </CardContent>

        </Card>
    )
}

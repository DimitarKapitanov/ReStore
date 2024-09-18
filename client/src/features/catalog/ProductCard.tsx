import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { LoadingButton } from '@mui/lab';
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography, useTheme } from "@mui/material";
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
        <Card sx={{ width: '100%' }}>
            <CardMedia
                sx={{ height: 340, backgroundSize: 'contain', bgcolor: 'primary.light' }}
                image={product.pictureUrl}
                title={product.name}
            />
            <CardHeader
                title={product.name}
                titleTypographyProps={{
                    sx: { fontWeight: 'bold', color: isLightTheme ? 'primary.main' : '#ffffff', fontSize: '16px' }
                }}
            />
            <CardContent>
                <TextRating />
                <Typography variant="body2" color="text.secondary">
                    {product.brand} / {product.type}
                </Typography>
                <Typography gutterBottom color='secondary' variant="h5">
                    ${(product.price / 100).toFixed(2)}
                </Typography>
            </CardContent>
            <CardActions sx={{ justifyContent: 'space-between' }}>
                <LoadingButton
                    sx={{ color: "success.light" }}
                    aria-label="add to shopping cart"
                    onClick={() => handleAddToItem(product.id)}
                    loading={loading}
                >
                    <AddShoppingCartIcon />
                </LoadingButton>
                <IconButton
                    sx={{ color: 'warning.light' }}
                    aria-label="add to shopping cart"
                    component={Link}
                    to={`/catalog/${product.id}`}
                >
                    <VisibilityIcon />
                </IconButton>
            </CardActions>
        </Card>
    )
}

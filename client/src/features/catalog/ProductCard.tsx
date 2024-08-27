import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import { Link } from 'react-router-dom';
import { Product } from "../../app/models/product";
import TextRating from './TextRating';

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
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
                    sx: { fontWeight: 'bold', color: 'primary.main', fontSize: '16px' }
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
                <IconButton
                    sx={{ color: "success.light" }}
                    aria-label="add to shopping cart"

                >
                    <AddShoppingCartIcon />
                </IconButton>
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

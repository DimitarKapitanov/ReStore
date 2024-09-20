import { Box, Button, Container, Typography } from '@mui/material';
import { Product } from '../../app/models/product';
import ProductList from '../catalog/ProductList';


interface Props {
    headerName: string;
    products: Product[];
    buttonLink: string;
}
export default function NewProducts({ products, buttonLink, headerName }: Props) {
    return (
        <Container sx={{ mt: 5 }} className='new-products'>
            <Typography variant="h2" sx={{ display: 'flex', justifyContent: 'center', mt: 9 }}>{headerName}</Typography>
            <Box sx={{ mt: 7, width: '100%' }} className='new-products-cards'>
                <Box>
                    <ProductList products={products} />
                </Box>
            </Box>
            <Button className='view-all-products' href={buttonLink}>View All</Button>
        </Container >
    )
}

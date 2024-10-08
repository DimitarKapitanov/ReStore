import { Grid2 } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";

interface Props {
    readonly products: Product[];
}
export default function ProductList({ products }: Props) {
    return (
        <Grid2 container spacing={4}>
            {products.map(product => (
                <Grid2 size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={product.id}>
                    <ProductCard key={product.id} product={product} />
                </Grid2>
            ))}
        </Grid2>
    )
}

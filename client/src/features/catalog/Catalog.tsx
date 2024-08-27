import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Product } from "../../app/models/product";
import Filters from "./Filters";
import ProductList from "./ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        agent.Catalog.list().then(response => setProducts(response));
    }, []);

    return (
        <Box sx={{ display: 'flex' }}>
            <Filters />
            <Box sx={{ flex: 1 }} >
                <ProductList products={products} />
            </Box>
        </Box>
    )
}

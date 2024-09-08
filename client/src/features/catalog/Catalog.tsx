import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Product } from "../../app/models/product";
import Filters from "./Filters";
import ProductList from "./ProductList";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agent.Catalog.list()
            .then(response => setProducts(response))
            .catch(error => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return <LoadingComponent message="Loading products..." />;

    return (
        <Box sx={{ display: 'flex' }}>
            <Filters />
            <Box sx={{ flex: 1 }} >
                <ProductList products={products} />
            </Box>
        </Box>
    )
}

import { Grid2 } from '@mui/material';
import { Product } from '../../app/models/product';
import { useAppSelector } from '../../app/store/configureSore';
import ProductCard from './ProductCard';
import ProductCardSkeleton from './ProductCardSkeleton';

interface Props {
	readonly products: Product[];
}
export default function ProductList({ products }: Props) {
	const { productLoaded } = useAppSelector((state) => state.catalog);

	return (
		<Grid2 container spacing={4}>
			{products.map((product) => (
				<Grid2 size={4} key={product.id}>
					{!productLoaded ? <ProductCardSkeleton key={product.id} /> : <ProductCard key={product.id} product={product} />}
				</Grid2>
			))}
		</Grid2>
	);
}

import { Container, Grid2, Paper, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/store/configureSore';
import ProductList from './ProductList';

const sortOptions = [
	{ value: 'name', label: 'Alphabetical' },
	{ value: 'priceDesc', label: 'Price: High to Low' },
	{ value: 'price', label: 'Price: Low to High' },
];

import AppPagination from '../../app/components/AppPagination';
import CheckboxButtons from '../../app/components/CheckboxButtons';
import RadioButtonGroup from '../../app/components/RadioButtonGroup';
import LoadingComponent from '../../app/layout/LoadingComponent';
import { fetchFilters, fetchProductsAsync, productSelectors, setPageNumber, setProductParams } from './catalogSlice';
import ProductSearch from './ProductSearch';

export default function Catalog() {
	const products = useAppSelector(productSelectors.selectAll);
	const { productLoaded, filtersLoaded, brands, types, productParams, metaData } = useAppSelector((state) => state.catalog);
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!productLoaded) {
			dispatch(fetchProductsAsync());
		}
	}, [productLoaded, dispatch]);

	useEffect(() => {
		if (!filtersLoaded) {
			dispatch(fetchFilters());
		}
	}, [filtersLoaded, dispatch]);

	if (!filtersLoaded) return <LoadingComponent message="Loading products..." />;

	return (
		<Container maxWidth="xl" sx={{ mt: 10 }}>
			<Grid2 size={4} className="box-card" spacing={4} container>
				<Grid2 size={3}>
					<Paper sx={{ mb: 2 }}>
						<ProductSearch />
					</Paper>
					<Paper sx={{ p: 2, mb: 2 }}>
						<Typography variant="h6">Sort By</Typography>
						<RadioButtonGroup
							options={sortOptions}
							selectedValue={productParams.orderBy}
							onChange={(e) => dispatch(setProductParams({ orderBy: e.target.value }))}
						/>
					</Paper>
					<Paper sx={{ p: 2, mb: 2 }}>
						<Typography variant="h6">Brands</Typography>
						<CheckboxButtons
							items={brands}
							checked={productParams.brands}
							onChange={(items) => dispatch(setProductParams({ brands: items }))}
						/>
					</Paper>
					<Paper sx={{ p: 2, mb: 2 }}>
						<Typography variant="h6">Types</Typography>
						<CheckboxButtons
							items={types}
							checked={productParams.types}
							onChange={(items) => dispatch(setProductParams({ types: items }))}
						/>
					</Paper>
				</Grid2>
				<Grid2 size={9} sx={{ flex: 1 }}>
					<ProductList products={products} />
				</Grid2>
			</Grid2>
			<Grid2 container>
				<Grid2 size={3}></Grid2>
				<Grid2 size={9}>
					{metaData && <AppPagination metaData={metaData} onPageChange={(page: number) => dispatch(setPageNumber({ pageNumber: page }))} />}
				</Grid2>
			</Grid2>
		</Container>
	);
}

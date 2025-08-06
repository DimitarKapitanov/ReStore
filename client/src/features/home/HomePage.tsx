import { Container, Divider } from "@mui/material";
import { useEffect, useState } from "react";
import Brands from "./Brands";
import DressStyle from "./DressStyle";
import Head from "./Head";
import NewProducts from "./NewProducts";
import { useAppDispatch, useAppSelector } from "../../app/store/configureSore";

import { recentlyAddedProducts } from "../catalog/catalogSlice";
import LoadingComponent from "../../app/layout/LoadingComponent";

export default function HomePage() {
	const [loading, setLoading] = useState(true);

	const { recentlyAddedProductsArray } = useAppSelector((state) => state.catalog);
	const dispatch = useAppDispatch();

	useEffect(() => {
		// Зареди recently added products ако масивът е празен
		if (recentlyAddedProductsArray.length === 0) {
			dispatch(recentlyAddedProducts());
		}
		setLoading(false);
	}, [recentlyAddedProductsArray.length, dispatch]);

	if (loading) return <LoadingComponent message="Welcome ..." />;

	return (
		<Container sx={{ maxWidth: "100% !important", padding: "0 !important" }}>
			<Head />
			<Brands />
			<NewProducts products={recentlyAddedProductsArray} buttonLink="/catalog" headerName="NEW ARRIVALS" />
			<Divider />
			<NewProducts products={recentlyAddedProductsArray} buttonLink="/catalog" headerName="TOP SELLING" />
			<DressStyle />
		</Container>
	);
}

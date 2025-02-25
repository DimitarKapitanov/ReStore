export interface Product {
	id: string;
	name: string;
	description: string;
	price: number;
	pictureUrl: string;
	type?: string;
	brand: string;
	quantityInStock?: number;
}

export interface ProductParams {
	orderBy: string;
	searchTerms?: string;
	brands: string[];
	types: string[];
	pageNumber: number;
	pageSize: number;
}

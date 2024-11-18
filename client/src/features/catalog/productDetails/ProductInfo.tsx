import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import NumberInput from "../../../app/layout/CustomNumberInput";
import { Product } from "../../../app/models/product";

interface Props {
  product: Product;
  quantity: number;
  onQuantityChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    value: number | undefined
  ) => void;
  onAddToCart: (productId: string) => void;
}

export default function ProductDetails({
  product,
  quantity,
  onQuantityChange,
  onAddToCart,
}: Props) {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>{product.name}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Type</TableCell>
            <TableCell>{product.type}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Brand</TableCell>
            <TableCell>{product.brand}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Quantity in stock</TableCell>
            <TableCell>{product.quantityInStock}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <NumberInput value={quantity} onChange={onQuantityChange} />
            </TableCell>
            <TableCell align="center">
              <Button
                variant="contained"
                color="secondary"
                onClick={() => onAddToCart(product.id)}
              >
                Add to cart
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Total Price</TableCell>
            <TableCell>
              <Typography variant="body1">
                ${((product.price / 100) * quantity).toFixed(2)}
              </Typography>
            </TableCell>
          </TableRow>
          <TableRow></TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

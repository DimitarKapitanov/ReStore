import { ShoppingCart } from "@mui/icons-material";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { ChangeEvent } from "react";
import NumberInput from "../../../app/layout/CustomNumberInput";
import { Product } from "../../../app/models/product";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../app/store/configureSore";
import {
  addBasketItemAsync,
  removeBasketItemAsync,
} from "../../basket/basketSlice";

interface Props {
  product: Product;
  quantity: number;
  setQuantity: (quantity: number) => void;
}

export default function ProductDetails({
  product,
  quantity,
  setQuantity,
}: Props) {
  const { basket, status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  const item = basket?.items.find((x) => x.productId === product?.id);

  const onQuantityChange = (
    _: ChangeEvent<HTMLInputElement>,
    newValue: number | undefined
  ) => {
    if (newValue !== undefined) {
      setQuantity(newValue);
    }
  };

  async function handleAddToItem() {
    if (!item || quantity > item.quantity) {
      const updatedQuantity = item ? quantity - item.quantity : quantity;
      dispatch(
        addBasketItemAsync({ productId: product.id, quantity: updatedQuantity })
      );
    } else {
      const updatedQuantity = item.quantity - quantity;
      dispatch(
        removeBasketItemAsync({
          productId: product.id,
          quantity: updatedQuantity,
        })
      );
    }
  }

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
                disabled={
                  item?.quantity === quantity || (!item && quantity === 0)
                }
                variant="contained"
                color="secondary"
                onClick={handleAddToItem}
                loading={status.includes("pending")}
              >
                <ShoppingCart />
                {item ? "Update" : "Add to Cart"}
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

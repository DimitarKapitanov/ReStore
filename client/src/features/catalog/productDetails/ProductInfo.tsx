import { ShoppingCart } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import agent from "../../../app/api/agent";
import { useStoreContext } from "../../../app/context/StoreContext";
import NumberInput from "../../../app/layout/CustomNumberInput";
import { Product } from "../../../app/models/product";

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
  const { basket, setBasket } = useStoreContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const items = basket?.items.find((x) => x.productId === product?.id);

  const onQuantityChange = (
    _: React.ChangeEvent<HTMLInputElement>,
    newValue: number | undefined
  ) => {
    if (newValue !== undefined) {
      console.log(newValue);

      setQuantity(newValue);
    }
  };

  const handleAddToItem = async (productId: string) => {
    setLoading(true);
    await agent.Basket.addItem(productId, quantity)
      .then((basket) => setBasket(basket))
      .catch((error) => {
        toast.error("Problem adding item to cart");
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
        toast.success("Item added to cart");
        setTimeout(() => {
          navigate("/basket");
        }, 500);
      });
  };

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
              <LoadingButton
                variant="contained"
                color="secondary"
                onClick={() => handleAddToItem(product.id)}
                loading={loading}
              >
                <ShoppingCart />
                {items ? "Update" : "Add to Cart"}
              </LoadingButton>
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

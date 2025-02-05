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
import { ChangeEvent, useState } from "react";
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
  const { basket, setBasket, removeItem } = useStoreContext();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const item = basket?.items.find((x) => x.productId === product?.id);

  const onQuantityChange = (
    _: ChangeEvent<HTMLInputElement>,
    newValue: number | undefined
  ) => {
    if (newValue !== undefined) {
      setQuantity(newValue);
    }
  };

  const handleAddToItem = async (productId: string) => {
    setLoading(true);
    if (!item || quantity > item.quantity) {
      const updatedQuantity = item ? quantity - item.quantity : quantity;

      await agent.Basket.addItem(productId, updatedQuantity)
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
    } else {
      const updatedQuantity = item.quantity - quantity;
      await agent.Basket.removeItem(productId, updatedQuantity)
        .then(() => removeItem(productId, updatedQuantity))
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
    }
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
                disabled={
                  item?.quantity === quantity || (!item && quantity === 0)
                }
                variant="contained"
                color="secondary"
                onClick={() => handleAddToItem(product.id)}
                loading={loading}
              >
                <ShoppingCart />
                {item ? "Update" : "Add to Cart"}
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

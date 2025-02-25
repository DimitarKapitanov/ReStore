import { debounce, TextField } from "@mui/material";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/store/configureSore";
import { setProductParams } from "./catalogSlice";

export default function ProductSearch() {
  const { productParams } = useAppSelector((state) => state.catalog);
  const [searchTerms, setSearchTerms] = useState(productParams.searchTerms);
  const dispatch = useAppDispatch();

  const debounceSearch = debounce((event: any) => {
    dispatch(setProductParams({ searchTerms: event.target.value }));
  }, 1000);

  return (
    <TextField
      label="Search"
      variant="outlined"
      fullWidth
      value={searchTerms || ""}
      onChange={(event: any) => {
        setSearchTerms(event.target.value);
        debounceSearch(event);
      }}
    />
  );
}

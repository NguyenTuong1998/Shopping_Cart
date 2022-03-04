import { Tab, Tabs } from "@material-ui/core";
import React from "react";

const ProductSort = ({ currentSort, onChange }) => {
  const handleOnChange = (e, newValue) => {
    if (onChange) onChange(newValue);
  };
  return (
    <Tabs
      value={currentSort}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleOnChange}
      aria-label="disabled tabs example"
    >
      <Tab label="Giá thấp tới cao" value="salePrice:ASC"></Tab>
      <Tab label="Giá cao tới thấy" value="salePrice:DESC"></Tab>
    </Tabs>
  );
};

export default ProductSort;

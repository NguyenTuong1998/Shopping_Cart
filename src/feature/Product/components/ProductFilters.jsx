import { Box } from "@material-ui/core";
import React from "react";
import FliterByCategory from "./Fliters/FliterByCategory";
import FliterByPrice from "./Fliters/FliterByPrice";
import FliterByService from "./Fliters/FliterByService";

const ProductFilters = ({ filters, onChange }) => {
  const handleCategoryChange = (newCategoryId) => {
    if (!onChange) return;

    const newFilter = {
      ...filters,
      "category.id": newCategoryId,
    };
    onChange(newFilter);
  };

  const handleChange = (values) => {
    if (!onChange) return;
    onChange(values);
  };

  return (
    <Box>
      <FliterByCategory onChange={handleCategoryChange} />
      <FliterByPrice onChange={handleChange} />
      <FliterByService filters={filters} onChange={handleChange} />
    </Box>
  );
};

export default ProductFilters;

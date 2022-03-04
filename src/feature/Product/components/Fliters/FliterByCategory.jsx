import { Box, makeStyles, Typography } from "@material-ui/core";
import categoryApi from "api/categoryApi";
import React, { useEffect, useState } from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  menu: {
    margin: 0,
    padding: 0,
    listStyleType: "none",
    "& > li": {
      marginTop: theme.spacing(1),
      transition: "all .25s",

      "&:hover": {
        cursor: "pointer",
        color: theme.palette.primary.dark,
      },
    },
  },
}));
const FliterByCategory = ({ onChange }) => {
  const [categoryList, setCategoryList] = useState([]);
  const classes = useStyle();

  useEffect(() => {
    (async () => {
      try {
        const list = await categoryApi.getAll();
        setCategoryList(
          list.map((x) => ({
            id: x.id,
            name: x.name,
          }))
        );
        console.log(list);
      } catch (error) {
        console.log("Failed to fetch category", error);
      }
    })();
  }, []);

  const handleCategoryClick = (category) => {
    if (onChange) {
      onChange(category.id);
    }
  };
  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DANH MỤC SẢN PHẨM</Typography>

      <ul className={classes.menu}>
        {categoryList.map((category) => (
          <li
            key={category.id}
            onClick={() => {
              handleCategoryClick(category);
            }}
          >
            <Typography variant="body2">{category.name}</Typography>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FliterByCategory;

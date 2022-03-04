import {
  Box,
  Checkbox,
  FormControlLabel,
  makeStyles,
  Typography,
} from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    borderTop: `1px solid ${theme.palette.grey[400]}`,
  },
  cheked: {
    padding: 0,
    listStyleType: "none",
  },
}));
const FliterByService = ({ filters = {}, onChange }) => {
  const classes = useStyle();

  const handleChange = (e) => {
    if (!onChange) return;

    const { name, checked } = e.target;
    onChange({ [name]: checked });
  };

  return (
    <Box className={classes.root}>
      <Typography variant="subtitle2">DỊCH VỤ</Typography>
      <ul className={classes.cheked}>
        {[
          { value: "isPromotion", lable: "Khuyến mãi" },
          { value: "isFreeShip", lable: "Vận Chuyển miễn phí" },
        ].map((service) => (
          <li key={service.value}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={Boolean(filters[service.value])}
                  onChange={handleChange}
                  name={service.value}
                  color="primary"
                />
              }
              label={service.lable}
            />
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default FliterByService;

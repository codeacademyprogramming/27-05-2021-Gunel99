import React from "react";
import { Box, Button } from "@material-ui/core";

export default function OrdersPage() {
  return (
    <Box width="1024px" margin="0 auto" paddingTop={4}>
      <Box display="flex" justifyContent="flex-end">
        <Button color="primary" variant="contained">
          Add new order
        </Button>
      </Box>
    </Box>
  );
}

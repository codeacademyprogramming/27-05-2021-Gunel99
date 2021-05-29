import React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    TextareaAutosize,
    Input,
    Button,
  } from "@material-ui/core";

export default function OrderCreation() {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Create Order</DialogTitle>
      <DialogContent>
      <Input type="number" name="count" id="orderCount" />
      <TextareaAutosize aria-label="empty textarea" placeholder="Empty" />
        <Button
          color="primary"
          variant="contained"
          onClick={handleSave}
        ></Button>
      </DialogContent>
    </Dialog>
  );
}

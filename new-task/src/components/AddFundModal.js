import React, { useState } from "react";
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function AddFundModal({ open, handleClose }) {
  const [amount, setAmount] = useState("");

  const handleFundChange = (event) => {
    setAmount(event.target.value);
  };

  const handleAddFund = () => {
    // Logic to handle adding funds would go here
    console.log("Adding fund of amount:", amount);
    handleClose();
    setAmount("");
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="add-fund-modal-title"
      aria-describedby="add-fund-modal-description"
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "90%", sm: 400 },
          bgcolor: "background.paper",
          borderRadius: 3,
          boxShadow: 24,
          p: 4,
          fontFamily: "Montserrat, sans-serif",
          display: "flex",
          flexDirection: "column",
          gap: 3,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Typography
            id="add-fund-modal-title"
            variant="h6"
            component="h2"
            fontWeight="600"
            sx={{ display: "flex", alignItems: "center", color: "#16A846" }}
          >
            <AttachMoneyIcon sx={{ mr: 1 }} />
            Add Fund
          </Typography>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Typography id="add-fund-modal-description" variant="body2" color="text.secondary">
          Enter the amount to add to the client's balance.
        </Typography>
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          value={amount}
          onChange={handleFundChange}
          type="number"
          InputProps={{
            sx: { borderRadius: 3, fontFamily: "Montserrat, sans-serif" },
          }}
        />
        <Button
          onClick={handleAddFund}
          variant="contained"
          fullWidth
          sx={{
            background: "linear-gradient(90deg, #16A846 0%, #17A947 100%)",
            color: "#fff",
            py: 1.5,
            borderRadius: 3,
            fontWeight: "bold",
            "&:hover": { opacity: 0.9 },
          }}
        >
          Add Fund
        </Button>
      </Box>
    </Modal>
  );
}

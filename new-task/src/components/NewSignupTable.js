import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Modal,
  Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import PersonIcon from "@mui/icons-material/Person";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CloseIcon from '@mui/icons-material/Close';

const AddFundModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          fontFamily: "Montserrat, sans-serif"
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="h2" fontWeight="600">
            Add Amount
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <TextField fullWidth label="Amount" sx={{ mt: 2 }} />
        <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
          Gst - 18%
        </Typography>
        <Box sx={{ mt: 3, display: "flex", justifyContent: "flex-end", gap: 2 }}>
          <Button variant="outlined" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" sx={{ backgroundColor: "#5CB45A", '&:hover': { backgroundColor: "#A8E689" } }}>
            OK
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

const UserCredentialsModal = ({ open, handleClose, user }) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleCopy = (text) => {
    document.execCommand('copy', false, text);
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '25%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          fontFamily: "Montserrat, sans-serif",
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 2 }}>
          <Typography variant="h6" component="h2" fontWeight="600">
            User Credentials
          </Typography>
          <IconButton onClick={handleClose} size="small">
            <CloseIcon />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1 }}>
          <TextField
            fullWidth
            label="Email Address"
            defaultValue={user.email}
            InputProps={{
              readOnly: true,
            }}
          />
          <IconButton
            onClick={() => handleCopy(user.email)}
            sx={{
              background: "#fff",
              border: "1px solid",
              borderColor: "#1EA433",
              borderRadius: "8px",
              p: 1.5,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <ContentCopyIcon sx={{ color: "#1EA433", fontSize: 24 }} />
          </IconButton>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: 1, mt: 2 }}>
          <TextField
            fullWidth
            label="Password"
            type={showPassword ? 'text' : 'password'}
            defaultValue={user.password}
            InputProps={{
              readOnly: true,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleTogglePassword} edge="end">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <IconButton
            onClick={() => handleCopy(user.password)}
            sx={{
              background: "#fff",
              border: "1px solid",
              borderColor: "#1EA433",
              borderRadius: "8px",
              p: 1.5,
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              "&:hover": {
                opacity: 0.9,
              },
            }}
          >
            <ContentCopyIcon sx={{ color: "#1EA433", fontSize: 24 }} />
          </IconButton>
        </Box>
      </Box>
    </Modal>
  );
};

const NewSignupTable = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openAddFundModal, setOpenAddFundModal] = useState(false);
  const [openUserCredentialsModal, setOpenUserCredentialsModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    // This is a simulated fetch from a JSON source.
    // In a real application, you would replace this with an actual API call.
    const userData = [
      {
        id: 1,
        companyName: "BrightThreadRolling",
        username: "BrightThreadRolling",
        mobileNumber: "919500951251",
        wabaNumber: "919810765443",
        balance: 0,
        validity: "-",
        createDate: "Dec 06, 2024, 06:04:27 PM",
        email: "brightthreadrollings@gmail.com",
        password: "userpassword1",
      },
     
    ];
    setData(userData);
  }, []);

  const handleMenuClick = (event, user) => {
    setAnchorEl(event.currentTarget);
    setSelectedUser(user);
  };
  
  const handleMenuClose = () => setAnchorEl(null);

  const handleAddFund = () => {
    setOpenAddFundModal(true);
    handleMenuClose();
  };

  const handleUserCredentials = () => {
    setOpenUserCredentialsModal(true);
    handleMenuClose();
  };

  const handleCloseAddFundModal = () => setOpenAddFundModal(false);
  const handleCloseUserCredentialsModal = () => setOpenUserCredentialsModal(false);

  const tableHeaderStyle = {
    background: "#fff",
  };

  const tableCellStyle = {
    color: "#000",
    fontWeight: 600,
    fontFamily: "Montserrat, sans-serif",
    padding: "10px 16px",
  };

  const actionButtonStyle = {
    background: "linear-gradient(90deg, #5CB45A 0%, #A8E689 100%)",
    color: "#fff",
    "&:hover": {
      opacity: 0.9,
    },
    borderRadius: "10px",
  };

  const menuIconStyle = {
    mr: 1,
    color: "#16A846",
  };

  return (
    <Box sx={{ fontFamily: "Montserrat, sans-serif", backgroundColor: "#fff", minHeight: "100vh", px: 8, py: 4 }}>
      <Box sx={{ height: '70px' }} />
      {/* Title + Breadcrumb */}
      <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
        <Typography variant="h5" fontWeight="600" color="#525252" sx={{ mr: 1, pr: 1.5, borderRight: '1px solid #c2c2c2' }}>
          New Signup
        </Typography>
        <Typography variant="body2" color="#1EA433" sx={{ pl: 1.5 }}>
          Home <span style={{ color: '#525252' }}>&gt;</span> New Signup
        </Typography>
      </Box>
      <Box sx={{ my: 3 }} />
      
      {/* Search Box */}
      <Box sx={{ ml: 'auto', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '10px' }}>
        <TextField
          placeholder="Search here"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "gray" }} />
              </InputAdornment>
            ),
            sx: { borderRadius: 2, fontFamily: "Montserrat, sans-serif" },
          }}
        />
      </Box>

      {/* Table */}
      <TableContainer
        component={Paper}
        sx={{
          mt: 2,
          borderRadius: 2,
          boxShadow: 2,
          overflowX: "auto",
          backgroundColor: "#fff",
        }}
      >
        <Table>
          <TableHead sx={tableHeaderStyle}>
            <TableRow>
              {[
                "S.No.",
                "Company Name",
                "Username",
                "Mobile Number",
                "WABA Number",
                "Balance",
                "Validity",
                "Create Date",
                "Actions",
              ].map((col) => (
                <TableCell
                  key={col}
                  sx={{ ...tableCellStyle, color: "#000" }}
                >
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell sx={{ color: "#16A446", fontWeight: 500 }}>
                  {row.companyName}
                </TableCell>
                <TableCell>{row.username}</TableCell>
                <TableCell>{row.mobileNumber}</TableCell>
                <TableCell>{row.wabaNumber}</TableCell>
                <TableCell>{row.balance}</TableCell>
                <TableCell>{row.validity}</TableCell>
                <TableCell>{row.createDate}</TableCell>
                <TableCell>
                  <IconButton
                    onClick={(e) => handleMenuClick(e, row)}
                    sx={actionButtonStyle}
                  >
                    <EditIcon />
                  </IconButton>

                  {/* Dropdown Menu */}
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                  >
                    <MenuItem onClick={handleMenuClose}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <EditIcon fontSize="small" />
                          <span>Activate</span>
                      </Box>
                    </MenuItem>
                    <MenuItem onClick={handleUserCredentials}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <PersonIcon fontSize="small" />
                          <span>User Credentials</span>
                      </Box>
                    </MenuItem>
                    <MenuItem onClick={handleAddFund}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <AttachMoneyIcon fontSize="small" />
                          <span>Add Fund</span>
                      </Box>
                    </MenuItem>
                    <MenuItem onClick={handleMenuClose}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <EditIcon fontSize="small" />
                          <span>Manual Entry</span>
                      </Box>
                    </MenuItem>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', mt: 2 }}>
          <IconButton>
            <Box sx={{ fontSize: '1.5rem' }}>&lt;</Box>
          </IconButton>
          <Box sx={{ background: 'linear-gradient(90deg, #5CB45A 0%, #A8E689 100%)', color: '#fff', px: 2, py: 1, borderRadius: '8px' }}>
            1
          </Box>
          <IconButton>
            <Box sx={{ fontSize: '1.5rem' }}>&gt;</Box>
          </IconButton>
          <Box sx={{ ml: 2, display: 'flex', alignItems: 'center', gap: 1, border: '1px solid #c2c2c2', borderRadius: '4px', p: '2px 8px' }}>
            <Typography variant="body2" sx={{ color: '#525252' }}>
              10 / page
            </Typography>
            <IconButton sx={{ p: 0 }}>
              <Box sx={{ fontSize: '1rem', rotate: '90deg' }}>&gt;</Box>
            </IconButton>
          </Box>
        </Box>
      </TableContainer>

      {/* Add Fund Modal */}
      {openAddFundModal && <AddFundModal open={openAddFundModal} handleClose={handleCloseAddFundModal} />}

      {/* User Credentials Modal */}
      {openUserCredentialsModal && selectedUser && <UserCredentialsModal open={openUserCredentialsModal} handleClose={handleCloseUserCredentialsModal} user={selectedUser} />}
    </Box>
  );
};

export default NewSignupTable;

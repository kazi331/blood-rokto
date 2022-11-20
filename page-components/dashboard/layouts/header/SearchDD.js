import { Box, Drawer, IconButton, Input } from "@mui/material";
import { Search, XCircle } from "feather-icons-react";
import { useState } from "react";

const SearchDD = () => {
  // drawer top
  const [showDrawer2, setShowDrawer2] = useState(false);

  const handleDrawerClose2 = () => {
    setShowDrawer2(false);
  };
  return (
    <>
      <IconButton
        aria-label="show 4 new mails"
        color="inherit"
        aria-controls="search-menu"
        aria-haspopup="true"
        onClick={() => setShowDrawer2(true)}
        size="large"
      >
        <Search width="20" height="20" />
      </IconButton>
      <Drawer
        anchor="top"
        open={showDrawer2}
        onClose={() => setShowDrawer2(false)}
        sx={{
          "& .MuiDrawer-paper": {
            padding: "15px 30px",
          },
        }}
      >
        <Box display="flex" alignItems="center">
          <Input placeholder="Search here" aria-label="description" fullWidth />
          <Box
            sx={{
              ml: "auto",
            }}
          >
            <IconButton
              color="inherit"
              sx={{
                color: (theme) => theme.palette.grey.A200,
              }}
              onClick={handleDrawerClose2}
            >
              <XCircle />
            </IconButton>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SearchDD;

import { Grid, ThemeProvider } from "@mui/material";
import DonerList from '../../page-components/dashboard/DonerList';
import DashboardLayout from "../../page-components/dashboard/layouts/DashboardLayout";
import theme from "../../page-components/dashboard/src/theme/theme";

const Doners = () => {
  return (
    <ThemeProvider theme={theme}>
      {/* <CssBaseline /> */}
      <DashboardLayout>
        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <DonerList />
          </Grid>
        </Grid>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default Doners;

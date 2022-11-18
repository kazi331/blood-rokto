import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import DashboardLayout from "../../page-components/dashboard/layouts/DashboardLayout";
import theme from "../../page-components/dashboard/src/theme/theme";
import ProductPerfomance from '../../page-components/dashboard/ProductPerfomance'

const Tables = () => {
  return (
    <ThemeProvider theme={theme}>

      <CssBaseline />
      <DashboardLayout>

        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <ProductPerfomance />
          </Grid>
        </Grid>
      </DashboardLayout>
    </ThemeProvider>
  );
};

export default Tables;

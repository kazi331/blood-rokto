import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import BlogCard from "../../page-components/dashboard/BlogCard";
import DailyActivity from "../../page-components/dashboard/DailyActivity";
import ProductPerfomance from "../../page-components/dashboard/ProductPerfomance";
import SalesOverview from "../../page-components/dashboard/SalesOverview";
import theme from '../../page-components/dashboard/src/theme/theme';
import DashboardLayout from '../../page-components/dashboard/layouts/DashboardLayout'


export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout>


        <Grid container spacing={0}>
          <Grid item xs={12} lg={12}>
            <SalesOverview />
          </Grid>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerfomance />
          </Grid>
          <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid>
        </Grid>
        </DashboardLayout>
    </ThemeProvider>
  );
}

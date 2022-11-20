import { Grid } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import BlogCard from "../../page-components/dashboard/BlogCard";
import DailyActivity from "../../page-components/dashboard/DailyActivity";
import DonationOverview from "../../page-components/dashboard/DonationOverview";
import ProductPerfomance from "../../page-components/dashboard/DonerList";
import DashboardLayout from '../../page-components/dashboard/layouts/DashboardLayout';
import theme from '../../page-components/dashboard/src/theme/theme';


export default function Index() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <DashboardLayout>
        <Grid container spacing={0}>
          {/* ------------------------- row 1 ------------------------- */}
          <Grid item xs={12} lg={12}>
            <DonationOverview />
          </Grid>
          {/* ------------------------- row 2 ------------------------- */}
          <Grid item xs={12} lg={4}>
            <DailyActivity />
          </Grid>
          <Grid item xs={12} lg={8}>
            <ProductPerfomance />
          </Grid>
          {/* ------------------------- row 3 ------------------------- */}
          <Grid item xs={12} lg={12}>
            <BlogCard />
          </Grid>
        </Grid>
      </DashboardLayout>
    </ThemeProvider>
  );
}

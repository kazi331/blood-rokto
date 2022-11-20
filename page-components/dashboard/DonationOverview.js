import dynamic from "next/dynamic";
import BaseCard from "./BaseCard";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DonationOverview = () => {
  const donationOverview = {
    grid: {
      show: true,
      borderColor: "transparent",
      strokeDashArray: 2,
      padding: {
        left: 0,
        right: 0,
        bottom: 0,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "42%",
        endingShape: "rounded",
        borderRadius: 5,
      },
    },

    colors: ["#111827", "#EA062B"],
    fill: {
      type: "solid",
      opacity: 1,
    },
    chart: {
      offsetX: -15,
      toolbar: {
        show: false,
      },
      foreColor: "#adb0bb",
      fontFamily: "'DM Sans',sans-serif",
      sparkline: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    legend: {
      show: false,
    },
    xaxis: {
      type: "category",
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sept", "Oct", "Nov", "Dec",],
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    yaxis: {
      show: true,
      min: 10,
      max: 70,
      tickAmount: 3,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    tooltip: {
      theme: "dark",
    },
  };
  const donationSeriesoverview = [
    {
      name: "Registered",
      data: [23, 24, 33, 45, 34, 23, 34, 21, 20, 23, 26, 34],
    },
    {
      name: "Total Donation",
      data: [28, 25, 32, 55, 25, 31, 28, 35, 32, 21, 25, 42],
    },
  ];
  return (
    <BaseCard title="Registration VS Donation">
      <Chart
        options={donationOverview}
        series={donationSeriesoverview}
        type="bar"
        height="295px"
      />
    </BaseCard>
  );
};

export default DonationOverview;

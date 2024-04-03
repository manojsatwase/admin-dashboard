// dashboard and apps
import { RiCoupon3Fill, RiDashboardFill, RiShoppingBag3Fill } from 'react-icons/ri';
import { IoIosPeople } from "react-icons/io";
import { AiFillFileText } from "react-icons/ai";

// chart and apps
import { FaChartBar, FaChartLine, FaChartPie, FaGamepad, FaStopwatch } from 'react-icons/fa';

 const dashboardLinks = [
    { url: '/admin/dashboard', text: 'Dashboard', Icon: RiDashboardFill },
    { url: '/admin/product', text: 'Product', Icon: RiShoppingBag3Fill },
    { url: '/admin/customer', text: 'Customer', Icon: IoIosPeople },
    { url: '/admin/transaction', text: 'Transaction', Icon: AiFillFileText },
    ];

 const chartLinks = [
        { url: '/admin/chart/bar', text: 'Bar', Icon: FaChartBar },
        { url: '/admin/chart/line', text: 'Line', Icon: FaChartLine },
        { url: '/admin/chart/pie', text: 'Pie', Icon: FaChartPie},
];

 const appsLinks = [
    { url: '/admin/app/stopwatch', text: 'StopWatch', Icon: FaStopwatch },
    { url: '/admin/app/coupon', text: 'Coupon', Icon: RiCoupon3Fill },
    { url: '/admin/app/toss', text: 'Toss', Icon: FaGamepad},
]

export const linksData = [
    { title: 'Dashboard', links: dashboardLinks },
    { title: 'Chart', links: chartLinks },
    { title: 'Apps', links: appsLinks }
  ];
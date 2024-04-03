import { BarChart } from "../../../components/Chart"

const RevenueChart = () => {
  return (
    <div className="revenue-chart">
        <h2>R evenue & Transaction</h2>
        <BarChart
            data_1={[300,144,433,665,1237,755,190,1000,2123,543,2345,3232]}
            data_2={[200,144,1333,565,837,555,1990,1300,232,545,345,3433]}
            title_1="Revanue"
            title_2="Transaction"
            bgColor_1="rgb(0,115,255)"
            bgColor_2="rgba(53,162,235,0.8)"
        />
     </div>
  )
}

export default RevenueChart
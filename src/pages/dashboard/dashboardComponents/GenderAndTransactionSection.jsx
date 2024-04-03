import { BiMaleFemale } from "react-icons/bi";

import DashboardTable from "../../../components/DashboardTable";
import data from '../../../assets/data.json';
import { DoughnutChart } from "../../../components/Chart";

// import data from "../../../utils/data.json";

const GenderAndTransactionSection = () => {
  return (
       <>
          {/* gender male and female  */}
          <div className="gender-chart">
                 <h2>Gender Ratio</h2>
                 {/* Doughnut Chart */}
                    <DoughnutChart
                     labels={["Female","Male"]}
                     data={[12,19]}
                     backgroundColor={[`hsl(340,82%,56%)`,`rgba(53,162,235,0.8)`]}
                     cutout={80}
                     />
                 <p><BiMaleFemale/></p>
              </div>
            {/* end div  gender male and female  */}
            {/* Start Table */}
            <DashboardTable data={data?.transaction} />
       </>
  )
}

export default GenderAndTransactionSection;
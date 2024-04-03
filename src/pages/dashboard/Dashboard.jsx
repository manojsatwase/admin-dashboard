import AdminSidebar from '../../components/admin/AdminSidebar'
import DashboardSearch from './dashboardComponents/DashboardSearch';
import WidgetComponent from './dashboardComponents/WidgetComponent';
import {widgetData} from '../../utils/widgetData';
import GraphComponent from './dashboardComponents/GraphComponent';
import GenderAndTransactionSection from './dashboardComponents/GenderAndTransactionSection';
 
const Dashboard = () => {
  return (
    <div className='admin-container'>
        <AdminSidebar />
        <main className='dashboard'>
           <DashboardSearch />
          <section className="widget-container">
            <WidgetComponent widgetData={widgetData} />
          </section>
          <section className="graph-container">
            <GraphComponent />
           </section>
           <section className="transaction-container">
             <GenderAndTransactionSection />
           </section>
        </main>
    </div>
  )
}

export default Dashboard;


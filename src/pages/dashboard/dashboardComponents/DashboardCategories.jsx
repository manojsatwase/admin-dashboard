import data from '../../../assets/data.json';
import CategoryItem from './CategoryItem';

const DashboardCategories = () => {
  return (
    <div className="dashboard-categories">
        <h2>Inventory</h2>
        <div>
        {
            data?.categories?.map(({heading,value})=>(
            <CategoryItem
                key={heading}
                heading={heading}
                value={value}
                color={`hsl(${value * 4}, ${value}%, 50%)`}
            />   
            ))
        }
        </div>
     </div>
  )
}

export default DashboardCategories
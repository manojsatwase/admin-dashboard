const CategoryItem= ({ heading, value, color }) => {
    return (
      <div className="category-item">
        <h5>{heading}</h5>
        {/* line bar */}   
        <div className="outer-bg-fill">
          <div 
            className="inner-bg-fill"
            style={{
            backgroundColor: color,
            width: `${value}%`
          }}></div>
        </div>
        <span>{value}%</span>
      </div>
    );
  }
  

export default CategoryItem;
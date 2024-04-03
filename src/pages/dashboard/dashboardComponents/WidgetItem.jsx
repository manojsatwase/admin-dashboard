import { HiTrendingUp, HiTrendingDown } from 'react-icons/hi';

const WidgetItem = ({ heading, value, percent, color, amount = false }) => {
  return (
    <article className="widget-item">
      <div className="widget-info">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp /> + {percent}%
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown /> {percent}%
          </span>
        )}
      </div>
      <div
        className="widget-circle"
        style={{
          background: `conic-gradient(${color} ${(Math.abs(percent) / 100) * 360}deg,
            rgba(205, 198, 198, 0.5) 0
          )`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );
};

export default WidgetItem;

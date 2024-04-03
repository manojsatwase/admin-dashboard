import WidgetItem from "./WidgetItem"

const WidgetComponent = ({widgetData}) => {
  return (
     <>
        {widgetData.map((item, index) => (
        <WidgetItem
          key={index}
          heading={item?.heading}
          amount={item?.amount}
          value={item?.value}
          percent={item?.percent}
          color={item?.color}
        />
      ))}
     </>
  )
}

export default WidgetComponent
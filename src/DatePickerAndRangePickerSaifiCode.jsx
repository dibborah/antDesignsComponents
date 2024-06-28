import { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment";

const { RangePicker } = DatePicker;

const App = () => {
  console.log('Component Rendered!!!');
  const [singelDates, setSingleDates] = useState();
  const [rangeDates, setRangeDates] = useState([]);
  console.log('singelDates', singelDates);
  console.log('rangeDates', rangeDates);
  return (
    <div>
      <div style={{ margin: "20px" }}>
        <DatePicker
          onChange={(value) => {
            const getValue = moment(value).format('DD-MM-YYYY')
            setSingleDates(getValue);
          }}
        />
      </div>
      <div style={{ margin: "20px" }}>
        <RangePicker
          onChange={(value) => {
            setRangeDates(value.map((item) => {
              return moment(item).format('DD-MM-YYYY');
            }));
          }}
        />
      </div>
    </div>
  )
}

export default App;

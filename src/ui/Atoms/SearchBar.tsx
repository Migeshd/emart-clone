// import 'antd/dist/antd.css';
import { Select } from 'antd';
// import { Link, useHistory, useRouteMatch, useParams } from "react-router-dom";

function SearchBar() {
  // const history = useHistory();
  const { Option } = Select;

  // const changeHandler = (id) => {
  //   history.push(`/customer/${id}`);
  // };
  return (
    <div>
      {/* <Button>click me when found in search</Button> */}
      <Select
        style={{ width: 200 }}
        placeholder="Search..."
        mode="multiple"
        // open={true}
        listHeight={128}
        // onChange={changeHandler}
      >
        <Option value="1">Not Identified</Option>
        <Option value="2">Closed</Option>
        <Option value="3">Communicated</Option>
        <Option value="4">Identified</Option>
        <Option value="5">Resolved</Option>
        <Option value="6">Cancelled</Option>
      </Select>
    </div>
  );
}

export default SearchBar;

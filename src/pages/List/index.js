import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../../utils/request";

const List = props => {
  const [list, setList] = useState([]);
  useEffect(() => {
    request.get("api/list").then(res => {
      setList(res);
    });
  }, []);
  return (
    <div>
      <ul>
        {list.map(v => (
          <li>
            <Link to={`/detial/${v.ID}`}>
              标题：{v.Title}; 描述：{v.Describe}；内容：{v.Main}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

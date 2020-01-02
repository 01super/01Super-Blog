import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../../utils/request";

const List = props => {
  const [list, setList] = useState([]);
  useEffect(() => {
    request.get("api/getList").then(res => {
      if (res.code === "Y") {
        setList(res.data);
      } else {
        setList([]);
      }
    });
  }, []);
  return (
    <div>
      <ul>
        {list.map(v => (
          <li>
            <Link to={`/detial/${v.id}`}>
              标题：{v.title}; 描述：{v.describe}；作者：{v.author}；时间：{new Date(v.utime).toLocaleDateString()}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

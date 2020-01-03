import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import request from "../../utils/request";
import { List, Avatar } from "antd";

const BlogList = props => {
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
      <List
        itemLayout="horizontal"
        dataSource={list}
        renderItem={item => (
          <List.Item key={item.id}>
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={
                <Link to={`/detial/${item.id}`}>
                  {item.title}&nbsp;&nbsp;{item.author}
                </Link>
              }
              description={item.describe}
            />
          </List.Item>
        )}
      />
    </div>
  );
};

export default BlogList;

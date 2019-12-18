import React, { useRef, useEffect } from "react";
import { withRouter } from "react-router-dom";
import request from "../../utils/request";
import marked from "marked";
import styled from "@emotion/styled";

const ShowMark = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid #ccc;
`;

const Detial = props => {
  const { match } = props;
  const { id } = match.params;
  const ShowMarkRef = useRef(null);

  useEffect(() => {
    request.get("api/detial", { id }).then(res => {
      ShowMarkRef.current.innerHTML = marked(res.Main);
    });
  }, []);

  return <ShowMark ref={ShowMarkRef}></ShowMark>;
};

export default withRouter(Detial);

import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import marked from "marked";
import { post } from "../../utils/request";
import { Col, Row, Input, Form, Button, message } from "antd";

const EdotorWrap = styled.div`
  margin: 20px 0;
`;

const TextInput = styled.div`
  height: 600px;
  border: 1px solid #ccc;
  outline: none;
`;

const ShowMark = styled.div`
  height: 600px;
  border: 1px solid #ccc;
`;

const Editor = props => {
  const [content, setContent] = useState("");
  const [title, setTltle] = useState("");
  const [sort, setSort] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const ShowMarkRef = useRef(null);

  useEffect(() => {
    ShowMarkRef.current.innerHTML = marked(content);
  }, [content]);

  function handleSubmit() {
    if (title && description && content) {
      post("/api/addBlog", {
        title,
        describe: description,
        sort,
        author,
        content
      }).then(res => {
        if (res.code === "Y") {
          message.success("上传成功");
          return
        }
        message.warn("上传失败")
      });
    }
  }

  return (
    <>
      <Form layout="inline">
        <Form.Item label="标题">
          <Input
            onChange={v => {
              setTltle(v.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="简述">
          <Input
            onChange={v => {
              setDescription(v.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="分类">
          <Input
            onChange={v => {
              setSort(v.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label="作者">
          <Input
            onChange={v => {
              setAuthor(v.target.value);
            }}
          />
        </Form.Item>
      </Form>
      <EdotorWrap>
        <Row gutter={12}>
          <Col span={12}>
            <TextInput
              contentEditable="plaintext-only"
              value={content}
              onInput={v => {
                setContent(v.target.innerText);
              }}
            />
          </Col>
          <Col span={12}>
            <ShowMark id="showmark" ref={ShowMarkRef} />
          </Col>
        </Row>
      </EdotorWrap>
      <div align="right">
        <Button type="primary" onClick={handleSubmit}>
          提交
        </Button>
      </div>
    </>
  );
};

export default Editor;

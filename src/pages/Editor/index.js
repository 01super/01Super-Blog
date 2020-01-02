import React, { useEffect, useState, useRef } from "react";
import styled from "@emotion/styled";
import marked from "marked";
import { post } from "../../utils/request";

const EdotorWrap = styled.div`
  padding: 20px;
  border: 1px solid #ccc;
  overflow: hidden;
`;

const TextInput = styled.div`
  float: left;
  height: 500px;
  border: 1px solid #ccc;
  width: 500px;
`;

const ShowMark = styled.div`
  height: 500px;
  border: 1px solid #ccc;
  width: 500px;
  float: left;
`;

const Editor = props => {
  const [value, setValue] = useState("");
  const [title, setTltle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const ShowMarkRef = useRef(null);

  useEffect(() => {
    ShowMarkRef.current.innerHTML = marked(value);
  }, [value]);

  function handleSubmit() {
    if (title && description && value) {
      post("/api/addBlog", {
        title,
        describe: description,
        sort: type,
        author,
        content: value
      }).then(res => {
        if (res.code === "Y") {
          console.log("上传成功");
        }
      });
    }
  }

  return (
    <>
      <header key="header">
        标题：
        <input
          type="text"
          spellCheck="false"
          onChange={v => {
            setTltle(v.target.value);
          }}
        />
        简述：
        <input
          type="text"
          spellCheck="false"
          onChange={v => {
            setDescription(v.target.value);
          }}
        />
        分类：
        <input
          type="text"
          spellCheck="false"
          onChange={v => {
            setType(v.target.value);
          }}
        />
        作者：
        <input
          type="text"
          spellCheck="false"
          onChange={v => {
            setAuthor(v.target.value);
          }}
        />
      </header>
      <EdotorWrap key="main">
        <TextInput
          contentEditable="plaintext-only"
          value={value}
          onInput={v => {
            setValue(v.target.innerText);
          }}
        ></TextInput>
        <ShowMark id="showmark" ref={ShowMarkRef}></ShowMark>
      </EdotorWrap>
      <button onClick={handleSubmit}>提交</button>
    </>
  );
};

export default Editor;

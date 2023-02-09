import React, { useRef } from "react";

function RefTutorial () {
  const inputRef = useRef(null);

  const onClick = () => {
    inputRef.current.value = "请在这里输入信息哦";
    inputRef.current.focus();
  };
  return (
    <div>
      <h1>有个小院</h1>
      <input type="text" placeholder="请输入..." ref={inputRef} />
      <button onClick={onClick}>更新用户名</button>
    </div>
  );
}

export default RefTutorial;

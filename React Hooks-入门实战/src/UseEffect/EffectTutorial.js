import React, { useEffect, useState } from "react";
import axios from "axios";


function EffectTutorial () {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[count].email);
        console.log("API 被调用");
      });
  }, []);

  return (
    <div>
      欢迎来到我的小院
      <h1>{data}</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        点击增加计数器
      </button>
    </div>
  );
}

export default EffectTutorial;

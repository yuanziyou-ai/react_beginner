import React, { useState } from "react";


const StateTutorial = () => {

  //设置默认值，括号里面就是填写默认值的地方
  //第一个参数可以理解为变量，第二个参数为设置方法函数
  const [inputValue, setInputValue] = useState("你好，欢迎来到我的小院");

  //定义事件动作
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="请输入信息" onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;

//通过在函数组件里调用它来给组件添加一些内部 state。返回一个 state，以及更新 state 的函数。
//React 会在重复渲染时保留这个 state。useState 会返回一对值：当前状态和一个让你更新它的函数，你可以在事件处理函数中或其他一些地方调用这个函数。
// 它类似 class 组件的 this.setState，但是它不会把新的 state 和旧的 state 进行合并。
import React, { useState, createContext } from "react";
import Login from "./Login";
import User from "./User";


export const AppContext = createContext(null);

function ContextTutorial () {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{ username, setUsername }}>
      <Login /> <User />
    </AppContext.Provider>
  );
}

export default ContextTutorial;


// 接收一个 context 对象（React.createContext 的返回值）并返回该 context 的当前值。
// 当前的 context 值由上层组件中距离当前组件最近的 <MyContext.Provider> 的 value prop 决定。
// useContext(MyContext) 相当于 class 组件中的 static contextType = MyContext
// useContext(MyContext) 只是让你能够读取 context 的值以及订阅 context 的变化。
// 你仍然需要在上层组件树中使用 <MyContext.Provider> 来为下层组件提供 context。

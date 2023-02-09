import "./App.css";
import Profile from "./Profile";
import Experience from "./Experience";

function App () {
  return (
    <div className="App">
      {/* 个人基础信息组件 */}
      <Profile />
      <hr />
      {/* 工作经历组件 */}
      <Experience />
    </div>
  );
}

export default App;

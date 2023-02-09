import "./Profile.css";
import image from "./headshot.jpg";
import {
  AiFillGithub,
  AiFillBook
} from "react-icons/ai";

const Profile = () => {
  return (
    <div className="section">
      <div className="bio">
        <p className="no-margin small-text">你好</p>
        <p className="no-margin name-text">
          我是 <span className="highlight-text">霍大侠</span>
        </p>
        <p className="no-margin small-text">
          创业者 <span className="highlight-text">，</span> 教育者
        </p>
        <div className="icons">
          <a href="http://www.huodaxia.com">
            <AiFillBook color="green" size={30} />
          </a>
          <a href="https://github.com/yougexiaoyuan">
            <AiFillGithub color="green" size={30} />
          </a>
        </div>
      </div>
      <div className="photo">
        <img src={image} className="profile-image" alt="me" />
      </div>
    </div>
  );
};

export default Profile;

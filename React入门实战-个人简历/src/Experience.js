import "./Experience.css";

const Experience = () => {
  const items = [
    {
      title: "兴趣编程导师",
      company: "有个小院",
      date: "2022 - Current",
      description: "致力于兴趣编程，跟着我每天学习一点点",
      points: [
        "带着大家一起兴趣编程",
        "带着大家一起做个小产品",
        "带着大家一起找个好工作",
      ],
      image:
        "http://www.yougexiaoyuan.com/images/ygxy.jpg"
    },
    {
      title: "互联网创业者",
      company: "科讴",
      date: "2013 -  Current",
      description:
        "科技讴歌未来",
      points: [],
      image:
        "https://tida.alicdn.com/oss_1663641395679_289589474_dTjXvhOe.png",
    },
  ];

  return (
    <div className="experience">
      <h1 className="header">工作经历</h1>
      <div className="work-items">
        {items.map((item) => (
          <div className="item" key={Math.random()}>
            <img src={item.image} alt="logo" className="logo" />
            <div className="item-content">
              <div className="item-header">
                <h2 className="no-margin">{item.title}</h2>
                <h4 className="no-margin">{item.company}</h4>
                <p className="no-margin text-muted">{item.date}</p>
              </div>
              <p className="no-margin">{item.description}</p>
              <ul className="points">
                {item.points.map((point) => (
                  <li key={Math.random()}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;

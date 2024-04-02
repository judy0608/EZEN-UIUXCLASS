import "./Body.css";

const Body = ({ name, location, favorList }) => {
  // const { name, location } = props;
  return (
    // <body style={{ backgroundColor: "red", color: "#fff" }}> *인라인스타일시트
    <div>
      <h1>
        {name}는 {location}에 살고 있습니다.
        <br />
        {name}는 {favorList.length}개의 최애 메뉴가 있습니다.
        <br />
        {favorList[2]}, {favorList[1]}, {favorList[0]} 를 매우 좋아합니다.
      </h1>
    </div>
  );
};

Body.defaultProps = {
  favorList: ["라면", "순대", "족발"],
};

export default Body;

import React from "react";

const Title = props => <h1>{props.titleName}</h1>;
const Title = props.children => <h1>{props.children}</h1>;

Title.defaultProps = {
  titleName: "Дефолтный заголовок"
}

export default Title;
//компонент реакта не может возрващать 2 компонента подряд

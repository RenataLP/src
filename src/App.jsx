import React, { Fragment, Component } from "react";

import { Title, Button } from "./components";


const el = document.querySelector("#root");

el.classList.add('_test');//но такое нельзя написаьт в реакте, есть атрибует className

const sites = [{name: "google", url: "google.com"},
              {name: "yandex", url: "yandex.ru"}
];

class App extends Component {
  state = {
    counter: 0
  }//у компонента реакт есть стейт, каунтер пока что 0, по клику на кнопку или заголовок мы увеличиваем каунтер

  clickHandler = () => this.setState({counter: this.state.counter + 1});
  //без стейт
  //clickHandler = () => document.body.style.backgroundColor = "red";

  render() {
    const { counter } = this.state;
    
    const desc = <div>Description</div>;

    return (
      <Fragment>
      //<Title titleName="Hello World!" /> // туда передали наш заголовок, но часто у них бывает свойство, которые в 99: случаев одно и тоже, но иногда другое - дефолтный заглово
    //  <Title />
      <Title><span>Заголовок</span> конец заголовка {counter}</Title> // для стилизации
      <Button color="green" clickHandler={this.clickHandler}/> //classnames - library - установить через коммандую строку yarn add classnames
      <ul>
      {sites.map(site => (<li key={site.name}><a href={site.url} >{site.name}</a></li>))}//метод map - изменить в jsx и вернуть
      //{sites.map(({name, url}) => (<li key={name}><a href={url} >{site.name}</a></li>))} - деструктуризация
      </ul>
      {desc}
      {null}
      </Fragment>
    )
  };
}

//без Component в import React, { Fragment, Component } from "react"
// const App = () => {
//   const desc = <div>Description</div>;
//
//   return (
//     <Fragment>
//     //<Title titleName="Hello World!" /> // туда передали наш заголовок, но часто у них бывает свойство, которые в 99: случаев одно и тоже, но иногда другое - дефолтный заглово
//   //  <Title />
//     <Title><span>Заголовок</span> конец заголовка</Title> // для стилизации
//     <Button color="green"> //classnames - library - установить через коммандую строку yarn add classnames
//     <ul>
//     {sites.map(site => (<li key={site.name}><a href={site.url} >{site.name}</a></li>))}//метод map - изменить в jsx и вернуть
//     //{sites.map(({name, url}) => (<li key={name}><a href={url} >{site.name}</a></li>))} - деструктуризация
//     </ul>
//     {desc}
//     {null}
//     </Fragment>
//   )
// };

export default App;
//в реакте нужно добавляьт ключ при передаче данных, для правильной работы виртуального дерева

//пример деструктуриазции
//const obj = {a:1, b:2};

//const { a, b } = obj;

//атрибуты такие же как в хтмл, но есть исключения
//атрибут for - пишется htmlFor
//class -> className

//библиотека PropTypes

import React from "react";
import cn from "classnames";//библиотека, может обрабатывать значения и условия

const Button = props => <button className={"btn _" + props.color}>piu</button>;
const Button = props => <button className={cn("btn",`_${props.color}`, { _hover: props.color === "red"})}>piu</button>;

export default Button;

//классы и компоненты с Components
import React, { Component} from "react";
import cn from "classnames";//библиотека, может обрабатывать значения и условия

class Button extends Compoment {
  static propTypes = {
    color: PropTypes.string
  }

  static defaultProps = {
    color: "black"
  }

  render() {
    return (
      <button
    //  onClick={() => console.log(1)}//плохо, т.к. каждый раз будет создаваться функция
      onClick={this.clickHandler}
      className={cn(btn: true, _hover: this.props.color === "red"})}>
        piu
      </button>;
    )
  }
}

export default Button;

//дефолтные значения не надо писать если пропс обязателен - isRequired
//если необязателен надо передать дефолтное значение

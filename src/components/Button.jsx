import { Component } from "react";

class Button extends Component {
  render() {

    return (
      <button className={`px-20 md:px-12 py-4 md:py-[.9rem] rounded-full text-[white] font-bold ${this.props.textColor}`}>
        {this.props.children}
      </button>
    )
  }
}


export default Button
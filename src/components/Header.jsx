import { Component } from "react";

export default class SectionHeader extends Component {
  render() {
    return <header>{this.props.children}</header>

  }
}
import React, { Component } from "react";

class Page2 extends Component {
  state = {
    title: "Page-2"
  };

  render() {
    const { title } = this.state;
    return (
      <div>
        <p> {title} </p>
      </div>
    );
  }
}

export default Page2;

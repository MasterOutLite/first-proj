import React from "react";

class ReactCompClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "I am title this class",
    };
  }

  render() {
    return (
      <div>
        <header className="header">
          <h1>{this.state.title}</h1>
        </header>
      </div>
    );
  }
}

export default ReactCompClass;

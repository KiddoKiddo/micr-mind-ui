import React from "react";
import Line from "./Line";

require("./Conversation.css");

class Conversation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: [
        {
          text: "Hi. Welcome to MICR! I will be your assistant.",
          choices: ["OK", "Cancel"]
        }
      ]
    };

    this.addLine = this.addLine.bind(this);
    this.selectChoice = this.selectChoice.bind(this);
    this.renderLine = this.renderLine.bind(this);
  }

  selectChoice(lineId, choice) {
    const lines = [...this.state.lines];
    lines[lineId]["selected"] = choice;

    this.setState({ lines: lines });

    this.addLine("More text", ["Choice 1", "Choice 2"]);
  }

  addLine(text, choices) {
    this.setState({
      lines: [...this.state.lines, { text: text, choices: choices }]
    });
  }

  renderLine(line, i) {
    return (
      <Line
        key={i}
        lineId={i}
        {...line}
        isNew={i === this.state.lines.length - 1}
        selectChoice={this.selectChoice}
      />
    );
  }

  render() {
    return (
      <div className="conversation">
        {this.state.lines.map(this.renderLine)}
      </div>
    );
  }
}

export default Conversation;

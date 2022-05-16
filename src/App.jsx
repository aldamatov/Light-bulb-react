import { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      isBulbOn: true
    };
  }
  handleClick = () => {
    this.setState({ isBulbOn: !this.state.isBulbOn });
  };
  render() {
    const { isBulbOn } = this.state;
    return (
      <>
        <div id="container" className={isBulbOn ? "bgcOff" : "bgcOn"}>
          <img
            src={
              isBulbOn
                ? "https://learn.seytech.co/assets/slides/js-intro/assets/lightoff.png"
                : "https://learn.seytech.co/assets/projects/js/dom-projects/light-switch/lighton.png"
            }
            alt="Light"
          />
        </div>
        <button onClick={this.handleClick}>
          {isBulbOn ? "Bulb On" : "Bulb Off"}
        </button>
      </>
    );
  }
}

export default App;

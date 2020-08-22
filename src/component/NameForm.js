import React from "react";

class NameForm extends React.Component {
  state = { value: "" };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = (event) => {
    alert("A name was submitted: " + this.state.value);
  };

  render() {
    return (
      <form action="#" onSubmit={this.handleSubmit}>
        <label htmlFor="">
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;

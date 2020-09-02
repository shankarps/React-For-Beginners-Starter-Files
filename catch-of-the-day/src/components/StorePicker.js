import React from "react";
import { getFunName } from "../helpers.js";
class StorePicker extends React.Component {
  constructor() {
    super();
    console.log("constructor");
    //to bind the method to the object
    //this.goToStore = this.goToStore.bind(this);
  }

  myInput = React.createRef();

  goToStore = (event) => {
    //prevent form submit
    event.preventDefault();
    console.log("going to store");
    //get text value
    console.log(this.myInput.current);
    console.log(this.myInput.current.value);
    this.props.history.push(`/store/${this.myInput.current.value}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        {/*This is a comment. Inside JSX.*/}
        <h2>Please Enter a Store</h2>
        <input
          type="text"
          ref={this.myInput}
          required
          placeholder="Store Name"
          defaultValue={getFunName()}
        />
        <button type="submit">Visit store -></button>
      </form>
    );
  }
}

export default StorePicker;

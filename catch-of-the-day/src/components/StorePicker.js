import React from "react";

class StorePicker extends React.Component {
  render() {
    return (
      <form action="" className="store">
        {/*This is a comment. Inside JSX.*/}
        <h2>Please Enter a Store</h2>
        <input type="text" required placeholder="Store Name" />
        <button type="submit">Visit store -></button>
      </form>
    );
  }
}

export default StorePicker;

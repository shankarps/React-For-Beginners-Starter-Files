import React from "react";
import PropTypes from "prop-types";
class AddFishForm extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  static propTypes ={
    addFish: PropTypes.func
  }
  createFish = (event) => {
    event.preventDefault();
    console.log(this.nameRef.current.value);
    const fish = {
      name: this.nameRef.current.value,
      price: parseFloat(this.priceRef.current.value),
      status: this.statusRef.current.value,
      desc: this.descRef.current.value,
      image: this.imageRef.current.value,
    };
    this.props.addFish(fish);
    console.log(fish);
    console.log(event);
    console.log(event.currentTarget);
    event.currentTarget.reset();
  };
  render() {
    return (
      <div className="AddFishForm">
        <h2>Add Fish Form</h2>
        <form className="fish-edit" onSubmit={this.createFish}>
          <input
            name="name"
            type="text"
            ref={this.nameRef}
            placeholder="Name"
          />
          <input
            name="price"
            type="text"
            ref={this.priceRef}
            placeholder="Price"
          />
          <select
            name="status"
            type="text"
            ref={this.statusRef}
            placeholder="Status"
          >
            <option value="available">Fresh</option>
            <option value="unavailable">Sold Out</option>
          </select>
          <textarea name="desc" ref={this.descRef} placeholder="Desc" />
          <input
            name="image"
            type="text"
            ref={this.imageRef}
            placeholder="Image"
          />
          <button type="Submit">Add Fish</button>
        </form>
      </div>
    );
  }
}

export default AddFishForm;

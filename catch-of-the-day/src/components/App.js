import React from "react";
import Header from "./Header";
import Order from "./Order";
import Inventory from "./Inventory";
import sampleFishes from "../sample-fishes";
import Fish from "./Fish";
import base from "../base";

class App extends React.Component {
  state = {
    fishes: {},
    order: {},
  };

  componentDidUpdate() {
    console.log(this.state.order);
    localStorage.setItem(
      this.props.match.params.storeId,
      JSON.stringify(this.state.order)
    );
    console.log("updated");
  }
  componentDidMount() {
    const storeId = this.props.match.params.storeId;
    console.log(storeId);
    /*
    this.ref = base.syncState(`${this.props.match.params.storeId}/fishes`, {
      context: this,
      state: "fishes",
    });
    */
    console.log("mounted");
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }
  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };
  addFish = (fish) => {
    //copy the state
    //object spread - read this
    const fishes = { ...this.state.fishes };
    //add new fish
    fishes[`fish` + Date.now()] = fish;
    //set new fishes object to state
    this.setState({ fishes: fishes });
    console.log("add a fish");
  };

  updateFish = (key, updatedFish) => {
    //copy current state
    const fishes = { ...this.state.fishes };
    //update
    fishes[key] = updatedFish;
    //set to state
    this.setState({ fishes });
  };

  deleteFish = (key) => {
    //copy state
    const fishes = { ...this.state.fishes };
    //update - remove
    delete fishes[key];
    //set state
    this.setState({ fishes });
  };

  addToOrder = (key) => {
    //copy the state
    const order = { ...this.state.order };
    //add to order state var - increment
    order[key] = order[key] + 1 || 1;
    //update state
    this.setState({ order });
  };

  removeFromOrder = (key) => {
    //copy the state
    const order = { ...this.state.order };
    //add to order state var - increment
    delete order[key];
    //update state
    this.setState({ order });
  };
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
          <ul className="fishes">
            {Object.keys(this.state.fishes).map((key) => (
              <Fish
                key={key}
                index={key}
                details={this.state.fishes[key]}
                addToOrder={this.addToOrder}
              >
                {key}
              </Fish>
            ))}
          </ul>
        </div>
        <Order
          fishes={this.state.fishes}
          order={this.state.order}
          removeFromOrder={this.removeFromOrder}
        />
        <Inventory
          updateFish={this.updateFish}
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
          fish={this.state.fishes}
          deleteFish={this.deleteFish}
        />
      </div>
    );
  }
}

export default App;

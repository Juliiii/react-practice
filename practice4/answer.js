// Component 已经可以直接使用

class House extends Component {
  // TODO
  render () {
    return (
      <div className="house">
        <Room />
        <Bathroom />
      </div>
    );
  };
}

class Room extends Component {
  // TODO
  render () {
    return (
      <div className="room">
        <Dog />
        <Dog />
        <Man />
      </div>
    );
  };
}

class Bathroom extends Component {
  // TODO
  render () {
    return (
      <div className="bathroom" />
    );
  };
}

class Man extends Component {
  // TODO
  render () {
    return (
      <div className="man" />
    );
  };
}

class Dog extends Component {
  // TODO
  render () {
    return (
      <div className="dog" />
    );
  };
}
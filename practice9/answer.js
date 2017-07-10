class Input extends Component {

  change (e) {
    if (this.props.change) {
      this.props.change(e);
    }
  }


  render () {
    return (
      <div>
        <input type='number' onChange={this.change.bind(this)}/>
      </div>
    )
  }
}

class PercentageShower extends Component {
  render () {
    return (
      <div>{this.props.res}</div>
    )
  }
}

class PercentageApp extends Component {
  constructor () {
    super();
    this.state = {
      res: 0
    }
  }

  change (e) {
    this.setState({
      res: `${(e.target.value * 100).toFixed(2)}%`
    });
  }


  render () {
    return (
      <div>
        <Input change={this.change.bind(this)}/> 
        <PercentageShower res={this.state.res}/>
      </div>
    )
  }
}
class Dog extends Component {
  constructor () {
    super()
    /* TODO */
    this.state = {
      isRunning: false,
      isBarking: false
    }
  }
  
  bark () {
    /* TODO */
  }
  
  run () {
    /* TODO */
  }
 
  Click () {
    this.setState({
      isRunning: true,
      isBarking: true
    })
    setTimeout(() => {
      this.setState({
        isRunning: false,
        isBarking: false
      })
    }, 20);
  }
 
  render () {
    return (<div onClick={this.Click.bind(this)}>DOG</div>)
  }
}

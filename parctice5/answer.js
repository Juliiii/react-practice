class Dog extends Component {
  bark () {
    console.log('bark')
  }
  
  run () {
    console.log('run')
  }
  
  Click () {
    this.bark();
    this.run();
  }
  
  render () {
    return (<div onClick={this.Click.bind(this)}>DOG</div>)
  }
}
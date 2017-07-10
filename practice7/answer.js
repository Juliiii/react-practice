class Computer extends Component {
  constructor () {
    super();
    this.state = {
      status: 'off'
    };
  }
  
  Click () {
    this.setState({
      status: this.state.status === 'off' ? 'on' : 'off'
    });
  }
  
  render () {
    return (
      <div>
        <Screen showContent={this.state.status === 'on' ? '显示器亮了' : '显示器关了'} />
        <button onClick={this.Click.bind(this)}>开关</button>
      </div>
    )
  }
}

class Screen extends Component {
  static defaultProps = {
    showContent: '无内容'
  };
  
  render () {
    return (
      <div className='screen'>{this.props.showContent}</div>
    );
  }
}
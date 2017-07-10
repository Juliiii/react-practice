class Post extends Component {
  render () {
    return (<p ref={ p => this.p = p} onClick={() => console.log(this.p.clientHeight)}>{this.props.content}</p>)
  }
}
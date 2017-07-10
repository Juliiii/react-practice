class BlackBorderContainer extends Component {
  /* TODO */
  render () {
    return (
      <div>
        {this.props.children.map((el, i) => <div key={i} className="blackBorder">{el}</div>)}
      </div>
    );
  }
}
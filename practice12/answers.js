const getDefaultStyledPost = (defaultStyle) => {
  /* TODO */
  
  class Post extends Component {
    render () {
      return (
        <p style={{...defaultStyle, ...this.props.style}} />
      )
    }
  }
  
  return Post;
}
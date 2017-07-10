function renderContent (content) {
  // TODO
  class H1 extends Component {
    render () {
      return (
        <h1>{content}</h1>
      );
    }
  }
  
  
  
  ReactDOM.render(<H1 />, document.getElementById('root'));
}
const makeProvider = (param) => (WrappedComponent) => {
    class NewComponent extends Component {
      static childContextTypes = {
        data: PropTypes.object
      }
      
      getChildContext() {
        return {
          data: param
        }
      }
      
      render() {
        return (<WrappedComponent />);
      }
    }
    return NewComponent;
  }
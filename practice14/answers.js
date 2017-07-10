// getData(url) 已经可以直接使用
// 本站的环境都可以使用 async/await

const loadAndRefresh = (url) => {
  return (DumbComponent) => {
      class NewComponent extends Component {
           async componentWillMount () {
                await this.refresh();
            }
            
            async refresh () {
               this.setState({
                 content: '数据加载中...'
               });
             
                const content = await getData(url);
             
               this.setState({
                 content
               });              
            }
            
            
            render () {
                const props = {
                  content: this.state.content,
                  refresh: this.refresh.bind(this),
                  ...this.props
                };
                return (
                  <DumbComponent {...props} />
                );
            }
        }
        return NewComponent;
      }
    }
// getPostData 已经可以直接使用
// 小提示：本系统可以直接 async/await

class Post extends Component {
  constructor () {
    super();
    this.state = {
      postContent: ''
    };
  }
  async componentWillMount () {
    await this.refresh();
  }

  async refresh () {
    this.setState({
      postContent: '数据加载中...'
    });

    const postContent = await getPostData();

    this.setState({
      postContent
    });
  }
  



  render () {
    return (
      <div>
        <div className='post-content'>{this.state.postContent}</div>
        <button onClick={this.refresh.bind(this)}>刷新</button>
      </div>
    )
  }
}
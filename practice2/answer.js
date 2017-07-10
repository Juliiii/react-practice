// 函数 getNotificationsCount 已经可以直接调用

class Notification extends Component {
  render () {
    const N = getNotificationsCount();
    const weidu = `有(${N})条未读消息`;
    const yidu = '没有未读消息';
    // TODO
    return (
      <span>
        {N > 0 ? weidu : yidu}
      </span>
    )
  }
}
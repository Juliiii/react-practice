class Lesson extends Component {
  /* TODO */
 static defaultProps = {
   lesson: {}
 };

 Click () {
  if (this.props.Click) {
    this.props.Click(this.props.index, this.props.lesson.title);
  }
 }


  render () {
    return (
      <div onClick={this.Click.bind(this)}>
        <h1>{this.props.lesson.title}</h1>
        <p>{this.props.lesson.description}</p>
      </div>
    );
  }
}

class LessonsList extends Component {
  /* TODO */

  Click (index, title) {
    console.log(`${index} - ${title}`);
  }

  render () {
    return (
      <div>
        {this.props.lessons.map((lesson, index) => <Lesson lesson={lesson} key={index} index={index} Click={this.Click}/>)}          
      </div>
    );
  }
}
import { Component } from 'react';

class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({ [evt.target.name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addBlog(this.state);
    this.setState({ title: '', body: '' });
  }

  render() {
    return (
      <form className="mainForm" onSubmit={this.handleSubmit}>
        <label className="title">
          Blog Title
          <input className="blogTitle" name="title" onChange={this.handleChange} value={this.state.title}/>
        </label>

        <label className="body">
          Blog Body:
          <textarea className="blogBody" name="body" onChange={this.handleChange} value={this.state.body}/>
        </label>
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    );
  }
}

export default BlogForm

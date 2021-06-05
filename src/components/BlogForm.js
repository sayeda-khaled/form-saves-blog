import { Component } from 'react';

class BlogForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    const value = evt.target.value;
    this.setState({
      ...this.state,
      [evt.target.name]: value
    });
  }

  handleSubmit(event) {
    this.props.addBlog(this.state);
    event.preventDefault();

  }

  render() {
    return (
      <form className="mainForm" onSubmit={this.handleSubmit}>

      <label className="title">
        Blog Title
        <input className="blogTitle" name = "title" onChange={this.handleChange} />
      </label>

        <label className="body">
          Blog Body:
          <textarea className="blogBody" name = "body" onChange={this.handleChange} />
        </label>
        <input className="submitButton" type="submit" value="Submit" />
      </form>
    );
  }
}

export default BlogForm

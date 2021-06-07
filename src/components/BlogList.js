import { Component } from 'react';

class BlogList extends Component {

  render() {

    const listItems = this.props.blogs.map((blog, index) =>(
      <div key={index}>
        <h1> {blog.title}</h1>
        <p>{blog.body}</p>
      </div>
    ));

    return (
      <div>
        <div>{listItems}</div>
      </div>
    );
  }
}

export default BlogList

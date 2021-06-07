import { Component } from 'react';
import './App.css';
import BlogForm from './components/BlogForm.js';
import BlogList from './components/BlogList.js';

const defaultBlogs = [
  {
    title: 'Blog Post 1',
    body: 'This is the content of the first blog'
  },
  {
    title: 'Blog Post 2',
    body: 'This is the content of the second blog'
  },
  {
    title: 'Blog Post 3',
    body: 'This is the content of the third blog'
  }
]

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      blogs: [],
    };
    this.addBlog = this.addBlog.bind(this);
  }

  componentDidMount(){
    this.setState({
      blogs: defaultBlogs,
    });
  }


  addBlog(newEntry){
    let blogCopy=[...this.state.blogs];
    blogCopy.push(newEntry);
    this.setState({
      blogs: blogCopy,
    });
  }
  render() {

    return (
      <>
        <BlogForm addBlog={this.addBlog}/>
        <BlogList blogs={this.state.blogs}/>
     </>
    );
  }
}



export default App;

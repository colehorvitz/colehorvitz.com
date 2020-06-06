import React, { Component } from 'react';
import './App.css';
import Console from './Console'
import ProjectCard from './ProjectCard'
import { PROJECTS } from './projects'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'

class App extends Component { 
  render() {
    return (
      <div>
        <div className="main-wrap">
          <div className="intro-wrap">
            <div className="intro-header">
              <h1 style={{fontWeight:400}}>cole horvitz</h1>
              <div className="nav">
                <a href="https://github.com/colehorvitz" target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon"/></a>
                <a href="https://www.linkedin.com/in/cole-horvitz-37a58a19a" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon" /></a>
              </div>
            </div>
            <Console />
          </div>
        </div>
        <div className="projects-wrap" id="projects">
        <h2>projects</h2>
          <div className="projects-grid">
            {this.renderProjects()}
          </div>
        </div>
        <div className="footer">
          <h4>Cole Horvitz</h4>
          <p>cole_horvitz@brown.edu</p>
          <div className="icons">
            <a href="https://www.linkedin.com/in/cole-horvitz-37a58a19a" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon" /></a>
            <a href="https://github.com/colehorvitz" target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon"/></a>
          </div>
        </div>
      </div>
  );
  }

  renderProjects = () => {
    return PROJECTS.map( proj => {
      return <ProjectCard project={proj}/>
    });
  }

  componentDidMount() {
    document.title = 'Cole Horvitz';
  }

}

export default App;

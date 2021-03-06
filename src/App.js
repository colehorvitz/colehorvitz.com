import React, { Component } from 'react';
import './App.css';
import Console from './Console'
import ProjectCard from './ProjectCard'
import { PROJECTS } from './projects'
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai'
import { MdEmail } from 'react-icons/md'

class App extends Component {
  render() {
    return (
     <div>
      <div className="wrap">
        <div className="content">
          <div className="intro">
            <div className="intro-header">
            <h1 style={{ fontWeight: 400 }}>cole horvitz</h1>
            <div className="nav">
              <a href="https://github.com/colehorvitz" target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon" /></a>
              <a href="https://www.linkedin.com/in/cole-horvitz-37a58a19a" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon" /></a>
            </div>
          </div>
          <Console />
          </div>
         <h2>projects</h2>
         <div className="projects-wrap" id="projects">
             <div className="projects-grid">
               {this.renderProjects()}
             </div>
         </div>
       
      </div>
        </div>
        <div className="footer">
           <div className="icons">
             <a href="https://www.linkedin.com/in/cole-horvitz-37a58a19a" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon" /></a>
             <a href="mailto:cole_horvitz@brown.edu" target="_blank" rel="noopener noreferrer"><MdEmail className="icon" /></a>
             <a href="https://github.com/colehorvitz" target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon" /></a>
           </div>
         </div> 
     </div>);
     
     
     
    //  <div>
    //     <div className="main-wrap">
    //       <div className="intro-wrap">
    //         <div className="intro-header">
    //           <h1 style={{ fontWeight: 400 }}>cole horvitz</h1>
    //           <div className="nav">
    //             <a href="https://github.com/colehorvitz" target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon" /></a>
    //             <a href="https://www.linkedin.com/in/cole-horvitz-37a58a19a" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon" /></a>
    //           </div>
    //         </div>
    //         <Console />
    //       </div>
    //     <div className="projects-wrap" id="projects">
    //         <div classNamez><h2>projects</h2></div>   
    //         <div className="projects-grid">
    //           {this.renderProjects()}
    //         </div>
    //     </div>
    //     <div className="footer">
    //       <div className="icons">
    //         <a href="https://www.linkedin.com/in/cole-horvitz-37a58a19a" target="_blank" rel="noopener noreferrer"><AiFillLinkedin className="icon" /></a>
    //         <a href="mailto:cole_horvitz@brown.edu" target="_blank" rel="noopener noreferrer"><MdEmail className="icon" /></a>
    //         <a href="https://github.com/colehorvitz" target="_blank" rel="noopener noreferrer"><AiFillGithub className="icon" /></a>
    //       </div>
    //     </div>        </div>

    //   </div>

  }

  renderProjects = () => {
    return PROJECTS.map(proj => {
      return <ProjectCard project={proj} />
    });
  }

  componentDidMount() {
    document.title = 'Cole Horvitz';
  }

}

export default App;

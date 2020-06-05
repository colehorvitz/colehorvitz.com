import React, { Component } from 'react'

class ProjectCard extends Component {
    constructor() {
        super();
        this.state={

        }
    }

    render() {
        return(
            <div className="project-card">
                <div className="img-wrap">
                    <img src={this.props.project.img}  alt={this.props.project.name} />
                </div>
                <div className="info">
                    {this.props.project.url != null ?
                    <a href={this.props.project.url} target="_blank" rel="noopener noreferrer"><h3>{this.props.project.name}</h3></a>
                    : <h3>{this.props.project.name}</h3>}
                    <p>{this.props.project.desc}</p>
                    <div className="tag-wrap">
                        {this.renderTags()}
                    </div>
                </div>
            </div>
        );
    }

    renderTags = () => {
        return this.props.project.tags.map( tag => {
            return (
                <div className="tag">
                    {tag}
                </div>
            )    
        })
    }

}

export default ProjectCard
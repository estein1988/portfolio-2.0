import React, { Component } from 'react';
import {Jumbotron, Container} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faMedium, faYoutube } from '@fortawesome/free-brands-svg-icons';

class Header extends Component {
    // let resumeInfo = this.props.resumeInfo;
    
    render() {
    return (
        <div id="header">
            <Jumbotron id="jumbo" fluid>
            <Container>
                <h1 id="header-name">Elliott Stein</h1>
                <p>Full Stack Software Engineer</p>
            </Container>
            </Jumbotron>
            <div id="icons">
                <a href="https://github.com/estein1988" target="_blank" rel="noreferrer"><FontAwesomeIcon id="github" icon={faGithub} size="5x"/></a>
                <a href="https://www.linkedin.com/in/steinelliott/" target="_blank" rel="noreferrer"><FontAwesomeIcon id="linkedIn" icon={faLinkedin} size="5x"/></a>
                <a href="https://estein1988.medium.com/" target="_blank" rel="noreferrer"><FontAwesomeIcon id="medium" icon={faMedium} size="5x"/></a>
                <a href="https://www.youtube.com/channel/UCB7IDX2G2WQxgUn4lRkdT9g" target="_blank" rel="noreferrer"><FontAwesomeIcon id="youtube" icon={faYoutube} size="5x"/></a>
            </div>
        </div>
        );
    }
}

export default Header;
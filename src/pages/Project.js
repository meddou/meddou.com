import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import { withRouter } from 'react-router-dom';

import BasicPage from './BasicPage'

import Row from '../layout/row/Row'
import Item from '../layout/item/Item'

import Project from '../component/project/Project'
import ProjectOverlay from '../component/project/ProjectOverlay'
import Skill from '../component/skill/Skill'
import ScrollableRow from '../component/scrollable-row/ScrollableRow'
import Title from '../component/title/Title'
import Description from '../component/description/Description'
import RectScroller from '../component/rect-scroller/RectScroller'

import SkillService from '../services/Skill'
import ProjectService from '../services/Project'

import './Project.css'
import './BasicPage.css'

class ProjectPage extends BasicPage {
  constructor(props) {
    super(props)

    const name = props.match.params.name

    this.timeoutId = undefined

    this.state = {
      transitionVisible: !!window._projectListToProjectTrasition,
      project: ProjectService.getFromName(name)
    }
  }

  componentDidMount() {
    this.timeoutId = setTimeout(() => {
      this.timeoutId = undefined
      this.setState({
        transitionVisible: false
      })
    }, 500)

    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'instant'
    })
    window._projectListToProjectTrasition = undefined
  }

  goToWork() {
    this.props.history.push(`/work`)
  }

  renderContent() {

    return (
      <React.Fragment>
      <div className="project-page-background"></div>
      <div id="project-page-container">
        {this.state.project ?
          <div className="project-info-container">
            <div className="project-description-container">
              <Row className="project-header">
                <div style={{display: 'inline-block', position: 'relative'}}>
                  <Project {...this.state.project} isHoverable={false} fullSize/>
                  <div className="back-button-container" onClick={this.goToWork.bind(this)}><span>&#8249;</span></div>
                </div>
                <div className="project-title-container">
                  <Title text={this.state.project.name} noMargin={true}/>
                  { this.state.project.url &&
                    <div className="view-project-anchor">
                      <a href={this.state.project.url}
                        target="_blank" rel="noopener noreferrer" className="link">Voir le projet</a>
                    </div>
                  }
                  <ScrollableRow className="project-skills-container" step={164 / 2.5}>
                    { this.state.project.languages.map(SkillService.getFromName).map(skill => (
                      <Item key={skill.name}>
                        <Link to={`/work?skill=${encodeURIComponent(skill.name)}`}>
                          <Skill {...skill} />
                        </Link>
                      </Item>
                    ))}
                  </ScrollableRow>
                </div>
              </Row>
              <div className="project-scroller-container bp-small">
                <RectScroller>
                  { this.state.project.images.map(image => (
                      <img src={`/images-webp/project/${image}`} key={image} style={{backgroundColor: this.state.project.backgroundColor}} alt={this.state.project.name + ' ' + image}/>
                  )) }
                </RectScroller>
              </div>
              <Description text={this.state.project.description || ''}/>
            </div>
            <div className="project-scroller-container bp-large">
              <RectScroller>
                { this.state.project.images.map(image => (
                    <img src={`/images-webp/project/${image}`} key={image} alt={this.state.project.name + ' ' + image} style={{backgroundColor: this.state.project.backgroundColor}}/>
                )) }
              </RectScroller>
            </div>
            { this.state.transitionVisible &&
              <ProjectOverlay out isVisible={true} backgroundColor={this.state.project.backgroundColor} logo={this.state.project.logo}/>
            }
          </div> :
          <Redirect to='/work'/> }
      </div>
      </React.Fragment>
    )
  }
}

export default withRouter(ProjectPage)

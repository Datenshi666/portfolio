import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button, Tabs, Tab } from 'react-mdl';

class Projects extends Component {

    constructor(props) {
        super(props)
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className='m-projects'>
                    <div className='m-projects-grid'>
                        <Card className='m-projects-grid__all-card' shadow={5} >
                            <CardTitle className='m-projects-grid__all-card__duet'>
                            </CardTitle>
                            <CardText>
                                <h4 >Hairdressing salon Duet</h4>
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="http://www.salonduet.eu/" target="_blank" rel="noopener noreferrer">
                                        Live version
                                        </a>
                                </Button>
                                <Button colored>
                                    <a href="https://github.com/Datenshi666/Salon_Duet " target="_blank" rel="noopener noreferrer">
                                        GitHub
                                            </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className='m-projects'>
                    <div className='m-projects-grid'>
                        <Card className='m-projects-grid__all-card' shadow={5} >
                            <CardTitle className='m-projects-grid__all-card__quiz'>
                            </CardTitle>
                            <CardText>
                                <h4>Quiz for student applicants</h4>
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://datenshi666.github.io/Quiz_WSG/" target="_blank" rel="noopener noreferrer">
                                        Live version
                                        </a>
                                </Button>
                                <Button colored>
                                    <a href="https://github.com/Datenshi666/Quiz_WSG" target="_blank" rel="noopener noreferrer">
                                        GitHub
                                        </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className='m-projects'>
                    <div className='m-projects-grid'>
                        <Card className='m-projects-grid__all-card' shadow={5} >
                            <CardTitle className='m-projects-grid__all-card__hydrolin'>
                            </CardTitle>
                            <CardText>
                                <h4>UI for website HydroLin</h4>
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://linyzawiesia.pl/" target="_blank" rel="noopener noreferrer">
                                        Website
                                </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 3) {
            return (
                <div className='m-projects'>
                    <div className='m-projects-grid'>
                        <Card className='m-projects-grid__all-card' shadow={5} >
                            <CardTitle className='m-projects-grid__all-card__graphics'>
                            </CardTitle>
                            <CardText>
                                <h4>Part of my graphic works</h4>
                            </CardText>
                            <CardActions border>
                                <Button colored>
                                    <a href="https://aleksandramakowska.crevado.com/" target="_blank" rel="noopener noreferrer">
                                        Website
                                        </a>
                                </Button>
                            </CardActions>
                        </Card>
                    </div>
                </div>
            )
        } else if (this.state.activeTab === 4) {
            return (
                <div className='m-projects'>
                    <div className='m-projects-grid'>
                        <Card className='m-projects-grid__all-card' shadow={5} >
                            <CardTitle className='m-projects-grid__all-card__more'>
                            </CardTitle>
                            <CardText>
                                <h4 style={{ marginBottom: '53px' }}>And more soon</h4>
                            </CardText>
                        </Card>
                    </div>
                </div>
            )
        }
    }


    render() {
        return (
            <div className="m-tabs">
                <div className="m-tabs_grid">
                    <h3>Projects</h3>
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                        <Tab></Tab>
                        <Tab></Tab>
                        <Tab></Tab>
                        <Tab></Tab>
                        <Tab></Tab>
                    </Tabs>
                    <section>
                        <div className="m-tabs_content">
                            <Grid>
                                <Cell col={12}>
                                    <div className='m-projects-grid__all'>
                                        {this.toggleCategories()}
                                    </div>
                                </Cell>
                            </Grid>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Projects;
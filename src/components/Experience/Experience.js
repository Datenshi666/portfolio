import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Experience extends Component {
    render(){
        return(
            <Grid>
                <Cell col={4} className='text'>
                    <p>{this.props.startYear} - {this.props.endYear}</p>
                </Cell>
                <Cell col={4} className='text'>
                    <h4 style={{marginTop: '0px'}}>{this.props.jobName}</h4>
                    <p>{this.props.jobDescription}</p>
                </Cell>
                <Cell col={4} className='logo'>
                    <div className='m-job-experience__logo'>
                        <a href={this.props.link} target='_blank' rel="noopener noreferrer">
                            {/* <img src={this.props.logo} alt='logo' width='200px'/> */}
                            <div className={this.props.logo}></div>
                        </a>
                    </div>                
                </Cell>                
            </Grid>
            
        )
    }

}

export default Experience;
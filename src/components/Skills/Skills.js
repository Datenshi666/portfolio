import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbarWithChildren, buildStyles  } from 'react-circular-progressbar';

class Skills extends Component {
    render() {
        return (
            <Grid>
                <Cell className='skills' col={12}>
                    <div className='skills-progressbar' style={{ display: 'flex' }}>
                        
                        <CircularProgressbarWithChildren
                         value={this.props.percentage}
                         styles={buildStyles({
            
                            pathColor: `rgba(255, 107, 107)`,
                            trailColor: '#556270'
                          })}
                         >                            
                            <div className='skills-progress'>
                                {this.props.skill}
                                {/* <p>{this.props.percentage} %</p> */}
                            </div>
                        </CircularProgressbarWithChildren>
                        <p>{this.props.extraSkills}</p>
                    </div>
                </Cell>
            </Grid>
        )
    }
}
export default Skills;

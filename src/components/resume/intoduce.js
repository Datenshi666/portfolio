import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Resume extends Component {    
    render() {
        return (
            <div className='m-resume' id='about'>
                <div className='m-resume-introduce'>
                    <Grid>
                        <div className="m-resume-introduce__cells">
                            <Cell col={4}>
                                <div className="m-resume-introduce__cells-name">
                                    <div className='img'>
                                        {/* <img
                                            alt='My Avatar'
                                        /> */}
                                    </div>
                                    <div className='m-resume-introduce__cells-name-fullname'>
                                        <h2>Aleksandra</h2>
                                        <h2>Makowska</h2>
                                    </div>

                                </div>
                            </Cell>

                            <Cell col={8}>
                                <div className="m-resume-introduce__cells-text">
                                    <h4>Programmer</h4>
                                    <hr style={{ borderTop: '3px solid #ccc', width: '50%' }} />
                                    <p> I'm an artist, but my canvas is some kind of text file and my paints are components. With lines of code I can create masterpiece I share it with virtual world. I focus on broaden my knowledge, especially in front end but I'm going to develop back end skills as well as UI.</p>
                                    <hr style={{ borderTop: '3px solid #ccc', width: '50%' }} />
                                </div>
                            </Cell>

                        </div>
                    </Grid>
                </div>
            </div>
        )
    }
}

export default Resume;
import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Resume extends Component {
    render() {
        return (
            <div className='m-resume-cd'>
                <Grid>
                    <div className='m-resume-cd__skills'>
                        <h2>Development skills</h2>
                        <div className='m-resume-cd__skills-extraSkills'>
                            <p>HTML</p>
                            <p>|</p>
                            <p>CSS</p>
                            <p>|</p>
                            <p>JavaScript</p>
                            <p>|</p>
                            <p>C#</p>
                            <p>|</p>
                            <p>PHP</p>
                            <p>|</p>
                            <p>XML</p>
                        </div>
                        <div className='m-resume-cd__skills-extraSkills'>
                            <p>React</p>
                            <p>|</p>
                            <p>jQuery</p>
                            <p>|</p>
                            <p>AJAX</p>
                            <p>|</p>
                            <p>SASS</p>
                            <p>|</p>
                            <p>LESS</p>
                            <p>|</p>
                            <p>Git</p>
                            <p>|</p>
                            <p>NPM</p>
                        </div>
                    </div>
                    <div className='m-resume-cd__skills'>
                        <h2>Design & soft skills</h2>
                        <div className='m-resume-cd__skills-extraSkills'>
                            <p>Photoshop</p>
                            <p>|</p>
                            <p>Illustrator</p>
                            <p>|</p>
                            <p>InDesign</p>
                            <p>|</p>
                            <p>UX/UI</p>
                            <p>|</p>
                            <p>DTP</p>
                        </div>
                        <div className='m-resume-cd__skills-extraSkills'>
                            <p>Creativity</p>
                            <p>|</p>
                            <p>Teamwork</p>
                            <p>|</p>
                            <p>Responsibility</p>
                            <p>|</p>
                            <p>Time management</p>
                        </div>
                    </div>
                </Grid>

            </div>
        )
    }
}

export default Resume;
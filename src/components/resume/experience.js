import React, { Component } from 'react';
import { Grid } from 'react-mdl';
import Experience from '../Experience/Experience';


class Resume extends Component {
    render() {
        return (
            <div className='m-job' id='experience'>

                <Grid>
                    <div className='m-job-experience'>
                        <div className='m-job-experience__all'>
                            <h2>Experience</h2>
                            <Experience
                                startYear={"04.2019"}
                                endYear={"now"}
                                jobName="Webdev House"
                                jobDescription="Intership"
                                link='https://webdev.house/'
                                logo="logo-webdevhouse"
                            />

                            <Experience
                                startYear={2017}
                                endYear={2018}
                                jobName="SZOKStudio Jakub Woźniak"
                                jobDescription="Junior graphic designer"
                                link='https://www.szokstudio.pl/'
                                logo="logo-szokstudio"
                            />
                        </div>
                    </div>
                </Grid>
            </div>
        )
    }
}

export default Resume;
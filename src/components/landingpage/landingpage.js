import React, { Component } from 'react';
import { Grid } from 'react-mdl';

class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }} id='landing'>
                <Grid className='landing-grid'>
                    <div className='landing-grid__title'>
                    <div className='landing-grid__title-name'>
                        <h2 className='developer'>Frontend developer</h2>
                        <hr style={{ borderTop: '3px solid #ccc', width: '80%', margin: '5px' }} />
                        <h2 className='fullname'>Aleksandra Makowska</h2>
                    </div>
                    </div>

                </Grid>
            </div>
        )
    }
}

export default Landing;
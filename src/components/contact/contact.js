import React, { Component } from 'react';
import { Grid, Cell  } from 'react-mdl';

class Contact extends Component {
    render() {
        return (
            <div className='m-contact' id='contact'>
                <div className='m-contact-body' >
                <Grid className='m-contact-body__grid'>
                    <Cell col={4}>
                        <div className='m-contact-body__grid-col'>
                        <p><i className="fa fa-phone-square" aria-hidden="true" /></p>
                        <p>(+48) 781 066 774</p>
                        </div>
                    </Cell>
                    <Cell col={4}>
                    <div className='m-contact-body__grid-col'>
                        <p><i className="fa fa-envelope" aria-hidden="true" /></p>
                        <p>makowskaleksandra@gmail.com</p>
                        </div>
                    </Cell>
                    <Cell col={4}>
                    <div className='m-contact-body__grid-col'>
                    <a href="https://www.linkedin.com/in/aleksandra-makowska-68b901159/" target="_blank" rel="noopener noreferrer"> 
                        <p><i className="fab fa-linkedin" aria-hidden="true" /></p>
                        My profile</a>
                        </div>
                    </Cell>
                </Grid>
                </div>
            </div>
        )
    }
}

export default Contact;
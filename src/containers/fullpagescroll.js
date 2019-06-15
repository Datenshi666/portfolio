import React from 'react';
import { Pager } from "react-bootstrap";
import '../App.css';
import ReactPageScroller from "react-page-scroller";
import LandingPage from '../components/landingpage/landingpage';
import Introduce from '../components/resume/intoduce';
import Experience from '../components/resume/experience';
import Skills from '../components/resume/skills';
import Projects from '../components/projects/projects';
import Contact from '../components/contact/contact';


export default class FullPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { currentPage: 1 };
        this._pageScroller = null;
    }

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    pageOnChange = (number) => {
        this.setState({ currentPage: number });
    };

    getPagesNumbers = () => {

        const pageNumbers = [];

        for (let i = 1; i <= 6; i++) {
            let navLabel = i;
            if (i === 1) {
                navLabel = "Home"
            }
            if (i === 2) {
                navLabel = "Introduce"
            }
            if (i === 3) {
                navLabel = "Experience"
            }
            if (i === 4) {
                navLabel = "Skills"
            }
            if (i === 5) {
                navLabel = "Projects"
            }
            if (i === 6) {
                navLabel = "Contact"
            }
            pageNumbers.push(
                <Pager.Item key={i} eventKey={i - 1} onSelect={this.goToPage} >
                    {navLabel}
                </Pager.Item>
            )
        }
        return [...pageNumbers];
    };

    render() {

        const pagesNumbers = this.getPagesNumbers();

        return <React.Fragment>
            <ReactPageScroller ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                <LandingPage />
                <Introduce />
                <Experience />
                <Skills />
                <Projects />
                <Contact />
            </ReactPageScroller>
            <Pager className="pagination-additional-class" bsSize="large">
                <div className='pagination-additional-class__name'>
                    <p>Aleksandra Makowska</p>
                    <p>Frontend Developer</p>
                </div>
                <div className='pagination-additional-class__line'></div>
                <ul className='pagination-additional-class__navbar' >
                    {pagesNumbers}
                </ul>
                {/* <div className='pagination-additional-class__drawer' style={{ display: 'none' }}>
                    <ul >
                        {pagesNumbers}
                    </ul>
                </div> */}
            </Pager>
        </React.Fragment>
    }
}
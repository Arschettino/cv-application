import React from 'react';
import '../styles/livePreview.css'

export default class LivePreview extends React.Component {
    constructor(props) {
        super(props);

    }

    showWorkExperience(workFields) {
        return workFields.map((workItem, i) => {
            return (
                <div key={i}>
                    <div className="job-header">
                        <div className="company">
                            {workItem.company}
                        </div>
                        <div className="info">
                            <div className="job-title">
                                {workItem.title}
                            </div>
                            <div>|</div>
                            <div className="dates">
                                {workItem.start + " - " + workItem.end}
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        {workItem.description}
                    </div>
                </div>
            );
        })
    }

    showEduExperience(eduFields) {
        return eduFields.map((eduItem, i) => {
            return (
                <div key={i}>
                    <div className="job-header">
                        <div className="company">
                            {eduItem.program}
                        </div>
                        <div className="info">
                            <div className="job-title">
                                {eduItem.university}
                            </div>
                            <div>|</div>
                            <div className="dates">
                                {eduItem.start + " - " + eduItem.end}
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        {eduItem.description}
                    </div>
                </div>
            );
        })
    }

    render() {
        let { personalData, workFields, eduFields } = this.props.elements;
        // personalData = { pname: 'Andrew Schettino', title: 'Analyst', phone: '404-354-2162', email: 'arschettino@outlook.com', location: 'Miami, FL', description: 'The man, the myth, the legend' }
        // workFields = [{ company: 'Goldman Sachs', title: 'Analyst', start: 'Aug 2020', end: 'May 2022', description: 'Financial analyst and stuff' }];
        // eduFields = [{ program: 'M&T Program', university: 'University of Pennsylvania', start: 'May 2013', end: 'May 2017', description: 'Mechanical engineering' }];
        return (
            <div className="preview">
                <div className="header">
                    <div className="title">
                        <h1>{personalData.pname}</h1>
                        <h3>{personalData.title}</h3>
                    </div>
                    <div className="contact">
                        <span>Cell: {personalData.phone}</span>
                        <span>Email: {personalData.email}</span>
                        <span>Address: {personalData.location}</span>
                    </div>
                </div>
                <hr></hr>
                <div className="description">
                    <p>{personalData.description}</p>
                </div>
                <h4>Work Experience</h4>
                {this.showWorkExperience(workFields)}
                <h4>Education</h4>
                {this.showEduExperience(eduFields)}
            </div>
        );

    }
}
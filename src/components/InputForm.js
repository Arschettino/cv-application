import React from 'react';
import PersonalData from './PersonalData.js';
import Experience from './Experience.js';
import LivePreview from './LivePreview.js';
import '../styles/inputForm.css';

export default class InputForm extends React.Component {
    constructor(props) {
        super(props);
        let personalData = { pname: '', title: '', phone: '', email: '', location: '', description: '' }
        this.state = { personalData, workFields: [], eduFields: [] }
        this.handleClick = this.handleClick.bind(this);
        this.personalDataChange = this.personalDataChange.bind(this);
        this.workChange = this.workChange.bind(this);
        this.eduChange = this.eduChange.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        if (event.target.name === 'add-work') {
            this.addWorkField();
        }
        if (event.target.name === 'add-edu') {
            this.addEduField();
        }
        if (event.target.name.match(/^delete-work/)) {
            this.deleteWorkField(event.target.name.substring(event.target.name.length - 1));
        }
        if (event.target.name.match(/^delete-edu/)) {
            this.deleteEduField();
        }
    }

    personalDataChange(field, value) {
        let currentState = Object.assign({}, this.state.personalData);
        currentState[field] = value;
        this.setState({ personalData: currentState },);
    }

    workChange(index, field, value) {

        this.setState((state) => {
            let currentState = Array.from(state.workFields);
            currentState[index][field] = value;
            return { 'workFields': currentState };
        });
    }

    eduChange(index, field, value) {
        let currentState = Array.from(this.state.eduFields);
        currentState[index][field] = value;
        this.setState({ eduFields: currentState });
    }

    addWorkField() {
        let newWork = { company: '', title: '', start: '', end: '', description: '' };
        this.setState({ workFields: [...this.state.workFields, newWork] });
    }

    deleteWorkField(index) {
        this.setState((state) => {
            let newArray = Array.from(state.workFields);
            newArray.splice(index, 1)
            return { 'workFields': newArray };
        });
    }

    addEduField() {
        let newEdu = { program: '', university: '', start: '', end: '', description: '' };
        this.setState({ eduFields: [...this.state.eduFields, newEdu] });
    }

    deleteEduField(index) {
        let newArray = Array.from(this.state.eduFields);
        newArray.splice(index, 1);
        this.setState({ eduFields: newArray });
    }

    addDelButton(formField, type, index) {
        let button1 = <button type="button" name={'delete-' + type + '-' + index} className="delete" onClick={this.handleClick}>Delete</button>
        return (
            <span key={index}>
                {formField}
                {button1}
            </span>
        );
    }

    render() {
        let { pname, title, phone, email, location, description } = this.state.personalData;
        return (
            <div className="output">
                <div className="inputForm">
                    <h2>Personal Details</h2>
                    <PersonalData pname={pname} title={title} phone={phone} email={email} location={location} description={description} onEdit={this.personalDataChange} />
                    <h2>Work Experience</h2>
                    {this.state.workFields.map((workField, i) => {
                        let { company, title, start, stop, description } = workField;
                        return this.addDelButton(<Experience type='work' company={company} title={title} start={start} stop={stop} description={description} onEdit={this.workChange} number={i} />, 'work', i);
                    })}
                    <button type="submit" className="add" name="add-work" onClick={this.handleClick}>Add</button>
                    <h2>Education</h2>
                    {this.state.eduFields.map((eduField, i) => {
                        let { program, uni, start, stop, description } = eduField;
                        return this.addDelButton(<Experience type='edu' program={program} university={uni} start={start} stop={stop} description={description} onEdit={this.eduChange} number={i} />, 'edu', i);
                    })}
                    <button type="submit" className="add" name="add-edu" onClick={this.handleClick}>Add</button>
                </div>
                <LivePreview elements={this.state} />
            </div>
        );
    }
}


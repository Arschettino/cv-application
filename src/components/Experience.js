import React from 'react';

export default class Experience extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onEdit(this.props.number, event.target.name, event.target.value);
    }

    render() {
        let comp = <input type="text" name="company" placeholder="Company" value={this.props.company} onChange={this.handleChange}/>;
        let title = <input type="text" name="title" placeholder="Title" value={this.props.title} onChange={this.handleChange} />
        
        let program = <input type="text" name="program" placeholder="Program" value={this.props.program} onChange={this.handleChange} />
        let uni = <input type="text" name="university" placeholder="University" value={this.props.university} onChange={this.handleChange} />

        return(
            <div className="experience">
                <form>
                    {this.props.type === 'work' ? comp : program}
                    {this.props.type === 'work' ? title : uni}
                    <input type="text" name="start" placeholder="Start Date" value={this.props.start} onChange={this.handleChange} />
                    <input type="text" name="end" placeholder="End Date" value={this.props.stop} onChange={this.handleChange} />
                    <input type="text" name="description" placeholder="Description" value={this.props.description} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}
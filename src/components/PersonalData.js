import React from 'react';


export default class PersonalData extends React.Component{
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onEdit(event.target.name, event.target.value);
    }


    render() {
        return (
            <div className="personalData">
                <form>
                    <input type="text" value={this.props.pname} name="pname" placeholder="Name" onChange={this.handleChange}/>
                    <input type="text" value={this.props.title} name="title" placeholder="Title" onChange={this.handleChange}/>
                    <input type="text" value={this.props.phone} name="phone" placeholder="Phone" onChange={this.handleChange}/>
                    <input type="text" value={this.props.email} name="email" placeholder="Email" onChange={this.handleChange}/>
                    <input type="text" value={this.props.location} name="location" placeholder="Location" onChange={this.handleChange}/>
                    <textarea value={this.props.description} name="description" placeholder="Description..." onChange={this.handleChange}/>
                </form>
            </div>
        );
    }
}
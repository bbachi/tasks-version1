import React from 'react'

export class Task extends React.Component {

    constructor(props){
        super(props)
    }
    
    state = {
        status: this.props.status,
        showSelection: false
    }

    onChangeStatus = () => {
        const showSelection = this.state.showSelection
        this.setState({showSelection: !showSelection})
    }

    onStatusChange = (e) => {
        this.setState({status: e})
        this.onChangeStatus()
    }


    render() {

        let backgroundColor;
        if (this.state.status === 'ToDo') {
            backgroundColor = 'skyblue'
        } else if (this.state.status === 'In Progress') {
            backgroundColor = 'green'
        } else if (this.state.status === 'Completed') {
            backgroundColor = 'red'
        }
        
        return(
            <div className="task" style={{backgroundColor}}>
                <div className="row">
                    Task: {this.props.taskName}
                </div>
                {!this.state.showSelection? 
                    <div className="row">
                        Status: {this.state.status}
                    </div> :
                    <div className="row">
                        Status: <select onChange={(e) => this.onStatusChange(e.target.value)}>
                                    <option selected={this.state.status === 'ToDo'} value="ToDo">ToDo</option>
                                    <option selected={this.state.status === 'In Progress'} value="In Progress">In Progress</option>
                                    <option selected={this.state.status === 'Completed'} value="Completed">Completed</option>
                                </select>
                    </div>
                }
                <div className="row">
                    <button className="btnchg" onClick={this.onChangeStatus} name="Change Status">Change Status</button>
                </div>
            </div>
        )
    }

} 
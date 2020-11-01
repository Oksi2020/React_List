import React, {Component} from 'react';

class Guest extends Component {

    render() {

        const { user, changeStatus } = this.props;

        let {guest, arrived } = user;
        let className = '';
        console.log(arrived)
        if(arrived) {className=' arrived'}
        return(
            <div 
                className = {'guest ' + className}
                key = {guest.index}
            >
                <div className = 'user-info'>
                    <p> Guest <b>{guest.name}</b> work in the company <b>{guest.company}</b></p>
                    <p>His contacts:</p>
                    <p><b>{guest.phone}</b></p>
                    <p><b>{guest.address}</b></p>
                </div>
                {arrived?'':<div className = 'button-arrive'><button onClick = {changeStatus(guest.index)}>Arrived</button></div>}
            </div>
        )
    }
}

export default Guest;
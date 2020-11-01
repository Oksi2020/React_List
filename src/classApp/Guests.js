import React, { Component } from 'react'

class Guests extends Component {

    render = () => {
        const { guest, changeStatus } = this.props;

        let { arrived, user } = guest;

        let className = 'guest';
        if(arrived) {className+=' user_arrived'}
        return(
            <div
                key = {user.index}
                className = { className }
            >
                <div className = 'user-info'>           
                    <p> Guest <b>{user.name}</b> work in the company <b>{user.company}</b></p>
                    <p>His contacts:</p>
                    <p><b>{user.phone}</b></p>
                    <p><b>{user.address}</b></p>
                </div>  
                <div> 
                    <button className='button-arrived' onClick = {changeStatus(user.index)}> Arrived!</button>
                </div> 
            </div>
        ) 
    }
}

export default Guests;
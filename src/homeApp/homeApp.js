import  React, {Component} from 'react';
import Guest from './Guest'
import './homeApp.css'
import guests from './guests.json'

const updateGuests = guests.map (guest => {
    return({
        guest,
        arrived: false
    })
})

class HomeApp extends Component {

    state = {
        allGuestList: updateGuests,
        listLength: 10,
        filteredGuests: [],
        value: '',
    }

    showNextGuests = () => {
        let listNewLength = this.state.listLength + 10; 

        this.setState ({
            listLength: listNewLength,
        })
    }
    showAllGuests = () => {
        let listNewLength = this.state.allGuestList.length; 

        this.setState ({
            listLength: listNewLength,
        })
    }

    search = (e) => {
        let searchValue = e.target.value.toLowerCase();
        let guestsList = this.state.allGuestList;
        let filteredUsers = guestsList.filter(guest => Object.keys(guest.guest).filter( key => guest.guest[key].toString().toLowerCase().includes( searchValue )).length>0)

        this.setState({
            value: searchValue,
            filteredGuests: filteredUsers
        })
    }

    changeStatus = (index) => (event) => {
        const cahngedGuest = this.state.allGuestList.map( guest =>{
            if(guest.guest.index === index) {
                guest.arrived = !guest.arrived;
                console.log('change')
            }
            return guest;
        })

        this.setState({allGuestList:cahngedGuest});
    }

    render = () => {

        const {allGuestList, listLength, filteredGuests, value } = this.state;
        const { showNextGuests,showAllGuests, search, changeStatus } = this;
        let listToShow = [];
        let hidden = 'hidden';
        let countResult = 0;

        if(filteredGuests.length>0 && value.length>0) {
            listToShow = filteredGuests;
            countResult = listToShow.length;
        } else if (value.length==0){
            listToShow = allGuestList.slice(0, listLength);
            hidden = '';
        } 

        if(listToShow.length==allGuestList.length || value.length>0) hidden = 'hidden';

        return(
            <div className = 'container'>
                <h1>Guests list:</h1> 
                <div className = 'find-block'> 
                    <input 
                        className ='search-guests' 
                        placeholder = 'Write info to find guest' 
                        value = {value} onChange = {search}>
                    </input>
                <div className = 'count-result'><b>{ value.length>0?countResult:''}</b></div>
                </div>
                <h3 className = {listToShow.length>0?'hidden':''}>No result!</h3> 
                <div className ='guests-list'>
                {
                    listToShow.map(guest => {
                        return(<Guest user = {guest} changeStatus = {changeStatus}/>)
                    })
                }
                </div>
                <div className = {'buttons-container ' + hidden}>
                    <button onClick = {showNextGuests}>Show more!</button>
                    <button onClick = {showAllGuests}>Show all!</button>
                </div>
                
            </div>
            
        );
    }
}

export default HomeApp;
import './App.css';
import React, { Component } from 'react';
import Guests from './Guests';

import guests from './guests.json'


const changedUsers = guests.map( user => {
  return (
    {
      user,
      arrived: false
    }
  )
})


class App extends Component {
  
  state = {
    guests: changedUsers,
    value: '',
    filteredGuests: []
  }


  changeStatus = (index) => (event) => {
    const changedUsersList = this.state.guests.map( user => {
      if(user.user.index == index) {
        user.arrived = !user.arrived;
      }
      return user;
    })

    this.setState({guests: changedUsersList})

  }

  search = (e) => {
    let searchValue = e.target.value.toLowerCase();
    let guestsList = this.state.guests;

    let filteredUsers = guestsList.filter(guest => Object.keys(guest.user).filter( key => guest.user[key].toString().toLowerCase().includes( searchValue )).length>0)

    this.setState({
      value: searchValue,
      filteredGuests: filteredUsers
    })

  }

  render() {

    const { guests, value, filteredGuests } = this.state; 
    const { changeStatus, search } = this;

    let data = guests;
    if( filteredGuests.length > 0 || value.length>0) {
      data = filteredGuests;
    } else if(filteredGuests.length = 0 || value.length>0) {
      data = 0;
    }
    return (
      <div className = 'container'>
        <h1 className = 'user-list'>
          Guests list:
        </h1>
        <input type = 'text' value = {value} onChange = { search } placeholder = 'Input name to find'></input>
        <div className = 'guests-list'>
          { data.map( guest => { return( <Guests changeStatus = {changeStatus} guest = {guest}/> )}) }
        </div>
        <div className = {data==0?'no-search-result show-no-search-result':'no-search-result'}>No result!</div>
      </div>
    )
  }
}

export default App;

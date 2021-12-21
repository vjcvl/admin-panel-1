import React from 'react'
import { Link } from 'react-router-dom'

export default function UserForm() {
    return (
        <form class='container'>
            <div class='col-md-8'>
            Enter the User Name        :<input type="text"></input><br/>
            Enter the User Password    :<input type='password'></input><br/>
            Enter the User email       :<input type='text'></input><br/>
            Enter the User phoneNumber :<input type='number' ></input><br/>
            <Link to = '/users'><button>Submit</button></Link>
            </div>
        </form>
    )
}



import React from 'react';
import { Link } from 'react-router-dom';
import CardContact from './ContactCard';
const ContactList=(props)=>{
    console.log(props);
    const deleteContactHandler=(id)=>{
        props.getContactId(id);
    };
    const renderContatList = props.contacts.map((contact)=>{
        return(
            <CardContact contact={contact} clickHander={deleteContactHandler}></CardContact>
        )
    })

    return(
        <div class='main'>
            <h2>ContactList
                <Link to="/add"><button className='ui button blue right'>Add Contact</button></Link>
            </h2>
            <div className="ui celled list">{renderContatList}</div>
        </div>
    )
}
export default ContactList;
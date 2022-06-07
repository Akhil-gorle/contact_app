import './App.css';
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch,Route, Routes } from 'react-router-dom';
import { uuid } from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';

function App() {
  const LOCAL_STORAGE_KEY="contacts";
  const [contacts,setContacts] = useState([]);

  const addContactHandler=(contact)=>{
    console.log(contact);
    setContacts([...contacts,{id:uuid(),...contact}]);
  };

  const reoveContactHandler = (id)=>{
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    });
    setContacts(newContactList);
  }

  useEffect(()=>{
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retriveContacts) setContacts(retriveContacts);
  },[]);

  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contacts));
  },[contacts]);


  return (
    <div className="ui container">
      <Router>
          <Header/>
          <Routes>
          <Switch>
            <Route path="/add"  componente={()=><AddContact  addContactHandler={addContactHandler}/>}/>
            <Route path="/" exact componente={()=> <ContactList contacts={contacts} getContactId={reoveContactHandler }/>}/>
          </Switch>
          </Routes>
          {/* <AddContact addContactHandler={addContactHandler}/> */}
          {/* <ContactList contacts={contacts} getContactId={reoveContactHandler }/> */}
                        {/* passing props from parent to child */}
      </Router>
    </div>
  );
}

export default App;

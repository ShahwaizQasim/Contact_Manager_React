import ContactList from "./Components/contactList";
import Header from "./Components/header";
import AddContact from "./Components/AddContact";
import { useState } from "react";


function App() {
  const [contact, setContact] = useState([]);

  const AddData = (data) => {
    setContact([...contact, { id: Math.random(), data }]);
  }

  const removeContact = (id) => {
    const updateContacts = contact.filter((contactData) => contactData.id !== id);
    setContact(updateContacts)
  }

  return (
    <>
      <Header />
      <AddContact AddContact={AddData} />
      <ContactList AddData={contact} removeContact={removeContact} />
    </>
  )
}

export default App

import ContactList from "./Components/contactList";
import Header from "./Components/header";
import AddContact from "./Components/AddContact";
import { useEffect, useState } from "react";


function App() {

  const localStorageKey = "contact";

  const [contact, setContact] = useState(() => {
    return JSON.parse(localStorage.getItem(localStorageKey))
      || []
  });

  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(contact))
  }, [contact])

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

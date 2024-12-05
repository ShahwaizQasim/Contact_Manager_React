import ContactList from "./Components/contactList";
import Header from "./Components/header";
import AddContact from "./Components/AddContact";
import { useState } from "react";


function App() {
  const [contact, setContact] = useState([]);
  const AddData = (data) => {
    setContact([ ...contact, data ]);
  }
  return (
    <>
      <Header />
      <AddContact AddContact={AddData} />
      <ContactList AddData={contact} />
    </>
  )
}

export default App

import ContactList from "./Components/contactList";
import Header from "./Components/header";
import AddContact from "./Components/AddContact";


function App() {
  const AddData= (data) => {
      console.log("Data=>", data);
      
  }
  return (
    <>
      <Header />
      <AddContact AddContact={AddData}/>
      <ContactList />
    </>
  )
}

export default App

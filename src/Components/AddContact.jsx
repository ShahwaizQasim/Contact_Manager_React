import { useState } from "react"

function AddContact({ AddContact }) {
    const [contactData, setContactData] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        if (e.target.name === "name") {
            setContactData({ ...contactData, name: e.target.value })
        } else {
            setContactData({ ...contactData, email: e.target.value })
        }
    }

    const handleAdd = () => {
        if (contactData.name === '' || contactData.email === '') {
            alert("please fill all the details");
            return
        }
        AddContact(contactData)
        // console.log(contactData);

    }


    return (
        <>
            <div className="flex justify-center flex-col m-auto border-2">
                <h2 className="text-center mt-8 text-3xl font-semibold">Add Contact</h2>
                <input type="text" className="w-80 py-1 px-3 border-2 mt-5 m-auto"
                    placeholder="Enter Name" name="name" value={contactData.name} onChange={handleChange} />
                <input type="text" className="w-80 py-1 px-3 border-2 mt-2 m-auto"
                    placeholder="Enter Email" name="email" value={contactData.email} onChange={handleChange} />
                <button className="h-10 py-2 w-[140px] m-auto mt-5 border-2 border-[#ccc] hover:scale-95 active:bg-black active:text-white"
                    onClick={handleAdd}>Add Contact</button>
            </div>
        </>
    )
}

export default AddContact;

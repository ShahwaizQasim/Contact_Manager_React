import React from 'react'

function ContactList({AddData}) {
  console.log(AddData, 'from contact list');
  
  return (
    <div className='flex justify-center flex-col items-center mt-4'>
      <h1 className='text-3xl mt-10 mb-2'>Contact List</h1>
      {
        AddData.map((data)=>{
          return <div className='flex justify-between w-[500px] bg-[#f74273] py-2 px-4 text-white rounded-sm mt-5'>
            <h1>{data?.name}</h1>
            <h1>{data?.email}</h1>
          </div>
        })
      }
    </div>
  )
}

export default ContactList
import { Delete } from '@mui/icons-material';
import React, { useState } from 'react'

function ContactList({ AddData,removeContact }) {
  console.log(AddData, 'from contact list');

  return (
    <div className='flex justify-center flex-col items-center mt-4'>
      <h1 className='text-3xl mt-10 mb-2'>Contact List</h1>
      {
        AddData?.map((data) => {
          return <div key={data.id} className='flex justify-between w-[700px] bg-[#f74273] py-2 px-4 text-white rounded-sm mt-5'>
            <h1>{data?.data.name}</h1>
            <h1>{data?.data.email}</h1>
            <button className='cursor-pointer hover:scale-95 active:scale-105'
            onClick={()=> removeContact(data.id)}
            >
              <Delete />
            </button>
          </div>
        })
      }
    </div>
  )
}

export default ContactList
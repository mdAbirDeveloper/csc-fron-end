import React from 'react'
import Layout from './DeshboardLayout';
import DeshboardLayout from './DeshboardLayout';

const index = () => {
  return (
    <div>
        <h1 className='text-4xl mx-auto text-center my-40 uppercase font-bold text-green-400'>this is dashboard</h1>
    </div>
  )
}

export default index;

index.getLayout = function getLayout(page) {
    return (
        <DeshboardLayout>{page}</DeshboardLayout>
    )
  }
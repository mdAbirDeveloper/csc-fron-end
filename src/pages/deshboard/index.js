import React from 'react'
import Layout from './DeshboardLayout';
import DeshboardLayout from './DeshboardLayout';

const index = () => {
  return (
    <div>
        <h1>this is deshboard</h1>
    </div>
  )
}

export default index;

index.getLayout = function getLayout(page) {
    return (
        <DeshboardLayout>{page}</DeshboardLayout>
    )
  }
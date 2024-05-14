import React from 'react'
import DeshboardLayout from './DeshboardLayout';
import Head from 'next/head';

const index = () => {
  return (
    <div>
      <Head>
        <title>انظمة المدن للضباب والرذاذ</title>
      </Head>
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
import Link from 'next/link'
import React from 'react'
import Category from './Category'

const index = () => {
  return (
    <div>
        <div className='min-h-screen mx-auto text-center'>
            {/* <h1 className='text-4xl font-serif font-bold text-center text-green-500'>This page Comming soon ........</h1>
            <Link className='btn btn-primary text-white mt-4' href={'/'}>Go Back Home</Link> */}
            <Category></Category>
        </div>
    </div>
  )
}

export default index;
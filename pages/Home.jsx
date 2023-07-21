

import React from 'react'

import Header from '@/components/Header'
import Cajeros from '@/components/Cajeros';


function Home({cajeros}) {
  return (
    <>
      <Header />
      <Cajeros cajeros={cajeros} />
    </>
  )
}



export default Home

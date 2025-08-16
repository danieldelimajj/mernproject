import React from 'react'
import Item from '../components/Item'

const Home = () => {
  return (
     <section>
        <div className="mx-auto grid max-w-7x1 grid-cols-[repeat(auto-fit,minmax(225px,1fr))] p-8 gap-8">
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </section>
  )
}

export default Home

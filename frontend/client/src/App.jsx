import { useState } from 'react'

import reactLogo from './assets/react.svg'

import {
  // Components
  Item,
  Dropdown,
  Dialog,
  ItemList,
  // Mocks
  items,
  // Utils
  useStore
 } from './utils/barrel'

export default function App() {

  const isOpen = useStore((state) => state.isOpen)
  // const open = useStore((state) => state.open)
	// const close = useStore((state) => state.close)

  return (
    <div className='h-screen bg-gray-200 py-4 dark:bg-gray-800 space-y-4 snap-mandatory snap-x'>

      {isOpen && <Dialog />}
      {/* {true && <ItemList URL='https://api.json-generator.com/templates/l8xGVZXtcGsc/data' />} */}
      <ItemList URL='https://audubon-society-api.herokuapp.com/birds' />
      <ItemList URL='https://audubon-society-api.herokuapp.com/birds' />

      <div className={`flex flex-col md:w-1/2 mx-auto hover:bg-blue-400 hover:rounded-lg}`}>
        <Dropdown />
      </div>

      <div className='flex flex-col space-y-4'>
        <h1><button className='md:w-1/2 mx-auto rounded-lg bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 block' onClick={() => (alert("Click!"))}>Courses</button></h1>
          <div className='flex flex-row md:w-1/2 mx-auto space-x-4 bg-gray-400 rounded-lg overflow-auto snap-mandatory snap-x scrollbar scrollbar-thumb-gray-400 scrollbar-track-gray-300'>
            {items.map((item) => (
              <Item product={item} key={item.id} />
            ))}
          </div>

          <h1><button className='md:w-1/2 mx-auto rounded-lg bg-gray-400 hover:bg-gray-700 text-white font-bold py-2 px-4 block' onClick={() => (alert("Click!"))}>Students</button></h1>
          <div className='flex flex-row md:w-1/2 mx-auto space-x-4 bg-blue-400 rounded-lg overflow-auto snap-mandatory snap-x scrollbar scrollbar-thumb-blue-400 scrollbar-track-blue-300'>
            {items.map((item) => (
              <Item product={item} key={item.id} />
            ))}
          </div>
      </div>
    </div>
  )
}

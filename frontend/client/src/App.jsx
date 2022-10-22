// import { useState } from 'react'

import reactLogo from './assets/react.svg'

import shallow from 'zustand/shallow'

import {
  // Components
  Item,
  Dropdown,
  Dialog,
  ItemList,
  FormLayout,
  FormSelector,
  // Mocks
  items,
  // Utils
  useStore
 } from './utils/barrel'

export default function App() {

  const isOpen = useStore((state) => state.isOpen)
  // const open = useStore((state) => state.open)
	// const close = useStore((state) => state.close)
  const [showForm, toggleForm] = useStore(
		(state) => [state.showForm, state.toggleForm],
		shallow
	)
  // const {showForm, toggleForm} = useStore(
	// 	(state) => ({showForm: state.showForm, toggleForm: state.toggleForm}),
	// 	shallow
	// )

  return (
    <div className='flex min-h-screen bg-green-200 py-4 space-y-4 snap-mandatory snap-x'>

      {isOpen ? <Dialog /> : null}

      {/* <ItemList URL='https://api.json-generator.com/templates/l8xGVZXtcGsc/data' />
      <ItemList URL='https://audubon-society-api.herokuapp.com/birds' /> */}

      {/* <div className='flex flex-col md:w-1/2 mx-auto hover:bg-blue-400 hover:rounded-lg'>
        <Dropdown />
      </div> */}

      <div className='m-auto border-solid border-8 border-blue-300'>
        <button className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 rounded-lg border-solid border-8 border-orange-300' onClick={toggleForm}>Request Form</button>
        {showForm ? <FormLayout>
          <FormSelector />
        </FormLayout> : null}
      </div>


      <ItemList />
      {/* <div className='flex flex-col space-y-4'>
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
      </div> */}
    </div>
  )
}

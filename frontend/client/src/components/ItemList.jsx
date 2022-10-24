import { useRef, useEffect, Fragment } from "react"
import axios from "axios"
import { useStore } from '../utils/barrel'
import shallow from 'zustand/shallow'

export const ItemList = (props) => {

  const [items, setItems] = useStore(
		(state) => [state.items, state.setItems],
		shallow
	)

  const itemsRef = useRef(useStore.getState().items)

  useEffect(() => useStore.subscribe(
    items => (itemsRef.current = items),
    state => state.items
  ), [])

  if (!items.length) return <h3>Loading...</h3>

  return (
    <div className='m-auto'>
      {/* <button className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 rounded-lg border-solid border-8 border-orange-300' onClick={() => setItems([])}>Reset List</button> */}

      <div className='border-solid border-8 border-red-300'>
        {items.map((item) => (
        ('image' in item) === true ?
          <Fragment key={item.id}>
            <img src={item.image} alt={item.image}></img><br />
            <>{item.price}</>
          </Fragment>
        : null))}
      </div>

        {/* {getItems.map((item) => (
      ('image' in item) === true
          ? <><img key={item.id} src={item.image} alt={item.image}></img><br /></>
      : null))} */}
    </div>
  )
}

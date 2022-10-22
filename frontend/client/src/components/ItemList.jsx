import { useRef, useEffect, Fragment } from "react"
import axios from "axios"
import { useStore } from '../utils/barrel'
import shallow from 'zustand/shallow'

export const ItemList = (props) => {
  // const [getItems, setItems] = useState([])

	// const token = "gxrqe1wm1w1mt0aa3yn5flmynb9cfujddl5avpqi"

	// const config = {
	// 	headers: { Authorization: `Bearer ${token}` }
	// }

	// const bodyParameters = {
	// 	key: "value"
	// }

  // useEffect(() => {
  //   async function fetchItems() {
  //     try {
  //       const res = await axios.get(
	// 		props.URL,
	// 		// bodyParameters,
	// 		config,
	// 	)
  //       console.log(res.data)
	// 	console.log("REQ SUCCESS")

	// 	if ('image' in res.data[0])
	// 		console.log("PRESENT")
  //       setItems(res.data)

  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchItems()
  // }, [])

  const array = [
    {
      "id": 3,
      "title": "Title 3",
      "price": 109.99,
      "description": "Description...",
      "category": "Category",
      "image": "https://picsum.photos/200/300"
    },
    {
      "id": 4,
      "title": "Title 4",
      "price": 109.99,
      "description": "Description...",
      "category": "Category",
      "image": "https://picsum.photos/200/300"
    },
  ]

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
      <button className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 rounded-lg border-solid border-8 border-orange-300' onClick={() => setItems([])}>Reset List</button>
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

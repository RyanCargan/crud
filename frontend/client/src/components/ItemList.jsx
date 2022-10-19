import { useState, useEffect } from "react"
import axios from "axios"

export const ItemList = (props) => {
  const [getItems, setItems] = useState([])
//   const [getUrlType, setUrlType] = useState([false, false])

	const token = "gxrqe1wm1w1mt0aa3yn5flmynb9cfujddl5avpqi"

	const config = {
		headers: { Authorization: `Bearer ${token}` }
	}

	const bodyParameters = {
		key: "value"
	}

  useEffect(() => {
    async function fetchItems() {
      try {
        const res = await axios.get(
			props.URL,
			// bodyParameters,
			config,
		)
        console.log(res.data)
		console.log("REQ SUCCESS")

		if ('image' in res.data[0])
			console.log("PRESENT")
        setItems(res.data)

		// if ('image' in res.data[0]) {
		// 	setUrlType[0] = true
		// } else if ('placeholder' in res.data[0]) {
		// 	setUrlType[1] = true
		// } else {
		// 	setUrlType[0] = true
		// }
      } catch (error) {
        console.log(error)
      }
    }
    fetchItems()
  }, [])

  if (!getItems.length) return <h3>Loading...</h3>

  return (
    <div>
      {getItems.map((item) => (
		('image' in item) === true
        ? <img src={item.image} alt={item.image}></img>
		: null
		// ('thumbnail' in item) === true
        // ? <img src={item.thumbnail} alt={item.thumbnail}></img>
		// : null
      ))}
      {getItems.map((item) => (
		// ('image' in item) === true
        // ? <img src={item.image} alt={item.image}></img>
		// : null
		('placeholder' in item) === true
        ? <> {item.placeholder}<br /> </>
		: null
      ))}
    </div>
  )
}

import { useState, useEffect } from "react"
import axios from "axios"

export const ItemList = (props) => {
  const [getItems, setItems] = useState([])

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
        ? <img key={item} src={item.image} alt={item.image}></img>
		: null
      ))}
      {getItems.map((item) => (
		('placeholder' in item) === true
        ? <div key={item.id}> {item.placeholder}<br /> </div>
		: null
      ))}
    </div>
  )
}

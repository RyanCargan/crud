import { useState, useEffect } from "react"
import axios from "axios"

export const ItemList = (props) => {
  const [getItems, setItems] = useState([])
  const [getUrlType, setUrlType] = useState([false, false])

  useEffect(() => {
    async function fetchItems() {
    //   const URL = 'https://audubon-society-api.herokuapp.com/birds'
      try {
        const res = await axios.get(props.URL)
        console.log(res.data)
		console.log("REQ SUCCESS")
		if ('image' in res.data[0])
			console.log("PRESENT")
        setItems(res.data)
		// if (res.data[0].hasOwnProperty('image')) {
		// 	setUrlType[0] = true
		// } else if (res.data[0].hasOwnProperty('thumbnail')) {
		// 	setUrlType[1] = true
		// } else {
		// 	setUrlType[0] = true
		// }
		if ('image' in res.data[0]) {
			setUrlType[0] = true
		} else if ('thumbnail' in res.data[0]) {
			setUrlType[1] = true
		} else {
			setUrlType[0] = true
		}
      } catch (error) {
        console.log(error)
      }
    }
    fetchItems()
	// console.log(getUrlType)
  }, [getUrlType])

  if (!getItems.length) return <h3>Loading...</h3>

  return (
    <div>
	{/* {(() => {
	if (getItems[0].hasOwnProperty('image')) {
			setUrlType[0] = 1
	} else if (getItems[0].hasOwnProperty('thumbnail')) {
			setUrlType[1] = 1
	} else {
			setUrlType[0] = 1
	}
	})} */}
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
		('thumbnail' in item) === true
        ? <img src={item.thumbnail} alt={item.thumbnail}></img>
		: null
      ))}
	  {/* {getUrlType[1] && getItems.map((item) => (
        <img src={item.thumbnail} alt={item.thumbnail}></img>
      ))} */}
    </div>
  )
}

// import axios from "axios";
// import {useState, useEffect} from "react";

// const baseURL = "https://jsonplaceholder.typicode.com/posts/1";

// export const ItemList = () => {
//   const [post, setPost] = useState(null);

//   useEffect(() => {
//     axios.get(baseURL).then((response) => {
//       setPost(response.data);
//     });
//   }, []);

//   if (!post) return null;

//   return (
//     <div>
//       <h1>{post.title}</h1>
//       <p>{post.body}</p>
//     </div>
//   )
// }

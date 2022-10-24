import { useRef, useEffect, Fragment, Suspense } from "react"
import axios from "axios"
import { 
  useStore,
  // get,
} from '../utils/barrel'
import shallow from 'zustand/shallow'

export const ItemList = (props) => {

  const [items, setItems] = useStore(
		(state) => [state.items, state.setItems],
		shallow
	)

  const [urls, entities] = useStore(
		(state) => [state.urls, state.entities],
		shallow
	)

  const fetchData = async(url, entity) =>
  {
    const data = await axios.get(url).then(res => res.data)
    setItems(entity, data)
  }


  // const itemsRef = useRef(useStore.getState().items)

  // useEffect(() => useStore.subscribe(
  //   items => (itemsRef.current = items),
  //   state => state.items
  // ), [])

  // const entities = [
  //   'students',
  //   'users',
  //   'courses',
  //   'enrollments',
  // ]

  // const sleep = ms => new Promise(r => setTimeout(r, ms))

  let data = null;

  useEffect(() => {
    // console.log('PRE')
    // console.log(items)
    // const fetchData = async () => {
      // setItems(`${entities[1]}`, get(`http://localhost:4000/api/${entities[0]}`))
      // React 18+ causes a double run/fetch in dev mode, that's normal, ignore it since it's removed in builds.
      // // Promise.resolve(setItems(`${entities[0]}`, get(`http://localhost:4000/api/${entities[0]}`))).then((res) => {console.log(res)})
      // setItems(`${entities[1]}`, get(`http://localhost:4000/api/${entities[1]}`))
      // setItems(`${entities[2]}`, get(`http://localhost:4000/api/${entities[2]}`))
      // setItems(`${entities[3]}`, get(`http://localhost:4000/api/${entities[3]}`))
    // }

    // fetchData().then(() => {
    //   console.log('FETCHED')
    //   console.log(items)
    // })

    // console.log('TEST')
    // setItems('students', [1, 2])
    // console.log(items)

    // sleep(1000).then(() => {
    //   console.log('POST')
    //   console.log(items)
    //   console.log(items.students)
    // }).then(() => {
    //   const res = items.students
    //   console.log('FETCHED')
    //   console.log(res)
    // }
    // )
    // const fetchData = async () => {
    // //  data = await items.then(result => result.data)
    // data = await items
    // console.log(data)
    // }
    // fetchData().catch(console.error)
    // data = items
    console.log(items)
    // console.log(items.students)
    // getData(someParam).then(data => setState(data))
    // console.log('POST')
  }, [items])

  // if (!items.length) return <h3>Loading...</h3> // Disable to show errors clearly during dev

  return (
    <div className='m-auto'>
      {/* <button className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-200 via-gray-400 to-gray-600 rounded-lg border-solid border-8 border-orange-300' onClick={() => setItems([])}>Reset List</button> */}

    {/* <>Suspense</><br /> */}
    <button onClick={() => {
      // setItems(`${entities[1]}`, get(`http://localhost:4000/api/${entities[0]}`))
      fetchData(urls[0], entities[0])
      fetchData(urls[1], entities[1])
      fetchData(urls[2], entities[2])
      fetchData(urls[3], entities[3])
    }}>Fetch</button><br />
    {/* <Suspense fallback={<>Fetching...</>}> */}
      {items.students?.map((item) => (
          ('emailId' in item) === true ?
            <Fragment key={item.id}>
              <>{item.userName}</><br />
              <>{item.emailId}</><br />
            </Fragment>
          : null))}
    {/* </Suspense> */}

      {/* <>{(items.students.length > 0) ? () => {console.log(items)} : null}</> */}

    {/* <>{items}</> */}

      {/* <div className='border-solid border-8 border-red-300'>
        {items.students.data?.map((item) => (
        ('emailId' in item) === true ?
          <Fragment key={item.id}>
            <>{item.userName}</><br />
            <>{item.emailId}</><br />
          </Fragment>
        : null))}
      </div> */}

      {/* <div className='border-solid border-8 border-red-300'>
        {items.map((item) => (
        ('image' in item) === true ?
          <Fragment key={item.id}>
            <img src={item.image} alt={item.image}></img><br />
            <>{item.price}</>
          </Fragment>
        : null))}
      </div> */}

        {/* {getItems.map((item) => (
      ('image' in item) === true
          ? <><img key={item.id} src={item.image} alt={item.image}></img><br /></>
      : null))} */}
    </div>
  )
}

import axios from 'axios'

const url = 'http://localhost:4000/api/'
const authUrl = 'http://localhost:4000/'
// const stub = 'students'

const headers = {
	// Authorization: `Bearer ${token}`,
	// 'Authorization': 'Basic',
	// 'Content-Type': 'application/x-www-form-urlencoded',
	'Content-Type': 'application/json',
	'access-control-allow-origin': '*',
}

const auth = {
  username: 'Staff1',
  password: '123'
}

// const login = async (e, stub) => {
// 	e.preventDefault()

// 	// const name = e.target.name.value
// 	// const email = e.target.email.value
// 	// const id = e.target.id.value
// 	// const response = await axios.post('http://localhost:4000/login',{
// 	// 	username: auth.username,
// 	// 	password: auth.password
// 	// },
// 	// {
// 	// 	'Authorization': 'Basic',
// 	// 	'Content-Type': 'application/x-www-form-urlencoded',
// 	// 	'access-control-allow-origin': '*',
// 	// })

// 	try {
// 		let res = await axios.post(
// 			`${authUrl}${stub}`,
// 			{},
// 			{
// 				headers: headers,
// 				withCredentials: true,
// 				auth: auth
// 			}
// 		)
// 		console.log(res)
// 		return
// 	} catch (err) {
// 		console.error(err)
// 	}
// }

const logout = async (e, stub) => {
	e.preventDefault()
	// const name = e.target.name.value
	try {
		let res = await axios.post(
			`${authUrl}${stub}`,
		)
		console.log(res)
		return res;
	} catch (err) {
		console.error(err)
	}
}

export const login = async (url, stub, username, password) => {
  const formData = new FormData();

  formData.append("username", username);
  formData.append("password", password);

  try {
    const { data } = await client.post(`${url}${stub}`, formData)

    return data
  } catch (error) {
    return error.response.data;
  }
}

const post = async (e, stub, obj) => {
	e.preventDefault()

	try {
		let res = await axios.post(
			`${url}${stub}`,
			obj,
			{
				headers: headers,
				withCredentials: true,
				// auth: auth
			}
		)
		console.log(res)
		return
	} catch (err) {
		console.error(err)
	}
}

const put = async (e, stub, obj, id) => {
	e.preventDefault()

	try {
		let res = await axios.put(
			`${url}${stub}/${id}`,
			obj,
			{
				headers: headers,
				withCredentials: true,
				// auth: auth
			}
		)
		console.log(res)
		return
	} catch (err) {
		console.error(err)
	}
}

const del = async (e, stub, id) => {
	e.preventDefault()
	// const name = e.target.name.value
	try {
		let res = await axios.delete(
			`${url}${stub}/${id}`,
			{
				headers: headers,
				withCredentials: true,
				// auth: auth
			}
		)
		console.log(res)
		return res;
	} catch (err) {
		console.error(err)
	}
}

// const get = async (e, stub) => {
// 	e.preventDefault()
// 	const name = e.target.name.value
// 	try {
// 		let res = await axios.get(
// 			`${url}${stub}`,
// 		)
// 		console.log(res)
// 		return res;
// 	} catch (err) {
// 		console.error(err)
// 	}
// }

export const formHandler = {
	login: login,
	logout: logout,
	post: post,
	del: del,
	put: put,
}

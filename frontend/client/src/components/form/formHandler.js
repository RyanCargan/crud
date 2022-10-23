import axios from 'axios'

const url = 'http://localhost:4000/api/'
// const stub = 'students'

const headers = {
	// Authorization: `Bearer ${token}`,
	'Authorization': 'Basic',
	// 'Content-Type': 'application/x-www-form-urlencoded',
	// 'Content-Type': 'application/json',
	'access-control-allow-origin': '*',
}

const auth = {
  username: 'Staff1',
  password: '123'
}

const post = async (e, stub, body) => {
	e.preventDefault()

	// const name = e.target.name.value
	// const email = e.target.email.value
	// const id = e.target.id.value
	// const response = await axios.post('http://localhost:4000/login',{
	// 	username: auth.username,
	// 	password: auth.password
	// },
	// {
	// 	'Authorization': 'Basic',
	// 	'Content-Type': 'application/x-www-form-urlencoded',
	// 	'access-control-allow-origin': '*',
	// })

	try {
		let res = await axios.post(
			`${url}${stub}`,
			body,
			{
				headers: headers,
				withCredentials: true,
				auth: auth
			}
		)
		console.log(res)
		return
	} catch (err) {
		console.error(err)
	}
}

const get = async (e, stub) => {
	e.preventDefault()
	const name = e.target.name.value
	try {
		let res = await axios.get(
			`${url}${stub}`,
		)
		console.log(res)
		return
	} catch (err) {
		console.error(err)
	}
}

export const formHandler = {
	post: post,
	get: get,
}

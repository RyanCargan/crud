import axios from 'axios'

const url = 'http://localhost:4000/api/'
// const stub = 'students'

const headers = {
	// Authorization: `Bearer ${token}`,
	'Content-Type': 'application/json',
	'access-control-allow-origin': '*',
}

const post = async (e, stub) => {
	e.preventDefault()

	const name = e.target.name.value
	const email = e.target.email.value
	const id = e.target.id.value

	try {
		let res = await axios.post(
			`${url}${stub}`,
			{
				studentName: name,
				emailId: email,
				studentId: id
			},
			{
				// headers: {
				// 	// Authorization: `Bearer ${token}`,
				// 	'Content-Type': 'application/json',
				// 	'access-control-allow-origin': '*',
				// }
				headers: headers
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

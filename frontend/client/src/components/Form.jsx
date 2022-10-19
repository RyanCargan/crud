import axios from 'axios'
import { useState } from 'react'

export const Form = () => {
    // const [name, setName] = useState('')
	// const [email, setEmail] = useState('')
	// const [id, setId] = useState(0)

    const handleSubmit = async (e) => {
        e.preventDefault()
        // setName(e.target.name.value)
		const name = e.target.name.value
		const email = e.target.email.value
		const id = e.target.id.value

		console.log(name)
		// setEmail(e.target.email.value)
		console.log(email)
		// console.log(e.target.email.value)
		// setId(e.target.id.value)
		console.log(id)
        // setUsername(value)
		try {
			let res = await axios.post(
				'http://localhost:4000/api/students',
				{
					studentName: name,
					emailId: email,
					studentId: id
				},
				{
					headers: {
						// Authorization: `Bearer ${token}`,
						'Content-Type': 'application/json',
						'access-control-allow-origin': '*',
					}
				}
			)
			console.log(res)
			return
		} catch (err) {
			// if (err)
			console.error(err)
			// console.error(err.response)
		}
    }

	return (
		<>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter Name:" />
                <input type="text" name="email" placeholder="Enter Email:" />
				<input type="number" name="id" placeholder="Enter ID:" />
                <button type="submit">Submit</button>
            </form>
		</>
	);
}

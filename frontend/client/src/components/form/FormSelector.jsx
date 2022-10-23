import {
    formHandler,
    useStore,
} from '../../utils/barrel'

// const [body, setBody] = useStore(
//     (state) => [state.body, state.setBody],
//     shallow
// )

// const bodyRef = useRef(useStore.getState().body)

// useEffect(() => useStore.subscribe(
//     body => (bodyRef.current = body),
//   state => state.body
// ), [])

// const body = {
// 	// studentName: name,
// 	// emailId: email,
// 	// studentId: id
// }

export const FormSelector = () => {
	return (
		<div className='m-auto'>

			{true ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => formHandler.post(
                e,
                'students',
                {
                    studentId: 3,
                    studentName: "Student3",
                    emailId: "student3@email.com",
                    role: "ROLE_USER",
                    password: "123"
                }
            )}>
                <input type="text" name="name" placeholder="Enter Name:" />
                <input type="text" name="email" placeholder="Enter Email:" />
				<input type="number" name="id" placeholder="Enter ID:" />
                <button type="submit">Submit</button>
            </form> : null}
            <br />

			{true ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => formHandler.get(e, 'students')}>
                <input type="text" name="name" placeholder="Enter Name:" />
                <button type="submit">Submit</button>
            </form> : null}
            <br />

			{true ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => formHandler.get(e, 'students')}>
                <input type="text" name="name" placeholder="Enter Name:" />
                <button type="submit">Submit</button>
            </form> : null}
            <br />

		</div>
	)
}

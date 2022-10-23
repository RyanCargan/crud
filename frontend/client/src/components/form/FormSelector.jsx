import {
    formHandler,
    useStore,
} from '../../utils/barrel'
import shallow from 'zustand/shallow'
import {useRef, useEffect} from 'react'

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

    const [inputs, setInputs] = useStore(
        (state) => [state.inputs, state.setInputs],
        shallow
    )

    // const ref = useRef(null)
    const createStdName = useRef(null)

    useEffect(() => {
        setInputs(createStdName.current.value)
    }, [])

	return (
		<div className='m-auto'>

			{true ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => formHandler.post(
                e,
                'students',
                {
                    // studentId: 3,
                    // studentName: "Student3",
                    // emailId: "student3@email.com",
                    // role: "ROLE_USER",
                    // password: "123"
                    studentId: inputs[0],
                    studentName: "Student3",
                    emailId: "student3@email.com",
                    role: "ROLE_USER",
                    password: "123"
                }
            )}>
                <input ref={createStdName} defaultValue={3} type="number" name="id" placeholder="Enter ID:"
                    // onChange={(e) => setInputs([...inputs, e.target.value])}/>
                    // onChange={(e) => setInputs([e.target.value])}/>
                    onChange={(e) => setInputs({...inputs, createStd: {studentName: e.target.value}})}/>
                <input defaultValue='Student3' type="text" name="name" placeholder="Enter Name:" />
				<input defaultValue='student3@email.com' type="text" name="email" placeholder="Enter Email:" />
                <input defaultValue='ROLE_USER' type="text" name="role" placeholder="Enter Role:" />
				<input defaultValue='123' type="password" name="password" placeholder="Enter Password:" />
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

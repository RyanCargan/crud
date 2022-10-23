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

    const createStdId = useRef(null)
    const createStdName = useRef(null)
    const createStdEmail = useRef(null)
    const createStdRole = useRef(null)
    const createStdPassword = useRef(null)

    useEffect(() => {
        setInputs('studentId', createStdId.current.value),
        setInputs('studentName', createStdName.current.value),
        setInputs('emailId', createStdEmail.current.value),
        setInputs('role', createStdRole.current.value),
        setInputs('password', createStdPassword.current.value)
    }, [])

	return (
		<div className='m-auto'>

			{true ?
            <form className='border-solid border-8 border-blue-300 space-y-2' onSubmit={(e) => formHandler.post(
                e,
                'students',
                {
                    // studentId: 3,
                    // studentName: "Student3",
                    // emailId: "student3@email.com",
                    // role: "ROLE_USER",
                    // password: "123"
                    studentId: inputs.createStd.studentId,
                    studentName: "Student3",
                    emailId: "student3@email.com",
                    role: "ROLE_USER",
                    password: "123"
                }
            )}>

                <input ref={createStdId} defaultValue={3} type="number" name="id" placeholder="Enter ID:"
                    // onChange={(e) => setInputs([...inputs, e.target.value])}/>
                    // onChange={(e) => setInputs([e.target.value])}/>
                    // onChange={(e) => setInputs({...inputs, createStd: {studentId: e.target.value}})}/>
                    onChange={(e) => setInputs('studentId', Number(e.target.value))}/>

                <input ref={createStdName} defaultValue='Student3' type="text" name="name" placeholder="Enter Name:"
                    onChange={(e) => setInputs('studentName', e.target.value)}/>

				<input ref={createStdEmail} defaultValue='student3@email.com' type="text" name="email" placeholder="Enter Email:"
                    onChange={(e) => setInputs('emailId', e.target.value)}/>

                <input ref={createStdRole} defaultValue='ROLE_USER' type="text" name="role" placeholder="Enter Role:"
                    onChange={(e) => setInputs('role', e.target.value)}/>

				<input ref={createStdPassword} defaultValue='123' type="password" name="password" placeholder="Enter Password:"
                    onChange={(e) => setInputs('password', e.target.value)}/>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />

			{true ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => formHandler.get(e, 'students')}>
                <input type="text" name="name" placeholder="Enter Name:" />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />

			{true ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => formHandler.get(e, 'students')}>
                <input type="text" name="name" placeholder="Enter Name:" />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />

		</div>
	)
}

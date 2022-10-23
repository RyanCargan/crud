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

	return (
		<div className='m-auto'>

			{true ?
            <form className='border-solid border-8 border-blue-300 space-y-2' onSubmit={(e) => formHandler.post(
                e,
                'students',
                inputs.createStd
            )}>

                <input value={inputs.createStd.studentId} type="number" name="id" placeholder="Enter ID:"
                    onChange={(e) => setInputs('studentId', Number(e.target.value))}/>

                <input value={inputs.createStd.studentName} type="text" name="name" placeholder="Enter Name:"
                    onChange={(e) => setInputs('studentName', e.target.value)}/>

				<input value={inputs.createStd.emailId} type="text" name="email" placeholder="Enter Email:"
                    onChange={(e) => setInputs('emailId', e.target.value)}/>

                <input value={inputs.createStd.role} type="text" name="role" placeholder="Enter Role:"
                    onChange={(e) => setInputs('role', e.target.value)}/>

				<input value={inputs.createStd.password} type="password" name="password" placeholder="Enter Password:"
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

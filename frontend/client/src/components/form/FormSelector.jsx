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

// const loggedIn = true
// const loggedOut = true

export const FormSelector = () => {

    const [inputs
        , setStudentInputs
        , setCourseInputs
        , setEnrolInputs
        , setUserInputs
        , setAuthInputs
        , loggedIn
        // , login
        // , logout
    ] = useStore(
        (state) => [state.inputs
            , state.setStudentInputs
            , state.setCourseInputs
            , state.setEnrolInputs
            , state.setUserInputs
            , state.setAuthInputs
            , state.loggedIn
            // . state.login
            // , state.logout
        ],
        shallow
    )

    const login = useStore((state) => state.login)
    const logout = useStore((state) => state.logout)

	return (
		<div className='m-auto'>

{/* Auth Forms */}
            {/* !loggedIn */}
            {/* {loggedIn ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => {
                formHandler.login(
                    e
                    , 'login'
                    , inputs.authObj
                )
                login()
            }}>
                <div className='bg-white'>(Login)</div><br />
                <input type="text" name="name" placeholder="Enter Name:"
                    onChange={(e) => setAuthInputs('username', e.target.value)}/>
                <input type="password" name="password" placeholder="Enter Pass:"
                    onChange={(e) => setAuthInputs('password', e.target.value)}/>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />

            {loggedIn ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => {
                formHandler.logout(
                    e
                    , 'logout'
                    , {}
                )
                logout()
            }}>
                <div className='bg-white'>(Logout)</div><br />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Logout</button>
            </form> : null}
            <br /> */}
{/* Auth Forms */}
{/* Student Forms */}
			{loggedIn ?
            <form className='border-solid border-8 border-blue-300 space-y-2' onSubmit={(e) => formHandler.post(
                e,
                'sec/students',
                inputs.studentObj
            )}>
                <div className='bg-white'>(Student: POST)</div><br />
                <input value={inputs.studentObj.studentId} type="number" name="id" placeholder="Enter ID:"
                    onChange={(e) => setStudentInputs('studentId', Number(e.target.value))}/>

                <input value={inputs.studentObj.studentName} type="text" name="name" placeholder="Enter Name:"
                    onChange={(e) => setStudentInputs('studentName', e.target.value)}/>

				<input value={inputs.studentObj.emailId} type="text" name="email" placeholder="Enter Email:"
                    onChange={(e) => setStudentInputs('emailId', e.target.value)}/>

                <input value={inputs.studentObj.role} type="text" name="role" placeholder="Enter Role:"
                    onChange={(e) => setStudentInputs('role', e.target.value)}/>

				<input value={inputs.studentObj.password} type="password" name="password" placeholder="Enter Password:"
                    onChange={(e) => setStudentInputs('password', e.target.value)}/>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />

			{loggedIn ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => formHandler.del(
                e,
                'sec/students',
                inputs.studentObj.studentId
            )}>
                <div className='bg-white'>(Student: DELETE)</div><br />
                <input value={inputs.studentObj.studentId} type="text" name="id" placeholder="Enter ID:"
                    onChange={(e) => setStudentInputs('studentId', e.target.value)}/>
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />

			{loggedIn ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => formHandler.get(e, 'students')}>
                <div className='bg-white'>(Student: PUT)</div><br />
                <input type="text" name="name" placeholder="Enter Name:" />
                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />
{/* Student Forms */}
{/* Course Forms */}
            {loggedIn ?
            <form className='border-solid border-8 border-blue-300 space-y-2' onSubmit={(e) => formHandler.post(
                e,
                'students',
                inputs.studentObj
            )}>
                <div className='bg-white'>(Course: POST)</div><br />
                <input value={inputs.studentObj.studentId} type="number" name="id" placeholder="Enter ID:"
                    onChange={(e) => setStudentInputs('studentId', Number(e.target.value))}/>

                <input value={inputs.studentObj.studentName} type="text" name="name" placeholder="Enter Name:"
                    onChange={(e) => setStudentInputs('studentName', e.target.value)}/>

				<input value={inputs.studentObj.emailId} type="text" name="email" placeholder="Enter Email:"
                    onChange={(e) => setStudentInputs('emailId', e.target.value)}/>

                <input value={inputs.studentObj.role} type="text" name="role" placeholder="Enter Role:"
                    onChange={(e) => setStudentInputs('role', e.target.value)}/>

				<input value={inputs.studentObj.password} type="password" name="password" placeholder="Enter Password:"
                    onChange={(e) => setStudentInputs('password', e.target.value)}/>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />
{/* Course Forms */}
{/* Enrollment Forms */}
            {loggedIn ?
            <form className='border-solid border-8 border-blue-300 space-y-2' onSubmit={(e) => formHandler.post(
                e,
                'students',
                inputs.studentObj
            )}>
                <div className='bg-white'>(Enrollment: POST)</div><br />
                <input value={inputs.studentObj.studentId} type="number" name="id" placeholder="Enter ID:"
                    onChange={(e) => setStudentInputs('studentId', Number(e.target.value))}/>

                <input value={inputs.studentObj.studentName} type="text" name="name" placeholder="Enter Name:"
                    onChange={(e) => setStudentInputs('studentName', e.target.value)}/>

				<input value={inputs.studentObj.emailId} type="text" name="email" placeholder="Enter Email:"
                    onChange={(e) => setStudentInputs('emailId', e.target.value)}/>

                <input value={inputs.studentObj.role} type="text" name="role" placeholder="Enter Role:"
                    onChange={(e) => setStudentInputs('role', e.target.value)}/>

				<input value={inputs.studentObj.password} type="password" name="password" placeholder="Enter Password:"
                    onChange={(e) => setStudentInputs('password', e.target.value)}/>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />
{/* Enrollment Forms */}
{/* Staff Forms */}
            {loggedIn ?
            <form className='border-solid border-8 border-blue-300 space-y-2' onSubmit={(e) => formHandler.post(
                e,
                'students',
                inputs.studentObj
            )}>
                <div className='bg-white'>(Staff: POST)</div><br />
                <input value={inputs.studentObj.studentId} type="number" name="id" placeholder="Enter ID:"
                    onChange={(e) => setStudentInputs('studentId', Number(e.target.value))}/>

                <input value={inputs.studentObj.studentName} type="text" name="name" placeholder="Enter Name:"
                    onChange={(e) => setStudentInputs('studentName', e.target.value)}/>

				<input value={inputs.studentObj.emailId} type="text" name="email" placeholder="Enter Email:"
                    onChange={(e) => setStudentInputs('emailId', e.target.value)}/>

                <input value={inputs.studentObj.role} type="text" name="role" placeholder="Enter Role:"
                    onChange={(e) => setStudentInputs('role', e.target.value)}/>

				<input value={inputs.studentObj.password} type="password" name="password" placeholder="Enter Password:"
                    onChange={(e) => setStudentInputs('password', e.target.value)}/>

                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type="submit">Submit</button>
            </form> : null}
            <br />
{/* Staff Forms */}

		</div>
	)
}

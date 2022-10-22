// import React from 'react';
import { formHandler } from '../../utils/barrel'

export const FormSelector = () => {
	return (
		<div className='m-auto'>
			{true ?
            <form className='border-solid border-8 border-blue-300' onSubmit={(e) => formHandler.post(e, 'students')}>
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

import React from 'react'
// import { Menu } from '@headlessui/react'

import {
	// Utils
	useStore,
} from '../utils/barrel'

const options = [
	{
	  label: "Open",
	  value: "open",
	},
	{
	  label: "Closed",
	  value: "closed",
	},
]

export const Dropdown = () => {
	const open = useStore((state) => state.open)

	return (
		<div id="App">
			<div className="select-container">
				<select value="closed">
					{options.map((option) => (
					<option value={option.value}>{option.label}</option>
					))}
				</select>
			</div>
      	</div>
		// <div className="relative w-full lg:max-w-sm">
        //     <select
        //         disabled
        //         className="w-full p-2.5 text-gray-500 bg-white border rounded-md shadow-sm outline-none appearance-none focus:border-indigo-600"
        //     >
        //         <option>ReactJS Dropdown</option>
        //         <option>Laravel 9 with React</option>
        //         <option>React with Tailwind CSS</option>
        //         <option selected>React With Headless UI</option>
        //     </select>
        // </div>
	)
}

// export const MyDropdown = () => {
// 	const open = useStore((state) => state.open)

// 	return (
// 	  <Menu>
// 		<Menu.Button>Menu</Menu.Button>
// 		<Menu.Items>
// 		  <Menu.Item>
// 			{({ active }) => (
// 			  <button
// 				className={`${active && 'bg-gray-400 rounded-lg'}`}
// 				// href="/account-settings"
// 				onClick={() => (alert("?"))}
// 			  >
// 				Account settings
// 			  </button>
// 			)}
// 		  </Menu.Item>
// 		  <br />
// 		  <Menu.Item>
// 			{({ active }) => (
// 			  <button
// 				className={`${active && 'bg-gray-400 rounded-lg'}`}
// 				// href="/account-settings"
// 				onClick={() => (alert("?"))}
// 			  >
// 				Documentation
// 			  </button>
// 			)}
// 		  </Menu.Item>
// 		  <br />
// 		  <Menu.Item>
// 			{({ active }) => (
// 			  <button
// 				className={`${active && 'bg-gray-400 rounded-lg'}`}
// 				// href="/account-settings"
// 				onClick={open}
// 			  >
// 				Modal
// 			  </button>
// 			)}
// 		  </Menu.Item>
// 		</Menu.Items>
// 	  </Menu>
// 	)
//   }

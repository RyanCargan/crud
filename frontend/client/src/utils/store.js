import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import axios from 'axios'

// const urls = [
//   'http://localhost:4000/api/students',
//   'http://localhost:4000/api/users',
//   'http://localhost:4000/api/courses',
//   'http://localhost:4000/api/enrollments',
// ]

// export const get = async (url) => {
// 	try {
// 		let res = await axios.get(
// 			`${url}`,
// 		)
//     console.log('AXIOS')
// 		console.log(res.data)
//     // resolve(res.data.json())
// 		return res.data
// 	} catch (err) {
// 		console.error(err)
// 	}
// }

export const useStore = create(devtools(immer((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  showForm: false,
  toggleForm: () => set((state) => ({ showForm: !state.showForm })),
  items: {
    // students: get(urls[0]),
    // users: get(urls[1]),
    // courses: get(urls[2]),
    // enrollments: get(urls[3]),
    students: null,
    users: null,
    courses: null,
    enrollments: null,
  },
  // setItems: (items) => set(() => ({ items: items })),
  setItems: (selector, input) => set((state) => { state.items[selector] = input }),
  body: {},
  setBody: (body) => set(() => ({ body: body })),
  inputs: {
    createStd: {
      studentId: 3,
      studentName: 'Student3',
      emailId: 'student3@email.com',
      role: 'ROLE_USER',
      password: '123'
    }
  },
  setInputs: (selector, input) => set((state) => { state.inputs.createStd[selector] = input }),
  // setInputs: (inputs) => set(() => ({ inputs: inputs })),
  // toggleTodo: (todoId) =>
  //   set((state) => {
  //     state.todos[todoId].done = !state.todos[todoId].done
  // }),
  urls: [
    'http://localhost:4000/api/students',
    'http://localhost:4000/api/users',
    'http://localhost:4000/api/courses',
    'http://localhost:4000/api/enrollments',
  ],
  entities: [
    'students',
    'users',
    'courses',
    'enrollments',
  ]
}))))

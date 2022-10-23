import create from 'zustand'
import { devtools } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'

export const useStore = create(devtools(immer((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  showForm: false,
  toggleForm: () => set((state) => ({ showForm: !state.showForm })),
  items: [
    {
      "id": 1,
      "title": "Title 1",
      "price": 109.95,
      "description": "Description...",
      "category": "Category",
      "image": "https://picsum.photos/200/300"
    },
    {
      "id": 2,
      "title": "Title 2",
      "price": 109.95,
      "description": "Description...",
      "category": "Category",
      "image": "https://picsum.photos/200/300"
    },
  ],
  setItems: (items) => set(() => ({ items: items })),
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
}))))

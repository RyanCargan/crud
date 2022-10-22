import create from 'zustand'
import { devtools } from 'zustand/middleware'
// import shallow from 'zustand/shallow'

export const useStore = create(devtools((set) => ({
  isOpen: false,
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
  showForm: false,
  // setForm: () => set({ showForm: !showForm }),
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
  // setItems:  (newItems) => set(({ items: newItems })),
  // clearItems:  () => set((state) => ({ items: [] })),
})))

// const initialState = {
//   foo: 1,
//   bar: "baz"
// }
// const types = { increase: 'INCREASE', decrease: 'DECREASE' }
// const reducer = (state, { type, by = 1 }) => {
//   switch (type) {
//     case types.increase:
//       return { grumpiness: state.grumpiness + by }
//     case types.decrease:
//       return { grumpiness: state.grumpiness - by }
//   }
// }
// const useReduxStore = create(devtools(redux(reducer, initialState)))

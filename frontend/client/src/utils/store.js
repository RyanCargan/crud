import create from 'zustand'
import { devtools } from 'zustand/middleware'

export const useStore = create(devtools((set) => ({
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
})))

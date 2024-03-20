import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware'

const userstore = (set) => ({
    Address: "",
    setAddress: (Adres) => {
        set(() => ({
            Address: Adres
        }))
    },
    Remove: () => {
        set(() => ({
            Address: ""
        }))
    },
}) 

const useUserstore = create(
    devtools(
        persist(userstore, {
            name: "Userstore",
        })
    )
)

export default useUserstore;
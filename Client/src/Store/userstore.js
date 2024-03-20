import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware'

const userstore = (set) => ({
    Address: "",
    Name: "",
    Email: "",
    Img: "",
    setAddress: (Adres) => {
        set(() => ({
            Address: Adres.Address,
            Name: Adres.Name,
            Email: Adres.Email,
            Img: Adres.Img
        }))
    },
    Remove: () => {
        set(() => ({
            Address: "",
            Name: "",
            Email: "",
            Img: ""
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
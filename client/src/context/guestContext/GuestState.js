import React,{useReducer} from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'

const GuestState = (props) => {
    
    const initialState = {
        guests: [
            {
                id: 1,
                name: "Yash Sevada",
                phone: "0000000000",
                dietary: 'Vegan',
                isConfirmed: false
            },
            {
                id: 2,
                name: "Abhinav Bobade",
                phone: "1111111111",
                dietary: 'Non-Veg',
                isConfirmed: true
            },
            {
                id: 3,
                name: "Suraj Swami",
                phone: "2222222222",
                dietary: 'Pascatarian',
                isConfirmed: true
            }
        ]
    }
    const [state, dispatch] = useReducer(guestReducer, initialState)    
    return (
        <GuestContext.Provider
            value={{
                guests : state.guests
            }}>{props.children}
        </GuestContext.Provider>
    )
}

export default GuestState

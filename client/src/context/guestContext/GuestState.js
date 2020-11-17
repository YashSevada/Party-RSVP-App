import React,{useReducer} from 'react'
import GuestContext from './guestContext'
import guestReducer from './guestReducer'
import {
    CLEAR_SEARCH,
    SEARCH_GUEST,
    TOGGLE_FILTER
} from '../types'

const GuestState = (props) => {
    
    const initialState = {
        filterGuest: false,
        search: null,
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
    
    const toggleFilter = () => {
        dispatch({
            type: TOGGLE_FILTER
        })
    }

    const searchGuest  = (guest) => {
        dispatch({
            type:  SEARCH_GUEST,
            payload: guest
        })
    }

    const clearSearch = () => {
        dispatch({
            type: CLEAR_SEARCH
        })
    }

    return (
        <GuestContext.Provider
            value={{
                guests : state.guests,
                filterGuest: state.filterGuest,
                search: state.search,
                toggleFilter,
                searchGuest,
                clearSearch
            }}>{props.children}
        </GuestContext.Provider>
    )
}

export default GuestState

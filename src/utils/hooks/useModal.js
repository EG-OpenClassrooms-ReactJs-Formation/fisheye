import { useState } from 'react'

export const useContactModal = () => {
    const [isShowingContact, setIsShowingContact] = useState(false)

    function toggleContact() {
        //console.log("Modal called")
        setIsShowingContact(!isShowingContact)
        
    }
    return {isShowingContact, toggleContact}
}

export const useFocusModal = () => {
    const [isShowingFocus, setIsShowingFocus] = useState(false)

    function toggleFocus() {
        //console.log("Modal called")
        setIsShowingFocus(!isShowingFocus)
        
    }
    return {isShowingFocus, toggleFocus}
}
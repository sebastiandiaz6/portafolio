import { useEffect, useState } from "react"



export const useLoadAnimation = (value) => {
    const [currentValue, setCurrentValue] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            setCurrentValue(value)
        }, 500)
    }, [])

    return currentValue
}
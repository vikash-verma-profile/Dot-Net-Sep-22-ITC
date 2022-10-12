import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
    const getIntialValue =()=> localStorage.getItem(key) ?? defaultValue;

    const [value, setValue] = useState(getIntialValue);
    const setAndStoreValue = (newValue) => {
        setValue(newValue)
        localStorage.setItem(key,newValue);
    }
    return [value, setAndStoreValue];
}

export default useLocalStorage;
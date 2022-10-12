import { useState } from "react";

export function useLocalStorage(key, defaultValue) {
    const intialValue = localStorage.getItem(key) ?? defaultValue;

    const [value, setValue] = useState(intialValue);
    const setAndStoreValue = (newValue) => {
        setValue(newValue)
        localStorage.setItem(key,newValue);
    }
    return [value, setAndStoreValue];
}

export default useLocalStorage;
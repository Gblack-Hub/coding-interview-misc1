import React from 'react';

/**
 * Implement a replacement for useState which keeps values in the localStorage.
 *
 * The idea here is that all calls to use useState can be replaced with
 * useLocalStorageState(key, initialValue) and implement the same behavior.
 *
 * The first time useLocalStorageState is called the value will be initialValue
 * because nothing is stored in localStorage.
 *
 * Each time the user calls the setter (similar to useState) we need to trigger
 * component re-render and save the updated value in localStorage.
 *
 * The next time we are called we should use the value from localStorage.
 *
 * We should support the following values stored in localStorage:
 *
 * string, number, object, array
 *
 * Note that we're using GitHub gists here because there's no compiler.  Please
 * make sure your code is fully formed, no edge case, clean, etc.
 *
 * We're not worried about small issues like imports. The main issue is that the
 * code is free of bugs and high quality.
 *
 * @param key The key should be the key used by localStorage
 * @param initialValue The initial value to store for the first value.
 */
export function useLocalStorageState<V>(key: string, initialValue: V): [V, (newValue: V) => void] {

    // TODO: implement this code - this just returns 'any' which would not be usable.

    return [] as any;

}

export const RememberPassword = () => {
    const [value, setValue] = useLocalStorageState('remember-password', 'off');

    React.useEffect(() => {
      if(value){
        useLocalStorageState('remember-password', value);
      }
    }, [value])

    React.useEffect(() => {
      let val:string = localStorage.getItem("remember-password") ?? '';
      setValue(val);
    }, [])

    return (
        <input type="checkbox"
               value={value}
               onChange={event => setValue(event.currentTarget.value)}/>
    );

}

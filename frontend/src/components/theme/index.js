import { createTheme } from '@nextui-org/react';
import { useEffect, useState } from 'react';
export function setItemWithEvent(key, value) {
    // Create a new event with the key and value as properties
    const event = new Event('itemSet');
    event.key = key;
    event.value = value;
    // Call the original localStorage.setItem method
    localStorage.setItem(key, value);
    // Dispatch the event to the document
    document.dispatchEvent(event);
}

export default function Theme() {
    const [theme, setTheme] = useState('light');
    useEffect(() => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setItemWithEvent('theme', 'dark');
        }
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            setItemWithEvent('theme', e.matches ? 'dark' : 'light');
        });
        document.addEventListener('itemSet', (e) => {
            setTheme(e.value);
        });
    }, []);
    if (theme === 'dark') {
        return createTheme({
            type: 'dark',
            theme: {
                colors: {
                    text: '#fff',
                    background: '#1d1d1d',
                    darkText: '#fff',
                }, // optional
            },
        });
    } else {
        return createTheme({
            type: 'light',
            theme: {
                colors: {
                    darkText: '#11181c',
                }, // optional
            },
        });
    }
}

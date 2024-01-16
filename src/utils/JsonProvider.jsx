import { createContext, useState, useEffect } from 'react';
export const DataContext = createContext(null);



export const JsonProvider = ({path, children }) => {
        const [data, setData] = useState(null);
        useEffect(() => {
                fetch(path)
                        .then(response => response.json())
                        .then(data => {
                                setData(data);
                        })
                        .catch(error => {
                                console.error('Error fetching data: ', error);
                        });
        }, [path]);

        return <DataContext.Provider value={{ data }}>{children}</DataContext.Provider>;
};
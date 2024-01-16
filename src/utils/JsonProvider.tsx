import { createContext, useState, useEffect, ReactNode } from 'react';

// Define the type for the data that will be stored in the context.
// Replace "any" with the actual type of your data.
interface DataContextType {
    data: any;
}

// Create the context with the DataContextType.
export const DataContext = createContext<DataContextType | null>(null);

interface JsonProviderProps {
    path: string;
    children: ReactNode;
}

export const JsonProvider = ({path, children }: JsonProviderProps) => {
        const [data, setData] = useState<any>(null);
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
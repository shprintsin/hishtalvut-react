import { useEffect, useState } from 'react';


export function UseInfoData() {
    const [data, setData] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                const res = await fetch("http://localhost:3004/blocks");
                const jsonData = await res.json();
                setData(jsonData);
            } catch (err) {
                console.error(err);
            }
        })();
    }, []);
    return data;
}

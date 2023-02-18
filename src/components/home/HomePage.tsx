import React, { useState, useEffect } from 'react';

type ItemList = {
    id: number;
    name: string;
};

type ItemListProps = {
    items: ItemList[];
};

const List = ({ items }: ItemListProps) => {
    return (
        <ul className="list-disc">
            {items.map((item) => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
};

const HomePage = () => {
    const [items, setItems] = useState<ItemList[]>([]);

    useEffect(() => {
        // Здесь вы можете получить список элементов с сервера и установить его в state
        // Например:
        fetch('/api/items')
            .then((res) => res.json())
            .then((data: ItemList[]) => setItems(data));
    }, []);

    return <List items={items} />;
};

// function HomePage() {
//     return (
//         <div className="mt-40 flex flex-col items-center justify-center"></div>
//     );
// }

export default HomePage;

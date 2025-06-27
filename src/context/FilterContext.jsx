

import { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

export const useFilter = () => useContext(FilterContext);

export function FilterProvider({ children }) {
    const [filter, setFilter] = useState('');

    return (
        <FilterContext.Provider value={{ filter, setFilter }}>
            {children}
        </FilterContext.Provider>
    );
}
export function FilterProvider({ children }) {
    const [filter, setFilter] = useState('');

    const updateFilter = (newFilter) => {
        setFilter(newFilter);
    };

    return (
        <FilterContext.Provider value={{ filter, updateFilter }}>
            {children}
        </FilterContext.Provider>
    );
}
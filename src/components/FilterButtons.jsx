


import { useFilter } from "../context/FilterContext";

export default function FilterButtons() {

    const {filter, setFilter} = useFilter();

    return(

        <div>
            {['all', 'active', 'completed.'].map((f) => (
                <button
                    key={f}
                    onClick={() => setFilter(f)}
                    className={`px-4 py-2 rounded ${filter === f ? "bg-blue-500 text-white" : "bg-gray-200"}`}
                >
                    {f.charAt(0).toUpperCase() + f.slice(1)}
                </button>
            ))}
        </div>

        )
    
    }
"use client";
import { useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
        console.log("current query", searchQuery);
    };

    return (
        <form className="flex flex-col items-center justify-center space-y-4" onSubmit={onSearch}>
            <input 
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Enter a phrase or mood..."
                className="w-full h-16 px-4 py-3 rounded-lg border-2 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 text-base"
            />
            <Button
                className="w-2/3 rounded-full bg-green-400 hover:bg-green-500 focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 text-white font-semibold py-2 flex items-center justify-center"
                type="submit"  
            >
                <Search className="h-4 w-4 mr-2" />
                Search
            </Button>
        </form>
    );
}

export default SearchInput;

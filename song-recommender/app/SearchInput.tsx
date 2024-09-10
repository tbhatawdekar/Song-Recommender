"use client";
import { useReducer, useState } from "react";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [choices, setChoices] = useState([]);
    const router = useRouter();

    const onSearch = (event: React.FormEvent) => {
        event.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery);

        router.push(`/search?q=${encodedSearchQuery}`);
        console.log("current query", encodedSearchQuery);
    };

    return (
        <div>
            <form className="flex flex-col items-center justify-center space-y-4" onSubmit={onSearch}>
                <textarea 
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Enter a phrase or mood..."
                    className="w-full h-24 px-4 py-3 rounded-lg border-2 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 resize-none text-base"/>
                <Button
                    className="w-2/3 rounded-full bg-green-400 hover:bg-green-500 focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 text-white font-semibold py-2 flex items-center justify-center"
                    type="submit">
                    <Search className="h-4 w-4 mr-2" />
                    Search
                </Button>
            </form>
            <div>
                <Button onClick={async () => {
                    const response = await fetch("/api/chatgpt", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                            someData: true,
                        })
                    });
                    const result = await response.json();
                    setChoices(result.choices);
                }}>
                    API
                </Button>
                {choices.map((choice : any) => {
                    console.log(choice)
                    return(
                        <p style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem' }} key={choice.index}>{choice.message.content}</p>
                    )
                })}
            </div>
        </div>
    );
}

export default SearchInput;

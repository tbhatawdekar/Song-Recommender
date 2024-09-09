"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

const fetchSongs = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch songs");
    }
    return response.json();
}   

const SearchPage = () => {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q'): null;    
    const encodedSearchQuery = encodeURI(searchQuery || "");
    const { data, isLoading } = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchSongs);

    console.log("Search Params", encodedSearchQuery);
    return (
      <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-yellow-100 to-blue-100">
        <div className="text-center w-full mt-8 space-y-8">
          <h1 className="text-5xl font-bold text-green-500">
            🎵 Recommendations 🎵 
          </h1>
        </div>
      </div>
    );
  }
  
  export default SearchPage;
  
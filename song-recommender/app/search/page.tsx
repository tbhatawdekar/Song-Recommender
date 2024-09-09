"use client";
import { useSearchParams } from "next/navigation";
import useSWR from "swr";

interface Song {
    id: number;
    name: string;
    artist: string;
}

const fetchSongs = async (url: string) => {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error("Failed to fetch songs");
    }
    return response.json();
}   

const SearchPage = () => {
    const search = useSearchParams();
    const searchQuery = search ? search.get('q') : null;    
    const encodedSearchQuery = encodeURI(searchQuery || "");
    const { data, isLoading, error } = useSWR(`/api/search?q=${encodedSearchQuery}`, fetchSongs);

    if (isLoading) return <div>Loading...</div>;
    if (!data?.songs) {
        return <div>No songs found.</div>;
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-start bg-gradient-to-br from-yellow-100 to-blue-100">
            <div className="text-center w-full mt-8 space-y-8" style={{ marginBottom: '2rem' }}>  
            <h1 className="text-5xl font-bold text-green-500">
                    🎵 Recommendations 🎵 
                </h1>
            </div>
            <div>
                {data.songs.map((song: Song) => (
                    <div key={song.id} style={{ color: 'black', fontSize: '1.5rem', marginBottom: '1rem' }}> 
                        <strong>{song.name}</strong> - {song.artist}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SearchPage;
  
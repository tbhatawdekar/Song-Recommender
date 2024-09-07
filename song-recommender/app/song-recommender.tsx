'use client';

import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SongRecommender() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-blue-100">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap');
        body {
          font-family: 'Quicksand', sans-serif;
        }
      `}</style>
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-green-500 mb-8">
          🎵 Song Recs 🎵 
        </h1>
        <div className="w-full max-w-md space-y-4">
          <Input
            type="text"
            placeholder="Search for a song..."
            className="w-full rounded-full border-2 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 px-4 py-2"
          />
          <Button
            className="w-2/3 mx-auto rounded-full bg-green-400 hover:bg-green-500 focus:ring-2 focus:ring-green-300 focus:ring-opacity-50 text-white font-semibold py-2 flex items-center justify-center"
          >
            <Search className="h-4 w-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  )
}
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Results from './results';
import { useState } from "react"; 
import SearchInput from "./SearchInput";


export default function SongRecommender() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-yellow-100 to-blue-100">
      <div className="text-center space-y-8">
        <h1 className="text-5xl font-bold text-green-500 mb-8">
          🎵 Song Recs 🎵 
        </h1>
        <div className="w-full max-w-md space-y-4">
          <div className="relative">
            <SearchInput />
          </div>
        </div>
      </div>
    </div>
  )
}
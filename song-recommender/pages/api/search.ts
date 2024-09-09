import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";  // Assuming prisma.ts exports `prisma`

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            const { q: query } = req.query;
            const genre = typeof query === 'string' ? query : ''; 
            const songs = await prisma.songs.findMany({
                where: {
                    genre: genre
                }
            });
            res.status(200).json({ songs: songs });

        } catch(error) {
            res.status(500).end();
        }
    }
}
    


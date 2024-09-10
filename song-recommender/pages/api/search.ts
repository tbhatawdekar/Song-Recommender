import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/prisma";  

export default async function handler (
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "GET") {
        try {
            const { emotion } = req.query;
            const genreFilter = typeof emotion === 'string' ? emotion : '';

            const songs = await prisma.songs.findMany({
                where: {
                    genre: {
                        equals: genreFilter,
                    }
                }
            });
            res.status(200).json({ songs: songs });

        } catch(error) {
            res.status(500).end();
        }
    }
}
    


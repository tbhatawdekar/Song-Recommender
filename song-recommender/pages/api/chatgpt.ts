import { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from "openai";

export default async function handler(
    req: NextApiRequest, res: NextApiResponse
) {
    if (req.method === "POST") {
        try {
            const openai = new OpenAI({
                apiKey: process.env.OPENAI_API_KEY
            });

            const response = await openai.chat.completions.create({
                model: "gpt-3.5-turbo",
                messages: [
                    {
                        role: "system",
                        content: "Categorize the text into one of the four categories: happy, sad, anger, fear. Only respond with the category name in all lowercase."
                    },
                    {
                        role: "user",
                        content: "I'm going to my least favorite city, San Francisco, tomorrow."
                    }
                ],
                temperature: 0,
                max_tokens: 10,
                top_p: 1,
                frequency_penalty: 0,
                presence_penalty: 0
            });
            res.status(200).json(response);
        } catch(error) {
            res.status(500).end();
        }
    } 
}

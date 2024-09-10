// import { useState } from "react";

// export default function PromptForm(props: any) {
//     const [prompt, setPrompt] = useState("");
//     return (
//         <form 
//         className="flex flex-col items-center justify-center space-y-4"
//         onSubmit={(e) => {
//             e.preventDefault();
//         }}>
//             <textarea 
//                 value={prompt}
//                 onChange={e => { setPrompt(e.target.value);}}
//                 placeholder="Enter a phrase or mood..."
//                 className="w-full h-24 px-4 py-3 rounded-lg border-2 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 resize-none text-base"/>
//         </form>
//     );
// }

import { useState } from "react";

interface PromptFormProps {
    prompt: string;
    setPrompt: (value: string) => void;
}

const PromptForm = ({ prompt, setPrompt }: PromptFormProps) => {
    return (
        <textarea 
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            placeholder="Enter a phrase or mood..."
            className="w-full h-24 px-4 py-3 rounded-lg border-2 border-green-300 focus:border-green-500 focus:ring focus:ring-green-200 focus:ring-opacity-50 resize-none text-base"/>
    );
}

export default PromptForm;


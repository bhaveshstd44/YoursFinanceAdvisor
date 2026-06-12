// import express from 'express';
// import dotenv from 'dotenv';
// import path from 'path';
// import { fileURLToPath } from 'url';
// import { GoogleGenAI } from '@google/genai';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3000;

// // Setup ES Module directories handling
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));

// // Initialize official Google Gemini Client SDK
// const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// app.post('/api/advisor', async (req, res) => {
//     try {
//         const { lang, type, income, fixedCost, subProfile, specialIssue } = req.body;

//         const systemPrompt = `
//             You are a personal financial advisor and empathetic wellness coach.
//             Analyze these metrics:
//             - User Category: ${type} (${subProfile})
//             - Monthly Income: $${income}
//             - Regular Costs: $${fixedCost}
//             - Special Context: "${specialIssue || 'None provided'}"
            
//             Instructions:
//             1. Language: Give response entirely in ${lang === 'hi' ? 'natural conversational Hinglish (Romanized Hindi using english alphabet)' : 'clear conversational English'}.
//             2. Format: Return a few friendly paragraphs. Use bullet points for clear, encouraging actionable advice steps. Do not use markdown titles or headers.
//         `;

//         // Stable content generation check
//         const response = await ai.models.generateContent({
//     model: "gemini-3.1-flash-lite", 
//     contents: systemPrompt
// });



// // app.post('/api/advisor', async (req, res) => {
// //     try {
// //         const { lang, type, income, fixedCost, wantsCost, timeline, subProfile, specialIssue } = req.body;

// //         const actualSavings = income - (fixedCost + wantsCost);

// //         // System prompt designed to force structural mathematics and steps layout
// //         const systemPrompt = `
// //             You are an expert, highly empathetic personal financial advisor and smart wealth planner.
// //             Analyze the following client metrics carefully:
// //             - User Profession Type: ${type} (${subProfile})
// //             - Total Monthly Cash Inflow/Income: ₹${income}
// //             - Fixed Costs / Essential Spending: ₹${fixedCost}
// //             - Discretionary / Lifestyle / Wants Cost: ₹${wantsCost}
// //             - Current Calculated Monthly Savings: ₹${actualSavings}
// //             - Target Goal Timeline: ${timeline} Months
// //             - Client's Goal/Special Situation: "${specialIssue || 'Planning a high-priority financial milestone'}"
            
// //             Strict Response Formatting Instructions:
// //             You must output your financial advice in a well-defined, clean, ordered structural map. Do NOT use markdown title headers (# or ##). Instead, use the exact numbered scheme below:

// //             1. Current Situation
// //             Show the mathematical breakdown of their current state. (e.g., Income: ₹X, Essentials: ₹Y → Left with ₹Z. Detail where the leak is and project the total savings by multiplying the current savings by the ${timeline}-month timeline). Show if it falls short of their goals.

// //             2. Step 1: Analyze expenses
// //             Identify the primary non-essential expenditure block (which is ₹${wantsCost}). Give practical, numbered options to minimize or optimize this specific cost pool and show the exact adjusted math (New savings = current + optimized amount).

// //             3. Step 2: Explore extra small income
// //             Provide specific, realistic, micro-income avenues tailored strictly to their profile (e.g., micro-tasks, small tutoring for students; secondary crop rotation or local custom fabrications for farmers/masons; asset turnover for businessmen). Show how much this changes the math.

// //             4. Step 3: Plan savings for the goal
// //             Present a comparative mathematical timeline grid summarizing the options: Current projection vs. optimized expense cuts vs. optimized cuts + secondary income streams over the ${timeline}-month timeline.

// //             5. Step 4: Smart daily habits
// //             Provide 3 highly practical lifestyle behavioral adjustments to prevent impulse cash drain.

// //             6. Step 5: Bonus hacks
// //             Provide 2 specialized psychological hacks or structural tricks (like sharing transport, cash envelope systems, micro-index vaults) to keep them highly motivated.

// //             ✅ Summary Plan (${timeline}-month prep):
// //             Provide a clear, brief step-by-step math summary showing how implementing these updates will successfully bridge their target financial requirements.

// //             Language Constraints:
// //             - If lang is 'hi', write everything in natural, easy-to-understand conversational Romanized Hindi (Hinglish using the English alphabet). Use phrasing that common middle-class individuals can read naturally without complex financial jargon.
// //             - If lang is 'en', write in clear, direct, conversational English.
// //         `;

// //         const response = await ai.models.generateContent({
// //             model: 'gemini-2.5-flash', 
// //             contents: systemPrompt,
// //         });

//         const adviceText = response.text || response.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
//         res.json({ advice: adviceText });

//     } catch (error) {
//         console.error("Gemini System Fault:", error);
//         res.status(500).json({ error: "The AI Coach is experiencing high traffic spikes. Please try again in a few moments." });
//     }


//   // 1. Extract the text response cleanly
//         const adviceText = response.text || response.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
        
//         // 2. Send the JSON response to the browser
//         res.json({ advice: adviceText });

//     } catch (error) {
//         console.error("Gemini System Fault:", error);
//         res.status(500).json({ error: error.message || "The AI Coach is experiencing technical difficulties." });
//     }
// }); // <-- This line closes the app.post block perfectly

// // Serve public directory index dynamically
// app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

// app.listen(PORT, () => {
//     console.log(`🚀 FinCoach running at: http://localhost:${PORT}`);
// });



import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Setup ES Module directories handling
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Initialize official Google Gemini Client SDK
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// Main FinCoach Advisory Processing API Route
app.post('/api/advisor', async (req, res) => {
    try {
        const { lang, type, income, fixedCost, wantsCost, timeline, subProfile, specialIssue } = req.body;

        const actualSavings = income - (fixedCost + wantsCost);

        // System prompt designed to force structural mathematics and steps layout
        const systemPrompt = `
            You are an expert, highly empathetic personal financial advisor and smart wealth planner.
            Analyze the following client metrics carefully:
            - User Profession Type: ${type} (${subProfile})
            - Total Monthly Cash Inflow/Income: ₹${income}
            - Fixed Costs / Essential Spending: ₹${fixedCost}
            - Discretionary / Lifestyle / Wants Cost: ₹${wantsCost}
            - Current Calculated Monthly Savings: ₹${actualSavings}
            - Target Goal Timeline: ${timeline} Months
            - Client's Goal/Special Situation: "${specialIssue || 'Planning a high-priority financial milestone'}"
            
            Strict Response Formatting Instructions:
            You must output your financial advice in a well-defined, clean, ordered structural map. Do NOT use markdown title headers (# or ##). Instead, use the exact numbered scheme below:

            1. Current Situation
            Show the mathematical breakdown of their current state. (e.g., Income: ₹X, Essentials: ₹Y → Left with ₹Z. Detail where the leak is and project the total savings by multiplying the current savings by the ${timeline}-month timeline). Show if it falls short of their goals.

            2. Step 1: Analyze expenses
            Identify the primary non-essential expenditure block (which is ₹${wantsCost}). Give practical, numbered options to minimize or optimize this specific cost pool and show the exact adjusted math (New savings = current + optimized amount).

            3. Step 2: Explore extra small income
            Provide specific, realistic, micro-income avenues tailored strictly to their profile (e.g., micro-tasks, small tutoring for students; secondary crop rotation or local custom fabrications for farmers/masons; asset turnover for businessmen). Show how much this changes the math.

            4. Step 3: Plan savings for the goal
            Present a comparative mathematical timeline grid summarizing the options: Current projection vs. optimized expense cuts vs. optimized cuts + secondary income streams over the ${timeline}-month timeline.

            5. Step 4: Smart daily habits
            Provide 3 highly practical lifestyle behavioral adjustments to prevent impulse cash drain.

            6. Step 5: Bonus hacks
            Provide 2 specialized psychological hacks or structural tricks (like sharing transport, cash envelope systems, micro-index vaults) to keep them highly motivated.

            ✅ Summary Plan (${timeline}-month prep):
            Provide a clear, brief step-by-step math summary showing how implementing these updates will successfully bridge their target financial requirements.

            Language Constraints:
            - If lang is 'hi', write everything in natural, easy-to-understand conversational Romanized Hindi (Hinglish using the English alphabet). Use phrasing that common middle-class individuals can read naturally without complex financial jargon.
            - If lang is 'en', write in clear, direct, conversational English.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-3.1-flash-lite', 
            contents: systemPrompt,
        });

        // Extract text safely using the universal SDK parser
        const adviceText = response.text || response.candidates?.[0]?.content?.parts?.[0]?.text || "No response generated.";
        
        // Return structured data response to client browser context
        res.json({ advice: adviceText });

    } catch (error) {
        console.error("Gemini System Fault:", error);
        res.status(500).json({ error: error.message || "The AI Coach is experiencing technical difficulties. Please try again in a few moments." });
    }
});

// Serve public directory index dynamically
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Fire up our network listener engine
app.listen(PORT, () => {
    console.log(`🚀 FinCoach running smoothly at: http://localhost:${PORT}`);
});
import axios from "axios";
import Key from "./key";

const API_KEY = Key();

export const generateSite = async () => {
    
    try {
        console.log("generating site...");
        const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4",
          messages: [
            {
              role: "system",
              content:
                "You are an AI embedded in a react app that generates a new website every time a user visits the page or refreshes it. It is very important that you respond ONLY in perfectly formatted and functional HTML code that can be copy pasted into the <body> tag resulting in a functional website. Do not format your response with markdown. Do not include the opening and closing <body> tags.",
            },
            {
              role: "user",
              content: `Generate the code for a random simple website using placeholder images from placekitten. The website can be about anything you want. Don't say anything, just give me the code for what to put in the <body> section. 
              
              Output example: "<h1>This is an example header</h1><p>This is example text</p> ..."
              
              Output: `
            },
          ],
          max_tokens: 1000,
          n: 1,
          stop: null,
          temperature: 0.5,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
  
      console.log(response);
      console.log("site generated!");
      return response.data.choices[0].message.content.trim();
    } catch (error) {
      console.error(error);
      return null;
    }
  };
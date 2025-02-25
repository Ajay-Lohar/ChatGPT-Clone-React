export const sendMsgToOpenAI = async (msg) => {
    const API_URL = "https://api.openai.com/v1/chat/completions";
  
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         Authorization: `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`

      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: msg,
        temperature: 0.2,
        max_tokens: 2048,
        n: 1,
        stop: null,
      }),
    };
    try {
      const response = await (await fetch(API_URL, requestOptions)).json();
      return response?.choices[0]?.text;
    } catch (error) {
      console.log(error);
    }
  };
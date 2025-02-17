

export async function sendMsgToOpenAI(message) {
    const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `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`
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: message,
            temperature: 0.7,
            max_tokens: 256,
            top_p: 1,
            frequency_penalty: 0,
            presence_penalty: 0
        })
    });

    const data = await response.json();
    return data.choices[0].text;
}

const url = "https://sathwik2212-backend-api.hf.space/v1/chat/completions";

const data = {
    model: "ultraplinian/fast",
    messages: [{ role: "user", content: "What is 2+2? Reply in one sentence." }],
    stream: false
};

console.log("Sending request to your newly deployed API on Hugging Face Spaces...");
console.log("URL:", url);

fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
})
.then(async response => {
    console.log("\nResponse Status:", response.status);
    const result = await response.text();
    try {
        console.log("\nAPI Response:");
        console.log(JSON.stringify(JSON.parse(result), null, 2));
    } catch(e) {
        console.log("\nRaw Output:");
        console.log(result);
    }
})
.catch(err => console.error("Request failed:", err));

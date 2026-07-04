import requests
import json

url = "https://sathwik2212-backend-api.hf.space/v1/chat/completions"
headers = {
    "Content-Type": "application/json"
}
data = {
    "model": "ultraplinian/fast",
    "messages": [{"role": "user", "content": "What is 2+2? Reply in one sentence."}],
    "stream": False
}

print("Sending request to your deployed API...")
response = requests.post(url, headers=headers, json=data)

try:
    print("Response Status Code:", response.status_code)
    result = response.json()
    print("\nAPI Response:")
    print(json.dumps(result, indent=2))
except Exception as e:
    print("Error parsing response:", e)
    print("Raw output:", response.text)

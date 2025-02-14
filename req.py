import requests

url = "https://videosdk-auth-endpoint-sample-production.up.railway.app"  # Replace with your endpoint URL

data = {
    "sessionName": "Cool Cars",
    "role": 1,
    "sessionKey": "session123",
    "userIdentity": "user123"
}

response = requests.post(url, json=data)
print(response.json())
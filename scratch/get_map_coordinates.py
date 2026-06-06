import requests

address = "千葉県千葉市中央区弁天1丁目2-1"
url = f"https://nominatim.openstreetmap.org/search?q={address}&format=json&limit=1"
headers = {
    "User-Agent": "antigravity-agent-da-b-app-v2"
}

try:
    res = requests.get(url, headers=headers)
    data = res.json()
    if data:
        print("LAT:", data[0]["lat"])
        print("LON:", data[0]["lon"])
    else:
        # Try broader search
        url_broad = "https://nominatim.openstreetmap.org/search?q=千葉市中央区弁天&format=json"
        res_broad = requests.get(url_broad, headers=headers)
        data_broad = res_broad.json()
        if data_broad:
            print("Broad matches:")
            for idx, item in enumerate(data_broad):
                print(f"Match {idx}: lat={item['lat']}, lon={item['lon']}")
        else:
            print("No matches at all.")
except Exception as e:
    print("Error:", e)

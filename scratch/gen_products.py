import os
import json
import urllib.parse

path = "e:/shanmuga/public/Products"
files = os.listdir(path)
files = [f for f in files if f.endswith(('.jpeg', '.jpg', '.png'))]

# Sort files to maintain some order
files.sort()

products = []
for i, filename in enumerate(files):
    # Encode spaces and special characters for URLs
    safe_filename = urllib.parse.quote(filename)
    products.append({
        "id": str(i + 1),
        "name": f"Divine Artifact #{i + 1}",
        "price": 12000 + (i * 250), # Varied prices
        "category": "Ornaments", # Default category
        "image": f"/Products/{safe_filename}",
        "description": "An exquisite piece of divine craftsmanship, meticulously hand-carved and adorned with traditional details. This sacred artifact represents the pinnacle of our artisan heritage, perfect for temple adornment and ceremonial use."
    })

ts_content = f"""export interface Product {{
  id: string;
  name: string;
  price: number;
  category: string;
  image: string;
  description?: string;
}}

export const allProducts: Product[] = {json.dumps(products, indent=2)};
"""

with open("e:/shanmuga/src/data/products.ts", "w") as f:
    f.write(ts_content)

from PIL import Image

try:
    img = Image.open('public/logo.png')
    img = img.convert('RGBA')
    data = img.getdata()
    new_data = []
    
    for item in data:
        # Check if the pixel is white-ish
        # A pixel is white-ish if R, G, B are all high and difference is low (not yellow)
        # Yellow has high R and G, but low B
        if item[0] > 220 and item[1] > 220 and item[2] > 220 and item[3] > 10:
            # Change white to black, keep alpha
            new_data.append((17, 17, 17, item[3])) # #111111
        else:
            new_data.append(item)
            
    img.putdata(new_data)
    img.save('public/logo-dark.png', 'PNG')
    print("Successfully generated logo-dark.png")
except Exception as e:
    print(f"Error: {e}")

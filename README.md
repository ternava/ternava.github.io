# My Personal Site

This repository powers my personal site, hosted on GitHub Pages.

### Previewing Locally

Because the Publications page fetches `papers.bib`, I’ll need a simple HTTP server:

Option 1: **Python 3**  
```bash
cd ../ternava.github.io
python3 -m http.server 8000
```

Option 2: **Node.js** (with CORS support)  
```bash
npm install --global http-server
cd ../ternava.github.io
http-server -p 8000 --cors
```

Once the server is running, I should point the browser to  
http://localhost:8000/publications.html  
—other pages follow the same pattern.

### Regenerating Publication Data

After updating `papers.bib`, I need to rebuild the JSON file used by the Publications page:

```bash
node scripts/generate-publications.js
```

Then I should reload my local server to see the changes.
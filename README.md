My personal site hosted with GitHub Pages.

## Local Preview

The Publications page uses `fetch()` to load `papers.bib`, so you must run a local HTTP server. Here are two options:

1. Python 3 built‐in server:
   ```bash
   cd /home/ternava/Documents/GitHub/ternava.github.io
   python3 -m http.server 8000
   ```
2. Node.js http-server (with CORS):
   ```bash
   npm install --global http-server
   cd /home/ternava/Documents/GitHub/ternava.github.io
   http-server -p 8000 --cors
   ```

3. Generate the publications‐data.js file:
   ```bash
   node scripts/generate-publications.js
   ```
4. Start the HTTP server:
   ```bash
   python3 -m http.server 8000
   ```

Then open in your browser:  
http://localhost:8000/publications.html  
All other pages will work the same way.
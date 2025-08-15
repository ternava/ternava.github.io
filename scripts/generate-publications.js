const fs = require('fs');

const bibtext = fs.readFileSync('papers.bib', 'utf8');
// Split on each entry type (here assuming @inproceedings and @article etc.)
const rawEntries = bibtext
  .split(/@(?:inproceedings|article|phdthesis)\s*{/g)
  .slice(1)
  .map(block => block.replace(/^\s*{/, '').replace(/}\s*$/s, ''));

const entries = rawEntries.map(entry => {
  const titleMatch  = entry.match(/title\s*=\s*{([^}]*)}/i);
  const authorMatch = entry.match(/author\s*=\s*{([^}]*)}/i);
  const abbrMatch   = entry.match(/abbr\s*=\s*{([^}]*)}/i);
  const yearMatch   = entry.match(/year\s*=\s*{([^}]*)}/i);
  const pdfMatch    = entry.match(/pdf\s*=\s*{([^}]*)}/i);
  const doiMatch    = entry.match(/doi\s*=\s*{([^}]*)}/i);
  const awardMatch  = entry.match(/award\s*=\s*{([^}]*)}/i);
  const alinkMatch  = entry.match(/alink\s*=\s*{([^}]*)}/i);
  const suppMatch   = entry.match(/supp\s*=\s*{([^}]*)}/i);
  return {
    title:  titleMatch  ? titleMatch[1]  : '',
    author: authorMatch ? authorMatch[1] : '',
    abbr:   abbrMatch   ? abbrMatch[1]   : '',
    year:   yearMatch   ? yearMatch[1]   : '',
    pdf:    pdfMatch    ? pdfMatch[1]    : '',
    doi:    doiMatch    ? doiMatch[1]    : '',
    award:  awardMatch  ? awardMatch[1]  : '',
    alink:  alinkMatch  ? alinkMatch[1]  : '',
    supp:   suppMatch   ? suppMatch[1]   : ''
  };
});

const out = 'window.PUBLICATIONS = ' + JSON.stringify(entries, null, 2) + ';';
fs.writeFileSync('js/publications-data.js', out);
console.log('→ publications-data.js generated');

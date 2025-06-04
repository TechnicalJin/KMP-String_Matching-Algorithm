function createPMTable(pattern) {
    let table = new Array(pattern.length).fill(0);
    let j = 0;
    
    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[i] !== pattern[j]) {
            j = table[j - 1];
        }
        if (pattern[i] === pattern[j]) {
            j++;
        }
        table[i] = j;
    }
    return table;
}

function kmpSearch(text, pattern) {
    if (!text || !pattern) return [];

    let partialMatchTable = createPMTable(pattern);
    let matches = [];
    let j = 0;

    for (let i = 0; i < text.length; i++) {
        while (j > 0 && text[i] !== pattern[j]) {
            j = partialMatchTable[j - 1];
        }
        if (text[i] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) {
            matches.push(i - j + 1);
            j = partialMatchTable[j - 1];
        }
    }

    return matches;
}

module.exports = { kmpSearch };

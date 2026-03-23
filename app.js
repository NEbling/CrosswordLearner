const GRID_SIZE = 10;

let placedWords = [];
let currentWord = null;

// ========================
// RANDOM WORD SELECTION
// ========================

function getRandomWords(wordList) {
    const filtered = wordList.filter(w => 
        w.spanish.length >= 3 && w.spanish.length <= 8 // 🔥 key
    );

    const count = Math.floor(Math.random() * 5) + 6;

    return [...filtered]
        .sort(() => 0.5 - Math.random())
        .slice(0, count);
}

// ========================
// GRID
// ========================

function createEmptyGrid() {
    return Array.from({ length: GRID_SIZE }, () =>
        Array(GRID_SIZE).fill(null)
    );
}

// ========================
// VALIDATION
// ========================

function canPlaceWord(grid, word, row, col, direction, requireIntersection = true) {
    let hasIntersection = false;

    // Start boundary
    const beforeR = direction === "across" ? row : row - 1;
    const beforeC = direction === "across" ? col - 1 : col;

    if (
        beforeR >= 0 && beforeC >= 0 &&
        beforeR < GRID_SIZE && beforeC < GRID_SIZE &&
        grid[beforeR][beforeC] !== null
    ) return false;

    // End boundary
    const afterR = direction === "across" ? row : row + word.length;
    const afterC = direction === "across" ? col + word.length : col;

    if (
        afterR >= 0 && afterC >= 0 &&
        afterR < GRID_SIZE && afterC < GRID_SIZE &&
        grid[afterR][afterC] !== null
    ) return false;

    for (let i = 0; i < word.length; i++) {
        const r = direction === "across" ? row : row + i;
        const c = direction === "across" ? col + i : col;

        if (r < 0 || c < 0 || r >= GRID_SIZE || c >= GRID_SIZE) return false;

        const cell = grid[r][c];

        if (cell !== null) {
            if (cell !== word[i]) return false;
            hasIntersection = true;
        } else {
            if (direction === "across") {
                if (
                    (r > 0 && grid[r - 1][c] !== null) ||
                    (r < GRID_SIZE - 1 && grid[r + 1][c] !== null)
                ) return false;
            } else {
                if (
                    (c > 0 && grid[r][c - 1] !== null) ||
                    (c < GRID_SIZE - 1 && grid[r][c + 1] !== null)
                ) return false;
            }
        }
    }

    if (requireIntersection && !hasIntersection) return false;

    return true;
}

// ========================
// PLACE WORD
// ========================

function placeWord(grid, wordObj, row, col, direction) {
    const word = wordObj.spanish;

    for (let i = 0; i < word.length; i++) {
        const r = direction === "across" ? row : row + i;
        const c = direction === "across" ? col + i : col;

        grid[r][c] = word[i];
    }

    placedWords.push({
        word: word,
        clue: wordObj.english,
        row,
        col,
        direction,
        solved: false
    });
}

// ========================
// GENERATOR
// ========================

function generateCrossword(words) {
    let attempts = 0;

    while (attempts < 200) {
        const grid = createEmptyGrid();
        placedWords = [];

        const first = words[0];
        const row = Math.floor(GRID_SIZE / 2);
        const col = Math.floor((GRID_SIZE - first.spanish.length) / 2);

        placeWord(grid, first, row, col, "across");

        let success = true;

        for (let w = 1; w < words.length; w++) {
            const wordObj = words[w];
            const word = wordObj.spanish;

            let placed = false;

            // 🔥 ONLY try intersections
            for (let existing of placedWords) {
                for (let i = 0; i < existing.word.length; i++) {
                    for (let j = 0; j < word.length; j++) {

                        if (existing.word[i] !== word[j]) continue;

                        const baseRow = existing.direction === "across"
                            ? existing.row
                            : existing.row + i;

                        const baseCol = existing.direction === "across"
                            ? existing.col + i
                            : existing.col;

                        const options = [
                            { dir: "across", row: baseRow, col: baseCol - j },
                            { dir: "down", row: baseRow - j, col: baseCol }
                        ];

                        for (let opt of options) {
                            if (canPlaceWord(grid, word, opt.row, opt.col, opt.dir, true)) {
                                placeWord(grid, wordObj, opt.row, opt.col, opt.dir);
                                placed = true;
                                break;
                            }
                        }

                        if (placed) break;
                    }
                    if (placed) break;
                }
                if (placed) break;
            }

            // ❌ If no intersection → fail this attempt
            if (!placed) {
                success = false;
                break;
            }
        }

        // ✅ Only accept FULLY connected puzzles
        if (success && isFullyConnected()) {
            return grid;
        }

        attempts++;
    }

    return null; // 🔥 IMPORTANT: return null instead of empty grid
}

// ========================
// RENDER
// ========================

function renderGrid(grid) {
    const container = document.getElementById("grid");
    container.innerHTML = "";

    grid.forEach((row, r) => {
        row.forEach((cell, c) => {
            const input = document.createElement("input");
            input.classList.add("cell");

            if (cell === null) {
                input.classList.add("block");
                input.disabled = true;
            } else {
                input.dataset.row = r;
                input.dataset.col = c;
                input.dataset.answer = cell;
                input.maxLength = 1;

                const wordsHere = placedWords.filter(w => {
                    for (let i = 0; i < w.word.length; i++) {
                        const rr = w.direction === "across" ? w.row : w.row + i;
                        const cc = w.direction === "across" ? w.col + i : w.col;
                        if (rr === r && cc === c) return true;
                    }
                    return false;
                });

                input.dataset.words = JSON.stringify(wordsHere);
            }

            container.appendChild(input);
        });
    });
}

function showCompletionMessage() {
    const clueBox = document.getElementById("active-clue");

    clueBox.classList.remove("alert-primary");
    clueBox.classList.add("alert-success");

    clueBox.innerHTML = "🎉 <strong>Great Job!</strong> You completed the puzzle!";
}

// ========================
// GAME LOGIC
// ========================

function checkPuzzleComplete() {
    if (!placedWords.every(w => w.solved)) return;

    // 🔥 Remove all highlights
    document.querySelectorAll(".cell").forEach(cell => {
        cell.classList.remove("highlight");
    });

    // 🔥 Force ALL cells green (final polish)
    placedWords.forEach(word => {
        for (let i = 0; i < word.word.length; i++) {
            const r = word.direction === "across" ? word.row : word.row + i;
            const c = word.direction === "across" ? word.col + i : word.col;

            const cell = document.querySelector(
                `.cell[data-row='${r}'][data-col='${c}']`
            );

            if (cell) {
                cell.style.background = "#c8f7c5";
            }
        }
    });

    // 🔥 Show completion message
    showCompletionMessage();

    // 🔥 Fireworks
    triggerFireworks();
}

function checkCurrentWord() {
    if (!currentWord) return;

    let userWord = "";

    for (let i = 0; i < currentWord.word.length; i++) {
        const r = currentWord.direction === "across"
            ? currentWord.row
            : currentWord.row + i;

        const c = currentWord.direction === "across"
            ? currentWord.col + i
            : currentWord.col;

        const cell = document.querySelector(
            `.cell[data-row='${r}'][data-col='${c}']`
        );

        if (!cell.value) return;
        userWord += cell.value;
    }

    if (userWord === currentWord.word) {
        lockWord(currentWord);
    }
}

function isFullyConnected() {
    if (placedWords.length === 0) return false;

    const visited = new Set();

    function shareCell(w1, w2) {
        for (let i = 0; i < w1.word.length; i++) {
            const r1 = w1.direction === "across" ? w1.row : w1.row + i;
            const c1 = w1.direction === "across" ? w1.col + i : w1.col;

            for (let j = 0; j < w2.word.length; j++) {
                const r2 = w2.direction === "across" ? w2.row : w2.row + j;
                const c2 = w2.direction === "across" ? w2.col + j : w2.col;

                if (r1 === r2 && c1 === c2) return true;
            }
        }
        return false;
    }

    function dfs(word) {
        visited.add(word);

        for (let other of placedWords) {
            if (!visited.has(other) && shareCell(word, other)) {
                dfs(other);
            }
        }
    }

    dfs(placedWords[0]);

    return visited.size === placedWords.length;
}

function checkAllWords() {
    placedWords.forEach(word => {
        if (word.solved) return;

        let userWord = "";

        for (let i = 0; i < word.word.length; i++) {
            const r = word.direction === "across"
                ? word.row
                : word.row + i;

            const c = word.direction === "across"
                ? word.col + i
                : word.col;

            const cell = document.querySelector(
                `.cell[data-row='${r}'][data-col='${c}']`
            );

            if (!cell || !cell.value) return;

            userWord += cell.value;
        }

        if (userWord === word.word) {
            lockWord(word);
        }
    });
}

function lockWord(word) {
    if (word.solved) return;

    word.solved = true;

    for (let i = 0; i < word.word.length; i++) {
        const r = word.direction === "across" ? word.row : word.row + i;
        const c = word.direction === "across" ? word.col + i : word.col;

        const cell = document.querySelector(
            `.cell[data-row='${r}'][data-col='${c}']`
        );

        cell.value = word.word[i];
        cell.style.background = "#c8f7c5";
        cell.disabled = true;
    }

    checkPuzzleComplete();
}

// ========================
// EVENTS
// ========================

document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("cell") || e.target.disabled) return;

    const words = JSON.parse(e.target.dataset.words);
    if (words.length === 0) return;

    if (words.length > 1 && currentWord) {
        // Toggle direction
        currentWord =
            currentWord.direction === "across"
                ? words.find(w => w.direction === "down")
                : words.find(w => w.direction === "across");
    } else {
        currentWord = words[0];
    }

    highlightWord(currentWord);
    showClue(currentWord);

    e.target.focus();
});

document.addEventListener("input", (e) => {
    if (!e.target.classList.contains("cell")) return;
    if (!currentWord) return;

    e.target.value = e.target.value.toLowerCase();

    checkCurrentWord();
    checkAllWords(); 

    const next = getNextCell(e.target);
    if (next && !next.disabled) next.focus();
});

// ========================
// NAVIGATION
// ========================

function getNextCell(cell) {
    let r = parseInt(cell.dataset.row);
    let c = parseInt(cell.dataset.col);

    while (true) {
        if (currentWord.direction === "across") c++;
        else r++;

        const next = document.querySelector(
            `.cell[data-row='${r}'][data-col='${c}']`
        );

        // Stop if out of bounds
        if (!next) return null;

        // 🔥 Skip locked/disabled cells
        if (!next.disabled) return next;
    }
}

// ========================
// UI
// ========================

function highlightWord(word) {
    document.querySelectorAll(".cell").forEach(c => c.classList.remove("highlight"));

    for (let i = 0; i < word.word.length; i++) {
        const r = word.direction === "across" ? word.row : word.row + i;
        const c = word.direction === "across" ? word.col + i : word.col;

        const cell = document.querySelector(
            `.cell[data-row='${r}'][data-col='${c}']`
        );

        if (cell) cell.classList.add("highlight");
    }
}

function showClue(word) {
    document.getElementById("active-clue").textContent =
        `${word.direction.toUpperCase()}: ${word.clue}`;
}

function triggerFireworks() {
    const container = document.createElement("div");
    container.id = "fireworks";
    document.body.appendChild(container);

    for (let i = 0; i < 50; i++) {
        const spark = document.createElement("div");
        spark.className = "spark";
        spark.style.left = Math.random() * 100 + "vw";
        spark.style.top = Math.random() * 100 + "vh";
        container.appendChild(spark);
    }

    setTimeout(() => container.remove(), 2000);
}

// ========================
// INIT
// ========================

function initGame() {
    let grid = null;
    let attempts = 0;

    while (!grid && attempts < 100) {
        const selected = getRandomWords(WORDS);

        const result = generateCrossword(selected);

        if (result && placedWords.length >= 6) {
            grid = result;
        }

        attempts++;
    }

    // 🔥 FAILSAFE (guarantee something renders)
    if (!grid) {
        console.warn("Falling back to easy puzzle");

        const fallbackWords = WORDS.slice(0, 6); // guaranteed simple
        grid = generateFallbackCrossword(fallbackWords);
    }

    currentWord = null;
    renderGrid(grid);

    const clueBox = document.getElementById("active-clue");
    clueBox.classList.remove("alert-success");
    clueBox.classList.add("alert-primary");
    clueBox.textContent = "Select a word to begin";
}

initGame();
// =============================================
//  ROCK PAPER SCISSORS — GAME ENGINE
// =============================================

// --- Emoji Mappings ---
const EMOJIS = {
  rock: '🪨',
  paper: '📄',
  scissors: '✂️'
};

// --- Score State ---
let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0,
  ties: 0
};

// --- Match History ---
let matchHistory = JSON.parse(localStorage.getItem('matchHistory')) || [];

// --- DOM Elements ---
const playerEmojiEl = document.getElementById('player-emoji');
const computerEmojiEl = document.getElementById('computer-emoji');
const resultTextEl = document.getElementById('result-text');
const winsCountEl = document.getElementById('wins-count');
const tiesCountEl = document.getElementById('ties-count');
const lossesCountEl = document.getElementById('losses-count');
const vsBadgeEl = document.getElementById('vs-badge');
const historyListEl = document.getElementById('history-list');

// --- Initialize ---
updateScoreDisplay();
renderHistory();

// --- Main Game Function ---
function playGame(userMove) {
  // Normalize input
  userMove = userMove.toLowerCase();

  // Generate computer move
  const moves = ['rock', 'paper', 'scissors'];
  const computerMove = moves[Math.floor(Math.random() * 3)];

  // Determine result
  let result = '';
  if (userMove === computerMove) {
    result = 'tie';
    score.ties++;
  } else if (
    (userMove === 'rock' && computerMove === 'scissors') ||
    (userMove === 'paper' && computerMove === 'rock') ||
    (userMove === 'scissors' && computerMove === 'paper')
  ) {
    result = 'win';
    score.wins++;
  } else {
    result = 'lose';
    score.losses++;
  }

  // Save score
  localStorage.setItem('score', JSON.stringify(score));

  // Update battle arena
  updateBattleArena(userMove, computerMove, result);

  // Update score display with animation
  updateScoreDisplay(result);

  // Update result text
  updateResultText(result);

  // Add to history
  addToHistory(userMove, computerMove, result);

  // Trigger confetti on win
  if (result === 'win') {
    spawnConfetti();
  }
}

// --- Update Battle Arena ---
function updateBattleArena(userMove, computerMove, result) {
  // Animate emojis
  playerEmojiEl.textContent = EMOJIS[userMove];
  computerEmojiEl.textContent = EMOJIS[computerMove];

  // Pop animation
  playerEmojiEl.classList.remove('animate');
  computerEmojiEl.classList.remove('animate');
  vsBadgeEl.classList.remove('flash');

  // Trigger reflow to restart animation
  void playerEmojiEl.offsetWidth;

  playerEmojiEl.classList.add('animate');
  computerEmojiEl.classList.add('animate');
  vsBadgeEl.classList.add('flash');

  // Color the battle emoji borders based on result
  if (result === 'win') {
    playerEmojiEl.style.borderColor = 'rgba(34, 197, 94, 0.6)';
    computerEmojiEl.style.borderColor = 'rgba(239, 68, 68, 0.4)';
  } else if (result === 'lose') {
    playerEmojiEl.style.borderColor = 'rgba(239, 68, 68, 0.4)';
    computerEmojiEl.style.borderColor = 'rgba(34, 197, 94, 0.6)';
  } else {
    playerEmojiEl.style.borderColor = 'rgba(245, 158, 11, 0.5)';
    computerEmojiEl.style.borderColor = 'rgba(245, 158, 11, 0.5)';
  }
}

// --- Update Result Text ---
function updateResultText(result) {
  resultTextEl.className = 'result-text';

  // Trigger reflow
  void resultTextEl.offsetWidth;

  if (result === 'win') {
    resultTextEl.textContent = '🎉 You Win!';
    resultTextEl.classList.add('win');
  } else if (result === 'lose') {
    resultTextEl.textContent = '😔 You Lose!';
    resultTextEl.classList.add('lose');
  } else {
    resultTextEl.textContent = '🤝 It\'s a Tie!';
    resultTextEl.classList.add('tie');
  }
}

// --- Update Score Display ---
function updateScoreDisplay(changedResult) {
  winsCountEl.textContent = score.wins;
  tiesCountEl.textContent = score.ties;
  lossesCountEl.textContent = score.losses;

  // Pop animation on the changed score
  if (changedResult) {
    let targetEl;
    if (changedResult === 'win') targetEl = winsCountEl;
    else if (changedResult === 'lose') targetEl = lossesCountEl;
    else targetEl = tiesCountEl;

    targetEl.classList.remove('score-pop');
    void targetEl.offsetWidth;
    targetEl.classList.add('score-pop');
  }
}

// --- Add to History ---
function addToHistory(userMove, computerMove, result) {
  const entry = { userMove, computerMove, result, timestamp: Date.now() };
  matchHistory.unshift(entry);

  // Keep only last 20 entries
  if (matchHistory.length > 20) {
    matchHistory = matchHistory.slice(0, 20);
  }

  localStorage.setItem('matchHistory', JSON.stringify(matchHistory));
  renderHistory();
}

// --- Render History ---
function renderHistory() {
  if (matchHistory.length === 0) {
    historyListEl.innerHTML = '<p class="history-empty">No matches yet. Start playing!</p>';
    return;
  }

  historyListEl.innerHTML = matchHistory.map((entry, index) => {
    const resultLabel = entry.result === 'win' ? 'Win' : entry.result === 'lose' ? 'Loss' : 'Tie';
    const userEmoji = EMOJIS[entry.userMove] || '❓';
    const compEmoji = EMOJIS[entry.computerMove] || '❓';

    return `
      <div class="history-item" style="animation-delay: ${index * 0.03}s">
        <span class="history-moves">${userEmoji} vs ${compEmoji}</span>
        <span class="history-result ${entry.result}">${resultLabel}</span>
      </div>
    `;
  }).join('');
}

// --- Reset Game ---
function resetGame() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  matchHistory = [];

  localStorage.setItem('score', JSON.stringify(score));
  localStorage.setItem('matchHistory', JSON.stringify(matchHistory));

  updateScoreDisplay();
  renderHistory();

  // Reset battle arena
  playerEmojiEl.textContent = '❓';
  computerEmojiEl.textContent = '❓';
  playerEmojiEl.style.borderColor = '';
  computerEmojiEl.style.borderColor = '';

  resultTextEl.className = 'result-text';
  resultTextEl.textContent = 'Pick a move to start!';

  // Animate reset
  playerEmojiEl.classList.add('animate');
  computerEmojiEl.classList.add('animate');
}

// --- Confetti Effect ---
function spawnConfetti() {
  const colors = ['#a855f7', '#3b82f6', '#06b6d4', '#22c55e', '#f59e0b', '#ef4444', '#ec4899'];
  const count = 30;

  for (let i = 0; i < count; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = Math.random() * 30 + 'vh';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.width = (Math.random() * 6 + 4) + 'px';
    confetti.style.height = (Math.random() * 6 + 4) + 'px';
    confetti.style.animationDuration = (Math.random() * 1 + 1) + 's';
    confetti.style.animationDelay = (Math.random() * 0.5) + 's';
    document.body.appendChild(confetti);

    // Remove after animation
    setTimeout(() => confetti.remove(), 2500);
  }
}

// --- Keyboard Support ---
document.addEventListener('keydown', (e) => {
  switch (e.key.toLowerCase()) {
    case 'r': playGame('rock'); break;
    case 'p': playGame('paper'); break;
    case 's': playGame('scissors'); break;
  }
});
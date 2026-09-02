// =============================================
// 1. DATA HIRAGANA DAN KATAKANA
// =============================================
const hiraganaKatakana = [
    // Hiragana dasar
    { character: 'あ', romaji: 'a' }, { character: 'い', romaji: 'i' }, { character: 'う', romaji: 'u' }, { character: 'え', romaji: 'e' }, { character: 'お', romaji: 'o' },
    { character: 'か', romaji: 'ka' }, { character: 'き', romaji: 'ki' }, { character: 'く', romaji: 'ku' }, { character: 'け', romaji: 'ke' }, { character: 'こ', romaji: 'ko' },
    { character: 'さ', romaji: 'sa' }, { character: 'し', romaji: 'shi' }, { character: 'す', romaji: 'su' }, { character: 'せ', romaji: 'se' }, { character: 'そ', romaji: 'so' },
    { character: 'た', romaji: 'ta' }, { character: 'ち', romaji: 'chi' }, { character: 'つ', romaji: 'tsu' }, { character: 'て', romaji: 'te' }, { character: 'と', romaji: 'to' },
    { character: 'な', romaji: 'na' }, { character: 'に', romaji: 'ni' }, { character: 'ぬ', romaji: 'nu' }, { character: 'ね', romaji: 'ne' }, { character: 'の', romaji: 'no' },
    { character: 'は', romaji: 'ha' }, { character: 'ひ', romaji: 'hi' }, { character: 'ふ', romaji: 'fu' }, { character: 'へ', romaji: 'he' }, { character: 'ほ', romaji: 'ho' },
    { character: 'ま', romaji: 'ma' }, { character: 'み', romaji: 'mi' }, { character: 'む', romaji: 'mu' }, { character: 'め', romaji: 'me' }, { character: 'も', romaji: 'mo' },
    { character: 'や', romaji: 'ya' }, { character: 'ゆ', romaji: 'yu' }, { character: 'よ', romaji: 'yo' },
    { character: 'ら', romaji: 'ra' }, { character: 'り', romaji: 'ri' }, { character: 'る', romaji: 'ru' }, { character: 'れ', romaji: 're' }, { character: 'ろ', romaji: 'ro' },
    { character: 'わ', romaji: 'wa' }, { character: 'を', romaji: 'wo' }, { character: 'ん', romaji: 'n' },
    // Katakana dasar
    { character: 'ア', romaji: 'a' }, { character: 'イ', romaji: 'i' }, { character: 'ウ', romaji: 'u' }, { character: 'エ', romaji: 'e' }, { character: 'オ', romaji: 'o' },
    { character: 'カ', romaji: 'ka' }, { character: 'キ', romaji: 'ki' }, { character: 'ク', romaji: 'ku' }, { character: 'ケ', romaji: 'ke' }, { character: 'コ', romaji: 'ko' },
    { character: 'サ', romaji: 'sa' }, { character: 'シ', romaji: 'shi' }, { character: 'ス', romaji: 'su' }, { character: 'セ', romaji: 'se' }, { character: 'ソ', romaji: 'so' },
    { character: 'タ', romaji: 'ta' }, { character: 'チ', romaji: 'chi' }, { character: 'ツ', romaji: 'tsu' }, { character: 'テ', romaji: 'te' }, { character: 'ト', romaji: 'to' },
    { character: 'ナ', romaji: 'na' }, { character: 'ニ', romaji: 'ni' }, { character: 'ヌ', romaji: 'nu' }, { character: 'ネ', romaji: 'ne' }, { character: 'ノ', romaji: 'no' },
    { character: 'ハ', romaji: 'ha' }, { character: 'ヒ', romaji: 'hi' }, { character: 'フ', romaji: 'fu' }, { character: 'ヘ', romaji: 'he' }, { character: 'ホ', romaji: 'ho' },
    { character: 'マ', romaji: 'ma' }, { character: 'ミ', romaji: 'mi' }, { character: 'ム', romaji: 'mu' }, { character: 'メ', romaji: 'me' }, { character: 'モ', romaji: 'mo' },
    { character: 'ヤ', romaji: 'ya' }, { character: 'ユ', romaji: 'yu' }, { character: 'ヨ', romaji: 'yo' },
    { character: 'ラ', romaji: 'ra' }, { character: 'リ', romaji: 'ri' }, { character: 'ル', romaji: 'ru' }, { character: 'レ', romaji: 're' }, { character: 'ロ', romaji: 'ro' },
    { character: 'ワ', romaji: 'wa' }, { character: 'ヲ', romaji: 'wo' }, { character: 'ン', romaji: 'n' },
    // Dakuten
    { character: 'が', romaji: 'ga' }, { character: 'ぎ', romaji: 'gi' }, { character: 'ぐ', romaji: 'gu' }, { character: 'げ', romaji: 'ge' }, { character: 'ご', romaji: 'go' },
    { character: 'ざ', romaji: 'za' }, { character: 'じ', romaji: 'ji' }, { character: 'ず', romaji: 'zu' }, { character: 'ぜ', romaji: 'ze' }, { character: 'ぞ', romaji: 'zo' },
    { character: 'だ', romaji: 'da' }, { character: 'ぢ', romaji: 'ji' }, { character: 'づ', romaji: 'zu' }, { character: 'で', romaji: 'de' }, { character: 'ど', romaji: 'do' },
    { character: 'ば', romaji: 'ba' }, { character: 'び', romaji: 'bi' }, { character: 'ぶ', romaji: 'bu' }, { character: 'べ', romaji: 'be' }, { character: 'ぼ', romaji: 'bo' },
    { character: 'ぱ', romaji: 'pa' }, { character: 'ぴ', romaji: 'pi' }, { character: 'ぷ', romaji: 'pu' }, { character: 'ぺ', romaji: 'pe' }, { character: 'ぽ', romaji: 'po' },
    // Youon
    { character: 'きゃ', romaji: 'kya' }, { character: 'きゅ', romaji: 'kyu' }, { character: 'きょ', romaji: 'kyo' },
    { character: 'しゃ', romaji: 'sha' }, { character: 'しゅ', romaji: 'shu' }, { character: 'しょ', romaji: 'sho' },
    { character: 'ちゃ', romaji: 'cha' }, { character: 'ちゅ', romaji: 'chu' }, { character: 'ちょ', romaji: 'cho' },
    { character: 'にゃ', romaji: 'nya' }, { character: 'にゅ', romaji: 'nyu' }, { character: 'にょ', romaji: 'nyo' },
    { character: 'ひゃ', romaji: 'hya' }, { character: 'ひゅ', romaji: 'hyu' }, { character: 'ひょ', romaji: 'hyo' },
    { character: 'みゃ', romaji: 'mya' }, { character: 'みゅ', romaji: 'myu' }, { character: 'みょ', romaji: 'myo' },
    { character: 'りゃ', romaji: 'rya' }, { character: 'りゅ', romaji: 'ryu' }, { character: 'りょ', romaji: 'ryo' },
    { character: 'ぎゃ', romaji: 'gya' }, { character: 'ぎゅ', romaji: 'gyu' }, { character: 'ぎょ', romaji: 'gyo' },
    { character: 'じゃ', romaji: 'ja' }, { character: 'じゅ', romaji: 'ju' }, { character: 'じょ', romaji: 'jo' },
    { character: 'びゃ', romaji: 'bya' }, { character: 'びゅ', romaji: 'byu' }, { character: 'びょ', romaji: 'byo' },
    { character: 'ぴゃ', romaji: 'pya' }, { character: 'ぴゅ', romaji: 'pyu' }, { character: 'ぴょ', romaji: 'pyo' },
];

// =============================================
// 2. VARIABEL STATE GAME
// =============================================
let exp = 0;
let level = 1;
let lives = 5;
let currentQuestion = null;
let nextLevelExp = 50;
let expIncrement = 70;
let gameOver = false;
let healingInterval = null;
let healingCountdown = null;
let remainingTime = 60;
let questionTimer = null;
let questionTimeLimit = 10;
let questionTimeLeft = questionTimeLimit;
let totalCorrect = 0;

// Audio Context
let audioContext;
try {
    audioContext = new (window.AudioContext || window.webkitAudioContext)();
} catch (e) {
    console.log('AudioContext tidak didukung');
}

// =============================================
// 3. ELEMEN DOM
// =============================================
function getElement(id) {
    return document.getElementById(id);
}

const characterContainer = getElement('character-display');
const optionsContainer = getElement('options-container');
const resultContainer = getElement('result');
const livesContainer = getElement('lives-container');
const expContainer = getElement('exp');
const levelContainer = getElement('level');
const correctContainer = getElement('correct');
const restartButton = getElement('restart-button');
const startScreen = getElement('start-screen');
const startButton = getElement('start-button');
const notificationContainer = getElement('notification');
const timerContainer = getElement('timer');
const healingTimer = getElement('healing-timer');
const healingCount = getElement('healing-count');
const gameContainer = getElement('game-container');
const btnHomeIndex = getElement('btn-home-index');
const btnHomeHirakana = getElement('btn-home-hirakana');
const btnStartHome = getElement('btn-start-home');
const btnStartHirakana = getElement('btn-start-hirakana');

// =============================================
// 4. FUNGSI SOUND EFFECT
// =============================================
function playStartSound() {
    if (!audioContext) return;
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(880, audioContext.currentTime + 0.3);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Error playing sound:', e);
    }
}

function playCorrectSound() {
    if (!audioContext) return;
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(523.25, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(659.25, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(783.99, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log('Error playing sound:', e);
    }
}

function playWrongSound() {
    if (!audioContext) return;
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(110, audioContext.currentTime + 0.5);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Error playing sound:', e);
    }
}

function playLevelUpSound() {
    if (!audioContext) return;
    try {
        const oscillator1 = audioContext.createOscillator();
        const oscillator2 = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator1.type = 'square';
        oscillator2.type = 'sine';
        oscillator1.frequency.setValueAtTime(523.25, audioContext.currentTime);
        oscillator2.frequency.setValueAtTime(783.99, audioContext.currentTime);
        oscillator1.frequency.exponentialRampToValueAtTime(1046.50, audioContext.currentTime + 0.5);
        oscillator2.frequency.exponentialRampToValueAtTime(1567.98, audioContext.currentTime + 0.5);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.8);
        oscillator1.connect(gainNode);
        oscillator2.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator1.start();
        oscillator2.start();
        oscillator1.stop(audioContext.currentTime + 0.8);
        oscillator2.stop(audioContext.currentTime + 0.8);
    } catch (e) {
        console.log('Error playing sound:', e);
    }
}

function playGameOverSound() {
    if (!audioContext) return;
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(392, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(349.23, audioContext.currentTime + 0.2);
        oscillator.frequency.setValueAtTime(293.66, audioContext.currentTime + 0.4);
        oscillator.frequency.setValueAtTime(261.63, audioContext.currentTime + 0.6);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 1);
    } catch (e) {
        console.log('Error playing sound:', e);
    }
}

function playHealSound() {
    if (!audioContext) return;
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(784, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(1046.50, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.3);
    } catch (e) {
        console.log('Error playing sound:', e);
    }
}

function playTimeUpSound() {
    if (!audioContext) return;
    try {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        oscillator.type = 'square';
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime);
        oscillator.frequency.setValueAtTime(165, audioContext.currentTime + 0.1);
        oscillator.frequency.setValueAtTime(110, audioContext.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.5);
    } catch (e) {
        console.log('Error playing sound:', e);
    }
}

// =============================================
// 5. FUNGSI UI
// =============================================

function tampilkanNotifikasi(pesan, icon = '💡', durasi = 1500) {
    if (notificationContainer) {
        notificationContainer.innerHTML = `
            <span class="notif-icon">${icon}</span>
            <span class="notif-text">${pesan}</span>
        `;
        notificationContainer.classList.add('show');
        setTimeout(() => {
            notificationContainer.classList.remove('show');
        }, durasi);
    }
}

function updateLives() {
    if (livesContainer) {
        let hearts = '';
        for (let i = 0; i < 5; i++) {
            if (i < lives) {
                hearts += '<span>❤️</span>';
            } else {
                hearts += '<span class="lost">❤️</span>';
            }
        }
        livesContainer.innerHTML = hearts;
    }
}

function updateExp() {
    if (expContainer) expContainer.textContent = exp;
    if (levelContainer) levelContainer.textContent = level;
}

function updateCorrect() {
    if (correctContainer) correctContainer.textContent = totalCorrect;
}

function updateTimerDisplay(timeLeft) {
    if (timerContainer) {
        timerContainer.textContent = timeLeft;
        if (timeLeft <= 3) {
            timerContainer.classList.add('warning');
        } else {
            timerContainer.classList.remove('warning');
        }
    }
}

function updateHealingDisplay() {
    if (lives < 5 && remainingTime > 0) {
        if (healingTimer) {
            healingTimer.style.display = 'inline-flex';
        }
        if (healingCount) {
            healingCount.textContent = remainingTime;
        }
    } else {
        if (healingTimer) {
            healingTimer.style.display = 'none';
        }
    }
}

// =============================================
// 6. FUNGSI GAME
// =============================================

function startQuestionTimer() {
    clearInterval(questionTimer);
    questionTimeLeft = questionTimeLimit;
    updateTimerDisplay(questionTimeLeft);

    questionTimer = setInterval(() => {
        questionTimeLeft--;
        updateTimerDisplay(questionTimeLeft);

        if (questionTimeLeft <= 0) {
            clearInterval(questionTimer);
            handleTimeUp();
        }
    }, 1000);
}

function handleTimeUp() {
    if (gameOver) return;
    playTimeUpSound();
    tampilkanNotifikasi(`Waktu habis! Jawaban: ${currentQuestion.romaji}`, '⏰');
    
    // Tampilkan jawaban benar di character container
    if (characterContainer) {
        characterContainer.classList.add('wrong');
        setTimeout(() => characterContainer.classList.remove('wrong'), 500);
    }
    
    lives--;
    updateLives();

    if (lives > 0 && lives < 5) {
        tampilkanNotifikasi(`Nyawa -1. Pulih dalam 60 detik`, '💔');
        startHealingTimer();
    }

    if (lives <= 0) {
        endGame();
        return;
    }

    setTimeout(() => nextQuestion(), 1000);
}

function startHealingTimer() {
    if (lives >= 5) return;
    
    clearHealingTimers();
    remainingTime = 60;
    updateHealingDisplay();

    healingCountdown = setInterval(() => {
        remainingTime--;
        updateHealingDisplay();

        if (remainingTime <= 0) {
            remainingTime = 60;
        }
    }, 1000);

    healingInterval = setInterval(() => {
        if (lives < 5) {
            playHealSound();
            lives++;
            updateLives();
            tampilkanNotifikasi(`Nyawa +1! Total: ${lives}`, '💚');
            updateHealingDisplay();
            
            if (lives >= 5) {
                clearHealingTimers();
                updateHealingDisplay();
            }
        }
    }, 60000);
}

function clearHealingTimers() {
    if (healingInterval) {
        clearInterval(healingInterval);
        healingInterval = null;
    }
    if (healingCountdown) {
        clearInterval(healingCountdown);
        healingCountdown = null;
    }
    remainingTime = 60;
    updateHealingDisplay();
}

function nextQuestion() {
    if (gameOver) return;
    clearInterval(questionTimer);

    // Ambil pertanyaan acak
    const randomIndex = Math.floor(Math.random() * hiraganaKatakana.length);
    currentQuestion = hiraganaKatakana[randomIndex];
    
    if (characterContainer) {
        characterContainer.textContent = currentQuestion.character;
        characterContainer.className = 'character-container';
    }

    const correctAnswer = currentQuestion.romaji;
    const options = [correctAnswer];

    while (options.length < 4) {
        const randomOption = hiraganaKatakana[Math.floor(Math.random() * hiraganaKatakana.length)].romaji;
        if (!options.includes(randomOption)) {
            options.push(randomOption);
        }
    }

    // Acak urutan
    options.sort(() => Math.random() - 0.5);

    if (optionsContainer) {
        optionsContainer.innerHTML = '';
        options.forEach(option => {
            const button = document.createElement('button');
            button.textContent = option;
            button.classList.add('option');
            button.addEventListener('click', () => checkAnswer(option, button));
            optionsContainer.appendChild(button);
        });
    }

    if (resultContainer) {
        resultContainer.textContent = '';
        resultContainer.className = 'result';
    }

    startQuestionTimer();
}

function checkAnswer(selected, buttonElement) {
    if (gameOver) return;
    clearInterval(questionTimer);

    const isCorrect = selected === currentQuestion.romaji;
    const allButtons = document.querySelectorAll('.option');
    
    // Disable semua tombol
    allButtons.forEach(btn => btn.disabled = true);

    if (isCorrect) {
        playCorrectSound();
        if (resultContainer) {
            resultContainer.textContent = '✅ Benar!';
            resultContainer.className = 'result correct';
        }
        if (characterContainer) {
            characterContainer.classList.add('correct');
            setTimeout(() => characterContainer.classList.remove('correct'), 500);
        }
        if (buttonElement) {
            buttonElement.classList.add('correct');
        }
        
        exp += 10;
        totalCorrect++;
        updateExp();
        updateCorrect();

        // Cek level up
        if (exp >= nextLevelExp) {
            playLevelUpSound();
            level++;
            expIncrement += 20;
            nextLevelExp += expIncrement;
            tampilkanNotifikasi(`Level Up! Sekarang Level ${level}!`, '🎉', 2000);
        }
    } else {
        playWrongSound();
        if (resultContainer) {
            resultContainer.textContent = `❌ Salah! Jawaban: ${currentQuestion.romaji}`;
            resultContainer.className = 'result wrong';
        }
        if (characterContainer) {
            characterContainer.classList.add('wrong');
            setTimeout(() => characterContainer.classList.remove('wrong'), 500);
        }
        if (buttonElement) {
            buttonElement.classList.add('wrong');
        }
        
        // Tampilkan jawaban benar
        allButtons.forEach(btn => {
            if (btn.textContent === currentQuestion.romaji) {
                btn.classList.add('correct');
            }
        });

        lives--;
        updateLives();

        if (lives < 5) {
            startHealingTimer();
        }

        if (lives <= 0) {
            setTimeout(() => endGame(), 800);
            return;
        }
    }

    setTimeout(() => {
        if (!gameOver) {
            nextQuestion();
        }
    }, 1200);
}

function endGame() {
    gameOver = true;
    playGameOverSound();
    clearInterval(questionTimer);
    clearHealingTimers();
    
    if (characterContainer) {
        characterContainer.textContent = '💔';
    }
    if (optionsContainer) {
        optionsContainer.innerHTML = '';
    }
    if (resultContainer) {
        resultContainer.textContent = '💀 Game Over!';
        resultContainer.className = 'result wrong';
    }
    
    tampilkanNotifikasi(`Game Over! EXP: ${exp} | Level: ${level}`, '💀', 3000);
}

function startGame() {
    // Reset state
    exp = 0;
    level = 1;
    lives = 5;
    gameOver = false;
    totalCorrect = 0;
    nextLevelExp = 50;
    expIncrement = 70;
    clearHealingTimers();
    clearInterval(questionTimer);
    
    // Sembunyikan start screen
    if (startScreen) {
        startScreen.classList.add('hidden');
        setTimeout(() => {
            startScreen.style.display = 'none';
        }, 500);
    }

    // Tampilkan game container
    if (gameContainer) {
        gameContainer.classList.add('show');
    }

    playStartSound();
    updateLives();
    updateExp();
    updateCorrect();
    updateHealingDisplay();
    nextQuestion();
}

function restartGame() {
    // Reset state
    exp = 0;
    level = 1;
    lives = 5;
    gameOver = false;
    totalCorrect = 0;
    nextLevelExp = 50;
    expIncrement = 70;
    clearHealingTimers();
    clearInterval(questionTimer);
    
    updateLives();
    updateExp();
    updateCorrect();
    updateHealingDisplay();
    
    tampilkanNotifikasi('Game di-restart!', '🔄', 1000);
    nextQuestion();
}

// =============================================
// 7. FUNGSI UNTUK HENTIKAN SEMUA PROSES
// =============================================
function stopAllProcesses() {
    // Hentikan semua timer
    clearInterval(questionTimer);
    clearInterval(healingInterval);
    clearInterval(healingCountdown);
    
    // Set game over ke true
    gameOver = true;
    
    // Sembunyikan notifikasi
    if (notificationContainer) {
        notificationContainer.classList.remove('show');
        notificationContainer.innerHTML = '';
    }
    
    // Hentikan audio
    if (audioContext) {
        try {
            audioContext.close();
        } catch (e) {
            // Audio context sudah ditutup
        }
    }
}

// =============================================
// 8. EVENT LISTENERS
// =============================================

if (startButton) {
    startButton.addEventListener('click', () => {
        if (audioContext && audioContext.state === 'suspended') {
            audioContext.resume();
        }
        startGame();
    });
}

if (restartButton) {
    restartButton.addEventListener('click', restartGame);
}

// Event listener untuk tombol Home di start screen (ke index.html)
if (btnStartHome) {
    btnStartHome.addEventListener('click', function(e) {
        // Biarkan link bekerja secara normal ke index.html
    });
}

// Event listener untuk tombol Hirakana di start screen (ke home.html)
if (btnStartHirakana) {
    btnStartHirakana.addEventListener('click', function(e) {
        // Biarkan link bekerja secara normal ke home.html
    });
}

// Event listener untuk tombol Home ke index.html
if (btnHomeIndex) {
    btnHomeIndex.addEventListener('click', function(e) {
        // Hentikan semua proses sebelum navigasi
        stopAllProcesses();
        // Biarkan link bekerja secara normal
    });
}

// Event listener untuk tombol Home Hirakana ke home.html
if (btnHomeHirakana) {
    btnHomeHirakana.addEventListener('click', function(e) {
        // Hentikan semua proses sebelum navigasi
        stopAllProcesses();
        // Biarkan link bekerja secara normal
    });
}

// =============================================
// 9. INISIALISASI
// =============================================

// Sembunyikan game container awal
if (gameContainer) {
    gameContainer.classList.remove('show');
}

console.log('🎮 Game Tebak Hiragana & Katakana siap dimainkan!');
console.log(`📚 Total karakter: ${hiraganaKatakana.length}`);
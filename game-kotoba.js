// =============================================
// 1. DATA KOSAKATA - DIAMBIL DARI kotoba.js
// =============================================
// Data kosakata diambil dari variabel global kotobaData
// yang sudah didefinisikan di file kotoba.js
// Pastikan file kotoba.js di-load TERLEBIH DAHULU

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
const expBarFill = getElement('exp-bar-fill');
const expProgressText = getElement('exp-progress-text');

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
                hearts += '❤️';
            } else {
                hearts += '🖤';
            }
        }
        livesContainer.textContent = hearts;
    }
}

function updateExp() {
    if (expContainer) expContainer.textContent = exp;
    if (levelContainer) levelContainer.textContent = level;
    
    // Update EXP bar
    if (expBarFill && expProgressText) {
        const progress = Math.min((exp / nextLevelExp) * 100, 100);
        expBarFill.style.width = progress + '%';
        expProgressText.textContent = `${exp} / ${nextLevelExp}`;
    }
}

function updateCorrect() {
    if (correctContainer) correctContainer.textContent = totalCorrect;
}

function updateTimerDisplay(timeLeft) {
    if (timerContainer) {
        const numberSpan = timerContainer.querySelector('.timer-number');
        if (numberSpan) {
            numberSpan.textContent = timeLeft;
        }
        if (timeLeft <= 3) {
            timerContainer.classList.add('warning');
        } else {
            timerContainer.classList.remove('warning');
        }
    }
}

function updateHealingDisplay() {
    if (lives < 5 && remainingTime > 0 && !gameOver) {
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
    tampilkanNotifikasi(`Waktu habis! Jawaban: ${currentQuestion.meaning}`, '⏰', 1500);
    
    if (characterContainer) {
        characterContainer.classList.add('wrong');
        setTimeout(() => characterContainer.classList.remove('wrong'), 500);
    }
    
    lives--;
    updateLives();

    if (lives > 0 && lives < 5) {
        tampilkanNotifikasi(`Nyawa -1. Pulih dalam 60 detik`, '💔', 1500);
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
            tampilkanNotifikasi(`Nyawa +1! Total: ${lives}`, '💚', 1500);
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

    // CEK APAKAH DATA KOSAKATA TERSEDIA
    if (typeof kotobaData === 'undefined') {
        console.error('ERROR: Data kotobaData tidak ditemukan! Pastikan file kotoba.js di-load terlebih dahulu.');
        if (characterContainer) {
            characterContainer.textContent = '❌ Error: Data tidak ditemukan!';
        }
        return;
    }

    // Ambil pertanyaan acak dari kotobaData
    const randomIndex = Math.floor(Math.random() * kotobaData.length);
    currentQuestion = kotobaData[randomIndex];
    
    if (characterContainer) {
        characterContainer.textContent = currentQuestion.hiragana;
        characterContainer.className = 'character-container';
    }

    const correctAnswer = currentQuestion.meaning;
    const options = [correctAnswer];

    while (options.length < 4) {
        const randomOption = kotobaData[Math.floor(Math.random() * kotobaData.length)].meaning;
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

    const isCorrect = selected === currentQuestion.meaning;
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
            updateExp();
        }
    } else {
        playWrongSound();
        if (resultContainer) {
            resultContainer.textContent = `❌ Salah! Jawaban: ${currentQuestion.meaning}`;
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
            if (btn.textContent === currentQuestion.meaning) {
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
    clearInterval(questionTimer);
    clearInterval(healingInterval);
    clearInterval(healingCountdown);
    gameOver = true;
    
    if (notificationContainer) {
        notificationContainer.classList.remove('show');
        notificationContainer.innerHTML = '';
    }
    
    if (audioContext) {
        try {
            audioContext.close();
        } catch (e) {}
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

// =============================================
// 9. INISIALISASI
// =============================================

// Sembunyikan game container awal
if (gameContainer) {
    gameContainer.classList.remove('show');
}

// Cek apakah data kotobaData tersedia
if (typeof kotobaData !== 'undefined') {
    console.log('🎮 Game Tebak Kosakata siap dimainkan!');
    console.log(`📚 Total kosakata: ${kotobaData.length}`);
} else {
    console.error('❌ ERROR: Data kotobaData tidak ditemukan!');
    console.log('📌 Pastikan file kotoba.js di-load TERLEBIH DAHULU sebelum game-kotoba.js');
}
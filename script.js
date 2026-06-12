function toggleMenu() {

    document
        .getElementById("navMenu")
        .classList.toggle("show");

}

function startWebsite() {

    checkUsername();

    updateStreak();

    loadDashboard();

}

function checkUsername() {

    const username =
        localStorage.getItem(
            "username"
        );

    if (username) {

        const popup =
            document.getElementById(
                "loginPopup"
            );

        if (popup) {

            popup.style.display =
                "none";

        }

        const welcome =
            document.getElementById(
                "welcomeText"
            );

        if (welcome) {

            welcome.innerHTML =

                `Halo, ${username} 👋`;

        }

    }

}

function saveUsername() {

    const username =
        document.getElementById(
            "usernameInput"
        ).value;

    if (username === "") {

        alert(
            "Masukkan nama dulu"
        );

        return;

    }

    localStorage.setItem(
        "username",
        username
    );

    location.reload();

}

function updateStreak() {

    const today =
        new Date().toDateString();

    const lastLogin =
        localStorage.getItem(
            "lastLogin"
        );

    let streak =
        parseInt(
            localStorage.getItem(
                "streak"
            )
        ) || 0;

    if (lastLogin !== today) {

        streak++;

        localStorage.setItem(
            "streak",
            streak
        );

        localStorage.setItem(
            "lastLogin",
            today
        );

    }

    const streakText =
        document.getElementById(
            "streakText"
        );

    if (streakText) {

        streakText.innerHTML =
            streak;

    }

}

function getRank(xp) {

    if (xp >= 250) {

        return "R3 Expert";

    }

    if (xp >= 120) {

        return "Vector Master";

    }

    if (xp >= 50) {

        return "Explorer";

    }

    return "Beginner";

}

function loadDashboard() {

    const xp =
        parseInt(
            localStorage.getItem(
                "xp"
            )
        ) || 0;

    const selesai =
        parseInt(
            localStorage.getItem(
                "selesai"
            )
        ) || 0;

    const rank =
        getRank(xp);

    const xpBox =
        document.getElementById(
            "dashboardXP"
        );

    const quizBox =
        document.getElementById(
            "dashboardQuiz"
        );

    const rankBox =
        document.getElementById(
            "dashboardRank"
        );

    if (xpBox) {

        xpBox.innerHTML = xp;

    }

    if (quizBox) {

        quizBox.innerHTML = selesai;

    }

    if (rankBox) {

        rankBox.innerHTML = rank;

    }

}

function hitungDot() {

    const ax =
        parseFloat(
            document.getElementById(
                "ax"
            ).value
        );

    const ay =
        parseFloat(
            document.getElementById(
                "ay"
            ).value
        );

    const bx =
        parseFloat(
            document.getElementById(
                "bx"
            ).value
        );

    const by =
        parseFloat(
            document.getElementById(
                "by"
            ).value
        );

    if (

        isNaN(ax) ||
        isNaN(ay) ||
        isNaN(bx) ||
        isNaN(by)

    ) {

        document.getElementById(
            "hasil"
        ).innerHTML =

            `
<div class="feedback-card">

Masukkan semua nilai vektor.

</div>
`;

        return;

    }

    const dot =
        (ax * bx) + (ay * by);

    const panjangA =
        Math.sqrt(
            (ax * ax) + (ay * ay)
        );

    const panjangB =
        Math.sqrt(
            (bx * bx) + (by * by)
        );

    const sudut =
        Math.acos(
            dot / (panjangA * panjangB)
        ) * (180 / Math.PI);

    document.getElementById(
        "hasil"
    ).innerHTML =

        `
<div class="feedback-card">

<h3>
Hasil Perhitungan
</h3>

<br>

<p>
Dot Product:
<b>${dot}</b>
</p>

<br>

<p>
Panjang Vektor A:
<b>${panjangA.toFixed(2)}</b>
</p>

<br>

<p>
Panjang Vektor B:
<b>${panjangB.toFixed(2)}</b>
</p>

<br>

<p>
Sudut Antar Vektor:
<b>${sudut.toFixed(2)}°</b>
</p>

</div>
`;

}

const easyQuestions = [

    {
        question:
            "Vektor adalah besaran yang memiliki...",

        options: [
            "Hanya besar",
            "Hanya arah",
            "Besar dan arah",
            "Warna"
        ],

        answer: 2,

        explanation:
            "Vektor memiliki besar dan arah."

    },

    {
        question:
            "Panjang vektor (3,4) adalah...",

        options: [
            "4",
            "5",
            "6",
            "7"
        ],

        answer: 1,

        explanation:
            "√(3²+4²)=5"

    },

    {
        question:
            "Hasil dari (2,3)+(1,4) adalah...",

        options: [
            "(3,7)",
            "(2,7)",
            "(1,1)",
            "(4,4)"
        ],

        answer: 0,

        explanation:
            "Jumlahkan komponen yang bersesuaian."

    },

    {
        question:
            "Vektor biasanya digambarkan dengan...",

        options: [
            "Segitiga",
            "Panah",
            "Kotak",
            "Kurva"
        ],

        answer: 1,

        explanation:
            "Panah menunjukkan arah vektor."

    },

    {
        question:
            "Ruang R3 memiliki ... sumbu.",

        options: [
            "1",
            "2",
            "3",
            "4"
        ],

        answer: 2,

        explanation:
            "R3 memiliki sumbu x,y,z."

    },

    {
        question:
            "Perkalian 2(4,-2) adalah...",

        options: [
            "(8,-4)",
            "(2,-4)",
            "(6,-2)",
            "(4,-2)"
        ],

        answer: 0,

        explanation:
            "Semua komponen dikali 2."

    },

    {
        question:
            "u+v=v+u disebut sifat...",

        options: [
            "Asosiatif",
            "Komutatif",
            "Distributif",
            "Linear"
        ],

        answer: 1,

        explanation:
            "Urutan penjumlahan tidak memengaruhi hasil."

    }

];

const mediumQuestions = [

    {
        question:
            "Dot product dari (2,3) • (1,4) adalah...",

        options: [
            "10",
            "12",
            "14",
            "16"
        ],

        answer: 2,

        explanation:
            "(2×1)+(3×4)=14"

    },

    {
        question:
            "Jika dua vektor tegak lurus maka dot product bernilai...",

        options: [
            "1",
            "0",
            "-1",
            "90"
        ],

        answer: 1,

        explanation:
            "Vektor tegak lurus memiliki dot product 0."

    },

    {
        question:
            "Proyeksi digunakan untuk...",

        options: [
            "Menggambar lingkaran",
            "Mencari bayangan vektor",
            "Mencari luas",
            "Mencari volume"
        ],

        answer: 1,

        explanation:
            "Proyeksi menunjukkan pengaruh suatu vektor terhadap vektor lain."

    },

    {
        question:
            "Jika a=(1,2,2), maka |a| adalah...",

        options: [
            "2",
            "3",
            "4",
            "5"
        ],

        answer: 1,

        explanation:
            "√(1²+2²+2²)=3"

    },

    {
        question:
            "Cos θ digunakan untuk mencari...",

        options: [
            "Panjang",
            "Sudut",
            "Luas",
            "Volume"
        ],

        answer: 1,

        explanation:
            "Cos θ digunakan dalam hubungan sudut antar vektor."

    },

    {
        question:
            "Dot product digunakan untuk mencari...",

        options: [
            "Sudut antar vektor",
            "Warna vektor",
            "Posisi vektor",
            "Kecepatan cahaya"
        ],

        answer: 0,

        explanation:
            "Dot product membantu menentukan sudut antar vektor."

    },

    {
        question:
            "Jika cos θ semakin besar maka sudut semakin...",

        options: [
            "Besar",
            "Kecil",
            "Tetap",
            "Tidak berubah"
        ],

        answer: 1,

        explanation:
            "Semakin besar cos θ maka sudut semakin kecil."

    }

];

const hardQuestions = [

    {
        question:
            "Ruang R3 memiliki dimensi...",

        options: [
            "1",
            "2",
            "3",
            "4"
        ],

        answer: 2,

        explanation:
            "R3 adalah ruang tiga dimensi."

    },

    {
        question:
            "Persamaan garis R3 membutuhkan...",

        options: [
            "1 titik",
            "1 titik dan arah",
            "2 lingkaran",
            "1 bidang"
        ],

        answer: 1,

        explanation:
            "Garis dibentuk oleh titik dan vektor arah."

    },

    {
        question:
            "Bentuk umum bidang adalah...",

        options: [
            "ax+by=d",
            "ax+by+cz=d",
            "x+y=z",
            "x²+y²"
        ],

        answer: 1,

        explanation:
            "Persamaan bidang di R3 berbentuk ax+by+cz=d"

    },

    {
        question:
            "Vektor normal adalah vektor yang...",

        options: [
            "Sejajar bidang",
            "Tegak lurus bidang",
            "Berada di bidang",
            "Memotong garis"
        ],

        answer: 1,

        explanation:
            "Vektor normal tegak lurus terhadap bidang."

    },

    {
        question:
            "Hubungan garis dan bidang dapat berupa...",

        options: [
            "Sejajar",
            "Memotong",
            "Tegak lurus",
            "Semua benar"
        ],

        answer: 3,

        explanation:
            "Garis dapat sejajar, memotong, atau tegak lurus bidang."

    },

    {
        question:
            "R3 digunakan untuk menggambarkan objek...",

        options: [
            "1D",
            "2D",
            "3D",
            "4D"
        ],

        answer: 2,

        explanation:
            "R3 digunakan untuk objek tiga dimensi."

    }

];

let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let currentXP = 0;

function loadEasyQuiz() {

    currentQuestions =
        easyQuestions;

    currentXP = 10;

    startQuiz();

}

function loadMediumQuiz() {

    currentQuestions =
        mediumQuestions;

    currentXP = 20;

    startQuiz();

}

function loadHardQuiz() {

    currentQuestions =
        hardQuestions;

    currentXP = 35;

    startQuiz();

}

function startQuiz() {

    currentQuestion = 0;

    score = 0;

    showQuestion();

}


function showQuestion() {

    const q =
        currentQuestions[currentQuestion];

    let optionsHTML = "";

    for (let i = 0; i < q.options.length; i++) {

        optionsHTML +=

            `
<button
class="option-btn"
onclick="checkAnswer(${i})">

${q.options[i]}

</button>
`;

    }

    document.getElementById(
        "quizContainer"
    ).innerHTML =

        `
<div class="quiz-card">

<h2>
Soal ${currentQuestion + 1}
</h2>

<p>
${q.question}
</p>

${optionsHTML}

<div id="feedbackArea">

</div>

</div>
`;

    updateQuizProgress();

}

function checkAnswer(index) {

    const q =
        currentQuestions[currentQuestion];

    const buttons =
        document.querySelectorAll(
            ".option-btn"
        );

    buttons.forEach(btn => {

        btn.disabled = true;

    });

    let result = "";

    if (index === q.answer) {

        score++;

        result =

            `
<div class="feedback-card"
id="feedbackBox">

<h3>
Jawaban Benar 
</h3>

<br>

<p>
${q.explanation}
</p>

<br>

<button onclick="nextQuestion()">

Soal Selanjutnya

</button>

</div>
`;

    }

    else {

        result =

            `
<div class="feedback-card"
id="feedbackBox">

<h3>
Jawaban Salah 
</h3>

<br>

<p>
${q.explanation}
</p>

<br>

<button onclick="nextQuestion()">

Soal Selanjutnya

</button>

</div>
`;

    }

    document.getElementById(
        "feedbackArea"
    ).innerHTML = result;

    setTimeout(() => {

        document.getElementById(
            "feedbackBox"
        ).scrollIntoView({

            behavior: "smooth",
            block: "center"

        });

    }, 200);

}

function nextQuestion() {

    currentQuestion++;

    if (
        currentQuestion <
        currentQuestions.length
    ) {

        showQuestion();

    }

    else {

        finishQuiz();

    }

}

function finishQuiz() {

    const totalXP =
        parseInt(
            localStorage.getItem(
                "xp"
            )
        ) || 0;

    const totalSelesai =
        parseInt(
            localStorage.getItem(
                "selesai"
            )
        ) || 0;

    const earnedXP =
        Math.round(
            (score / currentQuestions.length)
            * currentXP
        );

    const newXP =
        totalXP + earnedXP;

    localStorage.setItem(
        "xp",
        newXP
    );

    localStorage.setItem(
        "selesai",
        totalSelesai + 1
    );

    const rank =
        getRank(newXP);

    document.getElementById(
        "quizContainer"
    ).innerHTML =

        `
<div class="quiz-finish">

<h2>
Quiz Selesai 🎉
</h2>

<br>

<p>
Skor Kamu
</p>

<h2>
${score}
/
${currentQuestions.length}
</h2>

<br>

<p>
XP Didapat:
<b>${earnedXP}</b>
</p>

<br>

<p>
Total XP:
<b>${newXP}</b>
</p>

<br>

<p>
Rank:
<b>${rank}</b>
</p>

<br>

<a href="progress.html"
class="btn">

Lihat Progress

</a>

</div>
`;

}

function updateQuizProgress() {

    const progress =
        ((currentQuestion)
            / currentQuestions.length)
        * 100;

    const progressBar =
        document.getElementById(
            "quizProgress"
        );

    if (progressBar) {

        progressBar.style.width =
            `${progress}%`;

    }

    const progressText =
        document.getElementById(
            "quizProgressText"
        );

    if (progressText) {

        progressText.innerHTML =

            `
${currentQuestion + 1}
/
${currentQuestions.length}
`;

    }

}

function loadPlayer() {

    const username =
        localStorage.getItem(
            "username"
        ) || "Player";

    const xp =
        parseInt(
            localStorage.getItem(
                "xp"
            )
        ) || 0;

    const selesai =
        parseInt(
            localStorage.getItem(
                "selesai"
            )
        ) || 0;

    const rank =
        getRank(xp);

    const playerName =
        document.getElementById(
            "playerName"
        );

    if (playerName) {

        playerName.innerHTML =
            username;

    }

    const xpText =
        document.getElementById(
            "xpText"
        );

    if (xpText) {

        xpText.innerHTML =
            `XP ${xp}`;

    }

    const rankText =
        document.getElementById(
            "rankText"
        );

    if (rankText) {

        rankText.innerHTML =
            rank;

    }

    const progressText =
        document.getElementById(
            "progressText"
        );

    if (progressText) {

        progressText.innerHTML =

            `
${selesai}
Quiz Selesai
`;

    }

    const progressFill =
        document.getElementById(
            "progressFill"
        );

    if (progressFill) {

        const persen =
            (selesai / 20) * 100;

        progressFill.style.width =
            `${persen}%`;

    }

}

function loadProgressModern() {

    const username =
        localStorage.getItem(
            "username"
        ) || "Player";

    const xp =
        parseInt(
            localStorage.getItem(
                "xp"
            )
        ) || 0;

    const selesai =
        parseInt(
            localStorage.getItem(
                "selesai"
            )
        ) || 0;

    const rank =
        getRank(xp);

    const usernameBox =
        document.getElementById(
            "progressName"
        );

    if (usernameBox) {

        usernameBox.innerHTML =
            username;

    }

    const xpCard =
        document.getElementById(
            "xpCard"
        );

    if (xpCard) {

        xpCard.innerHTML =
            xp;

    }

    const quizCard =
        document.getElementById(
            "quizCard"
        );

    if (quizCard) {

        quizCard.innerHTML =
            selesai;

    }

    const rankCard =
        document.getElementById(
            "rankCard"
        );

    if (rankCard) {

        rankCard.innerHTML =
            rank;

    }

    const progressBar =
        document.getElementById(
            "mainProgress"
        );

    if (progressBar) {

        const persen =
            (selesai / 20) * 100;

        progressBar.style.width =
            `${persen}%`;

    }

    const progressInfo =
        document.getElementById(
            "progressInfo"
        );

    if (progressInfo) {

        progressInfo.innerHTML =

            `
${selesai}
dari
20 quiz selesai
`;

    }

}

function resetProgress() {

    const confirmReset =
        confirm(
            "Yakin ingin reset progress?"
        );

    if (confirmReset) {

        localStorage.removeItem(
            "xp"
        );

        localStorage.removeItem(
            "selesai"
        );

        localStorage.removeItem(
            "streak"
        );

        location.reload();

    }

}

function scrollTopPage() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });

}

window.addEventListener(

    "load",

    function () {

        window.scrollTo({

            top: 0,
            behavior: "instant"

        });

    }

);

window.onbeforeunload = null;

window.addEventListener(

    "beforeunload",

    function (e) {

        delete e["returnValue"];

    }

);
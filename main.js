let text1 = prompt(`Ismingizni kiriting`);
let text2 = prompt(`Harf kiriting`);

if (!isNaN(text2)) {
    text2 = Number(text2);
    alert(`Son kirgizish mumkin emas`);
} else {
    if (text1.includes(text2.toLowerCase()) || text1.includes(text2.toUpperCase())) {
        alert(`${text1} da ${text2} bor`);
    } else {
        alert(`${text1} da ${text2} yo'q`);
    }
}

let quran = [
    {
        nomi: "Fotiha",
        oyat: 7,
        nozil: "Makka",
        tarif: "Suraning o'nga yaqin nomi bo'lib, ulardan eng mashhuri \"Fotiha\", ya'ni \"ochuvchi\" deganidir. Islom dini ko'rsatmalarining asosini tashkil etgani uchun unga \"Ummul Qur'on\", ya'ni \"Qur'onning onasi\" nomi ham berilgan."
    },
    {
        nomi: "Baqara",
        oyat: 286,
        nozil: "Madina",
        tarif: "Baqara - sigir demakdir. Surada Muso a.s. bilan uning qavmi o'rtasida kechgan ibratli voqealardan biri - Sigir voqeasi bo'lgani sababli, unga ramziy ma'noda shu nom berilgan."
    },
    {
        nomi: "Ali Imron",
        oyat: 200,
        nozil: "Madina",
        tarif: "Imron Maryamning otasi. Ali Imron - Imronning oilasi demakdir. Surada Badr va Uhud janglari, Iso a.s. qissalari, Allohga shirk keltirish eng katta gunohligi, shariat ahkomlari va boshqa ko'p ma'lumotlar bayon qilingan."
    },
    {
        nomi: "Niso",
        oyat: 176,
        nozil: "Madina",
        tarif: "Niso - Ayollar degani. Bu surada asosan oila, turmush, meros masalalari, er-xotin munosabatlari, faxsh va zino zararlari va boshqa ma'lumotlar bayon qilingan."
    },
    {
        nomi: "Moida",
        oyat: 120,
        nozil: "Madina",
        tarif: "Moida - dasturxon demakdir. Surada Islom mafkurasiga oid masalalar, shar'iy hukmlar, haj va umra, tahorat, nikoh, jinoyat, jazo, ichkilik, qimor hukmlari, payg'ambarlar qissasi va boshqa ma'lumotlar bayon etiladi. "
    },
    {
        nomi: "An'om",
        oyat: 165,
        nozil: "Makka",
        tarif: "An'om - chorva mollari degani. Ular haqida bir necha oyatlar bo'lgani uchun suraga shu nom berilgan. Surada Islom aqidasi asoslari, shariyat ahkomlari, oilaviy masalalar, jihod ahkomlari, g'ayridinlarga doir ko'rsatmalar,qiyomat, oxirat, payg'ambarlar, dunyo va hayot mohiyati haqidagi ma'lumotlar o'z ifodasini topgan."
    },
    {
        nomi: "A'rof",
        oyat: 206,
        nozil: "Makka",
        tarif: "A'rof jannat bilan do'zaxni ajratib turadigan devor, arasot. Bu joy jannatga ham, do'zaxga ham kirmagan, ya'ni vaqti soati kelib, Alloh Taolo ularni jannatga kiritgunga qadar, ma'lum muddat turadigan kishilarning joyidir. Surada Nuh, Hud, Solih, Lut, Shuayb va Muso payg'ambarlarning qissalari, tavhid, iymoni e'tiqod, qiyomat, hisob-kitob masalalari va boshqa ma'lumotlar beriladi."
    },
    {
        nomi: "Anfol",
        nozil: "Madina",
        oyat: 75,
        tarif: "Anfol - o'ljalar degani. Surada jang, o'lja taqsimoti, iymon, e'tiqod, solih amal va boshqa masalalar haqida ilohiy ko'rsatmalar berilgan. Unda asosan Badr jangi voqealar batafsil bayon qilingan."
    },
    {
        nomi: "Tavba",
        nozil: "Madina",
        oyat: 129,
        tarif: "Surada tavbaning qabul qilinishi bashorati bo'lgani uchun unga Tavba deb nom berilgan. Baroat surasi deb ham ataladi, baroat - oraning ochiqligi demakdir. Sura 'bismillahir rohmaanir rohiim' bilan boshlanmasligi to'g'risida turli fikrlar aytilgan. Ba'zilari sura oldingi Anfol surasining davomi bo'lgani uchun desalar, ba'zilari surada ko'proq urush, jang, qatl etilish zikr qilingani uchun deya izoh beradilar. Rasululloh s.a.v. dan esa bu to'g'risida aniq ko'rsatma berilmagan. Surada asosan, Tabuk voqeasi, masjid qurish, iymon, kufr, savob, gunoh, tavba-tazarru va boshqa mavzular bayon etilgan."
    },
    {
        nomi: "Yunus",
        nozil: "Makka",
        oyat: 109,
        tarif: "Surada Yunus a.s. va boshqa payg'ambarlar qissasi, iymon, e'tiqod, ilohiy kitoblar, qiyomat, qayta tirilish, jazo, jannat va do'zax kabi masalalar bayon etilgan."
    },
]
    
// console.log(quran.);

function searching() {
    let form = document.querySelector("form")
    
    let title = document.querySelector(".title"),
    ayah = document.querySelector(".ayah"),
    tarif = document.querySelector(".tarif")
    form.addEventListener("submit", () => {
        console.log(quran[0].nomi);
        let input = document.querySelector("#search").value;
        // let val = input.value;
        title.innerHTML = `${quran[input-1].nomi} surasi`;
        ayah.innerHTML = `${quran[input-1].nozil}da nozil qilingan, ${quran[input-1].oyat} oyatdan iborat.`;
        tarif.innerHTML = quran[input-1].tarif;
    })
}
searching()
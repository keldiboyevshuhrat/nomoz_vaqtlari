
function regOption(viloyatlar) {

    viloyatlar.forEach((element) => {
        const optiona = cretElement('option', "option", element, element);
        $('#selectOption').appendChild(optiona)

    });

}

regOption(provencie);

// mintaqa_vaqti

async function selectRegion(select = "Toshkent") {
    const response = await fetch(
        `https://islomapi.uz/api/present/day?region=${select}` 
    );
    const result = await response.json();
    renderData(result);
}

selectRegion();


$('#selectOption').addEventListener('change', (e) => {
    $('#shahar').textContent = e.target.value;
    
    switch (e.target.value.toLowerCase()) {

        case "qashqadaryo":
            selectRegion("qarshi");
            break;
        case "farg'ona":
            selectRegion("qo'qon");
            break;
        case "sirdaryo":
            selectRegion("guliston");
            break;
        case "samarqand":
            selectRegion("samarqand");
            break;
        case "buxoro":
            selectRegion("buxoro");
            break;
        case "jizzax":
            selectRegion("jizzax");
            break;
        case "namangan":
            selectRegion("namangan");
            break;
        case "andijon":
            selectRegion("andijon");
            break;
        case "surxondaryo":
            selectRegion("termiz");
            break;
        case "navoiy":
            selectRegion("navoiy");
            break;
        case "xorazm":
            selectRegion("urganch");
            break;
        default:
            selectRegion("toshkent");
    }
})



function renderData(result) {
    const {
        times: { asr, hufton, peshin, quyosh, shom_iftor, tong_saharlik },
    } = result;

    $all('#soat')[0].textContent = tong_saharlik
    $all('#soat')[1].textContent = quyosh
    $all('#soat')[2].textContent = peshin
    $all('#soat')[3].textContent = asr
    $all('#soat')[4].textContent = shom_iftor
    $all('#soat')[5].textContent = hufton

}

function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var sessionn = "AM";
    if (h == 0) {
        h = 12;
    }
    if (h > 12) {
        h = h - 12;
        sessionn = "PM";
    }
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    var time = sessionn + " " + h + ":" + m + ": " + s;
    document.querySelector("#time").innerText = time;

    setTimeout(showTime, 1000);
}
showTime();

const day = $("#week_day");

function data() {
    const monthNames = [
        "Yanvar",
        "Fevral",
        "Mart",
        "Aprel",
        "May",
        "Iyun",
        "Iyul",
        "Avgust",
        "Sentyaby",
        "Oktyabr",
        "Noyabr",
        "Dekabr",
    ];
    const d = new Date();
    day.innerHTML = `${d.getDate()}-${monthNames[d.getMonth()]
        }  ${d.getFullYear()}-yil`;
}
setInterval(() => {
    data();
}, 500);

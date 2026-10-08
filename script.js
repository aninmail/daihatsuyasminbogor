const menuToggle = document.getElementById("menuToggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-link");


// =========================================
// MOBILE MENU
// =========================================

menuToggle.addEventListener("click", () => {

    navMenu.classList.toggle("active");

});


// =========================================
// CLOSE MENU AFTER CLICK
// =========================================

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navMenu.classList.remove("active");

    });

});


// =========================================
// ACTIVE NAVIGATION
// =========================================

window.addEventListener("scroll", () => {

    let current = "";

    const sections = document.querySelectorAll("section");

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

// =========================================
// HERO IMAGE SLIDER
// =========================================

const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".slider-dot");

const nextButton = document.getElementById("sliderNext");
const prevButton = document.getElementById("sliderPrev");

let currentSlide = 0;
let sliderInterval;


// =========================================
// SHOW SLIDE
// =========================================

function showSlide(index) {

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    dots.forEach((dot) => {
        dot.classList.remove("active");
    });


    slides[index].classList.add("active");

    dots[index].classList.add("active");

    currentSlide = index;

}


// =========================================
// NEXT SLIDE
// =========================================

function nextSlide() {

    let nextIndex = currentSlide + 1;

    if (nextIndex >= slides.length) {
        nextIndex = 0;
    }

    showSlide(nextIndex);

}


// =========================================
// PREVIOUS SLIDE
// =========================================

function prevSlide() {

    let prevIndex = currentSlide - 1;

    if (prevIndex < 0) {
        prevIndex = slides.length - 1;
    }

    showSlide(prevIndex);

}


// =========================================
// BUTTON NEXT
// =========================================

if (nextButton) {

    nextButton.addEventListener("click", () => {

        nextSlide();

        resetSlider();

    });

}


// =========================================
// BUTTON PREVIOUS
// =========================================

if (prevButton) {

    prevButton.addEventListener("click", () => {

        prevSlide();

        resetSlider();

    });

}


// =========================================
// DOT NAVIGATION
// =========================================

dots.forEach((dot, index) => {

    dot.addEventListener("click", () => {

        showSlide(index);

        resetSlider();

    });

});


// =========================================
// AUTO SLIDER
// =========================================

function startSlider() {

    sliderInterval = setInterval(() => {

        nextSlide();

    }, 5000);

}


// =========================================
// RESET SLIDER
// =========================================

function resetSlider() {

    clearInterval(sliderInterval);

    startSlider();

}


// =========================================
// START
// =========================================

if (slides.length > 0) {

    showSlide(0);

    startSlider();

}

/* =====================================================
   DATA MOBIL & TYPE
===================================================== */

const carData = {

    sigra: {

        name: "New Sigra",

        types: [

            {
                name: "Sigra 1.0 D MT",
                price: 157250000
            },

            {
                name: "Sigra 1.0 M MT",
                price: 168000000
            },

            {
                name: "Sigra 1.2 X MT",
                price: 174000000
            },

            {
                name: "Sigra 1.2 X AT",
                price: 187000000
            },

            {
                name: "Sigra 1.2 R MT",
                price: 179500000
            },

            {
                name: "Sigra 1.2 R AT",
                price: 195000000
            }

        ]

    },


    /* =================================================
       AYLA
    ================================================= */

    ayla: {

        name: "New Ayla",

        types: [

            {
                name: "Ayla 1.0 M MT",
                price: 155200000
            },

            {
                name: "Ayla 1.0 X MT",
                price: 168000000
            },

            {
                name: "Ayla 1.0 X CVT",
                price: 188000000
            },

            {
                name: "Ayla 1.2 R MT",
                price: 180000000
            },

            {
                name: "Ayla 1.2 R CVT",
                price: 200000000
            }

        ]

    },


    /* =================================================
       XENIA
    ================================================= */

    xenia: {

        name: "New Xenia",

        types: [

            {
                name: "Xenia 1.3 M MT",
                price: 240000000
            },

            {
                name: "Xenia 1.3 X MT",
                price: 244000000
            },

            {
                name: "Xenia 1.3 X CVT",
                price: 262000000
            },

            {
                name: "Xenia 1.5 R MT",
                price: 273000000
            },

            {
                name: "Xenia 1.5 R CVT",
                price: 287000000
            }

        ]

    },


    /* =================================================
       GRANMAX PICKUP
    ================================================= */

    "granmax-pickup": {

        name: "Granmax Pickup",

        types: [

            {
                name: "Granmax Pickup 1.3 STD",
                price: 183000000
            },

            {
                name: "Granmax Pickup 1.5 STD",
                price: 186000000
            },

            {
                name: "Granmax Pickup 1.5 AC",
                price: 195000000
            }

        ]

    },


    /* =================================================
       GRANMAX BLIND VAN
    ================================================= */

    "granmax-blindvan": {

        name: "Granmax Blind Van",

        types: [

            {
                name: "Granmax Blind Van 1.3",
                price: 199000000
            },

            {
                name: "Granmax Blind Van 1.5",
                price: 240000000
            },

            {
                name: "Granmax Blind Van 1.5 AC",
                price: 239000000
            }

        ]

    },


    /* =================================================
       TERIOS
    ================================================= */

    terios: {

        name: "Terios",

        types: [

            {
                name: "Terios X MT",
                price: 268000000
            },

            {
                name: "Terios X AT",
                price: 279000000
            },

            {
                name: "Terios R MT",
                price: 296700000
            },

            {
                name: "Terios R AT",
                price: 305000000
            }

        ]

    },


    /* =================================================
       ROCKY
    ================================================= */

    rocky: {

        name: "Rocky",

        types: [

            {
                name: "Rocky 1.2 M MT",
                price: 225400000
            },

            {
                name: "Rocky 1.2 X MT",
                price: 240500000
            },

            {
                name: "Rocky 1.2 X CVT",
                price: 258400000
            },

            {
                name: "Rocky 1.0 R TC CVT",
                price: 275750000
            }

        ]

    },


    /* =================================================
       ROCKY HYBRID
    ================================================= */

    "rocky-hybrid": {

        name: "Rocky Hybrid",

        types: [

            {
                name: "Rocky Hybrid 1.2 X",
                price: 310000000
            },


        ]

    },


    /* =================================================
       LUXIO
    ================================================= */

    luxio: {

        name: "Luxio",

        types: [

            {
                name: "Luxio D MT",
                price: 210000000
            },

            {
                name: "Luxio X MT",
                price: 225000000
            },

            {
                name: "Luxio X AT",
                price: 240000000
            }

        ]

    }

};


/* =====================================================
   ELEMENT
===================================================== */

const carName =
    document.getElementById("carName");

const carType =
    document.getElementById("carType");

const carPrice =
    document.getElementById("carPrice");

const carDP =
    document.getElementById("carDP");

const carTenor =
    document.getElementById("carTenor");


/* =====================================================
   FORMAT RUPIAH
===================================================== */

function formatRupiah(number) {

    return new Intl.NumberFormat("id-ID").format(number);

}


/* =====================================================
   PARSE RUPIAH
===================================================== */

function parseRupiah(value) {

    return Number(
        value.replace(/\D/g, "")
    ) || 0;

}


/* =====================================================
   LOAD TYPE MOBIL
===================================================== */

function loadCarTypes() {

    const selectedCar =
        carName.value;

    const selectedData =
        carData[selectedCar];


    /* Kosongkan Type */

    carType.innerHTML = "";


    /* Tambahkan semua Type */

    selectedData.types.forEach(
        (type, index) => {

            const option =
                document.createElement("option");

            option.value =
                type.price;

            option.textContent =
                type.name;

            option.dataset.name =
                type.name;

            carType.appendChild(option);

        }
    );


    /* Pilih Type pertama */

    updateCarPrice();

}


/* =====================================================
   UPDATE HARGA BERDASARKAN TYPE
===================================================== */

function updateCarPrice() {

    const selectedOption =
        carType.options[
            carType.selectedIndex
        ];


    if (!selectedOption) {

        return;

    }


    const price =
        Number(selectedOption.value);


    carPrice.value =
        formatRupiah(price);

}


/* =====================================================
   KETIKA MOBIL DIGANTI
===================================================== */

carName.addEventListener(
    "change",
    function () {

        loadCarTypes();

    }
);


/* =====================================================
   KETIKA TYPE DIGANTI
===================================================== */

carType.addEventListener(
    "change",
    function () {

        updateCarPrice();

    }
);


/* =====================================================
   FORMAT INPUT DP
===================================================== */

carDP.addEventListener(
    "input",
    function () {

        let value =
            this.value.replace(/\D/g, "");


        if (value === "") {

            this.value = "";

            return;

        }


        this.value =
            formatRupiah(
                Number(value)
            );

    }
);


/* =====================================================
   CALCULATE CREDIT
===================================================== */

function calculateCredit() {

    const selectedCar =
        carData[carName.value];


    const selectedType =
        carType.options[
            carType.selectedIndex
        ];


    const selectedTypeName =
        selectedType.dataset.name;


    const price =
        Number(selectedType.value);


    const dp =
        parseRupiah(
            carDP.value
        );


    const tenor =
        Number(carTenor.value);


    /* =================================================
       VALIDASI DP
    ================================================= */

    if (dp <= 0) {

        alert(
            "Silakan masukkan nominal DP terlebih dahulu."
        );

        carDP.focus();

        return;

    }


    if (dp >= price) {

        alert(
            "DP tidak boleh sama atau lebih besar dari harga mobil."
        );

        carDP.focus();

        return;

    }


    /* =================================================
       SIMULASI BUNGA
    ================================================= */

    const bungaTahunan =
        0.09;


    const jumlahPinjaman =
        price - dp;


    const totalBunga =
        jumlahPinjaman *
        bungaTahunan *
        (tenor / 12);


    const totalKredit =
        jumlahPinjaman + 1000000 +
        totalBunga;


    const angsuran =
        totalKredit / tenor;


    /* =================================================
       UPDATE RESULT
    ================================================= */

    document.getElementById(
        "resultCarName"
    ).textContent =
        selectedCar.name;


    /* TYPE */

    const resultType =
        document.getElementById(
            "resultCarType"
        );


    if (resultType) {

        resultType.textContent =
            selectedTypeName;

    }


    /* ANGSURAN */

    document.getElementById(
        "resultInstallment"
    ).textContent =
        "Rp " +
        formatRupiah(
            Math.round(angsuran)
        );


    /* HARGA */

    document.getElementById(
        "resultPrice"
    ).textContent =
        "Rp " +
        formatRupiah(price);


    /* DP */

    document.getElementById(
        "resultDP"
    ).textContent =
        "Rp " +
        formatRupiah(dp);


    /* TENOR */

    document.getElementById(
        "resultTenor"
    ).textContent =
        tenor +
        " Bulan";


    /* =================================================
       WHATSAPP
    ================================================= */

    const message =
        `Halo Kak Ismail, saya ingin konsultasi simulasi kredit.%0A%0A` +

        `Mobil: ${selectedCar.name}%0A` +

        `Type: ${selectedTypeName}%0A` +

        `Harga: Rp ${formatRupiah(price)}%0A` +

        `DP: Rp ${formatRupiah(dp)}%0A` +

        `Tenor: ${tenor} Bulan%0A` +

        `Estimasi Angsuran: Rp ${formatRupiah(Math.round(angsuran))}/bulan`;


    document.getElementById(
        "creditWhatsapp"
    ).href =
        "https://wa.me/6281234567890?text=" +
        message;

}


/* =====================================================
   LOAD AWAL
===================================================== */

loadCarTypes();

/* =========================================
   FADE UP ON SCROLL
========================================= */

const fadeElements = document.querySelectorAll(".fade-up");

const fadeObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("active");

            }

        });

    },
    {
        threshold: 0.15
    }
);


fadeElements.forEach((element) => {

    fadeObserver.observe(element);

});
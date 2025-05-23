// Зберігаємо likedIds у localStorage
function toggleLike(element) {
    const heart = element.querySelector('svg');
    heart.classList.toggle('liked');

    const animalId = parseInt(element.closest('.card').querySelector('.details-btn').dataset.id);
    let likedIds = JSON.parse(localStorage.getItem('likedIds')) || [];

    if (likedIds.includes(animalId)) {
        likedIds = likedIds.filter((id) => id !== animalId); // Видаляємо ID, якщо вже є
    } else {
        likedIds.push(animalId); // Додаємо ID
    }

    localStorage.setItem('likedIds', JSON.stringify(likedIds)); // Зберігаємо в localStorage
}
const animals = [
    {
        name: "Іскорка",
        type: "Кішка",
        age: "близько 2-3 місяців",
        gender: "Дівчинка",
        id: 1,
        description: "Кішка свійська — Маленька лагідна муркотушка шукає теплий дім і люблячого друга. Вона довірливо тягнеться до людей і дуже потребує турботи. Допоможіть їй знайти свою сім’ю.",
        sterilized: "Ні",
        size: "Маленький",
        image: "./PatMatcher/petImages/iskorka.jpg"
    },
    {
        name: "Гарфілд",
        type: "Кіт",
        age: "близько 1 року",
        gender: "Хлопчик",
        id: 2,
        description: "Кіт свійський — Гарфілд — серйозний, але дуже ласкавий кіт з характером. Попри свій втомлений вигляд, він мріє про дім, де буде тепло, спокійно і безпечно. Любить спостерігати, обережний, але тягнеться до добрих рук. Ідеальний друг для тих, хто цінує спокій і вірність.",
        sterilized: "Так",
        size: "Середній",
        image: "./PatMatcher/petImages/garfield.jpg"
    },
    {
        name: "Тимко",
        type: "Кіт",
        age: "близько 2 років",
        gender: "Хлопчик",
        id: 3,
        description: "Кіт свійський — Тимко пережив багато, але не втратив віри в людей. Він худенький, але з величезними очима, які просять про шанс. Дуже лагідний, тягнеться до руки, розумний і вдячний. Йому потрібна турбота, лікування та трохи любові — і він стане найвідданішим другом. Тимко чекає на свого героя.",
        sterilized: "Так",
        size: "Середній",
        image: "./PatMatcher/petImages/tymko.jpg"
    },
    {
        name: "Мура",
        type: "Кішка",
        age: "~1 рік",
        gender: "Дівчинка",
        id: 4,
        description: "Кішка свійська — Мура — справжня дослідниця міських вулиць. Вона розумна, активна і має чарівний погляд, від якого тане серце. Лагідна до людей і швидко звикає до нових облич. Шукає дім, де буде тепло, безпечно і обов'язково буде той, хто щовечора гладитиме її пухнасту спинку.",
        sterilized: "Ні",
        size: "Середній",
        image: "./PatMatcher/petImages/mura.jpg"
    },
    {
        name: "Крапочка",
        type: "Кішка",
        age: "~1 місяць",
        gender: "Дівчинка",
        id: 5,
        description: "Кішка свійська — Крапочка — маленьке диво, яке тільки починає знайомитись із цим світом. Її великі блакитні оченята шукають тепла, турботи і м’якої ковдри. Зовсім юна, вона потребує не лише їжі, а й любові, обіймів та терплячої родини, яка допоможе їй вирости здоровою й щасливою.",
        sterilized: "Ні",
        size: "Дуже маленький",
        image: "./PatMatcher/petImages/krapochka.jpg"
    },
    {
        name: "Тінь",
        type: "Кіт",
        age: "~2 місяці",
        gender: "Хлопчик",
        id: 6,
        description: "Кіт свійський — Тінь — хоробрий малюк із пронизливим поглядом. Хоч його ще легко злякати гучним звуком, у ньому вже видно справжнього дослідника. Любить поганятися за листям і сонячними зайчиками, але завжди повертається до людини за ласкою. Йому дуже потрібна родина, яка подарує затишок і безпеку.",
        sterilized: "Ні",
        size: "Маленький",
        image: "./PatMatcher/petImages/tin.jpg"
    },
    {
        name: "Мартин",
        type: "Кіт",
        age: "~2 місяці",
        gender: "Хлопчик",
        id: 7,
        description: "Кіт свійський — Мартин — трохи сором’язливий, але уважний і розумний кошеня. Поки інші ганяються за метеликами, він обережно досліджує світ, ніби читає кожен камінчик. У нього серйозний погляд, наче в дорослого кота, але йому дуже хочеться тепла і любові. Ідеально підійде людині, яка цінує спокійного й вдячного друга.",
        sterilized: "Ні",
        size: "Маленький",
        image: "./PatMatcher/petImages/martyn.jpg"
    },
    {
        name: "Яся",
        type: "Кішка",
        age: "~2,5 місяці",
        gender: "Дівчинка",
        id: 8,
        description: "Кішка свійська — Яся — тиха, спокійна і трохи насторожена киця. Вона ще не зовсім звикла до світу людей, але видно, що в глибині душі їй дуже хочеться довіряти. У Ясі чарівна пухнаста шерстка і мудрий, дорослий погляд, який розтопить серце. Вона ідеальна для того, хто хоче дати дівчинці шанс розцвісти у безпеці й любові.",
        sterilized: "Ні",
        size: "Маленький",
        image: "./PatMatcher/petImages/yasya.jpg"
    },
    {
        name: "Ляля",
        type: "Кішка",
        age: "~1 рік",
        gender: "Дівчинка",
        id: 9,
        description: "Кішка свійська — Ляля — граційна красуня з неймовірно яскравими очима і строкатим триколірним хутром. Вона уважна, але з характером — завжди знає, чого хоче. Ляля — саме та, хто стане справжньою королевою у вашій домівці. Її присутність додає затишку, а ніжність — тепла. Шукає господаря, який буде цінувати її незалежність і даруватиме турботу.",
        sterilized: "Так",
        size: "Середній",
        image: "./PatMatcher/petImages/lyalya.jpg"
    },
    {
        name: "Барсик",
        type: "Собака",
        age: "~1,5 місяця",
        gender: "Хлопчик",
        id: 10,
        description: "Собака свійська — Барсик — крихітне, але мужнє щеня, яке встигло побачити складний бік життя. У його очах — ніжність і довіра, яку ще можна подарувати добрій людині. Він потребує любові, захисту та теплого куточка, де зможе вирости у вірного друга. Ідеальний для тих, хто мріє про справжню дружбу, що починається з порятунку.",
        sterilized: "Ні",
        size: "Маленький",
        image: "./PatMatcher/petImages/barsyk.jpg"
    },
    {
        name: "Рудик",
        type: "Собака",
        age: "~3-4 місяці",
        gender: "Хлопчик",
        id: 11,
        description: "Собака свійська — Рудик — активний малюк із проникливим поглядом та м’яким рудим хутром. Він виглядає серйозно, ніби вже багато чого бачив, але в душі залишається щеням, яке хоче гратися, бігати по траві й засинати біля добрих людей. Ідеальний як для сім’ї, так і для людини, яка шукає відданого друга.",
        sterilized: "Ні",
        size: "Середній",
        image: "./PatMatcher/petImages/rudyk.jpg"
    },
    {
        name: "Лада",
        type: "Собака",
        age: "~2-3 роки",
        gender: "Дівчинка",
        id: 12,
        description: "Собака свійська — Лада — спокійна й розсудлива красуня з добрими очима. Вона любить природу, але мріє знайти дім, де буде тепло й безпечно. Ідеальний варіант для родини, що шукає врівноваженого та відданого друга. Підійде навіть для квартирного утримання за умови прогулянок.",
        sterilized: "Так",
        size: "Середній",
        image: "./PatMatcher/petImages/lada.jpg"
    },
    {
        name: "Буся",
        type: "Собака",
        age: "~5-6 років",
        gender: "Дівчинка",
        id: 13,
        description: "Собака свійська — Буся — справжня дама з досвідом і глибоким поглядом. В її очах — мудрість і доброта. Вона спокійна, лагідна й потребує лише одного — людської любові та тепла. Чудово підійде для спокійної родини або літньої людини.",
        sterilized: "Так",
        size: "Середній",
        image: "./PatMatcher/petImages/busya.jpg"
    },
    {
        name: "Тайсон",
        type: "Собака",
        age: "~3-4 місяці",
        gender: "Хлопчик",
        id: 14,
        description: "Собака свійська — Цей малюк Тайсон хоч і носить ім’я бійця, але насправді — добряк з величезними очима, сповненими довіри. Він обожнює людей, тягне лапки, просить ласки та швидко прив’язується до того, хто його полюбить. Подаруйте йому будинок, і він подарує вам серце.",
        sterilized: "Ні",
        size: "Очікується середній/великий",
        image: "./PatMatcher/petImages/tyson.jpg"
    },
    {
        name: "Луна",
        type: "Собака",
        age: "~6-8 місяців",
        gender: "Дівчинка",
        id: 15,
        description: "Собака свійська — Луна — ніжна, розумна й віддана. Вона вже зараз тягнеться до людей, із вдячністю приймаючи кожне погладжування. В її очах — надія на краще життя поруч із люблячим господарем. Ідеальна подруга для тих, хто шукає справжню душевну теплоту.",
        sterilized: "Ні",
        size: "Середній (може вирости ще трохи)",
        image: "./PatMatcher/petImages/luna.jpg"
    },
    {
        name: "Герда",
        type: "Собака",
        age: "~2 роки",
        gender: "Дівчинка",
        id: 16,
        description: "Собака свійська — Герда — спокійна, розумна й вірна. Вона не метушиться даремно, а спостерігає за світом із мудрістю в очах. Чудово підійде тим, хто цінує врівноважений характер і хоче мати надійного друга поруч. Потребує турботи, затишку й люблячої родини.",
        sterilized: "Так",
        size: "Середній",
        image: "./PatMatcher/petImages/gerda.jpg"
    },
    {
        name: "Жужа",
        type: "Собака",
        age: "~4 роки",
        gender: "Дівчинка",
        id: 17,
        description: "Собака свійська — Жужа — скромна й дуже мила дівчинка з добрими очима. Вона з недовірою, але з надією дивиться на кожного, хто проходить повз. Її лагідність і бажання бути поруч не залишать байдужим нікого. Вона стане чудовим другом для тих, хто готовий подарувати їй трохи любові та безпечний дім.",
        sterilized: "Так",
        size: "Невеликий",
        image: "./PatMatcher/petImages/zhuzha.jpg"
    },
    {
        name: "Пломбір",
        type: "Собака",
        age: "~2,5 роки",
        gender: "Хлопчик",
        id: 18,
        description: "Собака свійська — Пломбір — худорлявий красень із проникливим поглядом та витонченим тілом. Його світло-кремовий колір нагадує морозиво, тому й ім’я відповідне. Доброзичливий, але обережний, він явно чекає на того, хто подарує йому тепло і дім. Пломбір добре ладнає з іншими собаками, любить прогулянки й ласку.",
        sterilized: "Так",
        size: "Середній",
        image: "./PatMatcher/petImages/plombir.jpg"
    }
];

$(document).ready(function () {
    const cardsPerPage = 6; // Кількість карток на сторінку
    const totalPages = 3; // Загальна кількість сторінок
    let currentPage = 1; // Поточна сторінка

    // Функція для рендерингу карток
    function renderCards(page) {
        const startIndex = (page - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const cardsToShow = animals.slice(startIndex, endIndex);
    
        $(".card-grid").empty(); // Очищаємо контейнер карток
    
        cardsToShow.forEach((animal) => {
            $(".card-grid").append(`
                <div class="card">
                    <div class="card-top">
                        <img src="${animal.image}" alt="${animal.name}" style="width: 100%; height: auto; border-radius: 10px;">
                    </div>
                    <div class="card-bottom">
                        <h3>${animal.name}</h3>
                        <p>${animal.gender} | <span>${animal.age}</span></p>
                        <button class="details-btn" data-id="${animal.id}">Більше...</button>
                        <div class="like-btn" onclick="toggleLike(this)">
                            <svg class="heart-icon" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#FF7A00" stroke-width="2" viewBox="0 0 24 24">
                                <path d="M12 21s-6.5-4.58-10-9.33C.9 8.07 2.85 4.5 6 4.5c1.91 0 3.64 1.17 4.5 2.89C11.86 5.67 13.59 4.5 15.5 4.5c3.15 0 5.1 3.57 4 7.17C18.5 16.42 12 21 12 21z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            `);
        });
    }

    // Функція для оновлення стану пагінації
    function updatePagination() {
        $(".page-btn").removeClass("active");
        $(`.page-btn[data-page="${currentPage}"]`).addClass("active");

        // Деактивація кнопки "Далі" на останній сторінці
        if (currentPage === totalPages) {
            $(".next-btn").prop("disabled", true);
        } else {
            $(".next-btn").prop("disabled", false);
        }
    }

    // Функція для скролу вгору
    function scrollToTop() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    }

    // Ініціалізація
    function initPagination() {
        renderCards(currentPage);
        updatePagination();
    }

    // Обробник кліку на кнопки сторінок
    $(".pagination").on("click", ".page-btn", function () {
        currentPage = parseInt($(this).data("page"));
        renderCards(currentPage);
        updatePagination();
        scrollToTop(); // Додаємо скрол вгору
    });

    // Обробник кліку на кнопку "Далі"
    $(".pagination").on("click", ".next-btn", function () {
        if (currentPage < totalPages) {
            currentPage++;
            renderCards(currentPage);
            updatePagination();
            scrollToTop(); // Додаємо скрол вгору
        }
    });

    // Ініціалізація
    initPagination();
});
$(".card-grid").on("click", ".details-btn", function () {
    const animalId = $(this).data("id"); // Отримуємо ID тварини
    window.location.href = `details.html?id=${animalId}`; // Перенаправляємо на сторінку details.html
});
$('#search-pet-btn').on("click", function(){
    $('#search-pet-input').val('');
    alert('Функція пошуку поки що не реалізована!');

});
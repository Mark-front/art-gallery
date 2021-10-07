const arrShowArtists = [
  {
    artistImg: "img/png/image 3.png",
    artistName: "Доменико Гирландайо",
    yearsOfLife: "2 июня 1448 — 11 января 1494.",
    biography: "Один из ведущих флорентийских художников Кватроченто, основатель художественной династии, которую продолжили его брат Давид и сын Ридольфо. Глава художественной мастерской, где юный Микеланджело в течение года овладевал профессиональными навыками. Автор фресковых циклов, в которых выпукло, со всевозможными подробностями показана домашняя жизнь библейских персонажей (в их роли выступают знатные граждане Флоренции в костюмах того времени)."
  },
];

const arrAllArtist = {
  XV:{
    france: ["Анастасия", "Бартелеми д’Эйк", "Домбе, Гийом","Дюве, Жан","Жакмар де Эсден","Иверни, Жак","Картон, Ангерран","Коломб, Жан","Лиферинкс, Йос","Мармион, Симон","Мастер Нарбоннского парамана","Мастер Орозия","Мастер святого Эгидия","Мастер Часослова Бедфорда","Мастер часослова Бусико","Мастер часослова семьи Спитц","Перреаль, Жан","Тестар, Робине","Фроман, Никола","Фуке, Жан"],
    germany: ["Бургкмайр, Ханс","Виц, Конрад","Вольгемут, Михаэль","Гольбейн, Ганс (Старший)","Дюрер, Альбрехт","Катцхаймер, Вольфганг","Конрад фон Зост","Лохнер, Штефан","Мастер Бертрам","Мастер жития Марии","Мастер святой Вероники","Мастер Франке","Мастер E. S.","Мекенен, Исраэль ван","Мемлинг, Ганс","Мозер, Лукас","Мульчер, Ганс","Нотке, Бернт","Плейденвурф, Вильгельм","Плейденвурф, Ганс","Полак, Ян (художник)","Роде, Герман","Цайтблом, Бартоломеус","Шаффнер, Мартин","Шонгауэр, Мартин","Штригель, Ханс Младший"],
    italy: ["Бенедетто ди Биндо","Бергоньоне, Амброджо","Биссоло, Франческо","Больтраффио, Джованни","Бонсиньори, Франческо","Боттичини, Рафаэлло","Брамантино","Бреа, Людовико","Бьяджо д’Антонио Туччи","Веккьетта","Андреа Верроккьо","Доменико Гирландайо","Беноццо Гоццоли","Граначчи, Франческо","Грегорио ди Чекко","Джованни да Удине","Джованни ди Паоло","Джорджоне","Парентино, Бернардо","Пезеллино","Пьетро Перуджино","Перуцци, Бальдассаре","Пизанелло","Пинтуриккьо"],
    russia: ["Амвросий (русский резчик)","Дионисий (иконописец)","Прохор с Городца","Андрей Рублёв"],
    belgium: ["Бермехо, Бартоломе","Берругете, Алонсо","Берругете, Педро","Далмау, Луис","Зиттов, Михель","Марторель, Бернат","Мастер святого Ильдефонса","Серра, Пере","Фландес, Хуан","Хименес, Мигель","Хорхе Инглес","Энгелбрехтсен, Корнелис"],
  },
  XVI:{
    france: [],
    germany: [],
    italy: [],
    russia: [],
    belgium: [],
  },
  XVII:{
    france: [],
    germany: [],
    italy: [],
    russia: [],
    belgium: [],
  },
  XVIII:{
    france: [],
    germany: [],
    italy: [],
    russia: [],
    belgium: [],
  },
  XVIV:{
    france: [],
    germany: [],
    italy: [],
    russia: [],
    belgium: [],
  },
  XX:{
    france: [],
    germany: [],
    italy: [],
    russia: [],
    belgium: [],
  },
  XXI:{
    france: [],
    germany: [],
    italy: [],
    russia: [],
    belgium: [],
  },
};

//Изменение высоты активного аккордиона
function changingHeightActiveAccordion() {
  let accordionContent;
  const activeAccordion = document.querySelector('.ui-accordion-content-active');
  if(activeAccordion.querySelector('.accordion__list').querySelector('.accordion__item') !== null) {
    accordionContent = activeAccordion.querySelector('.accordion__list');
  } else {
    accordionContent = activeAccordion.querySelector('.accordion__none-box');
  }
  activeAccordion.style.height = (accordionContent.clientHeight+50) + 'px';
}

//создание item списка художников 
function createAccordionItem(artistName, artistActive) {
  const item = document.createElement("li");
  const itemBtn = document.createElement("button");
  
  item.classList.add("accordion__item");
  itemBtn.classList.add("accordion__btn");
  if (artistName === artistActive) itemBtn.classList.add("accordion__btn--active");

  itemBtn.innerText = artistName;

  item.append(itemBtn);

  return item;
}

//заполнение списка художников item
function completionAccordionList(container, arrArtist) {
  arrArtist.forEach((item, index) => {
    container.append(createAccordionItem(item, "Доменико Гирландайо"));
  });
  if (document.querySelector(".accordion__btn--active") === null) {
    container.querySelector(".accordion__btn").classList.add("accordion__btn--active");
  }
}

//заполнение аккордиона
function completionAccordion(country, arrAllArtist) {
  document.querySelectorAll(".accordion__list").forEach(list => {
    const century = list.getAttribute("data-century");
    const arrArtist = arrAllArtist[century][country];
    list.querySelectorAll(".accordion__item").forEach(el => {
      el.remove();
    });
    if(arrArtist.length !== 0) {
      completionAccordionList(list, arrArtist);
      list.classList.add("accordion__list--visible");
      list.parentElement.querySelector(".accordion__none-box").classList.add("accordion__none-box--hiden");
    }
  });
}

//выводит информацию о художнике или если художника нет в базе данных общую информацию
function artistShow(artistActive) {
  arrShowArtists.forEach((artist, index) => {
    if(artist.artistName === artistActive) {
      document.querySelectorAll('.about-the-artist__img').forEach(item => {
        item.src = artist.artistImg;
      });
      document.querySelectorAll('.about-the-artist__name').forEach(item => {
        item.innerText = artist.artistName;
      });
      document.querySelectorAll('.about-the-artist__life-year').forEach(item => {
        item.innerText = artist.yearsOfLife;
      });
      document.querySelectorAll('.about-the-artist__text').forEach(item => {
        item.innerText = artist.biography;
      });
      document.querySelectorAll('.to-gallary-link').forEach(item => {
        item.innerText = "В галерею";
      });
    } else {
      document.querySelectorAll('.about-the-artist__img').forEach(item => {
        item.src = "img/png/unknown-artist-img.png";
      });
      document.querySelectorAll('.about-the-artist__name').forEach(item => {
        item.innerText = "Что мы о нём знаем?";
      });
      document.querySelectorAll('.about-the-artist__text').forEach(item => {
        item.innerText = "Пока ничего... Зато мы точно знаем, что в галерее есть на что посмотреть!";
      });
      document.querySelectorAll('.about-the-artist__life-year').forEach(item => {
        item.innerText = "";
      });
      document.querySelectorAll('.to-gallary-link').forEach(item => {
        item.innerText = "В галерею";
      });
    }
  });
}

//работа кнопок с именами артистов
function accordionBtnWork() {
  let artistActive = document.querySelector(".accordion__btn--active").innerText;
  
  document.querySelectorAll('.accordion__btn').forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".accordion__btn--active").forEach(btnActive => {
        btnActive.classList.remove("accordion__btn--active");
      });
      btn.classList.add("accordion__btn--active");
      artistActive = btn.innerText;
      artistShow(artistActive)
    });
  });

  artistShow(artistActive);
}

//Функция клика на заголовок аккордиона
function accordionHeadClik() {
  document.querySelectorAll('.ui-accordion-header').forEach(header => {
    header.addEventListener("click", () => {
      changingHeightActiveAccordion();
    });
  });
}

//работа кнопок с флагами стран
function flagsBtnWork() {
  document.querySelectorAll(".flags__country").forEach(radioCheck => {
    if(radioCheck.hasAttribute("checked")) {
      radioCheck.parentElement.classList.add("flags__country--border")
      completionAccordion(radioCheck.value, arrAllArtist);
      accordionBtnWork();
    }
  });
  listRadio = document.querySelectorAll(".flags__country").forEach(radio => {
    radio.addEventListener("click", (event) => {
      if(!radio.hasAttribute("checked")) {
        const country = radio.value;
        completionAccordion(country, arrAllArtist);
        accordionBtnWork();
        changingHeightActiveAccordion()

        document.querySelectorAll(".flags__country").forEach(radioCheck => {
          if(radioCheck.hasAttribute("checked")) {
            radioCheck.removeAttribute("checked");
            radioCheck.parentElement.classList.remove("flags__country--border")
          }
        });
        radio.setAttribute("checked", "");
        radio.parentElement.classList.add("flags__country--border")
      } 
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  flagsBtnWork();
  changingHeightActiveAccordion();
  accordionHeadClik();
});
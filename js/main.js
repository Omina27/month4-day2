var wrapperFilmCards = document.getElementById("cardWrapper")

var movies = [
    
    {
        filmNames:{
            title: 'Annihilation',
            smallThumbnail: 'http://i3.ytimg.com/vi/4hZi5QaMBFc/hqdefault.jpg',
            Rating:  7.4,
            year: 2017
        }
    },
    {
        filmNames:{
            title: 'New York Doll',
            smallThumbnail: 'http://i3.ytimg.com/vi/jwD04NsnLLg/hqdefault.jpg',
            Rating:  7.9,
            year: 2005
        }
    },
    {
        filmNames:{
            title: 'Snowed in at the House of Mouse',
            categories: 'Advanture',
            language: 'English',
            smallThumbnail: 'http://i3.ytimg.com/vi/WVd-EuoEf3U/hqdefault.jpg',
            Rating:  6.8,
            year: 2001
        }
    },
    {
        filmNames:{
            title: 'Mickey`s House of Villains',
            categories: 'Advanture',
            language: 'English',
            smallThumbnail: 'http://i3.ytimg.com/vi/saHzng8fxLs/hqdefault.jpg',
            Rating:  6.6,
            year: 2001
        }
    },
    {
        filmNames:{
            title: 'And Then I Go',
            categories: 'Advanture',
            language: 'English',
            smallThumbnail: 'http://i3.ytimg.com/vi/8CdIiD6-iF0/hqdefault.jpg',
            Rating:  7.6,
            year: 2017
        }
    },
    {
        filmNames:{
            title: 'An Extremely Goofy Movie',
            categories: 'Advanture',
            language: 'English',
            smallThumbnail: 'http://i3.ytimg.com/vi/H8oSvldAGfg/hqdefault.jpg',
            Rating:  6.4,
            year: 2000
        }
    },
    {
        filmNames:{
            title: 'Peter Rabbit',
            categories: 'Advanture',
            language: 'English',
            smallThumbnail: 'http://i3.ytimg.com/vi/7Pa_Weidt08/hqdefault.jpg',
            Rating:  6.6,
            year: 2018
        }
    },
    {
        filmNames:{
            title: 'Love Songs',
            categories: 'Advanture',
            language: 'English',
            smallThumbnail: 'http://i3.ytimg.com/vi/s54vpKAFmS0/hqdefault.jpg',
            Rating:  7.2,
            year: 2007
        }
    },

    {
        filmNames:{
            title: 'The Foster Boy',
            categories: 'Advanture',
            language: 'English',
            smallThumbnail: 'http://i3.ytimg.com/vi/E9Qv_XVJ-js/hqdefault.jpg',
            Rating:  7.4,
            year: 2011
        }
    },
    {
        filmNames:{
            title: 'Forever My Girl',
            categories: 'Advanture',
            language: 'English',
            smallThumbnail: 'http://i3.ytimg.com/vi/3vqcMr1q5Uc/hqdefault.jpg',
            Rating:  6.4,
            year: 2018
        }
    },
]

movies.forEach((film, index, array) => {
    var CARD = document.createElement('div')
    CARD.setAttribute('class', 'card')
    var CARD_HEADING = document.createElement('h3')
    CARD_HEADING.textContent = film.filmNames.title
    CARD_HEADING.classList.add('card__title')
    

    
    var CARD_IMG = document.createElement('img')
    CARD_IMG.classList.add('card__img')
    CARD_IMG.src = film.filmNames.smallThumbnail
    
    
    
    var CARD_YEAR = document.createElement('p')
    CARD_YEAR.classList.add('card__year')
    CARD_YEAR.textContent = film.filmNames.year
    
    var CARD_RATE = document.createElement('p')
    CARD_RATE.classList.add('card__rate')
    CARD_RATE.textContent = film.filmNames.Rating
    
    
    
    var CARD__BTN = document.createElement('div')
    CARD__BTN.classList.add('card__btn')
    
    var CARD_BUTTON_WATCH = document.createElement('button')
    CARD_BUTTON_WATCH.classList.add('card__button')
    CARD_BUTTON_WATCH.textContent = 'Watch trailer'
    
    var CARD_BUTTON_INFO = document.createElement('button')
    CARD_BUTTON_INFO.classList.add('card__button')
    CARD_BUTTON_INFO.textContent = 'More info'
    
    var CARD_BUTTON_BOOKMARK = document.createElement('button')
    CARD_BUTTON_BOOKMARK.classList.add('card__button')
    CARD_BUTTON_BOOKMARK.textContent = 'Bookmark'

    
    CARD.appendChild(CARD_IMG)
    CARD.appendChild(CARD_HEADING)
    CARD.appendChild(CARD_YEAR)
    CARD.appendChild(CARD_RATE)
    CARD.appendChild(CARD__BTN)
    CARD__BTN.appendChild(CARD_BUTTON_WATCH)
    CARD__BTN.appendChild(CARD_BUTTON_INFO)
    CARD__BTN.appendChild(CARD_BUTTON_BOOKMARK)
    
    
    cardWrapper.appendChild(CARD)
   
}); 
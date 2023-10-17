import History from './images/history-picture.jpeg'
import Technology from './images/technology.jpeg'
import mathematics from './images/mathematics.jpeg'
import geography from './images/geography.jpeg'
import celebrities from './images/celebrities.webp'
import comics from './images/comics.webp'
import film from './images/film.png'
import gadgets from './images/gadgets.webp'
import music from './images/music.jpeg'
import sports from './images/sports.jpeg'
import vehicles from './images/vehicles.jpeg'
import videoGames from './images/videoGames.jpeg'
import comebackBadge from './images/comeback-badge.png'
import winnerBadge from './images/winner-badge.png'
import luckyBadge from './images/lucky-badge.png'

export const badges = [
  { src: comebackBadge, alt: 'Comeback Medal', name: 'Comeback' },
  { src: winnerBadge, alt: 'Winner Medal', name: 'Winner' },
  { src: luckyBadge, alt: 'Lucky Medal', name: 'Lucky' },
]

export const categories = {
  set1: [
    { name: 'History', image: History, overlay: 'history-overlay' },
    { name: 'geography', image: geography, overlay: 'geography-overlay' },
    { name: 'Technology', image: Technology, overlay: 'technology-overlay' },
    { name: 'mathematics', image: mathematics, overlay: 'mathematics-overlay' },
  ],
  set2: [
    {
      name: 'History',
      image: History,
      overlay: 'history-overlay',
      number: '23',
    },
    {
      name: 'geography',
      image: geography,
      overlay: 'geography-overlay',
      number: '22',
    },
    {
      name: 'Technology',
      image: Technology,
      overlay: 'technology-overlay',
      number: '18',
    },
    {
      name: 'mathematics',
      image: mathematics,
      overlay: 'mathematics-overlay',
      number: '19',
    },
    {
      name: 'celebrities',
      image: celebrities,
      overlay: 'celebrities-overlay',
      number: '26',
    },
    { name: 'comics', image: comics, overlay: 'comics-overlay', number: '29' },
    { name: 'film', image: film, overlay: 'film-overlay', number: '11' },
    {
      name: 'gadgets',
      image: gadgets,
      overlay: 'gadgets-overlay',
      number: '30',
    },
    { name: 'music', image: music, overlay: 'music-overlay', number: '12' },
    { name: 'sports', image: sports, overlay: 'sports-overlay', number: '21' },
    {
      name: 'vehicles',
      image: vehicles,
      overlay: 'vehicles-overlay',
      number: '28',
    },
    {
      name: 'videoGames',
      image: videoGames,
      overlay: 'videoGames-overlay',
      number: '15',
    },
  ],
}

export const instructions = [
  'This quiz consists of 5 multiple-choice questions. To be successful with the quizzes, it’s important to conversant with the topics. Keep the following in mind:',
  'Timing - You need to complete each of your attempts in one sitting, as you are allotted 30 minutes to each attempt. Answers - You may review your answer-choices and compare them to the correct answers after your final attempt.',
  'To start, click the "Start" button. When finished, click the "Submit" button.',
]

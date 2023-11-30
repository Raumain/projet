// @ts-nocheck
const tweets = [
  {
    id: 1,
    content: 'Lorem ipsum',
    author: 'Ada',
    likes: 10
  },
  {
    id: 2,
    content: 'Dolor sit amet',
    author: 'Steve',
    likes: 8
  },
  {
    id: 3,
    content: 'Consectetur adipiscing elit',
    author: 'Grace',
    likes: 12
  },
  {
    id: 4,
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    author: 'Alan',
    likes: 2
  },
  {
    id: 5,
    content: 'Ut enim ad minim veniam',
    author: 'Ada',
    likes: 20
  }
]


/**
 * @param {Object} informations
 * @param {string} informations.content
 * @param {string} informations.author
 * @param {number} informations.likes
 * @returns {HTMLLIElement}
 * @example
 * createTweet({
 *  content: 'Lorem ipsum',
 *  author: 'Ada',
 *  likes: 10
 * })
 */
function createTweet(informations) {
  const tweet = document.createElement('li')
  tweet.classList.add('tweet')
  Object.entries(informations).forEach(([className, elementContent]) => {
    if (className === 'id') return
    const element = document.createElement('p')
    element.classList.add(className)
    element.textContent = elementContent
    tweet.appendChild(element)
  })
  return tweet
}


const tweetsListElement = document.querySelector('#tweets-list')
tweets.forEach(tweet => {
  tweetsListElement.appendChild(createTweet(tweet))
})

// Pour afficher tous les tweets, je parcours simplement le tableau tweets.
// Pour chaque tweet, j'insère dans la liste de tweets le nouveau tweet crée par la fonction createTweet.
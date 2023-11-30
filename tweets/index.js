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

    if (className === 'likes' && elementContent > 10) {
      element.classList.add('favorite')
    }

    if (className === 'likes') {
      tweet.insertBefore(element, tweet.children[1])
    }
    else {
      tweet.appendChild(element)
    }
  })

  return tweet
}


const tweetsListElement = document.querySelector('#tweets-list')
tweets.forEach(tweet => {
  tweetsListElement.appendChild(createTweet(tweet))
})

// Pour afficher les informations dans le bon ordre
// Je vérifie si la clé courante est "likes"
// Si c'est le cas, au lieu de l'insérer à la suite des autres enfants de tweet, je l'insère après le premier enfant de tweet
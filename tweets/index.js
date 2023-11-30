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
tweetsListElement.append(createTweet(tweets[0]))

// J'ai crée une fonction `createTweet` qui permet de créer un tweet plus facilement en lui passant les bons paramètres.
// Elle prend en paramètre un objet avec les informations du tweet.
// La fonction crée un élément `li` avec la classe `tweet`.
// Ensuite, elle parcourt les clés et valeurs de l'objet passé en paramètre.
// Pour chaque clé/valeur, elle crée un élément `p` avec la bonne classe et le bon contenu.
// Enfin, elle ajoute l'élément `p` à l'élément `li`.
// Et elle retourne l'élément `li`.

const onload = () => {
  const app = document.getElementById('root');
  const logo = document.createElement('img');
  logo.src = 'images/logo.png';

  const container = document.createElement('div');
  container.setAttribute('class', 'container');

  app.appendChild(logo);
  app.appendChild(container);

  // Are we sure that's the right endpoint?
  fetch('https://ghibliapi.herokuapp.com/films')
    .then((response) => {
      console.log(response);
      // Work with JSON data here
      // Wait a minute, how do we access the API response? What does 'data' look like? 
      // Let's console.log here!
      return response.json();
    })
    .then((data) => {
      data.forEach((film) => {
        console.log(film.title);

        // Create a div with a card class
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        // Create an h1 and set the text content to the film's title
        const h1 = document.createElement('h1');
        h1.textContent = film.title;

        // Create a p and set the text content to the film's description
        const p = document.createElement('p');
        film.description = film.description.substring(0, 300); // Limit to 300 chars
        p.textContent = `${film.description}...`; // End with an ellipses

        // Append the cards to the container element
        container.appendChild(card);

        // Each card will contain an h1 and a p
        card.appendChild(h1);
        card.appendChild(p);
      })

    })
    .catch((err) => {
      // Do something for an error here
      console.log(err)
    })
}
/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
// axios.get("https://api.github.com/users/diddleslip")
// .then(response => {
//   console.log(response)
// })
// .catch(() => {
//   console.log("Failed :(");
// })
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/

/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

let followersArray = [];

function gitUser(object) {
  const card = document.createElement('div'), 
        image = document.createElement('img'), 
        cardInfo = document.createElement('div'), 
        name = document.createElement('h3'), 
        userName = document.createElement('p'), 
        location = document.createElement('p'), 
        profile = document.createElement('p'), 
        anchor = document.createElement('a'), 
        followers = document.createElement('p'), 
        following = document.createElement('p'), 
        bio = document.createElement('p'); 

  card.append(image, cardInfo); 
  cardInfo.append(name, userName, location, profile, followers, following, bio); 


  card.classList.add('card'); 
  cardInfo.classList.add('card-info'); 
  name.classList.add('name'); 
  userName.classList.add('username'); 

  anchor.href = object.data.html_url; 

  image.src = object.data.avatar_url;
  name.textContent = object.data.name;
  userName.textContent = object.data.login;
  location.textContent = `Location: ${object.data.location}`;
  anchor.textContent = object.data.html_url;
  profile.textContent = `Profile: `;
  followers.textContent = `Followers: ${object.data.followers}`;
  following.textContent = `Following: ${object.data.following}`;
  bio.textContent = `Bio: ${object.data.bio}`;

  profile.append(anchor); 

  return card; 
}

const parent = document.querySelector('.cards'); 
axios.get('https://api.github.com/users/Diddleslip')
  .then(response => {
    console.log(response);
    parent.append(gitUser(response)); 
  })
  .catch(() => {
    console.log("Failed :(");
  })

axios.get("https://api.github.com/users/diddleslip/followers")
    .then(response => {
      response.data.forEach((X) => {
        followersArray.push(X.url);
      })
  })
    .then (() => {followersArray.forEach(X => {
      axios.get(X)
      .then(response => {
        console.log(response);
        parent.append(gitUser(response)); 
      })
      .catch(() => {
        console.log("Failed :(");
      })})//THIS IS COPY OF OG
    })
    .catch(() => {
      console.log("Fail");
    })

    console.log(followersArray);





/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/

/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/

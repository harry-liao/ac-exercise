const BASE_URL = 'https://lighthouse-user-api.herokuapp.com'
const INDEX_URL = BASE_URL + '/api/v1/users/'

const users = []

const dataPanel = document.querySelector('#data-panel')

function renderFriendList(data) {
  let rawHTML = ``
  data.forEach((item) => {
    rawHTML += `<div class="col-sm-3" style="border: 2px black groove;" >
        <img class="card-img-top mt-3" src="${item.avatar}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">${item.name} ${item.surname}</h5>
          <li class="email">Email: ${item.email}</li>
          <li class="gender">Gender: ${item.gender}</li>
          <li class="age">Age: ${item.age}</li>
          <li class="region">Region: ${item.region}</li>
          <li class="birthday">Birthday: ${item.birthday}</li>
        </div>
      </div>`
  });
  dataPanel.innerHTML = rawHTML
}


axios
  .get(INDEX_URL)
  .then((response) => {
    console.log(response)
    users.push(...response.data.results)
    renderFriendList(users)
  })
  .catch((err) => console.log(err))
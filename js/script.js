const team = [
  {
    name: 'Wayne Barnett',
    role: 'Founder & CEO',
    image: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    name: 'Angela Caroll',
    role: 'Chief Editor',
    image: 'angela-caroll-chief-editor.jpg',
  },
  {
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg',
  },
  {
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg',
  },
  {
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg',
  },
  {
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg',
  },
];

// Ogni membro ha le informazioni necessarie per stampare la relativa card: Nome, Ruolo e Foto.
// Prendendo come riferimento la card di esempio presente nell’html, stampiamo dinamicamente una card per ogni membro del team.

const teamContainer = document.querySelector(`.team-container`)
const userNameInput = document.getElementById(`name`);
const roleInput =  document.getElementById(`role`);
const imageInput =  document.getElementById(`image`);
const button = document.getElementById(`addMemberButton`);

console.log(userNameInput, roleInput, imageInput, button)

button.addEventListener(`click`, function(){
  const userName = userNameInput.value;
  const role = roleInput.value;
  const image = imageInput.value;

  if (userName.length > 0 && role.length > 0 && image.length > 0){
  const obj = {
    name: userName,
    role: role,
    image: image
  }

  const templateDiv = `
  <div class="team-card">
    <div class="card-image">
      <img src="${obj.image}" alt="${obj.name}"
      />
    </div>
    <div class="card-text">
      <h3>${obj.name}</h3>
      <p>${obj.role}</p>
    </div>
  </div>   
`

  team.push(obj);
  teamContainer.innerHTML+=templateDiv;
  userNameInput.value = ``;
  roleInput.value = ``;
  imageInput.value = ``;

  }
  else {
    alert(`Please, insert valid data.`)
  }

})
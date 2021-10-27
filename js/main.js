const listaIcone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

const mappaColori = {
    "animal": "blue",
    "vegetable": "orange",
    "user": "purple"
}

const containerIcons = document.querySelector(".card-container");
const selectTypes = document.getElementById("filter_select")

function stampCard (cards) {
    containerIcons.innerHTML = "";
for (let i = 0; i < cards.length; i++) {
    const icona = cards[i];
    const {family, prefix, name, type} = icona;
    const colori = mappaColori[type];

    
    containerIcons.innerHTML += `
    <div class="col">
      <div class="card h-100 shadow-sm">
        <div class="card-img-top icons-img">
          <i class="${family} ${prefix + name}" style="color: ${colori}"></i>
        </div>
        <div class="card-body">
          <div class="card-title text-center icons-title">${name}</div>
        </div>
      </div>
    </div>`;

}

}

stampCard(listaIcone);

selectTypes.addEventListener("change", function() {
    const types = listaIcone.filter((icon)=>{
        if(icon.type === this.value || this.value === "") {
            return true 
        }
    }) 

    stampCard(types)
})
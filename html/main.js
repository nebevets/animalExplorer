
$(initializeApp);

function initializeApp(){
	loadData();
}

function loadData(){
	const options = {
		url: 'test.js',
		dataType: 'json',
		method: 'get',
		success: loadAllAnimals
	}
	$.ajax(options);
}

function loadAllAnimals( animalData ){
	for(let i=0; i< animalData.length; i++){
		renderOneAnimal( animalData[i]);
	}
}

function renderOneAnimal( animal ){
	const container = $("<div>",{
		'class': 'animalContainer'
	});
	const name = $("<div>", {
		'class': 'name',
		text: animal.name
	});
	const avatar = $("<div>",{
		'class': 'avatar small',
		css: {
			backgroundImage: `url(${animal.image})`
		}
	});
	container.append(name, avatar);
	$("#animalList").append(container);
}








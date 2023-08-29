// Write three different ways to remove all of the elements from the following array:

function remove1(array) {
	array.splice(0, array.length);
	console.log(array);
	return array;
}

function remove2(array) {
	while (array.length) {
		array.pop();
	}
	console.log(array);
	return array;
}

function remove3(array) {
	while (array.length) {
		array.shift();
	}
	console.log(array);
	return array;
}

function remove4(array) {
	array.length = 0;
	console.log(array);
	return array;
}


let numbers1 = [1, 2, 3, 4];
let numbers2 = [1, 2, 3, 4];
let numbers3 = [1, 2, 3, 4];
let numbers4 = [1, 2, 3, 4];

remove1(numbers1);
remove2(numbers2);
remove3(numbers3);
remove4(numbers4);
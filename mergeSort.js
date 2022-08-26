let iteration = 1;
const mergeSort = (unsortedArray) => {
	console.log(
		"this is the unsorted Array in iteration ",
		iteration,
		": ",
		unsortedArray
	);
	iteration++;
	let n = unsortedArray.length;
	console.log("this is N: ", n);
	if (n <= 1) {
		console.log("triggered");
		return unsortedArray;
	}
	// mergeSort Left
	let left = unsortedArray.slice(0, Math.round(n / 2));
	console.log("LEFT ARRAY = ", left);
	// mergeSort Right
	let right = unsortedArray.slice(Math.round(n / 2), n);
	console.log("RIGHT ARRAY = ", right);

	// const middleIndex = Math.floor(unsortedArray.length / 2);
	// const left = unsortedArray.slice(0, middleIndex);
	// const right = unsortedArray.slice(middleIndex);

	return merge(mergeSort(left), mergeSort(right));
};

const merge = (a, b) => {
	console.log("IN MERGE FUNC");
	console.log("THIS IS LEFT = ", a);
	console.log("THIS IS RIGHT = ", b);
	const sortedArray = [];
	let sortedArrayIndex = 0;

	// let aIndex = 0;
	// let bIndex = 0;

	console.log("testing condition");

	while (a.length && b.length) {
		//while (aIndex < a.length && bIndex < b.length) {
		console.log("INSIDE WHILE LOOP");
		if (a[0] < b[0]) {
			sortedArray[sortedArrayIndex] = a.shift();
			//		sortedArray.push(a[aIndex]);
			sortedArrayIndex++;
			//aIndex++;
		} else {
			sortedArray[sortedArrayIndex] = b.shift();
			//sortedArray.push(b[bIndex]);
			sortedArrayIndex++;
			//bIndex++;
		}
	}

	//let result = [...sortedArray, ...a.slice(aIndex), ...b.slice(bIndex)];
	let result = [...sortedArray, ...a, ...b];
	console.log("RESULT ARRAY IS: ", result);
	return result;
};

mergeSort([3, 2, 5, 4, 17, 6, 8, 9, 9, 22]);

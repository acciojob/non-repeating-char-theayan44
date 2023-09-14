function firstNonRepeatedChar(str) {
 // Write your code here
	let arr = [];
	for (let i = 0; i < 26; i++) {
		arr.push(0);
	}
	for (let i = 0; i < str.length; i++) {
		arr[str.charCodeAt(i) - 97]++;
	}
	for(let i=0; i<arr.length; i++){
		if(arr[i] == 1) return String.fromCharCode(i + 97);
	}
	return null;
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 

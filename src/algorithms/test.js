const arr = [3, 4, 10, 7, 8, 5, 1000];

console.log(arr.reduce((max = -1, member) => max = member > max ? member : max));
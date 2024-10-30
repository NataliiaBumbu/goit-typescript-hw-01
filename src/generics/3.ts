function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
	return Object.assign({}, objA, objB);
}

// function merge (objA, objB) {
//       return Object.assign(objA, objB);
//     }
    
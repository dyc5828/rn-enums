'use strict'
/**
 * rn-enums (React Native Enums)
 */
export default (...args) => {
	// check duplicates
	let seen = {}
	args.filter((arg) => {
		if ( seen.hasOwnProperty(arg) ) {
			throw `Duplicate enumerator: '${arg}'`
		}
		seen[arg] = true
	})

	const check = type => {
		// console.log('enums check type:', type)
		return typeof type === 'number' && type > 0 && type <= args.length ? true : false
	}

	// properties
	let _enum = {
		_all: [],
		_keys: args,
		all: i => _enum._all[i],
		keys: i => _enum._keys[i],
		type: val => _enum._keys[val-1],
		check,
	}

	args.forEach((arg, i) => {
		// console.log(arg,i)
		_enum[arg] = i+1
		_enum._all[i] = i+1
	})

	return Object.freeze(_enum)
}
// console.log(process.versions.node);
// console.log(process.argv);

// const [, , firstname, lastname] = process.argv;

// console.log(`Your name is ${firstname} ${lastname}`);

/**
 *
 * @param {string} flag
 * @returns {string}
 */
const grabFlagValue = (flag) => {
	const arguments = process.argv;
	const flagValueIndex = arguments.indexOf(flag) + 1;
	return arguments[flagValueIndex];
};

const user = grabFlagValue('--user');
const greeting = grabFlagValue('--greeting');

console.log(greeting);

// process.stdin
// process.stdout.write('Hello ');
// process.stdout.write('World \n\n\n');

const questions = [
	'What is your name?',
	'What would you rather be doing?',
	'What is your preferred programming language?',
];

const askQuestion = (questionIndex = 0) => {
	process.stdout.write(`\n\n\n${questions[questionIndex]}\n`);
	process.stdout.write(`>`);
};

askQuestion(0);

const answers = [];

process.stdin.on('data', (data) => {
	answers.push(data.toString().trim());
	if (answers.length < questions.length) {
		askQuestion(answers.length);
	} else {
		// process.stdout.write(`\n\n${} \n\n`);
		process.exit();
	}
});

process.on('exit', () => {
	const [name, activity, lang] = answers;
	console.log(`Thank you for your answers.
    \nGo ${activity} ${name}, you can write ${lang} code later!!`);
});

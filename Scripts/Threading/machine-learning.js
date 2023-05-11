importScripts('https://unpkg.com/ml5@latest/dist/ml5.min.js')

const jsondata = [
		{input: {day: 3, time: 1800}, output: {genre: "Horror"}},
		{input: {day: 4, time: 1500}, output: {genre: "Action"}},
		{input: {day: 3, time: 1000}, output: {genre: "Action"}},
		{input: {day: 4, time: 1000}, output: {genre: "Action"}},
		{input: {day: 2, time: 800}, output: {genre: "Arcade"}},
		{input: {day: 3, time: 2100}, output: {genre: "Horror"}},
		{input: {day: 5, time: 1200}, output: {genre: "Runner"}},
		{input: {day: 5, time: 1300}, output: {genre: "Runner"}},
		{input: {day: 2, time: 1100}, output: {genre: "Action"}},
		{input: {day: 5, time: 1300}, output: {genre: "Incremental"}},
		{input: {day: 1, time: 1500}, output: {genre: "Incremental"}},
];
//var jsondata = [["Genre":"Horror","Day":"3","Time":"1800"],["Genre":"Action","Day":"4","Time":"1500"],["Genre":"Action","Day":"3","Time":"1000"],["Genre":"Action","Day":"4","Time":"1000"],["Genre":"Arcade","Day":"2","Time":"800"},{"Genre":"Horror","Day":"3","Time":"2100"},{"Genre":"Runner","Day":"5","Time":"1200"},{"Genre":"Runner","Day":"5","Time":"1300"},{"Genre":"Action","Day":"2","Time":"1100"},{"Genre":"Incremental","Day":"5","Time":"1300"},{"Genre":"Incremental","Day":"1","Time":"1500"}]

// Define the options for the neural network
const options = {
  inputs: ['day', 'time'],
  outputs: ['genre'],
  task: 'classification',
  // debug: true
  // task: 'regression'
};

// Create a new neural network
const nn = ml5.neuralNetwork(options);
ml5.tf.setBackend('cpu');

// Load the training data from the jsondata variable
jsondata.forEach(item => {
  nn.addData(item.input, item.output);
});
nn.normalizeData();
nn.train({epochs: 5}, whileTraining, finishedTraining);

function whileTraining(epoch, loss) {
  console.log(`Epoch: ${epoch} - Loss: ${loss.loss}`);
}

function finishedTraining() {
	console.log("finished")
  // Use the trained model to make a prediction
  const input = {
    day: 4,
    time: 1500
  };
  nn.classify(input, gotResults);
}

function gotResults(error, results) {
  if (error) {
    console.error(error);
    return;
  }
  postMessage(results)
  console.log(results);
}
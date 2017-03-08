var filesYo = require('fs'); //node module, fs=file system //7 8:00
var https = require('https'); //node module, creting https
//creat new html file, two arguments
			//1-(__dirname + '/index.html')where the file created and where is the file
			//2-the content of the file (<h1>HTML rocks</h1>)
filesYo.writeFile(__dirname + '/index.html', '<h1>HTML rocks</h1>'); //__dirname - help to save/located the file in the folder the test.js located, node-experiment/indez.html(commend line)

var dogUrl = 'https://raw.githubusercontent.com/LearnWebCode/welcome-to-git/master/images/dog.jpg';
			//function with one arguments createWriteStream('where to save and name',)
var dogFile = filesYo.createWriteStream(__dirname + '/node-dog.jpg'); //name the image

//request the dog image   //get('URL we want to get', 'what we want the get function to do with the content that live in the URL')
var request = https.get(dogUrl, function(response) { //code that go to the internet and get the file/image
	response.pipe(dogFile); //2arguments - dogUrl(link), 
	//save the data from dogUrl and save it in new file call node-dog.jpg
}); //get - go to the internet and get

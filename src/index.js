const core = require("@actions/core");
const exec = require("@actions/exec");

/* 

If we don't want to use core package :
This "INPUT_GITHUB_PERSON" shoudl be in capital letters
even if input vatiables is in smallcase or not
const GITHUB_TOKEN = core.getInput("GITHUB_TOKEN");
const TENOR = core.getInput("TENOR");

*/ 



const GITHUB_TOKEN = process.env.INPUT_GITHUB_PERSON;
const TENOR = process.env.INPUT_TENOR;
const src = __dirname;
console.log("GITHUB_TOKEN:"+GITHUB_TOKEN + " src:" + src +" TENOR:"+TENOR )
console.log('Hello, world!');


  
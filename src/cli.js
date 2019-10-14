#!/usr/bin/env node

var main_index = require('./index.js');
var console_colors = require('./common/consoleColors');
var execute  = ()=>{
    const[,, ...args] = process.argv
    console.log(console_colors.info,'SuiteNess : started !!!')
    if(args.length === 2){
        main_index(process.cwd(),args[0],args[1]);
        console.log(console_colors.info,'Suiteness : Successfully executed !!!');
    }else {
        console.log(console_colors.error,'Invalid Params.\nPlease enter valid Module Name and Type.');
    }
}
execute();
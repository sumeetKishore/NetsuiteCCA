var cc = require('../../common/consoleColors');
var constants = require('../../common/constants');
var main = require('../factory_main/Create_Main');
var path = require('path');
class SL_Factory{
    constructor(directory, module_name, module_type){
        this.directory = directory;
        this.module_name = module_name;
        this.module_type = module_type;
    }
    execute(){
      this.create_SL_files();
   }
   
   create_SL_files(){
       console.log(cc.log, 'Creating main file.')
        var main_files = new main(this.directory,this.module_name, this.module_type);
        main_files.execute();
   }
}


module.exports = SL_Factory;
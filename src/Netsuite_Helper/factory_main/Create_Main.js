const path = require('path');
const fs = require('fs');
const cc = require('../../common/consoleColors')
const constants = require('../../common/constants')
class CreateMain{
    constructor(directory, module_name, module_type){
        this.directory = directory;
        this.module_name = module_name;
        this.module_type = module_type;
        this.src_directory = path.join(directory,'src',module_name,'main');
        this.test_directory = path.join(directory,'test', 'jasmine', 'unit', 'specs', module_name);
    }

    create_src_file_content(){
        var content = `/**\n*@NApiVersion 2.x\n*@NScriptType ${constants.mod_defs[this.module_type]}\n*/`;
        var file_prefix = this.module_type.toUpperCase()+'_'+this.module_name.replace(/ /g,"_");
        content+=`define(["../ui/controller/${file_prefix}_controller",
            "../usecase/${file_prefix}_usecase",
            "../gateway/${file_prefix}_gateway"
          ], function(${file_prefix}_controller, ${file_prefix}_usecase, ${file_prefix}_gateway) {\n`;

        content+=`  function get_controller() {
            var gateway = new ${file_prefix}_gateway({ dependencies: {} });
            var usecase = new ${file_prefix}_usecase({
              dependencies: {
                ${file_prefix}_gateway: gateway
              }
            });
            var controller = new ${file_prefix}_controller({
              dependencies: {
                ${file_prefix}_usecase: usecase
              }
            });
        
            return controller;
          }\n`;
          var mod_methods = constants.mod_methods[this.module_type];
          var method_scaffold = '';
          var return_scaffold = `   return{\n`;
          for(var i in mod_methods){
            method_scaffold+=`  function ${mod_methods[i]}(context) {
                var controller = get_controller();
                /** TODO **/
              }\n`;
            return_scaffold+=`    ${mod_methods[i]}: ${mod_methods[i]}\n`;
          }
          return_scaffold+=`}\n`;
        content+=method_scaffold;
        content+=return_scaffold;
        content+=`});`;
        return content;
    }

    create_srcFile(){
        var file_name = this.module_type.toUpperCase()+'_'+this.module_name.replace(/ /g,"_")+'.js';
        var file_path = path.join(this.src_directory,file_name);
        var file_content = "this is a test file";
        if(!fs.existsSync(file_path)){
            fs.writeFileSync(file_path, this.create_src_file_content());
            console.log(cc.log,'src file created');
        }else{
            console.log(cc.warning, 'Src file already exist');
        }
    }

    create_specFile(){

    }

    execute(){
    if(!fs.existsSync(this.src_directory)){
        fs.mkdirSync(this.src_directory, { recursive: true });
    }
        this.create_srcFile();
    if(!fs.existsSync(this.test_directory)){
        fs.mkdirSync(this.test_directory, { recursive: true });
    }
        this.create_specFile();
    
    }
}

module.exports = CreateMain;
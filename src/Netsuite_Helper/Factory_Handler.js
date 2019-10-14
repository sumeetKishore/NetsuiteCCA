const fs  = require('fs');
const path = require('path');
const cc = require('../common/consoleColors');
class Factory_handler{
    constructor(directory, module_name,module_type){
        this.directory = directory;
        this.module_name = module_name;
        this.module_type = module_type;
        this.factory_enum = {'SL':require('./Factories/SL_factory')}
    }
    
}
function checkIfDirectoryExist(directory,module_name){
    var src_module_path = path.join(directory,'src', module_name);
    var test_module_path = path.join(directory,'test', 'jasmine', 'unit', 'specs', module_name);
    console.log(cc.log,'checking for directory');
    if(fs.existsSync(directory)){
        console.log(cc.log,'directory exists');
        if(!fs.existsSync(src_module_path)){
            console.log(cc.log,'creating src directory'+ src_module_path);
            fs.mkdirSync(src_module_path, { recursive: true });
        }
        if(!fs.existsSync(test_module_path)){
            console.log(cc.log,'creating test directory'+test_module_path);
            fs.mkdirSync(test_module_path, { recursive: true })
        }
        return true;
    }else{
        return false;
    }

}
    Factory_handler.prototype.execute = function(){
        if(!this.factory_enum[this.module_type]){
            var err = new Error(`File type ${this.module_type} is not valid file type . Please select from valid script type.`);
            throw err;
        }else if (checkIfDirectoryExist(this.directory, this.module_name)){
            var factory_object=new  this.factory_enum[this.module_type](this.directory, this.module_name, this.module_type);
            factory_object.execute();
        }
    };


module.exports = Factory_handler;
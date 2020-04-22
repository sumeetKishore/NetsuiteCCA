var Factory_handler = require('./Netsuite_Helper/Factory_Handler');
var constants = require('./common/constants');
var cc = require('./common/consoleColors');
var init = function(directory, module_name, module_type){
    if(module_name === constants.COMMAND_INIT)
    {
        console.log(cc.info, `Scaffold Creation started.`);
        var factory_handler = new Factory_handler(directory,module_name,module_type);
        factory_handler.execute();

    }else {
        console.log(cc.log, `directory : ${directory}\nModule Name : ${module_name}\nModule Type : ${constants.mod_defs[module_type]}`);
        console.log(cc.log, `\nMethods added : ${constants.mod_methods[module_type]}\n`);
        var factory_handler = new Factory_handler(directory, module_name, module_type);
        factory_handler.execute();
    }
}
module.exports = init;
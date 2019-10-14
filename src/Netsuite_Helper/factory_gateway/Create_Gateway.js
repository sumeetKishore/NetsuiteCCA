const path = require("path");
const fs = require("fs");
const cc = require("../../common/consoleColors");
const constants = require("../../common/constants");
class CreateGateway {
  constructor(directory, module_name, module_type) {
    this.directory = directory;
    this.module_name = module_name;
    this.module_type = module_type;
    this.src_directory = path.join(directory, "src", module_name, "gateway");
    this.test_directory = path.join(
      directory,
      "test",
      "jasmine",
      "unit",
      "specs",
      module_name,
      "gateway"
    );
  }

  create_src_file_content() {
    var content = `/***\n\tCopyright (c) 2018, Oracle and/or its affiliates. All rights reserved.\n*/\n`;
    var file_prefix =
      this.module_type.toUpperCase() +
      "_" +
      this.module_name.replace(/ /g, "_");
    content += `define(['../../Common/constants/constants'],function(constants){
            var scope;
            function ${file_prefix}_Gateway(option) {
                _throwErrorWhenInvalidParameter();
                 function _throwErrorWhenInvalidParameter() {  
                    if (!options) throw new Error(constants.ERROR_CONST.OPTIONS);
                    if (!options.dependencies) throw new Error(constants.ERROR_CONST.DEPENDENCIES);
                }
        
                scope = {
                    dependencies: options.dependencies
                };
            }
        return ${file_prefix}_Gateway;
        
        });`;
    return content;
  }

  create_srcFile() {
    var file_name =
      this.module_type.toUpperCase() +
      "_" +
      this.module_name.replace(/ /g, "_") +
      "_gateway.js";
    var file_path = path.join(this.src_directory, file_name);
    if (!fs.existsSync(file_path)) {
      fs.writeFileSync(file_path, this.create_src_file_content());
      console.log(cc.log, "gateway file created");
    } else {
      console.log(cc.warning, "gateway file already exist");
    }
  }

  create_spec_file_content() {
    var file_prefix =
      this.module_type.toUpperCase() +
      "_" +
      this.module_name.replace(/ /g, "_");
    var content = `/**
*   Copyright (c) 2018, Oracle and/or its affiliates. All rights reserved.
*
* @NModuleScope Public
*/
define(['../../../../../../src/${this.module_name}/usecase/${file_prefix}_gateway'
],function(gateway){
	describe('Unit Tests: Route Delivery gateway', function() {
			/*TODO*/ 

});
});
`;
    return content;
  }

  create_specFile() {
    var file_name =
      this.module_type.toUpperCase() +
      "_" +
      this.module_name.replace(/ /g, "_") +
      "_gateway_Spec.js";
    var file_path = path.join(this.test_directory, file_name);
    if (!fs.existsSync(file_path)) {
      fs.writeFileSync(file_path, this.create_spec_file_content());
      console.log(cc.log, "Gateway spec file created");
    } else {
      console.log(cc.warning, "Gateway spec file already exist");
    }
  }

  execute() {
    if (!fs.existsSync(this.src_directory)) {
      fs.mkdirSync(this.src_directory, { recursive: true });
    }
    this.create_srcFile();
    if (!fs.existsSync(this.test_directory)) {
      fs.mkdirSync(this.test_directory, { recursive: true });
    }
    this.create_specFile();
  }
}

module.exports = CreateGateway;

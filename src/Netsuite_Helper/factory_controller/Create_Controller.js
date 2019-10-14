const path = require("path");
const fs = require("fs");
const cc = require("../../common/consoleColors");
const constants = require("../../common/constants");
class CreateGateway {
  constructor(directory, module_name, module_type) {
    this.directory = directory;
    this.module_name = module_name;
    this.module_type = module_type;
    this.src_directory = path.join(
      directory,
      "src",
      module_name,
      "ui",
      "controller"
    );
    this.test_directory = path.join(
      directory,
      "test",
      "jasmine",
      "unit",
      "specs",
      module_name,
      "ui",
      "controller"
    );
  }

  create_src_file_content() {
    var content = `/***\n\tCopyright (c) 2018, Oracle and/or its affiliates. All rights reserved.\n*/\n`;
    var file_prefix =
      this.module_type.toUpperCase() +
      "_" +
      this.module_name.replace(/ /g, "_");
    content += `define(['../../../Common/constants/constants'],function(constants){
            var scope;
            function ${file_prefix}_Controller(option) {
                _throwErrorWhenInvalidParameter();
                 function _throwErrorWhenInvalidParameter() {  
                    if (!options) throw new Error(constants.ERROR_CONST.OPTIONS);
                    if (!options.dependencies) throw new Error(constants.ERROR_CONST.DEPENDENCIES);
                    if (!options.dependencies['${file_prefix}_usecase']) throw new Error(constants.ERROR_CONST.USECASE);
                }
        
                scope = {
                    dependencies: options.dependencies
                };
            }
        return ${file_prefix}_Controller;
        
        });`;
    return content;
  }

  create_srcFile() {
    var file_name =
      this.module_type.toUpperCase() +
      "_" +
      this.module_name.replace(/ /g, "_") +
      "_controller.js";
    var file_path = path.join(this.src_directory, file_name);
    if (!fs.existsSync(file_path)) {
      fs.writeFileSync(file_path, this.create_src_file_content());
      console.log(cc.log, "Controller file created");
    } else {
      console.log(cc.warning, "Controller file already exist");
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
define(['../../../../../../../src/${this.module_name}/ui/controller/${file_prefix}_controller'
],function(Controller){
	describe('Unit Tests: ${this.module_name} Controller', function() {
	var controllerObject, usecaseStub;
		describe('constructor functions', function(){ 
			it('should error when parameters are missing', function() {
				function noOptions() {
					 new UseCase();
				}
				function noDependencies() {
					 new UseCase({});
				}
				expect(noOptions).toThrowError();
				expect(noDependencies).toThrowError();
});
			it('should create Controller object successfully.', function() {
				usecaseStub = {
					/*Update usecase stub*/
				};

				var options = {
					dependencies: {
						${this.file_prefix}_usecase: usecaseStub
					}
				}
					controllerObject = new Controller(options);
				expect(controllerObject instanceof Controller).toBe(true);
			});
		});


});
});`;
    return content;
  }

  create_specFile() {
    var file_name =
      this.module_type.toUpperCase() +
      "_" +
      this.module_name.replace(/ /g, "_") +
      "_controller_Spec.js";
    var file_path = path.join(this.test_directory, file_name);
    if (!fs.existsSync(file_path)) {
      fs.writeFileSync(file_path, this.create_spec_file_content());
      console.log(cc.log, "Controller spec file created");
    } else {
      console.log(cc.warning, "Controller spec file already exist");
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

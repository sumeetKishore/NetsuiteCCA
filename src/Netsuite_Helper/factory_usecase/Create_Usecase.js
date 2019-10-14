const path = require("path");
const fs = require("fs");
const cc = require("../../common/consoleColors");
const constants = require("../../common/constants");
class CreateGateway {
  constructor(directory, module_name, module_type) {
    this.directory = directory;
    this.module_name = module_name;
    this.module_type = module_type;
    this.src_directory = path.join(directory, "src", module_name, "usecase");
    this.test_directory = path.join(
      directory,
      "test",
      "jasmine",
      "unit",
      "specs",
      module_name,
      "usecase"
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
            function ${file_prefix}_Usecase(option) {
                _throwErrorWhenInvalidParameter();
                 function _throwErrorWhenInvalidParameter() {  
                    if (!options) throw new Error(constants.ERROR_CONST.OPTIONS);
                    if (!options.dependencies) throw new Error(constants.ERROR_CONST.DEPENDENCIES);
                    if (!options.dependencies['${file_prefix}_gateway']) throw new Error(constants.ERROR_CONST.GATEWAY);
                }
        
                scope = {
                    dependencies: options.dependencies
                };
            }
        return ${file_prefix}_Usecase;
        
        });`;
    return content;
  }

  create_srcFile() {
    var file_name =
      this.module_type.toUpperCase() +
      "_" +
      this.module_name.replace(/ /g, "_") +
      "_usecase.js";
    var file_path = path.join(this.src_directory, file_name);
    if (!fs.existsSync(file_path)) {
      fs.writeFileSync(file_path, this.create_src_file_content());
      console.log(cc.log, "Usecase file created");
    } else {
      console.log(cc.warning, "Usecase file already exist");
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
define(['../../../../../../src/${this.module_name}/usecase/${file_prefix}_usecase'
],function(UseCase){
	describe('Unit Tests: ${this.module_name} Usecase', function() {
	var usecaseObject, gatewayStub;
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
			it('should create usecase object successfully.', function() {
				gatewayStub = {
					/*Update Gateway stub*/
				};

				var options = {
					dependencies: {
						${this.file_prefix}_gateway: gatewayStub
					}
				}
					usecaseObject = new UseCase(options);
				expect(usecaseObject instanceof UseCase).toBe(true);
			});
		});


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
      "_usecase_Spec.js";
    var file_path = path.join(this.test_directory, file_name);
    if (!fs.existsSync(file_path)) {
      fs.writeFileSync(file_path, this.create_spec_file_content());
      console.log(cc.log, "Usecase spec file created");
    } else {
      console.log(cc.warning, "Usecase spec file already exist");
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

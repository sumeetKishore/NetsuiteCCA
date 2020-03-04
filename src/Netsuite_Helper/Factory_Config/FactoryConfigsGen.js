var cc = require("../../common/consoleColors");
var constants = require("../../common/constants");
var initProject = require("../factory_InitProject/Init_Project");
var main = require("../factory_main/Create_Main");
var gateway = require("../factory_gateway/Create_Gateway");
var controller = require("../factory_controller/Create_Controller");
var usecase = require("../factory_usecase/Create_Usecase");

var constantFile = require("../factory_constants/Create_constants");
var path = require("path");
class SL_Factory {
  constructor(directory, module_name, module_type) {
    this.directory = directory;
    this.module_name = module_name;
    this.module_type = module_type;
  }
  execute() {
    if(this.module_name  === constants.COMMAND_INIT)
      this.initProject(this.module_type);
    else
    this.create_SL_files();
  }

  initProject(){
    var init_project= new initProject(this.directory,this.module_type);
    init_project.execute();
  }

  create_SL_files() {
    var constant_file = new constantFile(this.directory, "constants");
    constant_file.execute();
    var main_files = new main(
      this.directory,
      this.module_name,
      this.module_type
    );
    main_files.execute();

    var controller_files = new controller(
      this.directory,
      this.module_name,
      this.module_type
    );
    controller_files.execute();

    var usecase_files = new usecase(
      this.directory,
      this.module_name,
      this.module_type
    );
    usecase_files.execute();

    var gateway_file = new gateway(
      this.directory,
      this.module_name,
      this.module_type
    );
    gateway_file.execute();
  }
}

module.exports = SL_Factory;

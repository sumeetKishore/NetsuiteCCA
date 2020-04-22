const path = require("path");
const fs = require("fs");
const cc = require("../../common/consoleColors");
const constants = require("../../common/constants");
class CreateConstants {
  constructor(directory, module_name) {
    this.directory = directory;
    this.module_name = module_name;
    this.src_directory = path.join(directory, "src", "common", "constants");
  }

  create_src_file_content() {
    var content = `/**
 * Copyright (c) 2018, Oracle and/or its affiliates. All rights reserved.
 */

define([], function() {
  var constants = {
    ERROR_CONST: {
      OPTIONS: "options key is missing.",
      DEPENDENCIES: "depencecies key is missing.",
      USECASE: "usecase key is missing.",
      GATEWAY: "gateway key is missing."
    }
  };
  return constants;
});`;
    return content;
  }

  create_srcFile() {
    var file_name = "constants.js";
    var file_path = path.join(this.src_directory, file_name);
    if (!fs.existsSync(file_path)) {
      fs.writeFileSync(file_path, this.create_src_file_content());
      console.log(cc.log, "constant file created");
    } else {
      console.log(
        cc.warning,
        "constant file already exist\n. Please check for the ERORR_CONST key variable existance in constant file."
      );
    }
  }

  execute() {
    if (!fs.existsSync(this.src_directory)) {
      fs.mkdirSync(this.src_directory, { recursive: true });
    }
    this.create_srcFile();
  }
}

module.exports = CreateConstants;

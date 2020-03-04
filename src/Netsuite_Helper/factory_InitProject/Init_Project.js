const path = require("path");
const fs = require("fs");
const cc = require("../../common/consoleColors");
const constants = require("../../common/constants");

class InitProject {
    constructor(directory, module_name) {
        this.directory = directory;
        this.module_name = module_name;
        this.src_directory = path.join(directory, "FileCabinet","SuiteApps",module_name,"src");
        this.test_directory = path.join(
            directory,
            "FileCabinet",
            "SuiteApps",
            module_name,
            "test",
            "jasmine",
            "unit",
            "specs"
        );
    }
    createScaffold(){
        if (!fs.existsSync(this.src_directory)) {
            fs.mkdirSync(this.src_directory, { recursive: true });
        }
        if (!fs.existsSync(this.test_directory)) {
            fs.mkdirSync(this.test_directory, { recursive: true });
        }
    }
    execute(){
        this.createScaffold();
    }

}
module.exports = InitProject;
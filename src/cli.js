#!/usr/bin/env node

var main_index = require("./index.js");
var console_colors = require("./common/consoleColors");
const program = require("commander");
const constants = require("./common/constants");
program.name("netsuite-helper");
program.version("0.1.0");
program.usage("nsgen <module-name> <module-type");
program.on("--help", function() {
  console.log("");
  console.log("For Script Type please refer below mentioned pnemonics.\n");
  console.log(constants.mod_defs);
  console.log(
    "\n Example : To generate Client Script for Sales Order Enter following command : \nnsgen 'Sales Order' CS\n"
  );
  console.log(
    console_colors.warning,
    `The files generated are : 
    Main            : src/Sales Order/main/CS_Sales_Order.js
    Controller      : src/Sales Order/ui/controller/CS_Sales_Order_controller.js
    Usecase         : src/Sales Order/usecase/CS_Sales_Order_usecase.js
    Gateway         : src/Sales Order/gateway/cs_Sales_Order_gateway.js
    Main Spec       : test/jasmine/unit/specs/Sales Order/main/CS_Sales_Order_Spec.js
    Controller Spec : test/jasmine/unit/specs/Sales Order/ui/controller/CS_Sales_Order_controller_Spec.js
    Usecase Spec    : test/jasmine/unit/specs/Sales Order/usecase/CS_Sales_Order_usecase_Spec.js
    Gateway Spec    : test/jasmine/unit/specs/Sales Order/gateway/CS_Sales_Order_gateway_Spec.js\n\n`
  );

  console.log(
    console_colors.info,
    "This command generate the src and test files as per Clean code architecture. Files usecase, controller, gateway and main are generated with basic scaffold."
  );
});
var execute = () => {
  const [, , ...args] = process.argv;
  if (args.length === 2) {
    console.log(console_colors.info, "SuiteNess : started !!!");
    main_index(process.cwd(), args[0], args[1]);
    console.log(console_colors.info, "Suiteness : Successfully executed !!!");
  } else {
    program.parse(process.argv);
    console.log(console_colors.error, "Invalid Params.\nPlease refer help.\n");
    console.log(
      console_colors.warning,
      "Help : nsgen --help.\nVersion : nsgen --version.\n"
    );
  }
};
execute();

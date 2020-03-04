  var constant = {
    mod_types: "SL,MR,UE,CS,PL,RL,SD,WA,MU,BI",
    mod_defs: {
      SL: "Suitelet",
      MR: "MapReduceScript",
      UE: "UserEventScript",
      CS: "ClientScript",
      PL: "Portlet",
      RL: "Restlet",
      SD: "ScheduledScript",
      WA: "WorkflowActionScript",
      MU: "MassUpdateScript",
      BI: "BundleInstallationScript"
    },
    mod_methods: {
      SL: ["onrequest"],
      MR: ["getInputData", "map", "reduce", "summarize"],
      UE: ["beforeLoad", "beforeSubmit", "afterSubmit"],
      CS: ["pageInit", "saveRecord", "validateField", "fieldChanged", "postSourcing", "lineInit", "validateDelete", "validateInsert", "validateLine", "sublistChanged"],
      PL: ["render"],
      RL: ["get","post","put","delete"],
      SD: ["execute"],
      WA: ["onAction"],
      MU: ["each"],
      BI: ["beforeUpdate","beforeInstall"]
    },
    COMMAND_INIT:'init'
  };
module.exports = constant;


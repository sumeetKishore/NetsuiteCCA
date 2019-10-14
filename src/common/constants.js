  var constant = {
    mod_types: "SL,MR,UE,CS,PL,RL,SD,WA,MU,BI",
    mod_defs: {
      SL: "Suitelet",
      MR: "mapreduce",
      UE: "userevents",
      CS: "clientside",
      PL: "portlet",
      RL: "restlet",
      SD: "scheduled",
      WA: "workflowaction",
      MU: "massupdate",
      BI: "bundleinstall"
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
    }
  };
module.exports = constant;


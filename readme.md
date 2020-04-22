<h1 align="center">Welcome to netsuite-helper 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.2.0-blue.svg?cacheSeconds=2592000" />
  <a href="https://github.com/sumeetKishore/NetsuiteCCA#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/sumeetKishore/NetsuiteCCA/graphs/commit-activity" target="_blank">
    <img alt="Maintenance" src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="https://github.com/sumeetKishore/NetsuiteCCA/blob/master/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/github/license/sumeetKishore/netsuite-helper" />
  </a>
</p>

> cli tool for netsuite helper

### 🏠 [Homepage](https://github.com/sumeetKishore/NetsuiteCCA#readme)

## Install

```sh
npm install -g netsuite-helper
```

## Run tests

```sh
npm run test
```

## Terminal Command
### Initialize Project

```sh js
nsgen init <project name>
```

Create the Scaffold strucutre for your project.
```bash
D:.
└───FileCabinet
    └───SuiteApps
        ├───com.netsuite.example
        │   ├───src
        │   └───test
        │       └───jasmine
        │           └───unit
        │               └───specs
``` 
### Create Module
```sh
nsgen <Module Name> <Module Type>
```

## Command Description

To run the Netsuite helper use above mentioned command .
Make sure to navigate (cd) to correct destination on terminal / shell/ command prompt.
Enter the command following by module Name (e.g Sales Order). and Module Type (e.g CS for ClientScript).
Files will be created as per Clean code Architecture.

Example :

```
nsgen init "com.netsuite.example"
```
Creates project with structure

```
nsgen 'Route Delivery' SL
```

<table style="width:100%">
  <tr>
    <th>Script Name</th>
    <th>Script pnemonic</th>
    <th>Methods</th>
  </tr>
 <tr>
    <td>Suitelet</td>
    <td>SL</td>
    <td>"onrequest"</td>
  </tr>
  <tr>
    <td>MapReduceScript</td>
    <td>MR</td>
    <td>"getInputData", "map", "reduce", "summarize"</td>
  </tr>
   <tr>
    <td>UserEventScript</td>
    <td>UE</td>
    <td>"beforeLoad", "beforeSubmit", "afterSubmit"</td>
  </tr>
  <tr>
    <td>ClientScript</td>
    <td>CS</td>
    <td>"pageInit", "saveRecord", "validateField", "fieldChanged", "postSourcing", "lineInit", "validateDelete", "validateInsert", "validateLine", "sublistChanged"</td>
  </tr>
  <tr>
    <td>Portlet</td>
    <td>PL</td>
    <td>"render"</td>
  </tr>
  <tr>
    <td>Restlet</td>
    <td>RL</td>
    <td>"get","post","put","delete"</td>
  </tr>
  <tr>
    <td>ScheduledScript</td>
    <td>SD</td>
    <td>"execute"</td>
  </tr>
  <tr>
    <td>WorkflowActionScript</td>
    <td>WA</td>
    <td>"onAction"</td>
  </tr>
   <tr>
    <td>MassUpdateScript</td>
    <td>MU</td>
    <td>"each"</td>
  </tr>
  <tr>
    <td>BundleInstallationScript</td>
    <td>BI</td>
    <td>""beforeUpdate","beforeInstall""</td>
  </tr>
  </table>

## Author

👤 **Sumeet kishore <Sumeetkishore@gmail.com>**

- Github: [@sumeetKishore](https://github.com/sumeetKishore)

## Versioning

We use [SemVer](https://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/sumeetKishore/NetsuiteCCA/tags).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/sumeetKishore/NetsuiteCCA/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [Sumeet kishore <Sumeetkishore@gmail.com>](https://github.com/sumeetKishore).<br />
This project is [MIT](https://github.com/sumeetKishore/NetsuiteCCA/blob/master/LICENSE) licensed.

---

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_

/*global define */
/*jslint sloppy:true */
/*
 | Copyright 2014 Esri
 |
 | Licensed under the Apache License, Version 2.0 (the "License");
 | you may not use this file except in compliance with the License.
 | You may obtain a copy of the License at
 |
 |    http://www.apache.org/licenses/LICENSE-2.0
 |
 | Unless required by applicable law or agreed to in writing, software
 | distributed under the License is distributed on an "AS IS" BASIS,
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 | See the License for the specific language governing permissions and
 | limitations under the License.
 */
define({
  // Use a local hosted web scene instead of a web scene on ArcGIS or portal.
  "useLocalWebScene": false,
  // support sending credentials with AJAX requests to specific domains. This will allow editing of feature services secured with web-tier authentication
  "webTierSecurity": false,
  // Webmap file to use for the local web scene
  "localWebSceneFile": "config/demoScene",
  // When true, the template will query arcgis.com for the group's information.
  "queryForGroupInfo": false,
  // When true, the template will query arcgis.com for the items contained within the group
  "queryForGroupItems": false,
  //When true the template will query arcgis.com for default settings for helper services, units etc. If you
  //want to use custom settings for units or any of the helper services set queryForOrg to false then enter
  //default values for any items you need using the helper services and units properties.
  "queryForOrg": true,
  //If you need localization set the localize value to true to get the localized strings
  //from the javascript/nls/resource files.
  //Note that we've included a placeholder nls folder and a resource file with one error string
  //to show how to setup the strings file.
  "queryForLocale": true,
  //When true checks to see if the browser supports WebGL. This is needed for templates that use
  //the 3d capabilities in version 4.x of the ArcGIS API for Javascript.
  "supports3d": true,
  //This option demonstrates how to handle additional custom url parameters. For example
  //if you want users to be able to specify lat/lon coordinates that define the scene's center or
  //specify an alternate basemap via a url parameter.
  "urlItems": [
    "webscene",
    "components" //"zoom","logo","compass","attribution" or [] for none
  ],
  // Most users will not need to modify this value. For esri hosting environments only. Will automatically create a "sharinghost" and "proxyurl" for the application. Only set this is to true if the app is going to be stored on Esri's hosting servers. If you are using your own custom hosted portal, set the "sharinghost" in defaults.js instead of setting this to true.
  esriEnvironment: true
});

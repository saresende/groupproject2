var CdoApiClient = require('climate-data-crawler/cdoApiClient');
 
var locationId = 'CITY:AS000002';
var dataset = 'GHCNDMS';
var startDate = '2014-01-01';
var endDate = '2014-12-31';
var datatypeid = 'MNTM';
 
var queryPath = '/cdo-web/api/v2/data?datasetid=' + dataset
+ '&locationid=' + locationId
+ '&startdate=' + startDate
+ '&enddate=' + endDate
+ '&datatypeid=' + datatypeid
+ '&limit=1000';
 
var client = CdoApiClient.createInstance(queryPath);
 
client.query(function(result){
    console.log(result);
});

module.exports = climate;
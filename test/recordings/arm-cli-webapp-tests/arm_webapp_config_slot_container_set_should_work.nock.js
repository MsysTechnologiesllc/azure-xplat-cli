// This file has been autogenerated.

var profile = require('../../../lib/util/profile');

exports.getMockedProfile = function () {
  var newProfile = new profile.Profile();

  newProfile.addSubscription(new profile.Subscription({
    id: '8d57ddbd-c779-40ea-b660-1015f4bf027d',
    name: 'Visual Studio Enterprise',
    user: {
      name: 'user@domain.example',
      type: 'user'
    },
    tenantId: '72f988bf-86f1-41af-91ab-2d7cd011db47',
    state: 'Enabled',
    registeredProviders: [],
    _eventsCount: '1',
    isDefault: true
  }, newProfile.environments['AzureCloud']));

  return newProfile;
};

exports.setEnvironment = function() {
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '314',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c5a37675-ed59-46d5-830b-86371c66028b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11992',
  'x-ms-correlation-request-id': '8e321ceb-b107-4a48-8cfc-edbf887afc10',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185548Z:8e321ceb-b107-4a48-8cfc-edbf887afc10',
  date: 'Tue, 25 Oct 2016 18:55:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .post('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings/list?api-version=2015-08-01')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '314',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'c5a37675-ed59-46d5-830b-86371c66028b',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-resource-requests': '11992',
  'x-ms-correlation-request-id': '8e321ceb-b107-4a48-8cfc-edbf887afc10',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185548Z:8e321ceb-b107-4a48-8cfc-edbf887afc10',
  date: 'Tue, 25 Oct 2016 18:55:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"DOCKER_REGISTRY_SERVER_USERNAME\":\"MyUsername\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd052a507-aeeb-41fe-b69d-def4d138f000',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-correlation-request-id': 'fb73a62a-cfc6-43f3-ab33-91f37974f7e2',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185549Z:fb73a62a-cfc6-43f3-ab33-91f37974f7e2',
  date: 'Tue, 25 Oct 2016 18:55:48 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.put('/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings?api-version=2015-08-01', '*')
  .reply(200, "{\"id\":\"/subscriptions/8d57ddbd-c779-40ea-b660-1015f4bf027d/resourceGroups/testrg17762/providers/Microsoft.Web/sites/webappclitests7065/slots/slotTest/config/appsettings\",\"name\":\"appsettings\",\"type\":\"Microsoft.Web/sites/config\",\"location\":\"West US\",\"tags\":null,\"properties\":{\"WEBSITE_NODE_DEFAULT_VERSION\":\"4.4.7\",\"DOCKER_REGISTRY_SERVER_USERNAME\":\"MyUsername\"}}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '361',
  'content-type': 'application/json',
  expires: '-1',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  'x-ms-request-id': 'd052a507-aeeb-41fe-b69d-def4d138f000',
  server: 'Microsoft-IIS/8.0',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1184',
  'x-ms-correlation-request-id': 'fb73a62a-cfc6-43f3-ab33-91f37974f7e2',
  'x-ms-routing-request-id': 'CENTRALUS:20161025T185549Z:fb73a62a-cfc6-43f3-ab33-91f37974f7e2',
  date: 'Tue, 25 Oct 2016 18:55:48 GMT',
  connection: 'close' });
 return result; }]];
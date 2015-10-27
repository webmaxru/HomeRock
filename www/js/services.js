angular.module('homeRock.services', [])

.factory('Devices', function(lodash) {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var devices_json = [
    {
      "name": "door-12345-1",
      "type": "DoorNode",
      "type_human_readable": "Door",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/lt/0/dim",
      "value": "5"
    },
    {
      "name": "power-12345-4",
      "type": "PowerNode",
      "type_human_readable": "Pot",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "81"
    },
    {
      "name": "switch-12345-2",
      "type": "SwitchNode",
      "type_human_readable": "Socket",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/lt/0/dim",
      "value": "3"
    },
    {
      "name": "power-12345-3",
      "type": "PowerNode",
      "type_human_readable": "Fridge",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "76"
    },
    {
      "name": "thermostat-12345-1",
      "type": "ThermostatNode",
      "type_human_readable": "Thermostat",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/sen/temp",
      "value": "22"
    },
    {
      "name": "thermostat-12345-2",
      "type": "ThermostatNode",
      "type_human_readable": "Thermostat",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/sen/temp",
      "value": "20"
    },
    {
      "name": "power-12345-1",
      "type": "PowerNode",
      "type_human_readable": "Light bulb",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "81"
    },
    {
      "name": "thermostat-12345-4",
      "type": "ThermostatNode",
      "type_human_readable": "Thermostat",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/sen/temp",
      "value": "19"
    },
    {
      "name": "power-12345-10",
      "type": "PowerNode",
      "type_human_readable": "Light bulb",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "76"
    },
    {
      "name": "power-12345-7",
      "type": "PowerNode",
      "type_human_readable": "Dishwasher",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "81"
    },
    {
      "name": "door-12345-3",
      "type": "DoorNode",
      "type_human_readable": "Door",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/lt/0/dim",
      "value": "5"
    },
    {
      "name": "power-12345-2",
      "type": "PowerNode",
      "type_human_readable": "Microwave",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "81"
    },
    {
      "name": "thermostat-12345-3",
      "type": "ThermostatNode",
      "type_human_readable": "Thermostat",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/sen/temp",
      "value": "21"
    },
    {
      "name": "power-12345-9",
      "type": "PowerNode",
      "type_human_readable": "Light bulb",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "81"
    },
    {
      "name": "door-12345-2",
      "type": "DoorNode",
      "type_human_readable": "Door",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/lt/0/dim",
      "value": "5"
    },
    {
      "name": "power-12345-5",
      "type": "PowerNode",
      "type_human_readable": "Television",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "81"
    },
    {
      "name": "switch-12345-3",
      "type": "SwitchNode",
      "type_human_readable": "Socket",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/lt/0/dim",
      "value": "0"
    },
    {
      "name": "power-12345-8",
      "type": "PowerNode",
      "type_human_readable": "Light bulb",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "81"
    },
    {
      "name": "meter-12345-1",
      "type": "MeterNode",
      "type_human_readable": "Powermeter",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/sen/meter",
      "value": "34688.2"
    },
    {
      "name": "window-12345-1",
      "type": "SwitchNode",
      "type_human_readable": "Window",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/lt/0/dim",
      "value": "5"
    },
    {
      "name": "window-12345-2",
      "type": "SwitchNode",
      "type_human_readable": "Window",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/lt/0/dim",
      "value": "5"
    },
    {
      "name": "power-12345-6",
      "type": "PowerNode",
      "type_human_readable": "Computer",
      "status_endpoint": "/pwr/0/rel",
      "status": "1",
      "value_endpoint": "/pwr/0/w",
      "value": "81"
    },
    {
      "name": "switch-12345-1",
      "type": "SwitchNode",
      "type_human_readable": "Access Point",
      "status_endpoint": "/lt/0/on",
      "status": "1",
      "value_endpoint": "/lt/0/dim",
      "value": "1"
    }
  ];

  return {

    devices: function() {
      return devices_json;
    },

    deviceTypes: function() {
      var deviceTypes = [];

      var t = _.uniq(devices_json, 'type_human_readable'),
          dataMap = {
              type: 'id',
              type_human_readable: 'name'
          };

      var deviceTypes = t.map(function (topic) {
          var t = {};
          for (var key in dataMap) {
              t[dataMap[key]] = topic[key];
          };
          return t;
      });

      return deviceTypes;
    },

    devicesByType: function(deviceTypeId) {
      var devices = [];
      for (var i = 0; i < devices_json.length; i++) {
        if (devices_json[i].type === deviceTypeId) {
          devices.push(devices_json[i]);
        }
      }
      return devices;
    }
  };
});

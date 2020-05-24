export const data = {
  "display": "form",
  "components": [
    {
      "title": "Opportunistic Infection",
      "theme": "default",
      "tooltip": "",
      "customClass": "gold",
      "collapsible": true,
      "hidden": false,
      "disabled": false,
      "tableView": false,
      "modalEdit": false,
      "key": "opportunisticInfectionTab",
      "tags": [],
      "properties": {},
      "customConditional": "",
      "conditional": {
        "json": "",
        "show": null,
        "when": null,
        "eq": ""
      },
      "logic": [],
      "attributes": {
        "key": ""
      },
      "overlay": {
        "style": "",
        "page": "",
        "left": "",
        "top": "",
        "width": "",
        "height": ""
      },
      "type": "panel",
      "label": "T",
      "breadcrumb": "default",
      "input": false,
      "placeholder": "",
      "prefix": "",
      "suffix": "",
      "multiple": false,
      "defaultValue": null,
      "protected": false,
      "unique": false,
      "persistent": false,
      "clearOnHide": false,
      "refreshOn": "",
      "redrawOn": "",
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "hideLabel": false,
      "tabindex": "",
      "autofocus": false,
      "dbIndex": false,
      "customDefaultValue": "",
      "calculateValue": "",
      "widget": null,
      "validateOn": "change",
      "validate": {
        "required": false,
        "custom": "",
        "customPrivate": false,
        "strictDateValidation": false
      },
      "allowCalculateOverride": false,
      "encrypted": false,
      "showCharCount": false,
      "showWordCount": false,
      "allowMultipleMasks": false,
      "tree": false,
      "components": [
        {
          "label": "Patient has opportunistic infection?",
          "labelPosition": "top",
          "optionsLabelPosition": "right",
          "description": "",
          "tooltip": "",
          "customClass": "",
          "tabindex": "",
          "inline": false,
          "hidden": false,
          "hideLabel": false,
          "autofocus": false,
          "disabled": false,
          "tableView": false,
          "modalEdit": false,
          "values": [
            {
              "label": "Yes",
              "value": "yes",
              "shortcut": ""
            },
            {
              "label": "No",
              "value": "no",
              "shortcut": ""
            }
          ],
          "dataType": "string",
          "persistent": true,
          "protected": false,
          "dbIndex": false,
          "encrypted": false,
          "redrawOn": "",
          "clearOnHide": true,
          "customDefaultValue": "",
          "calculateValue": "",
          "allowCalculateOverride": false,
          "validate": {
            "required": true,
            "customMessage": "",
            "custom": "",
            "customPrivate": false,
            "json": "",
            "strictDateValidation": false,
            "unique": false,
            "multiple": false
          },
          "errorLabel": "",
          "key": "patientHasOpportunisticInfection",
          "tags": [],
          "properties": {},
          "conditional": {
            "show": null,
            "when": null,
            "eq": "",
            "json": ""
          },
          "customConditional": "",
          "logic": [],
          "attributes": {},
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "radio",
          "input": true,
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "unique": false,
          "refreshOn": "",
          "widget": null,
          "validateOn": "change",
          "showCharCount": false,
          "showWordCount": false,
          "allowMultipleMasks": false,
          "inputType": "radio",
          "fieldSet": false,
          "id": "eflq42g",
          "defaultValue": "",
          "hideOnChildrenHidden": false
        },
        {
          "label": "opportunisticInfectionList",
          "labelPosition": "bottom",
          "tooltip": "",
          "customClass": "",
          "hidden": false,
          "hideLabel": true,
          "disabled": false,
          "tableView": false,
          "modalEdit": false,
          "persistent": true,
          "protected": false,
          "dbIndex": false,
          "encrypted": false,
          "redrawOn": "",
          "clearOnHide": true,
          "customDefaultValue": "",
          "calculateValue": "",
          "validate": {
            "required": false,
            "customMessage": "",
            "custom": "",
            "customPrivate": false,
            "json": "",
            "unique": false,
            "multiple": false,
            "strictDateValidation": false
          },
          "unique": false,
          "validateOn": "change",
          "errorLabel": "",
          "key": "opportunisticInfectionList",
          "tags": [],
          "properties": {},
          "conditional": {
            "show": true,
            "when": "patientHasOpportunisticInfection",
            "eq": "yes",
            "json": ""
          },
          "customConditional": "",
          "logic": [],
          "attributes": {},
          "overlay": {
            "style": "",
            "page": "",
            "left": "",
            "top": "",
            "width": "",
            "height": ""
          },
          "type": "container",
          "input": true,
          "components": [
            {
              "label": "",
              "disableAddingRemovingRows": false,
              "reorder": false,
              "addAnother": "Add",
              "addAnotherPosition": "bottom",
              "defaultOpen": false,
              "layoutFixed": false,
              "enableRowGroups": false,
              "tableView": false,
              "defaultValue": [
                {}
              ],
              "validate": {
                "unique": false,
                "multiple": false,
                "required": false,
                "custom": "",
                "customPrivate": false,
                "strictDateValidation": false
              },
              "key": "dataGrid",
              "type": "datagrid",
              "input": true,
              "components": [
                {
                  "label": "Illness",
                  "widget": "choicesjs",
                  "placeholder": "Enter illness",
                  "tableView": false,
                  "data": {
                    "values": [
                      {
                        "label": "Asthma",
                        "value": "asthma"
                      },
                      {
                        "label": "Jaundice",
                        "value": "jaundice"
                      },
                      {
                        "label": "TB",
                        "value": "tb"
                      }
                    ],
                    "json": "",
                    "url": "",
                    "resource": "",
                    "custom": ""
                  },
                  "selectThreshold": 0.6,
                  "validate": {
                    "unique": false,
                    "multiple": false,
                    "required": false,
                    "custom": "",
                    "customPrivate": false,
                    "strictDateValidation": false
                  },
                  "key": "illness",
                  "type": "select",
                  "indexeddb": {
                    "filter": {}
                  },
                  "input": true,
                  "hideOnChildrenHidden": false,
                  "prefix": "",
                  "customClass": "",
                  "suffix": "",
                  "multiple": false,
                  "defaultValue": null,
                  "protected": false,
                  "unique": false,
                  "persistent": true,
                  "hidden": false,
                  "clearOnHide": true,
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "attributes": {},
                  "validateOn": "change",
                  "conditional": {
                    "show": null,
                    "when": null,
                    "eq": ""
                  },
                  "overlay": {
                    "style": "",
                    "left": "",
                    "top": "",
                    "width": "",
                    "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "clearOnRefresh": false,
                  "limit": 100,
                  "dataSrc": "values",
                  "valueProperty": "",
                  "lazyLoad": true,
                  "filter": "",
                  "searchEnabled": true,
                  "searchField": "",
                  "minSearch": 0,
                  "readOnlyValue": false,
                  "authenticate": false,
                  "template": "<span>{{ item.label }}</span>",
                  "selectFields": "",
                  "searchThreshold": 0.3,
                  "fuseOptions": {
                    "include": "score",
                    "threshold": 0.3
                  },
                  "customOptions": {},
                  "id": "euz9cmh"
                },
                {
                  "label": "Onset Date",
                  "format": "yyyy-MM-dd",
                  "tableView": false,
                  "datePicker": {
                    "disableWeekends": false,
                    "disableWeekdays": false,
                    "showWeeks": true,
                    "startingDay": 0,
                    "initDate": "",
                    "minMode": "day",
                    "maxMode": "year",
                    "yearRows": 4,
                    "yearColumns": 5,
                    "minDate": null,
                    "maxDate": null
                  },
                  "enableTime": false,
                  "validate": {
                    "unique": false,
                    "multiple": false,
                    "required": false,
                    "custom": "",
                    "customPrivate": false,
                    "strictDateValidation": false
                  },
                  "key": "onsetDate",
                  "type": "datetime",
                  "input": true,
                  "suffix": "<i ref=\"icon\" class=\"fa fa-calendar\" style=\"\"></i>",
                  "widget": {
                    "type": "calendar",
                    "displayInTimezone": "viewer",
                    "language": "en",
                    "useLocaleSettings": false,
                    "allowInput": true,
                    "mode": "single",
                    "enableTime": false,
                    "noCalendar": false,
                    "format": "yyyy-MM-dd",
                    "hourIncrement": 1,
                    "minuteIncrement": 1,
                    "time_24hr": false,
                    "minDate": null,
                    "disableWeekends": false,
                    "disableWeekdays": false,
                    "maxDate": null
                  },
                  "hideOnChildrenHidden": false,
                  "placeholder": "",
                  "prefix": "",
                  "customClass": "",
                  "multiple": false,
                  "defaultValue": "",
                  "protected": false,
                  "unique": false,
                  "persistent": true,
                  "hidden": false,
                  "clearOnHide": true,
                  "refreshOn": "",
                  "redrawOn": "",
                  "modalEdit": false,
                  "labelPosition": "top",
                  "description": "",
                  "errorLabel": "",
                  "tooltip": "",
                  "hideLabel": false,
                  "tabindex": "",
                  "disabled": false,
                  "autofocus": false,
                  "dbIndex": false,
                  "customDefaultValue": "",
                  "calculateValue": "",
                  "attributes": {},
                  "validateOn": "change",
                  "conditional": {
                    "show": null,
                    "when": null,
                    "eq": ""
                  },
                  "overlay": {
                    "style": "",
                    "left": "",
                    "top": "",
                    "width": "",
                    "height": ""
                  },
                  "allowCalculateOverride": false,
                  "encrypted": false,
                  "showCharCount": false,
                  "showWordCount": false,
                  "properties": {},
                  "allowMultipleMasks": false,
                  "useLocaleSettings": false,
                  "allowInput": true,
                  "enableDate": true,
                  "defaultDate": "",
                  "displayInTimezone": "viewer",
                  "timezone": "",
                  "datepickerMode": "day",
                  "timePicker": {
                    "hourStep": 1,
                    "minuteStep": 1,
                    "showMeridian": true,
                    "readonlyInput": false,
                    "mousewheel": true,
                    "arrowkeys": true
                  },
                  "customOptions": {},
                  "id": "e0qj19t"
                }
              ],
              "placeholder": "",
              "prefix": "",
              "customClass": "",
              "suffix": "",
              "multiple": false,
              "protected": false,
              "unique": false,
              "persistent": true,
              "hidden": false,
              "clearOnHide": true,
              "refreshOn": "",
              "redrawOn": "",
              "modalEdit": false,
              "labelPosition": "top",
              "description": "",
              "errorLabel": "",
              "tooltip": "",
              "hideLabel": false,
              "tabindex": "",
              "disabled": false,
              "autofocus": false,
              "dbIndex": false,
              "customDefaultValue": "",
              "calculateValue": "",
              "widget": null,
              "attributes": {},
              "validateOn": "change",
              "conditional": {
                "show": null,
                "when": null,
                "eq": ""
              },
              "overlay": {
                "style": "",
                "left": "",
                "top": "",
                "width": "",
                "height": ""
              },
              "allowCalculateOverride": false,
              "encrypted": false,
              "showCharCount": false,
              "showWordCount": false,
              "properties": {},
              "allowMultipleMasks": false,
              "tree": true,
              "id": "ecbpvzk"
            }
          ],
          "path": "opportunisticInfectionList",
          "placeholder": "",
          "prefix": "",
          "suffix": "",
          "multiple": false,
          "defaultValue": null,
          "refreshOn": "",
          "description": "",
          "tabindex": "",
          "autofocus": false,
          "widget": null,
          "allowCalculateOverride": false,
          "showCharCount": false,
          "showWordCount": false,
          "allowMultipleMasks": false,
          "tree": true,
          "id": "eg019es"
        }
      ],
      "id": "eu5lyhi",
      "collapsed": false,
      "path": "opportunisticInfectionTab"
    },
    {
      "type": "button",
      "label": "Submit",
      "key": "submit",
      "size": "md",
      "block": false,
      "action": "submit",
      "disableOnInvalid": true,
      "theme": "primary",
      "input": true,
      "placeholder": "",
      "prefix": "",
      "customClass": "",
      "suffix": "",
      "multiple": false,
      "defaultValue": null,
      "protected": false,
      "unique": false,
      "persistent": false,
      "hidden": false,
      "clearOnHide": true,
      "refreshOn": "",
      "redrawOn": "",
      "tableView": false,
      "modalEdit": false,
      "labelPosition": "top",
      "description": "",
      "errorLabel": "",
      "tooltip": "",
      "hideLabel": false,
      "tabindex": "",
      "disabled": false,
      "autofocus": false,
      "dbIndex": false,
      "customDefaultValue": "",
      "calculateValue": "",
      "widget": {
        "type": "input"
      },
      "attributes": {},
      "validateOn": "change",
      "validate": {
        "required": false,
        "custom": "",
        "customPrivate": false,
        "strictDateValidation": false,
        "unique": false,
        "multiple": false
      },
      "conditional": {
        "show": null,
        "when": null,
        "eq": ""
      },
      "overlay": {
        "style": "",
        "left": "",
        "top": "",
        "width": "",
        "height": ""
      },
      "allowCalculateOverride": false,
      "encrypted": false,
      "showCharCount": false,
      "showWordCount": false,
      "properties": {},
      "allowMultipleMasks": false,
      "leftIcon": "",
      "rightIcon": "",
      "dataGridLabel": true,
      "id": "euaq5bi"
    }
  ]
};
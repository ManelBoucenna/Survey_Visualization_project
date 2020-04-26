function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"grid-container\">\n  <aside class=\"sidenav\">\n    <app-overview></app-overview>\n  </aside>\n\n  <main class=\"main\">\n    <app-detailview></app-detailview>\n    <app-metaview></app-metaview>\n  </main>\n \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/card-viz/card-viz.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/card-viz/card-viz.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailviewCardVizCardVizComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "  <!-- <mat-card *ngIf=\"created\" class=\"node\" cdkDragBoundary=\".DragDrop\" cdkDrag>\n    <mat-card-header>\n      <mat-card-title>Visualization:{{visualization}}</mat-card-title>\n      <mat-card-subtitle>Task:{{task}}</mat-card-subtitle>\n    </mat-card-header>\n    <div class=\"container\">\n      <div class=\"box-viz\">\n        <p class=\"var_name\">{{variable}}</p>\n        <div width=\"max-content\" id={{id}} class=\"figure\"></div>\n      </div>\n    </div>\n    <button mat-icon-button (click)=\"OpenZoom()\">\n      <mat-icon>zoom_in</mat-icon>\n    </button>\n    <button mat-button color=\"warn\" (click)=\"DestroyComponent()\">Delete</button>\n    <div class=\"drag-handle\" cdkDragHandle>\n      <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n        <path\n          d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\">\n        </path>\n        <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n      </svg>\n    </div>\n  </mat-card> -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/detailview.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/detailview.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailviewDetailviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <app-suggestion-panel></app-suggestion-panel>\n  <app-dragndrop-panel class=\"DragDrop\"></app-dragndrop-panel>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/dragndrop-panel/dragndrop-panel.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/dragndrop-panel/dragndrop-panel.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailviewDragndropPanelDragndropPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div cdkDropListGroup class=\"DragDropContainer\">\n  <div *ngFor=\"let group of cardsCreationService.container; index as i;\" class=\"example-container\">\n    <div  cdkDropList class=\"example-list\" [cdkDropListData]=group (cdkDropListDropped)=\"drop($event)\">\n      <mat-card *ngFor=\"let viz of group\" class=\"node example-box\" cdkDragBoundary=\".DragDrop\" cdkDrag (cdkDragStarted)=\"drag($event)\">\n        <h4>Variables:</h4>\n        <ul> <li class=\"list-var\" *ngFor=\"let vari of viz.CreationEntries.Questions\" >{{vari.question}}</li></ul>\n        <div class=\"container\">\n          <div class=\"box-viz\">\n            <div width=\"max-content\" id={{viz.Id.Value}} class=\"figure\"></div>\n          </div> \n        </div>\n        <!-- <button mat-icon-button>\n          <mat-icon>zoom_in</mat-icon>\n        </button> -->\n        <button class=\"delete-btn\" mat-button color=\"warn\" (click)=DeleteCard(viz)>Delete</button>\n        <div class=\"drag-handle\" cdkDragHandle>\n          <svg width=\"24px\" fill=\"currentColor\" viewBox=\"0 0 24 24\">\n            <path\n              d=\"M10 9h4V6h3l-5-5-5 5h3v3zm-1 1H6V7l-5 5 5 5v-3h3v-4zm14 2l-5-5v3h-3v4h3v3l5-5zm-9 3h-4v3H7l5 5 5-5h-3v-3z\">\n            </path>\n            <path d=\"M0 0h24v24H0z\" fill=\"none\"></path>\n          </svg>\n        </div>\n      </mat-card>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/suggestion-panel/suggestion-panel.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/suggestion-panel/suggestion-panel.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDetailviewSuggestionPanelSuggestionPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "    <form class=\"form-inline\">\n      <p>I want to visualize the </p>\n      <!-- <mat-form-field> -->\n      <mat-radio-group id=\"group-task\" aria-label=\"Select a task\" [(ngModel)]=\"selectedTask\" name=\"tasks\">\n        <mat-radio-button *ngFor=\"let task of tasks| keyvalue\" [value]=\"task\" color=\"primary\">\n          {{task.value}}</mat-radio-button><br>\n      </mat-radio-group>\n      <p> of </p>\n      <mat-form-field class=\"example-chip-list\">\n        <mat-chip-list #chipList aria-label=\"Question selection\">\n          <mat-chip *ngFor=\"let question of selectedQuestions\" [selectable]=\"selectable\" [removable]=\"removable\"\n            (removed)=\"remove(question)\">\n            {{question}}\n            <mat-icon matChipRemove *ngIf=\"removable\">cancel</mat-icon>\n          </mat-chip>\n\n          <ng-container *ngIf=\"selectedTask == null ;else distribution\">\n            <input placeholder=\"Please, select a task and a variable...\" #questionInput [formControl]=\"IdCtrl\"\n              [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\" [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n              [matChipInputAddOnBlur]=\"addOnBlur\" (matChipInputTokenEnd)=\"add($event)\"\n              (keyup.enter)=\"AddNode(selectedQuestions, selectedTask)\">\n          </ng-container>\n          <ng-template #distribution>\n            <ng-container *ngIf=\"selectedTask['key'] == tasks.Distribution ;else relationship\">\n              <input placeholder=\"Select one variable at the time.\" #questionInput [formControl]=\"IdCtrl\"\n                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"add($event)\" (keyup.enter)=\"AddNode(selectedQuestions, selectedTask)\">\n            </ng-container>\n          </ng-template>\n          <ng-template #relationship>\n            <ng-container *ngIf=\"selectedTask['key'] == tasks.Relationship;else timeEvolution\"> <input\n                placeholder=\"Select at least two variables.\" #questionInput [formControl]=\"IdCtrl\"\n                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"add($event)\" (keyup.enter)=\"AddNode(selectedQuestions, selectedTask)\">\n            </ng-container>\n          </ng-template>\n          <ng-template #timeEvolution>\n            <ng-container *ngIf=\"selectedTask['key'] == tasks.TimeEvolution\"> <input\n                placeholder=\"Select one variable at the time.\" #questionInput [formControl]=\"IdCtrl\"\n                [matAutocomplete]=\"auto\" [matChipInputFor]=\"chipList\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"add($event)\" (keyup.enter)=\"AddNode(selectedQuestions, selectedTask)\">\n            </ng-container>\n          </ng-template>\n        </mat-chip-list>\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\" >\n          <mat-option *ngFor=\"let question of filteredQuestions | async\" [value]=\"question\">\n          {{question}}\n          </mat-option>\n        </mat-autocomplete>\n      </mat-form-field>\n      <button mat-raised-button color=\"primary\" type=\"submit\"\n        (click)=\"AddNode(selectedQuestions, selectedTask)\">Apply</button>\n    </form>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/metaview/metaview.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/metaview/metaview.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMetaviewMetaviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-accordion id=\"metaview-panel\">\n  <mat-expansion-panel>\n    <mat-expansion-panel-header>\n      <mat-panel-title>\n        META DATA\n      </mat-panel-title>\n      <mat-panel-description>\n        Show Meta Data\n      </mat-panel-description>\n    </mat-expansion-panel-header>\n      <div id=\"metadata-container\">\n    <div id=\"metadata-viz-container\">\n      <div *ngFor=\"let question of metadata\" class=\"viz-container\" id=\"{{'metadata_' + question.variable}}\">\n        <p class=\"var_name\"\n          matTooltip= {{question.question}}\n          aria-label=\"Button that displays a tooltip when focused or hovered over\">{{question.variable}}</p>\n        <div width=\"max-content\" id='{{\"metaview_\"+question.variable}}' class=\"figure\"></div>\n      </div>\n    </div>\n</div>\n\n</mat-expansion-panel>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOverviewOverviewComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"search-form\">\n  <button mat-flat-button [matMenuTriggerFor]=\"menu\" style=\"width:48%; color:white;background-color:#1f77b4;margin:2px\">Filter\n    variables</button>\n  <button mat-flat-button style=\"width:48%; color:white;background-color:#1f77b4;margin:2px\" (click)=\"ResetFilters()\">Reset all</button>\n  <!-- <button mat-flat-button style=\"width:20%; color:white;background-color:#1f77b4;margin:2px\" (click)=\"OpenData()\">Info</button> -->\n  <mat-menu #menu=\"matMenu\">\n    <mat-selection-list>\n      <mat-slide-toggle [(ngModel)]=\"master_checked\" (keyup)=\"UpdateQuestions()\" [(checked)]=\"master_indeterminate\"\n        (change)=\"master_change()\" (click)=\"$event.stopPropagation();\" color=\"primary\">Show/Hide all variables</mat-slide-toggle>\n      <div  *ngFor=\"let item of sortBy('name')\">\n        <mat-checkbox (keyup)=\"UpdateQuestions()\" (change)=\"list_change()\"\n        [(ngModel)]=\"item.checked\" [disabled]=\"item.disabled\" [labelPosition]=\"item.labelPosition\"\n        (click)=\"$event.stopPropagation();\" color=\"primary\">\n        {{item.name}}\n      </mat-checkbox>\n    </div>\n    </mat-selection-list>\n  </mat-menu>\n</div>\n\n<div class=\"container\">\n  <div *ngFor=\"let question of questionnaire\" [ngStyle]=\"{'display': (!IsChecked(question.question)) ? 'none':'flex'}\" class=\"box-viz\" id=\"{{'container_'+question.variable}}\">\n      <p class=\"var_name\" matTooltip={{question.question}}>{{question.question}}</p>\n      <div width=\"max-content\" id=\"{{'overview_' + question.variable}}\" class={{question.category}}></div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid-container {\n    display: grid;\n    grid-template-columns: 25% 75%;\n    grid-template-rows: auto 1fr auto;\n    grid-template-areas:\n        \"sidenav main\";\n    height: 100vh;\n    overflow-y: hidden;\n}\n\n.sidenav {\n    grid-area: sidenav;\n    height: 100vh;\n    /* overflow-y: scroll; */\n}\n\n.main {\n    grid-area: main;\n    background-color: whitesmoke;\n    height: 100vh;\n\n    display: -webkit-box;\n\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\napp-detailview {\n    /* background-color: grey; */\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGlDQUFpQztJQUNqQztzQkFDa0I7SUFDbEIsYUFBYTtJQUNiLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLDRCQUE0QjtJQUM1QixhQUFhOztJQUViLG9CQUFhOztJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBOEI7WUFBOUIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksNEJBQTRCO0lBQzVCLG1CQUFZO1lBQVosWUFBWTtJQUNaLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSA3NSU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmciBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XG4gICAgICAgIFwic2lkZW5hdiBtYWluXCI7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XG59XG5cbi5zaWRlbmF2IHtcbiAgICBncmlkLWFyZWE6IHNpZGVuYXY7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAvKiBvdmVyZmxvdy15OiBzY3JvbGw7ICovXG59XG5cbi5tYWluIHtcbiAgICBncmlkLWFyZWE6IG1haW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuYXBwLWRldGFpbHZpZXcge1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGdyZXk7ICovXG4gICAgZmxleC1ncm93OiAxO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'client';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, DataProviderFactory */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataProviderFactory", function () {
      return DataProviderFactory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./overview/overview.component */
    "./src/app/overview/overview.component.ts");
    /* harmony import */


    var _metaview_metaview_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./metaview/metaview.component */
    "./src/app/metaview/metaview.component.ts");
    /* harmony import */


    var _detailview_detailview_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./detailview/detailview.component */
    "./src/app/detailview/detailview.component.ts");
    /* harmony import */


    var _detailview_suggestion_panel_suggestion_panel_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./detailview/suggestion-panel/suggestion-panel.component */
    "./src/app/detailview/suggestion-panel/suggestion-panel.component.ts");
    /* harmony import */


    var _detailview_dragndrop_panel_dragndrop_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./detailview/dragndrop-panel/dragndrop-panel.component */
    "./src/app/detailview/dragndrop-panel/dragndrop-panel.component.ts");
    /* harmony import */


    var _detailview_card_viz_card_viz_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./detailview/card-viz/card-viz.component */
    "./src/app/detailview/card-viz/card-viz.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/esm2015/scrolling.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var src_services_notification_service__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! src/services/notification-service */
    "./src/services/notification-service.ts");
    /* harmony import */


    var _services_Data_provider_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./../services/Data_provider.service */
    "./src/services/Data_provider.service.ts"); //Components


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _overview_overview_component__WEBPACK_IMPORTED_MODULE_6__["OverviewComponent"], _metaview_metaview_component__WEBPACK_IMPORTED_MODULE_7__["MetaviewComponent"], _detailview_detailview_component__WEBPACK_IMPORTED_MODULE_8__["DetailviewComponent"], _detailview_suggestion_panel_suggestion_panel_component__WEBPACK_IMPORTED_MODULE_9__["SuggestionPanelComponent"], _detailview_dragndrop_panel_dragndrop_panel_component__WEBPACK_IMPORTED_MODULE_10__["DragndropPanelComponent"], _detailview_card_viz_card_viz_component__WEBPACK_IMPORTED_MODULE_11__["CardVizComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"], _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_19__["DragDropModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatAutocompleteModule"], _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_14__["MatSelectModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_21__["MatSidenavModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_23__["MatTooltipModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_25__["MatRadioModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_26__["MatCheckboxModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_27__["MatListModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_28__["MatMenuModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__["ScrollingModule"]],
      providers: [src_services_notification_service__WEBPACK_IMPORTED_MODULE_30__["NotficationService"], _services_Data_provider_service__WEBPACK_IMPORTED_MODULE_31__["DataProvider"], {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__["APP_INITIALIZER"],
        useFactory: DataProviderFactory,
        deps: [_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_31__["DataProvider"]],
        multi: true
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
      entryComponents: [_detailview_card_viz_card_viz_component__WEBPACK_IMPORTED_MODULE_11__["CardVizComponent"]]
    })], AppModule);

    function DataProviderFactory(provider) {
      return function () {
        return provider.load();
      };
    }
    /***/

  },

  /***/
  "./src/app/detailview/card-viz/card-viz.component.css":
  /*!************************************************************!*\
    !*** ./src/app/detailview/card-viz/card-viz.component.css ***!
    \************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailviewCardVizCardVizComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".node {\n    position: absolute;\n    padding: 4px;\n    /* box-shadow: 0 10px 40px 0 #B0C1D9; */\n    text-align: center;\n}\n\n.var_name {\n    margin: 0;\n    font-size: 10px;\n    text-transform: lowercase;\n}\n\n.drag-handle {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    color: #ccc;\n    cursor: move;\n    width: 24px;\n    height: 24px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsdmlldy9jYXJkLXZpei9jYXJkLXZpei5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWix1Q0FBdUM7SUFDdkMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksU0FBUztJQUNULGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWx2aWV3L2NhcmQtdml6L2NhcmQtdml6LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9kZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICAvKiBib3gtc2hhZG93OiAwIDEwcHggNDBweCAwICNCMEMxRDk7ICovXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udmFyX25hbWUge1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cblxuLmRyYWctaGFuZGxlIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGNvbG9yOiAjY2NjO1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/detailview/card-viz/card-viz.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/detailview/card-viz/card-viz.component.ts ***!
    \***********************************************************/

  /*! exports provided: CardVizComponent */

  /***/
  function srcAppDetailviewCardVizCardVizComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardVizComponent", function () {
      return CardVizComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/services/draw-chart.service */
    "./src/services/draw-chart.service.ts");
    /* harmony import */


    var src_services_cards_creation_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/services/cards-creation.service */
    "./src/services/cards-creation.service.ts"); // Angular libs
    // Services


    var CardVizComponent =
    /*#__PURE__*/
    function () {
      function CardVizComponent(drawChartService, cardsCreationService) {
        _classCallCheck(this, CardVizComponent);

        this.drawChartService = drawChartService;
        this.cardsCreationService = cardsCreationService;
      }

      _createClass(CardVizComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {} // this.drawChartService.DrawVisualizationDetail(this.visualization, this.creationEntries);
        // DestroyComponent(): boolean {
        //   // return this.cardsCreationService.DeleteVisualization(this.id);
        // }

      }, {
        key: "drop",
        value: function drop(event) {
          if (event.previousContainer !== event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_2__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
          }
        }
      }]);

      return CardVizComponent;
    }();

    CardVizComponent.ctorParameters = function () {
      return [{
        type: src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_3__["DrawChartService"]
      }, {
        type: src_services_cards_creation_service__WEBPACK_IMPORTED_MODULE_4__["CardsCreationService"]
      }];
    };

    CardVizComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-card-viz',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./card-viz.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/card-viz/card-viz.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./card-viz.component.css */
      "./src/app/detailview/card-viz/card-viz.component.css")).default]
    })], CardVizComponent);
    /***/
  },

  /***/
  "./src/app/detailview/detailview.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/detailview/detailview.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailviewDetailviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-flow: column;\n    height: 100%;\n}\n\napp-suggestion-panel {\n    -webkit-box-flex: 0;\n            flex: 0 1 auto;\n}\n\napp-dragndrop-panel {\n    /* height: max-content; */\n    /* background-color: hotpink; */\n    /* flex: 1 1 auto; */\n    -webkit-box-flex: 1;\n            flex: 1;\n    overflow-y: scroll;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsdmlldy9kZXRhaWx2aWV3LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBaUI7SUFBakIsNkJBQWlCO1lBQWpCLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUErQjtJQUMvQixvQkFBb0I7SUFDcEIsbUJBQU87WUFBUCxPQUFPO0lBQ1Asa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsdmlldy9kZXRhaWx2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuYXBwLXN1Z2dlc3Rpb24tcGFuZWwge1xuICAgIGZsZXg6IDAgMSBhdXRvO1xufVxuXG5hcHAtZHJhZ25kcm9wLXBhbmVsIHtcbiAgICAvKiBoZWlnaHQ6IG1heC1jb250ZW50OyAqL1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGhvdHBpbms7ICovXG4gICAgLyogZmxleDogMSAxIGF1dG87ICovXG4gICAgZmxleDogMTtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/detailview/detailview.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/detailview/detailview.component.ts ***!
    \****************************************************/

  /*! exports provided: DetailviewComponent */

  /***/
  function srcAppDetailviewDetailviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailviewComponent", function () {
      return DetailviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DetailviewComponent =
    /*#__PURE__*/
    function () {
      function DetailviewComponent() {
        _classCallCheck(this, DetailviewComponent);
      }

      _createClass(DetailviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DetailviewComponent;
    }();

    DetailviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-detailview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./detailview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/detailview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./detailview.component.css */
      "./src/app/detailview/detailview.component.css")).default]
    })], DetailviewComponent);
    /***/
  },

  /***/
  "./src/app/detailview/dragndrop-panel/dragndrop-panel.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/detailview/dragndrop-panel/dragndrop-panel.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailviewDragndropPanelDragndropPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* .DragDropContainer {\n    display: flex;\n    flex-direction: row;\n} */\n\n .node {\n    padding: 4px; \n    /* box-shadow: 0 10px 40px 0 #B0C1D9; */\n     /* text-align: center;  */\n }\n\n .var_name {\n    margin: 0;\n    font-size: 10px;\n    text-transform: lowercase;\n}\n\n .drag-handle {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    color: #ccc;\n    cursor: move;\n    width: 24px;\n    height: 24px;\n}\n\n .delete-btn{\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n\n li.list-var.ng-star-inserted{\n  text-transform: lowercase;\n}\n\n .example-container {\n    background-color: #3a74b73b;\n    padding: 5px;\n    min-width: 200px;\n    min-height: 100px;\n    margin: 7px;\n    border-radius: 8px;\n    display: inline-block;\n  vertical-align: top;\n}\n\n .example-list{\n    border: solid 1px #ccc;\n    background: white;\n    border-radius: 4px;\n    min-height: 100px;\n    display: block;\n  }\n\n .example-box{\n    cursor: move;\n    margin-top: 2px;\n  }\n\n .cdk-drag-preview {\n    box-sizing: border-box;\n    border-radius: 4px;\n    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n                0 8px 10px 1px rgba(0, 0, 0, 0.14),\n                0 3px 14px 2px rgba(0, 0, 0, 0.12);\n  }\n\n .cdk-drag-placeholder {\n    opacity: 0;\n  }\n\n .cdk-drag-animating {\n    -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n\n .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\n    -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsdmlldy9kcmFnbmRyb3AtcGFuZWwvZHJhZ25kcm9wLXBhbmVsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHOztDQUVGO0lBQ0csWUFBWTtJQUNaLHVDQUF1QztLQUN0Qyx5QkFBeUI7Q0FDN0I7O0NBRUQ7SUFDSSxTQUFTO0lBQ1QsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7Q0FFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsV0FBVztJQUNYLFdBQVc7SUFDWCxZQUFZO0lBQ1osV0FBVztJQUNYLFlBQVk7QUFDaEI7O0NBQ0E7RUFDRSxTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztBQUNsQzs7Q0FFQTtFQUNFLHlCQUF5QjtBQUMzQjs7Q0FDQTtJQUNJLDJCQUEyQjtJQUMzQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHFCQUFxQjtFQUN2QixtQkFBbUI7QUFDckI7O0NBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7Q0FFQTtJQUNFLFlBQVk7SUFDWixlQUFlO0VBQ2pCOztDQUVGO0lBQ0ksc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQjs7a0RBRThDO0VBQ2hEOztDQUVBO0lBQ0UsVUFBVTtFQUNaOztDQUVBO0lBQ0Usc0VBQXNEO0lBQXRELDhEQUFzRDtJQUF0RCxzREFBc0Q7SUFBdEQsMEdBQXNEO0VBQ3hEOztDQUVBO0lBQ0Usc0VBQXNEO0lBQXRELDhEQUFzRDtJQUF0RCxzREFBc0Q7SUFBdEQsMEdBQXNEO0VBQ3hEIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsdmlldy9kcmFnbmRyb3AtcGFuZWwvZHJhZ25kcm9wLXBhbmVsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiAuRHJhZ0Ryb3BDb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbn0gKi9cblxuIC5ub2RlIHtcbiAgICBwYWRkaW5nOiA0cHg7IFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMTBweCA0MHB4IDAgI0IwQzFEOTsgKi9cbiAgICAgLyogdGV4dC1hbGlnbjogY2VudGVyOyAgKi9cbiB9XG5cbi52YXJfbmFtZSB7XG4gICAgbWFyZ2luOiAwO1xuICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xufVxuXG4uZHJhZy1oYW5kbGUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgY29sb3I6ICNjY2M7XG4gICAgY3Vyc29yOiBtb3ZlO1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbn0gXG4uZGVsZXRlLWJ0bntcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxubGkubGlzdC12YXIubmctc3Rhci1pbnNlcnRlZHtcbiAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn1cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhNzRiNzNiO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIG1hcmdpbjogN3B4O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG4uZXhhbXBsZS1saXN0e1xuICAgIGJvcmRlcjogc29saWQgMXB4ICNjY2M7XG4gICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG5cbiAgLmV4YW1wbGUtYm94e1xuICAgIGN1cnNvcjogbW92ZTtcbiAgICBtYXJnaW4tdG9wOiAycHg7XG4gIH1cblxuLmNkay1kcmFnLXByZXZpZXcge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSxcbiAgICAgICAgICAgICAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuICAgICAgICAgICAgICAgIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIH1cbiAgXG4gIC5jZGstZHJhZy1wbGFjZWhvbGRlciB7XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuICBcbiAgLmNkay1kcmFnLWFuaW1hdGluZyB7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDI1MG1zIGN1YmljLWJlemllcigwLCAwLCAwLjIsIDEpO1xuICB9XG4gIFxuICAuZXhhbXBsZS1saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLmV4YW1wbGUtYm94Om5vdCguY2RrLWRyYWctcGxhY2Vob2xkZXIpIHtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/detailview/dragndrop-panel/dragndrop-panel.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/detailview/dragndrop-panel/dragndrop-panel.component.ts ***!
    \*************************************************************************/

  /*! exports provided: DragndropPanelComponent */

  /***/
  function srcAppDetailviewDragndropPanelDragndropPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DragndropPanelComponent", function () {
      return DragndropPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_services_cards_creation_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/services/cards-creation.service */
    "./src/services/cards-creation.service.ts"); // Services


    var DragndropPanelComponent =
    /*#__PURE__*/
    function () {
      function DragndropPanelComponent(cardsCreationService) {
        _classCallCheck(this, DragndropPanelComponent);

        this.cardsCreationService = cardsCreationService;
      }

      _createClass(DragndropPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "DeleteCard",
        value: function DeleteCard(id) {
          return this.cardsCreationService.removeCard(id);
        }
      }, {
        key: "drop",
        value: function drop(event) {
          this.cardsCreationService.moveCard(event);
        }
      }, {
        key: "drag",
        value: function drag(event) {
          this.cardsCreationService.createGroup();
        }
      }]);

      return DragndropPanelComponent;
    }();

    DragndropPanelComponent.ctorParameters = function () {
      return [{
        type: src_services_cards_creation_service__WEBPACK_IMPORTED_MODULE_2__["CardsCreationService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('cardContainer', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"],
      static: true
    })], DragndropPanelComponent.prototype, "viewContainerRef", void 0);
    DragndropPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dragndrop-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dragndrop-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/dragndrop-panel/dragndrop-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dragndrop-panel.component.css */
      "./src/app/detailview/dragndrop-panel/dragndrop-panel.component.css")).default]
    })], DragndropPanelComponent);
    /***/
  },

  /***/
  "./src/app/detailview/suggestion-panel/suggestion-panel.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/detailview/suggestion-panel/suggestion-panel.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDetailviewSuggestionPanelSuggestionPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-inline {\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-align: center;\n                align-items: center;\n        border-style: solid;\n        border-width: 1px;\n        border-radius: 4px;\n        border-color: #8080805c;\n        background-color: #fff;\n        padding: 10px;\n        margin: 5px;\n        box-shadow: 3px 1px 3px 1px #8080807d;\n    }\n\nmat-form-field{\n    margin-left: 5px;\n    margin-right: 5px;\n}\n\n#group-task{\n    display: grid;\n    margin: 0px 8px\n}\n\n.example-chip-list {\n    width: 100vh;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlsdmlldy9zdWdnZXN0aW9uLXBhbmVsL3N1Z2dlc3Rpb24tcGFuZWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtRQUNRLG9CQUFhO1FBQWIsYUFBYTtRQUNiLHlCQUFtQjtnQkFBbkIsbUJBQW1CO1FBQ25CLG1CQUFtQjtRQUNuQixpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsYUFBYTtRQUNiLFdBQVc7UUFDWCxxQ0FBcUM7SUFDekM7O0FBRUo7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiO0FBQ0o7O0FBRUE7SUFDSSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9kZXRhaWx2aWV3L3N1Z2dlc3Rpb24tcGFuZWwvc3VnZ2VzdGlvbi1wYW5lbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0taW5saW5lIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjODA4MDgwNWM7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1hcmdpbjogNXB4O1xuICAgICAgICBib3gtc2hhZG93OiAzcHggMXB4IDNweCAxcHggIzgwODA4MDdkO1xuICAgIH1cblxubWF0LWZvcm0tZmllbGR7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbn0gXG5cbiNncm91cC10YXNre1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgbWFyZ2luOiAwcHggOHB4XG59XG5cbi5leGFtcGxlLWNoaXAtbGlzdCB7XG4gICAgd2lkdGg6IDEwMHZoO1xuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/detailview/suggestion-panel/suggestion-panel.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/detailview/suggestion-panel/suggestion-panel.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SuggestionPanelComponent */

  /***/
  function srcAppDetailviewSuggestionPanelSuggestionPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuggestionPanelComponent", function () {
      return SuggestionPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/esm2015/keycodes.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_helpers_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/helpers/enums */
    "./src/helpers/enums.ts");
    /* harmony import */


    var src_helpers_types__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/helpers/types */
    "./src/helpers/types.ts");
    /* harmony import */


    var src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/services/draw-chart.service */
    "./src/services/draw-chart.service.ts");
    /* harmony import */


    var src_services_suggest_chart_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/services/suggest-chart.service */
    "./src/services/suggest-chart.service.ts");
    /* harmony import */


    var src_services_cards_creation_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/services/cards-creation.service */
    "./src/services/cards-creation.service.ts");
    /* harmony import */


    var _services_validators_VisualisationSuggestionValidator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./../../../services/validators/VisualisationSuggestionValidator */
    "./src/services/validators/VisualisationSuggestionValidator.ts");
    /* harmony import */


    var src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/services/Data_provider.service */
    "./src/services/Data_provider.service.ts"); // Angular libs
    // Data files
    // Services
    // Visualization libraries


    var SuggestionPanelComponent =
    /*#__PURE__*/
    function () {
      function SuggestionPanelComponent(drawChartService, suggestChartService, cardCreationService, dataProvider) {
        _classCallCheck(this, SuggestionPanelComponent);

        this.drawChartService = drawChartService;
        this.suggestChartService = suggestChartService;
        this.cardCreationService = cardCreationService; // Variables to save user choice

        this.selectedTask = null;
        this.selectedQuestions = []; // Variables to create the form

        this.questionnaire = [];
        this.metadata = [];
        this.questions = [];
        this.tasks = src_helpers_enums__WEBPACK_IMPORTED_MODULE_5__["Task"];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.IdCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](); // Tagging system variables

        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_1__["COMMA"]];
        this.Data = dataProvider.getData();
      }

      _createClass(SuggestionPanelComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.questionnaire = this.Data.questionnaire;
          this.metadata = this.Data.metadata;
          this.questions = this.questions.concat(this.questionnaire, this.metadata);
          this.IdQuestions = this.questions.map(function (item) {
            return item.question;
          }); // Check difference between IdQuestions and filteredQuestions

          this.filteredQuestions = this.filterQuestions(this.IdQuestions);
        }
      }, {
        key: "filterQuestions",
        value: function filterQuestions(Questions) {
          var _this = this;

          return this.IdCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (question) {
            return question ? _this._filter(question) : Questions.slice();
          }));
        }
      }, {
        key: "add",
        value: function add(event) {
          // To make sure this does not conflict with OptionSelected Event
          if (!this.matAutocomplete.isOpen) {
            var input = event.input;
            var value = event.value; // Add our question

            if ((value || '').trim()) {
              this.selectedQuestions.push(value.trim());
            } // Reset the input value


            if (input) {
              input.value = '';
            }

            this.IdCtrl.setValue(null);
          }
        }
      }, {
        key: "remove",
        value: function remove(question) {
          var index = this.selectedQuestions.indexOf(question);

          if (index >= 0) {
            this.selectedQuestions.splice(index, 1);
          }
        }
      }, {
        key: "selected",
        value: function selected(event) {
          this.selectedQuestions.push(event.option.viewValue);
          this.questionInput.nativeElement.value = '';
          this.IdCtrl.setValue(null);
        }
      }, {
        key: "_filter",
        value: function _filter(value) {
          var filterValue = value.toLowerCase();
          return this.IdQuestions.filter(function (question) {
            return question.toLowerCase().indexOf(filterValue) === 0;
          });
        } // Steps before output visualization;
        // 1- Get the name of the suggested visualization
        // 2- Create container of visualization
        // 3- Create the schema of the visualization

      }, {
        key: "AddNode",
        value: function AddNode(questions, task) {
          var _this2 = this;

          var validationResults = new _services_validators_VisualisationSuggestionValidator__WEBPACK_IMPORTED_MODULE_10__["VisualisationSuggestionValidator"](questions, task['key']).Validate();

          if (validationResults.every(function (result) {
            return result.Result === src_helpers_enums__WEBPACK_IMPORTED_MODULE_5__["ValidationStatus"].Passed;
          })) {
            var id = src_helpers_types__WEBPACK_IMPORTED_MODULE_6__["Id"].New('CardEntry');
            var suggestedVisuallization = this.suggestChartService.SuggestVisualization(questions, task);
            var creationEntries = this.drawChartService.GetCreationEntries(id, questions);
            var cardEntry = {
              Id: id,
              CreationEntries: creationEntries,
              Visualization: suggestedVisuallization,
              Task: task['key']
            }; // Create node then add visualization

            this.cardCreationService.createCard(cardEntry).then(function () {
              var observer = new MutationObserver(function (mutations, me) {
                var canvas = document.getElementById(cardEntry.Id.Value);

                if (canvas) {
                  _this2.drawChartService.DrawVisualizationDetail(cardEntry.Visualization, cardEntry.CreationEntries);

                  me.disconnect(); // stop observing

                  return;
                }
              });
              observer.observe(document, {
                childList: true,
                subtree: true
              });
            });
            this.selectedQuestions = [];
          } else {
            var validationErrors = 'Validation failed:\n';
            validationResults.filter(function (r) {
              return r.Result === src_helpers_enums__WEBPACK_IMPORTED_MODULE_5__["ValidationStatus"].Failed;
            }).forEach(function (r) {
              return validationErrors += r.Message + '\n';
            });
            alert(validationErrors);
          }
        }
      }]);

      return SuggestionPanelComponent;
    }();

    SuggestionPanelComponent.ctorParameters = function () {
      return [{
        type: src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_7__["DrawChartService"]
      }, {
        type: src_services_suggest_chart_service__WEBPACK_IMPORTED_MODULE_8__["SuggestChartService"]
      }, {
        type: src_services_cards_creation_service__WEBPACK_IMPORTED_MODULE_9__["CardsCreationService"]
      }, {
        type: src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_11__["DataProvider"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('questionInput', {
      static: false
    })], SuggestionPanelComponent.prototype, "questionInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"])('auto', {
      static: false
    })], SuggestionPanelComponent.prototype, "matAutocomplete", void 0);
    SuggestionPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: 'app-suggestion-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./suggestion-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/detailview/suggestion-panel/suggestion-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./suggestion-panel.component.css */
      "./src/app/detailview/suggestion-panel/suggestion-panel.component.css")).default]
    })], SuggestionPanelComponent);
    /***/
  },

  /***/
  "./src/app/metaview/metaview.component.css":
  /*!*************************************************!*\
    !*** ./src/app/metaview/metaview.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMetaviewMetaviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#metaview-panel{\n    position: fixed;\n    bottom: 2px;\n}\n\n#metadata-container{\n    \n    border-style: solid;\n    border-width: 1px;\n    background-color: #3a74b73b;\n    border-color: rgb(204, 199, 199);\n    border-radius: 4px;\n}\n\n#metadata-viz-container{\n        display: -webkit-box;\n        display: flex;\n        -webkit-box-orient: horizontal;\n        -webkit-box-direction: normal;\n                flex-direction: row;\n        flex-wrap: wrap;\n}\n\n.viz-container\n{\n    width: -webkit-fit-content;\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 5px;\n    padding: 5px;\n    border-radius: 4px;\n    background-color: #fafafa;\n    border-color: teal;\n    border-style: solid;\n    border-width: thin;\n}\n\n.var_name{\n    margin: 0;\n    font-size: 10px;\n    text-transform: lowercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWV0YXZpZXcvbWV0YXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQiwyQkFBMkI7SUFDM0IsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtBQUN0Qjs7QUFFQTtRQUNRLG9CQUFhO1FBQWIsYUFBYTtRQUNiLDhCQUFtQjtRQUFuQiw2QkFBbUI7Z0JBQW5CLG1CQUFtQjtRQUNuQixlQUFlO0FBQ3ZCOztBQUNBOztJQUVJLDBCQUFrQjtJQUFsQix1QkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvbWV0YXZpZXcvbWV0YXZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNtZXRhdmlldy1wYW5lbHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAycHg7XG59XG5cbiNtZXRhZGF0YS1jb250YWluZXJ7XG4gICAgXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2E3NGI3M2I7XG4gICAgYm9yZGVyLWNvbG9yOiByZ2IoMjA0LCAxOTksIDE5OSk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4jbWV0YWRhdGEtdml6LWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xufVxuLnZpei1jb250YWluZXJcbntcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmFmYWZhO1xuICAgIGJvcmRlci1jb2xvcjogdGVhbDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogdGhpbjtcbn1cblxuLnZhcl9uYW1le1xuICAgIG1hcmdpbjogMDtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IGxvd2VyY2FzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/metaview/metaview.component.ts":
  /*!************************************************!*\
    !*** ./src/app/metaview/metaview.component.ts ***!
    \************************************************/

  /*! exports provided: MetaviewComponent */

  /***/
  function srcAppMetaviewMetaviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MetaviewComponent", function () {
      return MetaviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/services/draw-chart.service */
    "./src/services/draw-chart.service.ts");
    /* harmony import */


    var src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/services/Data_provider.service */
    "./src/services/Data_provider.service.ts");
    /* harmony import */


    var src_helpers_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/helpers/types */
    "./src/helpers/types.ts"); // Angular libs
    // Services
    // Data files


    var MetaviewComponent =
    /*#__PURE__*/
    function () {
      function MetaviewComponent(drawChartService, dataProvider) {
        _classCallCheck(this, MetaviewComponent);

        this.drawChartService = drawChartService;
        this.dataProvider = dataProvider;
        this.Data = dataProvider.getData();
        this.metadata = this.Data.metadata;
      }

      _createClass(MetaviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.metadata.forEach(function (question) {
            var id = src_helpers_types__WEBPACK_IMPORTED_MODULE_4__["Id"].New('metaview_' + question.variable, false);
            var questions = [question];
            var creationEntry = new src_helpers_types__WEBPACK_IMPORTED_MODULE_4__["CreationEntry"](id, questions, true, _this3.Data.ndx);
            var observer = new MutationObserver(function (mutations, me) {
              var canvas = document.getElementById(id.Value);

              if (canvas) {
                _this3.drawChartService.DrawVisualizationOverview(creationEntry);

                me.disconnect(); // stop observing

                return;
              }
            });
            observer.observe(document, {
              childList: true,
              subtree: true
            });
          });
        }
      }]);

      return MetaviewComponent;
    }();

    MetaviewComponent.ctorParameters = function () {
      return [{
        type: src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_2__["DrawChartService"]
      }, {
        type: src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_3__["DataProvider"]
      }];
    };

    MetaviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-metaview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./metaview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/metaview/metaview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./metaview.component.css */
      "./src/app/metaview/metaview.component.css")).default]
    })], MetaviewComponent);
    /***/
  },

  /***/
  "./src/app/overview/overview.component.css":
  /*!*************************************************!*\
    !*** ./src/app/overview/overview.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOverviewOverviewComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form-width {\n    width: 100%;\n}\n\n.container {\n    display: -webkit-box;\n    display: flex;\n    height: 94vh;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n            flex-direction: row;\n    flex-wrap: wrap;\n    overflow-y: scroll; \n    background-color: #3a74b73b;    \n    align-content: flex-start;\n}\n\n.box-viz {\n    margin: 5px 0px 0px 5px;\n    padding: 0px 5px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    min-width: 90px;\n    height: 75px;\n    border-radius: 4px;\n    background-color: #fafafa;\n}\n\n.var_name {\n    margin: 0;\n    font-size: 10px;\n    text-transform: lowercase;\n    max-width: 88px;\n    text-overflow:  ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n}\n\n/* Interaction */\n\n.found-highlight {\n    border-width: 3px !important;\n    box-shadow: 3px 1px 3px 1px rgba(65, 93, 163, 0.6) !important;\n    -webkit-transition: all linear 250ms;\n    transition: all linear 250ms;\n}\n\n.Rating{\n    margin-top: -7px;\n    margin-bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3ZlcnZpZXcvb3ZlcnZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLFlBQVk7SUFDWiw4QkFBbUI7SUFBbkIsNkJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxlQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQSxnQkFBZ0I7O0FBQ2hCO0lBQ0ksNEJBQTRCO0lBRzVCLDZEQUE2RDtJQUM3RCxvQ0FBNEI7SUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL292ZXJ2aWV3L292ZXJ2aWV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS13aWR0aCB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiA5NHZoO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDsgXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhNzRiNzNiOyAgICBcbiAgICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xufVxuXG4uYm94LXZpeiB7XG4gICAgbWFyZ2luOiA1cHggMHB4IDBweCA1cHg7XG4gICAgcGFkZGluZzogMHB4IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWluLXdpZHRoOiA5MHB4O1xuICAgIGhlaWdodDogNzVweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLnZhcl9uYW1lIHtcbiAgICBtYXJnaW46IDA7XG4gICAgZm9udC1zaXplOiAxMHB4O1xuICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgbWF4LXdpZHRoOiA4OHB4O1xuICAgIHRleHQtb3ZlcmZsb3c6ICBlbGxpcHNpcztcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi8qIEludGVyYWN0aW9uICovXG4uZm91bmQtaGlnaGxpZ2h0IHtcbiAgICBib3JkZXItd2lkdGg6IDNweCAhaW1wb3J0YW50O1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogOHB4IDFweCAzMXB4IDFweCByZ2JhKDY1LCA5MywgMTYzLCAwLjYpICFpbXBvcnRhbnQ7XG4gICAgLW1vei1ib3gtc2hhZG93OiA4cHggMXB4IDMxcHggMXB4IHJnYmEoNjUsIDkzLCAxNjMsIDAuNik7XG4gICAgYm94LXNoYWRvdzogM3B4IDFweCAzcHggMXB4IHJnYmEoNjUsIDkzLCAxNjMsIDAuNikgIWltcG9ydGFudDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDI1MG1zO1xufVxuXG4uUmF0aW5ne1xuICAgIG1hcmdpbi10b3A6IC03cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/overview/overview.component.ts":
  /*!************************************************!*\
    !*** ./src/app/overview/overview.component.ts ***!
    \************************************************/

  /*! exports provided: OverviewComponent */

  /***/
  function srcAppOverviewOverviewComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OverviewComponent", function () {
      return OverviewComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/services/draw-chart.service */
    "./src/services/draw-chart.service.ts");
    /* harmony import */


    var src_helpers_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/helpers/types */
    "./src/helpers/types.ts");
    /* harmony import */


    var src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/services/Data_provider.service */
    "./src/services/Data_provider.service.ts"); // Angular Modules
    // Services
    // Interfaces
    // library


    var OverviewComponent =
    /*#__PURE__*/
    function () {
      function OverviewComponent(drawChartService, dataProvider, dialog) {
        var _this4 = this;

        _classCallCheck(this, OverviewComponent);

        this.drawChartService = drawChartService;
        this.dialog = dialog;
        this.IdCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.filteredQuestions_list = [];
        this.master_checked = true;
        this.master_indeterminate = false;
        this.Data = dataProvider.getData();
        this.questionnaire = this.Data.questionnaire;
        this.questionnaire.forEach(function (element) {
          _this4.filteredQuestions_list.push({
            name: element.question,
            disabled: false,
            checked: true,
            labelPosition: "after"
          });

          _this4.filteredQuestions = _this4.filteredQuestions_list;
        });
      }

      _createClass(OverviewComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.questionnaire.forEach(function (question) {
            var id = src_helpers_types__WEBPACK_IMPORTED_MODULE_5__["Id"].New('overview_' + question.variable, false);
            var questions = [question];
            var creationEntry = new src_helpers_types__WEBPACK_IMPORTED_MODULE_5__["CreationEntry"](id, questions, true, _this5.Data.ndx);
            var observer = new MutationObserver(function (mutations, me) {
              var canvas = document.getElementById(id.Value);

              if (canvas) {
                _this5.drawChartService.DrawVisualizationOverview(creationEntry);

                me.disconnect(); // stop observing

                return;
              }
            });
            observer.observe(document, {
              childList: true,
              subtree: true
            });
          });
        }
      }, {
        key: "master_change",
        value: function master_change() {
          var _this6 = this;

          this.filteredQuestions_list.forEach(function (value) {
            value.checked = _this6.master_checked;
          });
        }
      }, {
        key: "list_change",
        value: function list_change() {
          var checked_count = 0; //Get total checked items

          for (var _i = 0, _Object$values = Object.values(this.filteredQuestions_list); _i < _Object$values.length; _i++) {
            var value = _Object$values[_i];

            if (value.checked) {
              checked_count++;
            }
          }

          if (checked_count > 0 && checked_count < this.filteredQuestions_list.length) {
            // If some checkboxes are checked but not all; then set Indeterminate state of the master to true.
            this.master_indeterminate = true;
          } else if (checked_count == this.filteredQuestions_list.length) {
            //If checked count is equal to total items; then check the master checkbox and also set Indeterminate state to false.
            this.master_indeterminate = false;
            this.master_checked = true;
          } else {
            //If none of the checkboxes in the list is checked then uncheck master also set Indeterminate to false.
            this.master_indeterminate = false;
            this.master_checked = false;
          }
        }
      }, {
        key: "UpdateQuestions",
        value: function UpdateQuestions() {
          console.log("Update yaw");
          this.filteredQuestions = this.filteredQuestions_list;
        }
      }, {
        key: "_filterQuestions",
        value: function _filterQuestions(value) {
          var filterValue = value.toLowerCase();
          return this.questionnaire.filter(function (question) {
            return question.question.toLowerCase().indexOf(filterValue) === 0;
          });
        }
      }, {
        key: "submit",
        value: function submit(value) {
          var code = this.questionnaire.filter(function (question) {
            return question.question.indexOf(value) === 0;
          })[0].variable;
          var container = document.getElementById('container_' + code);
          container.classList.add('found-highlight');
          setTimeout(function () {
            container.classList.remove('found-highlight');
          }, 750);
          this.IdCtrl.reset();
        }
      }, {
        key: "ResetFilters",
        value: function ResetFilters() {
          this.drawChartService.RedrawVisualizations();
          this.filteredQuestions_list.forEach(function (value) {
            value.checked = true;
          });
          this.master_checked = true;
          this.master_indeterminate = false;
        }
      }, {
        key: "sortBy",
        value: function sortBy(prop) {
          return this.filteredQuestions_list.sort(function (a, b) {
            return a[prop] > b[prop] ? 1 : a[prop] === b[prop] ? 0 : -1;
          });
        }
      }, {
        key: "IsChecked",
        value: function IsChecked(question) {
          var value = this.filteredQuestions.filter(function (data) {
            return data.name == question;
          })[0];
          return value.checked;
        }
      }, {
        key: "OpenData",
        value: function OpenData() {
          alert('Data Source: Comparative Study of Electoral Systems Integrated Module Dataset');
        }
      }]);

      return OverviewComponent;
    }();

    OverviewComponent.ctorParameters = function () {
      return [{
        type: src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_4__["DrawChartService"]
      }, {
        type: src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_6__["DataProvider"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
      }];
    };

    OverviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-overview',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./overview.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/overview/overview.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./overview.component.css */
      "./src/app/overview/overview.component.css")).default]
    })], OverviewComponent);
    /***/
  },

  /***/
  "./src/assets/data/allData.ts":
  /*!************************************!*\
    !*** ./src/assets/data/allData.ts ***!
    \************************************/

  /*! exports provided: allData */

  /***/
  function srcAssetsDataAllDataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "allData", function () {
      return allData;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _questionnaire__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./questionnaire */
    "./src/assets/data/questionnaire.ts");
    /* harmony import */


    var _metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./metadata */
    "./src/assets/data/metadata.ts");

    var allData = [];
    allData = allData.concat(_questionnaire__WEBPACK_IMPORTED_MODULE_1__["questionnaire"], _metadata__WEBPACK_IMPORTED_MODULE_2__["metadata"]);
    /***/
  },

  /***/
  "./src/assets/data/metadata.ts":
  /*!*************************************!*\
    !*** ./src/assets/data/metadata.ts ***!
    \*************************************/

  /*! exports provided: metadata */

  /***/
  function srcAssetsDataMetadataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "metadata", function () {
      return metadata;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var metadata = [{
      id: 102,
      variable: 'IMD1009',
      question: 'ELECTION TYPE',
      category: 'Multiple choices',
      Options: {
        10: 'PARLIAMENTARY/LEGISLATIVE',
        12: 'PARLIAMENTARY/LEGISLATIVE AND PRESIDENTIAL',
        13: 'PARLIAMENTARY/LEGISLATIVE AND PRIME MINISTER',
        20: 'PRESIDENTIAL',
        30: 'HEAD OF GOVERNMENT'
      }
    }, {
      id: 103,
      variable: 'IMD1015',
      question: 'STUDY CONTEXT',
      category: 'Multiple choices',
      Options: {
        1: 'POST-ELECTION STUDY',
        2: 'PRE-ELECTION AND POST-ELECTION STUDY',
        3: 'BETWEEN ROUNDS'
      }
    }, {
      id: 105,
      variable: 'IMD1008_MOD_1',
      question: 'Module 1',
      category: 'Multiple choices',
      Options: {
        0: 'NOT INCLUDED IN MODULE 1',
        1: 'INCLUDED IN MODULE 1'
      }
    }, {
      id: 106,
      variable: 'IMD1008_MOD_2',
      question: 'Module 2',
      category: 'Multiple choices',
      Options: {
        0: 'NOT INCLUDED IN MODULE 2',
        1: 'INCLUDED IN MODULE 2'
      }
    }, {
      id: 107,
      variable: 'IMD1008_MOD_3',
      question: 'Module 3',
      category: 'Multiple choices',
      Options: {
        0: 'NOT INCLUDED IN MODULE 3',
        1: 'INCLUDED IN MODULE 3'
      }
    }, {
      id: 108,
      variable: 'IMD1008_MOD_4',
      question: 'Module 4',
      category: 'Multiple choices',
      Options: {
        0: 'NOT INCLUDED IN MODULE 4',
        1: 'INCLUDED IN MODULE 4'
      }
    }, {
      id: 109,
      variable: 'IMD1016_1',
      question: 'Mode of interview-Study 1',
      category: 'Multiple choices',
      Options: {
        1: 'FACE-TO-FACE',
        2: 'TELEPHONE',
        3: 'MAIL',
        4: 'INTERNET',
        9: 'MISSING'
      }
    }, {
      id: 110,
      variable: 'IMD1016_2',
      question: 'Mode of interview-Study 2',
      category: 'Multiple choices',
      Options: {
        1: 'FACE-TO-FACE',
        2: 'TELEPHONE',
        3: 'MAIL',
        4: 'INTERNET',
        9: 'MISSING'
      }
    }, {
      id: 111,
      variable: 'IMD1016_3',
      question: 'Mode of interview-Study 3',
      category: 'Multiple choices',
      Options: {
        1: 'Face-to-face',
        2: 'Phone',
        3: 'Mail',
        4: 'Internet',
        9: 'Missing'
      }
    }, {
      id: 104,
      variable: 'IMD1006_NAM',
      question: 'POLITY NAME',
      category: 'Country',
      Options: {}
    }, {
      id: 101,
      variable: 'IMD1008_YEAR',
      question: 'ELECTION YEAR',
      category: 'Numerical',
      Options: {}
    }];
    /***/
  },

  /***/
  "./src/assets/data/questionnaire.ts":
  /*!******************************************!*\
    !*** ./src/assets/data/questionnaire.ts ***!
    \******************************************/

  /*! exports provided: questionnaire */

  /***/
  function srcAssetsDataQuestionnaireTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "questionnaire", function () {
      return questionnaire;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var questionnaire = [{
      id: 1,
      variable: 'IMD2001_2',
      question: 'Age',
      category: 'Multiple choices',
      Options: {
        1: 'YOUNGEST - 24 YEARS',
        2: '25 - 34 YEARS ',
        3: '35 - 44 YEARS',
        4: '45 - 54 YEARS',
        5: '55 - 64 YEARS',
        6: '65 YEARS - OLDER',
        9997: 'VOLUNTEERED: REFUSED',
        9998: 'VOLUNTEERED: DON\'T KNOW',
        9999: 'MISSING'
      },
      answers: ['YOUNGEST - 24 YEARS', '45 - 54 YEARS']
    }, {
      id: 2,
      variable: 'IMD2002',
      question: 'Gender',
      category: 'Multiple choices',
      Options: {
        1: 'MALE',
        2: 'FEMALE ',
        7: 'VOLUNTEERED: REFUSED',
        8: 'VOLUNTEERED: DON\'T KNOW',
        9: 'MISSING'
      },
      answers: ['MALE', 'MISSING']
    }, {
      id: 3,
      variable: 'IMD2003',
      question: 'Education',
      category: 'Multiple choices',
      Options: {
        0: 'NONE (NO EDUCATION)/ILLITERATE',
        1: 'PRIMARY EDUCATION/LOWER SECONDARY EDUCATION',
        2: 'HIGHER SECONDARY EDUCATION ',
        3: 'POST-SECONDARY (NON-UNIVERSITY) EDUCATION ',
        4: 'UNIVERSITY EDUCATION',
        6: 'OTHER',
        7: 'VOLUNTEERED: REFUSED',
        8: 'VOLUNTEERED: DON\'T KNOW',
        9: 'MISSING'
      },
      answers: ['MALE', 'MISSING']
    }, {
      id: 4,
      variable: 'IMD2004',
      question: 'Marital status',
      category: 'Multiple choices',
      Options: {
        1: 'MARRIED OR LIVING TOGETHER AS MARRIED',
        2: 'WIDOWED',
        3: 'DIVORCED OR SEPARATED',
        4: 'SINGLE, NEVER MARRIED',
        5: 'OTHER',
        7: 'VOLUNTEERED: REFUSED',
        8: 'VOLUNTEERED: DON\'T KNOW',
        9: 'MISSING'
      },
      answers: ['WIDOWED', 'DIVORCED OR SEPARATED']
    }, {
      id: 47,
      variable: 'IMD2007',
      question: 'Rural or Urban residence',
      category: 'Multiple choices',
      Options: {
        1: 'Rural area or village',
        2: 'Small r middle-sized town',
        3: 'Suburbs of large town or city',
        4: 'Large town or city',
        7: 'Refused',
        8: 'Don\'t know',
        9: 'Missing'
      }
    }, {
      id: 5,
      variable: 'IMD2005',
      question: 'Religion',
      category: 'Multiple choices',
      Options: {
        1: 'CATHOLIC',
        2: 'PROTESTANT',
        3: 'ORTHODOX/EASTERN CATHOLIC CHURCHES',
        4: 'OTHER CHRISTIAN',
        5: 'JEWISH',
        6: 'ISLAM - SUNNI',
        7: 'ISLAM - OTHER',
        8: 'BUDDHISM',
        9: 'HINDUISM',
        10: 'INDIGENOUS',
        11: 'ETHNORELIGIONS',
        12: 'NON-BELIEVERS',
        13: 'AGNOSTICS',
        96: 'OTHER: NOT SPECIFIED',
        97: 'VOLUNTEERED: REFUSED',
        98: 'VOLUNTEERED: DON\'T KNOW',
        99: 'MISSING'
      },
      answers: ['ISLAM - SUNNI', 'ISLAM - SUNNI']
    }, {
      id: 6,
      variable: 'IMD2006',
      question: 'Household income',
      category: 'Multiple choices',
      Options: {
        1: 'LOWEST HOUSEHOLD INCOME QUINTILE',
        2: 'SECOND HOUSEHOLD INCOME QUINTILE',
        3: 'THIRD HOUSEHOLD INCOME QUINTILE',
        4: 'FOURTH HOUSEHOLD INCOME QUINTILE',
        5: 'HIGHEST HOUSEHOLD INCOME QUINTILE',
        6: 'OTHER',
        7: 'VOLUNTEERED: REFUSED',
        8: 'VOLUNTEERED: DON\'T KNOW',
        9: 'MISSING'
      }
    }, //     //],
    //   //  "Survey": [
    {
      id: 7,
      variable: 'IMD3001',
      question: 'TURNOUT-MAIN ELECTION',
      category: 'Multiple choices',
      Options: {
        0: 'RESPONDENT DID NOT CAST A BALLOT',
        1: 'RESPONDENT CAST A BALLOT ',
        9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
        9999997: 'VOLUNTEERED: REFUSED',
        9999998: 'VOLUNTEERED: DON\'T KNOW',
        9999999: 'MISSING'
      }
    }, {
      id: 8,
      variable: 'IMD3001_PR_1',
      question: 'TURNOUT-CURRENT PRESIDENTIAL ELECTION-ROUND 1',
      category: 'Multiple choices',
      Options: {
        0: 'RESPONDENT DID NOT CAST A BALLOT',
        1: 'RESPONDENT CAST A BALLOT ',
        9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
        9999995: 'NOT APPLICABLE: NO ROLE OF PRESIDENT',
        9999996: 'NOT APPLICABLE: NO PRESIDENTIAL ELECTIONS',
        9999997: 'VOLUNTEERED: REFUSED',
        9999998: 'VOLUNTEERED: DON\'T KNOW',
        9999999: 'MISSING'
      }
    }, {
      id: 9,
      variable: 'IMD3001_PR_2',
      question: 'TURNOUT-CURRENT PRESIDENTIAL ELECTION-ROUND 2',
      category: 'Multiple choices',
      Options: {
        0: 'RESPONDENT DID NOT CAST A BALLOT',
        1: 'RESPONDENT CAST A BALLOT ',
        9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
        9999995: 'NOT APPLICABLE: NO ROLE OF PRESIDENT',
        9999996: 'NOT APPLICABLE: NO PRESIDENTIAL ELECTIONS',
        9999997: 'VOLUNTEERED: REFUSED',
        9999998: 'VOLUNTEERED: DON\'T KNOW',
        9999999: 'MISSING'
      }
    }, {
      id: 10,
      variable: 'IMD3001_LH',
      question: 'TURNOUT-CURRENT LOWER HOUSE ELECTION',
      category: 'Multiple choices',
      Options: {
        0: 'RESPONDENT DID NOT CAST A BALLOT',
        1: 'RESPONDENT CAST A BALLOT ',
        9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
        9999995: 'NOT APPLICABLE: NO ROLE OF PRESIDENT',
        9999996: 'NOT APPLICABLE: NO PRESIDENTIAL ELECTIONS',
        9999997: 'VOLUNTEERED: REFUSED',
        9999998: 'VOLUNTEERED: DON\'T KNOW',
        9999999: 'MISSING'
      }
    }, {
      id: 11,
      variable: 'IMD3001_UH',
      question: 'TURNOUT-CURRENT UPPER HOUSE ELECTION',
      category: 'Multiple choices',
      Options: {
        0: 'RESPONDENT DID NOT CAST A BALLOT',
        1: 'RESPONDENT CAST A BALLOT ',
        9999993: 'VOLUNTEERED: RESPONDENT NOT REGISTERED ON ELECTORAL LISTS',
        9999995: 'NOT APPLICABLE: NO ROLE OF PRESIDENT',
        9999996: 'NOT APPLICABLE: NO PRESIDENTIAL ELECTIONS',
        9999997: 'VOLUNTEERED: REFUSED',
        9999998: 'VOLUNTEERED: DON\'T KNOW',
        9999999: 'MISSING'
      }
    }, {
      id: 38,
      variable: 'IMD3005_1',
      question: 'PARTY IDENTIFICATION: ARE YOU CLOSE TO ANY POLITICAL PARTY',
      category: 'Multiple choices',
      Options: {
        1: 'YES',
        5: 'NO',
        7: 'REFUSED',
        8: 'DON\'T KNOW',
        9: 'MISSING'
      }
    }, {
      id: 39,
      variable: 'IMD3005_2',
      question: 'PARTY IDENTIFICATION: DO YOU FEEL CLOSER TO ONE PARTY',
      category: 'Multiple choices',
      Options: {
        1: 'YES',
        5: 'NO',
        7: 'REFUSED',
        8: 'DON\'T KNOW',
        9: 'MISSING'
      }
    }, {
      id: 46,
      variable: 'IMD3013_3',
      question: 'STATE OF ECONOMY-Worse',
      category: 'Multiple choices',
      Options: {
        2: 'Somewhat worse',
        1: 'Much worse',
        7: 'Refused',
        8: 'Don"t know',
        9: 'Missing'
      }
    }, {
      id: 37,
      variable: 'IMD3005_4',
      question: 'PARTY IDENTIFICATION: HOW CLOSE',
      category: 'Rating scale',
      Options: {
        1: '3',
        2: '2',
        3: '1',
        7: 'VOLUNTEERED: REFUSED',
        8: 'VOLUNTEERED: DON\'T KNOW',
        9: 'Missing'
      }
    }, {
      id: 40,
      variable: 'IMD3006',
      question: 'LEFT-RIGHT - SELF',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        97: -1,
        98: -2,
        99: -3
      }
    }, {
      id: 41,
      variable: 'IMD3007_A',
      question: 'LEFT-RIGHT-PARTY A',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 41,
      variable: 'IMD3007_B',
      question: 'LEFT-RIGHT-PARTY B',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 41,
      variable: 'IMD3007_C',
      question: 'LEFT-RIGHT-PARTY C',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 41,
      variable: 'IMD3007_D',
      question: 'LEFT-RIGHT-PARTY D',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 41,
      variable: 'IMD3007_E',
      question: 'LEFT-RIGHT-PARTY E',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 41,
      variable: 'IMD3007_F',
      question: 'LEFT-RIGHT-PARTY F',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 41,
      variable: 'IMD3007_G',
      question: 'LEFT-RIGHT-PARTY G',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 41,
      variable: 'IMD3007_H',
      question: 'LEFT-RIGHT-PARTY H',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 41,
      variable: 'IMD3007_I',
      question: 'LEFT-RIGHT-PARTY I',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        95: 0,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 42,
      variable: 'IMD3008_A',
      question: 'LIKE-DISLIKE-PARTY A',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 42,
      variable: 'IMD3008_B',
      question: 'LIKE-DISLIKE-PARTY B',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 42,
      variable: 'IMD3008_C',
      question: 'LIKE-DISLIKE-PARTY C',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 42,
      variable: 'IMD3008_D',
      question: 'LIKE-DISLIKE-PARTY D',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 42,
      variable: 'IMD3008_E',
      question: 'LIKE-DISLIKE-PARTY E',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 42,
      variable: 'IMD3008_F',
      question: 'LIKE-DISLIKE-PARTY F',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 42,
      variable: 'IMD3008_G',
      question: 'LIKE-DISLIKE-PARTY G',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 42,
      variable: 'IMD3008_H',
      question: 'LIKE-DISLIKE-PARTY H',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 42,
      variable: 'IMD3008_I',
      question: 'LIKE-DISLIKE-PARTY I',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 43,
      variable: 'IMD3009_A',
      question: 'LIKE-DISLIKE-LEADER A',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 43,
      variable: 'IMD3009_B',
      question: 'LIKE-DISLIKE-LEADER B',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 43,
      variable: 'IMD3009_C',
      question: 'LIKE-DISLIKE-LEADER C',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 43,
      variable: 'IMD3009_D',
      question: 'LIKE-DISLIKE-LEADER D',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 43,
      variable: 'IMD3009_E',
      question: 'LIKE-DISLIKE-LEADER E',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 43,
      variable: 'IMD3009_F',
      question: 'LIKE-DISLIKE-LEADER F',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 43,
      variable: 'IMD3009_G',
      question: 'LIKE-DISLIKE-LEADER G',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 43,
      variable: 'IMD3009_H',
      question: 'LIKE-DISLIKE-LEADER H',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 43,
      variable: 'IMD3009_I',
      question: 'LIKE-DISLIKE-LEADER I',
      category: 'Rating scale',
      Options: {
        0: 1,
        1: 2,
        2: 3,
        3: 4,
        4: 5,
        5: 6,
        6: 7,
        7: 8,
        8: 9,
        9: 10,
        10: 11,
        96: -1,
        97: -2,
        98: -3,
        99: -4
      }
    }, {
      id: 44,
      variable: 'IMD3010',
      question: 'SATISFACTION WITH DEMOCRACY',
      category: 'Rating scale',
      Options: {
        5: 1,
        4: 2,
        6: 3,
        2: 4,
        1: 5,
        7: -1,
        8: -2,
        9: -3
      }
    }, {
      id: 45,
      variable: 'IMD3011',
      question: 'EFFICACY: WHO IS IN POWER CAN MAKE A DIFFERENCE',
      category: 'Rating scale',
      Options: {
        5: 1,
        4: 2,
        3: 3,
        2: 4,
        1: 5,
        7: -1,
        8: -2,
        9: -3
      }
    }, {
      id: 46,
      variable: 'IMD3012',
      question: 'EFFICACY: WHO PEOPLE VOTE FOR MAKES A DIFFERENCE',
      category: 'Rating scale',
      Options: {
        5: 1,
        4: 2,
        3: 3,
        2: 4,
        1: 5,
        7: -1,
        8: -2,
        9: -3
      }
    }, {
      id: 46,
      variable: 'IMD3013_1',
      question: 'STATE OF ECONOMY (OVER PAST 12 MONTHS)',
      category: 'Rating scale',
      Options: {
        5: 1,
        3: 2,
        1: 3,
        7: -1,
        8: -2,
        9: -3
      }
    }, {
      id: 46,
      variable: 'IMD3014',
      question: 'GOVERNMENT PERFORMANCE: GENERAL',
      category: 'Rating scale',
      Options: {
        4: 1,
        3: 2,
        2: 3,
        1: 4,
        6: -1,
        7: -2,
        8: -3,
        9: -4
      }
    }, {
      id: 46,
      variable: 'IMD3013_2',
      question: 'STATE OF ECONOMY - BETTER',
      category: 'Multiple choices',
      Options: {
        2: 'Somewhat better',
        1: 'Much better',
        7: 'Refused',
        8: 'Don"t know',
        9: 'Missing'
      }
    }];
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/helpers/enums.ts":
  /*!******************************!*\
    !*** ./src/helpers/enums.ts ***!
    \******************************/

  /*! exports provided: Task, Visualization, Category, ValidationStatus */

  /***/
  function srcHelpersEnumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Task", function () {
      return Task;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Visualization", function () {
      return Visualization;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Category", function () {
      return Category;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationStatus", function () {
      return ValidationStatus;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Task;

    (function (Task) {
      Task["Distribution"] = "Distribution";
      Task["Relationship"] = "Relationship";
      Task["TimeEvolution"] = "TimeEvolution";
    })(Task || (Task = {}));

    var Visualization;

    (function (Visualization) {
      Visualization[Visualization["BarChart"] = 0] = "BarChart";
      Visualization[Visualization["DetailledBarChart"] = 1] = "DetailledBarChart";
      Visualization[Visualization["BoxChart"] = 2] = "BoxChart";
      Visualization[Visualization["LineChart"] = 3] = "LineChart";
      Visualization[Visualization["BubbleChart"] = 4] = "BubbleChart";
      Visualization[Visualization["ParallelChart"] = 5] = "ParallelChart";
      Visualization[Visualization["BalloonChart"] = 6] = "BalloonChart";
      Visualization[Visualization["SankeyChart"] = 7] = "SankeyChart";
      Visualization[Visualization["StackedChart"] = 8] = "StackedChart";
      Visualization[Visualization["BarBoxChart"] = 9] = "BarBoxChart";
      Visualization[Visualization["ViolinChart"] = 10] = "ViolinChart";
      Visualization[Visualization["ViolinBoxChart"] = 11] = "ViolinBoxChart";
      Visualization[Visualization["Lollipop"] = 12] = "Lollipop";
    })(Visualization || (Visualization = {}));

    var Category;

    (function (Category) {
      Category["MultipleChoices"] = "Multiple choices";
      Category["RatingScale"] = "Rating scale";
      Category["Numerical"] = "Numerical";
    })(Category || (Category = {}));

    var ValidationStatus;

    (function (ValidationStatus) {
      ValidationStatus[ValidationStatus["Passed"] = 0] = "Passed";
      ValidationStatus[ValidationStatus["Failed"] = 1] = "Failed";
    })(ValidationStatus || (ValidationStatus = {}));
    /***/

  },

  /***/
  "./src/helpers/types.ts":
  /*!******************************!*\
    !*** ./src/helpers/types.ts ***!
    \******************************/

  /*! exports provided: Question, CreationEntry, CardEntry, SuggestionEntry, ValidationResult, Id */

  /***/
  function srcHelpersTypesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Question", function () {
      return Question;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreationEntry", function () {
      return CreationEntry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardEntry", function () {
      return CardEntry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuggestionEntry", function () {
      return SuggestionEntry;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValidationResult", function () {
      return ValidationResult;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Id", function () {
      return Id;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var guid_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! guid-typescript */
    "./node_modules/guid-typescript/dist/guid.js");
    /* harmony import */


    var guid_typescript__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_1__);

    var Question = function Question() {
      _classCallCheck(this, Question);
    };

    var CreationEntry =
    /*#__PURE__*/
    function () {
      function CreationEntry(id, questions) {
        var overview = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var ndx = arguments.length > 3 ? arguments[3] : undefined;
        var width = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 80;
        var height = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 55;
        var margins = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : {
          left: 5,
          right: 5,
          top: 0,
          bottom: 35
        };

        _classCallCheck(this, CreationEntry);

        this.group = null;
        this.id = id;
        this.Questions = questions;
        this.Overview = overview;
        this.ndx = ndx;
        this.width = width;
        this.height = height;
        this.margins = margins;
      }

      _createClass(CreationEntry, [{
        key: "IsOverviewOption",
        value: function IsOverviewOption() {
          if (this.Overview === true) {
            return true;
          }

          return false;
        }
      }]);

      return CreationEntry;
    }();

    var CardEntry = function CardEntry() {
      _classCallCheck(this, CardEntry);
    };

    var SuggestionEntry =
    /*#__PURE__*/
    function () {
      function SuggestionEntry(questions, task) {
        _classCallCheck(this, SuggestionEntry);

        this.Questions = questions;
        this.Task = task;
      }

      _createClass(SuggestionEntry, [{
        key: "IsSingleQuestion",
        value: function IsSingleQuestion() {
          if (this.Questions.length === 1) {
            return true;
          } else {
            return false;
          }
        }
      }]);

      return SuggestionEntry;
    }();

    var ValidationResult = function ValidationResult(result) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      _classCallCheck(this, ValidationResult);

      this.Result = result;
      this.Message = message;
    };

    var Id =
    /*#__PURE__*/
    function () {
      function Id(key, generateGuid) {
        _classCallCheck(this, Id);

        if (generateGuid) {
          this.Value = key + '-' + guid_typescript__WEBPACK_IMPORTED_MODULE_1__["Guid"].raw();
        } else {
          this.Value = key;
        }
      }

      _createClass(Id, null, [{
        key: "New",
        value: function New(key) {
          var generateGuid = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          return new Id(key, generateGuid);
        }
      }]);

      return Id;
    }();
    /***/

  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  "./src/my-charts/BalloonChart.ts":
  /*!***************************************!*\
    !*** ./src/my-charts/BalloonChart.ts ***!
    \***************************************/

  /*! exports provided: BalloonChart */

  /***/
  function srcMyChartsBalloonChartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BalloonChart", function () {
      return BalloonChart;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var BalloonChart =
    /*#__PURE__*/
    function () {
      function BalloonChart(notficationService) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, BalloonChart);

        this.notficationService = notficationService;
        BalloonChart.notificationService_ = this.notficationService;
        BalloonChart._GroupId = id;
      }

      _createClass(BalloonChart, [{
        key: "Dimension",
        value: function Dimension(dim) {
          BalloonChart._dimension = dim;

          BalloonChart._dimension.filterAll();

          BalloonChart.filters = [];
          return this;
        }
      }, {
        key: "Group",
        value: function Group(group) {
          BalloonChart._group = group;
          return this;
        }
      }, {
        key: "FixedGroup",
        value: function FixedGroup(group) {
          BalloonChart._fixedGroup = group;
          return this;
        }
      }, {
        key: "Graph",
        value: function Graph(graph) {
          BalloonChart._graph = graph;
          return this;
        }
      }, {
        key: "render",
        value: function render() {
          BalloonChart.balloonChart = this.draw().selectAll('.bubble').on('click', this.update_dimensions);
          return this;
        }
      }, {
        key: "draw",
        value: function draw() {
          BalloonChart._graph.html('');

          var svg = BalloonChart._graph.append('svg').attr('width', '400').attr('height', '400').attr('class', 'background-style');

          var margin = {
            top: 10,
            right: 10,
            bottom: 50,
            left: 50
          };
          var width = +svg.attr('width') - margin.left - margin.right;
          var height = +svg.attr('height') - margin.top - margin.bottom;
          var x = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().rangeRound([0, width]).padding(1);
          var y = d3__WEBPACK_IMPORTED_MODULE_1__["scaleBand"]().rangeRound([0, height]).padding(1);
          var g = svg.append('g').attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
          x.domain(BalloonChart._fixedGroup.all().map(function (d) {
            return d.key[0];
          }));
          y.domain(BalloonChart._fixedGroup.all().map(function (d) {
            return d.key[1];
          }));
          var min = Number.MAX_VALUE;
          var max = -Number.MAX_VALUE;

          BalloonChart._fixedGroup.all().forEach(function (o) {
            min = Math.min(min, o.value);
            max = Math.max(max, o.value);
          });

          g.append('g').attr('class', 'axis axis--x').attr('transform', 'translate(0,' + height + ')').call(d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x)).append('text').attr('transform', 'rotate(-45)').attr('y', 6).attr('dy', '2.5em').attr('dx', width / 2 - margin.left);
          g.append('g').attr('class', 'axis axis--y').call(d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y).ticks(10)).append('text').attr('transform', 'rotate(-90)').attr('y', 6).attr('dy', '0.71em').attr('text-anchor', 'end');
          d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('.axis--x text').attr('transform', 'translate(-10, 0) rotate(45)').attr('text-anchor', 'start');
          d3__WEBPACK_IMPORTED_MODULE_1__["selectAll"]('.axis text').style('font-size', '8px'); //GRIDS

          g.append('g').attr('class', 'grid').attr('transform', 'translate(0,' + height + ')') //.style('stroke-dasharray', ('3,3'))
          .style('fill', 'none').style('stroke', '#ccc').style('shape-rendering', 'crispEdges').style('opacity', '0.25').call(make_x_gridlines().tickSize(-height).tickFormat(''));
          g.append('g').attr('class', 'grid') // .style('stroke-dasharray', ('3,3'))
          .style('fill', 'none').style('stroke', '#ccc').style('shape-rendering', 'crispEdges').style('opacity', '0.25').call(make_y_gridlines().tickSize(-width).tickFormat(''));
          g.selectAll('.bubble1').data(BalloonChart._fixedGroup.all()).enter() //.append('circle')
          .append('rect').attr('class', 'bubble1 bubble') // .attr('cx', function (d) { return x(d.key[0]); })
          // .attr('cy', function (d) { return y(d.key[1]); })
          // .attr('r', d => 30 * (d.value - min) / (max - min))
          .attr('x', function (d) {
            return x(d.key[0]);
          }).attr('y', function (d) {
            return y(d.key[1]) - 30 * (d.value - min) / (max - min);
          }).attr('width', function (d) {
            return 30 * (d.value - min) / (max - min);
          }).attr('height', function (d) {
            return 30 * (d.value - min) / (max - min);
          }).style('fill', 'grey');
          g // .append('g')
          // .attr('class', 'BubbleGroup')
          .selectAll('.bubble2').data(BalloonChart._group.all()).enter().append('rect').attr('class', 'bubbleBlue bubble').attr('x', function (d) {
            return x(d.key[0]);
          }).attr('y', function (d) {
            return y(d.key[1]) - 30 * (d.value - min) / (max - min);
          }).attr('width', function (d) {
            return 30 * (d.value - min) / (max - min);
          }).attr('height', function (d) {
            return 30 * (d.value - min) / (max - min);
          }).style('fill', '#1f77b4').on('mouseover', function (d, i) {
            // Define the div for the tooltip
            var div = d3__WEBPACK_IMPORTED_MODULE_1__["select"]('body').append('div').attr('class', 'my_tooltip').style('padding', '5px').style('position', 'absolute').style('color', '#fff').style('text-align', 'center').style('background', 'black').style('border-radius', '6px').style('pointer-events', 'none');
            div.html(d.key[0] + '&' + d.key[1] + ' = ' + d.value).style('left', d3__WEBPACK_IMPORTED_MODULE_1__["event"].pageX + 'px').style('top', d3__WEBPACK_IMPORTED_MODULE_1__["event"].pageY + 'px');
          }).on('mouseout', function (d, i) {
            d3__WEBPACK_IMPORTED_MODULE_1__["select"](".my_tooltip").remove();
          });

          function make_x_gridlines() {
            return d3__WEBPACK_IMPORTED_MODULE_1__["axisBottom"](x).ticks(8);
          }

          function make_y_gridlines() {
            return d3__WEBPACK_IMPORTED_MODULE_1__["axisLeft"](y).ticks(5);
          }

          BalloonChart.x = x;
          BalloonChart.y = y;
          BalloonChart.max = max;
          BalloonChart.min = min;
          return svg;
        }
      }, {
        key: "update_dimensions",
        value: function update_dimensions(e) {
          var currentFilter = [e.key[0], e.key[1]];
          var tempArray = [];
          var existed = false;
          BalloonChart.filters.forEach(function (elem) {
            if (elem[0] === currentFilter[0] && elem[1] === currentFilter[1]) {
              existed = true;
            } else {
              tempArray.push(elem);
            }
          });
          BalloonChart.filters = tempArray;

          if (existed === false) {
            BalloonChart.filters.push(currentFilter);
          }

          if (BalloonChart.filters.length === 0) {
            BalloonChart._dimension.filterAll();
          } else {
            BalloonChart._dimension.filterFunction(function (d) {
              var filter = null;
              BalloonChart.filters.forEach(function (elem) {
                if (filter == null) {
                  filter = d[1] === elem[1] && d[0] === elem[0];
                } else {
                  filter = filter || d[1] === elem[1] && d[0] === elem[0];
                }
              });
              return filter;
            });
          }

          BalloonChart.notificationService_.emit(BalloonChart._GroupId);
          return this;
        }
      }, {
        key: "redraw",
        value: function redraw() {
          console.log('Redraw Balloon');
          this.render();
          return null;
        }
      }]);

      return BalloonChart;
    }();

    BalloonChart._Data = null;
    BalloonChart._variables = null;
    BalloonChart._graph = null;
    BalloonChart._dimension = null;
    BalloonChart._group = null;
    BalloonChart._fixedGroup = null;
    BalloonChart.balloonChart = null;
    BalloonChart._dimensions = null;
    BalloonChart._GroupId = null;
    BalloonChart.filters = [];
    /***/
  },

  /***/
  "./src/my-charts/BarBoxChart.ts":
  /*!**************************************!*\
    !*** ./src/my-charts/BarBoxChart.ts ***!
    \**************************************/

  /*! exports provided: BarBoxChart */

  /***/
  function srcMyChartsBarBoxChartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarBoxChart", function () {
      return BarBoxChart;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var BarBoxChart =
    /*#__PURE__*/
    function () {
      function BarBoxChart(notficationService) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, BarBoxChart);

        this.notficationService = notficationService;
        BarBoxChart.notificationService_ = this.notficationService;
        BarBoxChart._GroupId = id;
      }

      _createClass(BarBoxChart, [{
        key: "Dimension",
        value: function Dimension(dim) {
          BarBoxChart._dimension = dim;

          BarBoxChart._dimension.filterAll();

          BarBoxChart.filters = [];
          return this;
        }
      }, {
        key: "Group",
        value: function Group(group) {
          BarBoxChart._group = group.all();
          return this;
        }
      }, {
        key: "Variable",
        value: function Variable(variable) {
          BarBoxChart._variable = variable;
          return this;
        }
      }, {
        key: "Graph",
        value: function Graph(graph) {
          BarBoxChart._graph = graph;
          return this;
        }
      }, {
        key: "render",
        value: function render() {
          var BarX = unpack(BarBoxChart._group, 'key');
          var BarY = unpack(BarBoxChart._group, 'value');
          var boxData = unpack(BarBoxChart._dimension.filter(function (d) {
            return d > 0;
          }).top(Infinity), BarBoxChart._variable);
          var ranges = getRanges(BarX);
          var trace1 = {
            x: [categories(BarX), BarX],
            y: BarY,
            type: 'bar',
            xaxis: 'x1',
            marker: {
              color: colors(BarX)
            },
            hoverinfo: 'x+y'
          };
          var trace2 = {
            x: boxData,
            type: 'box',
            xaxis: 'x2',
            yaxis: 'y2',
            marker: {
              size: 1,
              color: '#1f77b4'
            },
            name: ''
          };
          var data = [trace1, trace2];
          var layout = {
            showlegend: false,
            //width: 300,
            height: 250,
            margin: {
              l: 35,
              r: 10,
              b: 20,
              t: 10,
              pad: 0
            },
            grid: {
              rows: 2,
              columns: 1,
              pattern: 'independent'
            },
            //xaxis1: { range: ranges },
            xaxis2: {
              range: ranges
            },
            hovermode: 'closest'
          };
          Plotly.react(BarBoxChart._graph, data, layout, {
            displayModeBar: false
          });

          BarBoxChart._graph.on('plotly_click', function (e) {
            return console.log(e);
          });

          function colors(array) {
            var color = [];
            array.forEach(function (element) {
              if (element > 0) {
                color.push('#1f77b4');
              } else {
                color.push('rgb(227,26,28)');
              }
            });
            return color;
          }

          function categories(array) {
            var category = [];
            array.forEach(function (element) {
              if (element > 0) {
                category.push('Ratings');
              } else {
                category.push('Other');
              }
            });
            return category;
          }

          function unpack(rows, key) {
            return rows.map(function (row) {
              return row[key];
            });
          }

          function getRanges(array) {
            var min = Math.min.apply(Math, _toConsumableArray(array));
            var max = Math.max.apply(Math, _toConsumableArray(array));
            return [min, max];
          }

          return this;
        }
      }, {
        key: "updatedimensions_",
        value: function updatedimensions_(e) {
          var currentFilter = [e.key[0], e.key[1]];
          var tempArray = [];
          var existed = false;
          BarBoxChart.filters.forEach(function (elem) {
            if (elem[0] === currentFilter[0] && elem[1] === currentFilter[1]) {
              existed = true;
            } else {
              tempArray.push(elem);
            }
          });
          BarBoxChart.filters = tempArray;

          if (existed === false) {
            BarBoxChart.filters.push(currentFilter);
          }

          if (BarBoxChart.filters.length === 0) {
            BarBoxChart._dimension.filterAll();
          } else {
            BarBoxChart._dimension.filterFunction(function (d) {
              var filter = null;
              BarBoxChart.filters.forEach(function (elem) {
                if (filter == null) {
                  filter = d[1] === elem[1] && d[0] === elem[0];
                } else {
                  filter = filter || d[1] === elem[1] && d[0] === elem[0];
                }
              });
              return filter;
            });
          }

          BarBoxChart.notificationService_.emit(BarBoxChart._GroupId);
          return this;
        }
      }, {
        key: "redraw",
        value: function redraw() {
          console.log('Redraw Bar Box');
          this.render();
          return null;
        }
      }]);

      return BarBoxChart;
    }();

    BarBoxChart._Data = null;
    BarBoxChart._variable = null;
    BarBoxChart._graph = null;
    BarBoxChart._dimension = null;
    BarBoxChart._group = null;
    BarBoxChart._fixedGroup = null;
    BarBoxChart.BarBoxChart = null;
    BarBoxChart.dimensions_ = null;
    BarBoxChart._GroupId = null;
    BarBoxChart.filters = [];
    /***/
  },

  /***/
  "./src/my-charts/PCPChart.ts":
  /*!***********************************!*\
    !*** ./src/my-charts/PCPChart.ts ***!
    \***********************************/

  /*! exports provided: ParallelCoordinates */

  /***/
  function srcMyChartsPCPChartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParallelCoordinates", function () {
      return ParallelCoordinates;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ParallelCoordinates =
    /*#__PURE__*/
    function () {
      function ParallelCoordinates(notficationService) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, ParallelCoordinates);

        this.notficationService = notficationService;
        ParallelCoordinates.notificationService_ = this.notficationService;
        ParallelCoordinates._GroupId = id;
      }

      _createClass(ParallelCoordinates, [{
        key: "Dimension",
        value: function Dimension(dim) {
          ParallelCoordinates._dimension = dim;
          ParallelCoordinates._Data = dim.top(Infinity);
          return this;
        }
      }, {
        key: "AllDimensions",
        value: function AllDimensions(dims) {
          ParallelCoordinates._dimensions = dims;
          return this;
        }
      }, {
        key: "Graph",
        value: function Graph(graph) {
          ParallelCoordinates._graph = graph;
          return this;
        }
      }, {
        key: "Variables",
        value: function Variables(variable) {
          ParallelCoordinates._variables = variable;
          return this;
        }
      }, {
        key: "render",
        value: function render() {
          var data = [{
            type: 'parcoords',
            line: {
              showscale: true,
              reversescale: true,
              colorscale: 'Jet',
              cmin: -4000,
              cmax: -100
            },
            dimensions: this.getCategories(ParallelCoordinates._Data)
          }];
          var layout = {};
          Plotly.react(ParallelCoordinates._graph, data, layout, {
            displayModeBar: false
          });

          ParallelCoordinates._graph.on('plotly_restyle', this.update_dimensions);

          return this;
        }
      }, {
        key: "redraw",
        value: function redraw() {
          //ParallelCoordinates._Data = ParallelCoordinates._dimension.top(Infinity);
          //Plotly.restyle(ParallelCoordinates._graph, { 'dimensions': this.getCategories(ParallelCoordinates._Data) }, 1);
          // ParallelCoordinates._graph.on('plotly_restyle', this.update_dimensions);
          return this;
        }
      }, {
        key: "getCategories",
        value: function getCategories(arr) {
          var dimensions = [];
          var variable = ParallelCoordinates._variables;
          variable.forEach(function (element) {
            var object = {
              label: element,
              values: arr.map(function (el) {
                return el[element];
              })
            };
            dimensions.push(object);
          });
          return dimensions;
        }
      }, {
        key: "update_dimensions",
        value: function update_dimensions(e) {
          /* Handle the output of filtering inside a group in card
          e = [{
          "dimensions": [
            {
              "label": "IMD1008_YEAR",
              "values": [
                2001,
                2001,
                ...
              ]
              },
              {
                "label": "IMD1008_YEAR",
                "values": [..]
          }]},
          [0]
          ] */
          console.log(e);

          if (Object.keys(e[0])[0] === "dimensions") {
            e[0]['dimensions'].forEach(function (element, index) {
              var temp = element['values'];
              var ranges = [Math.min.apply(Math, _toConsumableArray(temp)), Math.max.apply(Math, _toConsumableArray(temp))];
              console.log("Range :", ranges);
              ParallelCoordinates.filters[index] = ranges;

              ParallelCoordinates._dimensions[index].filterRange(ranges);
            });
            ParallelCoordinates.notificationService_.emit(ParallelCoordinates._GroupId);
            return this;
          } else {
            var filter = e[0];
            var index = +Object.keys(filter)[0][11]; // Suppose <10 variables

            if (Object.values(filter)[0] !== null) {
              // If ranges exists
              var ranges = Object.values(filter)[0][0];
              ParallelCoordinates.filters[index] = ranges;

              ParallelCoordinates._dimensions[index].filterRange(ranges); // ParallelCoordinates._dimension[index].filterFunction(elem => {
              //     let filter = null;
              //     ranges.map(range => {
              //         console.log(range)
              //         if (filter == null) { filter = (elem > range[0] && elem < range[1]) }
              //         else { filter = filter || (elem > range[0] && elem < range[1]) }
              //     });
              //     return filter;
              // });

            } else {
              ParallelCoordinates.filters[index] = null;

              ParallelCoordinates._dimensions[index].filterAll();
            }

            ParallelCoordinates.notificationService_.emit(ParallelCoordinates._GroupId);
            return this;
          }
        }
      }]);

      return ParallelCoordinates;
    }();

    ParallelCoordinates._Data = null;
    ParallelCoordinates._variables = null;
    ParallelCoordinates._graph = null;
    ParallelCoordinates._dimension = null;
    ParallelCoordinates._dimensions = null;
    ParallelCoordinates._GroupId = null;
    ParallelCoordinates.filters = {};
    /***/
  },

  /***/
  "./src/my-charts/SankeyChart.ts":
  /*!**************************************!*\
    !*** ./src/my-charts/SankeyChart.ts ***!
    \**************************************/

  /*! exports provided: Sankey */

  /***/
  function srcMyChartsSankeyChartTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Sankey", function () {
      return Sankey;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Sankey =
    /*#__PURE__*/
    function () {
      function Sankey(notficationService) {
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

        _classCallCheck(this, Sankey);

        this.notficationService = notficationService;
        Sankey.GroupId = id;
        Sankey.NotificationService = this.notficationService;
      }

      _createClass(Sankey, [{
        key: "Dimension",
        value: function Dimension(dim) {
          Sankey.Dimension = dim;
          Sankey.Data = Object.assign([], dim.top(Infinity));
          return this;
        }
      }, {
        key: "AllDimensions",
        value: function AllDimensions(dims) {
          Sankey.Dimensions = dims;
          return this;
        }
      }, {
        key: "Graph",
        value: function Graph(graph) {
          Sankey.Graph = graph;
          return this;
        }
      }, {
        key: "Variables",
        value: function Variables(variable) {
          Sankey.Variables = variable;
          return this;
        }
      }, {
        key: "render",
        value: function render() {
          Sankey.filters = {};
          var dimensions = this.getCategories(Sankey.Data);
          var color = new Int8Array(Sankey.Data.length);
          var colorscale = [[0, 'gray'], [1, '#1f77b4']];
          var traces = [{
            type: 'parcats',
            dimensions: dimensions,
            line: {
              colorscale: colorscale,
              cmin: 0,
              cmax: 1,
              color: color,
              shape: 'hspline'
            },
            labelfont: {
              size: 10
            },
            hoverinfo: 'count+probability'
          }];
          var layout = {
            width: Sankey.Variables.length * 150,
            height: 300,
            margin: {
              l: 50,
              r: 50,
              b: 25,
              t: 25
            }
          };
          Plotly.react(Sankey.Graph, traces, layout, {
            displayModeBar: false
          });
          Sankey.Graph.on('plotly_click', this.update_dimensions);
          return this;
        }
      }, {
        key: "redraw",
        value: function redraw() {
          //Sankey.getColor(Sankey.Data, Sankey.filters);
          //console.log(Sankey.Dimension.currentFilter())
          return null;
        }
      }, {
        key: "getCategories",
        value: function getCategories(arr) {
          var dimensions = [];
          var variable = Sankey.Variables;
          variable.forEach(function (element) {
            var objecty = {
              label: element,
              values: arr.map(function (el) {
                return el[element];
              })
            };
            dimensions.push(objecty);
          });
          return dimensions;
        }
      }, {
        key: "update_dimensions",
        value: function update_dimensions(e) {
          var filter = Object.entries(e.constraints)[0];
          var index = +filter[0];
          var value = filter[1];
          var MyIndex = Sankey.Variables[index];
          var myDim = Sankey.Dimensions.find(function (item) {
            return item.label === MyIndex;
          }).dimension;

          if (Object.keys(Sankey.filters).includes(MyIndex)) {
            if (Sankey.filters[MyIndex].includes(value)) {
              Sankey.filters[MyIndex].pop(value);

              if (Sankey.filters[MyIndex].length === 0) {
                myDim.filterAll();
              } else {
                myDim.filter(function (d) {
                  return Sankey.filters[MyIndex].indexOf(d) > -1;
                });
              }
            } else {
              Sankey.filters[MyIndex].push(value);
              myDim.filter(function (d) {
                return Sankey.filters[MyIndex].indexOf(d) > -1;
              });
            }
          } else {
            Sankey.filters[MyIndex] = [value];
            myDim.filter(value);
          }

          Sankey.NotificationService.emit(Sankey.GroupId);
          Sankey.getColor(Sankey.Data, Sankey.filters);
          return this;
        }
      }], [{
        key: "getColor",
        value: function getColor(array, filters) {
          var value = null;
          var colorscale = {
            0: 'lightsteelblue',
            1: 'mediumseagreen'
          };
          var newColor = array.map(function (item) {
            var filter = null;
            Object.keys(filters).map(function (key) {
              var subFilter = null;

              if (filters[key].length > 0) {
                filters[key].map(function (value) {
                  if (subFilter === null) {
                    subFilter = item[key] === value;
                  } else {
                    subFilter = subFilter || item[key] === value;
                  }
                });
              } else {
                subFilter = true;
              }

              if (filter === null) {
                filter = subFilter;
              } else {
                filter = filter && subFilter;
              }
            });

            if (filter) {
              value = 1;
            } else {
              value = 0;
            }

            return colorscale[value];
          });
          Plotly.restyle(Sankey.Graph, {
            'line.color': [newColor]
          });
          return this;
        }
      }]);

      return Sankey;
    }();

    Sankey.Data = null;
    Sankey.Variables = null;
    Sankey.Graph = null;
    Sankey.Dimension = null;
    Sankey.Dimensions = null;
    Sankey.GroupId = null;
    Sankey.filters = {};
    /***/
  },

  /***/
  "./src/services/Data_provider.service.ts":
  /*!***********************************************!*\
    !*** ./src/services/Data_provider.service.ts ***!
    \***********************************************/

  /*! exports provided: DataProvider */

  /***/
  function srcServicesData_providerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataProvider", function () {
      return DataProvider;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _assets_data_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../assets/data/metadata */
    "./src/assets/data/metadata.ts");
    /* harmony import */


    var _assets_data_questionnaire__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../assets/data/questionnaire */
    "./src/assets/data/questionnaire.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./config */
    "./src/services/config.ts");
    /* harmony import */


    var crossfilter2_crossfilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! crossfilter2/crossfilter */
    "./node_modules/crossfilter2/crossfilter.js");
    /* harmony import */


    var crossfilter2_crossfilter__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(crossfilter2_crossfilter__WEBPACK_IMPORTED_MODULE_6__); // Visualization libs


    var DataProvider =
    /*#__PURE__*/
    function () {
      function DataProvider(http) {
        _classCallCheck(this, DataProvider);

        this.http = http;
        this.ndxOverview = null;
        this.questionnaire = null;
        this.metadata = null;
        this.data = null;
      }

      _createClass(DataProvider, [{
        key: "getData",
        value: function getData() {
          return {
            ndx: this.ndxOverview,
            questionnaire: this.questionnaire,
            metadata: this.metadata
          };
        }
      }, {
        key: "getNewNdx",
        value: function getNewNdx() {
          return crossfilter2_crossfilter__WEBPACK_IMPORTED_MODULE_6__(this.data);
        }
      }, {
        key: "load",
        value: function load() {
          var _this7 = this;

          console.log('Data Uploading...');
          this.questionnaire = _assets_data_questionnaire__WEBPACK_IMPORTED_MODULE_2__["questionnaire"];
          this.metadata = _assets_data_metadata__WEBPACK_IMPORTED_MODULE_1__["metadata"];
          var url = "".concat(_config__WEBPACK_IMPORTED_MODULE_5__["Config"].apiUrl, "/surveyQuestions");
          return new Promise(function (resolve, reject) {
            _this7.http.get(url).subscribe(function (response) {
              _this7.data = response;
              _this7.ndxOverview = crossfilter2_crossfilter__WEBPACK_IMPORTED_MODULE_6__(response);
              console.log('Data Uploaded.');
              resolve(true);
            });
          });
        }
      }]);

      return DataProvider;
    }();

    DataProvider.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }];
    };

    DataProvider = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], DataProvider);
    /***/
  },

  /***/
  "./src/services/cards-creation.service.ts":
  /*!************************************************!*\
    !*** ./src/services/cards-creation.service.ts ***!
    \************************************************/

  /*! exports provided: CardsCreationService */

  /***/
  function srcServicesCardsCreationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CardsCreationService", function () {
      return CardsCreationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var guid_typescript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! guid-typescript */
    "./node_modules/guid-typescript/dist/guid.js");
    /* harmony import */


    var guid_typescript__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/drag-drop */
    "./node_modules/@angular/cdk/esm2015/drag-drop.js");
    /* harmony import */


    var src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/services/draw-chart.service */
    "./src/services/draw-chart.service.ts");
    /* harmony import */


    var _groups_creation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./groups-creation */
    "./src/services/groups-creation.ts");
    /* harmony import */


    var src_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/services/notification-service */
    "./src/services/notification-service.ts");
    /* harmony import */


    var src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/services/Data_provider.service */
    "./src/services/Data_provider.service.ts"); //services


    var CardsCreationService =
    /*#__PURE__*/
    function () {
      function CardsCreationService(drawChartService, notficationService, dataProvider) {
        var _this8 = this;

        _classCallCheck(this, CardsCreationService);

        this.drawChartService = drawChartService;
        this.notficationService = notficationService;
        this.dataProvider = dataProvider;
        this.container = [];
        this.groupedViz = {};
        this.notficationService.listener.subscribe(function (data) {
          console.log("Group :", data);

          _this8.RedrawAll(data);
        });
      }

      _createClass(CardsCreationService, [{
        key: "createCard",
        value: function createCard(cardEntry) {
          var _this9 = this;

          return new Promise(function (resolve, reject) {
            _this9.container.push([cardEntry]);

            resolve(_this9.container);
          });
        }
      }, {
        key: "createGroup",
        value: function createGroup() {
          this.container.push([]);
        }
      }, {
        key: "moveCard",
        value: function moveCard(event) {
          if (event.previousContainer === event.container) {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["moveItemInArray"])(event.container.data, event.previousIndex, event.currentIndex);
          } else {
            Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_3__["transferArrayItem"])(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
            this.UpdateGroupVizs(event.container.data);
          }

          this.removeEmptyGroups();
        }
      }, {
        key: "removeCard",
        value: function removeCard(cardEntry) {
          var _this10 = this;

          this.container.forEach(function (g, index) {
            // if element is single card
            if (g.length === 1) {
              if (g[0] === cardEntry) {
                _this10.container.splice(index, 1);

                return;
              }
            } else {
              // if element is a group
              if (g.includes(cardEntry)) {
                _this10.container[index].splice(g.indexOf(cardEntry), 1);

                return;
              }
            }
          });
        }
      }, {
        key: "removeEmptyGroups",
        value: function removeEmptyGroups() {
          for (var i = 0; i < this.container.length; i++) {
            // console.log(this.container[i]);
            if (this.container[i].length === 0) {
              this.container.splice(i, 1);
              i--;
            }
          }
        }
      }, {
        key: "UpdateGroupVizs",
        value: function UpdateGroupVizs(group) {
          var _this11 = this;

          var NewNdx = this.dataProvider.getNewNdx();
          var groupId = guid_typescript__WEBPACK_IMPORTED_MODULE_1__["Guid"].raw();
          group.forEach(function (elem) {
            var observer = new MutationObserver(function (mutations, me) {
              var canvas = document.getElementById(elem.Id.Value);

              if (canvas) {
                elem.CreationEntries.ndx = NewNdx;
                elem.CreationEntries.group = groupId;

                if (_this11.groupedViz[groupId] === undefined) {
                  _this11.groupedViz[groupId] = [_this11.drawChartService.DrawVisualizationDetail(elem.Visualization, elem.CreationEntries)];
                } else {
                  _this11.groupedViz[groupId].push(_this11.drawChartService.DrawVisualizationDetail(elem.Visualization, elem.CreationEntries));
                }

                me.disconnect(); // stop observing
                //return;
              }
            });
            observer.observe(document, {
              childList: true,
              subtree: true
            });
          });
          console.log(" My group is made of :", this.groupedViz);
          _groups_creation__WEBPACK_IMPORTED_MODULE_5__["GroupCreationService"].groupedViz = this.groupedViz;
        }
      }, {
        key: "RedrawAll",
        value: function RedrawAll(groupId) {
          if (this.groupedViz[groupId] !== undefined) {
            this.groupedViz[groupId].forEach(function (elem) {
              return elem.redraw();
            });
          }
        }
      }]);

      return CardsCreationService;
    }();

    CardsCreationService.ctorParameters = function () {
      return [{
        type: src_services_draw_chart_service__WEBPACK_IMPORTED_MODULE_4__["DrawChartService"]
      }, {
        type: src_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotficationService"]
      }, {
        type: src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_7__["DataProvider"]
      }];
    };

    CardsCreationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    })], CardsCreationService);
    /***/
  },

  /***/
  "./src/services/config.ts":
  /*!********************************!*\
    !*** ./src/services/config.ts ***!
    \********************************/

  /*! exports provided: Config */

  /***/
  function srcServicesConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Config", function () {
      return Config;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /**
     * Defines some configurations for the application.
     */


    var Config = function Config() {
      _classCallCheck(this, Config);
    };
    /**
     * The base API URL.
     */


    Config.apiUrl = 'https://cryptic-castle-64048.herokuapp.com/api';
    /***/
  },

  /***/
  "./src/services/draw-chart.service.ts":
  /*!********************************************!*\
    !*** ./src/services/draw-chart.service.ts ***!
    \********************************************/

  /*! exports provided: DrawChartService */

  /***/
  function srcServicesDrawChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DrawChartService", function () {
      return DrawChartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _helpers_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../helpers/types */
    "./src/helpers/types.ts");
    /* harmony import */


    var _helpers_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../helpers/enums */
    "./src/helpers/enums.ts");
    /* harmony import */


    var src_assets_data_allData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/assets/data/allData */
    "./src/assets/data/allData.ts");
    /* harmony import */


    var _visualization_creation_VisualizationCreatorFactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./visualization_creation/VisualizationCreatorFactory */
    "./src/services/visualization_creation/VisualizationCreatorFactory.ts");
    /* harmony import */


    var src_services_notification_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/services/notification-service */
    "./src/services/notification-service.ts");
    /* harmony import */


    var src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/services/Data_provider.service */
    "./src/services/Data_provider.service.ts"); // Angular libs
    // Data files
    // Services


    var DrawChartService =
    /*#__PURE__*/
    function () {
      function DrawChartService(notficationService, dataProvider) {
        _classCallCheck(this, DrawChartService);

        this.notficationService = notficationService;
        this.dataProvider = dataProvider;
        this.allOverviewCharts = [];
      }

      _createClass(DrawChartService, [{
        key: "RedrawVisualizations",
        value: function RedrawVisualizations() {
          this.allOverviewCharts.forEach(function (element) {
            element.dim.filterAll();
            element.graph.filter(null);
            element.graph.redraw();
          });
          this.allOverviewCharts.forEach(function (element) {
            element.dim.filterAll();
            element.graph.filter(null);
            element.graph.redraw();
          });
        }
        /*
        * @method DrawVisualizationOverview: Suggest visualization for Overview part
                                             based on type of question. We draw one question
                                             at the time .
        * @param {CreationEntry}: Input of questions
        * @return {boolean}: true when done
        */

      }, {
        key: "DrawVisualizationOverview",
        value: function DrawVisualizationOverview(creationEntries) {
          var chart = null;

          if (creationEntries.Questions[0].category === 'Multiple choices') {
            chart = _visualization_creation_VisualizationCreatorFactory__WEBPACK_IMPORTED_MODULE_5__["VisualizationDrawerFactory"].Create(_helpers_enums__WEBPACK_IMPORTED_MODULE_3__["Visualization"].BarChart, creationEntries, this.notficationService).Draw();
          } else if (creationEntries.Questions[0].category === 'Numerical') {
            chart = _visualization_creation_VisualizationCreatorFactory__WEBPACK_IMPORTED_MODULE_5__["VisualizationDrawerFactory"].Create(_helpers_enums__WEBPACK_IMPORTED_MODULE_3__["Visualization"].LineChart, creationEntries, this.notficationService).Draw();
          } else if (creationEntries.Questions[0].category === 'Country') {
            chart = _visualization_creation_VisualizationCreatorFactory__WEBPACK_IMPORTED_MODULE_5__["VisualizationDrawerFactory"].Create(_helpers_enums__WEBPACK_IMPORTED_MODULE_3__["Visualization"].Lollipop, creationEntries, this.notficationService).Draw();
          } else {
            chart = _visualization_creation_VisualizationCreatorFactory__WEBPACK_IMPORTED_MODULE_5__["VisualizationDrawerFactory"].Create(_helpers_enums__WEBPACK_IMPORTED_MODULE_3__["Visualization"].BoxChart, creationEntries, this.notficationService).Draw();
          }

          this.allOverviewCharts.push(chart);
          return chart.graph;
        }
        /*
        * @method DrawVisualizationDetail: Draw visualization based on suggested vis.
        * @param {Visualization}: Suggested visualization
        * @param {CreationEntry}: Input to draw the viz
        * @return {boolean}: true when done
        */

      }, {
        key: "DrawVisualizationDetail",
        value: function DrawVisualizationDetail(visualizationName, creationEntries) {
          return _visualization_creation_VisualizationCreatorFactory__WEBPACK_IMPORTED_MODULE_5__["VisualizationDrawerFactory"].Create(visualizationName, creationEntries, this.notficationService).Draw();
        }
        /*
        * @method GetCreationEntries: Is used to assign variables of type string
                                      to their respective object of type Question
                                      and then create a CreationEntry object used
                                      for the visualization
        * @param {String[]}: Input of questions
        * @return {CreationEntry}: Object used to draw the visualization
        */

      }, {
        key: "GetCreationEntries",
        value: function GetCreationEntries(id, questions) {
          var questionEntries = [];
          var Overview = false;
          var ndx = this.dataProvider.getNewNdx();
          var DataPlusMeta = src_assets_data_allData__WEBPACK_IMPORTED_MODULE_4__["allData"];
          questions.forEach(function (element) {
            questionEntries.push(DataPlusMeta.filter(function (q) {
              return q.question === element;
            })[0]);
          });
          var creationEntries = new _helpers_types__WEBPACK_IMPORTED_MODULE_2__["CreationEntry"](id, questionEntries, Overview, ndx);
          return creationEntries;
        }
      }]);

      return DrawChartService;
    }();

    DrawChartService.ctorParameters = function () {
      return [{
        type: src_services_notification_service__WEBPACK_IMPORTED_MODULE_6__["NotficationService"]
      }, {
        type: src_services_Data_provider_service__WEBPACK_IMPORTED_MODULE_7__["DataProvider"]
      }];
    };

    DrawChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DrawChartService);
    /***/
  },

  /***/
  "./src/services/groups-creation.ts":
  /*!*****************************************!*\
    !*** ./src/services/groups-creation.ts ***!
    \*****************************************/

  /*! exports provided: GroupCreationService */

  /***/
  function srcServicesGroupsCreationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GroupCreationService", function () {
      return GroupCreationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var GroupCreationService = function GroupCreationService(notficationService) {
      _classCallCheck(this, GroupCreationService);

      this.notficationService = notficationService;
      this.notficationService.listener.subscribe(function (data) {
        console.log(data);
      });
    };

    GroupCreationService.groupedViz = {};

    GroupCreationService.RedrawAll = function (groupId) {
      console.log("Redraw yaw");
      console.log(this.groupedViz);
      console.log(groupId);

      if (this.groupedViz[groupId] !== undefined) {
        this.groupedViz[groupId].forEach(function (elem) {
          return elem.redraw();
        });
      }
    };
    /***/

  },

  /***/
  "./src/services/notification-service.ts":
  /*!**********************************************!*\
    !*** ./src/services/notification-service.ts ***!
    \**********************************************/

  /*! exports provided: NotficationService */

  /***/
  function srcServicesNotificationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotficationService", function () {
      return NotficationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var NotficationService =
    /*#__PURE__*/
    function () {
      function NotficationService() {
        _classCallCheck(this, NotficationService);

        this.subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.listener = this.subject$.asObservable();
      }

      _createClass(NotficationService, [{
        key: "emit",
        value: function emit(data) {
          this.subject$.next(data);
        }
      }]);

      return NotficationService;
    }();

    NotficationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], NotficationService);
    /***/
  },

  /***/
  "./src/services/suggest-chart.service.ts":
  /*!***********************************************!*\
    !*** ./src/services/suggest-chart.service.ts ***!
    \***********************************************/

  /*! exports provided: SuggestChartService */

  /***/
  function srcServicesSuggestChartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuggestChartService", function () {
      return SuggestChartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_helpers_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/helpers/types */
    "./src/helpers/types.ts");
    /* harmony import */


    var _visualization_suggestions_VisualizationSuggestorFactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./visualization_suggestions/VisualizationSuggestorFactory */
    "./src/services/visualization_suggestions/VisualizationSuggestorFactory.ts"); //Angular libs
    //Services


    var SuggestChartService =
    /*#__PURE__*/
    function () {
      function SuggestChartService() {
        _classCallCheck(this, SuggestChartService);
      }

      _createClass(SuggestChartService, [{
        key: "SuggestVisualization",
        value: function SuggestVisualization(questions, task) {
          var suggestionEntry = new src_helpers_types__WEBPACK_IMPORTED_MODULE_2__["SuggestionEntry"](questions, task['key']);

          var suggestion = _visualization_suggestions_VisualizationSuggestorFactory__WEBPACK_IMPORTED_MODULE_3__["VisualizationSuggestorFactory"].Create(suggestionEntry).Suggest();

          return suggestion;
        }
      }]);

      return SuggestChartService;
    }();

    SuggestChartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SuggestChartService);
    /***/
  },

  /***/
  "./src/services/validators/VisualisationSuggestionValidator.ts":
  /*!*********************************************************************!*\
    !*** ./src/services/validators/VisualisationSuggestionValidator.ts ***!
    \*********************************************************************/

  /*! exports provided: VisualisationSuggestionValidator */

  /***/
  function srcServicesValidatorsVisualisationSuggestionValidatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualisationSuggestionValidator", function () {
      return VisualisationSuggestionValidator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../helpers/types */
    "./src/helpers/types.ts");
    /* harmony import */


    var _helpers_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./../../helpers/enums */
    "./src/helpers/enums.ts");
    /* harmony import */


    var _assets_data_allData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../assets/data/allData */
    "./src/assets/data/allData.ts"); // Data


    var VisualisationSuggestionValidator =
    /*#__PURE__*/
    function () {
      function VisualisationSuggestionValidator(questions, task) {
        _classCallCheck(this, VisualisationSuggestionValidator);

        this.questions = questions;
        this.task = task;
      }

      _createClass(VisualisationSuggestionValidator, [{
        key: "Validate",
        value: function Validate() {
          var validationResults = [];
          validationResults = validationResults.concat(this.ValidateQuestions()).concat(this.ValidateByTasks());
          return validationResults;
        }
      }, {
        key: "ValidateQuestions",
        value: function ValidateQuestions() {
          var validationResults = [];
          var Questionnaire = _assets_data_allData__WEBPACK_IMPORTED_MODULE_3__["allData"];
          this.questions.forEach(function (question) {
            if (Questionnaire.some(function (item) {
              return item.question === question;
            })) {
              validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Passed));
            } else {
              validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Failed, question + ' does not exist.'));
            }
          });
          return validationResults;
        }
      }, {
        key: "ValidateByTasks",
        value: function ValidateByTasks() {
          var validationResults = [];

          switch (this.task) {
            case _helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Task"].Distribution:
              return this.ValidateDistribution();
              break;

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Task"].Relationship:
              return this.ValidateRelationship();
              break;

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Task"].TimeEvolution:
              return this.ValidateTimeEvolution();
              break;

            default:
              break;
          }

          return validationResults;
        }
      }, {
        key: "ValidateDistribution",
        value: function ValidateDistribution() {
          var validationResults = [];

          if (this.questions.length === 1) {
            validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Passed));
          } else if (this.questions.length === 0) {
            validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Failed, 'Select at least one question.'));
          } else {
            validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Failed, 'Select only one question at the time to visualize.'));
          }

          return validationResults;
        }
      }, {
        key: "ValidateRelationship",
        value: function ValidateRelationship() {
          var validationResults = [];

          if (this.questions.length > 1) {
            validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Passed));
          } else {
            validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Failed, 'Select at least two question.'));
          }

          return validationResults;
        }
      }, {
        key: "ValidateTimeEvolution",
        value: function ValidateTimeEvolution() {
          var validationResults = [];

          if (this.questions.length === 1) {
            validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Passed));
          } else if (this.questions.length === 0) {
            validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Failed, 'Select at least one question.'));
          } else {
            validationResults.push(new _helpers_types__WEBPACK_IMPORTED_MODULE_1__["ValidationResult"](_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["ValidationStatus"].Failed, 'Select only one question at the time to visualize.'));
          }

          return validationResults;
        }
      }]);

      return VisualisationSuggestionValidator;
    }();
    /***/

  },

  /***/
  "./src/services/visualization_creation/VisualizationCreatorFactory.ts":
  /*!****************************************************************************!*\
    !*** ./src/services/visualization_creation/VisualizationCreatorFactory.ts ***!
    \****************************************************************************/

  /*! exports provided: VisualizationDrawerFactory */

  /***/
  function srcServicesVisualization_creationVisualizationCreatorFactoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualizationDrawerFactory", function () {
      return VisualizationDrawerFactory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../helpers/enums */
    "./src/helpers/enums.ts");
    /* harmony import */


    var _visualizations_BoxChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./visualizations/BoxChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/BoxChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_BarChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./visualizations/BarChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/BarChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_DetailledBarChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./visualizations/DetailledBarChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/DetailledBarChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_BarBoxChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./visualizations/BarBoxChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/BarBoxChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_BubbleChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./visualizations/BubbleChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/BubbleChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_LineChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./visualizations/LineChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/LineChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_ParalleleChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./visualizations/ParalleleChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/ParalleleChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_BalloonChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./visualizations/BalloonChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/BalloonChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_ViolinChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./visualizations/ViolinChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/ViolinChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_ViolinBoxChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./visualizations/ViolinBoxChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/ViolinBoxChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_StackedChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./visualizations/StackedChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/StackedChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_SankeyChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./visualizations/SankeyChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/SankeyChartVisualizationCreator.ts");
    /* harmony import */


    var _visualizations_CountriesChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./visualizations/CountriesChartVisualizationCreator */
    "./src/services/visualization_creation/visualizations/CountriesChartVisualizationCreator.ts"); // Visualizations


    var VisualizationDrawerFactory =
    /*#__PURE__*/
    function () {
      function VisualizationDrawerFactory() {
        _classCallCheck(this, VisualizationDrawerFactory);
      }

      _createClass(VisualizationDrawerFactory, null, [{
        key: "Create",
        value: function Create(visualization, creationEntry, notficationService) {
          switch (visualization) {
            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].BarChart:
              return new _visualizations_BarChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_3__["BarChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].DetailledBarChart:
              return new _visualizations_DetailledBarChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_4__["DetailledBarChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].BarBoxChart:
              return new _visualizations_BarBoxChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_5__["BarBoxChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].BoxChart:
              return new _visualizations_BoxChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_2__["BoxChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].BubbleChart:
              return new _visualizations_BubbleChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_6__["BubbleChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].LineChart:
              return new _visualizations_LineChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_7__["LineChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].ParallelChart:
              return new _visualizations_ParalleleChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_8__["ParalleleChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].BalloonChart:
              return new _visualizations_BalloonChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_9__["BalloonChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].ViolinChart:
              return new _visualizations_ViolinChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_10__["ViolinChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].ViolinBoxChart:
              return new _visualizations_ViolinBoxChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_11__["ViolinBoxChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].StackedChart:
              return new _visualizations_StackedChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_12__["StackedChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].SankeyChart:
              return new _visualizations_SankeyChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_13__["SankeyChartVisualizationCreator"](creationEntry, notficationService);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].Lollipop:
              return new _visualizations_CountriesChartVisualizationCreator__WEBPACK_IMPORTED_MODULE_14__["CountriesChartVisualizationCreator"](creationEntry, notficationService);

            default:
              return null;
          }
        }
      }]);

      return VisualizationDrawerFactory;
    }();
    /***/

  },

  /***/
  "./src/services/visualization_creation/VisualizationDrawer.ts":
  /*!********************************************************************!*\
    !*** ./src/services/visualization_creation/VisualizationDrawer.ts ***!
    \********************************************************************/

  /*! exports provided: VisualizationDrawer */

  /***/
  function srcServicesVisualization_creationVisualizationDrawerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualizationDrawer", function () {
      return VisualizationDrawer;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VisualizationDrawer =
    /*#__PURE__*/
    function () {
      function VisualizationDrawer(creationEntries, notficationService) {
        _classCallCheck(this, VisualizationDrawer);

        this.notficationService = notficationService;
        this.Entries = creationEntries;
        this.notificationService_ = this.notficationService;
      }

      _createClass(VisualizationDrawer, [{
        key: "StaticCopyGroup",
        value: function StaticCopyGroup(group) {
          var _all = group.all().map(function (kv) {
            return {
              key: kv.key,
              value: kv.value
            };
          });

          return {
            all: function all() {
              return _all;
            }
          };
        }
      }]);

      return VisualizationDrawer;
    }();
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/BalloonChartVisualizationCreator.ts":
  /*!************************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/BalloonChartVisualizationCreator.ts ***!
    \************************************************************************************************/

  /*! exports provided: BalloonChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsBalloonChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BalloonChartVisualizationCreator", function () {
      return BalloonChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var src_my_charts_BalloonChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/my-charts/BalloonChart */
    "./src/my-charts/BalloonChart.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");

    var BalloonChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_) {
      _inherits(BalloonChartVisualizationCreator, _VisualizationDrawer_);

      function BalloonChartVisualizationCreator() {
        _classCallCheck(this, BalloonChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(BalloonChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(BalloonChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          console.log("Balloon chart");
          var Entry = this.Entries;
          var id = Entry.id.Value;
          var dimension = Entry.ndx.dimension(function (d) {
            return [d[Entry.Questions[0].variable], d[Entry.Questions[1].variable]];
          });
          var DrawingDimension = Entry.ndx.dimension(function (d) {
            return [d[Entry.Questions[0].variable], d[Entry.Questions[1].variable]];
          });
          var group = DrawingDimension.group();
          var fixedGroup = this.StaticCopyGroup(group);
          var graph = d3__WEBPACK_IMPORTED_MODULE_3__["select"]("#" + id);
          var visualization = new src_my_charts_BalloonChart__WEBPACK_IMPORTED_MODULE_2__["BalloonChart"](this.notificationService_, Entry.group);
          visualization.Dimension(dimension).Graph(graph).Group(group).FixedGroup(fixedGroup);
          visualization.render();
          return visualization;
        }
      }]);

      return BalloonChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/BarBoxChartVisualizationCreator.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/BarBoxChartVisualizationCreator.ts ***!
    \***********************************************************************************************/

  /*! exports provided: BarBoxChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsBarBoxChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarBoxChartVisualizationCreator", function () {
      return BarBoxChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var src_my_charts_BarBoxChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/my-charts/BarBoxChart */
    "./src/my-charts/BarBoxChart.ts");

    var BarBoxChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_2) {
      _inherits(BarBoxChartVisualizationCreator, _VisualizationDrawer_2);

      function BarBoxChartVisualizationCreator() {
        _classCallCheck(this, BarBoxChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(BarBoxChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(BarBoxChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          var Entry = this.Entries;
          var id = Entry.id.Value; // Crossfilter dimension and group setup

          var variable = Entry.Questions[0].variable;
          var dim = Entry.ndx.dimension(function (d) {
            return d[variable];
          });
          var group = Entry.ndx.dimension(function (d) {
            return d[variable];
          }).group(); // DOM objects for rendering

          var figure = document.getElementById(id);
          var graph = new src_my_charts_BarBoxChart__WEBPACK_IMPORTED_MODULE_2__["BarBoxChart"](Entry.group);
          graph.Dimension(dim).Group(group).Variable(variable).Graph(figure);
          graph.render();
          return graph;
        }
      }]);

      return BarBoxChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/BarChartVisualizationCreator.ts":
  /*!********************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/BarChartVisualizationCreator.ts ***!
    \********************************************************************************************/

  /*! exports provided: BarChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsBarChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BarChartVisualizationCreator", function () {
      return BarChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dc */
    "./node_modules/dc/dist/dc.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dc__WEBPACK_IMPORTED_MODULE_3__); // Visualization libraries


    var BarChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_3) {
      _inherits(BarChartVisualizationCreator, _VisualizationDrawer_3);

      function BarChartVisualizationCreator() {
        _classCallCheck(this, BarChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(BarChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(BarChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          console.log('Bar chart');
          var Entry = this.Entries;
          var id = Entry.id;
          var graph = dc__WEBPACK_IMPORTED_MODULE_3__["compositeChart"]('#' + id.Value); // Crossfilter dimension and group setups

          var dim = Entry.ndx.dimension(function (d) {
            return d[Entry.Questions[0].variable];
          });
          var dimReset = Entry.ndx.dimension(function (d) {
            return '';
          });
          var group = dim.group().reduceCount();
          var max = dim.top(Infinity).length;
          var middle = (max / 2).toFixed(0);

          var staticGroup = _get(_getPrototypeOf(BarChartVisualizationCreator.prototype), "StaticCopyGroup", this).call(this, group);

          var margin = {
            left: 5,
            right: 5,
            top: 2,
            bottom: 5
          };
          var size = [90, 55, margin];
          graph.compose([dc__WEBPACK_IMPORTED_MODULE_3__["barChart"](graph).dimension(dim).group(staticGroup).colors('#ccc') // same as .deselected
          .controlsUseVisibility(true).barPadding(0.5).centerBar(true), dc__WEBPACK_IMPORTED_MODULE_3__["barChart"](graph).dimension(dim).group(group).ordering(function (d) {
            return -d.value;
          }).controlsUseVisibility(true).brushOn(false).barPadding(0.5).centerBar(true)]);
          graph.width(size[0]).height(size[1]).margins(size[2]).dimension(dim).group(group).ordering(function (d) {
            return -d.value;
          }).x(d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()).xUnits(dc__WEBPACK_IMPORTED_MODULE_3__["units"].ordinal).brushOn(true);
          graph.y(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, max]));
          graph.renderHorizontalGridLines(true);
          graph.xAxis().tickValues([]);
          graph.yAxis().tickValues([middle, max]);
          graph.on('renderlet', function (chart) {
            graph.selectAll('g.axis.y').attr('display', 'none');
          });
          graph.render();
          return {
            'graph': graph,
            'dim': dimReset
          };
        }
      }]);

      return BarChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/BoxChartVisualizationCreator.ts":
  /*!********************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/BoxChartVisualizationCreator.ts ***!
    \********************************************************************************************/

  /*! exports provided: BoxChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsBoxChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoxChartVisualizationCreator", function () {
      return BoxChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dc */
    "./node_modules/dc/dist/dc.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dc__WEBPACK_IMPORTED_MODULE_3__); // Visualization libraries


    var BoxChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_4) {
      _inherits(BoxChartVisualizationCreator, _VisualizationDrawer_4);

      function BoxChartVisualizationCreator() {
        _classCallCheck(this, BoxChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(BoxChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(BoxChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          var Entry = this.Entries;
          var id = '#' + Entry.id.Value;
          var graph = dc__WEBPACK_IMPORTED_MODULE_3__["boxPlot"](id); // const graphDeselected = dc.boxPlot(id);

          var variable = Entry.Questions[0].variable;
          var dim = Entry.ndx.dimension(function (d) {
            return '';
          });
          var dimReset = Entry.ndx.dimension(function (d) {
            return '';
          });
          var group = dim.group().reduce(function (p, v) {
            var dv = v[variable];

            if (dv !== Infinity && dv != null && dv > 0) {
              p.splice(d3__WEBPACK_IMPORTED_MODULE_2__["bisectLeft"](p, dv), 0, dv);
            }

            return p;
          }, function (p, v) {
            // Retrieve the data value, if not Infinity or null remove it.
            var dv = v[variable];

            if (dv !== Infinity && dv != null && dv > 0) {
              p.splice(p.indexOf(dv), 1);
            }

            return p;
          }, function () {
            return [];
          });
          var width = 55;
          var height = 75;
          var margins = {
            left: 20,
            right: 0,
            top: 0,
            bottom: 3
          };
          graph.width(width).height(height).margins(margins).dimension(dim).group(group).showOutliers(false);
          graph.yAxis().ticks(2);
          graph.renderHorizontalGridLines(true);
          graph.on('pretransition', function (chart) {
            graph.selectAll('rect.box').append('title').text(function (d) {
              return 'Mean: ' + d3__WEBPACK_IMPORTED_MODULE_2__["mean"](d.value).toFixed(2) + '\n' + 'Median: ' + d3__WEBPACK_IMPORTED_MODULE_2__["median"](d.value).toFixed(2) + '\n'; // + 'Variance: ' + d3.variance(d.value).toFixed(2) + '\n';
            });
          });
          graph.on('renderlet', function (chart) {
            graph.select('svg').attr('transform', 'rotate(90) translate(0,-15)');
            graph.selectAll('text').attr('text-anchor', 'middle').attr('transform', function () {
              return 'translate(-15,-12) rotate(-90)';
            });
            graph.selectAll('g.axis.x').attr('display', 'none');
          });
          graph.render();
          return {
            'graph': graph,
            'dim': dimReset
          };
        }
      }]);

      return BoxChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/BubbleChartVisualizationCreator.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/BubbleChartVisualizationCreator.ts ***!
    \***********************************************************************************************/

  /*! exports provided: BubbleChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsBubbleChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BubbleChartVisualizationCreator", function () {
      return BubbleChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dc */
    "./node_modules/dc/dist/dc.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dc__WEBPACK_IMPORTED_MODULE_3__); // Visualization libraries


    var BubbleChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_5) {
      _inherits(BubbleChartVisualizationCreator, _VisualizationDrawer_5);

      function BubbleChartVisualizationCreator() {
        _classCallCheck(this, BubbleChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(BubbleChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(BubbleChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          console.log(this.Entries);
          var xEntry = this.Entries.Questions[0];
          var yEntry = this.Entries.Questions[1];
          var id = '#' + this.Entries.id.Value;
          var graph = dc__WEBPACK_IMPORTED_MODULE_3__["bubbleChart"](id);
          var dim = this.Entries.ndx.dimension(function (d) {
            return [d[xEntry.variable], d[yEntry.variable]];
          });
          var group = dim.group().reduceCount();
          console.log(group.all());
          var dimX = this.Entries.ndx.dimension(function (d) {
            return d[xEntry.variable];
          });
          var dimY = this.Entries.ndx.dimension(function (d) {
            return d[yEntry.variable];
          });
          var rangex = [dimX.bottom(1)[0][xEntry.variable] - 10, dimX.top(1)[0][xEntry.variable] + 10];
          var rangey = [dimY.bottom(1)[0][yEntry.variable] - 10, dimY.top(1)[0][yEntry.variable] + 10];
          var width = 400;
          var height = 400;
          var margins = {
            left: 50,
            right: 50,
            top: 50,
            bottom: 50
          };
          graph.width(width).height(height).margins(margins).dimension(dim).group(group).minRadius(10).maxBubbleRelativeSize(0.3).colorAccessor(function () {
            return '#a60000';
          }).keyAccessor(function (p) {
            return p.key[0];
          }).valueAccessor(function (p) {
            return p.key[1];
          }).radiusValueAccessor(function (p) {
            return p.value / 100;
          }) // .x(d3.scaleBand())
          .x(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain(rangex)).y(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain(rangey)) // .xUnits(dc.units.ordinal)
          .elasticY(false).elasticX(false).renderHorizontalGridLines(true).renderVerticalGridLines(true).renderLabel(false).renderTitle(true).title(function (p) {
            console.log('hOVER BUBBEL');
            return xEntry.question + ': ' + p.key[0] + '\n' + yEntry.question + ': ' + p.key[1] + '\n' + 'Count: ' + p.value;
          });
          graph.xAxis().ticks(5).tickFormat(function (d) {
            return String(d);
          });
          graph.yAxis().ticks(5).tickFormat(function (d) {
            return String(d);
          });
          graph.render();
          return true;
        }
      }]);

      return BubbleChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/CountriesChartVisualizationCreator.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/CountriesChartVisualizationCreator.ts ***!
    \**************************************************************************************************/

  /*! exports provided: CountriesChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsCountriesChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CountriesChartVisualizationCreator", function () {
      return CountriesChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dc */
    "./node_modules/dc/dist/dc.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dc__WEBPACK_IMPORTED_MODULE_3__); // Visualization libraries


    var CountriesChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_6) {
      _inherits(CountriesChartVisualizationCreator, _VisualizationDrawer_6);

      function CountriesChartVisualizationCreator() {
        _classCallCheck(this, CountriesChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(CountriesChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(CountriesChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          console.log('Country diagram');
          var Entry = this.Entries;
          var id = Entry.id.Value;
          var variable = Entry.Questions[0].variable;
          var graph = dc__WEBPACK_IMPORTED_MODULE_3__["compositeChart"]('#' + id);
          var dim = Entry.ndx.dimension(function (d) {
            return d[Entry.Questions[0].variable];
          });
          var dimReset = Entry.ndx.dimension(function (d) {
            return '';
          });
          var max = dim.top(Infinity).length;
          var group = dim.group().reduceCount();

          var staticGroup = _get(_getPrototypeOf(CountriesChartVisualizationCreator.prototype), "StaticCopyGroup", this).call(this, group);

          var margin = {
            left: 40,
            right: 50,
            top: 10,
            bottom: 30
          };
          var size = [1000, 90, margin];
          graph.compose([dc__WEBPACK_IMPORTED_MODULE_3__["barChart"](graph).dimension(dim).group(staticGroup).colors('#ccc') // same as .deselected
          .controlsUseVisibility(true).barPadding(0.7), //.centerBar(true),
          dc__WEBPACK_IMPORTED_MODULE_3__["barChart"](graph).dimension(dim).group(group).barPadding(0.7)]);
          graph.width(size[0]).height(size[1]).margins(size[2]).dimension(dim).group(group).ordering(function (d) {
            return -d.value;
          }).x(d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()).xUnits(dc__WEBPACK_IMPORTED_MODULE_3__["units"].ordinal).y(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, 100])).brushOn(false).renderHorizontalGridLines(true).xAxisLabel('');
          graph.on('renderlet', function (chart) {
            // rotate x-axis labels
            graph.selectAll('g.x g.tick text').attr('transform', 'translate(-10,0) rotate(40)').style('text-anchor', 'start');
          }); // graph.xAxis().tickValues([]);

          graph.y(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, max * 3 / 4]));
          graph.yAxis().tickValues([(max / 2).toFixed(0)]);
          graph.render();
          return {
            'graph': graph,
            'dim': dimReset
          };
        }
      }]);

      return CountriesChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/DetailledBarChartVisualizationCreator.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/DetailledBarChartVisualizationCreator.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: DetailledBarChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsDetailledBarChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DetailledBarChartVisualizationCreator", function () {
      return DetailledBarChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dc */
    "./node_modules/dc/dist/dc.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dc__WEBPACK_IMPORTED_MODULE_3__); // Visualization libraries


    var DetailledBarChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_7) {
      _inherits(DetailledBarChartVisualizationCreator, _VisualizationDrawer_7);

      function DetailledBarChartVisualizationCreator() {
        _classCallCheck(this, DetailledBarChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(DetailledBarChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(DetailledBarChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          console.log('detailled Bar chart');
          var Entry = this.Entries;
          var id = Entry.id;
          var graph = dc__WEBPACK_IMPORTED_MODULE_3__["compositeChart"]('#' + id.Value);
          var filter = [];
          var dim = Entry.ndx.dimension(function (d) {
            return d[Entry.Questions[0].variable];
          });
          var dimFilter = Entry.ndx.dimension(function (d) {
            return d[Entry.Questions[0].variable];
          });
          var max = dim.top(Infinity).length;
          var group = dim.group().reduceCount();
          var numGROUPS = group.all().length;

          var staticGroup = _get(_getPrototypeOf(DetailledBarChartVisualizationCreator.prototype), "StaticCopyGroup", this).call(this, group);

          var margin = {
            left: 45,
            right: 5,
            top: 5,
            bottom: 45
          };
          var size = [numGROUPS * 60, 200, margin];
          var notificationService = this.notificationService_;
          graph.compose([dc__WEBPACK_IMPORTED_MODULE_3__["barChart"](graph).dimension(dim).group(staticGroup).colors('#ccc') // same as .deselected
          .controlsUseVisibility(true).barPadding(0.7).centerBar(true), dc__WEBPACK_IMPORTED_MODULE_3__["barChart"](graph).dimension(dim).group(group).barPadding(0.7).centerBar(true)]);
          graph.width(size[0]).height(size[1]).margins(size[2]).dimension(dim).group(group).ordering(function (d) {
            return -d.value;
          }).x(d3__WEBPACK_IMPORTED_MODULE_2__["scaleBand"]()).xUnits(dc__WEBPACK_IMPORTED_MODULE_3__["units"].ordinal).y(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, 100])).brushOn(false).renderHorizontalGridLines(true).xAxisLabel(''); // graph.xAxis().tickValues([]);

          graph.y(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, max]));
          graph.yAxis().tickValues([(max / 2).toFixed(0)]);
          graph.on("renderlet", function (chart) {
            // rotate x-axis labels
            graph.selectAll('g.x g.tick text').attr('transform', 'translate(-10,0) rotate(40)').style("text-anchor", "start");
            graph.selectAll('g.stack._0 rect.bar').on('click', function (e) {
              if (filter.includes(e.x)) {
                filter = filter.filter(function (value) {
                  return value !== e.x;
                });
              } else {
                filter.push(e.x);
              }

              if (filter.length > 0) {
                dimFilter.filterFunction(function (A) {
                  var temp = null;
                  filter.forEach(function (elem) {
                    if (temp == null) {
                      temp = A === elem;
                    } else {
                      temp = temp || A === elem;
                    }
                  });
                  return temp;
                });
              } else {
                dimFilter.filterAll();
              }

              notificationService.emit(Entry.group);
            });
          });
          graph.render();
          return graph;
        }
      }]);

      return DetailledBarChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/LineChartVisualizationCreator.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/LineChartVisualizationCreator.ts ***!
    \*********************************************************************************************/

  /*! exports provided: LineChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsLineChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LineChartVisualizationCreator", function () {
      return LineChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dc */
    "./node_modules/dc/dist/dc.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dc__WEBPACK_IMPORTED_MODULE_3__); // Visualization libraries


    var LineChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_8) {
      _inherits(LineChartVisualizationCreator, _VisualizationDrawer_8);

      function LineChartVisualizationCreator() {
        _classCallCheck(this, LineChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(LineChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(LineChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          var Entry = this.Entries;
          var id = '#' + Entry.id.Value;
          var graph = dc__WEBPACK_IMPORTED_MODULE_3__["lineChart"](id);
          var filter = []; // const graph1 = new dc.CompositeChart(id);
          // If we have one variable only we draw line chart by Count

          if (Entry.Questions.length === 1) {
            var dim = Entry.ndx.dimension(function (d) {
              return d[Entry.Questions[0].variable];
            });
            var dimFilter = Entry.ndx.dimension(function (d) {
              return '';
            });
            var group = dim.group().reduceCount();

            var staticGroup = _get(_getPrototypeOf(LineChartVisualizationCreator.prototype), "StaticCopyGroup", this).call(this, group);

            var width = 1000;
            var height = 90;
            var margins = {
              left: 40,
              right: 50,
              top: 10,
              bottom: 30
            };
            graph.width(width).height(height).margins(margins).x(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([1995, 2021])).y(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, group.top(1)[0].value + 100])).brushOn(false).renderDataPoints(true).clipPadding(10).dimension(dim).group(group).renderHorizontalGridLines(true).on('renderlet', function (chart) {
              graph.selectAll('circle').on('click', function (d) {
                if (filter.includes(d.x)) {
                  filter = filter.filter(function (value) {
                    return value !== d.x;
                  });
                } else {
                  filter.push(d.x);
                }

                if (filter.length > 0) {
                  dimFilter.filterFunction(function (A) {
                    var temp = null;
                    filter.forEach(function (elem) {
                      if (temp == null) {
                        temp = A === elem;
                      } else {
                        temp = temp || A === elem;
                      }
                    });
                    return temp;
                  });
                } else {
                  dimFilter.filterAll();
                }

                dc__WEBPACK_IMPORTED_MODULE_3__["redrawAll"]();
              });
            });
            graph.yAxis().ticks(3).tickFormat(function (d) {
              return String(d);
            });
            graph.xAxis().tickFormat(function (d) {
              return String(d);
            });
            graph.render();
            return {
              'graph': graph,
              'dim': dimFilter
            };
          } else {
            console.log(' Draw time line');
          }
        }
      }]);

      return LineChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/ParalleleChartVisualizationCreator.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/ParalleleChartVisualizationCreator.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ParalleleChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsParalleleChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ParalleleChartVisualizationCreator", function () {
      return ParalleleChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var src_my_charts_PCPChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/my-charts/PCPChart */
    "./src/my-charts/PCPChart.ts");

    var ParalleleChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_9) {
      _inherits(ParalleleChartVisualizationCreator, _VisualizationDrawer_9);

      function ParalleleChartVisualizationCreator() {
        _classCallCheck(this, ParalleleChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(ParalleleChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(ParalleleChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          console.log('Parallel chart');
          var Entry = this.Entries;
          var id = Entry.id.Value;
          var dims = [];
          var variables = [];
          Entry.Questions.forEach(function (element) {
            var dim = Entry.ndx.dimension(function (d) {
              return d[element.variable];
            });
            dims.push(dim);
            variables.push(element.variable);
          });
          var pcpDim = Entry.ndx.dimension(function (d) {
            return d[Entry.Questions[0].variable];
          });
          var graph = document.getElementById(id);
          var visualization = new src_my_charts_PCPChart__WEBPACK_IMPORTED_MODULE_2__["ParallelCoordinates"](this.notificationService_, Entry.group);
          visualization.Dimension(pcpDim).AllDimensions(dims).Graph(graph).Variables(variables);
          visualization.render();
          return visualization;
        }
      }]);

      return ParalleleChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/SankeyChartVisualizationCreator.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/SankeyChartVisualizationCreator.ts ***!
    \***********************************************************************************************/

  /*! exports provided: SankeyChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsSankeyChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SankeyChartVisualizationCreator", function () {
      return SankeyChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var src_my_charts_SankeyChart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/my-charts/SankeyChart */
    "./src/my-charts/SankeyChart.ts");

    var SankeyChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_10) {
      _inherits(SankeyChartVisualizationCreator, _VisualizationDrawer_10);

      function SankeyChartVisualizationCreator() {
        _classCallCheck(this, SankeyChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(SankeyChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(SankeyChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          console.log('Sankey diagram');
          var Entry = this.Entries;
          var id = Entry.id.Value; // Define the hierarchical categories of the sankey

          var dims = [];
          var variables = [];
          Entry.Questions.forEach(function (element) {
            var dim = Entry.ndx.dimension(function (d) {
              return d[element.variable];
            });
            dims.push({
              label: element.variable,
              dimension: dim
            });
            variables.push(element.variable);
          });
          var sankeyDim = Entry.ndx.dimension(function (d) {
            return d;
          });
          console.log('My group:', Entry.group);
          this.graph = document.getElementById(id);
          var figure = new src_my_charts_SankeyChart__WEBPACK_IMPORTED_MODULE_2__["Sankey"](this.notificationService_, Entry.group);
          figure.Dimension(sankeyDim).AllDimensions(dims).Graph(this.graph).Variables(variables);
          figure.render();
          return figure;
        }
      }]);

      return SankeyChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/StackedChartVisualizationCreator.ts":
  /*!************************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/StackedChartVisualizationCreator.ts ***!
    \************************************************************************************************/

  /*! exports provided: StackedChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsStackedChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StackedChartVisualizationCreator", function () {
      return StackedChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dc */
    "./node_modules/dc/dist/dc.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dc__WEBPACK_IMPORTED_MODULE_3__); // Visualization libraries


    var StackedChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_11) {
      _inherits(StackedChartVisualizationCreator, _VisualizationDrawer_11);

      function StackedChartVisualizationCreator() {
        _classCallCheck(this, StackedChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(StackedChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(StackedChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          var Entry = this.Entries;
          var id = '#' + Entry.id.Value;
          var notificationService = this.notificationService_; // Dimensions and groups:

          var variable = Entry.Questions[0].variable;
          var dim = Entry.ndx.dimension(function (d) {
            return [d.IMD1008_YEAR, d[variable]];
          });

          var options = _toConsumableArray(new Set(dim.group().all().map(function (d) {
            return d.key[1];
          })));

          var xdim = Entry.ndx.dimension(function (d) {
            return d.IMD1008_YEAR;
          });
          var group = xdim.group().reduceCount().all();
          var max = -Infinity;
          group.forEach(function (elem) {
            if (elem.value > max) {
              max = elem.value;
            }
          });
          var numGroup = group.length;
          var numLabels = Entry.ndx.dimension(function (d) {
            return d[variable];
          }).group().reduceCount().all().length;
          var ydim = xdim.group().reduce(function (p, v) {
            p[v[variable]] = (p[v[variable]] || 0) + 1;
            return p;
          }, function (p, v) {
            p[v[variable]] = (p[v[variable]] || 0) - 1;
            return p;
          }, function () {
            return {};
          });

          function sel_stack(valueKey) {
            return function (d) {
              return d.value[valueKey];
            };
          }

          var graph = dc__WEBPACK_IMPORTED_MODULE_3__["barChart"](id);
          var width = numGroup * 60;
          var height = 300;
          var margins = {
            left: 40,
            right: 0,
            top: 17 * numLabels,
            bottom: 40
          };
          var start = 0;

          for (var _i2 = 0, _Object$entries = Object.entries(options); _i2 < _Object$entries.length; _i2++) {
            var _Object$entries$_i = _slicedToArray(_Object$entries[_i2], 2),
                key = _Object$entries$_i[0],
                value = _Object$entries$_i[1];

            if (start === 0) {
              graph.width(width).height(height).margins(margins).dimension(xdim).group(ydim, value, sel_stack(value)).x(d3__WEBPACK_IMPORTED_MODULE_2__["scaleOrdinal"]().domain(xdim)).xUnits(dc__WEBPACK_IMPORTED_MODULE_3__["units"].ordinal).renderHorizontalGridLines(true).renderLabel(false).brushOn(false).title(function (d) {
                var key = group.find(function (x) {
                  return x.key == d.key;
                }).value;
                var percentage = (d.value[this.layer] * 100 / key).toFixed(2);
                return d.key + ': ' + key + '\n' + this.layer + ': ' + d.value[this.layer] + '\n' + 'Purcentage: ' + percentage + '%';
              });
              start += 1;
            } else {
              graph.stack(ydim, value, sel_stack(value));
            }
          }

          graph.yAxis().ticks(3).tickFormat(function (d) {
            return String(d);
          });
          graph.y(d3__WEBPACK_IMPORTED_MODULE_2__["scaleLinear"]().domain([0, max]));
          graph.on('renderlet', function (chart) {
            graph.selectAll('g.x g.tick text').attr('transform', 'translate(0,0) rotate(40)').style('text-anchor', 'start');
            chart.selectAll('rect.bar').on('dblclick', function (d) {
              dim.filter(function (elem) {
                return elem[0] === d.x && elem[1] === d.layer;
              });
              notificationService.emit(Entry.group);
            });
            chart.selectAll('rect.bar').on('lclick', function (d) {
              notificationService.emit(Entry.group);
            });
          });
          graph.legend(dc__WEBPACK_IMPORTED_MODULE_3__["legend"]());
          graph.render();
          return graph;
        }
      }]);

      return StackedChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/ViolinBoxChartVisualizationCreator.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/ViolinBoxChartVisualizationCreator.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ViolinBoxChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsViolinBoxChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViolinBoxChartVisualizationCreator", function () {
      return ViolinBoxChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var d3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! d3 */
    "./node_modules/d3/index.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! dc */
    "./node_modules/dc/dist/dc.js");
    /* harmony import */


    var dc__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(dc__WEBPACK_IMPORTED_MODULE_3__); // Visualization libraries


    var ViolinBoxChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_12) {
      _inherits(ViolinBoxChartVisualizationCreator, _VisualizationDrawer_12);

      function ViolinBoxChartVisualizationCreator() {
        _classCallCheck(this, ViolinBoxChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(ViolinBoxChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(ViolinBoxChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          console.log('Violin box diagram');
          var Entry = this.Entries;
          var id = Entry.id.Value;
          var notificationService = this.notificationService_;
          var categoricalVar = 'IMD1008_YEAR';
          var numericalVar = Entry.Questions[0].variable;
          var dimX = Entry.ndx.dimension(function (d) {
            return d[categoricalVar];
          });
          var groupY = dimX.group().reduce(function (p, v) {
            // Retrieve the data value, if not Infinity or null add it.
            var dv = v[numericalVar];

            if (dv !== Infinity && dv != null && dv > 0) {
              p.splice(d3__WEBPACK_IMPORTED_MODULE_2__["bisectLeft"](p, dv), 0, dv);
            }

            return p;
          }, function (p, v) {
            // Retrieve the data value, if not Infinity or null remove it.
            var dv = v[numericalVar];

            if (dv !== Infinity && dv != null && dv > 0) {
              p.splice(d3__WEBPACK_IMPORTED_MODULE_2__["bisectLeft"](p, dv), 1);
            }

            return p;
          }, function () {
            return [];
          }); // const dim = Entry.ndx.dimension(d => d[numerical_var]);
          // let rows = dim.top(Infinity);

          var figure = dc__WEBPACK_IMPORTED_MODULE_3__["boxPlot"]('#' + id);
          figure.width(320).height(250).dimension(dimX).group(groupY).tickFormat(d3__WEBPACK_IMPORTED_MODULE_2__["format"]('.1f')).renderDataPoints(true).renderTitle(true).dataOpacity(1).dataWidthPortion(2).elasticY(false).elasticX(false);
          figure.ordinalColors(['#A07A19', '#AC30C0', '#EB9A72', '#BA86F5', '#EA22A8']);
          figure.colorAccessor(function (data) {
            return data.key;
          });
          figure.render();
          figure.on('renderlet', function () {
            figure.selectAll('g.box').on('click', function (e) {
              console.log(e.key);
              dimX.filter(function (d) {
                return d === e.key;
              });
              notificationService.emit(Entry.group);
            });
          });
          return figure;
        }
      }]);

      return ViolinBoxChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_creation/visualizations/ViolinChartVisualizationCreator.ts":
  /*!***********************************************************************************************!*\
    !*** ./src/services/visualization_creation/visualizations/ViolinChartVisualizationCreator.ts ***!
    \***********************************************************************************************/

  /*! exports provided: ViolinChartVisualizationCreator */

  /***/
  function srcServicesVisualization_creationVisualizationsViolinChartVisualizationCreatorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViolinChartVisualizationCreator", function () {
      return ViolinChartVisualizationCreator;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../VisualizationDrawer */
    "./src/services/visualization_creation/VisualizationDrawer.ts");
    /* harmony import */


    var src_helpers_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/helpers/enums */
    "./src/helpers/enums.ts");

    var ViolinChartVisualizationCreator =
    /*#__PURE__*/
    function (_VisualizationDrawer_13) {
      _inherits(ViolinChartVisualizationCreator, _VisualizationDrawer_13);

      function ViolinChartVisualizationCreator() {
        _classCallCheck(this, ViolinChartVisualizationCreator);

        return _possibleConstructorReturn(this, _getPrototypeOf(ViolinChartVisualizationCreator).apply(this, arguments));
      }

      _createClass(ViolinChartVisualizationCreator, [{
        key: "Draw",
        value: function Draw() {
          console.log('Violin diagram');
          var Entry = this.Entries;
          var id = Entry.id.Value;

          if (Entry.Questions.length > 1) {
            var unpack = function unpack(rows, key) {
              return rows.map(function (row) {
                if (row[key] > 0 || typeof row[key] === 'string') {
                  return row[key];
                }
              });
            };

            var categorical_var = null;
            var numerical_var = null;

            if (Entry.Questions[0].category === src_helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Category"].MultipleChoices) {
              categorical_var = Entry.Questions[0].variable;
              numerical_var = Entry.Questions[1].variable;
            } else {
              categorical_var = Entry.Questions[1].variable;
              numerical_var = Entry.Questions[0].variable;
            }

            var dim = Entry.ndx.dimension(function (d) {
              return d[numerical_var];
            });
            var rows = dim.top(Infinity);
            var data = [{
              type: 'violin',
              x: unpack(rows, categorical_var),
              y: unpack(rows, numerical_var),
              points: 'none',
              box: {
                visible: false
              },
              line: {
                color: 'Jet'
              },
              meanline: {
                visible: true
              }
            }];
            var layout = {
              //width: 250,
              height: 250,
              margin: {
                l: 10,
                r: 10,
                b: 30,
                t: 5,
                pad: 0
              },
              yaxis: {
                zeroline: false,
                automargin: true
              }
            };
            this.graph = document.getElementById(id);
            Plotly.react(this.graph, data, layout, {
              displayModeBar: false
            });
            return this.graph;
          } else {
            var _unpack = function _unpack(rows, key) {
              return rows.map(function (row) {
                if (row[key] > 0 || typeof row[key] === 'string') {
                  return row[key];
                }
              });
            };

            var variable = Entry.Questions[0].variable;

            var _dim = Entry.ndx.dimension(function (d) {
              return d[variable];
            });

            var _rows = _dim.top(Infinity);

            var _data = [{
              type: 'violin',
              x: _unpack(_rows, variable),
              //y: unpack(rows, numerical_var),
              points: 'none',
              box: {
                visible: false
              },
              line: {
                color: 'Jet'
              },
              meanline: {
                visible: true
              }
            }];
            var _layout = {
              width: 350,
              height: 250,
              margin: {
                l: 10,
                r: 10,
                b: 30,
                t: 5,
                pad: 0
              },
              yaxis: {
                zeroline: false,
                automargin: true
              }
            };
            this.graph = document.getElementById(id);
            Plotly.react(this.graph, _data, _layout, {
              displayModeBar: false
            });
            return this.graph;
          }
        }
      }]);

      return ViolinChartVisualizationCreator;
    }(_VisualizationDrawer__WEBPACK_IMPORTED_MODULE_1__["VisualizationDrawer"]);
    /***/

  },

  /***/
  "./src/services/visualization_suggestions/DisitributionVisualizationSuggestor.ts":
  /*!***************************************************************************************!*\
    !*** ./src/services/visualization_suggestions/DisitributionVisualizationSuggestor.ts ***!
    \***************************************************************************************/

  /*! exports provided: DistributionVisualizationSuggestor */

  /***/
  function srcServicesVisualization_suggestionsDisitributionVisualizationSuggestorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DistributionVisualizationSuggestor", function () {
      return DistributionVisualizationSuggestor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _VisualizationSuggestor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./VisualizationSuggestor */
    "./src/services/visualization_suggestions/VisualizationSuggestor.ts");
    /* harmony import */


    var _helpers_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../helpers/enums */
    "./src/helpers/enums.ts");
    /* harmony import */


    var _assets_data_allData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../assets/data/allData */
    "./src/assets/data/allData.ts"); // The workflow is as follow:
    // 1- Check that the user has chosen only one questions: dataValidation()
    // 2- Check the category of the question
    // 3- Sugget Visualization


    var DistributionVisualizationSuggestor =
    /*#__PURE__*/
    function (_VisualizationSuggest) {
      _inherits(DistributionVisualizationSuggestor, _VisualizationSuggest);

      function DistributionVisualizationSuggestor() {
        _classCallCheck(this, DistributionVisualizationSuggestor);

        return _possibleConstructorReturn(this, _getPrototypeOf(DistributionVisualizationSuggestor).apply(this, arguments));
      }

      _createClass(DistributionVisualizationSuggestor, [{
        key: "Suggest",
        value: function Suggest() {
          var selectedQuestion = this.Entry.Questions[0];
          var Questionnaire = _assets_data_allData__WEBPACK_IMPORTED_MODULE_3__["allData"];
          var category = Questionnaire.filter(function (q) {
            return q.question === selectedQuestion;
          }).pop().category;

          switch (category) {
            case _helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Category"].MultipleChoices:
              {
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Visualization"].DetailledBarChart;
              }

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Category"].RatingScale:
              {
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Visualization"].BarBoxChart;
              }

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Category"].Numerical:
              {
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_2__["Visualization"].ViolinChart;
              }

            default:
              {
                alert('There is an error in question category: ' + category);
                break;
              }
          }
        }
      }]);

      return DistributionVisualizationSuggestor;
    }(_VisualizationSuggestor__WEBPACK_IMPORTED_MODULE_1__["VisualizationSuggestor"]);
    /***/

  },

  /***/
  "./src/services/visualization_suggestions/RelationshipVisualizationSuggestor.ts":
  /*!**************************************************************************************!*\
    !*** ./src/services/visualization_suggestions/RelationshipVisualizationSuggestor.ts ***!
    \**************************************************************************************/

  /*! exports provided: RelationshipVisualizationSuggestor */

  /***/
  function srcServicesVisualization_suggestionsRelationshipVisualizationSuggestorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RelationshipVisualizationSuggestor", function () {
      return RelationshipVisualizationSuggestor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../helpers/enums */
    "./src/helpers/enums.ts");
    /* harmony import */


    var _VisualizationSuggestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./VisualizationSuggestor */
    "./src/services/visualization_suggestions/VisualizationSuggestor.ts");
    /* harmony import */


    var _assets_data_allData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../assets/data/allData */
    "./src/assets/data/allData.ts"); // The workflow is as follow:
    // 1- Check that the user has chosen more than one question: dataValidation()
    // 2- Check type of relationship: Binary or Multi
    // 3- Check type of questions: Homogene or Heterogene
    // 4- Check type of Homogene questions
    // 5- Sugget Visualization


    var RelationshipVisualizationSuggestor =
    /*#__PURE__*/
    function (_VisualizationSuggest2) {
      _inherits(RelationshipVisualizationSuggestor, _VisualizationSuggest2);

      function RelationshipVisualizationSuggestor() {
        _classCallCheck(this, RelationshipVisualizationSuggestor);

        return _possibleConstructorReturn(this, _getPrototypeOf(RelationshipVisualizationSuggestor).apply(this, arguments));
      }

      _createClass(RelationshipVisualizationSuggestor, [{
        key: "Suggest",
        value: function Suggest() {
          var dataType = this.homogeneousData(this.Entry); // Binary Relationship

          if (this.binaryRelationship(this.Entry)) {
            return this.BinarySuggestion(dataType);
          } else {
            return this.MultipleSuggestion(dataType);
          }
        }
      }, {
        key: "binaryRelationship",
        value: function binaryRelationship(suggestionEntry) {
          if (this.Entry.Questions.length === 2) {
            return true;
          } else {
            return false;
          }
        }
      }, {
        key: "homogeneousData",
        value: function homogeneousData(suggestionEntry) {
          var homogeneous = true;
          var questions = this.Entry.Questions;
          var categoryOld = null;
          var categoryNew = null;
          var type = null;
          var questionnaire = _assets_data_allData__WEBPACK_IMPORTED_MODULE_3__["allData"];
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            var _loop = function _loop() {
              var element = _step.value;

              if (categoryOld === null) {
                categoryOld = questionnaire.filter(function (q) {
                  return q.question === element;
                }).pop().category;
              } else {
                categoryNew = questionnaire.filter(function (q) {
                  return q.question === element;
                }).pop().category;
                type = categoryNew;

                if (categoryNew !== categoryOld) {
                  homogeneous = false;
                  type = null;
                  return "break";
                }
              }
            };

            for (var _iterator = questions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var _ret = _loop();

              if (_ret === "break") break;
            }
          } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
              }
            } finally {
              if (_didIteratorError) {
                throw _iteratorError;
              }
            }
          }

          console.log('Valeur homogenes:' + homogeneous + 'de Type ' + type);
          return {
            Homogeneous: homogeneous,
            Type: type
          };
        }
      }, {
        key: "BinarySuggestion",
        value: function BinarySuggestion(dataType) {
          if (dataType.Homogeneous) {
            switch (dataType.Type) {
              case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Category"].MultipleChoices:
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].BalloonChart;

              case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Category"].RatingScale:
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].BubbleChart;

              case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Category"].Numerical:
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].BubbleChart;

              default:
                alert('There is an error in question category: ' + dataType.Type);
                break;
            }
          } else {
            return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].ViolinChart;
          }
        }
      }, {
        key: "MultipleSuggestion",
        value: function MultipleSuggestion(dataType) {
          if (dataType.Homogeneous) {
            switch (dataType.Type) {
              case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Category"].MultipleChoices:
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].SankeyChart;

              case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Category"].RatingScale:
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].ParallelChart;

              case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Category"].Numerical:
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].ParallelChart;

              default:
                alert('There is an error in question category: ' + dataType.Type);
                break;
            }
          } else {
            return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].ParallelChart;
          }
        }
      }]);

      return RelationshipVisualizationSuggestor;
    }(_VisualizationSuggestor__WEBPACK_IMPORTED_MODULE_2__["VisualizationSuggestor"]);
    /***/

  },

  /***/
  "./src/services/visualization_suggestions/TimeVisualizationSuggestor.ts":
  /*!******************************************************************************!*\
    !*** ./src/services/visualization_suggestions/TimeVisualizationSuggestor.ts ***!
    \******************************************************************************/

  /*! exports provided: TimeVisualizationSuggestor */

  /***/
  function srcServicesVisualization_suggestionsTimeVisualizationSuggestorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TimeVisualizationSuggestor", function () {
      return TimeVisualizationSuggestor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../helpers/enums */
    "./src/helpers/enums.ts");
    /* harmony import */


    var _VisualizationSuggestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./VisualizationSuggestor */
    "./src/services/visualization_suggestions/VisualizationSuggestor.ts");
    /* harmony import */


    var _assets_data_allData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../assets/data/allData */
    "./src/assets/data/allData.ts"); // The workflow is as follow:
    // 1- Check that the user has chosen only one questions: dataValidation()
    // 2- Check the category of the question
    // 3- Sugget Visualization


    var TimeVisualizationSuggestor =
    /*#__PURE__*/
    function (_VisualizationSuggest3) {
      _inherits(TimeVisualizationSuggestor, _VisualizationSuggest3);

      function TimeVisualizationSuggestor() {
        _classCallCheck(this, TimeVisualizationSuggestor);

        return _possibleConstructorReturn(this, _getPrototypeOf(TimeVisualizationSuggestor).apply(this, arguments));
      }

      _createClass(TimeVisualizationSuggestor, [{
        key: "Suggest",
        value: function Suggest() {
          var selectedQuestion = this.Entry.Questions[0];
          var questionnaire = _assets_data_allData__WEBPACK_IMPORTED_MODULE_3__["allData"];
          var category = questionnaire.filter(function (q) {
            return q.question === selectedQuestion;
          }).pop().category;

          switch (category) {
            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Category"].MultipleChoices:
              {
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].StackedChart;
              }

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Category"].RatingScale:
              {
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].ViolinBoxChart; //return Visualization.BoxChart;
              }

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Category"].Numerical:
              {
                return _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Visualization"].ViolinBoxChart; // return Visualization.BoxChart;
              }

            default:
              {
                alert('There is an error in question category: ' + category);
                break;
              }
          }
        }
      }]);

      return TimeVisualizationSuggestor;
    }(_VisualizationSuggestor__WEBPACK_IMPORTED_MODULE_2__["VisualizationSuggestor"]);
    /***/

  },

  /***/
  "./src/services/visualization_suggestions/VisualizationSuggestor.ts":
  /*!**************************************************************************!*\
    !*** ./src/services/visualization_suggestions/VisualizationSuggestor.ts ***!
    \**************************************************************************/

  /*! exports provided: VisualizationSuggestor */

  /***/
  function srcServicesVisualization_suggestionsVisualizationSuggestorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualizationSuggestor", function () {
      return VisualizationSuggestor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var VisualizationSuggestor = function VisualizationSuggestor(suggestionEntry) {
      _classCallCheck(this, VisualizationSuggestor);

      this.Entry = suggestionEntry;
    };
    /***/

  },

  /***/
  "./src/services/visualization_suggestions/VisualizationSuggestorFactory.ts":
  /*!*********************************************************************************!*\
    !*** ./src/services/visualization_suggestions/VisualizationSuggestorFactory.ts ***!
    \*********************************************************************************/

  /*! exports provided: VisualizationSuggestorFactory */

  /***/
  function srcServicesVisualization_suggestionsVisualizationSuggestorFactoryTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VisualizationSuggestorFactory", function () {
      return VisualizationSuggestorFactory;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _helpers_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../helpers/enums */
    "./src/helpers/enums.ts");
    /* harmony import */


    var _DisitributionVisualizationSuggestor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./DisitributionVisualizationSuggestor */
    "./src/services/visualization_suggestions/DisitributionVisualizationSuggestor.ts");
    /* harmony import */


    var _RelationshipVisualizationSuggestor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./RelationshipVisualizationSuggestor */
    "./src/services/visualization_suggestions/RelationshipVisualizationSuggestor.ts");
    /* harmony import */


    var _TimeVisualizationSuggestor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./TimeVisualizationSuggestor */
    "./src/services/visualization_suggestions/TimeVisualizationSuggestor.ts");

    var VisualizationSuggestorFactory =
    /*#__PURE__*/
    function () {
      function VisualizationSuggestorFactory() {
        _classCallCheck(this, VisualizationSuggestorFactory);
      }

      _createClass(VisualizationSuggestorFactory, null, [{
        key: "Create",
        value: function Create(suggestionEntry) {
          switch (suggestionEntry.Task) {
            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Task"].Distribution:
              return new _DisitributionVisualizationSuggestor__WEBPACK_IMPORTED_MODULE_2__["DistributionVisualizationSuggestor"](suggestionEntry);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Task"].Relationship:
              return new _RelationshipVisualizationSuggestor__WEBPACK_IMPORTED_MODULE_3__["RelationshipVisualizationSuggestor"](suggestionEntry);

            case _helpers_enums__WEBPACK_IMPORTED_MODULE_1__["Task"].TimeEvolution:
              return new _TimeVisualizationSuggestor__WEBPACK_IMPORTED_MODULE_4__["TimeVisualizationSuggestor"](suggestionEntry);

            default:
              console.log('none');
              return null;
          }
        }
      }]);

      return VisualizationSuggestorFactory;
    }();
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/manal/Desktop/Survey Visualization/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map
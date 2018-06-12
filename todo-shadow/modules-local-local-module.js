(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-local-local-module"],{

/***/ "./src/app/components/todo-create-form/todo-create-form.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/todo-create-form/todo-create-form.component.ts ***!
  \***************************************************************************/
/*! exports provided: TodoCreateFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoCreateFormComponent", function() { return TodoCreateFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TodoCreateFormComponent = /** @class */ (function () {
    function TodoCreateFormComponent(fb) {
        this.fb = fb;
        this.createTodo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.createForm();
    }
    TodoCreateFormComponent.prototype.createForm = function () {
        this.form = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    };
    TodoCreateFormComponent.prototype.createNewTodo = function (FormDirective) {
        this.createTodo.emit(this.form.get('name').value);
        this.form.reset();
        FormDirective.resetForm();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('create'),
        __metadata("design:type", Object)
    ], TodoCreateFormComponent.prototype, "createTodo", void 0);
    TodoCreateFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-create-form',
            template: __webpack_require__(/*! ./todo-create-form.html */ "./src/app/components/todo-create-form/todo-create-form.html"),
            styles: ["\n    .create-form__button {\n      margin-left: 20px;\n      width: 200px;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], TodoCreateFormComponent);
    return TodoCreateFormComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-create-form/todo-create-form.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/todo-create-form/todo-create-form.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #formDirective=\"ngForm\" [formGroup]=\"form\" (ngSubmit)=\"createNewTodo(formDirective)\" class=\"d-flex align-items-center create-form\">\n  <mat-form-field class=\"full-width\">\n    <input matInput placeholder=\"What we should to do?\" formControlName=\"name\">\n  </mat-form-field>\n  <button type=\"submit\" mat-raised-button color=\"primary\" class=\"create-form__button\" [disabled]=\"!form.valid\">Add Todo</button>\n</form>\n"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoListComponent = /** @class */ (function () {
    function TodoListComponent() {
        this.items = [];
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], TodoListComponent.prototype, "items", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('delete'),
        __metadata("design:type", Object)
    ], TodoListComponent.prototype, "deleteItem", void 0);
    TodoListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo-list',
            template: "\n    <div *ngFor=\"let item of items.todos\">\n      <app-todo [item]=\"item\" (select)=\"select.emit($event)\" (delete)=\"deleteItem.emit($event)\"></app-todo>\n    </div>\n  ",
            styles: [""],
        }),
        __metadata("design:paramtypes", [])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/components/todo/todo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/todo/todo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-item\">\n  <div class=\"todo-item__checkbox-wrapper\">\n    <mat-checkbox [checked]=\"item.selected\" (change)=\"selectItem()\">\n      {{item.name}}\n    </mat-checkbox>\n  </div>\n    <mat-icon class=\"todo-item__delete\" (click)=\"deleteTodo()\">delete</mat-icon>\n</div>\n"

/***/ }),

/***/ "./src/app/components/todo/todo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/todo/todo.component.ts ***!
  \***************************************************/
/*! exports provided: TodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoComponent", function() { return TodoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.deleteItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    TodoComponent.prototype.selectItem = function () {
        this.select.emit(this.item.id);
    };
    TodoComponent.prototype.deleteTodo = function () {
        this.deleteItem.emit(this.item.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "item", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])('delete'),
        __metadata("design:type", Object)
    ], TodoComponent.prototype, "deleteItem", void 0);
    TodoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todo',
            template: __webpack_require__(/*! ./todo.component.html */ "./src/app/components/todo/todo.component.html"),
            styles: ["\n    .todo-item {\n      display: flex;\n      align-items: center;\n      margin-bottom: 20px;\n    }\n\n    .todo-item__checkbox-wrapper {\n      min-width: 200px;\n    }\n\n    .todo-item__delete {\n      cursor: pointer;\n    }\n  "],
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());



/***/ }),

/***/ "./src/app/modules/local/local-dashboard/local-dashboard.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/modules/local/local-dashboard/local-dashboard.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1 class=\"mat-h1\">Local Todos</h1>\n  <app-todo-create-form (create)=\"createItem($event)\"></app-todo-create-form>\n  <app-todo-list [items]=\"todos$ | async\" (delete)=\"deleteItem($event)\" (select)=\"selectItem($event)\"></app-todo-list>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/local/local-dashboard/local-dashboard.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/modules/local/local-dashboard/local-dashboard.component.ts ***!
  \****************************************************************************/
/*! exports provided: LocalDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalDashboardComponent", function() { return LocalDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions_todos__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store/actions/todos */ "./src/app/store/actions/todos.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LocalDashboardComponent = /** @class */ (function () {
    function LocalDashboardComponent(store) {
        this.store = store;
        this.todos$ = store.select('local');
        store.select(function (state) { return state; }).subscribe(function (state) { return console.log(state); });
    }
    LocalDashboardComponent.prototype.selectItem = function (id) {
        this.store.dispatch(new _store_actions_todos__WEBPACK_IMPORTED_MODULE_2__["Select"](id));
    };
    LocalDashboardComponent.prototype.createItem = function (name) {
        var item = {
            name: name,
            id: parseInt((Math.random() * 10000).toFixed(0), 10),
            selected: false,
        };
        this.store.dispatch(new _store_actions_todos__WEBPACK_IMPORTED_MODULE_2__["AddOne"](item));
    };
    LocalDashboardComponent.prototype.deleteItem = function (id) {
        this.store.dispatch(new _store_actions_todos__WEBPACK_IMPORTED_MODULE_2__["Delete"](id));
    };
    LocalDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-local-dashboard',
            template: __webpack_require__(/*! ./local-dashboard.component.html */ "./src/app/modules/local/local-dashboard/local-dashboard.component.html"),
            styles: [],
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], LocalDashboardComponent);
    return LocalDashboardComponent;
}());



/***/ }),

/***/ "./src/app/modules/local/local-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/local/local-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: LocalRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalRoutingModule", function() { return LocalRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _local_dashboard_local_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-dashboard/local-dashboard.component */ "./src/app/modules/local/local-dashboard/local-dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: _local_dashboard_local_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["LocalDashboardComponent"],
    },
];
var LocalRoutingModule = /** @class */ (function () {
    function LocalRoutingModule() {
    }
    LocalRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        })
    ], LocalRoutingModule);
    return LocalRoutingModule;
}());



/***/ }),

/***/ "./src/app/modules/local/local.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/local/local.module.ts ***!
  \***********************************************/
/*! exports provided: LocalModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalModule", function() { return LocalModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _local_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local-routing.module */ "./src/app/modules/local/local-routing.module.ts");
/* harmony import */ var _local_dashboard_local_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./local-dashboard/local-dashboard.component */ "./src/app/modules/local/local-dashboard/local-dashboard.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/reducers */ "./src/app/store/reducers/index.ts");
/* harmony import */ var _shared_todos_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared.todos.module */ "./src/app/modules/shared.todos.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var LocalModule = /** @class */ (function () {
    function LocalModule() {
    }
    LocalModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _local_routing_module__WEBPACK_IMPORTED_MODULE_2__["LocalRoutingModule"],
                _shared_todos_module__WEBPACK_IMPORTED_MODULE_6__["SharedTodosModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forFeature('local', _store_reducers__WEBPACK_IMPORTED_MODULE_5__["reducers"]),
            ],
            declarations: [_local_dashboard_local_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["LocalDashboardComponent"]],
        })
    ], LocalModule);
    return LocalModule;
}());



/***/ }),

/***/ "./src/app/modules/shared.todos.module.ts":
/*!************************************************!*\
  !*** ./src/app/modules/shared.todos.module.ts ***!
  \************************************************/
/*! exports provided: SharedTodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedTodosModule", function() { return SharedTodosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/todo/todo.component */ "./src/app/components/todo/todo.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_todo_create_form_todo_create_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/todo-create-form/todo-create-form.component */ "./src/app/components/todo-create-form/todo-create-form.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var SharedTodosModule = /** @class */ (function () {
    function SharedTodosModule() {
    }
    SharedTodosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__["TodoComponent"],
                _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"],
                _components_todo_create_form_todo_create_form_component__WEBPACK_IMPORTED_MODULE_4__["TodoCreateFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]
            ],
            exports: [
                _components_todo_todo_component__WEBPACK_IMPORTED_MODULE_1__["TodoComponent"],
                _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_2__["TodoListComponent"],
                _components_todo_create_form_todo_create_form_component__WEBPACK_IMPORTED_MODULE_4__["TodoCreateFormComponent"]
            ],
            providers: [],
        })
    ], SharedTodosModule);
    return SharedTodosModule;
}());



/***/ }),

/***/ "./src/app/store/actions/todos.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/todos.ts ***!
  \****************************************/
/*! exports provided: SELECT, ADD_ONE, DELETE, Select, AddOne, Delete */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT", function() { return SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ONE", function() { return ADD_ONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Select", function() { return Select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOne", function() { return AddOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Delete", function() { return Delete; });
var SELECT = '[Todos] Select';
var ADD_ONE = '[Todos] Add';
var DELETE = '[Todos] Delete';
var Select = /** @class */ (function () {
    function Select(payload) {
        this.payload = payload;
        this.type = SELECT;
    }
    return Select;
}());

var AddOne = /** @class */ (function () {
    function AddOne(payload) {
        this.payload = payload;
        this.type = ADD_ONE;
    }
    return AddOne;
}());

var Delete = /** @class */ (function () {
    function Delete(payload) {
        this.payload = payload;
        this.type = DELETE;
    }
    return Delete;
}());



/***/ }),

/***/ "./src/app/store/reducers/index.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/index.ts ***!
  \*****************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todos */ "./src/app/store/reducers/todos.ts");

var reducers = {
    todos: _todos__WEBPACK_IMPORTED_MODULE_0__["reducer"],
};


/***/ }),

/***/ "./src/app/store/reducers/todos.ts":
/*!*****************************************!*\
  !*** ./src/app/store/reducers/todos.ts ***!
  \*****************************************/
/*! exports provided: initialLocalState, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialLocalState", function() { return initialLocalState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _actions_todos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/todos */ "./src/app/store/actions/todos.ts");

var initialLocalState = [
    {
        name: 'Local Todo',
        id: -1,
        selected: false,
    },
];
function reducer(state, action) {
    if (state === void 0) { state = initialLocalState; }
    switch (action.type) {
        case _actions_todos__WEBPACK_IMPORTED_MODULE_0__["ADD_ONE"]: {
            var newTodo = action.payload;
            return state.concat(newTodo);
        }
        case _actions_todos__WEBPACK_IMPORTED_MODULE_0__["SELECT"]: {
            var id_1 = action.payload;
            return state.map(function (item) {
                if (item.id === id_1) {
                    item.selected = !item.selected;
                }
                return item;
            });
        }
        case _actions_todos__WEBPACK_IMPORTED_MODULE_0__["DELETE"]: {
            var id_2 = action.payload;
            return state.filter(function (item) { return item.id !== id_2; });
        }
        default:
            return state;
    }
}


/***/ })

}]);
//# sourceMappingURL=modules-local-local-module.js.map
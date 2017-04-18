webpackJsonp([1,4],{

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UniqueCode; });
/**
 * Created by Tomas on 4/17/2017.
 */
var UniqueCode = (function () {
    function UniqueCode() {
    }
    // uniqueString: String = "";
    UniqueCode.uniqueCode = "";
    UniqueCode.isFound = false;
    return UniqueCode;
}());
//# sourceMappingURL=C:/Users/Tomas/IdeaProjects/conf-front/confreg-front/src/uniqueCode.js.map

/***/ }),

/***/ 377:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 377;


/***/ }),

/***/ 378:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(464);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(490);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/Users/Tomas/IdeaProjects/conf-front/confreg-front/src/main.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(595),
            styles: [__webpack_require__(545)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=C:/Users/Tomas/IdeaProjects/conf-front/confreg-front/src/app.component.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_google_recaptcha__ = __webpack_require__(484);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__registration_registration_component__["a" /* RegistrationComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6_ng2_google_recaptcha__["a" /* Ng2GoogleRecaptchaModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=C:/Users/Tomas/IdeaProjects/conf-front/confreg-front/src/app.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_services_participant_service__ = __webpack_require__(491);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation__ = __webpack_require__(565);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_validationEmail__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__uniqueCode__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegistrationComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegistrationComponent = (function () {
    function RegistrationComponent(fb, participantService) {
        this.fb = fb;
        this.participantService = participantService;
        this.submitAttempt = false;
        this.submitAccept = false;
        this.token = false;
        this.recaptchaSiteKey = '6Lf_RR0UAAAAAFnJLZEkeXmvNK6yUqFW-3V8DAsD';
        this.receiveAttempt = false;
        this.receivedEditData = false;
    }
    RegistrationComponent.prototype.onCaptchaComplete = function (response) {
        // console.log('reCAPTCHA response recieved:');
        // console.log(response.success);
        // console.log(response.token);
        if (response.success)
            this.token = response.success;
    };
    RegistrationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.fb.group({
            educationalDegree: ['Daktaras', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            firstName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            lastName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            phoneNumber: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].number])],
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
            institution: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            messageName: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            messageAuthorsAndAffiliations: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            messageSummary: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__validators_validationEmail__["a" /* UsernameValidator */].lengthOver400])],
            needsRoom: ['Ne', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            roomType: [''],
            hasEscort: ['Ne', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            escortWillParticipateInEvents: [''],
            needsBill: ['Ne', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            billInstitution: [''],
        });
    };
    RegistrationComponent.prototype.onEdit = function () {
        this.receiveAttempt = true;
        this.receivedEditData = false;
        this.participantService.getForm().subscribe(function (data) {
            if (data.educationalDegree.toString() != '') {
                this.receivedEditData = true;
            }
            console.log(data);
            this.registerForm = this.fb.group({
                educationalDegree: [data.educationalDegree, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                firstName: [data.firstName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                lastName: [data.lastName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                phoneNumber: [data.phoneNumber, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].number])],
                email: [data.email, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_ng2_validation__["CustomValidators"].email])],
                institution: [data.institution, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                messageName: [data.messageName, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                messageAuthorsAndAffiliations: [data.messageAuthorsAndAffiliations, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                messageSummary: [data.messageSummary, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_4__validators_validationEmail__["a" /* UsernameValidator */].lengthOver400])],
                needsRoom: [data.needsRoom, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                roomType: [data.roomType],
                hasEscort: [data.hasEscort, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                escortWillParticipateInEvents: [data.escortWillParticipateInEvents],
                needsBill: [data.needsBill, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
                billInstitution: [data.billInstitution],
            });
        }.bind(this));
    };
    RegistrationComponent.prototype.initSubmit = function () {
        console.log('Submit Attempt: ' + this.submitAttempt);
        this.submitAttempt = true;
    };
    RegistrationComponent.prototype.onKey = function (event) {
        __WEBPACK_IMPORTED_MODULE_5__uniqueCode__["a" /* UniqueCode */].uniqueCode = event.target.value;
    };
    RegistrationComponent.prototype.submitButtonClick = function (event) {
        if (this.registerForm.valid && this.submitAttempt && this.token) {
            //console.log(this.registerForm);
            this.participantService.insertParticipant(this.registerForm.value);
            this.submitAccept = true;
        }
        this.token = false;
    };
    RegistrationComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(596),
            styles: [__webpack_require__(546)],
            providers: [__WEBPACK_IMPORTED_MODULE_2_services_participant_service__["a" /* ParticipantService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_services_participant_service__["a" /* ParticipantService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2_services_participant_service__["a" /* ParticipantService */]) === 'function' && _b) || Object])
    ], RegistrationComponent);
    return RegistrationComponent;
    var _a, _b;
}());
//# sourceMappingURL=C:/Users/Tomas/IdeaProjects/conf-front/confreg-front/src/registration.component.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsernameValidator; });
var UsernameValidator = (function () {
    function UsernameValidator() {
    }
    UsernameValidator.lengthOver400 = function (control) {
        var wordArray = control.value.split(' ');
        if (wordArray.length >= 400)
            return { lengthOver400: true };
        return null;
    };
    return UsernameValidator;
}());
//# sourceMappingURL=C:/Users/Tomas/IdeaProjects/conf-front/confreg-front/src/validationEmail.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=C:/Users/Tomas/IdeaProjects/conf-front/confreg-front/src/environment.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(598);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_uniqueCode__ = __webpack_require__(310);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParticipantService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { UniqueCode } from 'app/registration/registration.component';
var ParticipantService = (function () {
    function ParticipantService(http) {
        this.http = http;
        this.insertDataSource = "https://confregistration-api.herokuapp.com/post";
        this.findDataSource = "https://confregistration-api.herokuapp.com/find";
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    ParticipantService.prototype.insertParticipant = function (participant) {
        var body = JSON.stringify(participant);
        return this.http.post(this.insertDataSource, body, { headers: this.headers })
            .toPromise()
            .catch(this.handleError);
    };
    ParticipantService.prototype.getForm = function () {
        var obj = { "uniqueCode": __WEBPACK_IMPORTED_MODULE_4__app_uniqueCode__["a" /* UniqueCode */].uniqueCode.toString() }; // "DAMSS-zztXlY5u"
        var body = JSON.stringify(obj);
        return this.http.post(this.findDataSource, body, { responseType: __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* ResponseContentType */].Json })
            .map(function (res) {
            return res.json();
        }).catch(this.handleError);
    };
    ParticipantService.prototype.handleError = function (error) {
        __WEBPACK_IMPORTED_MODULE_4__app_uniqueCode__["a" /* UniqueCode */].isFound = false;
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ParticipantService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], ParticipantService);
    return ParticipantService;
    var _a;
}());
//# sourceMappingURL=C:/Users/Tomas/IdeaProjects/conf-front/confreg-front/src/participant.service.js.map

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 546:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(140)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 595:
/***/ (function(module, exports) {

module.exports = "<nav id=\"subnav\">\r\n  <ul>\r\n    <li class=\"\"><b><a href=\"#\">VU</a></b></li>\r\n    <li class=\"\"><b><a href=\"#\">DAMMS</a></b></li>\r\n  </ul>\r\n</nav>\r\n\r\n<div id=\"hero\">\r\n  <h1>Registracija</h1>\r\n  <p id=\"hero-lead\"></p>\r\n</div>\r\n\r\n<app-registration></app-registration>\r\n"

/***/ }),

/***/ 596:
/***/ (function(module, exports) {

module.exports = "<div id=\"kube-component\" class=\"content\">\r\n  <form novalidate class=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"submitButtonClick($event)\">\r\n    <fieldset>\r\n      <legend>Asmenine informacija</legend>\r\n      <!--PRASIDEDA LAIPSNIS-->\r\n      <div class=\"form-item\">\r\n        <label>Mokslinis laipsnis<span class=\"req\">*</span></label>\r\n        <select formControlName=\"educationalDegree\" class=\"w50\">\r\n          <option value=\"Daktaras\" [selected]=\"true\" >Daktaras</option>\r\n          <option value=\"Profesorius\">Profesorius</option>\r\n          <option value=\"Be laipsnio\">Be laipsnio</option>\r\n        </select>\r\n      </div>\r\n      <!--BAIGIASI LAIPSNIS-->\r\n      <!--PRASIDEDA VARDAS-->\r\n      <div class=\"form-item\">\r\n        <label>Vardas<span class=\"req\">*</span>\r\n          <span class=\"hidden\" [ngClass]=\"{'error display-inline':\r\n         (registerForm.get('firstName').hasError('required') && registerForm.get('firstName').touched)\r\n         || ( submitAttempt && !registerForm.get('firstName').touched)}\">\r\n          Užpildykite teisingai lauką </span></label>\r\n        <input type=\"text\" name=\"firstName\" class=\"w50\" placeholder=\"Įveskite savo vardą..\"\r\n               formControlName=\"firstName\" [ngClass]=\"{error:\r\n               (registerForm.get('firstName').hasError('required') && registerForm.get('firstName').touched)\r\n               || ( submitAttempt && !registerForm.get('firstName').touched)}\"  required>\r\n      </div>\r\n      <!--BAIGIASI VARDAS\r\n      <!--PRASIDEDA PAVARDE-->\r\n      <div class=\"form-item\">\r\n        <label>Pavardė<span class=\"req\">*</span><span class=\"hidden\" [ngClass]=\"{'error display-inline':\r\n        (registerForm.get('lastName').hasError('required') && registerForm.get('lastName').touched)\r\n        ||  (submitAttempt && !registerForm.get('lastName').touched) }\">\r\n          Užpildykite teisingai lauką </span></label>\r\n        <input type=\"text\" name=\"lastName\" class=\"w50\" placeholder=\"Įveskite savo pavardę..\"\r\n               formControlName=\"lastName\" [ngClass]=\"{error:\r\n               (registerForm.get('lastName').hasError('required') && registerForm.get('lastName').touched)\r\n               ||  (submitAttempt && !registerForm.get('lastName').touched) }\" required>\r\n      </div>\r\n      <!--BAIGIASI PAVARDE-->\r\n      <!--PRASIDEDA TELEFONO NUMERIS-->\r\n      <div class=\"form-item\">\r\n        <label>Telefono numeris<span class=\"req\">*</span>\r\n          <span class=\"hidden\" [ngClass]=\"{'error display-inline':\r\n        (registerForm.get('phoneNumber').hasError('required') ||\r\n        registerForm.get('phoneNumber').hasError('number'))\r\n        && registerForm.get('phoneNumber').touched ||  (submitAttempt && !registerForm.get('phoneNumber').touched ) }\">\r\n          Užpildykite teisingai lauką </span></label>\r\n        <input type=\"tel\" name=\"phoneNumber\" class=\"w50\" placeholder=\"Įveskite savo telefono numerį..\"\r\n               formControlName=\"phoneNumber\" [ngClass]=\"{error: (registerForm.get('phoneNumber').hasError('required') ||\r\n               registerForm.get('phoneNumber').hasError('number'))\r\n               && registerForm.get('phoneNumber').touched\r\n              ||  (submitAttempt && ! registerForm.get('phoneNumber').touched ) }\" required>\r\n      </div>\r\n      <!--BAIGIASI TELEFONO NUMERIS-->\r\n      <!--PRASIDEDA TELEFONO NUMERIS-->\r\n      <div class=\"form-item\">\r\n        <label>Elektroninis pastas<span class=\"req\">*</span>\r\n          <span class=\"hidden\" [ngClass]=\"{'error display-inline':\r\n         (registerForm.get('email').hasError('required') ||\r\n        registerForm.get('email').hasError('email'))\r\n        && registerForm.get('email').touched ||\r\n          (submitAttempt && !registerForm.get('email').touched ) }\">\r\n          Užpildykite teisingai lauką </span></label>\r\n        <input type=\"email\" name=\"email\" class=\"w50\" placeholder=\"Įveskite savo elektroninį paštą..\"\r\n               formControlName=\"email\" [ngClass]=\"{error: (registerForm.get('email').hasError('required') ||\r\n               registerForm.get('email').hasError('email'))\r\n               && registerForm.get('email').touched ||\r\n               (submitAttempt && !registerForm.get('email').touched ) }\" required>\r\n      </div>\r\n      <!--BAIGIASI TELEFONO NUMERIS-->\r\n      <!--PRASIDEDA INSTITUCIJA-->\r\n      <div class=\"form-item\">\r\n        <label>Atstovaujama institucija<span class=\"req\">*</span>\r\n          <span class=\"hidden\" [ngClass]=\"{'error display-inline':\r\n         (registerForm.get('institution').hasError('required')\r\n        && registerForm.get('institution').touched) ||\r\n        ( submitAttempt && !registerForm.get('institution').touched) }\">\r\n          Užpildykite teisingai lauką </span></label>\r\n        <input type=\"text\" name=\"institution\" class=\"w50\" placeholder=\"Įveskite atstovaujamą instituciją..\"\r\n               formControlName=\"institution\" [ngClass]=\"{error:\r\n               (registerForm.get('institution').hasError('required') && registerForm.get('institution').touched)\r\n                ||  ( submitAttempt && !registerForm.get('institution').touched) }\" required>\r\n      </div>\r\n      <!--BAIGIASI INSTITUCIJA-->\r\n    </fieldset>\r\n\r\n\r\n    <fieldset>\r\n      <legend>Pranesimo informacija</legend>\r\n      <!--PRASIDEDA PRANESIMO PAVADINIMAS-->\r\n      <div class=\"form-item\">\r\n        <label>Pranesimo pavadinimas<span class=\"req\">*</span>\r\n          <span class=\"hidden\" [ngClass]=\"{'error display-inline':\r\n        (registerForm.get('messageName').hasError('required')\r\n        && registerForm.get('messageName').touched) ||\r\n         ( submitAttempt && !registerForm.get('messageName').touched) }\">\r\n          Užpildykite teisingai lauką </span></label>\r\n        <input type=\"text\" name=\"messageName\" class=\"w50\" placeholder=\"Įveskite savo projekto pavadinimą..\"\r\n               formControlName=\"messageName\" [ngClass]=\"{error:\r\n               (registerForm.get('messageName').hasError('required') && registerForm.get('messageName').touched)\r\n               ||  ( submitAttempt && !registerForm.get('messageName').touched)  }\" required>\r\n      </div>\r\n      <!--BAIGIASI PRANESIMO PAVADINIMAS-->\r\n      <!--PRASIDEDA PRANESIMO AUTORIAI-->\r\n      <div class=\"form-item\">\r\n        <label>Pranesimo autoriai<span class=\"req\">*</span>\r\n          <span class=\"hidden\" [ngClass]=\"{'error display-inline':\r\n        (registerForm.get('messageAuthorsAndAffiliations').hasError('required')\r\n        && registerForm.get('messageAuthorsAndAffiliations').touched) ||\r\n         ( submitAttempt && !registerForm.get('messageAuthorsAndAffiliations').touched) }\">\r\n          Užpildykite teisingai lauką </span></label>\r\n        <textarea  rows=\"6\" name=\"messageAuthorsAndAffiliations\" placeholder=\"Įveskite savo projekto autorius..\"\r\n                  formControlName=\"messageAuthorsAndAffiliations\" [ngClass]=\"{error:\r\n                   (registerForm.get('messageAuthorsAndAffiliations').hasError('required')\r\n                  && registerForm.get('messageAuthorsAndAffiliations').touched) ||\r\n                    ( submitAttempt && !registerForm.get('messageAuthorsAndAffiliations').touched) }\" required></textarea>\r\n      </div>\r\n      <!--BAIGIASI PRANESIMO AUTORIAI-->\r\n      <!--PRASIDEDA PRANESIMO SANTRAUKA-->\r\n      <div class=\"form-item\">\r\n        <label>Pranesimo santrauka<span class=\"req\">*</span>\r\n          <span class=\"hidden\" [ngClass]=\"{'error display-inline': (\r\n        registerForm.get('messageSummary').hasError('required') ||\r\n        registerForm.get('messageSummary').hasError('lengthOver400'))\r\n        && registerForm.get('messageSummary').touched || (\r\n         submitAttempt && !registerForm.get('messageSummary').touched) }\">\r\n          Užpildykite teisingai lauką - max. 400 zodziu </span></label>\r\n        <textarea rows=\"6\" name=\"messageSummary\" placeholder=\"Įveskite savo projekto santrauka..\"\r\n                  formControlName=\"messageSummary\" [ngClass]=\"{error: ( registerForm.get('messageSummary').hasError('required') ||\r\n                  registerForm.get('messageSummary').hasError('lengthOver400'))\r\n                  && registerForm.get('messageSummary').touched ||\r\n                   (submitAttempt && !registerForm.get('messageSummary').touched ) }\" required></textarea>\r\n\r\n      </div>\r\n      <!--BAIGIASI PRANESIMO SANTRAUKA-->\r\n    </fieldset>\r\n\r\n\r\n    <fieldset>\r\n      <legend>Papildoma informacija</legend>\r\n\r\n      <!--PRASIDEDA VIESBUCIO KLAUSIMAS-->\r\n      <div class=\"form-item\">\r\n        <p>Ar reikalingas viesbucio kambarys?</p>\r\n        <div class=\"form-item form-checkboxes\">\r\n          <label class=\"checkbox\"><input type=\"radio\" name=\"needsRoom\" formControlName=\"needsRoom\" value=\"Taip\">Taip</label>\r\n          <label class=\"checkbox\"><input  type=\"radio\" name=\"needsRoom\" formControlName=\"needsRoom\" value=\"Ne\"\r\n                                         [checked]=\"true\">Ne</label>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"registerForm.get('needsRoom').value.toString() == 'Taip'\" class=\"form-item extraHotel\">\r\n        <label>Viesbucio tipas</label>\r\n        <select formControlName=\"roomType\" class=\"w50\">\r\n          <option value=\"Vienvietis\" [selected]=\"true\">Vienvietis</option>\r\n          <option value=\"Dvivietis\">Dvivietis</option>\r\n          <option value=\"Kitas\">Kitas</option>\r\n        </select>\r\n      </div>\r\n      <!--BAIGIASI PRANESIMO PAVADINIMAS-->\r\n\r\n      <!--PRASIDEDA PAPILDOMO ASMENS KLAUSIMAS-->\r\n      <div class=\"form-item\">\r\n        <p>Ar bus lydinciu zmoniu?</p>\r\n        <div class=\"form-item form-checkboxes\">\r\n\r\n          <label class=\"checkbox\"><input type=\"radio\" name=\"hasEscort\" formControlName=\"hasEscort\" value=\"Taip\">Taip</label>\r\n          <label class=\"checkbox\"><input type=\"radio\" name=\"hasEscort\" formControlName=\"hasEscort\" value=\"Ne\"\r\n                                         [checked]=\"true\">Ne</label>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"registerForm.get('hasEscort').value.toString() == 'Taip'\" class=\"form-item extraPerson\">\r\n        <label>Ar dalyvaus papildomuose renginiuose?</label>\r\n        <select formControlName=\"escortWillParticipateInEvents\" class=\"w50\">\r\n          <option value=\"Taip\" [selected]=\"true\">Taip</option>\r\n          <option value=\"Ne\">Ne</option>\r\n        </select>\r\n      </div>\r\n      <!--BAIGIASI PAPILDOMO ASMENS KLAUSIMAS-->\r\n\r\n      <!--PRASIDEDA PAPILDOMAS INSTITUCIJOS KLAUSIMAS-->\r\n      <div class=\"form-item \">\r\n        <p>Ar reikalinga išankstinė sąskaitos faktūra dalyvio mokesčiui apmokėti?</p>\r\n        <div class=\"form-item form-checkboxes\">\r\n          <label class=\"checkbox\"><input type=\"radio\" name=\"needsBill\" formControlName=\"needsBill\"\r\n                                         value=\"Taip\" >Taip</label>\r\n          <label class=\"checkbox\"><input type=\"radio\" name=\"needsBill\" formControlName=\"needsBill\"\r\n                                         value=\"Ne\" [checked]=\"true\"  >Ne</label>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"registerForm.get('needsBill').value.toString() == 'Taip'\"  class=\"form-item extraPayForPerson\">\r\n        <label>Institucijos pavadinimas</label>\r\n        <input type=\"text\" name=\"billInstitution\" class=\"w50\"\r\n               formControlName=\"billInstitution\">\r\n      </div>\r\n      <!--BAIGIASI\r\n      </div> PAPILDOMAS INSTITUCIJOS KLAUSIMAS-->\r\n    </fieldset>\r\n\r\n   <ng2-google-recaptcha\r\n      style=\"margin-bottom: 20px\"\r\n      [siteKey]=\"recaptchaSiteKey\"\r\n      (onCaptchaComplete)=\"onCaptchaComplete($event)\">\r\n    </ng2-google-recaptcha>\r\n\r\n    <!--REGISTRACIJOS MYGTUKAS-->\r\n    <div class=\"row gutters\">\r\n      <div class=\"col col-6\">\r\n        <div class=\"form-item\">\r\n          <button class=\"button red\" type=\"submit\" (click)=\"initSubmit()\">Registruotis</button>\r\n        </div>\r\n      </div>\r\n      <div class=\"col col-6\">\r\n        <div class=\"form-item\">\r\n          <div class=\"append\">\r\n            <input type=\"text\"  (keyup)=\"onKey($event)\" placeholder=\"Įveskite savo gautą kodą..\">\r\n            <button class=\"button red outline\" (click)=\"onEdit()\"><i class=\"kube-search\"></i> Redaguoti formą</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    <!--REGISTRACIJOS MYGTUKAS-->\r\n    <div class=\"form-item form-buttons\">\r\n      <div *ngIf=\"registerForm.invalid && submitAttempt \" class=\"message error\" data-component=\"message\">\r\n        Suveskite duomenis teisingai!  </div>\r\n      <div *ngIf=\"!token && submitAttempt && !submitAccept \" class=\"message error\" data-component=\"message\">\r\n        Užpildykite Captcha!  </div>\r\n      <div *ngIf=\"!receivedEditData && receiveAttempt\" class=\"message error\" data-component=\"message\">\r\n        Nėra tokio kodo!  </div>\r\n      <div *ngIf=\"registerForm.valid && submitAttempt && submitAccept && token \" class=\"message success\" data-component=\"message\">\r\n        Sveikiname. Sėkmingai užsiregistravote! </div>\r\n      <button type=\"submit\" (click)=\"initSubmit();\"\r\n      >Registruotis</button>\r\n    </div>\r\n\r\n    </div>\r\n  </form>\r\n</div>\r\n\r\n<!--[disabled]=\"registerForm.invalid\"-->\r\n\r\n"

/***/ }),

/***/ 871:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(378);


/***/ })

},[871]);
//# sourceMappingURL=main.bundle.js.map
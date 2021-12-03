(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! A:\Proyectos\Javascript\Angular\hospitalChatBot\src\main.ts */"zUnb");


/***/ }),

/***/ "4L7F":
/*!*****************************************************************************************!*\
  !*** ./src/app/modules/chat/appointment-assignment/appointment-assignment.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: AppointmentAssignmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppointmentAssignmentComponent", function() { return AppointmentAssignmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/chat.service */ "sjK5");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "SVse");





function AppointmentAssignmentComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " No hay solicitudes pendientes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppointmentAssignmentComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.errorMessage, " ");
} }
function AppointmentAssignmentComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Se guardaron los datos correctamente. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppointmentAssignmentComponent_form_10_div_2_option_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const doctor_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", doctor_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](doctor_r8);
} }
function AppointmentAssignmentComponent_form_10_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Datos del usuario");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Dni");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nombres");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Apellidos");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Entidad de salud");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Url asignaci\u00F3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Datos de la cita");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Asignada");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Id");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Especialista");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppointmentAssignmentComponent_form_10_div_2_Template_select_change_42_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r6 = ctx.index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r9.assign(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, AppointmentAssignmentComponent_form_10_div_2_option_43_Template, 2, 2, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "label", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Fecha y hora");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function AppointmentAssignmentComponent_form_10_div_2_Template_input_change_47_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10); const i_r6 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.assign(i_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.doctors);
} }
function AppointmentAssignmentComponent_form_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppointmentAssignmentComponent_form_10_div_2_Template, 48, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r3.frm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.appointments.controls);
} }
class AppointmentAssignmentComponent {
    constructor(chatService, fb) {
        this.chatService = chatService;
        this.fb = fb;
        this._appointmentsFull = [];
        this._appointments = [];
        this.errorMessage = '';
        this.success = false;
        this.doctors = [
            'Carlos Matiz',
            'Rafael Enrique Conde Camacho',
            'Juan Pablo Rodríguez Gallego'
        ];
        this.frm = this.fb.group({
            appointments: this.fb.array([])
        });
    }
    ngOnInit() {
        this.getAppointments();
    }
    save() {
        this.getAssignedObject();
        this.chatService.saveAppointments(this._appointmentsFull).subscribe(res => {
            if (res.success) {
                this.getAppointments();
                this.success = true;
                setTimeout(() => {
                    this.success = false;
                }, 5000);
            }
        });
    }
    get appointments() {
        return this.frm.get('appointments');
    }
    addAppointment(appointment) {
        const appointForm = this.fb.group({
            id: [{ value: appointment.id, disabled: true }],
            firstName: [{ value: appointment.user.firstName, disabled: true }],
            lastName: [{ value: appointment.user.lastName, disabled: true }],
            dni: [{ value: appointment.user.dni, disabled: true }],
            entity: [{ value: appointment.user.entity, disabled: true }],
            url: [{ value: appointment.user.url, disabled: true }],
            date: [{ value: appointment.date, disabled: appointment.assigned }],
            doctorName: [{ value: appointment.doctorName, disabled: appointment.assigned }],
            assigned: [{ value: appointment.assigned, disabled: true }]
        });
        this.appointments.push(appointForm);
    }
    getAppointments() {
        this._appointments = [];
        this._appointmentsFull = [];
        this.appointments.clear();
        this.chatService.getAppointments().subscribe((appointments) => {
            this._appointmentsFull = appointments;
            this._appointments = appointments.filter(a => !a.assigned);
            this._appointments.forEach(appointment => {
                this.addAppointment(appointment);
            });
        });
    }
    assign(id) {
        var _a;
        const control = (_a = this.appointments.get(id.toString())) === null || _a === void 0 ? void 0 : _a.get('assigned');
        control.setValue(true);
        control.disable();
    }
    getAssignedObject() {
        const appointments = this.frm.getRawValue().appointments;
        appointments.forEach(appointment => {
            const ap = this._appointmentsFull.find(a => a.id === appointment.id);
            if (ap && appointment.assigned) {
                if (appointment.date && appointment.doctorName) {
                    ap['assigned'] = true;
                    ap['date'] = appointment.date;
                    ap['doctorName'] = appointment.doctorName;
                }
                else {
                    this.errorMessage = `Debe asignar una fecha y un doctor a la solicitud #${ap.id}`;
                    this.success = false;
                    setTimeout(() => {
                        this.errorMessage = '';
                    }, 6000);
                }
            }
        });
    }
}
AppointmentAssignmentComponent.ɵfac = function AppointmentAssignmentComponent_Factory(t) { return new (t || AppointmentAssignmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"])); };
AppointmentAssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppointmentAssignmentComponent, selectors: [["app-appointment-assignment"]], decls: 11, vars: 4, consts: [[1, "container"], [1, "row"], [1, "col-12"], [1, "btn", "btn-primary", 3, "click"], ["class", "alert alert-warning mt-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-danger mt-3", "role", "alert", 4, "ngIf"], ["class", "alert alert-success mt-3", "role", "alert", 4, "ngIf"], [3, "formGroup", 4, "ngIf"], ["role", "alert", 1, "alert", "alert-warning", "mt-3"], ["role", "alert", 1, "alert", "alert-danger", "mt-3"], ["role", "alert", 1, "alert", "alert-success", "mt-3"], [3, "formGroup"], ["formArrayName", "appointments"], ["class", "card p-3 mt-3", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "card", "p-3", "mt-3", 3, "formGroupName"], [1, "col-4"], [1, "form-label"], ["type", "text", "formControlName", "dni", 1, "form-control"], ["type", "text", "formControlName", "firstName", 1, "form-control"], ["type", "text", "formControlName", "lastName", 1, "form-control"], ["type", "text", "formControlName", "entity", 1, "form-control"], ["type", "text", "formControlName", "url", 1, "form-control"], [1, "form-check"], ["type", "checkbox", "formControlName", "assigned", 1, "form-check-input"], [1, "form-check-label"], ["type", "text", "formControlName", "id", 1, "form-control", 3, "disabled"], ["formControlName", "doctorName", 1, "form-control", "form-select", 3, "change"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "datetime-local", "formControlName", "date", 1, "form-control", 3, "change"], [3, "value"]], template: function AppointmentAssignmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Asignaci\u00F3n de citas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppointmentAssignmentComponent_Template_button_click_5_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Guardar ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AppointmentAssignmentComponent_div_7_Template, 2, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AppointmentAssignmentComponent_div_8_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AppointmentAssignmentComponent_div_9_Template, 2, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AppointmentAssignmentComponent_form_10_Template, 3, 2, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", (ctx._appointments == null ? null : ctx._appointments.length) === 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.success && !ctx.errorMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.frm);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["CheckboxControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"]], styles: [".table[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%] {\n  width: 100px;\n}\n\n.table[_ngcontent-%COMP%]   input[type=datetime-local][_ngcontent-%COMP%] {\n  width: 150px;\n}\n\n.card[_ngcontent-%COMP%] {\n  background-color: #f8f8f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jaGF0L2FwcG9pbnRtZW50LWFzc2lnbm1lbnQvYXBwb2ludG1lbnQtYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NoYXQvYXBwb2ludG1lbnQtYXNzaWdubWVudC9hcHBvaW50bWVudC1hc3NpZ25tZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gIHdpZHRoOiAxMDBweDtcclxufVxyXG5cclxuLnRhYmxlIGlucHV0W3R5cGU9ZGF0ZXRpbWUtbG9jYWxde1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppointmentAssignmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-appointment-assignment',
                templateUrl: './appointment-assignment.component.html',
                styleUrls: ['./appointment-assignment.component.scss']
            }]
    }], function () { return [{ type: _services_chat_service__WEBPACK_IMPORTED_MODULE_1__["ChatService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'https://shrouded-temple-16899.herokuapp.com'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "CgF7":
/*!*********************************************!*\
  !*** ./src/app/modules/chat/chat.module.ts ***!
  \*********************************************/
/*! exports provided: ChatModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatModule", function() { return ChatModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chat-dialog/chat-dialog.component */ "xict");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_directives_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/directives/scroll-to-bottom.directive */ "ooi6");
/* harmony import */ var _appointment_assignment_appointment_assignment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./appointment-assignment/appointment-assignment.component */ "4L7F");







class ChatModule {
}
ChatModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ChatModule });
ChatModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ChatModule_Factory(t) { return new (t || ChatModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ChatModule, { declarations: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ChatDialogComponent"], src_app_directives_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_4__["ScrollToBottomDirective"], _appointment_assignment_appointment_assignment_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentAssignmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]], exports: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ChatDialogComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ChatDialogComponent"], src_app_directives_scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_4__["ScrollToBottomDirective"], _appointment_assignment_appointment_assignment_component__WEBPACK_IMPORTED_MODULE_5__["AppointmentAssignmentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
                ],
                exports: [_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ChatDialogComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "Ll1u":
/*!******************************************!*\
  !*** ./src/app/helpers/stringHelpers.ts ***!
  \******************************************/
/*! exports provided: formatString */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatString", function() { return formatString; });
function formatString(str, ...val) {
    for (let index = 0; index < val.length; index++) {
        str = str.replace(`{${index}}`, val[index]);
    }
    return str;
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");



const _c0 = function () { return ["/bot"]; };
const _c1 = function () { return ["btn-primary"]; };
const _c2 = function () { return ["/assignment"]; };
class AppComponent {
    constructor() {
        this.title = 'hospitalChatBot';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 8, consts: [[1, "nav", "justify-content-center"], [1, "nav-link", "btn", 3, "routerLink", "routerLinkActive"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Bot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Asignaci\u00F3n de citas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["a.nav-link[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 1.5rem;\n  margin-right: 10px;\n  border: 1px solid #ccc;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uYnRuLXByaW1hcnkge1xyXG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _modules_chat_chat_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/chat/chat.module */ "CgF7");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "IheW");







class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _modules_chat_chat_module__WEBPACK_IMPORTED_MODULE_4__["ChatModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _modules_chat_chat_module__WEBPACK_IMPORTED_MODULE_4__["ChatModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _modules_chat_chat_module__WEBPACK_IMPORTED_MODULE_4__["ChatModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ooi6":
/*!**********************************************************!*\
  !*** ./src/app/directives/scroll-to-bottom.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToBottomDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToBottomDirective", function() { return ScrollToBottomDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");


class ScrollToBottomDirective {
    constructor(_el) {
        this._el = _el;
    }
    scrollToBottom() {
        const el = this._el.nativeElement;
        el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
    }
}
ScrollToBottomDirective.ɵfac = function ScrollToBottomDirective_Factory(t) { return new (t || ScrollToBottomDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ScrollToBottomDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ScrollToBottomDirective, selectors: [["", "scrollToBottom", ""]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollToBottomDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[scrollToBottom]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();


/***/ }),

/***/ "sjK5":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "IheW");





class ChatService {
    constructor(http) {
        this.http = http;
        this.URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].url;
    }
    saveAppointmentRequest(user, id, callback) {
        const subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.getAppointments().subscribe(res => {
            const appointments = res || [];
            appointments.push({
                id,
                user,
                date: null,
                doctorName: null,
                assigned: false
            });
            return this.saveAppointments(appointments).subscribe(saved => { console.log(saved); callback(); });
        });
    }
    saveAppointments(appointments) {
        return this.http.post(`${this.URL}/save`, appointments);
    }
    getAppointments() {
        return this.http.get(this.URL + '/appointments');
    }
    getNextId() {
        const subject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        let nextId = 999;
        this.getAppointments().subscribe(res => {
            const appointments = res || [];
            appointments.forEach(appointment => {
                if (appointment.id > nextId) {
                    nextId = appointment.id;
                }
            });
            subject$.next(nextId + 1);
        });
        return subject$.asObservable();
    }
}
ChatService.ɵfac = function ChatService_Factory(t) { return new (t || ChatService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ChatService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ChatService, factory: ChatService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ChatService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "iInd");
/* harmony import */ var _modules_chat_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/chat/chat-dialog/chat-dialog.component */ "xict");
/* harmony import */ var _modules_chat_appointment_assignment_appointment_assignment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/chat/appointment-assignment/appointment-assignment.component */ "4L7F");






const routes = [
    {
        path: 'assignment',
        component: _modules_chat_appointment_assignment_appointment_assignment_component__WEBPACK_IMPORTED_MODULE_3__["AppointmentAssignmentComponent"],
    },
    {
        path: 'bot', component: _modules_chat_chat_dialog_chat_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ChatDialogComponent"],
    },
    {
        path: '', pathMatch: 'full', redirectTo: 'bot'
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "xict":
/*!*******************************************************************!*\
  !*** ./src/app/modules/chat/chat-dialog/chat-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ChatDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatDialogComponent", function() { return ChatDialogComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "SVse");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "s7LF");
/* harmony import */ var src_app_helpers_stringHelpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/helpers/stringHelpers */ "Ll1u");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/chat.service */ "sjK5");








const _c0 = ["scrolledChat"];
function ChatDialogComponent_div_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function ChatDialogComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ChatDialogComponent_div_8_div_1_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const message_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](message_r2.div1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", message_r2.isBot);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](message_r2.div2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](message_r2.div3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](message_r2.text);
} }
class ChatDialogComponent {
    constructor(fb, chatService, datePipe) {
        this.fb = fb;
        this.chatService = chatService;
        this.datePipe = datePipe;
        this.user = {};
        this.nextId = 999;
        this.frm = this.fb.group({ response: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required] });
        this.messages = [];
        this.messagesTemplates = [
            'Se realizó correctamente la solicitud para el paciente {0} con número de identificación {1}.',
            'Puede consultar la solicitud realizada con el número {0}',
            'Adios. 🙋‍♂️',
            'La solicitud hecha por {0} con el número de identificación {1} fue asignada con el especialista {2} en la fecha {3}',
        ];
        this.states0 = [
            {
                id: '0',
                desctiption: 'Estado inicial para seleccionar el contexto',
                text: [
                    'Hola, ¿te puedo ayudar en algo?',
                    '- Solicitar cita',
                    '- Consultar cita',
                ],
                res: '',
                prevStateId: '',
                nextStateId: '',
            },
            {
                id: '1',
                desctiption: 'Pide los nombres',
                text: ['¿Cuáles son tus nombres?'],
                res: '',
                prevStateId: '0',
                nextStateId: '2',
                userProp: 'firstName',
            },
            {
                id: '2',
                desctiption: 'Pide los apellidos',
                text: ['¿Cuáles son tus apellidos?'],
                res: '',
                prevStateId: '1',
                nextStateId: '3',
                userProp: 'lastName',
            },
            {
                id: '3',
                desctiption: 'Pide el dni',
                text: ['¿Cuál es tu número de identificación?'],
                res: '',
                prevStateId: '2',
                nextStateId: '4',
                userProp: 'dni',
            },
            {
                id: '4',
                desctiption: 'Pide la entidad de salud',
                text: ['¿Cuál es tu entidad de salud?'],
                res: '',
                prevStateId: '3',
                nextStateId: '5',
                userProp: 'entity',
            },
            {
                id: '5',
                desctiption: 'Pide la URL',
                text: ['¿Cuál es la URL para el alojamiento de la remisión?'],
                res: '',
                prevStateId: '4',
                nextStateId: '6',
                userProp: 'url',
            },
            {
                id: '6',
                desctiption: 'Mensaje final de creación',
                text: [],
                res: '',
                prevStateId: '5',
                nextStateId: '0',
                userProp: '',
                end: true,
            },
        ];
        this.states1 = [
            {
                id: '0',
                desctiption: 'Estado inicial para seleccionar el contexto',
                text: [
                    'Hola, ¿te puedo ayudar en algo?',
                    '- Solicitar cita',
                    '- Consultar cita',
                ],
                res: '',
                prevStateId: '',
                nextStateId: '',
            },
            {
                id: '1',
                desctiption: 'Solicita el identificador para buscar la solicitud',
                text: [
                    'Ingrese el identificador de la consulta que se le asignó al realizar la solicitud.',
                ],
                res: '',
                prevStateId: '0',
                nextStateId: '2',
            },
            {
                id: '2',
                desctiption: 'Muestra la información de la solicitud hecha',
                text: [''],
                res: '',
                prevStateId: '0',
                nextStateId: '2',
                end: true,
            },
        ];
    }
    ngOnInit() {
        this.initConfig();
    }
    ngAfterViewChecked() {
        this.scrollToBottom();
    }
    initConfig() {
        this.asignQueryId();
        this.user = {};
        this.context = null;
        this.actualState = this.states0[0];
        this.addMessage(this.actualState.text, true);
    }
    saveAppointmentRequest(user, id) {
        this.chatService.saveAppointmentRequest(user, id, () => {
            this.chatService.getNextId().subscribe((next) => {
                this.nextId = next;
            });
        });
    }
    request() {
        if (this.frm.valid) {
            this.context ? this.nextRequestHandler() : this.firstRequestHandler();
            this.frm.reset();
        }
    }
    firstRequestHandler() {
        const contextRes = this.frm.get('response').value;
        this.addMessage([contextRes], false);
        let isCreationRequest;
        if (contextRes.toUpperCase() === 'SOLICITAR CITA') {
            isCreationRequest = true;
        }
        else if (contextRes.toUpperCase() === 'CONSULTAR CITA') {
            isCreationRequest = false;
        }
        else {
            this.addMessage(['Lo siento, no entiendo lo que quieres decir.'], true);
            return;
        }
        this.context = {
            id: isCreationRequest ? '0' : '1',
            description: isCreationRequest ? 'Creación de cita' : 'Consulta de cita',
            states: isCreationRequest ? this.states0 : this.states1,
        };
        this.changeState('1');
        this.addMessage(this.actualState.text, true);
    }
    nextRequestHandler() {
        const stateRes = this.frm.get('response').value;
        this.addMessage([stateRes], false);
        this.stateHandler(this.context, this.actualState, stateRes);
    }
    changeState(stateId) {
        if (!stateId || stateId === '0') {
            stateId = '0';
            this.resetContext();
            return;
        }
        this.actualState = this.context.states.find((state) => state.id === stateId);
    }
    toNextState() {
        var _a, _b;
        this.changeState(this.actualState.nextStateId);
        if (((_a = this.context) === null || _a === void 0 ? void 0 : _a.id) === '0') {
            this.createAppointmentHandler();
        }
        else if (((_b = this.context) === null || _b === void 0 ? void 0 : _b.id) === '1') {
            if (this.actualState.id === '2') {
                this.chatService.getAppointments().subscribe((res) => {
                    this.getAppointmentStatus(res);
                });
            }
        }
    }
    createAppointmentHandler() {
        if (this.actualState.id === '6') {
            const name = this.user.firstName + ' ' + this.user.lastName;
            const dni = this.user.dni;
            const id = this.nextId;
            this.actualState.text = [
                Object(src_app_helpers_stringHelpers__WEBPACK_IMPORTED_MODULE_3__["formatString"])(this.messagesTemplates[0], name, dni),
                Object(src_app_helpers_stringHelpers__WEBPACK_IMPORTED_MODULE_3__["formatString"])(this.messagesTemplates[1], id === null || id === void 0 ? void 0 : id.toString()),
                this.messagesTemplates[2],
            ];
            this.saveAppointmentRequest(this.user, id);
        }
    }
    getAppointmentStatus(res) {
        var _a;
        const queryId = this.states1.find((s) => s.id === '1').res;
        const appointment = res.find((a) => a.id === Number(queryId));
        if (appointment) {
            const isAssigned = appointment.assigned;
            const userName = appointment.user.firstName + ' ' + appointment.user.lastName;
            const id = appointment.user.dni;
            const doctor = appointment.doctorName;
            const date = appointment.date ? this.datePipe.transform(new Date(appointment.date), 'dd/MM/yyy HH:mm:s') : '';
            this.actualState.text = [
                isAssigned
                    ? Object(src_app_helpers_stringHelpers__WEBPACK_IMPORTED_MODULE_3__["formatString"])(this.messagesTemplates[3], userName, id, doctor, date)
                    : 'La solicitud aún se encuentra en trámite.',
                this.messagesTemplates[2],
            ];
        }
        else {
            this.actualState.text = [
                'No existe un trámite con el identificador dado.'
            ];
        }
        this.addMessage(this.actualState.text, true);
        if ((_a = this.actualState) === null || _a === void 0 ? void 0 : _a.end) {
            this.initConfig();
        }
    }
    resetContext() {
        this.context = null;
    }
    getResponse() {
        return this.frm.get('response').value;
    }
    addMessage(text, isBot) {
        text === null || text === void 0 ? void 0 : text.forEach((t) => {
            this.messages.push({
                text: t,
                isBot,
                div1: isBot ? 'user-incoming_msg' : '',
                div2: isBot ? 'received_msg' : 'outgoing_msg',
                div3: isBot ? 'received_withd_msg' : 'sent_msg',
            });
        });
        this.scrollToBottom();
    }
    scrollToBottom() {
        try {
            this.scrolledChat.nativeElement.scrollTop =
                this.scrolledChat.nativeElement.scrollHeight;
        }
        catch (_a) { }
    }
    stateHandler(context, state, response) {
        var _a, _b;
        this.actualState.res = response;
        if (context.id === '0') {
            if (state.userProp) {
                this.user[this.actualState.userProp] = this.actualState.res =
                    this.getResponse();
                console.log(this.user);
            }
            this.toNextState();
            this.addMessage((_a = this.actualState) === null || _a === void 0 ? void 0 : _a.text, true);
            if ((_b = this.actualState) === null || _b === void 0 ? void 0 : _b.end) {
                this.initConfig();
            }
        }
        else if (context.id === '1') {
            this.toNextState();
        }
    }
    asignQueryId() {
        this.chatService.getNextId().subscribe((id) => {
            this.nextId = id;
        });
    }
}
ChatDialogComponent.ɵfac = function ChatDialogComponent_Factory(t) { return new (t || ChatDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"])); };
ChatDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ChatDialogComponent, selectors: [["app-chat-dialog"]], viewQuery: function ChatDialogComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.scrolledChat = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]])], decls: 14, vars: 2, consts: [[1, "container", 3, "formGroup"], [1, "text-center"], [1, "messaging", "w-70"], [1, ""], [1, "msg_history", "p-3"], ["scrolledChat", ""], [3, "class", 4, "ngFor", "ngForOf"], [1, "type_msg"], [1, "input_msg_write"], ["formControlName", "response", "type", "text", "placeholder", "Solicitar cita...", 1, "write_msg", 3, "keyup.enter"], ["type", "button", 1, "msg_send_btn", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane-o"], ["class", "incoming_msg_img", 4, "ngIf"], [1, "incoming_msg_img"], ["src", "./assets/img/chatbot-data.png", "alt", "sunil"]], template: function ChatDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Bot de solicitud para citas");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, ChatDialogComponent_div_8_Template, 6, 8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup.enter", function ChatDialogComponent_Template_input_keyup_enter_11_listener() { return ctx.request(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ChatDialogComponent_Template_button_click_12_listener() { return ctx.request(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.frm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.messages);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"]], styles: [".container[_ngcontent-%COMP%] {\n  max-width: 1170px;\n  margin: auto;\n}\n\nimg[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.inbox_people[_ngcontent-%COMP%] {\n  background: #f8f8f8 none repeat scroll 0 0;\n  float: left;\n  overflow: hidden;\n  width: 40%;\n  border-right: 1px solid #c4c4c4;\n}\n\n.inbox_msg[_ngcontent-%COMP%] {\n  border: 1px solid #c4c4c4;\n  clear: both;\n  overflow: hidden;\n}\n\n.top_spac[_ngcontent-%COMP%] {\n  margin: 20px 0 0;\n}\n\n.recent_heading[_ngcontent-%COMP%] {\n  float: left;\n  width: 40%;\n}\n\n.srch_bar[_ngcontent-%COMP%] {\n  display: inline-block;\n  text-align: right;\n  width: 60%;\n}\n\n.headind_srch[_ngcontent-%COMP%] {\n  padding: 10px 29px 10px 20px;\n  overflow: hidden;\n  border-bottom: 1px solid #c4c4c4;\n}\n\n.recent_heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #05728f;\n  font-size: 21px;\n  margin: auto;\n}\n\n.srch_bar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border: 1px solid #cdcdcd;\n  border-width: 0 0 1px 0;\n  width: 80%;\n  padding: 2px 0 4px 6px;\n  background: none;\n}\n\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  padding: 0;\n  color: #707070;\n  font-size: 18px;\n}\n\n.srch_bar[_ngcontent-%COMP%]   .input-group-addon[_ngcontent-%COMP%] {\n  margin: 0 0 0 -27px;\n}\n\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #464646;\n  margin: 0 0 8px 0;\n}\n\n.chat_ib[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 13px;\n  float: right;\n}\n\n.chat_ib[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #989898;\n  margin: auto;\n}\n\n.chat_img[_ngcontent-%COMP%] {\n  float: left;\n  width: 11%;\n}\n\n.chat_ib[_ngcontent-%COMP%] {\n  float: left;\n  padding: 0 0 0 15px;\n  width: 88%;\n}\n\n.chat_people[_ngcontent-%COMP%] {\n  overflow: hidden;\n  clear: both;\n}\n\n.chat_list[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #c4c4c4;\n  margin: 0;\n  padding: 18px 16px 10px;\n}\n\n.inbox_chat[_ngcontent-%COMP%] {\n  height: 550px;\n  overflow-y: scroll;\n}\n\n.active_chat[_ngcontent-%COMP%] {\n  background: #ebebeb;\n}\n\n.incoming_msg_img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 40px;\n}\n\n.received_msg[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 0 0 10px;\n  vertical-align: top;\n  width: 92%;\n}\n\n.received_withd_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #ebebeb none repeat scroll 0 0;\n  border-radius: 3px;\n  color: #646464;\n  font-size: 14px;\n  margin: 0;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n\n.time_date[_ngcontent-%COMP%] {\n  color: #747474;\n  display: block;\n  font-size: 12px;\n  margin: 8px 0 0;\n}\n\n.received_withd_msg[_ngcontent-%COMP%] {\n  width: 57%;\n}\n\n.mesgs[_ngcontent-%COMP%] {\n  float: left;\n  padding: 30px 15px 0 25px;\n  width: 60%;\n}\n\n.sent_msg[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  background: #05728f none repeat scroll 0 0;\n  border-radius: 3px;\n  font-size: 14px;\n  margin: 0;\n  color: #fff;\n  padding: 5px 10px 5px 12px;\n  width: 100%;\n}\n\n.outgoing_msg[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 26px 0 26px;\n}\n\n.sent_msg[_ngcontent-%COMP%] {\n  float: right;\n  width: 46%;\n}\n\n.input_msg_write[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: rgba(0, 0, 0, 0) none repeat scroll 0 0;\n  border: medium none;\n  color: #4c4c4c;\n  font-size: 15px;\n  min-height: 48px;\n  width: 100%;\n  background-color: #f9f9f9;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 10px;\n}\n\n.type_msg[_ngcontent-%COMP%] {\n  border-top: 1px solid #c4c4c4;\n  position: relative;\n}\n\n.msg_send_btn[_ngcontent-%COMP%] {\n  background: #05728f none repeat scroll 0 0;\n  border: medium none;\n  border-radius: 50%;\n  color: #fff;\n  cursor: pointer;\n  font-size: 17px;\n  height: 33px;\n  position: absolute;\n  right: 0;\n  top: 11px;\n  width: 33px;\n}\n\n.messaging[_ngcontent-%COMP%] {\n  padding: 0 0 50px 0;\n}\n\n.msg_history[_ngcontent-%COMP%] {\n  height: 516px;\n  overflow-y: auto;\n  background-color: #f8f8f8;\n  border: 1px solid #eee;\n}\n\n.user-incoming_msg[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jaGF0L2NoYXQtZGlhbG9nL2NoYXQtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQVcsaUJBQUE7RUFBa0IsWUFBQTtBQUc3Qjs7QUFGQTtFQUFLLGVBQUE7QUFNTDs7QUFMQTtFQUNFLDBDQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUFZLCtCQUFBO0FBU2Q7O0FBUEE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQVVGOztBQVJBO0VBQVcsZ0JBQUE7QUFZWDs7QUFUQTtFQUFpQixXQUFBO0VBQWEsVUFBQTtBQWM5Qjs7QUFiQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0FBZ0JGOztBQWRBO0VBQWUsNEJBQUE7RUFBNkIsZ0JBQUE7RUFBaUIsZ0NBQUE7QUFvQjdEOztBQWxCQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQXFCRjs7QUFuQkE7RUFBaUIseUJBQUE7RUFBMEIsdUJBQUE7RUFBd0IsVUFBQTtFQUFXLHNCQUFBO0VBQXVCLGdCQUFBO0FBMkJyRzs7QUExQkE7RUFDRSxtREFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FBNkJGOztBQTNCQTtFQUErQixtQkFBQTtBQStCL0I7O0FBN0JBO0VBQWEsZUFBQTtFQUFnQixjQUFBO0VBQWUsaUJBQUE7QUFtQzVDOztBQWxDQTtFQUFrQixlQUFBO0VBQWdCLFlBQUE7QUF1Q2xDOztBQXRDQTtFQUFZLGVBQUE7RUFBZ0IsY0FBQTtFQUFlLFlBQUE7QUE0QzNDOztBQTNDQTtFQUNFLFdBQUE7RUFDQSxVQUFBO0FBOENGOztBQTVDQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUErQ0Y7O0FBNUNBO0VBQWMsZ0JBQUE7RUFBaUIsV0FBQTtBQWlEL0I7O0FBaERBO0VBQ0UsZ0NBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7QUFtREY7O0FBakRBO0VBQWMsYUFBQTtFQUFlLGtCQUFBO0FBc0Q3Qjs7QUFwREE7RUFBYyxtQkFBQTtBQXdEZDs7QUF0REE7RUFDRSxxQkFBQTtFQUNBLFdBQUE7QUF5REY7O0FBdkRBO0VBQ0UscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtBQTBERjs7QUF4REM7RUFDQywwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsMEJBQUE7RUFDQSxXQUFBO0FBMkRGOztBQXpEQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUE0REY7O0FBMURBO0VBQXNCLFVBQUE7QUE4RHRCOztBQTdEQTtFQUNFLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFVBQUE7QUFnRUY7O0FBN0RDO0VBQ0MsMENBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQVcsV0FBQTtFQUNYLDBCQUFBO0VBQ0EsV0FBQTtBQWlFRjs7QUEvREE7RUFBZSxnQkFBQTtFQUFpQixtQkFBQTtBQW9FaEM7O0FBbkVBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7QUFzRUY7O0FBcEVBO0VBQ0UsbURBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtBQXVFRjs7QUFwRUE7RUFBVyw2QkFBQTtFQUE4QixrQkFBQTtBQXlFekM7O0FBeEVBO0VBQ0UsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBMkVGOztBQXpFQTtFQUFhLG1CQUFBO0FBNkViOztBQTVFQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7QUErRUY7O0FBNUVBO0VBQ0UsbUJBQUE7QUErRUYiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NoYXQvY2hhdC1kaWFsb2cvY2hhdC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye21heC13aWR0aDoxMTcwcHg7IG1hcmdpbjphdXRvO31cclxuaW1neyBtYXgtd2lkdGg6MTAwJTt9XHJcbi5pbmJveF9wZW9wbGUge1xyXG4gIGJhY2tncm91bmQ6ICNmOGY4Zjggbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICBmbG9hdDogbGVmdDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA0MCU7IGJvcmRlci1yaWdodDoxcHggc29saWQgI2M0YzRjNDtcclxufVxyXG4uaW5ib3hfbXNnIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnRvcF9zcGFjeyBtYXJnaW46IDIwcHggMCAwO31cclxuXHJcblxyXG4ucmVjZW50X2hlYWRpbmcge2Zsb2F0OiBsZWZ0OyB3aWR0aDo0MCU7fVxyXG4uc3JjaF9iYXIge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICB3aWR0aDogNjAlO1xyXG59XHJcbi5oZWFkaW5kX3NyY2h7IHBhZGRpbmc6MTBweCAyOXB4IDEwcHggMjBweDsgb3ZlcmZsb3c6aGlkZGVuOyBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjYzRjNGM0O31cclxuXHJcbi5yZWNlbnRfaGVhZGluZyBoNCB7XHJcbiAgY29sb3I6ICMwNTcyOGY7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG4uc3JjaF9iYXIgaW5wdXR7IGJvcmRlcjoxcHggc29saWQgI2NkY2RjZDsgYm9yZGVyLXdpZHRoOjAgMCAxcHggMDsgd2lkdGg6ODAlOyBwYWRkaW5nOjJweCAwIDRweCA2cHg7IGJhY2tncm91bmQ6bm9uZTt9XHJcbi5zcmNoX2JhciAuaW5wdXQtZ3JvdXAtYWRkb24gYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uc3JjaF9iYXIgLmlucHV0LWdyb3VwLWFkZG9uIHsgbWFyZ2luOiAwIDAgMCAtMjdweDt9XHJcblxyXG4uY2hhdF9pYiBoNXsgZm9udC1zaXplOjE1cHg7IGNvbG9yOiM0NjQ2NDY7IG1hcmdpbjowIDAgOHB4IDA7fVxyXG4uY2hhdF9pYiBoNSBzcGFueyBmb250LXNpemU6MTNweDsgZmxvYXQ6cmlnaHQ7fVxyXG4uY2hhdF9pYiBweyBmb250LXNpemU6MTRweDsgY29sb3I6Izk4OTg5ODsgbWFyZ2luOmF1dG99XHJcbi5jaGF0X2ltZyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDExJTtcclxufVxyXG4uY2hhdF9pYiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgcGFkZGluZzogMCAwIDAgMTVweDtcclxuICB3aWR0aDogODglO1xyXG59XHJcblxyXG4uY2hhdF9wZW9wbGV7IG92ZXJmbG93OmhpZGRlbjsgY2xlYXI6Ym90aDt9XHJcbi5jaGF0X2xpc3Qge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjYzRjNGM0O1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAxOHB4IDE2cHggMTBweDtcclxufVxyXG4uaW5ib3hfY2hhdCB7IGhlaWdodDogNTUwcHg7IG92ZXJmbG93LXk6IHNjcm9sbDt9XHJcblxyXG4uYWN0aXZlX2NoYXR7IGJhY2tncm91bmQ6I2ViZWJlYjt9XHJcblxyXG4uaW5jb21pbmdfbXNnX2ltZyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG59XHJcbi5yZWNlaXZlZF9tc2cge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAwIDAgMCAxMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgd2lkdGg6IDkyJTtcclxuIH1cclxuIC5yZWNlaXZlZF93aXRoZF9tc2cgcCB7XHJcbiAgYmFja2dyb3VuZDogI2ViZWJlYiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICBjb2xvcjogIzY0NjQ2NDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDVweCAxMHB4IDVweCAxMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi50aW1lX2RhdGUge1xyXG4gIGNvbG9yOiAjNzQ3NDc0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDhweCAwIDA7XHJcbn1cclxuLnJlY2VpdmVkX3dpdGhkX21zZyB7IHdpZHRoOiA1NyU7fVxyXG4ubWVzZ3Mge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBhZGRpbmc6IDMwcHggMTVweCAwIDI1cHg7XHJcbiAgd2lkdGg6IDYwJTtcclxufVxyXG5cclxuIC5zZW50X21zZyBwIHtcclxuICBiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW46IDA7IGNvbG9yOiNmZmY7XHJcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDEycHg7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4ub3V0Z29pbmdfbXNneyBvdmVyZmxvdzpoaWRkZW47IG1hcmdpbjoyNnB4IDAgMjZweDt9XHJcbi5zZW50X21zZyB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIHdpZHRoOiA0NiU7XHJcbn1cclxuLmlucHV0X21zZ193cml0ZSBpbnB1dCB7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwKSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIGJvcmRlcjogbWVkaXVtIG5vbmU7XHJcbiAgY29sb3I6ICM0YzRjNGM7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQ4cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLnR5cGVfbXNnIHtib3JkZXItdG9wOiAxcHggc29saWQgI2M0YzRjNDtwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG4ubXNnX3NlbmRfYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjMDU3MjhmIG5vbmUgcmVwZWF0IHNjcm9sbCAwIDA7XHJcbiAgYm9yZGVyOiBtZWRpdW0gbm9uZTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBoZWlnaHQ6IDMzcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMTFweDtcclxuICB3aWR0aDogMzNweDtcclxufVxyXG4ubWVzc2FnaW5nIHsgcGFkZGluZzogMCAwIDUwcHggMDt9XHJcbi5tc2dfaGlzdG9yeSB7XHJcbiAgaGVpZ2h0OiA1MTZweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcclxufVxyXG5cclxuLnVzZXItaW5jb21pbmdfbXNnIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ChatDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-chat-dialog',
                templateUrl: './chat-dialog.component.html',
                styleUrls: ['./chat-dialog.component.scss'],
                providers: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"]]
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_0__["DatePipe"] }]; }, { scrolledChat: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['scrolledChat']
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "8Y7J");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "cUpR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
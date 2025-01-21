"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_router_1 = require("vue-router");
var router = (0, vue_router_1.createRouter)({
    history: (0, vue_router_1.createWebHistory)(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: function () { return Promise.resolve().then(function () { return require('../views/home/HomeView.vue'); }); },
        },
        {
            path: '/students/add',
            name: 'addstudent',
            component: function () { return Promise.resolve().then(function () { return require('../views/students/AddStudentView.vue'); }); },
        },
        {
            path: '/students',
            name: 'students',
            component: function () { return Promise.resolve().then(function () { return require('../views/students/ListStudentView.vue'); }); },
        },
        {
            path: '/students/:id',
            name: 'getstudent',
            component: function () { return Promise.resolve().then(function () { return require('../views/students/GetStudentView.vue'); }); },
        },
        {
            path: '/connection',
            name: 'connection',
            component: function () { return Promise.resolve().then(function () { return require('../views/ConnectionView.vue'); }); },
        },
        {
            path: '/courses',
            name: 'courses',
            component: function () { return Promise.resolve().then(function () { return require('../views/Courses/CoursesView.vue'); }); },
        },
        {
            path: '/courses/new',
            name: 'newCourses',
            component: function () { return Promise.resolve().then(function () { return require('../views/Courses/NewCoursesView.vue'); }); },
        },
        {
            path: '/courses/edit/:id',
            name: 'editCourses',
            component: function () { return Promise.resolve().then(function () { return require('../views/Courses/EditCoursesView.vue'); }); },
        }
    ],
});
exports.default = router;

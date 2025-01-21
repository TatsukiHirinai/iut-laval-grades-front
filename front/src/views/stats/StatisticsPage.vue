<script setup lang="ts">

import DropdownMenu from '../stats/DropdownMenu.vue';
import StatFrameList from '../stats/StatFrameList.vue';
import { ref, onMounted } from 'vue';
const apiurl = import.meta.env.VITE_API_URL;

const coursesList = ref<string[]>([]);
const studentsList = ref<string[]>([]);

const display1 = ref([
  { title: 'Moyenne générale', text1: '-1', text2: 'Moyenne de toutes les notes' },
  { title: "Nombre d'étudiants", text1: '-1', text2: 'Total des étudiants inscrits' },
  { title: 'Nombre de cours', text1: '-1', text2: 'Total des cours disponibles' },
  { title: 'Taux de réussite', text1: '-1%', text2: 'Taux de réussite moyen' }
]);

const display2 = ref([
  { title: 'Moyenne du Cours', text1: '-1', text2: 'Moyenne des notes obtenues' },
  { title: "Note Minimale", text1: '-1', text2: 'Note la plus basse' },
  { title: 'Note Maximale', text1: '-1', text2: 'Note la plus haute' },
  { title: 'Taux de Réussite', text1: '-1%', text2: 'Pourcentage de réussite' }
]);

const display3 = ref([
  { title: 'Crédits Validés', text1: '-1', text2: 'Moyenne de toutes les notes' },
  { title: "Nombre de Cours", text1: '-1', text2: 'Total des étudiants inscrits' },
  { title: 'Semestre S3', text1: '-1', text2: 'Total des cours disponibles' },
  { title: 'Semestre S4', text1: '-1%', text2: 'Taux de réussite moyen' }
]);

let studentsFetched: { id: number; firstName: string; lastName: string; studentId: string }[] = [];
async function fetchData() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
    };
    try {
        const response = await fetch('https://'+apiurl+'/api/courses', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

async function fetchStudents() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
    };
    try {
        const response = await fetch('https://'+apiurl+'/api/students', requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}
function getCurrentSchoolYear(): string {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // Les mois sont indexés à partir de 0

    // L'année scolaire commence en septembre et se termine en août
    if (currentMonth >= 9) {
        // Si nous sommes en septembre ou plus tard, l'année scolaire est de l'année en cours à l'année suivante
        return `${currentYear}-${currentYear + 1}`;
    } else {
        // Si nous sommes avant septembre, l'année scolaire est de l'année précédente à l'année en cours
        return `${currentYear - 1}-${currentYear}`;
    }
}
async function fetchGlobalData() {
    const requestOptions = {
        method: 'GET',
        headers: { 
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
    };
    try {
        const date = getCurrentSchoolYear();
        const response = await fetch(`https://`+apiurl+`/api/stats/global?academicYear=${date}`, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}
async function fetchStudentData(studentId: string) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
    };
    try {
        const date = getCurrentSchoolYear();

        const response = await fetch(`https://`+apiurl+`/api/stats/student/${studentId}?academicYear=${date}`, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}
async function fetchCourseData(courseId: string) {
    const requestOptions = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
    };
    try {
        const date = getCurrentSchoolYear();

        const response = await fetch(`https://`+apiurl+`/api/stats/student/${courseId}?academicYear=${date}`, requestOptions);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        return null;
    }
}

async function handleStudentSelection(payload: { option: string; menuType: string }) {
    const studentName = payload.option; // Extraire le nom de l'étudiant depuis l'objet
    console.log('Nom à trouver :', studentName);

    // Rechercher l'étudiant en combinant `firstName` et `lastName`
    const selectedStudent = studentsFetched.find(student => 
        `${student.firstName} ${student.lastName}` === studentName
    );
    console.log('Étudiant correspondant trouvé :', selectedStudent);

    if (selectedStudent && selectedStudent.id) {
        const studentData = await fetchStudentData(selectedStudent.id.toString());
        if (studentData) {
            console.log('Données de l\'étudiant :', studentData);
            //display3.value = [
            //    { title: 'Crédits Validés', text1: studentData.creditsEarned.toString(), text2: 'Crédits validés par l\'étudiant' },
            //    { title: "Nombre de Cours", text1: studentData.totalCourses.toString(), text2: 'Nombre de cours suivis' },
            //    { title: 'Semestre S3', text1: studentData.semester3Average.toString(), text2: 'Moyenne du Semestre 3' },
            //    { title: 'Semestre S4', text1: studentData.semester4Average.toString(), text2: 'Moyenne du Semestre 4' }
            //];
        } else {
            console.error('Aucune donnée trouvée pour cet étudiant');
        }
    } else {
        console.error('Étudiant introuvable ou ID manquant');
    }
}
onMounted(async () => {
    const courses = await fetchData();
    if (Array.isArray(courses)) {
        coursesList.value = courses.map((course: any) => course.name); // Assuming the course object has a 'name' property
    } else {
        console.error('Courses data is not an array:', courses);
    }

    const globalData = await fetchGlobalData();
    if (globalData) {
        console.log('Global data:', globalData);
        display1.value = [
          { title: 'Moyenne générale', text1: globalData.globalAverage !== null ? globalData.globalAverage.toString() : 'N/A', text2: 'Moyenne de toutes les notes' },
          { title: "Nombre d'étudiants", text1: globalData.totalStudents !== null ? globalData.totalStudents.toString() : 'N/A', text2: 'Total des étudiants inscrits' },
          { title: 'Nombre de cours', text1: globalData.totalCourses !== null ? globalData.totalCourses.toString() : 'N/A', text2: 'Total des cours disponibles' },
          { title: 'Taux de réussite', text1: globalData.averageSuccessRate !== null ? globalData.averageSuccessRate.toString() : 'N/A', text2: 'Taux de réussite moyen' }
        ];
    } else {
        console.error('No global data received');
    }

    const students = await fetchStudents();
if (Array.isArray(students)) {
    studentsFetched = students;
    console.log("les etu", studentsFetched);
    studentsList.value = students.map((student: any) => `${student.firstName} ${student.lastName}`);
} else {
    console.error('Students data is not an array:', students);
}
});

</script>

<template>
  <header>
  </header>
  <StatFrameList :cards=display1></StatFrameList>
  <h2>Stats par cours</h2>
  <DropdownMenu :options=coursesList menuType="courses" @select="handleStudentSelection"></DropdownMenu>
  <StatFrameList :cards=display2></StatFrameList>
  <h2>Stats par étudiants</h2>
  <StatFrameList :cards=display3></StatFrameList>

  <DropdownMenu :options="studentsList" menuType="students" @select="handleStudentSelection"></DropdownMenu>
</template>

<style scoped>
.frame-list {
  width: 100%;  
  box-sizing: border-box; 
}
</style>
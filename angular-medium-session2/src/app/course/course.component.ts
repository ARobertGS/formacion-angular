import { Component, OnInit } from "@angular/core";
import { CourseUI } from "./models/course.ui";

@Component({
    selector: 'everis-course',
    templateUrl: './course.component.html',
    styleUrls: ['./course.component.scss'],
})

export class CourseComponent implements OnInit {
    ngOnInit() {
        this.getCourses();
    }

    courseList: CourseUI[] = [];

    getCourses() {
        this.courseList = [
            {
                id: 1,
                name: 'Angular Basico',
                dateInit: new Date(2021, 5 ,1),
                dateEnd: new Date(2021, 5 ,30),
                days: 'Lunes, Miercoles y Viernes',
                hoursPerDay: 3,
                courseDetail: `Introduccion a Angular 
                Manejo de directivas
                Manejo de Pipes
                Manejo de Componentes`,
                price: 1200.50
            },
            {
                id: 2,
                name: 'Angular Intermedio',
                dateInit: new Date(2021, 6 ,1),
                dateEnd: new Date(2021, 6 ,30),
                days: 'Lunes, Miercoles y Viernes',
                hoursPerDay: 3,
                courseDetail: `Angular Intermedio 
                Manejo de directivas personalizadas
                Manejo de Pipes personalizados
                Manejo de Inputs y Outputs
                Manejo de Inputs y Outputs
                Manejo de Inputs y Outputs
                Manejo de Inputs y Outputs`,
                price: 1800.50
            }
        ];
    }
}
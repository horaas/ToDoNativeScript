import { Component } from '@angular/core';
import * as dialogs from 'tns-core-modules/ui/dialogs';
import { Modelo } from './modelo';
@Component({
    selector: 'ns-todo',
    moduleId: module.id,
    templateUrl: './todo.component.html',
    styleUrls: ['./todo.component.css']
})
export class TodoComponent {
    public title: string = 'Total: ';
    public tasks: Modelo[];
    public newTask: Modelo;
    public valor: any = 'default';
    public selectAll: boolean = true;
    public prueba: any[];

    constructor() {
        this.tasks = [
            {
                id: 0,
                task: 'tarea1',
                state: 'progress'
            },
            {
                id: 1,
                task: 'tarea2',
                state: 'progress'
            },
            {
                id: 2,
                task: 'tarea3',
                state: 'progress'
            },
            {
                id: 3,
                task: 'tarea4',
                state: 'progress'
            },
            {
                id: 4,
                task: 'tarea4',
                state: 'progress'
            }
        ];
    }

    removeTask(event) {
        this.tasks = this.tasks.filter(value => value.id !== event);

        this.tasks = this.tasks.map((task, index) => {
            task.id = index;
            return task;
        });
    }

    addNewTask() {
        dialogs.prompt({
            title: 'Add new task',
            okButtonText: 'Add Task',
            inputType: dialogs.inputType.text
        }).then((target) => {
            if (target.text) {
                this.newTask = {
                    id: this.tasks.length,
                    task: target.text,
                    state: 'progress'
                };
                this.tasks.push(this.newTask);
            }
        });
    }
    selectTask(event, index) {
        if (event.value) {
            this.tasks[index].state = 'complete';
        } else {
            this.tasks[index].state = 'progress';
        }
    }

    removeTaskCompleted() {
        this.tasks = this.tasks.filter(value => value.state === 'progress');
    }

    selectAlltasks() {
        if (this.selectAll) {

            this.tasks = this.tasks.map(task => {
                task.state = 'complete';
                return task;
            });
            this.selectAll = false;

        } else {

            this.tasks = this.tasks.map(task => {
                task.state = 'progress';
                return task;
            });
            this.selectAll = true;

        }
    }
}
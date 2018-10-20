"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var dialogs = require("tns-core-modules/ui/dialogs");
var TodoComponent = /** @class */ (function () {
    function TodoComponent() {
        this.title = 'Total: ';
        this.valor = 'default';
        this.selectAll = true;
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
    TodoComponent.prototype.removeTask = function (event) {
        this.tasks = this.tasks.filter(function (value) { return value.id !== event; });
        this.tasks = this.tasks.map(function (task, index) {
            task.id = index;
            return task;
        });
    };
    TodoComponent.prototype.addNewTask = function () {
        var _this = this;
        dialogs.prompt({
            title: 'Add new task',
            okButtonText: 'Add Task',
            inputType: dialogs.inputType.text
        }).then(function (target) {
            if (target.text) {
                _this.newTask = {
                    id: _this.tasks.length,
                    task: target.text,
                    state: 'progress'
                };
                _this.tasks.push(_this.newTask);
            }
        });
    };
    TodoComponent.prototype.selectTask = function (event, index) {
        if (event.value) {
            this.tasks[index].state = 'complete';
        }
        else {
            this.tasks[index].state = 'progress';
        }
    };
    TodoComponent.prototype.removeTaskCompleted = function () {
        this.tasks = this.tasks.filter(function (value) { return value.state === 'progress'; });
    };
    TodoComponent.prototype.selectAlltasks = function () {
        if (this.selectAll) {
            this.tasks = this.tasks.map(function (task) {
                task.state = 'complete';
                return task;
            });
            this.selectAll = false;
        }
        else {
            this.tasks = this.tasks.map(function (task) {
                task.state = 'progress';
                return task;
            });
            this.selectAll = true;
        }
    };
    TodoComponent = __decorate([
        core_1.Component({
            selector: 'ns-todo',
            moduleId: module.id,
            templateUrl: './todo.component.html',
            styleUrls: ['./todo.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], TodoComponent);
    return TodoComponent;
}());
exports.TodoComponent = TodoComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kby5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2RvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEwQztBQUMxQyxxREFBdUQ7QUFRdkQ7SUFRSTtRQVBPLFVBQUssR0FBVyxTQUFTLENBQUM7UUFHMUIsVUFBSyxHQUFRLFNBQVMsQ0FBQztRQUN2QixjQUFTLEdBQVksSUFBSSxDQUFDO1FBSTdCLElBQUksQ0FBQyxLQUFLLEdBQUc7WUFDVDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsVUFBVTthQUNwQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxVQUFVO2FBQ3BCO1lBQ0Q7Z0JBQ0ksRUFBRSxFQUFFLENBQUM7Z0JBQ0wsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsS0FBSyxFQUFFLFVBQVU7YUFDcEI7WUFDRDtnQkFDSSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxJQUFJLEVBQUUsUUFBUTtnQkFDZCxLQUFLLEVBQUUsVUFBVTthQUNwQjtZQUNEO2dCQUNJLEVBQUUsRUFBRSxDQUFDO2dCQUNMLElBQUksRUFBRSxRQUFRO2dCQUNkLEtBQUssRUFBRSxVQUFVO2FBQ3BCO1NBQ0osQ0FBQztJQUNOLENBQUM7SUFFRCxrQ0FBVSxHQUFWLFVBQVcsS0FBSztRQUNaLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsRUFBRSxLQUFLLEtBQUssRUFBbEIsQ0FBa0IsQ0FBQyxDQUFDO1FBRTVELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSztZQUNwQyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssQ0FBQztZQUNoQixNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFVLEdBQVY7UUFBQSxpQkFlQztRQWRHLE9BQU8sQ0FBQyxNQUFNLENBQUM7WUFDWCxLQUFLLEVBQUUsY0FBYztZQUNyQixZQUFZLEVBQUUsVUFBVTtZQUN4QixTQUFTLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJO1NBQ3BDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQyxNQUFNO1lBQ1gsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsS0FBSSxDQUFDLE9BQU8sR0FBRztvQkFDWCxFQUFFLEVBQUUsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNO29CQUNyQixJQUFJLEVBQUUsTUFBTSxDQUFDLElBQUk7b0JBQ2pCLEtBQUssRUFBRSxVQUFVO2lCQUNwQixDQUFDO2dCQUNGLEtBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0Qsa0NBQVUsR0FBVixVQUFXLEtBQUssRUFBRSxLQUFLO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO1FBQ3pDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN6QyxDQUFDO0lBQ0wsQ0FBQztJQUVELDJDQUFtQixHQUFuQjtRQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFLLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBMUIsQ0FBMEIsQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCxzQ0FBYyxHQUFkO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7WUFFakIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFFM0IsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBRUosSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxVQUFBLElBQUk7Z0JBQzVCLElBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDO2dCQUN4QixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFMUIsQ0FBQztJQUNMLENBQUM7SUE3RlEsYUFBYTtRQU56QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFNBQVM7WUFDbkIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7WUFDcEMsU0FBUyxFQUFFLENBQUMsc0JBQXNCLENBQUM7U0FDdEMsQ0FBQzs7T0FDVyxhQUFhLENBOEZ6QjtJQUFELG9CQUFDO0NBQUEsQUE5RkQsSUE4RkM7QUE5Rlksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzJztcbmltcG9ydCB7IE1vZGVsbyB9IGZyb20gJy4vbW9kZWxvJztcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbnMtdG9kbycsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogJy4vdG9kby5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJy4vdG9kby5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgVG9kb0NvbXBvbmVudCB7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmcgPSAnVG90YWw6ICc7XG4gICAgcHVibGljIHRhc2tzOiBNb2RlbG9bXTtcbiAgICBwdWJsaWMgbmV3VGFzazogTW9kZWxvO1xuICAgIHB1YmxpYyB2YWxvcjogYW55ID0gJ2RlZmF1bHQnO1xuICAgIHB1YmxpYyBzZWxlY3RBbGw6IGJvb2xlYW4gPSB0cnVlO1xuICAgIHB1YmxpYyBwcnVlYmE6IGFueVtdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICAgICAgdGFzazogJ3RhcmVhMScsXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdwcm9ncmVzcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgdGFzazogJ3RhcmVhMicsXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdwcm9ncmVzcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgdGFzazogJ3RhcmVhMycsXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdwcm9ncmVzcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgdGFzazogJ3RhcmVhNCcsXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdwcm9ncmVzcydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgdGFzazogJ3RhcmVhNCcsXG4gICAgICAgICAgICAgICAgc3RhdGU6ICdwcm9ncmVzcydcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTtcbiAgICB9XG5cbiAgICByZW1vdmVUYXNrKGV2ZW50KSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZS5pZCAhPT0gZXZlbnQpO1xuXG4gICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLm1hcCgodGFzaywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIHRhc2suaWQgPSBpbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0YXNrO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhZGROZXdUYXNrKCkge1xuICAgICAgICBkaWFsb2dzLnByb21wdCh7XG4gICAgICAgICAgICB0aXRsZTogJ0FkZCBuZXcgdGFzaycsXG4gICAgICAgICAgICBva0J1dHRvblRleHQ6ICdBZGQgVGFzaycsXG4gICAgICAgICAgICBpbnB1dFR5cGU6IGRpYWxvZ3MuaW5wdXRUeXBlLnRleHRcbiAgICAgICAgfSkudGhlbigodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LnRleHQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1Rhc2sgPSB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnRhc2tzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgdGFzazogdGFyZ2V0LnRleHQsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiAncHJvZ3Jlc3MnXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzLnB1c2godGhpcy5uZXdUYXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNlbGVjdFRhc2soZXZlbnQsIGluZGV4KSB7XG4gICAgICAgIGlmIChldmVudC52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy50YXNrc1tpbmRleF0uc3RhdGUgPSAnY29tcGxldGUnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50YXNrc1tpbmRleF0uc3RhdGUgPSAncHJvZ3Jlc3MnO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlVGFza0NvbXBsZXRlZCgpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKHZhbHVlID0+IHZhbHVlLnN0YXRlID09PSAncHJvZ3Jlc3MnKTtcbiAgICB9XG5cbiAgICBzZWxlY3RBbGx0YXNrcygpIHtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0QWxsKSB7XG5cbiAgICAgICAgICAgIHRoaXMudGFza3MgPSB0aGlzLnRhc2tzLm1hcCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICB0YXNrLnN0YXRlID0gJ2NvbXBsZXRlJztcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFzaztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RBbGwgPSBmYWxzZTtcblxuICAgICAgICB9IGVsc2Uge1xuXG4gICAgICAgICAgICB0aGlzLnRhc2tzID0gdGhpcy50YXNrcy5tYXAodGFzayA9PiB7XG4gICAgICAgICAgICAgICAgdGFzay5zdGF0ZSA9ICdwcm9ncmVzcyc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QWxsID0gdHJ1ZTtcblxuICAgICAgICB9XG4gICAgfVxufSJdfQ==
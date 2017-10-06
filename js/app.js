var app = new Vue({
    el: '#app',
    data: {
        newTask: "",
        today: new Date().toLocaleDateString(),
        todos: [],
        today_tasks: 3,
        //hints on individuals task action buttons
        hint_complete: 'Mark this task as completed',
        hint_edit: 'Edit this task',
        hint_delete: 'Delete this task'
    },
    methods: {
        addTask: function () {
            var task = this.newTask.trim();
            if (task) {
                this.todos.push({
                    text: task
                });
                this.newTask = '';
                toastr.success('New task added to the task list !!!')
            }
        },
        removeTask: function(todo){
            var index = this.todos.indexOf(todo);
            this.tasks.splice(index, 1);
        }
    }
});

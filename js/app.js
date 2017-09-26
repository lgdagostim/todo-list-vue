var app = new Vue({
    el: '#app',
    data: {
        today: new Date().toLocaleDateString(),
        todos: [
        { text: 'task 01 example' },
        { text: 'task 02 example' },
        { text: 'task 03 example' }
        ],
        //hints on individuals task action buttons
        hint_complete: 'Mark this task as completed',
        hint_edit: 'Edit this task',
        hint_delete: 'Delete this task'
    },
    methods: {
        add: function(){
            this.todos.push({text: 'task'});
        }
    }
});
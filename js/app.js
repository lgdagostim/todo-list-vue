var app = new Vue({
    el: '#app',
    data: {
        today: new Date().toLocaleDateString(),
        todos: [
        { text: 'task 01 example' },
        { text: 'task 02 example' },
        { text: 'task 03 example' }
        ]
    },
    methods: {
        add: function(){
            this.todos.push({text: 'task'});
        }
    }
});
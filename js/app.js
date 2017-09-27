var app = new Vue({
    el: '#app',
    data: {
        today: new Date().toLocaleDateString(),
        todos: [
            { text: 'task 01 example' },
            { text: 'task 02 example' },
            { text: 'task 03 example' }
        ],
        today_tasks: 3,
        //hints on individuals task action buttons
        hint_complete: 'Mark this task as completed',
        hint_edit: 'Edit this task',
        hint_delete: 'Delete this task'
    }
});
/*
$(document).ready(function(){
    $('#btn_menu').click(function(){
        if ($('#menu_items').is(':visible')){
            $('#menu_items').hide(1000);
        }else{
            $('#menu_items').show(1000);
        }
    })
})
*/
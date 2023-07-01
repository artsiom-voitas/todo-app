export function getTodos(setTodos) {
    fetch('https://dummyjson.com/todos')
        .then((res) => res.json())
        .then((res) => setTodos(res.todos));
}

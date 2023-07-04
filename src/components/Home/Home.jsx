import { useSelector } from 'react-redux';
import CreateTodoField from '../CreateTodoField/';
import TodoItems from '../TodoItems';

function Home() {
    const todos = useSelector((state) => state['todos']);

    return (
        <div className={'mb-20'}>
            <h1 className={'sm:text-2xl text-xl font-bold mb-10 text-center'}>Your To-Do List</h1>
            <CreateTodoField />
            {todos.length >= 1 && <TodoItems />}
        </div>
    );
}

export default Home;

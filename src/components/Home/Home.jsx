import CreateTodoField from '../CreateTodoField/';
import TodoItems from '../TodoItems';

function Home() {
    return (
        <div className={'mb-20'}>
            <h1 className={'sm:text-2xl text-xl font-bold mb-10 text-center'}>Your To-Do List</h1>
            <CreateTodoField />
            <TodoItems />
        </div>
    );
}

export default Home;

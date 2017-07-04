import { ADD_TODO, LIKES, DELETE_ITEM } from './actions';

const initialState = {
    todoList: [
        {
            id: 1,
            name: 'Todo - 1',
            liked: false
        }
    ],
    error: ''
};

function homeReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            let todoList = state.todoList;
            if (!action.error) {
                todoList.push({ id: action.id, name: action.name, liked: false });
            }
            return Object.assign({}, state, {
                error: action.error,
                todoList
            });
        break;
        case LIKES:
            todoList = state.todoList;
            const id = todoList.findIndex(element => element.id === action.item.id);
            state.todoList[id].liked = action.liked;
            return Object.assign({}, state, { todoList: state.todoList });
        break;
        case DELETE_ITEM:
            todoList = state.todoList;
            if (!action.error) {
                const idSort = todoList.filter(element => element.id !== action.item.id);
                return Object.assign({}, state, { todoList: idSort, error: action.error });
            }
            return Object.assign({}, state, { todoList, error: action.error });
        break;
        default:
            return state;
    }
}

const HomeReducer = {
    home: homeReducer
};

export default HomeReducer;

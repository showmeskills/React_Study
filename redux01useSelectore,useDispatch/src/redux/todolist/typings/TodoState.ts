// interface TodoItem {
//     id: number;
//     title: string;
//     isCompleted: boolean;
// }
type TodoItem = {
    id: number;
    title: string;
    isCompleted: boolean;
}
export interface Todos{
    todos:Array<TodoItem>;
}




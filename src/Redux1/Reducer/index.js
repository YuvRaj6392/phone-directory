function rootReducer(state={taskList:[]},action)
{
switch(action.type)
{
    case 'add_task':
        const tempTaskList=[...state,action.payload];
        return {
            taskList:tempTaskList
        }
}
}

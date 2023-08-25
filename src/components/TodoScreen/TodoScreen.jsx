import * as React from "react";
import { TodoCreateForm, TodoFrame } from '../../ui-components';
import { listTodos } from '../../graphql/queries';

const TodoScreen = () => {
    return (
        <div>
            <div style={{width: '33%'}}>
                <TodoCreateForm/>
            </div>
            <div style={{paddingLeft: '30px'}}>
                <TodoFrame todo={{name: "Laundry", description: "Do laundry"}}/>
            </div>
        </div>
    );
};

export default TodoScreen;
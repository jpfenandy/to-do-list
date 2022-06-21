import React, { useState } from "react";

function App() {
    const [todoList, setTodoList] = useState([]);
    const [form, setForm] = useState({
        todo: '',
        status: false
    })

    const resetInput = () => {
        setForm({
            todo: '',
            status: false
        })
    }

    const handleChange = (e) => {
        setForm({
            ...form,
            todo: e.target.value,
            status: false
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (form.index || form.index === 0){
            const newTodo = todoList.map((e,i) => {
                if (i === form.index) {
                    return form;
                } else {
                    return e;
                }
            })
            setTodoList(newTodo);
        } else {
            setTodoList([
                ...todoList, form
            ]);
        }
        resetInput();
    }

    const handleCheck = (index) => {
        const newTodo = todoList.map((e, i) => {
            if (i === index){
                return {
                    todo: e.todo,
                    status: true
                }
            } else {
                return e;
            }
        });
        setTodoList(newTodo);
    }

    const handleDelete = (index) => {
        const newTodo = todoList.filter((e,i) => {
            if (i !== index){
                return e;
            }
        });
        setTodoList(newTodo);
    }

    const handleEdit = (index) => {
        const detailTodo = {
            index,
            ...todoList[index]
        }
        setForm(detailTodo);
    }

    return(
        <div>
            <div className="flex flex-col justify-center items-center bg-red-900 pb-4">
                <h1 className='font-mono text-4xl font-bold uppercase py-2.5 text-white'>My ToDo List</h1>
                <form method="post" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        className="input-md mr-3 w-60" 
                        placeholder="Add Todo"
                        value={form.todo}
                        onChange={handleChange}
                    />
                    <button
                        type="submit"
                        className="btn btn-sm bg-blue-500 hover:bg-blue-400"
                    >Add Task</button>
                </form>
            </div>

            <div className="flex flex-col items-center justify-center" name="content">
                {todoList.map((e, i) => (
                    <div key={i} className="w-7/12 border-2 border-slate-400 p-5 rounded-md mt-4 flex flex-row" name="card">
                        <div className={`flex-1 ${e.status === true ? 'line-through decoration-5 text-black/50 decoration-red-500' : ''}`} name="text">
                            {e.todo}
                        </div>
                        <div className="flex-3" name="button-action">
                            <button 
                                className={"btn btn-xs mr-0.5 bg-green-500 hover:bg-green-400"}
                                onClick={() => handleCheck(i)
                            }>Done!</button>
                            <button className="btn btn-xs mr-0.5 bg-yellow-500 hover:bg-yellow-400" onClick={() => handleEdit(i)}>Edit</button>
                            <button className="btn btn-xs bg-red-500 hover:bg-red-400" onClick={() => handleDelete(i)}>Delete</button>
                        </div>
                    </div>
                ))}

                
            </div>
        </div>
    );
}

export default App;
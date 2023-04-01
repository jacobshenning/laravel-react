import TaskFormCreateTask from "@/Pages/Projects/Partials/TaskFormCreateTask";
import TaskListItem from "@/Pages/Projects/Partials/TaskListItem";
import {useState} from "react";

export default function TaskList({ status }) {

    const [tasks, setTasks] = useState(status.tasks);

    const addTask = (status_id, model) => {
        if (status_id !== status.id) {
            return;
        }

        setTasks([...tasks, model]);
    }

    const updateTask = (model) => {
        let task = tasks.filter((t) => t.id === model.id);
        if (! task.length) {
            return;
        }
        task = task[0];
        for (const modelKey in model) {
            task[modelKey] = model[modelKey];
        }
        let other_tasks = tasks.filter((t) => t.id !== t.id);
        setTasks(other_tasks);
        setTasks([...other_tasks, task]);
    }

    if (typeof window !== 'undefined') {
        window.Echo.private('App.Models.Task')
            .listen('.TaskCreated', (e) => addTask(e.model.status_id, e.model))
            .listen('.TaskUpdated', (e) => updateTask(e.model));
    }

    return (
        <div className="grid grid-cols-1 divide-y">

            {
                tasks.map((task) => {
                    return <TaskListItem key={task.id} task={task} status={status} />
                })
            }

            <TaskFormCreateTask status={status} />

        </div>
    );
}

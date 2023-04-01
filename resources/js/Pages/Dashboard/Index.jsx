import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';
import { Link, useForm, usePage } from '@inertiajs/react';
import Task from "@/Pages/Dashboard/Partials/Task";
import {useState} from "react";

export default function Index() {

    const [tasks, setTasks] = useState(usePage().props.tasks);
    const current_user = usePage().props.current_user;

    const addTask = ((user_id, data) => {
        if (current_user.id !== user_id) {
            return;
        }

        setTasks([...tasks, data]);
    });

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
            .listen('.TaskCreated', (e) => addTask(e.model.user.id, e.model))
            .listen('.TaskUpdated', (e) => updateTask(e.model));
    }

    return (
        <AppLayout
            header={<h2 className="text-3xl font-bold tracking-tight text-gray-900">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="overflow-hidden bg-white shadow sm:rounded-lg mb-5">

                <div className="px-4 py-5 sm:px-6">
                    <h3 className="font-semibold leading-8 text-gray-900 mb-2">My tasks</h3>

                    {tasks.map((task) => {
                        return <Task key={task.id} task={task} status={task.status} />
                    })}

                </div>
            </div>
        </AppLayout>
    );
}

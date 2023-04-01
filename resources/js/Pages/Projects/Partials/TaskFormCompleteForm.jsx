

import TaskFormCreateTask from "@/Pages/Projects/Partials/TaskFormCreateTask";
import TaskListItem from "@/Pages/Projects/Partials/TaskListItem";
import {useForm} from "@inertiajs/react";
import {useRef} from "react";

export default function TaskFormCompleteForm({ task }) {

    const { data, setData, errors, put, reset, processing } = useForm();

    const completeInput = useRef();

    const toggleTaskComplete = (e) => {
        e.preventDefault();

        put(route('tasks.toggle', task.id), {
            preserveScroll: true
        })
    }

    return (
        <>
            <input id="checked" name="checked" type="checkbox"
                   checked={task.complete}
                   ref={completeInput}
                   onChange={toggleTaskComplete}
                   className="cursor-pointer h-4 w-4 mr-2 rounded border-gray-300 text-sky-600 focus:ring-sky-600" />
        </>
    );
}

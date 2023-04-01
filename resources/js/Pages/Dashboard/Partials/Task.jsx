import TaskFormCreateTask from "@/Pages/Projects/Partials/TaskFormCreateTask";
import {useRef, useState} from "react";
import Modal from "@/Components/Modal";
import {useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";
import PrimaryButton from "@/Components/PrimaryButton";
import CommentList from "@/Pages/Projects/Partials/CommentList";
import TaskFormCompleteForm from "@/Pages/Projects/Partials/TaskFormCompleteForm";

export default function Task({ status, task }) {
    const [viewingTask, setViewingTask] = useState(false);
    const [editMode, setEditMode] = useState(false);
    const users = usePage().props.users;
    const projects = usePage().props.projects;

    let project = null;

    for (let i = 0; i < projects.length; i++) {
        if (task.status.project.id === projects[i].id) {
            project = projects[i];
        }
    }

    const openModal = () => {
        setViewingTask(true);
    };

    const closeModal = () => {
        setViewingTask(false);
    };

    const toggleEditMode = () => {
        setEditMode(! editMode);
    }

    const { data, setData, errors, patch, reset, processing } = useForm({
        name: task.name,
        description: task.description,
        due: task.due,
        complete: task.complete,
        status_id: task.status_id,
        user_id: task.user_id
    });

    const nameInput = useRef();
    const descriptionInput = useRef();
    const userInput = useRef();
    const dueInput = useRef();
    const statusInput = useRef();

    const submit = (e) => {
        e.preventDefault();

        patch(route('tasks.update', task.id), {
            preserveScroll: true,
            onSuccess: () => {
                reset()

                toggleEditMode()
            },
            onError: (errors) => {
                if (errors.name) {
                    reset('name');
                    nameInput.current.focus();
                }

                if (errors.description) {
                    reset('description');
                    descriptionInput.current.focus();
                }

                if (errors.user_id) {
                    reset('user_id');
                    userInput.current.focus();
                }

                if (errors.due) {
                    reset('due');
                    dueInput.current.focus();
                }
            }
        })

    };


    return (
        <>
            <div onClick={openModal} className="px-4 py-4 sm:px-6 hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center pt-2 pb-1">
                    <input onClick={(e) => e.preventDefault()}
                           id="complete"
                           name="complete"
                           type="checkbox"
                           readOnly={true}
                           checked={task.complete}
                           className="cursor-pointer h-4 w-4 mr-2 rounded border-gray-300 text-sky-600 focus:ring-0"
                    />
                    <h3 className="text-sm font-medium">{task.name}</h3>
                </div>
                <p className="text-xs text-gray-600 whitespace-normal">{task.description}</p>
            </div>


            <Modal show={viewingTask} onClose={closeModal}>

                <form onSubmit={submit} className={ ! editMode ? 'hidden p-6' : 'p-6'}>
                    <h3 className="font-semibold text-xl text-gray-800 leading-tight mb-6">Edit new task</h3>

                    <div className="mb-8">
                        <InputLabel htmlFor="name" value="Name" />

                        <TextInput
                            id="name"
                            ref={nameInput}
                            value={data.name}
                            onChange={(e) => setData('name', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="new-name"
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mb-8">
                        <InputLabel htmlFor="description" value="Description" />

                        <TextInput
                            id="description"
                            ref={descriptionInput}
                            value={data.description}
                            onChange={(e) => setData('description', e.target.value)}
                            type="text"
                            className="mt-1 block w-full"
                            autoComplete="new-description"
                        />

                        <InputError message={errors.description} className="mt-2" />
                    </div>

                    <div className="mb-8">
                        <InputLabel htmlFor="user_id" value="User" />

                        <select
                            ref={userInput}
                            value={data.user_id}
                            onChange={(e) => setData('user_id', e.target.value)}
                            name="user_id"
                            id="user_id"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-sky-600 sm:text-sm sm:leading-6">
                            {users.map((usr) => {
                                return <option key={usr.id} value={usr.id}>{usr.name}</option>
                            })}
                        </select>

                        <InputError message={errors.description} className="mt-2" />
                    </div>

                    <div className="mb-8">
                        <InputLabel htmlFor="due" value="Due Date" />

                        <TextInput
                            id="due"
                            ref={dueInput}
                            value={data.due}
                            onChange={(e) => setData('due', e.target.value)}
                            type="date"
                            className="mt-1 block w-full"
                            autoComplete="new-due-date"
                        />

                        <InputError message={errors.description} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="user_id" value="Status" />

                        <select
                            ref={statusInput}
                            value={data.status_id}
                            onChange={(e) => setData('status_id', e.target.value)}
                            name="status_id"
                            id="status_id"
                            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-sky-600 sm:text-sm sm:leading-6">
                            {project.statuses.map((status) => {
                                return <option key={status.id} value={status.id}>{status.name}</option>
                            })}
                        </select>

                        <InputError message={errors.description} className="mt-2" />
                    </div>

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={toggleEditMode}>Cancel</SecondaryButton>

                        <PrimaryButton disabled={processing} className="ml-3">Edit Task</PrimaryButton>
                    </div>
                </form>

                <div className={ editMode ? 'hidden' : ''}>
                    <div className="px-4 py-5 sm:px-6">
                        <div className="flex items-center pt-2 pb-1">
                            <TaskFormCompleteForm task={task} />
                            <h3 className="text-base font-semibold leading-3 text-gray-900">{task.name}</h3>
                            <a href="#" onClick={toggleEditMode} className="ml-auto">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                     className="w-6 h-6 text-gray-600 hover:text-gray-800">
                                    <path
                                        d="M21.731 2.269a2.625 2.625 0 00-3.712 0l-1.157 1.157 3.712 3.712 1.157-1.157a2.625 2.625 0 000-3.712zM19.513 8.199l-3.712-3.712-8.4 8.4a5.25 5.25 0 00-1.32 2.214l-.8 2.685a.75.75 0 00.933.933l2.685-.8a5.25 5.25 0 002.214-1.32l8.4-8.4z"/>
                                    <path
                                        d="M5.25 5.25a3 3 0 00-3 3v10.5a3 3 0 003 3h10.5a3 3 0 003-3V13.5a.75.75 0 00-1.5 0v5.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5V8.25a1.5 1.5 0 011.5-1.5h5.25a.75.75 0 000-1.5H5.25z"/>
                                </svg>
                            </a>
                        </div>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">{task.description}</p>
                    </div>
                    <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Assigned to</dt>
                                <dd className="mt-1 text-sm text-gray-900">{task.user.name}</dd>
                            </div>
                            <div className="sm:col-span-1">
                                <dt className="text-sm font-medium text-gray-500">Due</dt>
                                <dd className="mt-1 text-sm text-gray-900">{task.due_date}</dd>
                            </div>
                        </dl>
                    </div>

                    <CommentList task={task} />

                </div>
            </Modal>
        </>
    );
}

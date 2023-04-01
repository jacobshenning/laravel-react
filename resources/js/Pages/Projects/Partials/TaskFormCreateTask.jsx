
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import {useRef, useState} from "react";
import {useForm, usePage} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {Transition} from "@headlessui/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function TaskFormCreateTask({ status }) {

    const [creatingNewTask, setCreatingNewTask] = useState(false);
    const user = usePage().props.current_user;
    const users = usePage().props.users;

    const { data, setData, errors, post, reset, processing } = useForm({
        name: '',
        description: '',
        due: '',
        complete: false,
        status_id: status.id,
        user_id: user.id
    });

    const nameInput = useRef();
    const descriptionInput = useRef();
    const userInput = useRef();
    const dueInput = useRef();

    const closeModal = () => {
        setCreatingNewTask(false);

        reset();
    };

    const openModal = (e) => {
        e.preventDefault();

        setCreatingNewTask(true);
    }

    const submit = (e) => {
        e.preventDefault();

        post(route('tasks.store'), {
            preserveScroll: true,
            onSuccess: () => {
                reset()

                closeModal()
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
            <button onClick={openModal} type="button" className="px-4 py-4 sm:px-6 flex items-center justify-between hover:bg-gray-50">
                <span className="block text-sm font-medium text-gray-900">Add Task</span>
                <svg className="h-5 w-5 text-gray-400 group-hover:text-gray-500" viewBox="0 0 20 20" fill="currentColor"
                     aria-hidden="true">
                    <path
                        d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"/>
                </svg>
            </button>

            <Modal show={creatingNewTask} onClose={closeModal}>
                <form onSubmit={submit} className="p-6">

                    <h3 className="font-semibold text-xl text-gray-800 leading-tight mb-6">Create new task</h3>

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

                    <div>
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


                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <PrimaryButton disabled={processing} className="ml-3">Create Task</PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}

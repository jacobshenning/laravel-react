
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import {useRef, useState} from "react";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {Transition} from "@headlessui/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function ProjectFormCreateProject({ className = '', ...props }) {

    const [creatingNewProject, setCreatingNewProject] = useState(false);

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        name: '',
        description: '',
    });

    const nameInput = useRef();
    const descriptionInput = useRef();

    const confirmUserDeletion = () => {
        setCreatingNewProject(true);
    };

    const closeModal = () => {
        setCreatingNewProject(false);

        reset();
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('projects.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.name) {
                    reset('name');
                    nameInput.current.focus();
                }

                if (errors.description) {
                    reset('description');
                    descriptionInput.current.focus();
                }
            }
        })

    };

    return (
        <>
            <PrimaryButton onClick={confirmUserDeletion}>Create Project</PrimaryButton>

            <Modal show={creatingNewProject} onClose={closeModal}>
                <form onSubmit={submit} className="p-6">

                    <h3 className="font-semibold text-xl text-gray-800 leading-tight mb-6">Create new project</h3>

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

                    <div>
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

                    <div className="mt-6 flex justify-end">
                        <SecondaryButton onClick={closeModal}>Cancel</SecondaryButton>

                        <PrimaryButton disabled={processing} className="ml-3">Create Project</PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}

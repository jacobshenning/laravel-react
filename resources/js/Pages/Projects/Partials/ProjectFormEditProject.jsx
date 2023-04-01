
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import {useRef, useState} from "react";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";

export default function ProjectFormEditProject({ project }) {

    const [creatingNewProject, setCreatingNewProject] = useState(false);

    const { data, setData, errors, patch, reset, processing, recentlySuccessful } = useForm({
        name: project.name,
        description: project.description,
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

    const openModal = (e) => {
        e.preventDefault();

        setCreatingNewProject(true);

        reset();
    };

    const submit = (e) => {
        e.preventDefault();

        patch(route('projects.update', project.id), {
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
            }
        })

    };

    return (
        <>
            <a href="#" onClick={openModal} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Edit</a>

            <Modal show={creatingNewProject} onClose={closeModal}>
                <form onSubmit={submit} className="p-6">

                    <h3 className="font-semibold text-xl text-gray-800 leading-tight mb-6">Edit new project</h3>

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

                        <PrimaryButton disabled={processing} className="ml-3">Edit Project</PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}


import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import {useRef, useState} from "react";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {Transition} from "@headlessui/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function StatusFormEditStatus({ project, status }) {

    const [creatingNewStatus, setCreatingNewStatus] = useState(false);

    const { data, setData, errors, patch, reset, processing } = useForm({
        name: status.name,
        description: status.description,
        project_id: project.id,
        status_id: status.id
    });

    const nameInput = useRef();
    const descriptionInput = useRef();

    const closeModal = () => {
        setCreatingNewStatus(false);

        reset();
    };

    const openModal = (e) => {
        e.preventDefault();

        setCreatingNewStatus(true);
    }

    const submit = (e) => {
        e.preventDefault();

        patch(route('statuses.update', status.id), {
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

            <Modal show={creatingNewStatus} onClose={closeModal}>
                <form onSubmit={submit} className="p-6">

                    <h3 className="font-semibold text-xl text-gray-800 leading-tight mb-6">Edit new status</h3>

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

                        <PrimaryButton disabled={processing} className="ml-3">Edit Status</PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}

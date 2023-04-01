
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import {useRef, useState} from "react";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import {Transition} from "@headlessui/react";
import SecondaryButton from "@/Components/SecondaryButton";

export default function StatusFormCreateStatus({ project }) {

    const [creatingNewStatus, setCreatingNewStatus] = useState(false);

    const { data, setData, errors, post, reset, processing } = useForm({
        name: '',
        description: '',
        project_id: project.id
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

        post(route('statuses.store'), {
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

            <div className="block w-96 overflow-hidden shrink-0">
                <button onClick={openModal} type="button"
                        className="relative block w-full h-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                         stroke="currentColor" className="mx-auto h-12 w-12 text-gray-400">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"/>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z"/>
                    </svg>
                    <span className="mt-2 block text-sm font-semibold text-gray-900">Add Status</span>
                </button>
            </div>

            <Modal show={creatingNewStatus} onClose={closeModal}>
                <form onSubmit={submit} className="p-6">

                    <h3 className="font-semibold text-xl text-gray-800 leading-tight mb-6">Create new status</h3>

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

                        <PrimaryButton disabled={processing} className="ml-3">Create Status</PrimaryButton>
                    </div>
                </form>
            </Modal>
        </>
    );
}

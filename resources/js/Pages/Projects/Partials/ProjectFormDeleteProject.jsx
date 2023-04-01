
import PrimaryButton from "@/Components/PrimaryButton";
import Modal from "@/Components/Modal";
import {useRef, useState} from "react";
import {useForm} from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import SecondaryButton from "@/Components/SecondaryButton";

export default function ProjectFormDeleteProject({ project }) {

    const { delete: destroy, reset } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        destroy(route('projects.delete', project.id), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {}
        })
    };

    return (
        <>
            <a href="#" onClick={submit} className="block w-full px-4 py-2 text-left text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">Delete</a>
        </>
    );
}

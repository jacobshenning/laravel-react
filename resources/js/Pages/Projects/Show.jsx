import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

import { usePage } from '@inertiajs/react';
import Dropdown from "@/Components/Dropdown";
import ProjectFormEditProject from "@/Pages/Projects/Partials/ProjectFormEditProject";
import ProjectFormDeleteProject from "@/Pages/Projects/Partials/ProjectFormDeleteProject";
import ProjectFormRestoreProject from "@/Pages/Projects/Partials/ProjectFormRestoreProject";
import StatusList from "@/Pages/Projects/Partials/StatusList";
import {useState} from "react";

export default function Index({ auth }) {

    const [project, setProject] = useState(usePage().props.project);

    const updateProject = (model) => {
        if (project.id === model.id) {
            setProject(model);
        }
    }

    if (typeof window !== 'undefined') {
        window.Echo.private('App.Models.Project')
            .listen('.ProjectRestored', (e) => updateProject(e.model))
            .listen('.ProjectDeleted', (e) => updateProject(e.model))
            .listen('.ProjectUpdated', (e) => updateProject(e.model));
    }

    return (
        <AppLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Project</h2>

                </div>
            }
        >
            <Head title="Projects" />

            <div className="bg-white shadow sm:rounded-lg mb-5 flex justify-between items-start">
                <div className="px-4 py-5 sm:px-6 border-gray-200">
                    <h2 className="font-semibold text-xl leading-8 text-gray-900">{ project.name }</h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{ project.description }</p>
                </div>
                <div className="px-4 py-5 sm:px-6 border-gray-200">
                    <Dropdown>
                        <Dropdown.Trigger>
                            <button type="button"
                                    className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white bg-transparent text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2">
                                <span className="sr-only">Open options</span>
                                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M10 3a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM10 8.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM11.5 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z"/>
                                </svg>
                            </button>

                        </Dropdown.Trigger>

                        <Dropdown.Content>
                            <ProjectFormEditProject project={project} />
                            {project.deleted_at === null ? <ProjectFormDeleteProject project={project} /> : <ProjectFormRestoreProject project={project} />}
                        </Dropdown.Content>

                    </Dropdown>

                </div>
            </div>

            <StatusList />

        </AppLayout>
    );
}

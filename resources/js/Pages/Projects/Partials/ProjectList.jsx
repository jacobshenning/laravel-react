

import InputTabSelect from "@/Components/InputTabSelect";
import {useState, createContext, useContext, Fragment, useRef} from 'react';
import { Link, useForm, usePage } from '@inertiajs/react';
import ProjectListItem from "@/Pages/Projects/Partials/ProjectListItem";

export default function ProjectList({ className = '', ...props }) {

    const [currentOption, setCurrentOption] = useState("Active");
    const [projects, setProjects] = useState(usePage().props.projects);

    const addProject = (project) => {
        projects.push(project);
    }

    const updateProject = (project) => {
        let other_projects = projects.filter((old_project) => old_project.id !== project.id);
        setProjects(other_projects);
        setProjects([project, ...other_projects]);
    }


    if (typeof window !== 'undefined') {
        window.Echo.private('App.Models.Project')
            .listen('.ProjectCreated', (e) => addProject(e.model))
            .listen('.ProjectRestored', (e) => updateProject(e.model))
            .listen('.ProjectDeleted', (e) => updateProject(e.model))
            .listen('.ProjectTrashed', (e) => updateProject(e.model))
            .listen('.ProjectUpdated', (e) => updateProject(e.model));
    }

    return (
        <>
            <InputTabSelect options={['Active', 'Deleted', 'All']} currentOption={ currentOption } setOption={ setCurrentOption } />

            <ul role="list" className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

                {projects.map((project) => {
                    if (currentOption === 'Active' && project.deleted_at !== null) {
                        return ('');
                    }

                    if (currentOption === 'Deleted' && project.deleted_at === null) {
                        return ('');
                    }

                    return (
                        <ProjectListItem key={project.id} project={project}/>
                    )

                })}

            </ul>
        </>
    );
}

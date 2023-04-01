import InputTabSelect from "@/Components/InputTabSelect";
import {useState} from "react";
import {usePage} from "@inertiajs/react";
import StatusFormCreateStatus from "@/Pages/Projects/Partials/StatusFormCreateStatus";
import StatusListItem from "@/Pages/Projects/Partials/StatusListItem";

export default function StatusList() {

    const [currentOption, setCurrentOption] = useState("Active");
    const [project, setProject] = useState(usePage().props.project);
    const [statuses, setStatuses] = useState(usePage().props.statuses);

    const addStatus = (project_id, model) => {
        if (project.id !== project_id) {
            return;
        }

        setStatuses([...statuses, model]);
    }

    const updateStatus = (model) => {
        let status = statuses.filter((old_status) => old_status.id === model.id);
        if (! status.length) {
            return;
        }
        status = status[0];
        for (const modelKey in model) {
            status[modelKey] = model[modelKey];
        }
        let other_statuses = statuses.filter((old_status) => old_status.id !== model.id);
        setStatuses(other_statuses);
        setStatuses([status, ...other_statuses]);
    }


    if (typeof window !== 'undefined') {
        window.Echo.private('App.Models.Status')
            .listen('.StatusCreated', (e) => addStatus(e.model.project.id, e.model))
            .listen('.StatusUpdated', (e) => updateStatus(e.model))
            .listen('.StatusRestored', (e) => updateStatus(e.model))
            .listen('.StatusTrashed', (e) => updateStatus(e.model))
            .listen('.StatusDeleted', (e) => updateStatus(e.model));
    }

    return (
        <>
            <InputTabSelect options={['Active', 'Deleted', 'All']} currentOption={ currentOption } setOption={ setCurrentOption } />

            <div className="overflow-x-scroll flex items-start pb-5">

                {
                    statuses.map((s) => {
                        if (currentOption === 'Active' && s.deleted_at !== null) {
                            return ('');
                        }

                        if (currentOption === 'Deleted' && s.deleted_at === null) {
                            return ('');
                        }

                        return <StatusListItem key={s.id} status={s} project={project} />
                    })
                }

                <StatusFormCreateStatus project={project} />

            </div>
        </>
    );
}

import Dropdown from "@/Components/Dropdown";
import StatusFormEditStatus from "@/Pages/Projects/Partials/StatusFormEditStatus";
import StatusFormDeleteStatus from "@/Pages/Projects/Partials/StatusFormDeleteStatus";
import StatusFormRestoreStatus from "@/Pages/Projects/Partials/StatusFormRestoreStatus";
import TaskList from "@/Pages/Projects/Partials/TaskList";

export default function StatusListItem({ project, status }) {
    return (
        <div className="overflow-hidden bg-white shadow sm:rounded-md w-96 mr-5 shrink-0">

            <div className="px-4 py-5 sm:px-6 border-b border-gray-200 flex justify-between">
                <div>
                    <h2 className="font-semibold text-xl leading-8 text-gray-900">{status.name}</h2>
                    <p className="mt-1 max-w-2xl text-sm text-gray-500">{status.description}</p>
                </div>
                <div>
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
                            <StatusFormEditStatus status={status} project={project} />
                            {status.deleted_at === null ? <StatusFormDeleteStatus status={status} /> : <StatusFormRestoreStatus status={status} />}
                        </Dropdown.Content>

                    </Dropdown>
                </div>
            </div>

            <TaskList status={status} />
        </div>
    );
}

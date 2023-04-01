
import {Link} from "@inertiajs/react";
export default function ProjectListItem({ project }) {
    return (
        <li className="rounded-md shadow-sm bg-white rounded-md border border-gray-200 overflow-hidden">
            <Link href={route('projects.show', project.id)}>
                <div className="px-4 py-4 sm:px-6 cursor-pointer hover:bg-gray-50 text-gray-500">
                    <div className="flex items-center justify-between">
                        <h2 className="text-gray-900 font-semibold text-lg">
                            {project.name}
                        </h2>

                        <div className="flex items-center whitespace-nowrap">
                            <svg className="w-4 h-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M5.25 2.25a3 3 0 00-3 3v4.318a3 3 0 00.879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 005.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 00-2.122-.879H5.25zM6.375 7.5a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
                                      clipRule="evenodd"/>
                            </svg>
                            <p className="text-sm text-gray-700 ml-1">{project.tasks.length} tasks</p>
                        </div>
                    </div>

                    <p>{project.description}</p>
                </div>
            </Link>
        </li>
    );
}

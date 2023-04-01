import AppLayout from '@/Layouts/AppLayout';
import { Head } from '@inertiajs/react';

import ProjectFormCreateProject from '@/Pages/Projects/Partials/ProjectFormCreateProject';
import ProjectList from "@/Pages/Projects/Partials/ProjectList";

export default function Index({ auth }) {
    return (
        <AppLayout
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900">Projects</h2>

                    <ProjectFormCreateProject />
                </div>
            }
        >
            <Head title="Projects" />

            <div>
                <ProjectList />
            </div>
        </AppLayout>
    );
}

import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <a href="/" className="block w-20 py-4 mx-auto items-center font-black bg-sky-600 px-3 text-right text-gray-50 -mb-2 shadow">
                        Laravel<br />React
                    </a>
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        <Link href={route('marketing.home')} className="font-medium text-sky-600 hover:text-sky-500"><span className="text-sm font-semibold leading-6">&#8592;</span> Back to home page</Link>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

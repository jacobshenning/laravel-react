import {
    ArchiveBoxIcon,
    ArrowPathIcon,
    ChevronRightIcon,
    CloudArrowDownIcon,
    FingerPrintIcon, RocketLaunchIcon, ScaleIcon
} from '@heroicons/react/20/solid'
import MarketingLayout from "@/Layouts/MarketingLayout";
import {Head, Link} from "@inertiajs/react";

export default function Home() {
    return (
        <MarketingLayout>
            <Head title="Home" />
            <div className="relative isolate overflow-hidden bg-white">
                <svg
                    className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
                    aria-hidden="true"
                >
                    <defs>
                        <pattern
                            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
                            width={200}
                            height={200}
                            x="50%"
                            y={-1}
                            patternUnits="userSpaceOnUse"
                        >
                            <path d="M.5 200V.5H200" fill="none" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
                </svg>
                <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
                        <div className="mt-24 sm:mt-32 lg:mt-16">
                            <a href="https://vue.jacobhenning.app" target="_blank" className="inline-flex space-x-6">
                  <span className="rounded-full bg-sky-600/10 px-3 py-1 text-sm font-semibold leading-6 text-sky-600 ring-1 ring-inset ring-sky-600/10">
                    React vs Vue
                  </span>
                                <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-gray-600">
                    <span>Vue App</span>
                    <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </span>
                            </a>
                        </div>
                        <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Laravel & React are Awesome
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                            And what's more awesome? Building a laravel react app with inertiajs. This revamp-project is an awesome chance for me to not only compare two awesome technologies but see how far they've come over that past 3 years. You can learn more on my website.
                        </p>
                        <div className="mt-10 flex items-center gap-x-6">
                            <Link
                                href={route('login')}
                                className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600"
                            >
                                Try it out!
                            </Link>
                            <a href="https://jacobhenning.com" target="_blank" className="text-sm font-semibold leading-6 text-gray-900">
                                Project Page <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                    <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
                        <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
                            <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                                <img
                                    src="/img/projects-page.png"
                                    alt="App screenshot"
                                    width={2432}
                                    height={1442}
                                    className="w-[76rem] rounded-md shadow-2xl ring-1 ring-gray-900/10"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-sky-400">React vs Vue in 2019</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">A Blast from the Past</p>
                        <p className="mt-6 text-lg leading-8 text-gray-300">This is not the first time I built a react vs vue project. I built out a laravel-react vs laravel-vue project in 2019. The mission was identical, but the result is much different, all due to Laravel's ever-growing ecosystem. Here are some key changes.</p>
                    </div>
                    <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <ArrowPathIcon className="h-5 w-5 flex-none text-sky-400" />
                                    Data Hydration
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">Data flow from server to client can be tricky with single page applications. Inertia can share data with the client application and does it via the Inertia::facade just like we normally would do when sharing data with blade views.</p>
                                    <p className="mt-6">
                                        <a href="https://inertiajs.com" target="_blank" className="text-sm font-semibold leading-6 text-sky-400">Learn
                                            more <span aria-hidden="true">→</span></a>
                                    </p>
                                </dd>
                            </div>

                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <FingerPrintIcon className="h-5 w-5 flex-none text-sky-400" />
                                    Authorization
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">I don't remember a time where Laravel didn't have robust authorization abilities. API, Session-based, and OAuth authorization are easy to setup. But now Laravel can be configured with Laravel breeze designed just for inertia authentication.</p>
                                    <p className="mt-6">
                                        <a href="https://laravel.com/docs/10.x/starter-kits#laravel-breeze" target="_blank" className="text-sm font-semibold leading-6 text-sky-400">Learn
                                            more <span aria-hidden="true">→</span></a>
                                    </p>
                                </dd>
                            </div>

                            <div className="flex flex-col">
                                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                                    <CloudArrowDownIcon className="h-5 w-5 flex-none text-sky-400" />
                                    Server Side Rendering
                                </dt>
                                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                                    <p className="flex-auto">In 2019, server-side rendering a laravel-vue application was rare. The best solution I could build was not fast, not scalable, and tricky to configure. Today, it ships out of the box. This is due to the inertiajs features.</p>
                                    <p className="mt-6">
                                        <a href="https://inertiajs.com/server-side-rendering" target="_blank" className="text-sm font-semibold leading-6 text-sky-400">Learn
                                            more <span aria-hidden="true">→</span></a>
                                    </p>
                                </dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>

            <div className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl sm:text-center">
                        <h2 className="text-base font-semibold leading-7 text-sky-600">Laravel broadcasting for live updates</h2>
                        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Keep Users Current</p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">Broadcasting pushes the user's experience to the next level. Events broadcast data through a secure websocket which is authenticated on a user basis.</p>
                    </div>
                </div>
                <div className="relative overflow-hidden pt-16">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <img src="/img/task-view.png"
                             alt="App screenshot" className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
                             width="2432" height="1442" />
                            <div className="relative" aria-hidden="true">
                                <div
                                    className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]"></div>
                            </div>
                    </div>
                </div>
            </div>

            <div className="bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 items-center gap-x-8 gap-y-16 lg:grid-cols-2">
                        <div className="mx-auto w-full max-w-xl lg:mx-0">
                            <h2 className="text-3xl font-bold tracking-tight text-white">Built on the robust Laravel ecosystem</h2>
                            <p className="mt-6 text-lg leading-8 text-gray-300">Laravel is designed to grow and scale. Incredible libraries and tools can easily be integrated into the framework. Using powerful tooling, some made just for Laravel, I was able to easily build a powerful user experience.</p>
                        </div>

                        <div
                            className="mx-auto grid w-full max-w-xl grid-cols-2 items-center gap-y-12 sm:gap-y-14 lg:mx-0 lg:max-w-none lg:pl-8">
                            <img className="max-h-12 w-full object-contain object-left text-white w-40"
                                 src="/img/inertiajs.svg" alt="InertiaJS" width="105" height="48"/>
                            <img className="max-h-12 w-full object-contain object-left"
                                 src="/img/laravel-logo-white.svg" alt="Laravel" width="136" height="48"/>
                            <img className="max-h-12 w-full object-contain object-left" src="/img/vue.svg"
                                 alt="SavvyCal" width="140" height="48"/>
                            <img className="max-h-12 w-full object-contain object-left" src="/img/breeze.svg"
                                 alt="Laravel" width="136" height="48"/>
                        </div>
                    </div>
                </div>
            </div>

            <div className="overflow-hidden bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl md:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-y-16 gap-x-8 sm:gap-y-20 lg:grid-cols-2 lg:items-start">
                        <div className="px-6 md:px-0 lg:pt-4 lg:pr-4">
                            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-lg">
                                <h2 className="text-base font-semibold leading-7 text-sky-600">A process for speedy development</h2>
                                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better
                                    workflow</p>
                                <p className="mt-6 text-lg leading-8 text-gray-600">Its not just building a laravel-vue app. Its building a laravel-vue process. Something that is simple, organized, and easy to repeat.</p>
                                <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <ArchiveBoxIcon className="absolute top-1 left-1 h-5 w-5 text-sky-600" />
                                            File Structure
                                        </dt>
                                        <dd className="inline"> How to structure the frontend, backend, and keep the names and naming conventions organized.</dd>
                                    </div>

                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <ScaleIcon className="absolute top-1 left-1 h-5 w-5 text-sky-600" />
                                            Frontend vs Backend
                                        </dt>
                                        <dd className="inline"> Deciding what functionality belongs to the frontend and what belongs to the backend.
                                        </dd>
                                    </div>

                                    <div className="relative pl-9">
                                        <dt className="inline font-semibold text-gray-900">
                                            <RocketLaunchIcon className="absolute top-1 left-1 h-5 w-5 text-sky-600" />
                                            Rapid Development
                                        </dt>
                                        <dd className="inline"> Optimizing the process to maximize speed of development without sacrificing the speed of the app.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                        <div className="sm:px-6 lg:px-0">
                            <div
                                className="relative isolate overflow-hidden bg-sky-500 px-6 pt-8 sm:mx-auto sm:max-w-2xl sm:rounded-3xl sm:pt-16 sm:pl-16 sm:pr-0 lg:mx-0 lg:max-w-none">
                                <div
                                    className="absolute -inset-y-px -left-3 -z-10 w-full origin-bottom-left skew-x-[-30deg] bg-sky-100 opacity-20 ring-1 ring-inset ring-white"
                                    aria-hidden="true"></div>
                                <div className="mx-auto max-w-2xl sm:mx-0 sm:max-w-none">
                                    <div
                                        className="w-screen overflow-hidden rounded-tl-xl bg-gray-900 ring-1 ring-white/10">
                                        <div className="flex bg-gray-800/40 ring-1 ring-white/5">
                                            <div className="-mb-px flex text-sm font-medium leading-6 text-gray-400">
                                                <div
                                                    className="border-b border-r border-b-white/20 border-r-white/10 bg-white/5 py-2 px-4 text-white">NotificationSetting.jsx
                                                </div>
                                                <div className="border-r border-gray-600/10 py-2 px-4">App.jsx</div>
                                            </div>
                                        </div>
                                        <div className="px-6 pt-6 pb-14">
                    <pre className="text-[0.8125rem] leading-6 text-gray-300"><code>import {<span
                        className="text-[#7dd3fc]">useState</span>} from <span
                        className="text-emerald-300">'react'</span>

                        <br/>
  import {`{`}<span className="text-[#7dd3fc]">Switch</span>{`}`} from <span
                            className="text-emerald-300">'@headlessui/react'</span>

                        <br/>
                        <br/>

  <span className="text-indigo-400">function Example</span>() {`{`}
                        <br/>
                        <br/>
                        {'  '}const [<span className="text-[#7dd3fc]">enabled</span>, <span className="text-[#7dd3fc]">setEnabled</span>] = useState(<span className="text-[#7dd3fc]">true</span>)
                        <br/>
                        <br/>

                        {'  '}return (
                        <br/>
                        {'    '}&lt;<span className="text-indigo-400">form</span> action="/<span className="text-emerald-300">notification-settings</span>" method="<span className="text-emerald-300">post</span>"&gt;

                        <br/>
                        {'      '}&lt;<span className="text-indigo-400">Switch</span>
                        <br/>
                        {'        '}checked={<span className="text-[#7dd3fc]">enabled</span>}
                        <br/>
                        {'        '}onChange={<span className="text-[#7dd3fc]">setEnabled</span>}
                        <br/>
                        {'        '}name="<span className="text-emerald-300">notifications</span>"
                        <br/>
                        {'      '}&gt;

                        <br/>
                        {'        '}{<span className="text-gray-500">/* ... */</span>}

                        <br/>
                        {'      '}&lt;/<span className="text-indigo-400">Switch</span>&gt;

                        <br/>
                        {'      '}&lt;<span className="text-indigo-400">button</span>&gt;Submit&lt;/<span className="text-indigo-400">button</span>&gt;

                        <br/>
                        {'    '}&lt;/<span className="text-indigo-400">form</span>&gt;

                        <br/>
                            )
                        {`}`}</code></pre>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-black/10 sm:rounded-3xl"
                                    aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-900" aria-labelledby="footer-heading">
                <h2 id="footer-heading" className="sr-only">Footer</h2>
                <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                        <div className="space-y-8">

                            <a href="/"
                               className="flex w-20 items-center font-black bg-sky-600 px-3 py-4 text-right text-gray-50 -mt-8 shadow">
                                Laravel<br />React
                            </a>
                                <p className="text-sm leading-6 text-gray-300">This project is still underway. As I complete it, this page will link to more content.</p>
                                <div className="flex space-x-6">

                                    <a href="#" className="text-gray-500 hover:text-gray-400">
                                        <span className="sr-only">Twitter</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path
                                                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                        </svg>
                                    </a>

                                    <a href="#" className="text-gray-500 hover:text-gray-400">
                                        <span className="sr-only">GitHub</span>
                                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"
                                             aria-hidden="true">
                                            <path fillRule="evenodd"
                                                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                  clipRule="evenodd"/>
                                        </svg>
                                    </a>
                                </div>
                        </div>
                        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                {/*<div>*/}
                                {/*    <h3 className="text-sm font-semibold leading-6 text-white">Solutions</h3>*/}
                                {/*    <ul role="list" className="mt-6 space-y-4">*/}
                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Marketing</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Analytics</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Commerce</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Insights</a>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                                {/*<div className="mt-10 md:mt-0">*/}
                                {/*    <h3 className="text-sm font-semibold leading-6 text-white">Support</h3>*/}
                                {/*    <ul role="list" className="mt-6 space-y-4">*/}
                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Pricing</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Documentation</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Guides</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#" className="text-sm leading-6 text-gray-300 hover:text-white">API*/}
                                {/*                Status</a>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                            </div>
                            <div className="md:grid md:grid-cols-2 md:gap-8">
                                {/*<div>*/}
                                {/*    <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>*/}
                                {/*    <ul role="list" className="mt-6 space-y-4">*/}
                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">About</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Blog</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Jobs</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Press</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Partners</a>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                                {/*<div className="mt-10 md:mt-0">*/}
                                {/*    <h3 className="text-sm font-semibold leading-6 text-white">Legal</h3>*/}
                                {/*    <ul role="list" className="mt-6 space-y-4">*/}
                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Claim</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Privacy</a>*/}
                                {/*        </li>*/}

                                {/*        <li>*/}
                                {/*            <a href="#"*/}
                                {/*               className="text-sm leading-6 text-gray-300 hover:text-white">Terms</a>*/}
                                {/*        </li>*/}
                                {/*    </ul>*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                    <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                        <p className="text-xs leading-5 text-gray-400">&copy; 2020 Jacob Henning, Inc. All rights
                            reserved.</p>
                    </div>
                </div>
            </footer>


        </MarketingLayout>
    )
}

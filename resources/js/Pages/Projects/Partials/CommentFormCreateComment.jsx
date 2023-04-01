import TaskFormCreateTask from "@/Pages/Projects/Partials/TaskFormCreateTask";
import TaskListItem from "@/Pages/Projects/Partials/TaskListItem";
import { Link, useForm, usePage } from '@inertiajs/react';
import InputError from "@/Components/InputError";
import {useRef} from "react";
import PrimaryButton from "@/Components/PrimaryButton";

export default function CommentFormCreateComment({ task }) {
    const user = usePage().props.current_user;

    const { data, setData, errors, post, reset, processing, recentlySuccessful } = useForm({
        content: '',
        task_id: task.id,
        user_id: user.id,
    });

    const commentInput = useRef();

    const submit = (e) => {
        e.preventDefault();

        post(route('comments.store'), {
            preserveScroll: true,
            onSuccess: () => reset(),
            onError: (errors) => {
                if (errors.content) {
                    reset('content');
                    commentInput.current.focus();
                }
            }
        })
    };

    return (
        <form action="#" onSubmit={submit}>
            <div className="flex items-start space-x-4 mt-6">
                <div className="flex-shrink-0">
                <span className="inline-block h-10 w-10 overflow-hidden rounded-full bg-gray-100">
                    <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path
                            d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z"/>
                    </svg>
                </span>
                </div>
                <div className="min-w-0 flex-1">
                    <div className="border-b border-gray-200 focus-within:border-sky-600">
                        <label htmlFor="comment" className="sr-only">Add your comment</label>
                        <textarea rows="3" name="comment" id="comment"
                                  ref={commentInput}
                                  value={data.content}
                                  onChange={(e) => setData('content', e.target.value)}
                                  className="block w-full resize-none border-0 border-b border-transparent p-0 pb-2 text-gray-900 placeholder:text-gray-400 focus:border-sky-600 focus:ring-0 sm:text-sm sm:leading-6"
                                  placeholder="Add your comment..."></textarea>
                    </div>
                </div>

                <InputError message={errors.content} className="mt-2" />

            </div>

            <div className="mt-2 flex justify-end">
                <PrimaryButton disabled={processing} className="ml-3">Comment</PrimaryButton>
            </div>
        </form>
    );
}

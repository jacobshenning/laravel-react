import CommentFormCreateComment from "@/Pages/Projects/Partials/CommentFormCreateComment";
import CommentListItem from "@/Pages/Projects/Partials/CommentListItem";
import {useState} from "react";
import {usePage} from "@inertiajs/react";

export default function CommentList({ task }) {

    const [comments, setComments] = useState(task.comments);

    const addComment = (comment) => {
        if (comment.task_id !== task.id) {
            return;
        }

        setComments([...comments, comment]);
    }

    if (typeof window !== 'undefined') {
        window.Echo.private('App.Models.Comment')
            .listen('.CommentCreated', (e) => addComment(e.model));
    }

    return (
        <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
            <h4 className="font-medium text-sm text-gray-800">Comments</h4>
            <div className="max-h-96 overflow-y-scroll">
                <ul role="list" className="divide-y divide-gray-200">
                    {comments.map((comment) => <CommentListItem key={comment.id} comment={comment} />)}
                </ul>
            </div>

            <CommentFormCreateComment task={task} />
        </div>
    );
}

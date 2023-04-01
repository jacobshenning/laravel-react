

import axios from 'axios';
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';


if (typeof window !== 'undefined') {

    window.axios = axios;

    window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

    window.Pusher = Pusher;

    window.Echo = new Echo({
        broadcaster: 'pusher',
        key: import.meta.env.VITE_ABLY_PUBLIC_KEY,
        cluster: 'mt1',
        wsHost: 'realtime-pusher.ably.io',
        wsPort: 443,
        disableStats: true,
        encrypted: true,
    });

}


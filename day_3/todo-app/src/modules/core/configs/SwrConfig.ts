// import axios from 'axios';
import { api } from '@modules/core/configs/AxiosConfig';
import useSWR, { SWRConfiguration } from 'swr';

const fetcher = (url: string) => api.get(url).then(res => res.data);

const swrConfig: SWRConfiguration = {
    fetcher,
    onError: (error) => {
        console.error('SWR Error:', error);
    },
};

export { useSWR, swrConfig };
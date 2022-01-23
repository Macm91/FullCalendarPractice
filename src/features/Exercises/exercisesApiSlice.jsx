import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const exerciseApiSlice = createApi({
    reducerPath:"api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://127.0.0.1:8000/api/wf/exercises/",
        // prepareHeaders(headers) {
        //     headers.set();
        //     return headers;
        // }
    }),
    endpoints(builders) {
        return{
            fetchExercises: builders.query({
                query(){
                    return ''
                },
            }),
        };
    },
});

export const {useFetchExercisesQuery} = exerciseApiSlice; 
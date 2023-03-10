import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


    export const shazamCoreApi= createApi({
        reducerPath: 'shazamCoreApi',
        baseQuery: fetchBaseQuery({
            baseUrl:'https://shazam.p.rapidapi.com',
            prepareHeaders:(headers) => {
                headers.set('X-RapidAPI-Key','90a45132c3mshb3ac00b25685322p1fe126jsncfa7811ecb91')
                return headers;
            }
        }),
        endpoints: (builder) => ({
            getTopCharts: builder.query({query:() => '/charts/list'})
        }),
    });

    export const {
         useGetTopChartsQuery,
         
    } =shazamCoreApi;
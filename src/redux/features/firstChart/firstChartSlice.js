import {apiSlice} from "@/redux/api/apiSlice";


export const firstChartSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getFirstChartData: builder.query({
            query: ({type}) => ({
                url: `g/mw?action=Qtc&from=20240419111002&insID=${type}`,
            }),
            providesTags: ["firstChart"],
        }),
    }),
});

export const {useGetFirstChartDataQuery} = firstChartSlice;

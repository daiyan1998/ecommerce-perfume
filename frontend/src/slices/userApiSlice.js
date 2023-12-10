import { USERS_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signin: builder.mutation({
            query:(data) => ({
                url: USERS_URL,
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useSigninMutation} = userApiSlice 

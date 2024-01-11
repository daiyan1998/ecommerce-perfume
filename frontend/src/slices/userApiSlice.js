import { USERS_URL } from "@/constants";
import { apiSlice } from "./apiSlice";

export const userApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signup: builder.mutation({
            query:(data) => ({
                url: USERS_URL,
                method: 'POST',
                body: data
            })
        }),
        signin: builder.mutation({
            query:(data) => ({
                url:`${USERS_URL}/login`,
                method: 'POST',
                body: data
            })
        })
    })
})

export const {useSignupMutation,useSigninMutation} = userApiSlice 

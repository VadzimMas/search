// Need to use the React-specific entry point to allow generating React hooks
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {faker} from "@faker-js/faker";

// Define a service using a base URL and expected endpoints
const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3001'}),
    endpoints: (builder) => ({

        fetchUsers: builder.query({
            providesTags: (result = []) => ["User", ...result.map(({id}) => ({type: "User", id}))],
            query: () => `/users`,
        }),

        addUser: builder.mutation({
            invalidatesTags: ["User"],
            query(user) {
                return {
                    url: "/users",
                    method: "POST",
                    body: {
                        firstName: user.firstName ? user.firstName : faker.name.firstName(),
                        lastName: user.lastName ? user.lastName : faker.name.lastName(),
                        email: user.email ? user.email : faker.internet.email(),
                        avatar: user.avatar ? user.avatar : faker.image.avatar(),
                        likes: 0,
                        dislikes: 0,
                    }
                }
            }
        }),

        deleteUser: builder.mutation({
            invalidatesTags: ["User"],
            query(user) {
                return {
                    url: `/users/${user.id}`,
                    method: "DELETE",
                }
            }
        }),

        addLike: builder.mutation({
            invalidatesTags: (result, error, arg) => [{type: "User", id: arg.id}],
            query(user) {
                return {
                    url: `/users/${user.id}`,
                    method: "PATCH",
                    body: {
                        likes: user.likes + 1
                    }
                }
            }
        }),

        addDislike: builder.mutation({
            invalidatesTags: (result, error, arg) => [{type: "User", id: arg.id}],
            query(user) {
                return {
                    url: `/users/${user.id}`,
                    method: "PATCH",
                    body: {
                        dislikes: user.dislikes + 1
                    }
                }
            }
        }),
    }),
})

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const {
    useFetchUsersQuery,
    useAddUserMutation,
    useDeleteUserMutation,
    useAddLikeMutation,
    useAddDislikeMutation,
} = userApi

export default userApi
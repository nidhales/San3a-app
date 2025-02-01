import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import type { RootState } from "../store/store"
import type { User, Worker, Job } from "../types/types"

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.221.193:3000",
      prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).auth.token
      if (token) {
        headers.set("authorization", `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    login: builder.mutation<{ token: string;}, { username: string; password: string }>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    getWorkers: builder.query<Worker[], void>({
      query: () => "workers",
    }),
    getWorker: builder.query<Worker, string>({
      query: (id) => `workers/${id}`,
    }),
    createWorker: builder.mutation<Worker, Partial<Worker>>({
      query: (newWorker) => ({
        url: "workers",
        method: "POST",
        body: newWorker,
      }),
    }),
    updateWorker: builder.mutation<Worker, Partial<Worker> & Pick<Worker, "id">>({
      query: ({ id, ...patch }) => ({
        url: `workers/${id}`,
        method: "PUT",
        body: patch,
      }),
    }),
    getJobs: builder.query<Job[], void>({
      query: () => "jobs",
    }),
    createJob: builder.mutation<Job, Partial<Job>>({
      query: (newJob) => ({
        url: "jobs",
        method: "POST",
        body: newJob,
      }),
    }),
  }),
})

export const {
  useLoginMutation,
  useGetWorkersQuery,
  useGetWorkerQuery,
  useCreateWorkerMutation,
  useUpdateWorkerMutation,
  useGetJobsQuery,
  useCreateJobMutation,
} = api


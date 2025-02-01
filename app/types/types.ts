export interface User {
    id: string
    username: string
    role: "user" | "worker" | "admin"
  }
  
  export interface Worker {
    id: string
    userId: string
    profession: string
    description: string
    location: [number, number]
  }
  
  export interface Job {
    id: string
    userId: string
    workerId: string
    description: string
    status: "pending" | "in_progress" | "completed"
    createdAt: string
  }
  
  
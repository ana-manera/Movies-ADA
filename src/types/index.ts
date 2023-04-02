export type User = {
    id: string
    name: string
    lastname: string
    email: string
    password: string
    birthdate: Date
    token?: string | null
    }

export type SignUpForm = Omit <User,"id" | "birthdate"> & { birthdate: Date}

export type LoginForm = {
    email: string;
    password: string;
  };


  
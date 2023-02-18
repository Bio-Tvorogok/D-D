export type RegisterData = {
    full_name?: string;
    email: string;
} & LoginData;

export type LoginData = {
    username: string;
    password: string;
};

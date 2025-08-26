export interface UserRequest {
    name: string;
    firstSurname: string;
    secondSurname?: string; // opcional
    email: string;
    password: string;
}

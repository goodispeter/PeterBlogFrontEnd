export class SignUpRequest {
    userEmail: string;
    userPassword: string;
    firstName: string;
    secondName: string;

    constructor(userEmail: string = '', userPassword: string = '', firstName: string = '', secondName: string = '') {
        this.userEmail = userEmail;
        this.userPassword = userPassword;
        this.firstName = firstName;
        this.secondName = secondName;
    }
}
export default class User {
    private id: string;
    private name: string;
    private email: string;
    private password: string;

    constructor(id: string, name: string, email: string, password: string) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    };

    // Getters

    getId(): string {
        return this.id;
    };

    getName(): string {
        return this.name;
    };

    getEmail(): string {
        return this.email;
    };

    // Setters

    setId(id: string): void {
        this.id = id;
    };

    setName(name: string): void {
        this.name = name;
    };

    setEmail(email: string): void {
        this.email = email;
    };

    setPassword(password: string): void {
        this.password = password;
    };

    // Methods

    validatePassword(password: string): boolean {
        return this.password === password;
    };
};
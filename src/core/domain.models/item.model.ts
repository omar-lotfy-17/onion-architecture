export default class Item {
    private id: string;
    private name: string;
    private price: number;
    private description: string;


    constructor(id: string, name: string, price: number, description: string) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.description = description;
    };

    // Getters

    getId(): string {
        return this.id;
    };

    getName(): string {
        return this.name;
    };

    getPrice(): number {
        return this.price;
    };

    getDescription(): string {
        return this.description;
    };

    // Setters

    setId(id: string): void {
        this.id = id;
    };

    setName(name: string): void {
        this.name = name;
    };

    setPrice(price: number): void {
        this.price = price;
    };

    setDescription(description: string): void {
        this.description = description;
    };

    // Methods


};
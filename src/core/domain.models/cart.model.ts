import Item from './item.model';

export default class Cart {
    private id: string;
    private userId: string;
    private items: Item[];
    private total: number;

    
    // constructor(id: string, userId: string) {
    //     this.id = id;
    //     this.userId = userId;
    //     this.items = [];
    //     this.total = 0;
    // };
    
    constructor(id: string, userId: string, items: Item[]) {
        this.id = id;
        this.userId = userId;
        this.items = items;
        
        let total = 0;
        this.items.forEach(item => {
            total += item.getPrice();
        });
        this.total = total;
    };


    // Getters

    getId(): string {
        return this.id;
    };

    getUserId(): string {
        return this.userId;
    };

    getItems(): Item[] {
        return this.items;
    };

    getTotal(): number {
        return this.total;
    };

    // Setters

    setId(id: string): void {
        this.id = id;
    };

    setUserId(userId: string): void {
        this.userId = userId;
    };

    setItems(items: Item[]): void {
        this.items = items;
    };


    // Methods

    calculateTotal(): void {
        let total = 0;
        this.items.forEach(item => {
            total += item.getPrice();
        });
        this.total = total;
    };

    addItem(item: Item): void {
        this.items.push(item);
        this.calculateTotal();
    };

    removeItem(item: Item): void {
        this.items = this.items.filter(i => i.getId() !== item.getId());
        this.calculateTotal();
    };

    clearCart(): void {
        this.items = [];
        this.total = 0;
    };

};
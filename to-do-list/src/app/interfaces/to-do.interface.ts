export interface IToDo {
    id: number;
    name: string,
    description: string;
    accomplished: boolean;
    priority: "LOW" | "MEDIUM" | "HIGH",
    user_id: string;
}
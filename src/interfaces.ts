export interface Widget {
    id: string;
    type: string;
    name: string;
    description?: string;
    config: Record<string, any>;
    position?: {
        x: number;
        y: number;
    };
    size?: {
        width: number;
        height: number;
    };
} 
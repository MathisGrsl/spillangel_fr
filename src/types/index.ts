export interface Sensor {
    id: string;
    name: string;
    description: string;
    specifications: Specification[];
    applications: Application[];
    benefits: Benefit[];
}

export interface Specification {
    key: string;
    value: string;
}

export interface Application {
    title: string;
    description: string;
    imageUrl: string;
}

export interface Benefit {
    title: string;
    description: string;
    iconUrl: string;
}

export interface ContactFormData {
    name: string;
    company: string;
    email: string;
    message: string;
}
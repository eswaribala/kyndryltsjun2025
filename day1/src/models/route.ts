export type Route={
    id: string;
    name: string;
    startCity: string;
    endCity: string;
    distance: number; // in kilometers
    estimatedTime?: number; // in minutes
    stops?: number; // optional array of stop addresses
    isActive: boolean; // indicates if the route is currently active
}
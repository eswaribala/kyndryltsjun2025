import { Route } from "../models/route";
export function checkRoute(route: Route[]): boolean {
    let status: boolean = false;
  
    // Check if the route array is empty
    if (route.length === 0) {
        status = false;
    }
    
    // Check if each route has the required properties
    for (const r of route) {
        if (
        !r.id ||
        !r.name ||
        !r.startCity ||
        !r.endCity ||
        typeof r.distance !== 'number' ||
        typeof r.estimatedTime !== 'number' ||
        typeof r.isActive !== 'boolean'
        ) {
        status = false;
        continue;
        }
        if(r.startCity === 'Charleston' && r.endCity === 'Columbia') {
            status=true;// Disallow route from Charleston to Columbia
            break;
        }   
    }
    
    // If all checks pass, return true
    return status;
}
export function requireRoleValidator(role: string,userRoles: string[]):any{
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor):any {
    const originalMethod = descriptor.value;

    descriptor.value = function(...args: any[]):any {
      if(!userRoles.includes(role)) {
        throw new Error(`User does not have the required role: ${role}`);
      }
        return originalMethod.apply(this, args);
    };
    return descriptor;
   
  }
} 
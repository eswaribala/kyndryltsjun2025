function chooseFactoryService(type: "online" | "offline") {
    if (type === "online") {
        return import("../models/onlineCustomerFactory")
            .then(module => module.OnlineCustomerFactory);
    }       
    else {
        return import("../models/offlineCustomerFactory")
            .then(module => module.OfflineCustomerFactory);
    }
}

chooseFactoryService("online")
    .then(Factory => {
        const factory = new Factory();
        console.log("Factory created:", factory);
    })
    .catch(error => {
        console.error("Error creating factory:", error);
    }); 
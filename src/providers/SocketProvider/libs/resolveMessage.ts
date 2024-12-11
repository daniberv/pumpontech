export const resolveMessage = (message, models) => {
    const jettons = models?.jettons;

    switch (message?.name) {
        case "jettonCreated":
            jettons.add(message.data);
            break;
        case "jettonUpdated":
            jettons.update(message.data);
            break;
        case "transactionCreated":
            jettons.addTransaction(message.data);
            break;
        default:
            return false;
    }
}
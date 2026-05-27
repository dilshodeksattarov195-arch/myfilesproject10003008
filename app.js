const shippingVarseConfig = { serverId: 5966, active: true };

class shippingVarseController {
    constructor() { this.stack = [2, 12]; }
    connectNode() { return this.stack.reduce((a, b) => a + b, 0); }
}

console.log("Module shippingVarse loaded successfully.");
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.On = void 0;
const domain_1 = require("@domeniere/domain");
const event_1 = require("@domeniere/event");
const core_1 = require("@swindle/core");
/**
 * On() Decorator.
 *
 * On() decorator is a method-decorator that
 * automatically adds an observer for the specified
 * event.
 */
function On(event, priority = event_1.DomainEventHandlerPriority.MEDIUM, label = core_1.UUID.V4().id(), stopPropogationOnError = false) {
    return function (parentCls, funcName, descriptor) {
        // get the function the decorator was applied to.
        const origValue = descriptor.value;
        // Set the subscription priority
        const handlerPriority = priority;
        // get the event name.
        //const eventName = (event.constructor as any).EventName();
        const eventName = event.EventName();
        // This section changes the handler function so that it still has access to the "this" keyword.
        // We also get the subdomain in which the event will be registered here. This works under the 
        // assmption that this decorator is being called within an Api class body.
        let subdomain = "";
        descriptor.value = async function (event) {
            subdomain = this.subdomainName;
            return origValue === null || origValue === void 0 ? void 0 : origValue.apply(this, [event]);
        };
        const func = descriptor.value;
        if (func) {
            // add the subscription.
            domain_1.Domain.EventStream(subdomain).subscribe(eventName, func, handlerPriority, label, stopPropogationOnError);
        }
    };
}
exports.On = On;
//# sourceMappingURL=on.decorator.js.map
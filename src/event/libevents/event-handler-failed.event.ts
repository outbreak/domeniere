import { DomainEvent } from "../domain-event/domain-event";
import { DateTime } from "@perivel/foundation";
import { Subscriber } from "../subscriber/subscriber";
import { EventClassifications } from "../domain-event/event-classification.enum";

/**
 * EventHandlerFailed
 * 
 * EventHandlerFailed indicates that an event handler has failed.
 */

export class EventHandlerFailed extends DomainEvent {

    private readonly _handler: Subscriber;
    private readonly _event: DomainEvent;

    constructor(handler: Subscriber, event: DomainEvent, timestamp: DateTime = DateTime.Now(), id: string|undefined = undefined) {
        super(timestamp, id);
        this._handler = handler;
        this._event = event;
    }

    /**
     * EventName()
     * 
     * EventName() gets the event name.
     */

    public static EventName(): string {
        return 'event-handler-failed';
    }

    /**
     * EventClassification()
     * 
     * EventClassification() gets the event classification.
     */

    public static EventClassification(): string {
        return EventClassifications.InternalError.toString();
    }

    /**
     * EventVersion()
     * 
     * EventVersion() gets the event version.
     */

    public static EventVersion(): number {
        return 1.0;
    }

    /**
     * event()
     * 
     * event() gets the event that caused the error.
     */

    public event(): DomainEvent {
        return this._event;
    }

    /**
     * handler()
     * 
     * handler() gets 4he event handler.
     */

    public handler(): Subscriber {
        return this._handler;
    }

    /**
     * attempts()
     * 
     * attempts() gets the number of attemmps the handler has been executed for the current event.
     */

    public attempts(): number {
        return this.handler().handleAttempts();
    }

    /**
     * serialize()
     * 
     * serialsie() serializes the event data.
     */

    public serialize(): string {
        const obj = {
            event: this.event(),
            handler: this.handler()
        };

        return JSON.stringify(obj);
    }
}
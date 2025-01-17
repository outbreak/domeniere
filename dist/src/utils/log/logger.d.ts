/**
 * Logger
 *
 * Logger is the core log module.
 */
export declare abstract class Logger {
    constructor();
    /**
     * debug()
     *
     * @param className The name of the class that the log is referring to.
     * @param methodName The name of the method the log is referring to.
     * @param message The log message.
     * @param data Any data that should be included.
     */
    abstract debug(className: string, methodName: string, message: string, data: object | null): void;
    /**
     * indo()
     *
     * @param className The name of the class the log is referring to.
     * @param methodName The method the log is referring to.
     * @param message The log message.
     * @param data Any data that should be included.
     */
    abstract info(className: string, methodName: string, message: string, data: object | null): void;
    /**
     * notice()
     *
     * @param className The name of the class the log is referring to.
     * @param methodName The method the log is referring to
     * @param message The log message.
     * @param data Any data that should be included.
     */
    abstract notice(className: string, methodName: string, message: string, data: object | null): void;
    /**
     * warn()
     *
     * @param className The class the log is referring to.
     * @param methodName The method the log is referring to.
     * @param message The log message.
     * @param data Any data that should be included.
     */
    abstract warn(className: string, methodName: string, message: string, data: object | null): void;
    /**
     * error()
     *
     * @param className The class name the log is referring to
     * @param methodName The method the log is referring to.
     * @param message The log message
     * @param trace The stack trace.
     * @param data Any data that should be included.
     */
    abstract error(className: string, methodName: string, message: string, trace: string, data: object | null): void;
    /**
     * crit()
     *
     * @param className The name of the class being referred to.
     * @param methodName The method the log is referring to.
     * @param message The log message.
     * @param trace The stack trace.
     * @param data Any data that should be included.
     */
    abstract crit(className: string, methodName: string, message: string, trace: string, data: object | null): void;
    /**
     * alert()
     *
     * @param className The class the log is referring to
     * @param methodName The method the log is referring to.
     * @param message The log message.
     * @param trace The stack trace.
     * @param data Any data that should be included.
     */
    abstract alert(className: string, methodName: string, message: string, trace: string, data: object | null): void;
    /**
     * emerg()
     *
     * @param className The class the log is referring to.
     * @param methodName The method the log is referring to.
     * @param message The log message.
     * @param trace The stack trace.
     * @param data Any data that should be included.
     */
    abstract emerg(className: string, methodName: string, message: string, trace: string, data: object | null): void;
}
//# sourceMappingURL=logger.d.ts.map
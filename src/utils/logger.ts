class FrontendLogger {
    info (msg: string) {
        console.log(`${new Date().toUTCString()} - INFO: ${msg}`);
    }
    debug (msg: string) {
        console.log(`${new Date().toUTCString()} - DEBUG: ${msg}`);
    }
    warn (msg: string) {
        console.warn(`${new Date().toUTCString()} - WARN: ${msg}`);
    }
    error (msg: string) {
        console.error(`${new Date().toUTCString()} - ERROR: ${msg}`);
    }
}

export default FrontendLogger;
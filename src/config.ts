import settings from '../settings.json';

const appEnv = import.meta.env.VITE_APP_ENV || "development";

const host = window.location.host

// if(host.includes(settings["production"].domain.replaceAll('https://', ''))) {
//     appEnv = "production";
// }

const env = appEnv || 'development';
const api = settings[env].api;
const flags = settings[env].flags;
const domain = settings[env].domain;

export default {
    env
    , sandbox: import.meta.env.SANDBOX
    , domain
    , appVersion: ''
    , gitVersion: ''
    , buildDate: ''
    , api
    , flags
}
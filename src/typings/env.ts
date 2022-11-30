import settings from '../../settings.json';

declare global {
    interface ImportMetaEnv {
        VITE_APP_ENV?: keyof typeof settings;
    }
}
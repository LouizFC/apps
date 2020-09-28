import {Language} from "@atlasacademy/api-connector";
import Region from "@atlasacademy/api-connector/dist/Enum/Region";
import {Theme} from "./Theme";

const languageKey = 'language',
    themeKey = 'aa-db.theme';

const callbacks: Function[] = [];

let region: Region = Region.JP;

class Manager {
    static language(): Language {
        const value = window.localStorage.getItem(languageKey),
            language: Language | undefined = Object.values(Language).find(v => v === value);

        return language ?? Language.DEFAULT;
    }

    static setLanguage(value: string) {
        const language = Object.values(Language).find(v => v === value);
        if (language === undefined)
            return;

        window.localStorage.setItem(languageKey, language);
        Manager.triggerCallbacks();
    }

    static region(): Region {
        return region;
    }

    static setRegion(_region: Region) {
        region = _region;
        Manager.triggerCallbacks();
    }

    static theme(): Theme {
        const value = window.localStorage.getItem(themeKey),
            theme = Object.values(Theme).find(v => v === value);

        return theme ?? Theme.DEFAULT;
    }

    static setTheme(value: string) {
        const theme = Object.values(Theme).find(v => v === value);
        if (theme === undefined)
            return;

        window.localStorage.setItem(themeKey, theme);
        Manager.triggerCallbacks();
    }

    static onUpdate(callback: Function) {
        callbacks.push(callback);
    }

    private static triggerCallbacks() {
        callbacks.forEach(callback => {
            callback.call(null);
        });
    }
}

export default Manager;

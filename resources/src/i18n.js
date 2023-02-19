import { createI18n } from "vue-i18n";
import en from "../lang/en.json";
export default createI18n({
    legacy: false,
    globalInjection: true,
    locale: import.meta.env.VUE_APP_I18N_LOCALE || "en",
    fallbackLocale: import.meta.env.VUE_APP_I18N_FALLBACK_LOCALE || "en",
    messages: { en },
});

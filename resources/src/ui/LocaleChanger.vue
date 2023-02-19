<template>
    <div
        class="dropdown dropdown-language my-auto border-end border-start px-1"
    >
        <a
            id="dropdown-flag"
            href="#"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
        >
            <i
                :class="'flag-icon flag-icon-' + langs[this.$i18n.locale].icon"
            ></i>
            <i class="bi bi-chevron-up text-dark"></i>
        </a>
        <div
            class="dropdown-menu dropdown-menu-end"
            aria-labelledby="dropdown-flag"
        >
            <a
                class="dropdown-item"
                style="padding: 3px"
                v-for="(item, key, index) in langs"
                :key="`Lang${index}`"
                :value="key"
                @click="SelectLang(key)"
            >
                <i :class="'flag-icon flag-icon-' + item.icon"> </i>
                {{ item.lang }}
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "locale-changer",
    data() {
        return {
            langs: {
                ar: { lang: "Arabic", icon: "iq" },
                bn: { lang: "Bengali", icon: "in" },
                de: { lang: "German", icon: "de" },
                en: { lang: "English", icon: "us" },
                es: { lang: "Spanish", icon: "es" },
                fa: { lang: "Farsi", icon: "ir" },
                fr: { lang: "French", icon: "fr" },
                hi: { lang: "Hindi", icon: "in" },
                hu: { lang: "Hungarian", icon: "hu" },
                id: { lang: "Indonesian", icon: "id" },
                it: { lang: "Italian", icon: "it" },
                ja: { lang: "Japanese", icon: "jp" },
                ko: { lang: "Korean", icon: "kr" },
                nb: { lang: "Norwegian", icon: "no" },
                nl: { lang: "Netherlands", icon: "nl" },
                pt: { lang: "Portuguese", icon: "pt" },
                ru: { lang: "Russain", icon: "ru" },
                th: { lang: "Thai", icon: "th" },
                tr: { lang: "Turkish", icon: "tr" },
                uk: { lang: "Ukrainian", icon: "ua" },
                ur: { lang: "Urdo", icon: "pk" },
                vi: { lang: "Vietnamese", icon: "vn" },
                zh: { lang: "Chinese", icon: "cn" },
            },
        };
    },
    methods: {
        SelectLang(lang) {
            this.$i18n.locale = lang;
        },
    },
};
</script>

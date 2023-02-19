<template>
    <section>
        <!-- notifications and audio options -->
        <div class="mb-1">
            <div class="form-label mb-1">
                Browser Notifications <i class="bi bi-chevron-down"></i>
            </div>
            <div class="mb-1">
                <Toggle
                    v-model="canNotify"
                    :text="'Grant permission for browser notifications'"
                    @click="askNotifyPermission"
                ></Toggle>
                <Toggle
                    v-model="options.notify.enabled"
                    :text="'Enable browser notifications for all events'"
                    @change="saveOptions()"
                ></Toggle>
                <Toggle
                    v-model="options.audio.enabled"
                    :text="'Play a notification sound effect'"
                    @change="saveOptions()"
                ></Toggle>
            </div>
            <div class="flex-middle flex-stretch flex-row">
                <div class="form-input mr-1 flex-1">
                    <SelectMenu
                        v-model="options.audio.file"
                        class="mr-1 flex-1"
                        :options="audioFiles"
                        @change="saveOptions(true)"
                    ></SelectMenu>
                    <button
                        class="text-bright bi bi-play-circle"
                        @click="playSound()"
                    ></button>
                </div>
                <div class="form-input mr-1 flex-1">
                    <span class="text-grey mr-1">Volume</span>
                    <input
                        v-model="options.audio.volume"
                        type="range"
                        min="0.1"
                        max="1.0"
                        step="0.1"
                        @change="saveOptions(true)"
                    />
                    <span class="ml-1">{{ options.audio.volume }}</span>
                </div>
                <div class="form-input flex-1">
                    <span class="text-grey mr-1">Visible</span>
                    <input
                        v-model="options.notify.duration"
                        type="range"
                        min="5"
                        max="30"
                        step="1"
                        @change="saveOptions()"
                    />
                    <span class="ml-1">{{ options.notify.duration }}s</span>
                </div>
            </div>
        </div>

        <hr />

        <!-- search options -->
        <div class="mb-1">
            <div class="form-label mb-1">
                Search Options (Affects sentiment analysis)
                <i class="bi bi-chevron-down"></i>
            </div>
            <Toggle
                v-model="options.search.fullword"
                :text="'Must type full search words to see results'"
                @change="saveOptions()"
            ></Toggle>
            <Toggle
                v-model="options.search.fullcase"
                :text="'Must type upper/lower case word letters'"
                @change="saveOptions()"
            ></Toggle>
        </div>
    </section>
</template>

<script>
// sub components
import Toggle from "./Toggle.vue";
import SelectMenu from "./SelectMenu.vue";

export default {
    // component list
    components: { Toggle, SelectMenu },

    // component props
    props: {
        options: { type: Object, required: true },
    },

    // component data
    data() {
        return {
            canNotify: false,
            urlSuccess: true,
            testing: false,
            // notification choices
            audioFiles: [
                {
                    text: "Audio 1",
                    value: "../../../../market/audio/audio_1.mp3",
                },
                {
                    text: "Audio 2",
                    value: "../../../../market/audio/audio_2.mp3",
                },
                {
                    text: "Audio 3",
                    value: "../../../../market/audio/audio_3.mp3",
                },
                {
                    text: "Audio 4",
                    value: "../../../../market/audio/audio_4.mp3",
                },
                {
                    text: "Audio 5",
                    value: "../../../../market/audio/audio_5.mp3",
                },
            ],
        };
    },

    // computed methods
    computed: {},

    // on component mounted
    mounted() {
        this.canNotify = this.$notify.canNotify();
    },

    // custom methods
    methods: {
        // play selected notification sound
        playSound() {
            let { file, volume } = this.options.audio;
            this.$utils.playAudio(file, volume);
        },

        // apply options
        saveOptions(audio) {
            let options = Object.assign({}, this.options, {
                proxy: this.corsProxy,
            });
            if (audio === true) this.playSound();
            this.$opts.saveOptions(options);
        },

        // ask user for notification permission
        askNotifyPermission(e) {
            e.preventDefault();
            this.canNotify = false;
            this.$notify.permission((status) => {
                this.canNotify = status === "granted" ? true : false;
            });
        },
    },
};
</script>

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

        <hr />

        <!-- proxy and api config options -->
        <div class="mb-1">
            <div class="form-label mb-1">
                Outgoing Requests &amp; Notifications (Advanced)
                <i class="bi bi-chevron-down"></i>
            </div>
            <Tabs class="mb-1">
                <!-- proxy -->
                <section btn-class="bi bi-server" btn-name="CORS Proxy">
                    <form
                        class="cors-form flex-middle flex-stretch mb-1 flex-row"
                        action="#"
                        :disabled="testing"
                        @submit="corsFormSubmit"
                    >
                        <div class="form-input mr-1 flex-1">
                            <span class="text-nowrap text-grey mr-1"
                                >Proxy:</span
                            >
                            <input
                                v-model="corsProxy"
                                class="text-light w-full"
                                type="text"
                                name="proxyurl"
                                placeholder="https://..."
                                @blur="saveOptions()"
                            />
                            <span
                                class="ms-auto"
                                :class="{
                                    'bi bi-check-circle text-gain': urlSuccess,
                                    'bi bi-x-lg text-loss': !urlSuccess,
                                    'bi bi-clock text-warning': testing,
                                }"
                            ></span>
                        </div>
                        <button
                            class="form-btn bg-info-hover push-small mr-1"
                            type="submit"
                        >
                            <i
                                class="bi bi-arrow-clockwise"
                                :class="{ iconSpin: testing }"
                            ></i>
                            Test
                        </button>
                        <button
                            class="form-btn bg-success-hover"
                            type="button"
                            @click="addProxy(corsProxy)"
                        >
                            <i class="bi bi-check-circle"></i> Save
                        </button>
                    </form>
                    <div class="flex-list mb-1">
                        <div
                            v-for="p of proxyList"
                            :key="p.url"
                            class="flex-item flex-middle flex-stretch flex-row"
                        >
                            <div
                                class="bi bi-server iconLeft clickable mr-1 flex-1 text-clip"
                                :class="{ 'text-success': p.selected }"
                                @click="setProxy(p.url)"
                            >
                                {{ p.url }}
                            </div>
                            <button
                                class="bi bi-x-lg text-danger-hover"
                                type="button"
                                @click="removeProxy(p.url)"
                            ></button>
                        </div>
                    </div>
                    <div class="text-small text-grey">
                        <p>
                            External proxy server used to route outgoing HTTP
                            requests from this app to get around the browser's
                            built-in
                            <a
                                class="text-nowrap"
                                href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS"
                                target="_blank"
                                >Cross-Origin Resource Sharing</a
                            >
                            (CORS) protection. You can run your own proxy server
                            by installing
                            <a
                                class="text-nowrap"
                                href="https://github.com/Rob--W/cors-anywhere"
                                target="_blank"
                                >CORS-Anywhere</a
                            >.
                        </p>
                    </div>
                </section>

                <!-- binance -->
                <!-- <section btn-class="bi bi-graph-up" btn-name="Binance API">
          <Toggle class="mb-1"
            :text="'Enable Binance API for trading purposes'"
            v-model="options.binance.enabled"
            @change="saveOptions()">
          </Toggle>
          <div class="form-input mb-1">
            <span class="text-nowrap text-grey mr-1">Binance API Key:</span>
            <input class="flex-1" type="text" placeholder="..." v-model="options.binance.apikey" @blur="saveOptions()" />
          </div>
          <div class="form-input mb-1">
            <span class="text-nowrap text-grey mr-1">Binance API Secret:</span>
            <input class="flex-1" type="text" placeholder="..." v-model="options.binance.apisecret" @blur="saveOptions()" />
          </div>
          <div class="text-small text-grey">
            <p>
              Provide your <a href="#" @click.prevent="goBinance">Binance API keys</a>
              if you wish to use the trading features available within this app.
              The key you enter here will be stored in your web browser's local storage for use within this app only.
              You can find your key, or create a new one by accessing your account page on the Binance website.
            </p>
          </div>
        </section> -->

                <!-- mailgun -->
                <section
                    id="precors"
                    btn-class="bi bi-at"
                    btn-name="Mailgun API"
                    active
                >
                    <Toggle
                        v-model="options.mailgun.enabled"
                        class="mb-1"
                        :text="'Enable notifications using Mailgun API'"
                        @change="saveOptions()"
                    >
                    </Toggle>
                    <div class="form-input mb-1">
                        <span class="text-nowrap text-grey mr-1"
                            >Mailgun Domain:</span
                        >
                        <input
                            v-model="options.mailgun.domain"
                            class="text-light w-full flex-1"
                            type="text"
                            placeholder="mysite.com"
                            @blur="saveOptions()"
                        />
                    </div>
                    <div class="form-input mb-1">
                        <span class="text-nowrap text-grey mr-1"
                            >Mailgun API Key:</span
                        >
                        <input
                            v-model="options.mailgun.apikey"
                            class="text-light w-full flex-1"
                            type="text"
                            placeholder="key-..."
                            @blur="saveOptions()"
                        />
                    </div>
                    <div class="form-input mb-1">
                        <span class="text-nowrap text-grey mr-1"
                            >Recipient E-mail:</span
                        >
                        <input
                            v-model="options.mailgun.email"
                            class="text-light w-full flex-1"
                            type="text"
                            placeholder="me@site.com"
                            @blur="saveOptions()"
                        />
                    </div>
                    <div class="text-small text-grey">
                        <p>
                            This app can connect to the
                            <a
                                class="text-nowrap"
                                href="https://www.mailgun.com/"
                                target="_blank"
                                >Mailgun API</a
                            >
                            for sending outgoing e-mail notifications using a
                            Mailgun account. You will need to add your Mailgun
                            account details above.
                        </p>
                    </div>
                </section>

                <!-- telegram -->
                <section btn-class="bi bi-send" btn-name="Telegram API">
                    <Toggle
                        v-model="options.telegram.enabled"
                        class="mb-1"
                        :text="'Enable notifications using Telegram Bot API'"
                        @change="saveOptions()"
                    >
                    </Toggle>
                    <div class="form-input mb-1">
                        <span class="text-nowrap text-grey mr-1"
                            >Telegram Bot Key:</span
                        >
                        <input
                            v-model="options.telegram.botkey"
                            class="text-light w-full flex-1"
                            type="text"
                            placeholder="00000:xxxxx..."
                            @blur="saveOptions()"
                        />
                    </div>
                    <div class="form-input mb-1">
                        <span class="text-nowrap text-grey mr-1"
                            >Telegram User ID:</span
                        >
                        <input
                            v-model="options.telegram.userid"
                            class="text-light w-full flex-1"
                            type="text"
                            placeholder="0000000..."
                            @blur="saveOptions()"
                        />
                    </div>
                    <div class="text-small text-grey">
                        <p>
                            This app can connect to the
                            <a
                                class="text-nowrap"
                                href="https://core.telegram.org/bots#creating-a-new-bot"
                                target="_blank"
                                >Telegram Bot API</a
                            >
                            for sending outgoing notifications using the
                            Telegram app on desktop or mobile. You will need to
                            provide a Bot API Token and the User chat ID above.
                            You can use a bot such as
                            <a href="https://t.me/@JsonDumpBot" target="_blank"
                                >@JsonDumpBot</a
                            >
                            to find out what your user chat_id is.
                        </p>
                    </div>
                </section>
            </Tabs>
        </div>
    </section>
</template>

<script>
// sub components
import Tabs from "./Tabs.vue";
import Toggle from "./Toggle.vue";
import SelectMenu from "./SelectMenu.vue";

export default {
    // component list
    components: { Tabs, Toggle, SelectMenu },

    // component props
    props: {
        options: { type: Object, required: true },
    },

    // component data
    data() {
        return {
            corsProxy: "",
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
    computed: {
        // list of saved proxies
        proxyList() {
            return this.options.proxylist.map((url) => {
                let selected = url === this.options.proxy ? true : false;
                return { url, selected };
            });
        },
    },

    // on component mounted
    mounted() {
        this.corsProxy = this.options.proxy;
        this.canNotify = this.$notify.canNotify();
    },

    // custom methods
    methods: {
        // lick to binance site with ref id added
        goBinance(e) {
            e.preventDefault();
            this.$bus.emit("handleClick", "binance", "/", "_blank");
        },

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

        // add proxy to options list
        addProxy(url) {
            if (!url) return;
            this.options.proxylist = this.options.proxylist.filter(
                (p) => p !== url
            );
            this.options.proxylist.push(url);
            this.$bus.emit("showNotice", "Proxy URL added to list.", "success");
            this.saveOptions();
        },

        // remove proxy from options list
        removeProxy(url) {
            if (!url) return;
            this.options.proxylist = this.options.proxylist.filter(
                (p) => p !== url
            );
            this.$bus.emit(
                "showNotice",
                "Proxy URL removed from list.",
                "success"
            );
            this.saveOptions();
        },

        // set active proxy from list
        setProxy(url) {
            this.corsProxy = url;
            this.options.proxy = url;
            this.saveOptions();
        },

        // test cors proxy url
        testProxy(url) {
            this.testing = true;

            this.$ajax.get(url, {
                type: "text",
                proxy: false, // don't proxy the proxy

                error: (xhr, status, error) => {
                    this.testing = false;
                    this.urlSuccess = false;
                    this.$bus.emit("showNotice", error, "warning");
                },

                success: (xhr, status, response) => {
                    let pass = status && status > 199 && status < 400;
                    let clss = pass ? "success" : "warning";

                    this.testing = false;
                    this.urlSuccess = pass;
                    this.$bus.emit(
                        "showNotice",
                        "Proxy URL responded with status code (" +
                            status +
                            ").",
                        clss
                    );
                },
            });
        },

        // cors proxy form submit handler
        corsFormSubmit(e) {
            e.preventDefault();
            let url = e.target.proxyurl.value || "";
            this.testProxy(url);
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

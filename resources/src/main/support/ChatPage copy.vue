<template>
    <div class="active-chat">
        <!-- User Chat messages -->
        <div v-for="(item, i) in ticket" class="user-chats" :key="i">
            <div class="chats">
                <template v-if="item.messages.length > 0">
                    <div
                        v-for="(message, index) in item.messages"
                        :key="index"
                        :class="
                            'chat' + message['side'] == 1 ? 'chat-left' : ''
                        "
                    >
                        <div class="chat-avatar">
                            <span class="avatar box-shadow-1 cursor-pointer">
                                <img
                                    src="message['user']['icon']"
                                    alt="avatar"
                                    height="36"
                                    width="36"
                                />
                            </span>
                        </div>
                        <div class="chat-body">
                            <div class="chat-content">
                                <p>
                                    {{ message["message"] }}
                                </p>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
        <!-- User Chat messages -->

        <!-- Submit Chat form -->
        <form
            class="chat-app-form"
            action="javascript:void(0);"
            @submit="enterChat()"
        >
            <div class="input-group input-group-merge mr-1 form-send-message">
                <span class="speech-to-text input-group-text"
                    ><i data-feather="mic" class="cursor-pointer"></i
                ></span>
                <input
                    type="text"
                    class="form-control message"
                    placeholder="Type your message or use speech to text"
                />
                <span class="input-group-text">
                    <label
                        for="attach-doc"
                        class="attachment-icon form-label mb-0"
                    >
                        <i
                            data-feather="image"
                            class="cursor-pointer text-secondary"
                        ></i>
                        <input type="file" id="attach-doc" hidden /> </label
                ></span>
            </div>
            <button
                type="button"
                class="btn btn-primary send"
                @click="enterChat()"
            >
                <i data-feather="send" class="d-lg-none"></i>
                <span class="d-none d-lg-block">Send</span>
            </button>
        </form>
        <!--/ Submit Chat form -->
    </div>
</template>

<script>
"use strict";

export default {
    props: ["id"],
    // component list
    components: {},

    // component data
    data() {
        return {
            ticket: [],
        };
    },

    // custom methods
    methods: {
        goBack() {
            window.history.length > 1
                ? this.$router.go(-1)
                : this.$router.push("/");
        },
        fetchData() {
            axios
                .post("/user/fetch/support/ticket/" + this.id)
                .then((response) => {
                    this.ticket = response.data.ticket;
                });
        },
        enterChat(source) {
            var message = $(".message").val();
            if (/\S/.test(message)) {
                var html =
                    '<div class="chat-content">' +
                    "<p>" +
                    message +
                    "</p>" +
                    "</div>";
                $(".chat:last-child .chat-body").append(html);
                $(".message").val("");
                $(".user-chats").scrollTop($(".user-chats > .chats").height());
            }
        },
    },

    // on component created
    created() {
        this.fetchData();
        this.enterChat();
    },

    // on component mounted
    mounted() {},

    // on component destroyed
    destroyed() {},
};
</script>

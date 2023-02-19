@extends('layouts.admin')

@section('title', 'Chat Application')

@section('page-style')
    <!-- Page css files -->
    <link rel="stylesheet" href="{{ asset(mix('css/base/pages/app-chat.css')) }}">
    <link rel="stylesheet" href="{{ asset(mix('css/base/pages/app-chat-list.css')) }}">
@endsection

@section('content-sidebar')
    @include('admin/support/support-sidebar')
@endsection

@section('content')
    <div class="body-content-overlay"></div>
    <!-- Main chat area -->
    <section class="chat-app-window">
        <!-- To load Conversation -->
        <div class="start-chat-area">
            <div class="mb-1 start-chat-icon">
                <i data-feather="message-square"></i>
            </div>
            <h4 class="sidebar-toggle start-chat-text">Start Conversation</h4>
        </div>
        <!--/ To load Conversation -->

        <!-- Active Chat -->
        <div class="active-chat d-none">
            <!-- Chat Header -->
            <style>
                .avatar {
                    height: 56% !important;
                }
            </style>
            @foreach ($items as $item)
                <div class="chat-navbar chat-navbar{{ $item->id }}">
                    <header class="chat-header">
                        <div class="flex items-center">
                            <div class="sidebar-toggle d-block d-lg-none mr-1">
                                <i data-feather="menu" class="font-medium-5"></i>
                            </div>
                            <div class="avatar avatar-border user-profile-toggle m-0 mr-1">
                                <img src="{{ getImage(imagePath()['profileImage']['path'] . '/' . $item->user->profile_photo_path, imagePath()['profileImage']['size']) }}"
                                    alt="avatar" height="36" width="36" />
                                <span class="avatar-status-busy"></span>
                            </div>
                            <h6 class="mb-0">{{ $item->user->name }}</h6>
                        </div>
                        <div class="flex items-center">
                            <i data-feather="phone-call" class="cursor-pointer d-sm-block d-none font-medium-2 mr-1"></i>
                            <i data-feather="video" class="cursor-pointer d-sm-block d-none font-medium-2 mr-1"></i>
                            <i data-feather="search" class="cursor-pointer d-sm-block d-none font-medium-2"></i>
                            <div class="dropdown">
                                <button class="btn-icon btn btn-transparent hide-arrow btn-sm dropdown-toggle"
                                    type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i data-feather="more-vertical" id="chat-header-actions" class="font-medium-2"></i>
                                </button>
                                <div class="dropdown-menu dropdown-menu-end" aria-labelledby="chat-header-actions">
                                    <a class="dropdown-item" href="#">View Contact</a>
                                    <a class="dropdown-item" href="#">Mute Notifications</a>
                                    <a class="dropdown-item" href="#">Block Contact</a>
                                    <a class="dropdown-item" href="#">Clear Chat</a>
                                    <a class="dropdown-item" href="#">Report</a>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>
            @endforeach
            <!--/ Chat Header -->

            <!-- User Chat messages -->
            @foreach ($items as $item)
                <div class="user-chats user-chats{{ $item->id }}">
                    <div class="chats">
                        @foreach ($item->messages as $message)
                            <div class="chat {{ $message['side'] == 1 ? 'chat-left' : '' }}">
                                <div class="chat-avatar">
                                    <span class="avatar box-shadow-1 cursor-pointer">
                                        <img src="{{ getImage(imagePath()['profileImage']['path'] . '/' . $message['user']['icon'], imagePath()['profileImage']['size']) }}"
                                            alt="avatar" height="36" width="36" />
                                    </span>
                                </div>
                                <div class="chat-body">
                                    <div class="chat-content">
                                        <p>{{ $message['message'] }}</p>
                                    </div>
                                </div>
                            </div>
                        @endforeach
                    </div>
                </div>
            @endforeach
            <!-- User Chat messages -->

            <!-- Submit Chat form -->
            <form class="chat-app-form" action="javascript:void(0);" onsubmit="enterChat();">
                <div class="input-group input-group-merge mr-1 form-send-message">
                    <span class="speech-to-text input-group-text"><i data-feather="mic" class="cursor-pointer"></i></span>
                    <input type="text" class="form-control message"
                        placeholder="Type your message or use speech to text" />
                    <span class="input-group-text">
                        <label for="attach-doc" class="attachment-icon form-label mb-0">
                            <i data-feather="image" class="cursor-pointer text-secondary"></i>
                            <input type="file" id="attach-doc" hidden /> </label></span>
                </div>
                <button type="button" class="btn btn-primary send" onclick="enterChat();">
                    <i data-feather="send" class="d-lg-none"></i>
                    <span class="d-none d-lg-block">Send</span>
                </button>
            </form>
            <!--/ Submit Chat form -->
        </div>
        <!--/ Active Chat -->
    </section>
    <!--/ Main chat area -->

    <!-- User Chat profile right area -->
    <div class="user-profile-sidebar">
        <header class="user-profile-header">
            <span class="close-icon">
                <i data-feather="x"></i>
            </span>
            <!-- User Profile image with name -->
            <div class="header-profile-sidebar">
                <div class="box-shadow-1 avatar-border avatar-xl">
                    <img src="{{ asset('images/portrait/small/avatar-s-7.jpg') }}" alt="user_avatar" height="70"
                        width="70" />
                    <span class="avatar-status-busy avatar-status-lg"></span>
                </div>
                <h4 class="chat-user-name">Kristopher Candy</h4>
                <span class="user-post">UI/UX Designer 👩🏻‍💻</span>
            </div>
            <!--/ User Profile image with name -->
        </header>
        <div class="user-profile-sidebar-area">
            <!-- About User -->
            <h6 class="section-label mb-1">About</h6>
            <p>Toffee caramels jelly-o tart gummi bears cake I love ice cream lollipop.</p>
            <!-- About User -->
            <!-- User's personal information -->
            <div class="personal-info">
                <h6 class="section-label mb-1 mt-3">Personal Information</h6>
                <ul class="list-unstyled">
                    <li class="mb-1">
                        <i data-feather="mail" class="font-medium-2 mr-5"></i>
                        <span class="align-middle">kristycandy@email.com</span>
                    </li>
                    <li class="mb-1">
                        <i data-feather="phone-call" class="font-medium-2 mr-5"></i>
                        <span class="align-middle">+1(123) 456 - 7890</span>
                    </li>
                    <li>
                        <i data-feather="clock" class="font-medium-2 mr-5"></i>
                        <span class="align-middle">Mon - Fri 10AM - 8PM</span>
                    </li>
                </ul>
            </div>
            <!--/ User's personal information -->

            <!-- User's Links -->
            <div class="more-options">
                <h6 class="section-label mb-1 mt-3">Options</h6>
                <ul class="list-unstyled">
                    <li class="cursor-pointer mb-1">
                        <i data-feather="tag" class="font-medium-2 mr-5"></i>
                        <span class="align-middle">Add Tag</span>
                    </li>
                    <li class="cursor-pointer mb-1">
                        <i data-feather="star" class="font-medium-2 mr-5"></i>
                        <span class="align-middle">Important Contact</span>
                    </li>
                    <li class="cursor-pointer mb-1">
                        <i data-feather="image" class="font-medium-2 mr-5"></i>
                        <span class="align-middle">Shared Media</span>
                    </li>
                    <li class="cursor-pointer mb-1">
                        <i data-feather="trash" class="font-medium-2 mr-5"></i>
                        <span class="align-middle">Delete Contact</span>
                    </li>
                    <li class="cursor-pointer">
                        <i data-feather="slash" class="font-medium-2 mr-5"></i>
                        <span class="align-middle">Block Contact</span>
                    </li>
                </ul>
            </div>
            <!--/ User's Links -->
        </div>
    </div>
    <!--/ User Chat profile right area -->
@endsection

@section('page-script')
    <script>
        "use strict";
        var sidebarToggle = $(".sidebar-toggle"),
            overlay = $(".body-content-overlay"),
            sidebarContent = $(".sidebar-content");

        // Chat sidebar toggle
        function sidebarToggleFunction() {
            if (sidebarToggle.length) {
                sidebarToggle.on("click", function() {
                    sidebarContent.addClass("show");
                    overlay.addClass("show");
                });
            }
        }
        $(function() {
            var chatUsersListWrapper = $(".chat-application .chat-user-list-wrapper"),
                profileSidebar = $(".chat-application .chat-profile-sidebar"),
                profileSidebarArea = $(".chat-application .profile-sidebar-area"),
                profileToggle = $(".chat-application .sidebar-profile-toggle"),
                userProfileToggle = $(".chat-application .user-profile-toggle"),
                userProfileSidebar = $(".user-profile-sidebar"),
                statusRadio = $(
                    ".chat-application .user-status input:radio[name=userStatus]"
                );
            @foreach ($items as $item)
                var userChats{{ $item->id }} = $(".user-chats .user-chats{{ $item->id }}");
            @endforeach
            var chatsUserList = $(".chat-users-list"),
                chatList = $(".chat-list"),
                contactList = $(".contact-list"),
                closeIcon = $(".chat-application .close-icon"),
                sidebarCloseIcon = $(".chat-application .sidebar-close-icon"),
                menuToggle = $(".chat-application .menu-toggle"),
                speechToText = $(".speech-to-text"),
                chatSearch = $(".chat-application #chat-search");

            // init ps if it is not touch device
            if (!$.app.menu.is_touch_device()) {
                // Chat user list
                if (chatUsersListWrapper.length > 0) {
                    var chatUserList = new PerfectScrollbar(chatUsersListWrapper[0]);
                }

                // Admin profile left
                if (userProfileSidebar.find(".user-profile-sidebar-area").length > 0) {
                    var userScrollArea = new PerfectScrollbar(
                        userProfileSidebar.find(".user-profile-sidebar-area")[0]
                    );
                }

                // Chat area
                @foreach ($items as $item)
                    if (userChats{{ $item->id }}.length > 0) {
                        var chatsUser{{ $item->id }} = new PerfectScrollbar(userChats{{ $item->id }}[
                            0
                        ], {
                            wheelPropagation: false,
                        });
                    }
                @endforeach

                // User profile right area
                if (profileSidebarArea.length > 0) {
                    var user_profile = new PerfectScrollbar(profileSidebarArea[0]);
                }
            } else {
                chatUsersListWrapper.css("overflow", "scroll");
                userProfileSidebar
                    .find(".user-profile-sidebar-area")
                    .css("overflow", "scroll");

                @foreach ($items as $item)
                    userChats{{ $item->id }}.css("overflow", "scroll");
                @endforeach
                profileSidebarArea.css("overflow", "scroll");

                // on user click sidebar close in touch devices
                $(chatsUserList)
                    .find("li")
                    .on("click", function() {
                        $(sidebarContent).removeClass("show");
                        $(overlay).removeClass("show");
                    });
            }

            // Chat Profile sidebar & overlay toggle
            if (profileToggle.length) {
                profileToggle.on("click", function() {
                    profileSidebar.addClass("show");
                    overlay.addClass("show");
                });
            }

            // Update status by clicking on Radio
            if (statusRadio.length) {
                statusRadio.on("change", function() {
                    var $className = "avatar-status-" + this.value,
                        profileHeaderAvatar = $(".header-profile-sidebar .avatar span");
                    profileHeaderAvatar.removeClass();
                    profileToggle.find(".avatar span").removeClass();
                    profileHeaderAvatar.addClass($className + " avatar-status-lg");
                    profileToggle.find(".avatar span").addClass($className);
                });
            }

            // On Profile close click
            if (closeIcon.length) {
                closeIcon.on("click", function() {
                    profileSidebar.removeClass("show");
                    userProfileSidebar.removeClass("show");
                    if (!sidebarContent.hasClass("show")) {
                        overlay.removeClass("show");
                    }
                });
            }

            // On sidebar close click
            if (sidebarCloseIcon.length) {
                sidebarCloseIcon.on("click", function() {
                    sidebarContent.removeClass("show");
                    overlay.removeClass("show");
                });
            }

            // User Profile sidebar toggle
            if (userProfileToggle.length) {
                userProfileToggle.on("click", function() {
                    userProfileSidebar.addClass("show");
                    overlay.addClass("show");
                });
            }

            // On overlay click
            if (overlay.length) {
                overlay.on("click", function() {
                    sidebarContent.removeClass("show");
                    overlay.removeClass("show");
                    profileSidebar.removeClass("show");
                    userProfileSidebar.removeClass("show");
                });
            }

            // Add class active on click of Chat users list
            if (chatUsersListWrapper.find("ul li").length) {
                chatUsersListWrapper.find("ul li").on("click", function() {
                    var $this = $(this),
                        startArea = $(".start-chat-area"),
                        activeChat = $(".active-chat");

                    if (chatUsersListWrapper.find("ul li").hasClass("active")) {
                        chatUsersListWrapper.find("ul li").removeClass("active");
                    }

                    $this.addClass("active");
                    $this.find(".badge").remove();

                    if (chatUsersListWrapper.find("ul li").hasClass("active")) {
                        startArea.addClass("d-none");
                        activeChat.removeClass("d-none");
                    } else {
                        startArea.removeClass("d-none");
                        activeChat.addClass("d-none");
                    }
                });
            }

            // auto scroll to bottom of Chat area
            chatsUserList.find("li").on("click", function() {
                @foreach ($items as $item)
                    userChats{{ $item->id }}.animate({
                        scrollTop: userChats{{ $item->id }}[0].scrollHeight
                    }, 400);
                @endforeach
            });

            // Main menu toggle should hide app menu
            if (menuToggle.length) {
                menuToggle.on("click", function(e) {
                    sidebarContent.removeClass("show");
                    overlay.removeClass("show");
                    profileSidebar.removeClass("show");
                    userProfileSidebar.removeClass("show");
                });
            }

            if ($(window).width() < 992) {
                sidebarToggleFunction();
            }

            // Filter
            if (chatSearch.length) {
                chatSearch.on("keyup", function() {
                    var value = $(this).val().toLowerCase();
                    if (value !== "") {
                        // filter chat list
                        chatList.find("li:not(.no-results)").filter(function() {
                            $(this).toggle(
                                $(this).text().toLowerCase().indexOf(value) > -1
                            );
                        });
                        // filter contact list
                        contactList.find("li:not(.no-results)").filter(function() {
                            $(this).toggle(
                                $(this).text().toLowerCase().indexOf(value) > -1
                            );
                        });
                        var chat_tbl_row = chatList.find(
                                "li:not(.no-results):visible"
                            ).length,
                            contact_tbl_row = contactList.find(
                                "li:not(.no-results):visible"
                            ).length;

                        // check if chat row available
                        if (chat_tbl_row == 0) {
                            chatList.find(".no-results").addClass("show");
                        } else {
                            if (chatList.find(".no-results").hasClass("show")) {
                                chatList.find(".no-results").removeClass("show");
                            }
                        }

                        // check if contact row available
                        if (contact_tbl_row == 0) {
                            contactList.find(".no-results").addClass("show");
                        } else {
                            if (contactList.find(".no-results").hasClass("show")) {
                                contactList.find(".no-results").removeClass("show");
                            }
                        }
                    } else {
                        // If filter box is empty
                        chatsUserList.find("li").show();
                        if (chatUsersListWrapper.find(".no-results").hasClass("show")) {
                            chatUsersListWrapper
                                .find(".no-results")
                                .removeClass("show");
                        }
                    }
                });
            }

            if (speechToText.length) {
                // Speech To Text
                var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
                if (SpeechRecognition !== undefined && SpeechRecognition !== null) {
                    var recognition = new SpeechRecognition(),
                        listening = false;
                    speechToText.on("click", function() {
                        var $this = $(this);
                        recognition.onspeechstart = function() {
                            listening = true;
                        };
                        if (listening === false) {
                            recognition.start();
                        }
                        recognition.onerror = function(event) {
                            listening = false;
                        };
                        recognition.onresult = function(event) {
                            $this
                                .closest(".form-send-message")
                                .find(".message")
                                .val(event.results[0][0].transcript);
                        };
                        recognition.onspeechend = function(event) {
                            listening = false;
                            recognition.stop();
                        };
                    });
                }
            }
        });
        // Window Resize
        $(window).on("resize", function() {
            sidebarToggleFunction();
            if ($(window).width() > 992) {
                if ($(".chat-application .body-content-overlay").hasClass("show")) {
                    $(".app-content .sidebar-left").removeClass("show");
                    $(".chat-application .body-content-overlay").removeClass("show");
                }
            }

            // Chat sidebar toggle
            if ($(window).width() < 991) {
                if (!$(".chat-application .chat-profile-sidebar").hasClass("show") ||
                    !$(".chat-application .sidebar-content").hasClass("show")
                ) {
                    $(".sidebar-content").removeClass("show");
                    $(".body-content-overlay").removeClass("show");
                }
            }
        });

        // Add message to chat - function call on form submit
        function enterChat(source) {
            var message = $(".message").val();
            if (/\S/.test(message)) {
                var html =
                    '<div class="chat-content">' + "<p>" + message + "</p>" + "</div>";
                $(".chat:last-child .chat-body").append(html);
                $(".message").val("");
                @foreach ($items as $item)
                    $(".user-chats .user-chat{{ $item->id }}").scrollTop($(
                        ".user-chats .user-chat{{ $item->id }} > .chats").height());
                @endforeach
            }
        }
    </script>
@endsection

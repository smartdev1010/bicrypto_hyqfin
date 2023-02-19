! function (i) {
    var s = i("#ajax-modal"),
        o = ".input-switch, .select, .input-checkbox, .input-bordered";
    _button_submit = "button[type=submit]", 0 < (y = i("form#addUserForm")).length && ajax_form_submit(y), 0 < (y = i("form#user_account_update")).length && ajax_form_submit(y, !1), 0 < (y = i("form#notification")).length && ajax_form_submit(y, !1), 0 < (y = i("form#security")).length && ajax_form_submit(y, !1), 0 < (y = i("form#pwd_change")).length && ajax_form_submit(y);
    var t, e, a, n, d, c, r = i(".activity-delete"),
        u = i("#activity_action").val();
    0 < r.length && r.on("click", function () {
        swal({
            title: "Are you sure?",
            text: "Once Delete, You will not get back this log in future!",
            icon: "warning",
            buttons: !0,
            dangerMode: !0
        }).then(t => {
            var e;
            t && (e = i(this).data("id"), i.post(u, {
                _token: "x-csrftoken",
                delete_activity: e
            }).done(t => {
                "success" == t.msg && ("all" == e ? i("#activity-log tr").fadeOut(1e3, function () {
                    i(this).remove(), i("#activity-log").hide()
                }) : r.parents("tr.activity-" + e).fadeOut(1e3, function () {
                    i(this).remove()
                }))
            }))
        })
    }), i(document).on("click", "a#clear-cache", function (t) {
        t.preventDefault(), i.get(clear_cache_url).done(t => {
            cl(t), "success" == t.msg && (show_toast(t.msg, t.message, "ti ti-trash"), window.location.reload())
        })
    }), 0 < (y = i("form#update_settings")).length && (t = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(t)
    }), ajax_form_submit(y, !1)), 0 < (y = i("form#update_social_settings")).length && (e = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(e)
    }), ajax_form_submit(y, !1)), 0 < (y = i("form#update_general_settings")).length && (a = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(a)
    }), ajax_form_submit(y, !1)), 0 < (y = i("form#update_api_settings")).length && (n = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(n)
    }), ajax_form_submit(y, !1)), 0 < (y = i("form#update_code_settings")).length && (d = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(d)
    }), ajax_form_submit(y, !1)), 0 < (y = i("form#email_settings")).length && ajax_form_submit(y, !1), i(document).on("click", "a.et-item", function (t) {
        t.preventDefault();
        t = null != i(this).data("slug") ? i(this).data("slug") : null != i(this).data("id") ? i(this).data("id") : "";
        i.post(get_et_url, {
            get_template: t,
            _token: csrf_token
        }).done(t => {
            cl(t), s.html(t), init_inside_modal(), s.children(".modal").modal("show")
        })
    }), $resendverifyemail = i(".resend-verify-email"), $resendverifyemail.on("click", function (t) {
        t.preventDefault();
        t = i(this).attr("href");
        i.get(t, {
            _token: csrf_token
        }).done(t => {
            show_toast("success", "A fresh verification link has been sent to your email address.", "ti ti-email")
        })
    }), i(document).on("click", ".user-email-action", function () {
        var t = i(this).data("uid");
        i("input#user_id").val(t)
    }), 0 < (y = i("form#emailToUser")).length && ajax_form_submit(y, !0), i(document).on("click", "a.user-action", function (t) {
        t.preventDefault();
        var e = i(this).data("type"),
            t = "suspend_user" == e ? "warning" : "info",
            a = i(this).data("uid");
        "transactions" == e || "activities" == e || "referrals" == e ? (s.empty(), s.parent().find(".modal-backdrop").remove(), i.post(show_user_info, {
            uid: a,
            req_type: e,
            _token: csrf_token
        }).done(t => {
            t.status && "die" == t.status ? show_toast(t.msg, t.message, "ti ti-lock") : (bs_modal_hide(i(this)), s.html(t), s.children(".modal").modal("show"))
        })) : "suspend_user" != e && "active_user" != e && "reset_pwd" != e && "reset_2fa" != e || swal({
            title: "Are you sure?",
            icon: t,
            buttons: ["Cancel", "Yes"],
            dangerMode: !0
        }).then(t => {
            t && i.post(view_user_url, {
                uid: a,
                req_type: e,
                _token: csrf_token
            }).done(t => {
                null != t.msg && show_toast(t.msg, t.message), cl(t), "active_user" != e && !(e = "suspend_user") || i(this).fadeOut(200, function () {
                    i(this).remove()
                }), i(document).find(".status_user").find(".badge").removeAttr("class").addClass("badge badge-" + t.css + " ucap"), i(".more-menu-" + a).append('<li><a href="#" data-uid="' + a + '" data-type="' + t.status + '" class="user-action"><em class="fas fa-ban"></em>' + ("suspend_user" == e ? "Active" : "Suspend") + "</a></li>"), s.html(t), s.children(".modal").modal("show")
            })
        })
    }), i("a.get_kyc").on("click", function (t) {
        t.preventDefault();
        var n = i(this).data("type"),
            t = null != i(this).data("id") ? i(this).data("id") : "";
        i.post(get_kyc_url, {
            req_type: n,
            get_id: t,
            _token: csrf_token
        }).done(t => {
            var e, a;
            cl(t), s.html(t), "kyc_settings" == n && (t = i("form#kyc_settings"), e = t.find(_button_submit), a = !1, 0 < t.length && ajax_form_submit(t, !1), t.find(o).on("change", function () {
                a = !0, btn_actived(e)
            }), e.on("click", function () {
                a = !1
            }), i(".modal-close").on("click", function (t) {
                t.preventDefault(), !0 === a ? confirm("You made some changes, \nDo you realy close without save?") && (bs_modal_hide(i(this)), a = !1) : bs_modal_hide(i(this))
            })), init_inside_modal(), s.children(".modal").modal("show")
        })
    }), i(document).on("click", ".kyc_action", function () {
        kid = i(this).data("id"), i("input#kyc_id").val(kid)
    }), i("#actionkyc .status-btn").on("click", function (t) {
        t.preventDefault();
        t = i(this).data("val");
        i("#actionkyc .status-btn").removeAttr("style"), i(this).css("border", "2px solid #34425d"), i("#actionkyc input#status").val(t)
    }), $quick_update = ".update_kyc", $kyc_form = "#kyc_status_form", i(document).on("click", $quick_update, function (t) {
        t.preventDefault();
        t = i($kyc_form).find("#kyc_id").val();
        i.post('kyc/update', {
            req_type: "update_kyc_status",
            _token: "x-csrftoken",
            status: i(this).data("value"),
            kyc_id: t
        }).done(t => {
            cl(t), show_toast(t.msg, t.message, "ti ti-trash"), "success" != t.msg && "warning" != t.msg || window.location.reload()
        })
    }), i(document).on("click", "a.kyc_reject", function (t) {
        t.preventDefault(), swal({
            title: "Are you sure?",
            text: "Once Rejected, the client will get one email for Resubmit KYC!",
            icon: "warning",
            buttons: !0,
            dangerMode: !0
        }).then(t => {
            var e = i(this),
                a = i(this).data("current"),
                n = i(this).data("id"),
                o = i(".data-item-" + n);
            t && i.post('kyc/update', {
                req_type: "update_kyc_status",
                _token: "x-csrftoken",
                status: "rejected",
                kyc_id: n
            }).done(t => {
                cl(t), show_toast("warning", t.message, "ti ti-trash"), o.find("span.badge").removeClass("badge-" + a).addClass("badge-danger"), o.find("span.badge").text("Rejected"), e.fadeOut(300), i(".more-menu-" + n).find(".kyc_approve").length < 1 && i(".more-menu-" + n).append('<li><a class="kyc_action" href="#" data-id="' + n + '" data-toggle="modal" data-target="#actionkyc"><em class="far fa-check-square"></em>Approve</a></li>'), i(".more-menu-" + n).find(".kyc_delete").length < 1 && i(".more-menu-" + n).append('<li><a href="javascript:void(0)" data-id="' + n + '" class="kyc_delete"><em class="fas fa-trash-alt"></em>Delete</a></li>')
            })
        })
    }), i(document).on("click", "a.kyc_delete", function (t) {
        t.preventDefault(), swal({
            title: "Are you sure?",
            text: "Once deleted, You can not restore this KYC application!",
            icon: "error",
            buttons: !0,
            dangerMode: !0
        }).then(t => {
            var e = i(this).data("id"),
                a = i(".data-item-" + e);
            t && i.post('kyc/update', {
                req_type: "delete",
                _token: "x-csrftoken",
                kyc_id: e
            }).done(t => {
                cl(t), a.fadeOut(500, function () {
                    i(this).remove()
                }), show_toast(t.msg, t.message, "ti ti-trash")
            })
        })
    }), 0 < (y = i("form#ico_stage")).length && (c = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(c)
    }), ajax_form_submit(y, !1));
    var l, _, m, f = i("form#update_tokens"),
        h = i("button.update-token");
    0 < f.length && h.on("click", function () {
        confirm("Are you sure?") && (ajax_form_submit(f, !1), h.parents("form#update_tokens").submit())
    }), 0 < (y = i("form#ico_stage_price")).length && (l = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(l)
    }), ajax_form_submit(y, !1)), 0 < (y = i("form#ico_stage_bonus")).length && (_ = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(_)
    }), ajax_form_submit(y, !1)), 0 < (y = i("form#stage_setting_details_form")).length && (m = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(m)
    }), ajax_form_submit(y, !1));
    var g, p, k, v, b, w = i("form#stage_setting_purchase_form");
    0 < w.length && (g = w.find(_button_submit), w.find(o).on("keyup change", function () {
        btn_actived(g)
    }), ajax_form_submit(w, !1), w.find(".active_method").change(function () {
        var t = (t = i(".active_method").val()).toLowerCase();
        w.find(".all_methods").removeAttr("disabled");
        t = w.find("#pw-" + t);
        t.is(":checked") || t.click(), t.attr("disabled", !0)
    })), 0 < (y = i("form#referral_setting_form")).length && (p = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(p)
    }), ajax_form_submit(y, !1)), 0 < (y = i("form#upanel_setting_form")).length && (p = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(p)
    }), ajax_form_submit(y, !1)), 0 < (y = i("form.payment_methods_form")).length && (k = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(k)
    }), ajax_form_submit(y, !1)), 0 < (y = i("a.quick-action")).length && "undefined" != typeof quick_update_url && y.on("click", function () {
        var t = i(this);
        i.post(quick_update_url, {
            _token: "x-csrftoken",
            type: t.data("name")
        }).done(t => {
            show_toast(t.msg, t.message), setTimeout(function () {
                window.location.reload()
            }, 300)
        }).fail(t => {
            show_toast("error", "Something is wrong!")
        })
    }), 0 < (y = i("form#pm_manage_form")).length && (v = y.find(_button_submit), y.find(o).on("keyup change", function () {
        btn_actived(v)
    }), ajax_form_submit(y, !1)), i("a.get_pm_manage").on("click", function (t) {
        t.preventDefault();
        t = i(this).data("type");
        s.empty(), i.post(pm_manage_url, {
            req_type: t,
            _token: csrf_token
        }).done(t => {
            cl(t), s.html(t), init_inside_modal(), s.children(".modal").modal("show")
        }).fail(function (t, e, a) {
            _log(t, e, a), show_toast("error", "Something is wrong!\n" + a), show_toast("error", "Something is wrong!\n" + a)
        })
    }), i(document).on("click", "a.get_trnx", function (t) {
        t.preventDefault();
        var e = i(this).data("type"),
            t = null != i(this).data("id") ? i(this).data("id") : "";
        i.post(get_trnx_url, {
            req_type: e,
            get_id: t,
            _token: csrf_token
        }).done(t => {
            cl(t), s.html(t), init_inside_modal(), s.children(".modal").modal("show")
        })
    }), i(document).on("click", ".stages-ajax-action", function (t) {
        t.preventDefault();
        var e = i(this),
            a = e.data(),
            n = null,
            o = a.action,
            t = a.stage;
        e.parents(".stage-action").find(".toggle-tigger").add(".toggle-class").removeClass("active"), "overview" == o && "undefined" != typeof stage_action_url && (n = stage_action_url), null !== n && t ? (a._token = "x-csrftoken", i.post(n, a).done(function (t) {
            var e;
            void 0 !== t.modal && t.modal ? (s.html(t.modal), init_inside_modal(), 0 < s.children(".modal").length && s.children(".modal").modal("show")) : t.message && (e = t.icon || "ti ti-info-alt", show_toast(t.msg, t.message, e))
        }).fail(function (t, e, a) {
            show_toast("error", "Something is wrong!\n" + a, "ti ti-alert"), _log(t, e, a)
        })) : show_toast("info", "Nothing to proceed!", "ti ti-info-alt")
    }), i("a#update_stage").on("click", function (t) {
        t.preventDefault();
        var e = i(this).data("type"),
            a = i(this).data("id"),
            t = "",
            n = "active_stage" == e ? stage_active_url : stage_pause_url;
        "active_stage" == e ? t = "Once you make this stage active, other stage will inactive and stop sale on that stage." : "pause_stage" == e ? t = "Do you want to pause temporary your running sales and purchase option disabled?" : "resume_stage" == e && (t = "Do you want to resume your sales and contributor able to purchase token?"), swal({
            title: "Are you sure?",
            text: t,
            icon: "info",
            buttons: ["Cancel", "Yes"],
            dangerMode: !1
        }).then(t => {
            t && i.post(n, {
                _token: "x-csrftoken",
                id: a,
                type: e
            }).done(t => {
                cl(t), show_toast(t.msg, t.message, "ti ti-eye"), "success" == t.msg && window.location.reload()
            }).fail(t => {
                cl(t)
            })
        })
    }), 0 < (y = i("form#add_token")).length && ajax_form_submit(y, !1), i(document).on("click", ".tnx-action", function () {
        var e = i(this),
            a = i(".modal-backdrop"),
            n = e.data("type"),
            o = e.data("id");
        token = e.data("token") ? e.data("token") : 0, chk_adjust = e.data("_chk") ? e.data("_chk") : 0, adjusted_token = e.data("_adjusted") ? e.data("_adjusted") : 0, base_bonus = e.data("_b_bonus") ? e.data("_b_bonus") : 0, token_bonus = e.data("_t_bonus") ? e.data("_t_bonus") : 0, amount = e.data("_amount") ? e.data("_amount") : 0, swal_icon = "approved" == n ? "info" : "warning", swal_cta = "approved" == n ? "Approve" : "Yes", swal_ctac = "approved" == n ? "" : "danger", "approved" == n && null != amount && amount <= 0 ? show_toast("warning", "Invalid Received Amount!") : swal({
            title: "Are you sure?",
            text: "refund" == n ? "If you refund for this transactions, then the token will be added to the stage and subtract the token from user balance." : "",
            icon: swal_icon,
            buttons: {
                cancel: {
                    text: "Cancel",
                    visible: !0
                },
                confirm: {
                    text: swal_cta,
                    className: swal_ctac
                }
            },
            content: {
                element: "refund" == n ? "input" : "span",
                attributes: {
                    placeholder: "refund" == n ? "Write a note..." : "",
                    type: "text"
                }
            },
            dangerMode: !1
        }).then(t => {
            null == t && "" != t || i.post(trnx_action_url, {
                _token: "x-csrftoken",
                req_type: n,
                tnx_id: o,
                token: token,
                chk_adjust: chk_adjust,
                adjusted_token: adjusted_token,
                base_bonus: base_bonus,
                token_bonus: token_bonus,
                amount: amount,
                message: t
            }).done(t => {
                cl(t), show_toast(t.msg, t.message), t.status || ("approved" == n && (i("#tnx-item-" + o).find(".token-amount").text("+" + t.data.total_tokens), i("#tnx-item-" + o).find(".amount-pay").text("+" + t.data.amount), i("#ds-" + o).removeAttr("class").addClass("data-state data-state-approved"), i("#more-menu-" + o).html('<li><a href="' + base_url + "/admin/transactions/view/" + o + '"><em class="ti ti-eye"></em> View Details</a></li>')), "canceled" == n && (i("#more-menu-" + o).find("#canceled").fadeOut(400, function () {
                    i(this).remove()
                }), i("#ds-" + o).removeAttr("class").addClass("data-state data-state-canceled"), i("#more-menu-" + o).append('<li><a href="javascript:void(0)" class="tnx-action" data-type="deleted" data-id="' + o + '"><em class="fas fa-trash-alt"></em>Delete</a></li>')), "deleted" == n && i("#tnx-item-" + o).fadeOut(400, function () {
                    i(this).remove()
                })), e.parents("div.modal").modal("toggle"), a.remove(), void 0 !== t.reload && t.reload && setTimeout(function () {
                    window.location.reload()
                }, 150)
            }).fail(function (t, e, a) {
                _log(t, e, a), show_toast("error", "Something is wrong!\n" + a)
            })
        })
    }), i(document).on("click", ".tnx-transfer-action", function (t) {
        t.preventDefault();
        var e = i(this),
            t = e.data("status");
        swal({
            title: "Are you sure?",
            icon: "rejected" == t ? "warning" : "info",
            text: "rejected" == t ? "The requested token amount will re-adjust into sender account balance once rejected." : "Another transaction will create for receiver and update balance with requested amount once approved.",
            buttons: {
                cancel: {
                    text: "Cancel",
                    visible: !0
                },
                confirm: {
                    text: "rejected" == t ? "Reject" : "Approve",
                    className: "rejected" == t ? "danger" : ""
                }
            },
            dangerMode: "rejected" == t
        }).then(function (t) {
            null == t && "" != t || i.post(transfer_action_url, e.data()).done(function (t) {
                var e = t.icon || "ti ti-info-alt";
                show_toast(t.msg, t.message, e), "success" == t.msg && setTimeout(function () {
                    window.location.reload()
                }, 1200)
            }).fail(function (t, e, a) {
                _log(t, e, a), show_toast("error", "Something is wrong!\n" + a, "ti ti-alert")
            })
        })
    }), i(document).on("click", "#adjust_token", function (t) {
        t.preventDefault();
        t = i(this).data("id");
        s.html(""), i.post(trnx_adjust_url, {
            _token: "x-csrftoken",
            tnx_id: t
        }).done(t => {
            console.log(t), t.status && "die" == t.status ? show_toast(t.msg, t.message, "ti ti-lock") : (s.empty().html(t.modal), init_inside_modal(), s.children(".modal").modal("show"))
        }).fail(function (t, e, a) {
            _log(t, e, a), show_toast("error", "Something is wrong!\n" + a)
        })
    }), 0 < i(".wh-upload-zone").length && (Dropzone.autoDiscover = !1, 0 < i(j = ".whitepaper_upload").length && (b = new Dropzone(j, {
        url: whitepaper_uploads,
        uploadMultiple: !1,
        maxFilesize: 5,
        maxFiles: 1,
        acceptedFiles: "application/pdf",
        hiddenInputContainer: ".hiddenFiles",
        paramName: "whitepaper",
        headers: {
            "X-CSRF-TOKEN": csrf_token
        }
    })).on("success", function (t, e) {
        cl(e);
        var a = e.message;
        "danger" == e.msg && (alert(a), b.removeFile(t)), show_toast(e.msg, e.message, "ti ti-filter")
    })), i(document).on("click", "a.get_page", function (t) {
        t.preventDefault();
        t = i(this).data("slug");
        i.post(view_page_url, {
            page: t,
            _token: csrf_token
        }).done(t => {
            cl(t), "error" == t.msg && (i(".faq-" + get_id).fadeOut(400, function () {
                i(this).remove()
            }), show_toast(t.msg, t.message)), s.html(t), init_inside_modal(), s.children(".modal").modal("show")
        })
    }), i(document).on("click", ".wallet-change-action", function (t) {
        t.preventDefault();
        var e = i(this).data("id"),
            a = i(this).data("action");
        i(this);
        swal({
            title: "Are you sure to " + a + " this request.",
            icon: "approve" == a ? "info" : "warning",
            buttons: ["Cancel", "Yes"],
            dangerMode: !0
        }).then(t => {
            t && i.post(wallet_change_url, {
                id: e,
                action: a,
                _token: csrf_token
            }).done(t => {
                cl(t), "success" == t.msg && i(".request-" + e).hide(400), show_toast(t.msg, t.message)
            })
        })
    }), i(".delete-unverified-user").on("click", function () {
        swal({
            title: "Want to delete unverified users?",
            icon: "warning",
            text: "Please proceed, If you really want to delete all the unverified users permanently from database.",
            buttons: ["Cancel", "Yes"],
            dangerMode: !0
        }).then(t => {
            t && i.post(unverified_delete_url, {
                _token: csrf_token
            }).done(t => {
                show_toast(t.msg, t.message), "no" != t.alt && setTimeout(function () {
                    window.location.reload()
                }, 2e3)
            }).fail(t => {
                cl(t)
            })
        })
    });
    var y = i(".advsearch-opt"),
        x = i(".search-adv-wrap"),
        j = x.find("form");
    0 < y.length && (y.on("click", function (t) {
        t.preventDefault(), i(this).toggleClass("active"), x.slideToggle()
    }), j.find(":input").prop("disabled", !1), j.submit(function () {
        return i(this).find(":input").filter(function () {
            return !this.value
        }).attr("disabled", "disabled"), !0
    }));
    var y = i(".date-opt"),
        D = i(".date-hide-show");
    0 < y.length && ("custom" == y.val() && D.show(), y.on("change", function () {
        "custom" == i(this).val() ? D.show() : D.hide()
    })), j = i("form.update-meta"), y = j.find("a"), 0 < j.length && y.on("click", function (t) {
        t.preventDefault();
        var e = i(this),
            t = e.closest("form").data("type") ? e.closest("form").data("type") : "",
            e = null != e.data("meta") ? e.data("meta") : "";
        i.post(meta_update_url, {
            type: t,
            meta: e,
            _token: csrf_token
        }).done(t => {
            var e = "success" == t.msg ? "ti ti-check" : "ti ti-alert";
            show_toast(t.msg, t.message, e), "success" == t.msg && window.location.reload()
        })
    }), 0 < (y = i(".goto-page")).length && y.on("change", function () {
        window.location.href = i(this).val()
    })
}(jQuery);

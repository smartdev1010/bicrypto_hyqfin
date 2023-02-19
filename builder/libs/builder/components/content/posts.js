/**
 * Copyright (C) 2022 MashDiv
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 *
 */

import { ServerComponent } from "../server-component.js";

class PostsComponent extends ServerComponent {
    constructor() {
        super();

        this.name = "Posts";
        (this.attributes = ["data-v-component-posts"]),
        (this.image = "icons/posts.svg");
        this.html =
            '<div class="mb-3"><label>Your response:</label><textarea class="form-control"></textarea></div>';

        this.properties = [{
                name: false,
                key: "source",
                inputtype: RadioButtonInput,
                inline: false,
                col: 12,
                htmlAttr: "data-v-source",
                data: {
                    inline: true,
                    extraclass: "btn-group-fullwidth",
                    options: [{
                            value: "automatic",
                            icon: "la la-cog",
                            text: "Configuration",
                            title: "Configuration",
                            extraclass: "btn-sm",
                            checked: true,
                        },
                        {
                            value: "autocomplete",
                            text: "Autocomplete",
                            title: "Autocomplete",
                            icon: "la la-search",
                            extraclass: "btn-sm",
                        },
                    ],
                },

                setGroup: (group) => {
                    $(".mb-3[data-group]").attr(
                        "style",
                        "display:none !important"
                    );
                    $('.mb-3[data-group="' + group + '"]').attr("style", "");
                    //return element;
                },
                onChange: function(element, value, input) {
                    this.setGroup(input.value);
                    return element;
                },
                init: function(node) {
                    //this.setGroup(node.dataset.vType);
                    //return 'autocomplete';
                    return node.dataset.vSource;
                },
            },
            {
                name: "Start from page",
                group: "automatic",
                col: 6,
                inline: false,
                key: "page",
                htmlAttr: "data-v-page",
                data: {
                    value: "1", //default
                    min: "1",
                    max: "1024",
                    step: "1",
                },
                inputtype: NumberInput,
            },
            {
                name: "Order by",
                group: "automatic",
                key: "order",
                col: 6,
                inline: false,
                htmlAttr: "data-v-order_by",
                inputtype: SelectInput,
                data: {
                    options: [{
                            value: "NULL",
                            text: "Default",
                        },
                        {
                            value: "date_added",
                            text: "Date added",
                        },
                        {
                            value: "date_modified",
                            text: "Date modified",
                        }
                        /*, {
					value: "sales",
					text: "Sales"
				}*/
                        ,
                    ],
                },
            },
            {
                name: "Order direction",
                group: "automatic",
                key: "order",
                col: 6,
                inline: false,
                htmlAttr: "data-v-direction",
                inputtype: SelectInput,
                data: {
                    options: [{
                            value: "asc",
                            text: "Ascending",
                        },
                        {
                            value: "desc",
                            text: "Descending",
                        },
                    ],
                },
            },
            {
                name: "Limit to categories",
                group: "automatic",
                key: "category",
                htmlAttr: "data-v-category",
                inline: false,
                col: 12,
                inputtype: TagsInput,
                data: {
                    url: "/admin/?module=editor/autocomplete&action=categories",
                },
            },
            {
                name: "Limit to manufacturers",
                group: "automatic",
                key: "manufacturer",
                htmlAttr: "data-v-manufacturer",
                inline: false,
                col: 12,
                inputtype: TagsInput,
                data: {
                    url: "/admin/?module=editor/autocomplete&action=manufacturers",
                },
            },
            {
                name: "Posts",
                key: "posts",
                group: "autocomplete",
                htmlAttr: "data-v-post_id",
                inline: false,
                col: 12,
                inputtype: AutocompleteList,
                data: {
                    url: "/admin/?module=editor/autocomplete&action=posts",
                },
            },
            {
                name: "Nr. of posts",
                group: "automatic",
                col: 6,
                inline: false,
                key: "limit",
                htmlAttr: "data-v-limit",
                inputtype: NumberInput,
                data: {
                    value: "8", //default
                    min: "1",
                    max: "1024",
                    step: "1",
                },
            },
        ];
    }

    init(node) {
        $(".mb-3[data-group]").attr("style", "display:none !important");

        let source = node.dataset.vSource;
        if (!source) {
            source = "automatic";
        }

        $('.mb-3[data-group="' + source + '"]').attr("style", "");
    }
}

let postsComponent = new PostsComponent();

export { postsComponent };
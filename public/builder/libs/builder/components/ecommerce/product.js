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

class ProductComponent {
    constructor() {
        this.name = "Product";
        (this.attributes = ["data-v-component-product"]),
        (this.image = "icons/product.svg");
        this.html =
            '<div class="mb-3"><label>Your response:</label><textarea class="form-control"></textarea></div>';

        this.properties = [{
                name: false,
                key: "source",
                inputtype: RadioButtonInput,
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
                    $(".mb-3[data-v-group]").attr(
                        "style",
                        "display:none !important"
                    );
                    $('.mb-3[data-v-group="' + group + '"]').attr("style", "");

                    return element;
                },
                onChange: function(element, value, input) {
                    this.setGroup(input.value);

                    return element;
                },
                init: (node) => {
                    console.log(node, "init");
                    //return this.setGroup('autocomplete');
                    //return 'autocomplete';
                    return node.dataset.source;
                },
            },
            {
                name: "Product",
                key: "product",
                group: "autocomplete",
                htmlAttr: "data-v-product",
                inline: false,
                col: 12,
                inputtype: AutocompleteList,
                data: {
                    url: "/admin/?module=editor/editor&action=productAutocomplete",
                },
            },
            {
                name: "Nr. of product",
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
                getFromNode: (node) => 10,
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
                getFromNode: (node) => 0,
            },
            {
                name: "Order by",
                group: "automatic",
                key: "order",
                htmlAttr: "data-v-order",
                inputtype: SelectInput,
                data: {
                    options: [{
                            value: "price_asc",
                            text: "Price Ascending",
                        },
                        {
                            value: "price_desc",
                            text: "Price Descending",
                        },
                        {
                            value: "date_asc",
                            text: "Date Ascending",
                        },
                        {
                            value: "date_desc",
                            text: "Date Descending",
                        },
                        {
                            value: "sales_asc",
                            text: "Sales Ascending",
                        },
                        {
                            value: "sales_desc",
                            text: "Sales Descending",
                        },
                    ],
                },
            },
            {
                name: "Category",
                group: "automatic",
                key: "category",
                htmlAttr: "data-v-category",
                inline: false,
                col: 12,
                inputtype: TagsInput,
                data: {
                    url: "/admin/?module=editor&action=productAutocomplete",
                },
            },
            {
                name: "Manufacturer",
                group: "automatic",
                key: "manufacturer",
                htmlAttr: "data-v-manufacturer",
                inline: false,
                col: 12,
                inputtype: TagsInput,
                data: {
                    url: "/admin/?module=editor&action=productAutocomplete",
                },
            },
            {
                name: "Manufacturer 2",
                group: "automatic",
                key: "manufacturer 2",
                htmlAttr: "data-v-manufacturer2",
                inline: false,
                col: 12,
                inputtype: TagsInput,
                data: {
                    url: "/admin/?module=editor&action=productAutocomplete",
                },
            },
        ];
    }

    init(node) {
        $(".mb-3[data-v-group]").attr("style", "display:none !important");
        if (node.dataset.source != undefined) {
            $('.mb-3[data-v-group="' + node.dataset.source + '"]').attr(
                "style",
                ""
            );
        } else {
            $(".mb-3[data-v-group]:first").attr("style", "");
        }
    }
}

let productComponent = new ProductComponent();

export { productComponent };
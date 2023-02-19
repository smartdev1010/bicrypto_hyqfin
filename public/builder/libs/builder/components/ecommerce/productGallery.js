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

class ProductGalleryComponent {
    constructor() {
        this.name = "Products";
        (this.attributes = ["data-v-component-product-gallery"]),
        (this.image = "icons/products.svg");
        this.html =
            '<div class="mb-3"><label>Your response:</label><textarea class="form-control"></textarea></div>';

        this.properties = [];
    }

    init(node) {
        $(".mb-3[data-v-group]").attr("style", "display:none !important");
        if (node.dataset.type != undefined) {
            $('.mb-3[data-v-group="' + node.dataset.type + '"]').attr(
                "style",
                ""
            );
        } else {
            $(".mb-3[data-v-group]:first").attr("style", "");
        }
    }
}

let productGalleryComponent = new ProductGalleryComponent();

export { productGalleryComponent };
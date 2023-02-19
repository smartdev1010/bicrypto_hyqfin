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

var ckeditorOptions = {
    extraPlugins: "sharedspace",
    sharedSpaces: {
        top: "#wysiwyg-editor",
    },
};

Vvveb.WysiwygEditor = {
    isActive: false,
    oldValue: "",
    doc: false,
    editor: false,
    toolbar: false,

    init: function(doc) {
        this.doc = doc;
        //use default editor toolbar for ckeditor
        this.toolbar = $("#wysiwyg-editor");
        this.toolbar.removeClass("default-editor").addClass("ckeditor");
        this.toolbar.html("");
    },

    edit: function(element) {
        this.element = element;
        this.isActive = true;
        this.oldValue = element.html();
        Vvveb.Builder.selectPadding = 10;
        //Vvveb.Builder.highlightEnabled = false;
        element.attr({ contenteditable: true, spellcheckker: false });

        CKEDITOR.disableAutoInline = true;
        ckeditorOptions.sharedSpaces.top = this.toolbar.get(0);
        this.editor = CKEDITOR.inline(element.get(0), ckeditorOptions);

        this.toolbar.show();
    },

    destroy: function(element) {
        //this.editor.destroy();
        element.removeAttr("contenteditable spellcheckker");
        //Vvveb.Builder.highlightEnabled = true;
        this.toolbar.hide();

        node = this.element.get(0);
        Vvveb.Undo.addMutation({
            type: "characterData",
            target: node,
            oldValue: this.oldValue,
            newValue: node.innerHTML,
        });
    },
};
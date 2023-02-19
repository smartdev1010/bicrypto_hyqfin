/*
 "elements/blockquote",
 "elements/testimonial",
 "elements/code",
 "elements/social-icons",
 "elements/carousel",
 "elements/icon-list",
 popup-button cu editare continut popup cu un toggle ca la flip box
 * 
 * accordion
 * sideblock
 * tabs
 * slider
 * parallax
 * fullscreen slider
 * 
 * section, footer, header, icon,gallery,slider,menu,logo,tabs,accordion,flip-box,counter,contact-form,svg-icon, cover, counter, contact form, flip box
 
 
 
 */

Vvveb.ComponentsGroup["Elements"] = [
    "elements/section",
    "elements/footer",
    "elements/header",
    "elements/icon",
    "elements/gallery",
    "elements/slider",
    "elements/menu",
    "elements/logo",
    "elements/tabs",
    "elements/accordion",
    "elements/flip-box",
    "elements/counter",
    "elements/contact-form",
    "elements/svg-icon",
    "elements/figure",
    "elements/counter",
    "elements/contact-form",
    "elements/subscribe-form",
    "elements/flip box",
    "elements/blockquote",
    "elements/testimonial",
    "elements/social-icons",
    "elements/carousel",
    "elements/icon-list",
    "elements/divider",
    "elements/separator",
    "elements/image-box",
    "elements/icon-box",
    "elements/animated-headline",
    "elements/price-table",
    "elements/price-list",
    "elements/reviews",
    "elements/code",
    "elements/image-comparison",
    "elements/back-to-top",
    "elements/blob", //https://unlimited-elements.com/blob-shape-widget-for-elementor/
    "elements/image-shape", //https://unlimited-elements.com/image-shapes-for-elementor-page-builder/
    "elements/image-shape", //https://unlimited-elements.com/image-shapes-for-elementor-page-builder/

    // cover
    //counter
    //contact form
    //flip box - https://www.w3schools.com/howto/howto_css_flip_box.asp
];

// Section
/*
 content
	- hide on desktop
	- hide on tablet
	- hide on mobile
 style
	- background
		- image
			- url 
			- size - cover / contain /auto
			- attachement - scroll / fixed / parallax
			- position
				- top 
				- left
			- size
				- width
				- height
		- video
			- native
			- yotube 
			- vimeo
			- url
		- slider?	
		- color
	- background overlay
		-color
			- color
		- gradient
			- type - linear / radial
			- color
			- secondary color
			- angle 
			- position
			
		- opacity
		- blend mode

	- separator 
		- top
			- divider
			- color
			- width
			- height
		- bottom
	- padding
	- margin
*/

Vvveb.Components.extend("_base", "elements/figure", {
    nodes: ["figure"],
    name: "Figure",
    image: "icons/image.svg",
    resizable: true,
    html: `<figure>
		  <img src="${Vvveb.baseUrl}icons/image.svg" alt="Trulli">
		  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
		  <div class="border"></div>
		</figure>`,

    stylesheets: [{
        //the css is added in head when the element is added to page
        src: Vvveb.baseUrl + "css/figure.css",
        //the css is removed on save if none of the figure elements are present in the page
        mustHaveElement: "figure",
    }, ],
    /*
	javascripts:[
		{
			'src': Vvveb.baseUrl + 'css/figure.js',
			//the js is removed on save if none of the figure elements are present in the page
			'mustHaveElement':"figure",
		}
	],*/
    resizable: true, //show select box resize handlers

    properties: [{
            name: "Image",
            key: "src",
            child: "img",
            htmlAttr: "src",
            inputtype: ImageInput,
        },
        {
            name: "Width",
            key: "width",
            child: "img",
            htmlAttr: "width",
            inputtype: TextInput,
        },
        {
            name: "Height",
            key: "height",
            child: "img",
            htmlAttr: "height",
            inputtype: TextInput,
        },
        {
            name: "Alt",
            key: "alt",
            child: "img",
            htmlAttr: "alt",
            inputtype: TextInput,
        },
        {
            name: "Caption",
            key: "caption",
            child: "figcaption",
            htmlAttr: "innerHTML",
            inputtype: TextareaInput,
        },
    ],
});

//Icon
Vvveb.Components.add("elements/icon", {
    nodes: ["i.icon"],
    name: "Icon",
    image: "icons/star.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});
/*
V.Resources.Icons =
[{
	value: `stopwatch.svg`,
	text: "Star"
}, 
{
	value: `envelope.svg`,
	text: "Sections"
}, {
	value: `star.svg`,
	text: "Flipbox"
}];*/

Vvveb.Components.extend("_base", "elements/svg-icon", {
    nodes: ["svg"],
    name: "Svg Icon",
    image: "icons/star.svg",
    html: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="64" height="64">
		<path d="M 30.335938 12.546875 L 20.164063 11.472656 L 16 2.132813 L 11.835938 11.472656 L 1.664063 12.546875 L 9.261719 19.394531 L 7.140625 29.398438 L 16 24.289063 L 24.859375 29.398438 L 22.738281 19.394531 Z"/>
    </svg>`,
    properties: [{
            name: "Icon",
            key: "icon",
            inline: true,
            inputtype: HtmlListSelectInput,
            onChange: function(element, value, input, component) {
                var newElement = $(value);
                let attributes = element.prop("attributes");

                //keep old svg size and colors
                $.each(attributes, function() {
                    if (this.name == "viewBox") return;
                    newElement.attr(this.name, this.value);
                });

                element.replaceWith(newElement);
                return newElement;
            },
            data: {
                url: Vvveb.baseUrl +
                    "../../resources/svg/icons/{value}/index.html",
                clickElement: "li",
                insertElement: "svg",
                elements: "Loading ...",
                options: [{
                        value: "eva-icons",
                        text: "Eva icons",
                    },
                    {
                        value: "ionicons",
                        text: "IonIcons",
                    },
                    {
                        value: "linea",
                        text: "Linea",
                    },
                    {
                        value: "remix-icon",
                        text: "RemixIcon",
                    },
                    {
                        value: "unicons",
                        text: "Unicons",
                    },
                    {
                        value: "clarity-icons",
                        text: "Clarity icons",
                    },
                    {
                        value: "jam-icons",
                        text: "Jam icons",
                    },
                    {
                        value: "ant-design-icons",
                        text: "Ant design icons",
                    },
                    {
                        value: "themify",
                        text: "Themify",
                    },
                    {
                        value: "css.gg",
                        text: "Css.gg",
                    },
                    {
                        value: "olicons",
                        text: "Olicons",
                    },
                    {
                        value: "open-iconic",
                        text: "Open iconic",
                    },
                    {
                        value: "boxicons",
                        text: "Box icons",
                    },
                    {
                        value: "elegant-font",
                        text: "Elegant font",
                    },
                    {
                        value: "dripicons",
                        text: "Dripicons",
                    },
                    {
                        value: "feather",
                        text: "Feather",
                    },
                    {
                        value: "coreui-icons",
                        text: "Coreui icons",
                    },
                    {
                        value: "heroicons",
                        text: "Heroicons",
                    },
                    {
                        value: "iconoir",
                        text: "Iconoir",
                    },
                    {
                        value: "iconsax",
                        text: "Iconsax",
                    },
                    {
                        value: "ikonate",
                        text: "Ikonate",
                    },
                    {
                        value: "tabler-icons",
                        text: "Tabler icons",
                    },
                    {
                        value: "octicons",
                        text: "Octicons",
                    },
                    {
                        value: "system-uicons",
                        text: "System-uicons",
                    },
                    {
                        value: "font-awesome",
                        text: "FontAwesome",
                    },
                    {
                        value: "pe-icon-7-stroke",
                        text: "Pixeden icon 7 stroke",
                    },
                    {
                        value: "77_essential_icons",
                        text: "77 essential icons",
                    },
                    {
                        value: "150-outlined-icons",
                        text: "150 outlined icons",
                    },
                    {
                        value: "material-design",
                        text: "Material Design",
                    },
                ],
            },
        },
        {
            name: "Width",
            key: "width",
            htmlAttr: "width",
            inputtype: RangeInput,
            data: {
                max: 640,
                min: 6,
                step: 1,
            },
        },
        {
            name: "Height",
            key: "height",
            htmlAttr: "height",
            inputtype: RangeInput,
            data: {
                max: 640,
                min: 6,
                step: 1,
            },
        },
        {
            name: "Stroke width",
            key: "stroke-width",
            htmlAttr: "stroke-width",
            inputtype: RangeInput,
            data: {
                max: 512,
                min: 1,
                step: 1,
            },
        },
        {
            key: "svg_style_header",
            inputtype: SectionInput,
            name: false,
            //sort: base_sort++,
            section: style_section,
            data: { header: "Svg colors" },
        },
        {
            name: "Fill Color",
            key: "fill",
            //sort: base_sort++,
            col: 4,
            inline: true,
            section: style_section,
            htmlAttr: "fill",
            inputtype: ColorInput,
        },
        {
            name: "Color",
            key: "color",
            //sort: base_sort++,
            col: 4,
            inline: true,
            section: style_section,
            htmlAttr: "color",
            inputtype: ColorInput,
        },
        {
            name: "Stroke",
            key: "Stroke",
            //sort: base_sort++,
            col: 4,
            inline: true,
            section: style_section,
            htmlAttr: "color",
            inputtype: ColorInput,
        },
    ],
});

Vvveb.Components.add("elements/svg-element", {
    nodes: [
        "path",
        "line",
        "polyline",
        "polygon",
        "rect",
        "circle",
        "ellipse",
        "g",
    ],
    name: "Svg element",
    image: "icons/star.svg",
    html: ``,
    properties: [{
            name: "Fill Color",
            key: "fill",
            //sort: base_sort++,
            col: 4,
            inline: true,
            section: style_section,
            htmlAttr: "fill",
            inputtype: ColorInput,
        },
        {
            name: "Color",
            key: "color",
            //sort: base_sort++,
            col: 4,
            inline: true,
            section: style_section,
            htmlAttr: "color",
            inputtype: ColorInput,
        },
        {
            name: "Stroke",
            key: "Stroke",
            //sort: base_sort++,
            col: 4,
            inline: true,
            section: style_section,
            htmlAttr: "color",
            inputtype: ColorInput,
        },
        {
            name: "Stroke width",
            key: "stroke-width",
            htmlAttr: "stroke-width",
            inputtype: RangeInput,
            data: {
                max: 512,
                min: 1,
                step: 1,
            },
        },
    ],
});

//Gallery
Vvveb.Components.add("elements/gallery", {
    nodes: ["i.icon"],
    name: "Gallery",
    image: "icons/images.svg",
    html: `<section>
				<div class="container>
					<h1>Container</h1>
				</div>
			</section>`,
    properties: [],
});

//Slider
Vvveb.Components.add("elements/slider", {
    nodes: ["i.icon"],
    name: "Slider",
    image: "icons/slider.svg",
    html: `<section>
				<div class="container>
					<h1>Container</h1>
				</div>
			</section>`,
    properties: [{
            name: "Width",
            key: "width",
            htmlAttr: "width",
            inputtype: RangeInput,
            data: {
                max: 640,
                min: 6,
                step: 1,
            },
        },
        {
            name: "Height",
            key: "height",
            htmlAttr: "height",
            inputtype: RangeInput,
            data: {
                max: 640,
                min: 6,
                step: 1,
            },
        },
    ],
});

//Menu
Vvveb.Components.add("elements/Menu", {
    nodes: ["i.icon"],
    name: "menu",
    image: "icons/navbar.svg",
    html: `<section>
				<div class="container>
					<h1>Container</h1>
				</div>
			</section>`,
    properties: [],
});

//Logo
Vvveb.Components.add("elements/logo", {
    nodes: ["i.icon"],
    name: "Logo",
    image: "icons/logo.svg",
    html: `<section>
				<div class="container>
					<h1>Container</h1>
				</div>
			</section>`,
    properties: [],
});

//Tabs
Vvveb.Components.add("elements/tabs", {
    nodes: ["i.icon"],
    name: "Tabs",
    image: "icons/tabs.svg",
    html: `<ul class="nav nav-tabs">
			  <li class="nav-item">
				<a class="nav-link active" aria-current="page" href="#">Active</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link" href="#">Link</a>
			  </li>
			  <li class="nav-item">
				<a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
			  </li>
		</ul>`,
    properties: [],
});

//Accordion
Vvveb.Components.add("elements/accordion", {
    nodes: [".accordion"],
    name: "Accordeon",
    image: "icons/accordion.svg",
    html: `
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>    
    
    
    
    <div class="accordion">
    
			  <div class="accordion-item">
				<div class="accordion-header">
				  <button class="accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="::parent .accordion-collapse">
					Accordion Item #1
				  </button>
				<div class="accordion-collapse collapse show" data-bs-parent=".accordion">
				  <div class="accordion-body">
					<strong> 1This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
				  </div>
				</div>
				</div>
			  </div>
			  
			  <div class="accordion-item">
				<div class="accordion-header">
				  <button class="accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="::parent .accordion-collapse">
					Accordion Item #2
				  </button>
				<div class="accordion-collapse collapse show" data-bs-parent=".accordion">
				  <div class="accordion-body">
					<strong>2 This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
				  </div>
				</div>
				</div>
			  </div>
			  
			  <div class="accordion-item">
				<div class="accordion-header">
				  <button class="accordion-button" type="button" data-bs-toggle="collapse" aria-expanded="true" data-bs-target="::parent .accordion-collapse">
					Accordion Item #3
				  </button>
				<div class="accordion-collapse collapse show" data-bs-parent=".accordion">
				  <div class="accordion-body">
					<strong>3 This is the first item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
				  </div>
				</div>
				</div>
			  </div>
			  
			  
			</div>`,
    properties: [{
        name: "Flush",
        key: "flush",
        htmlAttr: "class",
        validValues: ["accordion-flush"],
        inputtype: ToggleInput,
        data: {
            on: "accordion-flush",
            off: "",
        },
    }, ],
});

Vvveb.Components.add("elements/flip-box", {
    nodes: [".flip-box"],
    name: "Flip box",
    image: "icons/flipbox.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/contact-form", {
    nodes: [".contact-form"],
    name: "Contact form",
    image: "icons/envelope.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/counter", {
    nodes: [".counter"],
    name: "Counter",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/contact-form", {
    nodes: [".counter"],
    name: "Contact form",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/subscribe-form", {
    nodes: [".counter"],
    name: "Subscribe form",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/blockquote", {
    nodes: [".counter"],
    name: "Blockquote",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/testimonial", {
    nodes: [".counter"],
    name: "Testimonial",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/social-icons", {
    nodes: [".counter"],
    name: "Social icons",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/carousel", {
    nodes: [".counter"],
    name: "Carousel",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/icon-list", {
    nodes: [".counter"],
    name: "Icon list",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/divider", {
    nodes: [".counter"],
    name: "Divider",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/separator", {
    nodes: [".counter"],
    name: "Separator",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/Image box", {
    nodes: [".counter"],
    name: "Image Box",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/Icon box", {
    nodes: [".counter"],
    name: "Image Box",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/animated-headline", {
    nodes: [".counter"],
    name: "Animated headline",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/price-table", {
    nodes: [".counter"],
    name: "Price table",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/price-list", {
    nodes: [".counter"],
    name: "Price list",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/reviews", {
    nodes: [".counter"],
    name: "Reviews",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/code", {
    nodes: [".counter"],
    name: "Code",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

Vvveb.Components.add("elements/image-comparison", {
    nodes: [".counter"],
    name: "Image Comparison",
    image: "icons/stopwatch.svg",
    html: `<i class="font-icon la la-star"></i>`,
    properties: [],
});

let ComponentSectionContent = [{
        name: "Text",
        key: "text",
        htmlAttr: "innerHTML",
        inputtype: TextInput,
    },
    {
        name: "Name",
        key: "name",
        htmlAttr: "name",
        inputtype: TextInput,
    },
    {
        name: "Type",
        key: "type",
        htmlAttr: "type",
        inputtype: SelectInput,
        data: {
            options: [{
                    value: "button",
                    text: "button",
                },
                {
                    value: "reset",
                    text: "reset",
                },
                {
                    value: "submit",
                    text: "submit",
                },
            ],
        },
    },
    {
        name: "Autofocus",
        key: "autofocus",
        htmlAttr: "autofocus",
        inputtype: CheckboxInput,
        inline: true,
        col: 6,
    },
    {
        name: "Disabled",
        section: "style",
        key: "disabled",
        htmlAttr: "disabled",
        inputtype: CheckboxInput,
        inline: true,
        col: 6,
    },
];

let ComponentSectionStyle = [{
        key: "Section Style",
        inputtype: SectionInput,
        name: false,
        section: style_section,
        data: { header: "Style" },
    },
    {
        name: "Text1 Style",
        key: "text1",
        htmlAttr: "innerHTML",
        inputtype: TextInput,
        section: style_section,
    },
    {
        name: "Name1 Style",
        key: "name1",
        htmlAttr: "name",
        inputtype: TextInput,
        section: style_section,
    },
    {
        name: "Type1 Style",
        key: "type1",
        htmlAttr: "type",
        inputtype: SelectInput,
        section: style_section,
        data: {
            options: [{
                    value: "button",
                    text: "button",
                },
                {
                    value: "reset",
                    text: "reset",
                },
                {
                    value: "submit",
                    text: "submit",
                },
            ],
        },
    },
    {
        name: "Autofocus1 Style",
        key: "autofocus1",
        htmlAttr: "autofocus",
        inputtype: CheckboxInput,
        inline: true,
        col: 6,
        section: style_section,
    },
    {
        name: "Disabled1 Style",
        key: "disabled1",
        htmlAttr: "disabled",
        inputtype: CheckboxInput,
        inline: true,
        col: 6,
        section: style_section,
    },
];

let ComponentSectionAdvanced = [{
        key: "Section Advanced",
        inputtype: SectionInput,
        name: false,
        section: advanced_section,
        data: { header: "Advanced" },
    },
    {
        name: "Text1 Advanced",
        key: "text1",
        htmlAttr: "innerHTML",
        inputtype: TextInput,
        section: advanced_section,
    },
    {
        name: "Name1 Advanced",
        key: "name1",
        htmlAttr: "name",
        inputtype: TextInput,
        section: advanced_section,
    },
    {
        name: "Type1 Advanced",
        key: "type1",
        htmlAttr: "type",
        inputtype: SelectInput,
        section: advanced_section,
        data: {
            options: [{
                    value: "button",
                    text: "button",
                },
                {
                    value: "reset",
                    text: "reset",
                },
                {
                    value: "submit",
                    text: "submit",
                },
            ],
        },
    },
    {
        name: "Autofocus1 Advanced",
        key: "autofocus1",
        htmlAttr: "autofocus",
        inputtype: CheckboxInput,
        inline: true,
        col: 6,
        section: advanced_section,
    },
    {
        name: "Disabled1 Advanced",
        key: "disabled1",
        htmlAttr: "disabled",
        inputtype: CheckboxInput,
        inline: true,
        col: 6,
        section: advanced_section,
    },
];

Vvveb.Components.add("elements/section", {
    nodes: ["section"],
    name: "Section",
    image: "icons/stream-solid.svg",
    html: `<section>
				<div class="container>
					<h1>Container</h1>
				</div>
			</section>`,
    properties: [
        ...ComponentSectionContent,
        ...ComponentSectionStyle,
        ...ComponentSectionAdvanced,
    ],
});
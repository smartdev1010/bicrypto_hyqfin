function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

function getElementByXpath(path, element = window.FrameDocument) {
	let elements = window.FrameDocument.evaluate(path, element, null, XPathResult.ANY_TYPE, null);
  
    components = [];
	let currentComponent = elements.iterateNext();
	while (currentComponent) {
	  components.push(currentComponent);
	  currentComponent = elements.iterateNext();
	}  
	
	return components;
}

function getComponents() {

	let elements = getElementByXpath(".//*[ @*[starts-with(name(), 'data-v-component-')] ]",  window.FrameDocument);
	return elements;
}

function getElements() {

	let nodes = window.FrameDocument.querySelectorAll("[data-v-id]");
	let component = false;
	let components = [];
	
	for (let i = 0; i < nodes.length; i++) {
	  let item = nodes[i];
	  let type = "v" + ucFirst(item.dataset.vType);
      let componentName = "";

	  let fields = []; 
	  let fieldsNodes = getElementByXpath(".//*[ @*[starts-with(name(), 'data-v-')] ]",  item);
	  for (let j = 0; j < fieldsNodes.length; j++) {
		  let fieldNode = fieldsNodes[j];
		  let field = false;
		  
		  for ( attr in fieldNode.dataset) {
				
				value = fieldNode.dataset[attr];
				if (attr.indexOf(type) == 0) {
					
					attr = attr.replace(type, "").toLowerCase();
					//console.log(attr, value);
					
					
					if (attr == "image" && fieldNode.nodeName == "IMG") {
						content = fieldNode.src;
					} else if (attr == "url" && fieldNode.nodeName == "A") {
						content = fieldNode.href;
					} else {
						content = fieldNode.textContent.trim();
					}
					
					field = {"name":attr, "node":fieldNode, "value": content};
                    if (attr == "name") {
                        componentName = content;
                    }
				}
				
		  }
		  
		  if (field) {
			  fields.push(field);
		  }
	  }
	  
	  component = {"id": item.dataset.vId, name:componentName, "type":item.dataset.vType, "node": item, "fields": fields};
	  components.push(component);
	}
		
	return components;	
}

function getComponentFields() {

	return getElementByXpath(".//*[ @*[starts-with(name(), 'data-v-component-')] ]//*[ @*[starts-with(name(), 'data-v-')] ]",  window.FrameDocument);
}



class ChangeManager {
	
	styles = {};
	cssContainer = false;
	originalContent = {};
	
	constructor() {
	}

	setOriginalContent() {
		this.originalContent = getElements();
	}
	
	diff(original, changed, includeNode = true) {
		
		let changes = {};
		let _new = {};
		
		for (i in changed) {
			let component = changed[i];
			let origComponent = original[i];
			
			if (origComponent) {
                if (!includeNode) {
                    delete component['node'];
                }
                
				if (component["fields"])
				for (j in component["fields"]) {
					
					let field = component["fields"][j];
					let origField = origComponent["fields"][j];

					if (field && origField && (field.value != origField.value)) {
							if (!changes[i]) {
								changes[i] = component;
								changes[i]["fields"] = [];
                                field["oldValue"] = origField.value;
							}
                            
                            if (!includeNode) {
                                delete field['node'];
                            }
                            
							changes[i]["fields"].push(field);
					}
				}
			} else {
				//new
			}
		}
		
		console.log(changes);
		return changes;
	}

	getChangedElements(includeNode = false) {
		
		return this.diff(this.originalContent, getElements(), includeNode);
	}
	
	render() {
        let selector = "#save-offcanvas .components";
		let changes = this.getChangedElements();
        let result = "";
        
        for (i in changes) {
            let component = changes[i];
            let fields = "";
            
            for (j in component["fields"]) {
                let field = component["fields"][j];
                
                fields += tmpl("vvveb-save-component-field", field);
            }
            
            component["fields"] = fields;
            component["id"] = i;
            result += tmpl("vvveb-save-component", component);
        }
        
        let element = document.querySelector(selector);
        element.innerHTML = result;
        //
	}
}


Vvveb.ChangeManager = new ChangeManager();



//Event Objects
class MouseEvent{
    constructor(event,source,windowEvent) {
        this.source = source;
        this.event = event;
        this.windowEvent = windowEvent;
    }

    getSource() {
        return this.source;
    }

    setSource(value) {
        this.source = value;
    }

    getEvent() {
        return this.event;
    }

    setEvent(value) {
        this.event = value;
    }

    getWindowEvent(){
        return this.windowEvent;
    }
    setWindowEvent(windowEvent){
        this.windowEvent = windowEvent;
    }
}
class WindowEvent{
    constructor(event,source) {
        this.source = source;
        this.event = event;
    }

    getSource() {
        return this.source;
    }

    setSource(value) {
        this.source = value;
    }

    getEvent() {
        return this.event;
    }

    setEvent(value) {
        this.event = value;
    }
}

class DocumentEvent{
    constructor(event,source,windowEvent) {
        this.source = source;
        this.event = event;
        this.windowEvent = windowEvent;
    }

    getSource() {
        return this.source;
    }

    setSource(value) {
        this.source = value;
    }

    getEvent() {
        return this.event;
    }

    setEvent(value) {
        this.event = value;
    }
    getWindowEvent(){
        return this.windowEvent;
    }
    setWindowEvent(windowEvent){
        this.windowEvent = windowEvent;
    }
}

class KeyEvent{
    constructor(event,source,windowEvent) {
        this.source = source;
        this.event = event;
        this.windowEvent = windowEvent;
    }

    getSource() {
        return this.source;
    }

    setSource(value) {
        this.source = value;
    }

    getEvent() {
        return this.event;
    }

    setEvent(value) {
        this.event = value;
    }
    getWindowEvent(){
        return this.windowEvent;
    }
    setWindowEvent(windowEvent){
        this.windowEvent = windowEvent;
    }
}


class CustomNode{
    constructor(element,prev,next){
        this._element = element;
        this._prev = prev;
        this._next = next;

    }
}


class HLinkedList{

    /**
     * @constructor
     */
    constructor(name=null){
        this._name = name;
        this._head= new CustomNode(null,null,null);
        this._tail = new CustomNode(null,null,null);
        this._head._next = this._tail;
        this._tail._prev = this._head;
        this._length= 0;
        return this;
    }

    length(){
        return this._length;
    }

    /**
     *
     * @returns {boolean}
     */
    isEmpty(){
        return this._length === 0;
    }

    /**
     *
     * @param e
     * @param {CustomNode} predecessor
     * @param successor
     */
    insertBetween(e,predecessor, successor){
        let newest = new CustomNode(e,predecessor, successor);
        predecessor._next = newest;
        successor._prev = newest;
        this._length += 1;
        return this;
    }

    /**
     *
     * @param {CustomNode}CustomNode
     */
    deleteNode(CustomNode){
        let predecessor = CustomNode._prev;
        let successor = CustomNode._next;
        predecessor._next = successor;
        successor._prev = predecessor;
        this._length -= 1;
        CustomNode._prev=CustomNode._next=CustomNode._element = null;
        return this;
    }

    /**
     *
     * @param {CustomNode}element
     */
    insertFirst(element){
        this.insertBetween(element,this._head,this._head._next);
        return this;
    }

    /**
     *
     * @param element
     */
    add(element){
        this.insertBetween(element,this._tail._prev,this._tail);
        return this;
    }


    /**
     *
     * @returns {*}
     */
    pop(){
        if (this._length !== 0)
        {
            let toPop = this._tail._prev;
            this._tail._prev = toPop._prev;
            return toPop
        }
        else return 0
    }

    /**
     *
     * @returns {Array}
     */
    returnAll(){
        let node = this._head;
        let result =[];
        if (this._length !== 0){
            while(node._next !== this._tail){
                result.push(node._next);
                node = node._next;
            }
            return result
        }
        else return []

    }

    /**
     * @throws NotFoundError
     * @param name
     * @returns {*}
     */
    element(name) {
        let node = this._head;
        if (this._length > 0){
            while (node._next !== this._tail){
                if (node._next._element._name === name){
                    return node._next._element;
                }
                node = node._next;
            }
        }
        throw new NotFoundError;
    }
}

class HStyleSheet extends HLinkedList{
    constructor(){
        super();
        return this;
    }

}
const STYLESHEET = new HStyleSheet();
class HStyleSelector extends HLinkedList{

}




const _UNITS={"PX":"px","PT":"pt","PC":"pc","MM":"mm","IN":"in","EX":"ex","EM":"em","CM":"cm","PERCENTILE":"%"};

class HStyle {


    /**
     *
     * @param name
     */
    constructor(name){
        this._attributes=[];
        this._name =name;
        this._unit ='';
    }
    /**
     *
     * @param {String}unit
     */
    setUnit(unit){
        this._unit= unit;
        return this;
    }
    getUnit(){
        return this._unit;
    }
    getString(){
            let font= "";
            for (let x = 0; x < this._attributes.length; x++) {
                font += this._attributes[x]+this._unit+' ';
            }
            font = font.slice(0, -1);
            return font;
    }

}
class HHeight extends HStyle{

    /**
     *
     * @param {Number}height
     * @param unit
     */
    constructor(height = 100, unit = _UNITS.PERCENTILE) {
        super("height");
        let x = 0;
        for (x; x < 1; x++)
            this._attributes[x] = height;
        this._unit = unit;
        return this;
    }


    /**
     *
     * @param height
     */
    setHeight(height) {
        this._attributes[0]=height;
        return this;
    }

    getAttributes(){
        let height = [];
        for (let x = 0; x < 1; x++) {
            height[x] = "" + this._attributes[x] + this._unit;
            //else  height[x] = this._attributes[x]
        }
        return height
    }
}
class HWidth extends HStyle{


    /**
     *
     * @param {Number}width
     * @param unit
     */
    constructor(width = 100, unit = _UNITS.PERCENTILE) {
        super("width");
        let x = 0;
        for (x; x < 1; x++)
            this._attributes[x] = width;
        this._unit = unit;
        return this;
    }
    /**
     *
     * @param width
     */
    setWidth(width) {
        this._attributes[0]=width;
        return this;
    }

    getAttributes(){
        let width = [];
        for (let x = 0; x < 1; x++) {
            width[x] = "" + this._attributes[x] + this._unit;
            //else  width[x] = this._attributes[x]
        }
        return width
    }

}
class HMaxHeight extends HStyle{

    /**
     *
     * @param {Number}maxHeight
     * @param unit
     */
    constructor(maxHeight = 100, unit = _UNITS.PERCENTILE) {
        super("max-height");
        let x = 0;
        for (x; x < 1; x++)
            this._attributes[x] = maxHeight;
        this._unit = unit
        return this;
    }
    /**
     *
     * @param maxHeight
     */
    setMaxHeight(maxHeight) {
        this._attributes[0]=maxHeight;
        return this;
    }

    getAttributes(){
        let maxHeight = [];
        for (let x = 0; x < 1; x++) {
            maxHeight[x] = "" + this._attributes[x] + this._unit;
            //else  maxHeight[x] = this._attributes[x]
        }
        return maxHeight
    }
}

class HMaxWidth extends HStyle{

    /**
     *
     * @param {Number}maxWidth
     * @param unit
     */
    constructor(maxWidth = 100, unit = _UNITS.PERCENTILE) {
        super("max-width");
        let x = 0;
        for (x; x < 1; x++)
            this._attributes[x] = maxWidth;
        this._unit = unit;
        return this;
    }
    /**
     *
     * @param maxWidth
     */
    setMaxWidth(maxWidth) {
        this._attributes[0]=maxWidth;
        return this;
    }

    getAttributes(){
        let maxWidth = [];
        for (let x = 0; x < 1; x++) {
            maxWidth[x] = "" + this._attributes[x] + this._unit;
            //else  maxWidth[x] = this._attributes[x]
        }
        return maxWidth
    }
}

class HMinWidth extends HStyle{

    /**
     *
     * @param {Number}minWidth
     * @param unit
     */
    constructor(minWidth = 100, unit = _UNITS.PERCENTILE) {
        super("min-width");
        let x = 0;
        for (x; x < 1; x++)
            this._attributes[x] = minWidth;
        this._unit = unit;
        return this;
    }
    /**
     *
     * @param minWidth
     */
    setMinWidth(minWidth) {
        this._attributes[0]=minWidth;
        return this;
    }

    getAttributes(){
        let minWidth = [];
        for (let x = 0; x < 1; x++) {
            minWidth[x] = "" + this._attributes[x] + this._unit;
            //else  minWidth[x] = this._attributes[x]
        }
        return minWidth
    }
}



const CLASSES = new HLinkedList();
const EVENTS = new HLinkedList();
const paint = function(){
};
const repaint = function(){
};

const BORDERSTYLE ={"SOLID" : "solid","DOTTED" :  "dotted","DASHED": "dashed","DOUBLE": "double","GROOVE" :"groove","RIDGE" : "ridge","INSET" : "inset","OUTSET" :"outset","HIDDEN" : "hidden"};
const BORDERWIDTH={"THIN":"thin","MEDIUM":"medium","THICK":"THICK"};
const OVERFLOW ={"HIDDEN": "hidden", "SCROLL":"scroll"};
const POSITION = {'RELATIVE':"relative",'ABSOLUTE':"absolute",'FIXED':"fixed"};
const FLOAT = {'RIGHT':"right",'LEFT':"left",'NONE':"none"};
const CLEAR = {'RIGHT':"right",'LEFT':"left",'BOTH':"both",'NONE':"none"};
const FONT =  {"AGENCY FB":	 "agency fb",
    "ALBERTINA":	 "albertina",
    "ANTIQUA":	 "antiqua",
    "ARCHITECT":	 "architect",
    "ARIAL":	 "arial",
    "BANKFUTURISTIC":	 "bankfuturistic",
    "BANKGOTHIC":	 "bankgothic",
    "BLACKLETTER":	 "blackletter",
    "BLAGOVEST":	 "blagovest",
    "CALIBRI":	 "calibri",
    "COMIC SANS MS":	 "comic sans ms",
    "COURIER":	 "courier",
    "CURSIVE":	 "cursive",
    "DECORATIVE":	 "decorative",
    "FANTASY":	 "fantasy",
    "FRAKTUR":	 "fraktur",
    "FGM":	 "frankin gothic regular",
    "FROSTY":	 "frosty",
    "GARAMOND":	 "garamond",
    "GEORGIA":	 "georgia",
    "HELVETICA":	 "helvetica",
    "IMPACT":	 "impact",
    "MINION":	 "minion",
    "MODERN":	 "modern",
    "MONOSPACE":	 "monospace",
    "OPEN SANS":	 "open sans",
    "PALATINO":	 "palatino",
    "PERPETUA":	 "perpetua",
    "ROMAN":	 "roman",
    "SANS-SERIF":	 "sans-serif",
    "SERIF":	 "serif",
    "SCRIPT":	 "script",
    "SWISS":	 "swiss",
    "SITKA BANNER":	 "Sitka Banner",
    "SEGOE PRINT":	 "Segoe Print",
    "TIMES":	 "times",
    "TIMES NEW ROMAN":	 "times new roman",
    "TREBUCHET MS":	 "Trebuchet MS",
    "TW CEN MT":	 "tw cen mt",
    "VERDANA":	 "verdana",};
const FONTWEIGHT ={'BOLD':"bold",'NORMAL':"normal"};
const FONTSTYLE = {'NORMAL':"normal",'ITALIC': "italic",'OBLIQUE':"oblique"};
const TEXTTRANSFORM = {'UPPERCASE':"uppercase",'LOWERCASE': "lowercase",'CAPITALIZE':"capitalize"};
const TEXTDECORATION = {'NONE':"none",'UNDERLINE': "underline",'OVERLINE':"overline",'LINETHROUGH':"line-through",'BLINK':"blink"};
const TEXTALIGNMENT = {'RIGHT':"right",'LEFT':"left",'JUSTIFY':"justify",'CENTER':"center"};
const VERTICALALIGNMENT = {'TEXTTOP':"text-top;",'BASELINE':"baseline",'TEXTBOTTOM':"text-bottom"};
const LISTSTYLETYPE = {'DECIMAL':"decimal",'DECIMALLEADINGZERO':"decimal-leading-zero",'LOWERALPHA':"lower-alpha",
    'UPPERALPHA':"upper-alpha",'LOWERROMAN':"lower-roman",'UPPERROMAN':"upper-roman",
    'NONE':"none",'DISC':"disc",'CIRCLE':"circle",'SQUARE':"square"};
const LISTSTYLEPOSITION = {'OUTSIDE':"outside",'INSIDE':"inside"};
const EMPTYCELLS = {'SHOW':"show",'HIDE':"hide",'INHERIT':"inherit"};
const BORDERCOLLAPSE = {'COLLAPSE':"collapse",'SEPARATE':"separate"};
const PRELOAD = {'NONE':"none",'AUTO':"auto",'METADATA':'metadata'};
const CURSOR = {'AUTO':"auto",'CROSSHAIR':"crosshair",'DEFAULT':"default",'POINTER':"pointer",'MOVE':"move",'TEXT':"TEXT",'WAIT':"wait",'HELP':"help"};
//Extends Linked List to implement a Tree ADT
class HComponent extends HLinkedList{

    constructor(name,id){
        super(name);
        this.domElement =document.createElement(name);
        this.domElement.className = id;
        this.domElement.id = id;
        this.id = id;
        document.styleSheets[0].addRule("."+ id,"" );
        this.domCssRule = document.styleSheets[0].cssRules[document.styleSheets[0].cssRules.length -1];
    }


    addMouseListener(l){
    this.addEvent("eventTest", "click", (windowEvent) => {l.mouseClicked(new MouseEvent("click",this,windowEvent))})
            .addEvent("eventTest", "contextmenu", (windowEvent) => {l.mouseClicked(new MouseEvent("contextmenu",this,windowEvent))})
            .addEvent("eventTest", "dblclick", (windowEvent) => {l.mouseClicked(new MouseEvent("dblclick",this,windowEvent))})
            .addEvent("eventTest", "mousedown", (windowEvent) => {l.mouseClicked(new MouseEvent("mousedown",this,windowEvent))})
            .addEvent("eventTest", "mouseenter", (windowEvent) => {l.mouseEntered(new MouseEvent("mouseenter",this,windowEvent))})
            .addEvent("eventTest", "mouseleave", (windowEvent) => {l.mouseLeave(new MouseEvent("mouseleave",this,windowEvent))})
            .addEvent("eventTest", "mousemove", (windowEvent) => {l.mouseMoved(new MouseEvent("mousemove",this,windowEvent))})
            .addEvent("eventTest", "mouseout", (windowEvent) => {l.mouseOut(new MouseEvent("mouseout",this,windowEvent))})
            .addEvent("eventTest", "mouseover", (windowEvent) => {l.mouseOver(new MouseEvent("mouseover",this,windowEvent))})
            .addEvent("eventTest", "mousedown", (windowEvent) => {l.mouseDown(new MouseEvent("mousedown",this,windowEvent))})
            .addEvent("eventTest", "mouseup", (windowEvent) => {l.mouseUp(new MouseEvent("mouseup",this,windowEvent))})

    }

    addComponentListener(l){
    this.addWindowEvent("eventTest", "resize", () => {l.componentResized(new WindowEvent("resize",this))})
    }
    addDocumentListener(l){
    this.addEvent("eventTest", "input", (windowEvent) => {l.documentChanged(new DocumentEvent("input",this,windowEvent))})
    }
    addKeyListener(l){
        this.addEvent("eventTest", "keypress", (windowEvent) => {l.keyPressed(new KeyEvent("keypress",this,windowEvent))})
    }
    addScrollListener(l){
        this.addWindowEvent("eventTest", "scroll", () => {l.scrolled(new WindowEvent("scroll",this))})
    }

    getDOMElement(){
        return this.domElement;
    }
    addCustomStyle(style) {
        if (style instanceof Array) {
            for(let x in style)
                this.addIndCustomStyle(this,style[x]);
        }
        else
            this.addIndCustomStyle(this,style);
        repaint();
        return this;
    }

    modifyStyle(style) {

        if (style instanceof Array) {
            for(let x in style)
                this.modifyIndCustomStyle(this,style[x]);
        }
        else
            this.modifyIndCustomStyle(this,style);
        repaint();
        return this;
    }


    addPseudoElement(pseudoElement,style){

        if (style instanceof Array) {
            for(let x in style)
                HComponent.addIndPseudoElement(this, pseudoElement, style[x]);
        }
        else
            HComponent.addIndPseudoElement(this, pseudoElement,style);
        repaint();
        return this;

    }

    static addIndPseudoElement(object,pseudoElement,style){
        try {
            object._stylesheet.element(object._name + pseudoElement).add(style);

        }
        catch (e) {
            if (e instanceof NotFoundError) {
                object._stylesheet.add(new HStyleSelector(object._name + pseudoElement));
                object._stylesheet.element(object._name + pseudoElement).add(style);

            }
        }
        repaint();

    }

    addIndCustomStyle(object,style){
        this.domCssRule.style[style._name] = style.getString();
    }

    modifyIndCustomStyle(object,style){
        this.domCssRule.style[style._name] = style.getString();
    }

    addSelectorRule(selector, style){
        document.styleSheets[0].addRule(this.id+':'+selector, style._name+':'+style.getString());

    }

    addComponent(component){
        if (component instanceof Array){
            for(let x in component){
                this.add(component[x])
            }
        }
        else
            this.add(component);
        return this;
    }

    /**
     *
     * @param element
     */
    add(element){
        super.add(element);
        this.domElement.append(element.getDOMElement());
        return this;
    }

    /**
     *
     * @param id
     * @param eventType
     * @param functionExp
     */
    addEvent(id,eventType,functionExp){
        EVENTS.add(new Event(id,eventType,functionExp,this._id));
        this.domElement.addEventListener(eventType,functionExp);
        return this
    }

    /**
     *
     * @param id
     * @param eventType
     * @param functionExp
     */
    addWindowEvent(id,eventType,functionExp){
        EVENTS.add(new Event(id,eventType,functionExp,this._id));
        window.addEventListener(eventType,functionExp);
        return this
    }

    /**
     *
     * @param id
     */
    removeEvent(id){
        try{

            event = EVENTS.element(id);
            EVENTS.deleteNode(event)
        }
        catch (e) {  }
        repaint();
    }

    /**
     *
     * @param {String} content
     */
    setText(content){
        this._textContent =content;
        this.domElement.textContent =content;

        return this;
    }

    /**
     *
     * @param {String} content
     */
    setTextContent(content){
        this.domElement.textContent =content;
        return this;
    }

    getTextContent(){
        return this.domElement.textContent;
    }
    getInputText(){
        return this.domElement.value;
    }

    createElement(){
        return document.createElement(this._name);
    }


    setHeight(style){
        if(style instanceof Height){
            try{
                let height = this._stylesheet.element(this._name+this._class).element('height');
                height.setHeight(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setWidth(style){
        if(style instanceof Width){
            try{
                let width = this._stylesheet.element(this._name+this._class).element('width');
                width.setWidth(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setMaxHeight(style){
        if(style instanceof MaxHeight){
            try{
                let maxHeight = this._stylesheet.element(this._name+this._class).element('max-height');
                maxHeight.setMaxHeight(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setMaxWidth(style){
        if(style instanceof MaxWidth){
            try{
                let maxWidth = this._stylesheet.element(this._name+this._class).element('max-width');
                maxWidth.setMaxWidth(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setMinHeight(style){
        if(style instanceof MinHeight){
            try{
                let minHeight = this._stylesheet.element(this._name+this._class).element('min-height');
                minHeight.setMinHeight(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }
    setMinWidth(style){
        if(style instanceof MinWidth){
            try{
                let minWidth = this._stylesheet.element(this._name+this._class).element('min-width');
                minWidth.setMinWidth(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }
    setMargin(style){
        if(style instanceof Margin){
            try{
                let margin = this._stylesheet.element(this._name+this._class).element('margin');
                margin.setTop(style._attributes[0]);
                margin.setRight(style._attributes[1]);
                margin.setBottom(style._attributes[2]);
                margin.setLeft(style._attributes[3]);
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }
    setBorder(style){
        if(style instanceof Border){
            try{
                let border = this._stylesheet.element(this._name+this._class).element('border');
                border.setWidth(style._attributes[0]);
                border.setStyle(style._attributes[1]);
                border.setColor(style._attributes[2]);
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }
    setPadding(style){
        if(style._name === "padding"){
            try{
                let padding= this._stylesheet.element(this._name+this._class).element('padding');
                padding.setTop(style._attributes[0]);
                padding.setRight(style._attributes[1]);
                padding.setBottom(style._attributes[2]);
                padding.setLeft(style._attributes[3]);
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;

    }

    setOverflow(style){
        if(style instanceof Overflow){
            try{
                let overflow = this._stylesheet.element(this._name+this._class).element('overflow');
                overflow.setOverflow(style._attributes[0]);
                overflow.setUnit(style._unit)
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setPositioning(position, unit = _UNITS.PX){
        let style =new Position(position);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('position');
            newPosition.setPosition(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this
    }

    setTopPositioning(position, unit = _UNITS.PX){
        let style =new PositionTop(position);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('top');
            newPosition.setTopPositioning(style._attributes[0]);
            newPosition.setUnit(unit)
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this

    }

    setBottomPositioning(position, unit = _UNITS.PX){
        let style =new PositionBottom(position);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('bottom');
            newPosition.setBottomPositioning(style._attributes[0]);
            newPosition.setUnit(unit)
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this

    }

    setRightPositioning(position, unit = _UNITS.PX){
        let style =new PositionRight(position);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('right');
            newPosition.setRightPositioning(style._attributes[0]);
            newPosition.setUnit(unit)
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this

    }

    /**
     *
     * @param {Number}position
     * @param {String}unit
     */
    setLeftPositioning(position, unit = _UNITS.PX){
        let style =new PositionLeft(position,unit);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('left');
            newPosition.setLeftPositioning(style._attributes[0]);
            newPosition.setUnit(unit)
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this

    }

    /**
     *
     * @param {Number}zIndex
     */
    setZIndex(zIndex){
        let style =new ZIndex(zIndex);
        try{
            let newZIndex = this._stylesheet.element(this._name+this._class).element('z-index');
            newZIndex.setZIndex(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(zIndex);
        }
        repaint();
        return this
    }

    /**
     *
     * @param {Number}float
     */
    setFloat(float){
        let style =new Float(float);
        try{
            let newFloat = this._stylesheet.element(this._name+this._class).element('float');
            newFloat.setFloat(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }

        repaint();
        return this
    }

    /**
     *
     * @param {Number}clear
     */
    setClear(clear){
        let style =new Clear(clear);
        try{
            let newFloat = this._stylesheet.element(this._name+this._class).element('clear');
            newFloat.setClear(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this
    }

    setColor(color){
        let style =new Color(color);
            this.modifyStyle(style);
        return this
    }
    setVisible(visible){
        if(visible){
            this.addCustomStyle(Display("inherit"));
        }
        else
        {
            this.addCustomStyle(Display("none"));
        }

        return this;

    }

    setBGColor(color){
        let style =new BackgroundColor(color);
        try{
            let newBGColor = this._stylesheet.element(this._name+this._class).element('background-color');
            newBGColor.setHex(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this
    }
    setFont(font1 = FONT.SERIF  ,font2 = FONT.TIMES,font3 =FONT["TIMES NEW ROMAN"]) {
        let style = new FontFamily(font1, font2, font3);
            this.addCustomStyle(style);
        return this
    }
    setFontSize(size) {
        let style = new FontSize(size);
        try {
            let newSize = this._stylesheet.element(this._name + this._class).element('font-size');
            newSize.setSize(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this
    }
    getValue(){
        return document.getElementById(this._id).value;
    }
    setValue(value){
        document.getElementById(this._id).value = value;
    }

    printComponent(){

        let component ="";
        component += '<' + this._name +'>' + this._textContent;
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                component += node._next._element.printComponent();
                node = node._next;
            }
        }
        component += '</' + this._name +'>';
        return component;
    }


}



class HWindow extends HLinkedList{

    constructor(){
        super('body');
        this.domElement =document.getElementsByTagName('body')[0];
        document.styleSheets[0].addRule('body');
        this.domCssRule = document.styleSheets[0].cssRules[document.styleSheets[0].cssRules.length -1];
    }

    addMouseListener(l){
        this.addEvent("eventTest", "click", () => {l.mouseClicked(new MouseEvent("click",this))})
            .addEvent("eventTest", "contextmenu", () => {l.mouseClicked(new MouseEvent("contextmenu",this))})
            .addEvent("eventTest", "dblclick", () => {l.mouseClicked(new MouseEvent("dblclick",this))})
            .addEvent("eventTest", "mousedown", () => {l.mouseClicked(new MouseEvent("mousedown",this))})
            .addEvent("eventTest", "mouseenter", () => {l.mouseEntered(new MouseEvent("mouseenter",this))})
            .addEvent("eventTest", "mouseleave", () => {l.mouseLeave(new MouseEvent("mouseleave",this))})
            .addEvent("eventTest", "mousemove", () => {l.mouseMoved(new MouseEvent("mousemove",this))})
            .addEvent("eventTest", "mouseout", () => {l.mouseOut(new MouseEvent("mouseout",this))})
            .addEvent("eventTest", "mouseover", () => {l.mouseOver(new MouseEvent("mouseover",this))})
            .addEvent("eventTest", "mousedown", () => {l.mouseDown(new MouseEvent("mousedown",this))})

    }
    addComponentListener(l){
        this.addWindowEvent("eventTest", "resize", () => {l.componentResized(new WindowEvent("resize",this))})
    }
    addDocumentListener(l){
        this.addEvent("eventTest", "input", () => {l.documentChanged(new DocumentEvent("input",this))})
    }
    addScrollListener(l){
        this.addWindowEvent("eventTest", "scroll", () => {l.scrolled(new WindowEvent("scroll",this))})
    }

    addWindowEvent(id,eventType,functionExp){
        window.addEventListener(eventType,functionExp);
        return this
    }

    getDOMElement(){
        return this.domElement;
    }
    addCustomStyle(style) {


        if (style instanceof Array) {
            for(let x in style)
                this.addIndCustomStyle(this,style[x]);
        }
        else
            this.addIndCustomStyle(this,style);
        repaint();
        return this;
    }

    modifyStyle(style) {

        if (style instanceof Array) {
            for(let x in style)
                HComponent.modifyIndCustomStyle(this,style[x]);
        }
        else
            HComponent.modifyIndCustomStyle(this,style);
        repaint();
        return this;
    }


    addPseudoElement(pseudoElement,style){

        if (style instanceof Array) {
            for(let x in style)
                HComponent.addIndPseudoElement(this, pseudoElement, style[x]);
        }
        else
            HComponent.addIndPseudoElement(this, pseudoElement,style);
        repaint();
        return this;

    }

    static addIndPseudoElement(object,pseudoElement,style){
        try {
            object._stylesheet.element(object._name + pseudoElement).add(style);

        }
        catch (e) {
            if (e instanceof NotFoundError) {
                object._stylesheet.add(new HStyleSelector(object._name + pseudoElement));
                object._stylesheet.element(object._name + pseudoElement).add(style);

            }
        }
        repaint();

    }

    addIndCustomStyle(object,style){
        this.domCssRule.style[style._name] = style.getString();
    }

    static modifyIndCustomStyle(object,style){
        try {
            object._stylesheet.element(object._name + object._class).element(style._name);
            object._stylesheet.element(object._name + object._class).element(style._name)._attributes[0] = style._attributes[0];


        }
        catch (e) {
            if (e instanceof NotFoundError) {
                object._stylesheet.add(new HStyleSelector(object._name + object._class));
                object._stylesheet.element(object._name + object._class).add(style);

            }
        }
        repaint();
    }

    addComponent(component){
        if (component instanceof Array){
            for(let x in component){
                this.add(component[x])
            }
        }
        else
            this.add(component);
        return this;
    }

    /**
     *
     * @param element
     */
    add(element){
        super.add(element);
        this.domElement.append(element.getDOMElement());
        return this;
    }

    /**
     *
     * @param id
     * @param eventType
     * @param functionExp
     */
    addEvent(id,eventType,functionExp){
        EVENTS.add(new Event(id,eventType,functionExp,this._id));
        repaint();
        return this
    }

    /**
     *
     * @param id
     */
    removeEvent(id){
        try{

            event = EVENTS.element(id);
            EVENTS.deleteNode(event)
        }
        catch (e) {  }
        repaint();
    }

    /**
     *
     * @param {String} content
     */
    setTextContent(content){
        this._textContent =content;
        repaint();

        return this;
    }

    getTextContent(){
        return this._textContent;
    }

    createElement(){
        return document.createElement(this._name);
    }


    setHeight(style){
        if(style instanceof Height){
            try{
                let height = this._stylesheet.element(this._name+this._class).element('height');
                height.setHeight(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setWidth(style){
        if(style instanceof Width){
            try{
                let width = this._stylesheet.element(this._name+this._class).element('width');
                width.setWidth(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setMaxHeight(style){
        if(style instanceof MaxHeight){
            try{
                let maxHeight = this._stylesheet.element(this._name+this._class).element('max-height');
                maxHeight.setMaxHeight(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setMaxWidth(style){
        if(style instanceof MaxWidth){
            try{
                let maxWidth = this._stylesheet.element(this._name+this._class).element('max-width');
                maxWidth.setMaxWidth(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setMinHeight(style){
        if(style instanceof MinHeight){
            try{
                let minHeight = this._stylesheet.element(this._name+this._class).element('min-height');
                minHeight.setMinHeight(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }
    setMinWidth(style){
        if(style instanceof MinWidth){
            try{
                let minWidth = this._stylesheet.element(this._name+this._class).element('min-width');
                minWidth.setMinWidth(style._attributes[0])
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }
    setMargin(style){
        if(style instanceof Margin){
            try{
                let margin = this._stylesheet.element(this._name+this._class).element('margin');
                margin.setTop(style._attributes[0]);
                margin.setRight(style._attributes[1]);
                margin.setBottom(style._attributes[2]);
                margin.setLeft(style._attributes[3]);
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }
    setBorder(style){
        if(style instanceof Border){
            try{
                let border = this._stylesheet.element(this._name+this._class).element('border');
                border.setWidth(style._attributes[0]);
                border.setStyle(style._attributes[1]);
                border.setColor(style._attributes[2]);
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }
    setPadding(style){
        if(style._name === "padding"){
            try{
                let padding= this._stylesheet.element(this._name+this._class).element('padding');
                padding.setTop(style._attributes[0]);
                padding.setRight(style._attributes[1]);
                padding.setBottom(style._attributes[2]);
                padding.setLeft(style._attributes[3]);
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;

    }

    setOverflow(style){
        if(style instanceof Overflow){
            try{
                let overflow = this._stylesheet.element(this._name+this._class).element('overflow');
                overflow.setOverflow(style._attributes[0]);
                overflow.setUnit(style._unit)
            }
            catch (e) {

                this.addCustomStyle(style);
            }

        }
        repaint();
        return this;
    }

    setPositioning(position, unit = _UNITS.PX){
        let style =new Position(position);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('position');
            newPosition.setPosition(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this
    }

    setTopPositioning(position, unit = _UNITS.PX){
        let style =new PositionTop(position);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('top');
            newPosition.setTopPositioning(style._attributes[0]);
            newPosition.setUnit(unit)
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this

    }

    setBottomPositioning(position, unit = _UNITS.PX){
        let style =new PositionBottom(position);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('bottom');
            newPosition.setBottomPositioning(style._attributes[0]);
            newPosition.setUnit(unit)
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this

    }

    setRightPositioning(position, unit = _UNITS.PX){
        let style =new PositionRight(position);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('right');
            newPosition.setRightPositioning(style._attributes[0]);
            newPosition.setUnit(unit)
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this

    }

    /**
     *
     * @param {Number}position
     * @param {String}unit
     */
    setLeftPositioning(position, unit = _UNITS.PX){
        let style =new PositionLeft(position,unit);
        try{
            let newPosition = this._stylesheet.element(this._name+this._class).element('left');
            newPosition.setLeftPositioning(style._attributes[0]);
            newPosition.setUnit(unit)
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this

    }

    /**
     *
     * @param {Number}zIndex
     */
    setZIndex(zIndex){
        let style =new ZIndex(zIndex);
        try{
            let newZIndex = this._stylesheet.element(this._name+this._class).element('z-index');
            newZIndex.setZIndex(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(zIndex);
        }
        repaint();
        return this
    }

    /**
     *
     * @param {Number}float
     */
    setFloat(float){
        let style =new Float(float);
        try{
            let newFloat = this._stylesheet.element(this._name+this._class).element('float');
            newFloat.setFloat(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }

        repaint();
        return this
    }

    /**
     *
     * @param {Number}clear
     */
    setClear(clear){
        let style =new Clear(clear);
        try{
            let newFloat = this._stylesheet.element(this._name+this._class).element('clear');
            newFloat.setClear(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this
    }

    setColor(color){
        let style =new Color(color);
        this.modifyStyle(style);
        return this
    }

    setBGColor(color){
        let style =new BackgroundColor(color);
        try{
            let newBGColor = this._stylesheet.element(this._name+this._class).element('background-color');
            newBGColor.setHex(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this
    }
    setFont(font1 = FONT.SERIF  ,font2 = FONT.TIMES,font3 =FONT["TIMES NEW ROMAN"]) {
        let style = new FontFamily(font1, font2, font3);
        try {
            let newFont = this._stylesheet.element(this._name + this._class).element('font-family');
            newFont.setFont1(style._attributes[0]);
            newFont.setFont2(style._attributes[1]);
            newFont.setFont3(style._attributes[2]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this
    }
    setFontSize(size) {
        let style = new FontSize(size);
        try {
            let newSize = this._stylesheet.element(this._name + this._class).element('font-size');
            newSize.setSize(style._attributes[0]);
        }
        catch (e) {
            this.addCustomStyle(style);
        }
        repaint();
        return this
    }
    getValue(){
        return document.getElementById(this._id).value;
    }
    setValue(value){
        document.getElementById(this._id).value = value;
    }

    printComponent(){

        let component ="";
        component += '<' + this._name +'>' + this._textContent;
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                component += node._next._element.printComponent();
                node = node._next;
            }
        }
        component += '</' + this._name +'>';
        return component;
    }


}

const WINDOW = new HWindow();
class HAnchor extends HComponent{
    constructor(id, href = ""){
        super('a',id);
        this._href = href;
        this.setLink(href)
        return this;
    }
    setLink(href){
        this._href =href;
        this.domElement.href =href;

        return this;
    }
    getLink(){
        return this._href;
    }
}

class HAudio extends HComponent{
    /**
     *
     * @param id
     * @param src
     * @param poster
     * @param preload
     * @param {Boolean}controls
     * @param {Boolean}autoplay
     * @param {Boolean}loop
     * @returns {Audio}
     */
    constructor(id, src = "",preload=PRELOAD.NONE,controls,autoplay,loop){
        super('video',id);
        this._src = src;
        this._preload = preload;
        this._controls = controls;
        this._autoplay = autoplay;
        this._loop = loop;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.src = this._src;
        component.controls = this._controls;
        component.autoplay = this._autoplay;
        component.loop = this._loop;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }

}

class HBackgroundColor extends HStyle{

    /**
     *
     * @param {String}color
     */
    constructor(color){
        super();
        this._name ="background-color";
        this._color = new BaseColor(color);
        this._attributes = [0];
        this._attributes[0] = this._color.getHex();
        return this;
    }


    setRed(red){
        if (red instanceof Number && red >= 0 && red <= 255)
        {
            this._color.red(red);
            this._attributes = this._color.getHex();
            return this;
        }

    }
    setGreen(green){

        if (green instanceof Number && green >= 0 && green <= 255)
        {
            this._color.green(green);
            this._attributes = this._color.getHex();
        }
        return this;

    }
    setBlue(blue){

        if (blue instanceof Number && blue >= 0 && blue <= 255)
        {
            this._color.blue(blue);
            this._attributes = this._color.getHex();
        }
        return this;

    }
    setHue(hue){

        if (hue instanceof Number && hue >= 0 && hue <= 100)
        {
            this._color.hue(hue);
            this._attributes = this._color.getHex();
        }
        return this;

    }
    setSaturation(sat){

        if (sat instanceof Number && sat >= 0 && sat <= 100)
        {
            this._color.saturation(sat);
            this._attributes = this._color.getHex();
        }
        return this;

    }

    setLightness(light){

        if (light instanceof Number && light >= 0 && light <= 100)
        {
            this._color.lightness(light);
            this._attributes = this._color.getHex();
        }
        return this;

    }
    setBrightness(bright){

        if (bright instanceof Number && bright >= 0 && bright <= 100)
        {
            this._color.brightness(bright);
            this._attributes = this._color.getHex();
        }
        return this;
    }
    setHex(hex){


        if (hex instanceof String)
        {
            this._color.hex(hex);
            this._attributes = this._color.getHex();
        }
        return this;
    }
    getAttributes(){
        let color= [];
        for (let x = 0; x < 1; x++) {
            color[x] = this._attributes[x];
            //else  clear[x] = this._attributes[x]
        }
        return color;
    }

}class HBackgroundImage extends HStyle {



    /**
     *
     * @param url
     * @param {Boolean}isResource
     */
    constructor(url, isResource) {
        super();
        this. _attributes = [0];
        if (isResource)
            this._attributes[0]='url(\"' + url + '\")';
        else
            this._attributes[0]= url;
        this._name ="background-image";
        this._name ="background-image";
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setStyle(value) {
        this._attributes[0]='url(\"' + value + '\")';
        return this;
    }

    getAttributes(){
        let urls = [];
        for (let x = 0; x < 1; x++) {
            urls[x] = this._attributes[x];
            //else  urls[x] = this._attributes[x]
        }
        return urls;
    }
}


const Events = {
    RGB_UPDATED : 'RGBUpdated',
    HSL_UPDATED : 'HSLUpdated',
    HSV_UPDATED : 'HSVUpdated',
    HEX_UPDATED : 'HexUpdated',
    INT_UPDATED : 'IntUpdated'
};

class HBaseColor{
    constructor(color){
        this._value = 0;
        this._hex = '#000000';
        this._red = 0;  // 0 - 255
        this._green = 0;  // 0 - 255
        this._blue = 0;  // 0 - 255
        this._hue = 0;  // 0 - 360
        this._saturation = 0;  // 0 - 100
        this._lightness = 0;  // 0 - 100
        this._brightness = 0;  // 0 - 100
        this. _alpha = 1;  // 0 - 1

        this.output = 0;
        this.namedColors = {
            'transparent':'rgba(0, 0, 0, 0)','aliceblue':'#F0F8FF','antiquewhite':'#FAEBD7','aqua':'#00FFFF','aquamarine':'#7FFFD4',
            'azure':'#F0FFFF','beige':'#F5F5DC','bisque':'#FFE4C4','black':'#000000','blanchedalmond':'#FFEBCD','blue':'#0000FF','blueviolet':'#8A2BE2',
            'brown':'#A52A2A','burlywood':'#DEB887','cadetblue':'#5F9EA0','chartreuse':'#7FFF00','chocolate':'#D2691E','coral':'#FF7F50',
            'cornflowerblue':'#6495ED','cornsilk':'#FFF8DC','crimson':'#DC143C','cyan':'#00FFFF','darkblue':'#00008B','darkcyan':'#008B8B','darkgoldenrod':'#B8860B',
            'darkgray':'#A9A9A9','darkgrey':'#A9A9A9','darkgreen':'#006400','darkkhaki':'#BDB76B','darkmagenta':'#8B008B','darkolivegreen':'#556B2F',
            'darkorange':'#FF8C00','darkorchid':'#9932CC','darkred':'#8B0000','darksalmon':'#E9967A','darkseagreen':'#8FBC8F','darkslateblue':'#483D8B',
            'darkslategray':'#2F4F4F','darkslategrey':'#2F4F4F','darkturquoise':'#00CED1','darkviolet':'#9400D3','deeppink':'#FF1493','deepskyblue':'#00BFFF',
            'dimgray':'#696969','dimgrey':'#696969','dodgerblue':'#1E90FF','firebrick':'#B22222','floralwhite':'#FFFAF0','forestgreen':'#228B22',
            'fuchsia':'#FF00FF','gainsboro':'#DCDCDC','ghostwhite':'#F8F8FF','gold':'#FFD700','goldenrod':'#DAA520','gray':'#808080','grey':'#808080',
            'green':'#008000','greenyellow':'#ADFF2F','honeydew':'#F0FFF0','hotpink':'#FF69B4','indianred':'#CD5C5C','indigo':'#4B0082','ivory':'#FFFFF0',
            'khaki':'#F0E68C','lavender':'#E6E6FA','lavenderblush':'#FFF0F5','lawngreen':'#7CFC00','lemonchiffon':'#FFFACD','lightblue':'#ADD8E6',
            'lightcoral':'#F08080','lightcyan':'#E0FFFF','lightgoldenrodyellow':'#FAFAD2','lightgray':'#D3D3D3','lightgrey':'#D3D3D3','lightgreen':'#90EE90',
            'lightpink':'#FFB6C1','lightsalmon':'#FFA07A','lightseagreen':'#20B2AA','lightskyblue':'#87CEFA','lightslategray':'#778899',
            'lightslategrey':'#778899','lightsteelblue':'#B0C4DE','lightyellow':'#FFFFE0','lime':'#00FF00','limegreen':'#32CD32','linen':'#FAF0E6',
            'magenta':'#FF00FF','maroon':'#800000','mediumaquamarine':'#66CDAA','mediumblue':'#0000CD','mediumorchid':'#BA55D3','mediumpurple':'#9370D8',
            'mediumseagreen':'#3CB371','mediumslateblue':'#7B68EE','mediumspringgreen':'#00FA9A','mediumturquoise':'#48D1CC','mediumvioletred':'#C71585',
            'midnightblue':'#191970','mintcream':'#F5FFFA','mistyrose':'#FFE4E1','moccasin':'#FFE4B5','navajowhite':'#FFDEAD','navy':'#000080','oldlace':'#FDF5E6',
            'olive':'#808000','olivedrab':'#6B8E23','orange':'#FFA500','orangered':'#FF4500','orchid':'#DA70D6','palegoldenrod':'#EEE8AA',
            'palegreen':'#98FB98','paleturquoise':'#AFEEEE','palevioletred':'#D87093','papayawhip':'#FFEFD5','peachpuff':'#FFDAB9','peru':'#CD853F',
            'pink':'#FFC0CB','plum':'#DDA0DD','powderblue':'#B0E0E6','purple':'#800080','red':'#FF0000','rosybrown':'#BC8F8F','royalblue':'#4169E1',
            'saddlebrown':'#8B4513','salmon':'#FA8072','sandybrown':'#F4A460','seagreen':'#2E8B57','seashell':'#FFF5EE','sienna':'#A0522D','silver':'#C0C0C0',
            'skyblue':'#87CEEB','slateblue':'#6A5ACD','slategray':'#708090','slategrey':'#708090','snow':'#FFFAFA','springgreen':'#00FF7F',
            'steelblue':'#4682B4','tan':'#D2B48C','teal':'#008080','thistle':'#D8BFD8','tomato':'#FF6347','turquoise':'#40E0D0','violet':'#EE82EE'
        };

        // patterns
        this.isHex = /^#?([0-9a-f]{3}|[0-9a-f]{6})$/i;
        this.isHSL = /^hsla?\((\d{0,3}),\s*(\d{1,3})%,\s*(\d{1,3})%(,\s*[01](\.\d+)*)\)$/;
        this.isRGB = /^rgba?\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)(,\s*[01]?\.?\d*)?\)$/;
        this.isPercent = /^\d+(\.\d+)*%$/;

        this.hexBit = /([0-9a-f])/gi;
        this.leadHex = /^#/;

        this.matchHSL = /^hsla?\((\d{0,3}),\s*(\d{1,3})%,\s*(\d{1,3})%(,\s*[01](\.\d+)*)\)$/;
        this.matchRGB = /^rgba?\((\d{1,3}%?),\s*(\d{1,3}%?),\s*(\d{1,3}%?)(,\s*[01]?\.?\d*)?\)$/;


        this.HEX = 0;  // toString returns hex: #ABC123
        this.RGB = 1;  // toString returns rgb: rgb(0, 100, 255)
        this.PRGB = 2;  // toString returns percent rgb: rgb(0%, 40%, 100%)
        this.RGBA = 3;  // toString returns rgba: rgba(0, 100, 255, 0.5)
        this.PRGBA = 4;  // toString returns percent rgba: rgba(0%, 40%, 100%, 0.5)
        this.HSL = 5;  // toString returns hsl: hsl(360, 50%, 50%)
        this.HSLA = 6;  // toString returns hsla: hsla(360, 50%, 50%, 0.5)
        this.listeners = {};

        this.subscribe(Events.RGB_UPDATED, this.RGBUpdated);
        this.subscribe(Events.HEX_UPDATED, this.HEXUpdated);
        this.subscribe(Events.HSL_UPDATED, this.HSLUpdated);
        this.subscribe(Events.HSV_UPDATED, this.HSVUpdated);
        this.subscribe(Events.INT_UPDATED, this.INTUpdated);
        this.parse(color);

    }


    absRound(number){
        return number << 0;
    };


    hue2rgb(a, b, c) {  // http://www.w3.org/TR/css3-color/#hsl-color
        if(c < 0) c += 1;
        if(c > 1) c -= 1;
        if(c < 1/6) return a + (b - a) * 6 * c;
        if(c < 1/2) return b;
        if(c < 2/3) return a + (b - a) * (2/3 - c) * 6;
        return a;
    };
    percentToValue(p){
        return this.isPercent.test(p) ? this.absRound(parseInt(p) * 2.55) : p;
    };

    parse(value){
        if(typeof value === 'undefined'){
            return this;
        }
        switch(true){
            case isFinite(value) :
                return this.value(value);
            case (value instanceof BaseColor) :
                return this.copy(value);
            case this.isHex.test(value) :
                let  stripped = value.replace(this.leadHex, '');
                if(stripped.length === 3) {
                    stripped = stripped.replace(this.hexBit, '$1$1');
                }
                return this.value(parseInt(stripped, 16));
            case this.isRGB.test(value) :
                let parts = value.match(this.matchRGB);
                this.red(this.percentToValue(parts[1]));
                this.green(this.percentToValue(parts[2]));
                this.blue(this.percentToValue(parts[3]));
                this.alpha(parseInt(parts[4]) || 1);
                return this.value();
            case this.isHSL.test(value) :  // http://www.w3.org/TR/css3-color/#hsl-color
                parts = value.match(this.matchHSL);
                this.hue(parseInt(parts[1]));
                this.saturation(parseInt(parts[2]));
                this.lightness(parseInt(parts[3]));
                this.alpha(parseInt(parts[4]) || 1);
                return this.value();
            case (this.namedColors.hasOwnProperty(value)) :
                value = this.namedColors[value];
                stripped = value.replace(this.leadHex, '');
                return this.value(parseInt(stripped, 16));
            case (typeof value === 'object') :
                return this.set(value);
        }
        return this;
    };

    clone(){
        return new Color(this.value());
    };

    copy(color){
        return this.set(color.value());
    };

    set(key, value){
        if(arguments.length === 1){
            if(typeof key === 'object'){
                for( let p in key){
                    if(typeof this[p] === 'function'){
                        this[p](key[p]);
                    }
                }
            } else if(isFinite(key)){
                this.value(key);
            }
        } else if(typeof this[key] === 'function'){
            this[key](value);
        }
        return this;
    };

    toValue(){
        return this._value;
    };
    interpolate(v, f){
        if(!(v instanceof Color)){
            v = new Color(v);
        };
        this._red = this._red + (v._red - this._red) * f;
        this._green = this._green + (v._green - this._green) * f;
        this._blue = this._blue + (v._blue - this._blue) * f;
        this.broadcast(Event.RGB_UPDATED);
        return this;
    };

    RGB2HSL(){

        let r = this._red / 255;
        let  g = this._green / 255;
        let  b = this._blue / 255;

        let  max = Math.max(r, g, b);
        let  min = Math.min(r, g, b);
        let  l = (max + min) / 2;
        let  v = max;

        if(max === min) {
            this._hue = 0;
            this._saturation = 0;
            this._lightness = this.absRound(l * 100);
            this._brightness = this.absRound(v * 100);
            return;
        };

        let  d = max - min;
        let  s = d / ( ( l <= 0.5) ? (max + min) : (2 - max - min) );
        let  h = ((max === r)
            ? (g - b) / d + (g < b ? 6 : 0)
            : (max === g)
                ? ((b - r) / d + 2)
                : ((r - g) / d + 4)) / 6;

        this._hue = this.absRound(h * 360);
        this._saturation = this.absRound(s * 100);
        this._lightness = this.absRound(l * 100);
        this._brightness = this.absRound(v * 100);
    };
    HSL2RGB(){
        let h = this._hue / 360;
        let s = this._saturation / 100;
        let l = this._lightness / 100;
        let q = l < 0.5    ? l * (1 + s) : (l + s - l * s);
        let  p = 2 * l - q;
        this._red = this.absRound(this.hue2rgb(p, q, h + 1/3) * 255);
        this._green = this.absRound(this.hue2rgb(p, q, h) * 255);
        this._blue = this.absRound(this.hue2rgb(p, q, h - 1/3) * 255);
    };
    HSV2RGB(){  // http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript
        let h = this._hue / 360;
        let s = this._saturation / 100;
        let  v = this._brightness / 100;
        let  r = 0;
        let  g = 0;
        let b = 0;
        let i = this.absRound(h * 6);
        let  f = h * 6 - i;
        let  p = v * (1 - s);
        let q = v * (1 - f * s);
        let t = v * (1 - (1 - f) * s);
        switch(i % 6){
            case 0 :
                let r = v, g = t, b = p;
                break;
            case 1 :
                r = q, g = v, b = p;
                break;
            case 2 :
                r = p, g = v, b = t;
                break;
            case 3 :
                r = p, g = q, b = v;
                break;
            case 4 :
                r = t, g = p, b = v
                break;
            case 5 :
                r = v, g = p, b = q;
                break;
        }
        this._red = this.absRound(r * 255);
        this._green = this.absRound(g * 255);
        this._blue = this.absRound(b * 255);
    };

    INT2HEX(){
        let x = this._value.toString(16);
        x = '000000'.substr(0, 6 - x.length) + x;
        this._hex = '#' + x.toUpperCase();
    };
    INT2RGB(){
        this._red = this._value >> 16;
        this._green = (this._value >> 8) & 0xFF;
        this._blue = this._value & 0xFF;
    };
    HEX2INT(){
        this._value = parseInt(this._hex, 16);
    };
    RGB2INT(){
        this._value = (this._red << 16 | (this._green << 8) & 0xffff | this._blue);
    };
    RGBUpdated(){
        this.RGB2INT();  // populate INT values
        this.RGB2HSL();  // populate HSL values
        this.INT2HEX();  // populate HEX values
    };
    HSLUpdated(){
        this.HSL2RGB();  // populate RGB values
        this.RGB2INT();  // populate INT values
        this.INT2HEX();  // populate HEX values
    };
    HSVUpdated(){
        this.HSV2RGB();  // populate RGB values
        this.RGB2INT();  // populate INT values
        this.INT2HEX();  // populate HEX values
    };
    HEXUpdated(){
        this.HEX2INT();  // populate INT values
        this.INT2RGB();  // populate RGB values
        this.RGB2HSL();  // populate HSL values
    };
    INTUpdated(){
        this.INT2RGB();  // populate RGB values
        this.RGB2HSL();  // populate HSL values
        this.INT2HEX();  // populate HEX values
    };



    value(value){
        return this._handle('_value', value, Events.INT_UPDATED);
    };

    hex(value){
        return this._handle('_hex', value, Events.HEX_UPDATED);
    };

    red(value){
        return this._handle('_red', value, Events.RGB_UPDATED);
    };
    green(value){
        return this._handle('_green', value, Events.RGB_UPDATED);
    };
    blue(value){
        return this._handle('_blue', value, Events.RGB_UPDATED);
    };

    hue(value){
        return this._handle('_hue', value, Events.HSL_UPDATED);
    };
    saturation(value){
        return this._handle('_saturation', value, Events.HSL_UPDATED);
    };
    lightness(value){
        return this._handle('_lightness', value, Events.HSL_UPDATED);
    };

    brightness(value){
        return this._handle('_brightness', value, Events.HSV_UPDATED);
    };

    alpha(value){
        return this._handle('_alpha', value);
    };

    _handle(prop, value, event){
        if(typeof this[prop] !== 'undefined'){
            if(typeof value !== 'undefined'){
                if(value !== this[prop]){
                    this[prop] = value;
                    if(event){
                        this.broadcast(event);
                    }
                }
            }
        }
        return this[prop];
    };

    // convert to CSS values
    getHex(){
        return this._hex;
    };
    getRGB(){
        let  components = [this.absRound(this._red), this.absRound(this._green), this.absRound(this._blue)];
        return 'rgb(' + components.join(', ') + ')';
    };
    getPRGB(){
        let  components = [this.absRound(this._red / 255) + '%', this.absRound(this._green / 255) + '%', this.absRound(this._blue / 255) + '%'];
        return 'rgb(' + components.join(', ') + ')';
    };
    getRGBA(){
        let   components = [this.absRound(this._red), this.absRound(this._green), this.absRound(this._blue), this._alpha];
        return 'rgba(' + components.join(', ') + ')';
    };
    getPRGBA(){
        let components = [this.absRound(this._red / 255) + '%', this.absRound(this._green / 255) + '%', this.absRound(this._blue / 255) + '%', this._alpha];
        return 'rgba(' + components.join(', ') + ')';
    };
    getHSL(){
        let  components = [this.absRound(this._hue), this.absRound(this._saturation) + '%', this.absRound(this._lightness) + '%'];
        return 'hsl(' + components.join(', ') + ')';
    };
    getHSLA(){
        let components = [this.absRound(this._hue), this.absRound(this._saturation) + '%', this.absRound(this._lightness) + '%', this._alpha];
        return 'hsla(' + components.join(', ') + ')';
    };

    format(string){
        let  tokens = {
            r : this._red,
            g : this._green,
            b : this._blue,
            h : this._hue,
            s : this._saturation,
            l : this._lightness,
            v : this._brightness,
            a : this._alpha,
            x : this._hex,
            i : this._value
        };
        for( let token in tokens){
            string = string.split('%' + token + '%').join(tokens[token]);
        };
        return string;
    };


    toString(){
        switch(this.output){
            case 0 :  // Color.HEX
                return this.getHex();
            case 1 :  // Color.RGB
                return this.getRGB();
            case 2 :  // Color.PRGB
                return this.getPRGB();
            case 3 :  // Color.RGBA
                return this.getRGBA();
            case 4 :  // Color.PRGBA
                return this.getPRGBA();
            case 5 :  // Color.HSL
                return this.getHSL();
            case 6 :  // Color.HSLA
                return this.getHSLA();
        };
    };

    // Event Management
    isSubscribed(type){
        return this.listeners[type] != null;
    };
    subscribe(type, callback){
        if(!this.isSubscribed(type)) {
            this.listeners[type] = [];
        };
        this.listeners[type].push(callback);
    };
    unsubscribe(type, callback){
        if(!this.isSubscribed(type)) {
            return;
        }
        let  stack = this.listeners[type];
        let  len = stack.length;
        for(this.i = 0; i < l; i++){
            if(stack[i] === callback){
                stack.splice(i, 1);
                return this.unsubscribe(type, callback);
            }
        }
    }
    broadcast(type, params){
        if(!this.isSubscribed(type)) {
            return;
        }
        let stack = this.listeners[type];
        let l = stack.length;
        for( let i = 0; i < l; i++) {
            stack[i].apply(this, params);
        }
    };

}class HBorder extends HStyle{



    /**
     *
     * @param {BorderWidth}width
     * @param {BorderStyle}style
     * @param {BorderColor}color
     */
    constructor(width = BORDERWIDTH.THICK,style =BORDERSTYLE.DOTTED,color="BLACK"){
        super();
        this._name = "border";
        this._attributes=[0,0,0];
        this._attributes[0]=width;
        this._attributes[1]=style;
        this._attributes[2]=color;
        return this;
    }

    /**
     *
     * @param width
     */
    setWidth(width) {
        this._attributes[0]=width;
        return this;
    }

    /**
     *
     * @param style
     */
    setStyle(style) {
        this._attributes[1]=style;
        return this;
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        this._attributes[2]=color;
        return this;
    }

    setBorder(){


    }
    getAttributes(){
        // To implement Array Copy
        return this._attributes;
    }

}
class HBorderCollapse extends HStyle {
    /**
     *
     * @param collapse
     */
    constructor(collapse = BORDERCOLLAPSE.SEPARATE) {
        super();
        this._name ="border-collapse";
        this._attributes = [0];
        this._attributes[0]=collapse;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setCollapse(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let style = [];
        for (let x = 0; x < 1; x++) {
            style[x] = this._attributes[x];
            //else  style[x] = this._attributes[x]
        }
        return style;
    }
}
class HBorderColor extends HStyle{

    /**
     *
     * @param {String}color
     */
    constructor(color){
        super();
        this._name ="border-color";
        this._color = new BaseColor(color);
        this._attributes = [0];
        this._attributes[0] = this._color.getHex();
        return this;
    }


    setRed(red){
        if (red instanceof Number && red >= 0 && red <= 255)
        {
            this._color.red(red);
            this._attributes = this._color.getHex();
            return this;
        }

    }
    setGreen(green){

        if (green instanceof Number && green >= 0 && green <= 255)
        {
            this._color.green(green);
            this._attributes = this._color.getHex();
        }
        return this;

    }
    setBlue(blue){

        if (blue instanceof Number && blue >= 0 && blue <= 255)
        {
            this._color.blue(blue);
            this._attributes = this._color.getHex();
        }
        return this;

    }
    setHue(hue){

        if (hue instanceof Number && hue >= 0 && hue <= 100)
        {
            this._color.hue(hue);
            this._attributes = this._color.getHex();
        }
        return this;

    }
    setSaturation(sat){

        if (sat instanceof Number && sat >= 0 && sat <= 100)
        {
            this._color.saturation(sat);
            this._attributes = this._color.getHex();
        }
        return this;

    }

    setLightness(light){

        if (light instanceof Number && light >= 0 && light <= 100)
        {
            this._color.lightness(light);
            this._attributes = this._color.getHex();
        }
        return this;

    }
    setBrightness(bright){

        if (bright instanceof Number && bright >= 0 && bright <= 100)
        {
            this._color.brightness(bright);
            this._attributes = this._color.getHex();
        }
        return this;
    }
    setHex(hex){


        if (hex instanceof String)
        {
            this._color.hex(hex);
            this._attributes = this._color.getHex();
        }
        return this;
    }
    getAttributes(){
        let color= [];
        for (let x = 0; x < 1; x++) {
            color[x] = this._attributes[x];
            //else  clear[x] = this._attributes[x]
        }
        return color;
    }


}

class HBorderRadius extends HStyle {



    /**
     *
     * @param radius
     * @param unit
     */
    constructor(radius = 0,unit = _UNITS.PERCENTILE) {
        super();
        this._name ="border-radius";
        this._attributes = [0];
        this._attributes[0] = radius;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setRadius(value) {
        this._attributes[0] = value;
        return this;
    }

    getAttributes(){
        let radius = [];
        for (let x = 0; x < 1; x++) {
            if(this._attributes[x] !== 'auto')
                radius[x] = "" + this._attributes[x] + this._unit;
            else
                radius[x] = this._attributes[x];
        }
        return radius
    }
}
class HBorderSpacing extends HStyle {
    /**
     *
     * @param horizontal
     * @param vertical
     * @param unit
     */
    constructor(horizontal =0, vertical =0,unit = _UNITS.PERCENTILE) {
        super();
        this._name ="border-spacing";
        this._attributes = [0, 0];
        this._attributes[0] = horizontal;
        this._attributes[1] = vertical;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setHorizontal(value) {
        this._attributes[0] = value;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setVertical(value) {
        this._attributes[1] = value;
        return this;
    }

    getAttributes(){
        let spacing = [];
        for (let x = 0; x < 2; x++) {
            if(this._attributes[x] !== 'auto')
                spacing[x] = "" + this._attributes[x] + this._unit;
            else
                spacing[x] = this._attributes[x];
        }
        return spacing
    }
}

class HBorderStyle{
    /**
     *
     * @param style
     */
    constructor(style = BORDERSTYLE.SOLID) {
        let x = 0;
        this._style= [0,0,0,0];
        for(x; x < 4; x++)
            this._style[x] = style;
    }

    /**
     *
     * @param {number}value
     */
    set style(value) {
        let x = 0;
        for(x; x < 4; x++){
            if (this._style[x] === 0)
                this._style[x] = style;
        }
    }

    /**
     *
     * @param {number}value
     */
    set top(value) {
        this._style[0] = value;
    }

    /**
     *
     * @param {number}value
     */
    set right(value) {
        this._style[1] = value;
    }

    /**
     *
     * @param {number}value
     */
    set bottom(value) {
        this._style[2] = value;
    }

    /**
     *
     * @param {number}value
     */
    set left(value) {
        this._style[3] = value;
    }

    toString(){
        return this._style.join(" ")
    }

}
class HBorderWidth extends HStyle{
    /**
     *
     * @param {number}width
     */
    constructor(width=5) {
        super();
        let x = 0;
        this._attributes =[0,0,0,0];
        for(x; x < 4; x++)
            this._attributes[x] = width;
        this._unit = _UNITS.PX
    }

    /**
     *
     * @param {number}value
     */
    set width(value) {
        let x = 0;
        for(x; x < 4; x++){
            if (this._attributes[x] === 0)
                this._attributes[x] = value;
        }
    }

    /**
     *
     * @param {number}value
     */
    set top(value) {
        this._attributes[0] = value;
    }

    /**
     *
     * @param {number}value
     */
    set right(value) {
        this._attributes[1] = value;
    }

    /**
     *
     * @param {number}value
     */
    set bottom(value) {
        this._attributes[2] = value;
    }

    /**
     *
     * @param {number}value
     */
    set left(value) {
        this._attributes[3] = value;
    }

    /**
     *
     * @param {string}value
     */
    set unit(value) {
        if (value in _UNITS)this._unit = value;
    }

    toString(){
        let width=[];
        for(let x = 0; x<4; x++){
            if(this._attributes[x] instanceof Number) width[x] = ""+this._attributes[x]+this._unit;
            else if(this._attributes[x] instanceof _UNITS) width[x] = this._attributes[x]
        }
        return this._attributes.join(" ")
    }


}
class HBottomBorder extends HStyle{




    /**
     *
     * @param {BorderWidth}width
     * @param {BorderStyle}style
     * @param {BorderColor}color
     */
    constructor(width = BORDERWIDTH.THICK,style =BORDERSTYLE.DOTTED,color="GREY"){
        super();
        this._name = "border-bottom";
        this._attributes=[0,0,0];
        this._attributes[0]=width;
        this._attributes[1]=style;
        this._attributes[2]=color;
        return this;
    }

    /**
     *
     * @param width
     */
    setWidth(width) {
        this._attributes[0]=width;
        return this;
    }

    /**
     *
     * @param style
     */
    setStyle(style) {
        this._attributes[1]=style;
        return this;
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        this._attributes[2]=color;
        return this;
    }

    setBorder(){


    }
    getAttributes(){
        // To implement Array Copy
        return this._attributes;
    }

}
class HTransition extends HStyle{
    constructor(property = "opacity",duration ="1500ms",timingFunction="ease",delay = "0s" ){
        super();
        this._name = "transition";
        this._attributes=[0,0,0];
        this._attributes[0]=property;
        this._attributes[1]=duration;
        this._attributes[2]=timingFunction;
        return this;
    }
    getAttributes(){
        // To implement Array Copy
        return this._attributes;
    }

}

class HButton extends HComponent{


    /**
     *
     * @param id
     * @param name
     * @returns {Button}
     */
    constructor(id, name=''){
        super('button',id);
        this._inputName = name;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}




class HCheckBox extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @param value
     * @param checked
     * @returns {CheckBox}
     */
    constructor(id, name='',value,checked){
        super('input',id);
        this._inputName = name;
        this._value = value;
        this._checked = checked;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'checkbox';
        component.value= this._value;
        component.checked= this._checked;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}
class HClass extends HLinkedList{
    constructor(name){
        super(name);
        document.styleSheets[0].addRule('.'+this._name);
        this.domCssRule = document.styleSheets[0].cssRules[document.styleSheets[0].cssRules.length-1];
        console.log(this.domCssRule);
        return this;
    }


    addCustomStyle(style) {
        if (style instanceof Array) {
            for(let x in style)
                this.addIndCustomStyle(this,style[x]);
        }
        else
            this.addIndCustomStyle(this,style);
        repaint();
        return this;
    }

    addIndCustomStyle(object,style){
        this.domCssRule.style[style._name] = style.getString();
    }

    modifyIndCustomStyle(object,style){
        this.domCssRule.style[style._name] = style.getString();
    }

    addPseudoElement(pseudoElement,style){

        if (style instanceof Array) {
            for(let x in style)
                HClass.addIndPseudoElement(this, pseudoElement, style[x]);
        }
        else
            HClass.addIndPseudoElement(this, pseudoElement,style);
        return this;

    }

    static addIndPseudoElement(object,pseudoElement,style){
        try {
            object._stylesheet.element(object._name + pseudoElement).add(style);

        }
        catch (e) {
            if (e instanceof NotFoundError) {
                object._stylesheet.add(new HStyleSelector(object._name + pseudoElement));
                object._stylesheet.element(object._name + pseudoElement).add(style);

            }
        }

    }
    addComponent(component){
        if (component instanceof Array){
            for(let x in component){
                this.add(component[x])
            }
        }
        else
            this.add(component);
        return this
    }

}
class HClass2 extends HLinkedList{

    constructor(name){
        super(name);
        CLASSES.add(this);
        this._stylesheet = STYLESHEET;
        this._stylesheet.add(new HStyleSelector(this._name));
        return this;
    }


    addCustomStyle(style) {

        if (style instanceof Array) {
            for(let x in style)
                HClass.addIndCustomStyle(this,style[x]);
        }
        else
            HClass.addIndCustomStyle(this,style);
        return this;

    }

    static addIndCustomStyle(object,style){
        try {
            object._stylesheet.element('.'+object._name).add(style);

        }
        catch (e) {
            if (e instanceof NotFoundError)
            {
                object._stylesheet.add(new HStyleSelector('.'+object._name));
                object._stylesheet.element('.'+object._name).add(style);

            }
        }
        return this;
    }

    addPseudoElement(pseudoElement,style){

        if (style instanceof Array) {
            for(let x in style)
                HClass.addIndPseudoElement(this, pseudoElement, style[x]);
        }
        else
            HClass.addIndPseudoElement(this, pseudoElement,style);
        return this;

    }

    static addIndPseudoElement(object,pseudoElement,style){
        try {
            object._stylesheet.element(object._name + pseudoElement).add(style);

        }
        catch (e) {
            if (e instanceof NotFoundError) {
                object._stylesheet.add(new HStyleSelector(object._name + pseudoElement));
                object._stylesheet.element(object._name + pseudoElement).add(style);

            }
        }

    }
    addComponent(component){
        if (component instanceof Array){
            for(let x in component){
                this.add(component[x])
            }
        }
        else
            this.add(component);
        return this
    }

}

class HClear extends HStyle {
    /**
     *
     * @param {String}clear
     */
    constructor(clear = CLEAR.NONE) {
        super();
        this._name ="clear";
        this._attributes = [0];
        this._attributes[0]=clear;
    }

    /**
     *
     * @param {String}value
     */
    setClear(value) {
        this._attributes[0]=value;
    }

    getAttributes(){
        let clear = [];
        for (let x = 0; x < 1; x++) {
            clear[x] = this._attributes[x];
            //else  clear[x] = this._attributes[x]
        }
        return clear;
    }
}

class HColor extends HStyle{

    /**
     *
     * @param {String}color
     */
    constructor(color){
        super("color");
        this._color = new BaseColor(color);
        this._attributes[0] = this._color.getHex();
        return this;
    }


    setRed(red){
        if (red instanceof Number && red >= 0 && red <= 255)
        {
            this._color.red(red);
            this._attributes = this._color.getHex();
            return this;
        }

    }
    setGreen(green){

        if (green instanceof Number && green >= 0 && green <= 255)
        {
            this._color.green(green);
            this._attributes = this._color.getHex();
            return this;
        }

    }
    setBlue(blue){

        if (blue instanceof Number && blue >= 0 && blue <= 255)
        {
            this._color.blue(blue);
            this._attributes = this._color.getHex();
            return this;
        }

    }
    setHue(hue){

        if (hue instanceof Number && hue >= 0 && hue <= 100)
        {
            this._color.hue(hue);
            this._attributes = this._color.getHex();
            return this;
        }

    }
    setSaturation(sat){

        if (sat instanceof Number && sat >= 0 && sat <= 100)
        {
            this._color.saturation(sat);
            this._attributes = this._color.getHex();
            return this;
        }

    }

    setLightness(light){

        if (light instanceof Number && light >= 0 && light <= 100)
        {
            this._color.lightness(light);
            this._attributes = this._color.getHex();
            return this;
        }

    }
    setBrightness(bright){

        if (bright instanceof Number && bright >= 0 && bright <= 100)
        {
            this._color.brightness(bright);
            this._attributes = this._color.getHex();
            return this;
        }
    }
    setHex(hex){

            this._color.hex(hex);
            this._attributes = this._color.getHex();
            return this;
    }
    getAttributes(){
        let color= [];
        for (let x = 0; x < 1; x++) {
            color[x] = this._attributes[x];
            //else  clear[x] = this._attributes[x]
        }
        return color;
    }

}


class HCanvas extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('canvas',id);
        return this;
    }
    get2DContext(){
        return this.domElement.getContext('2d');
    }
    get3DContext(){
        return this.domElement.getContext('3d');
    }

}
class HCursor extends HStyle {
    /**
     *
     * @param cursor
     */
    constructor(cursor = CURSOR.AUTO) {
        super();
        this._name ="cursor";
        this._attributes[0]=cursor;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setCursor(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let style = [];
        for (let x = 0; x < 1; x++) {
            style[x] = this._attributes[x];
            //else  style[x] = this._attributes[x]
        }
        return style;
    }
}

class HDateInput extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @returns {DateInput}
     */
    constructor(id, name=''){
        super('input',id);
        this._inputName = name;
        this.domElement.type ="date";

        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'date';
        component.addEventListener('input',(e)=>{this._value = e.target.value});
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}




class HTableDefinition extends HComponent{


    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('dd',id);
        return this;
    }

}
class HDefinitionList extends HComponent{


    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('dl',id);
        return this;
    }

}
class HDefinitionTerm extends HComponent{


    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('dt',id);
        return this;
    }

}
class HDivision extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('div',id);
        return this;
    }

}
class HDropDown extends HComponent{
    /**
     *
     * @param id
     * @param name
     * @returns {DropDown}
     */
    constructor(id, name=''){
        super('select',id);
        this._inputName = name;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}
class HDropDownOption extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @param value
     * @param selected
     * @returns {DropDownOption}
     */
    constructor(id, name='',value,selected){
        super('option',id);
        this._inputName = name;
        this._value = value;
        this._selected = selected;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.value= this._value;
        component.selected= this._selected;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}
class HEmailInput extends HComponent{
    /**
     *
     * @param id
     * @param name
     * @returns {EmailInput}
     */
    constructor(id, name=''){
        super('input',id);
        this._inputName = name;
        this.domElement.type="email";
        this.domElement.name=name;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.addEventListener('input',(e)=>{this._value = e.target.value});

        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}
class HPhoneInput extends HComponent{
    /**
     *
     * @param id
     * @param name
     * @returns {EmailInput}
     */
    constructor(id, name=''){
        super('input',id);
        this._inputName = name;
        this.domElement.type="tel";
        this.domElement.name=name;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.addEventListener('input',(e)=>{this._value = e.target.value});

        component.type= 'tel';
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}



class HEmptyCells extends HStyle {
    /**
     *
     * @param value
     */
    constructor(value = EMPTYCELLS.SHOW) {
        super();
        this._name ="empty-cells";
        this._attributes[0]=value;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setStyle(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let style = [];
        for (let x = 0; x < 1; x++) {
            style[x] = this._attributes[x];
            //else  style[x] = this._attributes[x]
        }
        return style;
    }
}
class HEvent {
    /**
     *
     * @param id
     * @param eventType
     * @param functionExp
     * @param target
     * @returns {Event}
     */
    constructor(id,eventType,functionExp,target){
        this._name =id;
        this._eventType = eventType;
        this._functionExp = functionExp;
        this._target = target;
        return this;
    }


    getId() {
        return this._name;
    }

    setId(value) {
        this._name = value;
        return this;
    }

    getEventType() {
        return this._eventType;
    }

    setEventType(value) {
        this._eventType = value;
        return this;
    }

    getFunctionExp() {
        return this._functionExp;
    }

    setFunctionExp(value) {
        this._functionExp = value;
        return this;
    }
}
class HFieldset extends HComponent{

    /**
     *
     * @param id
     * @returns {Label}
     */
    constructor(id){
        super('fieldset',id);
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}




class HFileInput extends HComponent{
    /**
     *
     * @param id
     * @param name
     * @returns {FileInput}
     */
    constructor(id, name=''){
        super('input',id);
        this._inputName = name;
        this.domElement.type="file";
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.addEventListener('input',(e)=>{this._value = e.target.value});
        component.type= 'file';
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}
class HFlashPlayer extends HComponent{
    /**
     *
     * @param id
     * @param location
     * @param width
     * @param height
     * @param minVersion
     * @returns {Video}
     */
    constructor(id,location,width,height,minVersion){
        super('div',id);
        this._location = location;
        this._width = width;
        this._height = height;
        this._minVersion = minVersion;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        let script = document.createElement('script');
        script.type = 'text/javascript';
        script.appendChild(document.createTextNode('swfobject.embedSWF("' + this._location + '", "'+this._id + '", "'+ this._width + '", "'+this._height +  '", "'+this._minVersion + '")' ));
        document.head.appendChild(script);
        component.id=this._id;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}class HFloat extends HStyle {

    /**
     *
     * @param {String}float
     */
    constructor(float = FLOAT.NONE) {
        super("float");
        this._attributes[0]=float;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setFloat(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let float = [];
        for (let x = 0; x < 1; x++) {
            float[x] = this._attributes[x];
            //else  float[x] = this._attributes[x]
        }
        return float;
    }
}
class HFontFamily extends HStyle {

    /**
     *
     * @param font1
     * @param font2
     * @param font3
     */
    constructor(font1 = FONT.SERIF  ,font2 = FONT.TIMES,font3 =FONT["TIMES NEW ROMAN"]) {
        super("font-family");
        this._attributes[0]=font1;
        this._attributes[1]=font2;
        this._attributes[2]=font3;
        return this;
    }

    /**
     *
     * @param {String}font
     */
    setFont1(font) {
        this._attributes[0]=font;
        return this;
    } /**
     *
     * @param {String}font
     */
    setFont2(font) {
        this._attributes[1]=font;
        return this;
    } /**
     *
     * @param {String}font
     */
    setFont3(font) {
        this._attributes[2]=font;
        return this;
    }

    getAttributes(){
        let font= [];
        for (let x = 0; x < 3; x++) {
            font[x] = this._attributes[x]+',';
            //else  position[x] = this._attributes[x]
        }
        font[2] =font[2].slice(0, -1);
        return font;
    }

    getString(){
            let font= "";
            for (let x = 0; x < this._attributes.length; x++) {
                font += this._attributes[x]+this._unit+',';
            }
            font = font.slice(0, -1);
            return font;
        }

}
class HFontSize extends HStyle {

    /**
     *
     * @param {Number} size
     * @param {String}unit
     */
    constructor(size = 3, unit = _UNITS.PERCENTILE) {
        super("font-size");
        this._attributes[0]=size;
        this._unit=unit;
    }

    /**
     *
     * @param {String}value
     */
    setSize(value) {
        this._attributes[0]=value;
    }

    getAttributes(){
        let size = [];
        for (let x = 0; x < 1; x++) {
            size[x] = "" + this._attributes[x] + this._unit;
            //else  position[x] = this._attributes[x]
        }
        return size;
    }
}
class HDisplay extends HStyle {

    /**
     *
     * @param display
     */
    constructor(display="block") {
        super("display");
        this._attributes[0]=display;
    }

    /**
     *
     * @param {String}value
     */
    setSize(value) {
        this._attributes[0]=value;
    }

    getAttributes(){
        let display = [];
        for (let x = 0; x < 1; x++) {
            size[x] = "" + this._attributes[x] + this._unit;
            //else  position[x] = this._attributes[x]
        }
        return display;
    }
}
class HOpacity extends HStyle {

    /**
     *
     * @param opacity
     */
    constructor(opacity) {
        super("opacity");
        this._attributes[0]=opacity;
    }

    /**
     *
     * @param {String}value
     */
    setSize(value) {
        this._attributes[0]=value;
    }

    getAttributes(){
        let opacity
        for (let x = 0; x < 1; x++) {
            size[x] = "" + this._attributes[x] + this._unit;
            //else  position[x] = this._attributes[x]
        }
        return opacity
    }
}
class HFontStyle extends HStyle {

    /**
     *
     * @param {String}style
     */
    constructor(style = FONTSTYLE.NORMAL) {
        super("font-style");
        this._attributes[0]=style;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setStyle(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let style = [];
        for (let x = 0; x < 1; x++) {
            style[x] = this._attributes[x];
            //else  style[x] = this._attributes[x]
        }
        return style;
    }
}
class HFontWeight extends HStyle {

    /**
     *
     * @param {String}weight
     */
    constructor(weight = FONTWEIGHT.NORMAL) {
        super("font-weight");
        this._attributes[0]=weight;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setWeight(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let weight = [];
        for (let x = 0; x < 1; x++) {
            weight[x] = this._attributes[x];
            //else  weight[x] = this._attributes[x]
        }
        return weight;
    }
}

class HForm extends HComponent{
    /**
     *
     * @param id
     * @param action
     * @param method
     * @returns {Form}
     */
    constructor(id, action = "",method=''){
        super('form',id);
        this._action = action;
        this._method = method;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.action= this._action;
        component.method= this._method;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}
class HHeading1 extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('h1',id);
        return this;
    }

}
class HHeading2 extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('h2',id);
        return this;
    }

}
class HHeading3 extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('h3',id);
        return this;
    }

}
class HHeading4 extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('h4',id);
        return this;
    }

}
class HHeading5 extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('h5',id);
        return this;
    }

}
class HHeading6 extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('h6',id);
        return this;
    }

}
class HHiddenInput extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @param value
     * @returns {HiddenInput}
     */
    constructor(id, name='',value){
        super('input',id);
        this._inputName = name;
        this._value = value;
        this.domElement.type="hidden";
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'hidden';
        component.value= this._value;
        component.addEventListener('input',(e)=>{this._value = e.target.value});
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}




class HImage extends HComponent{
    constructor(id, src = "",alt= ""){
        super('img',id);
        this._src= src;
        this._alt = alt;
        this.domElement.id=id ;
        this.domElement.src =src;
        this.domElement.alt = alt;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.src =this._src;
        component.alt = this._alt;
        if(this._class !== '')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }


}
class HImageButton extends HComponent{
    /**
     *
     * @param id
     * @param name
     * @param src
     * @returns {ImageButton}
     */
    constructor(id, name='',src){
        super('input',id);
        this._inputName = name;
        this._src = src;
        this.domElement.src =src;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'image';
        component.src= this._src;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}




class HLabel extends HComponent{
    /**
     *
     * @param id
     * @param name
     * @param For
     * @returns {Label}
     */
    constructor(id, name=''){
        super('label',id);
        this._inputName = name;
        this.domElement.htmlFor = name;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.htmlFor= this._for;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}



class HLeftBorder extends HStyle{

    /**
     *
     * @param {BorderWidth}width
     * @param {BorderStyle}style
     * @param {BorderColor}color
     * @param unit
     */
    constructor(width = BORDERWIDTH.THICK,style =BORDERSTYLE.SOLID,color="BLACK", unit= _UNITS.PERCENTILE){
        super("border-left");
        this._attributes[0]=width;
        this._attributes[1]=style;
        this._attributes[2]=color;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param width
     */
    setWidth(width) {
        this._attributes[0]=width;
        return this;
    }

    /**
     *
     * @param style
     */
    setStyle(style) {
        this._attributes[1]=style;
        return this;
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        this._attributes[2]=color;
        return this;
    }

    getAttributes(){
        let border = [];
        for (let x = 0; x < 3; x++) {
            if(typeof this._attributes[x] === 'number')
                border[x] = "" + this._attributes[x] + this._unit;
            else
                border[x] = this._attributes[x];
        }
        return border
    }

}

class HLegend extends HComponent{

    /**
     *
     * @param id
     * @returns {Legend}
     */
    constructor(id){
        super('legend',id);
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}



class HLetterSpacing extends HStyle {

    /**
     *
     * @param {String}spacing
     * @param unit
     */
    constructor(spacing = 1, unit = _UNITS.PERCENTILE) {
        super("letter-spacing");
        this._attributes[0]=spacing;
        this._unit=unit;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setSpacing(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let spacing = [];
        for (let x = 0; x < 1; x++) {
            spacing[x] = "" + this._attributes[x] + this._unit;
            //else  spacing[x] = this._attributes[x]
        }
        return spacing;
    }
}

class HListItem extends HComponent{


    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('li',id);
        return this;
    }

}class HListStyle extends HStyle {

    /**
     *
     * @param position
     */
    constructor(position = LISTSTYLEPOSITION.OUTSIDE) {
        super("list-style-position");
        this._attributes[0]=position;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setStyle(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let style = [];
        for (let x = 0; x < 1; x++) {
            style[x] = this._attributes[x];
            //else  style[x] = this._attributes[x]
        }
        return style;
    }
}
class HListStyleImage extends HStyle {

    /**
     *
     * @param url
     */
    constructor(url) {
        super("list-style-image");
        this._attributes[0]='url(\"' + url + '\")';
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setStyle(value) {
        this._attributes[0]='url(\"' + value + '\")';
        return this;
    }

    getAttributes(){
        let urls = [];
        for (let x = 0; x < 1; x++) {
            urls[x] = this._attributes[x];
            //else  url[x] = this._attributes[x]
        }
        return urls;
    }
}
class HListStylePosition extends HStyle {

    /**
     *
     * @param position
     */
    constructor(position = LISTSTYLEPOSITION.OUTSIDE) {
        super("list-style-position");
        this._attributes[0]=position;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setStyle(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let style = [];
        for (let x = 0; x < 1; x++) {
            style[x] = this._attributes[x];
            //else  style[x] = this._attributes[x]
        }
        return style;
    }
}
class HListStyleType extends HStyle {


    /**
     *
     * @param styleType
     */
    constructor(styleType=LISTSTYLETYPE.NONE) {
        super("list-style-type");
        this._attributes[0]=styleType;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setStyle(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let style = [];
        for (let x = 0; x < 1; x++) {
            style[x] = this._attributes[x];
            //else  style[x] = this._attributes[x]
        }
        return style;
    }
}
class HMargin extends HStyle {
    /**
     *
     * @param {number}margin
     * @param unit
     */
    constructor(margin = 5, unit = _UNITS.PERCENTILE) {
        super("margin");
        let x = 0;
        for (x; x < 4; x++)
            this._attributes[x] = margin;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setMargin(value) {
        let x = 0;
        for (x; x < 4; x++) {
            if (this._attributes[x] === 0)
                this._attributes[x] = value;
        }
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setTop(value) {
        this._attributes[0] = value;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setRight(value) {
        this._attributes[1] = value;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setBottom(value) {
        this._attributes[2] = value;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setLeft(value) {
        this._attributes[3] = value;
        return this;
    }

    getAttributes(){
        let margin = [];
        for (let x = 0; x < 4; x++) {
            if(this._attributes[x] !== 'auto')
                margin[x] = "" + this._attributes[x] + this._unit;
            else
                margin[x] = this._attributes[x];
            //else  margin[x] = this._attributes[x]
        }
        return margin
    }
}
class HMinHeight extends HStyle{

    /**
     *
     * @param {Number}minHeight
     * @param unit
     */
    constructor(minHeight = 100, unit = _UNITS.PERCENTILE) {
        super("min-height");
        let x = 0;
        for (x; x < 1; x++)
            this._attributes[x] = minHeight;
        this._unit = unit;
        return this;
    }
    /**
     *
     * @param minHeight
     */
    setMinHeight(minHeight) {
        this._attributes[0]=minHeight;
        return this;
    }

    getAttributes(){
        let minHeight = [];
        for (let x = 0; x < 1; x++) {
            minHeight[x] = "" + this._attributes[x] + this._unit;
            //else  minHeight[x] = this._attributes[x]
        }
        return minHeight
    }
}


class HMultipleSelectDropDown extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @param size
     * @returns {MultipleSelectDropDown}
     */
    constructor(id, name='',size='3'){
        super('select',id);
        this._inputName = name;
        this._size =size;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.size= this._size;
        component.multiple = 'multiple';
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }


}class NotFoundError extends Error{

    constructor(){
        super();
        this.name = "NotFound Error";
        this.message ="Object Not Found";
    }

}
class HOrderedList extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('ol',id);
        return this;
    }

}
class HOverflow extends HStyle{

    /**
     *
     * @param {String}overflow
     */
    constructor(overflow = OVERFLOW.SCROLL){
        super("overflow");
        this._attributes[0] = overflow;
        return this;
    }

    /**
     *
     * @param overflow
     */
    setOverflow(overflow) {
        this._attributes[0]=overflow;
        return this;
    }

    getAttributes(){
        // To implement Array Copy
        return this._attributes;
    }

}
class HBFVisibility extends HStyle{

    /**
     *
     * @param {String}overflow
     */
    constructor(overflow = OVERFLOW.SCROLL){
        super("-webkit-backface-visibility");
        this._attributes[0] = overflow;
        return this;
    }


    getAttributes(){
        // To implement Array Copy
        return this._attributes;
    }

}
class HOverflowY extends HStyle{

    /**
     *
     * @param {String}overflow
     */
    constructor(overflow = OVERFLOW.SCROLL){
        super("overflow-y");
        this._attributes[0] = overflow;
        return this;
    }

    /**
     *
     * @param overflow
     */
    setOverflow(overflow) {
        this._attributes[0]=overflow;
        return this;
    }

    getAttributes(){
        // To implement Array Copy
        return this._attributes;
    }

}
class HOverflowX extends HStyle{

    /**
     *
     * @param {String}overflow
     */
    constructor(overflow = OVERFLOW.SCROLL){
        super("overflow-x");
        this._attributes[0] = overflow;
        return this;
    }

    /**
     *
     * @param overflow
     */
    setOverflow(overflow) {
        this._attributes[0]=overflow;
        return this;
    }

    getAttributes(){
        // To implement Array Copy
        return this._attributes;
    }

}
class HPadding extends HStyle {

    /**
     *
     * @param {number}padding
     * @param unit
     */
    constructor(padding = 5, unit = _UNITS.PERCENTILE) {
        super("padding");
        let x = 0;
        for (x; x < 4; x++)
            this._attributes[x] = padding;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    set padding(value) {
        let x = 0;
        for (x; x < 4; x++) {
            if (this._attributes[x] === 0)
                this._attributes[x] = value;
        }
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setTop(value) {
        this._attributes[0] = value;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setRight(value) {
        this._attributes[1] = value;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setBottom(value) {
        this._attributes[2] = value;
        return this;
    }

    /**
     *
     * @param {number}value
     */
    setLeft(value) {
        this._attributes[3] = value;
        return this;
    }

    getAttributes(){
        let padding = [];
        for (let x = 0; x < 4; x++) {
            if(this._attributes[x])
                padding[x] = "" + this._attributes[x] + this._unit;
            //else  padding[x] = this._attributes[x]
        }
        return padding
    }
}

class HParagraph extends HComponent{

    /**
     *
     * @param {String}id
     * @param text
     */
    constructor(id, text=""){
        super('p',id);
        this.setTextContent(text);
        return this;
    }

}
class HSpan extends HComponent{

    /**
     *
     * @param {String}id
     * @param text
     */
    constructor(id, text=""){
        super('span',id);
        this.setTextContent(text);
        return this;
    }

}
class HPasswordInput extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @param maxLength
     * @returns {PasswordInput}
     */
    constructor(id, name='',maxLength){
        super('input',id);
        this._inputName = name;
        this._maxLength = maxLength;
        this.domElement.type="password";
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'password';
        component.addEventListener('input',(e)=>{this._value = e.target.value});
        if (this._maxLength)
            component.maxLength= this._maxLength;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}class HPosition extends HStyle {

    /**
     *
     * @param {String}position
     */
    constructor(position = POSITION.RELATIVE) {
        super();
        this._attributes[0]=position;
        this._name ="position";
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setPosition(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let position = [];
        for (let x = 0; x < 1; x++) {
            position[x] = this._attributes[x];
            //else  position[x] = this._attributes[x]
        }
        return position;
    }
}class HPositionBottom extends HStyle {

    /**
     *
     * @param {Number}bottom
     * @param unit
     */
    constructor(bottom = 0, unit=_UNITS.PX) {
        super("bottom");
        this._attributes[0]=bottom;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param {Number}value
     */
    setPositionBottom(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let bottom = [];
        for (let x = 0; x < 1; x++) {
            bottom[x] = ""+this._attributes[x]+this._unit;
            //else  position[x] = this._attributes[x]
        }
        return bottom;
    }
}
class HPositionLeft extends HStyle {

    /**
     *
     * @param {Number}left
     * @param unit
     */
    constructor(left = 0, unit=_UNITS.PERCENTILE) {
        super("left");
        this._attributes[0]=left;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param {Number}value
     */
    setPositionLeft(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let left = [];
        for (let x = 0; x < 1; x++) {
            left[x] = ""+this._attributes[x]+this._unit;
            //else  position[x] = this._attributes[x]
        }
        return left;
    }
}
class HPositionRight extends HStyle {

    /**
     *
     * @param {Number}right
     * @param unit
     */
    constructor(right = 0, unit=_UNITS.PX) {
        super("right");
        this._attributes[0]=right;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param {Number}value
     */
    setPositionRight(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let right = [];
        for (let x = 0; x < 1; x++) {
            right[x] = ""+this._attributes[x]+this._unit;
            //else  position[x] = this._attributes[x]
        }
        return right;
    }
}
class HPositionTop extends HStyle {

    /**
     *
     * @param {Number}top
     * @param unit
     */
    constructor(top = 0, unit=_UNITS.PX) {
        super("top");
        this._attributes[0]=top;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param {Number}value
     */
    setPositionTop(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let top = [];
        for (let x = 0; x < 1; x++) {
            top[x] = ""+this._attributes[x]+this._unit;
            //else  position[x] = this._attributes[x]
        }
        return top;
    }
}

class HRadioButton extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @param value
     * @param checked
     * @returns {RadioButton}
     */
    constructor(id, name='',value,checked){
        super('input',id);
        this._inputName = name;
        this._value = value;
        this._checked = checked;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'radio';
        component.value= this._value;
        component.checked= this._checked;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}class HRightBorder extends HStyle{

    /**
     *
     * @param {BorderWidth}width
     * @param {BorderStyle}style
     * @param {BorderColor}color
     * @param unit
     */
    constructor(width = BORDERWIDTH.THICK,style =BORDERSTYLE.SOLID,color="BLACK", unit= _UNITS.PERCENTILE){
        super("border-right");
        this._attributes[0]=width;
        this._attributes[1]=style;
        this._attributes[2]=color;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param width
     */
    setWidth(width) {
        this._attributes[0]=width;
        return this;
    }

    /**
     *
     * @param style
     */
    setStyle(style) {
        this._attributes[1]=style;
        return this;
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        this._attributes[2]=color;
        return this;
    }

    getAttributes(){
        let border = [];
        for (let x = 0; x < 3; x++) {
            if(typeof this._attributes[x] === 'number')
                border[x] = "" + this._attributes[x] + this._unit;
            else
                border[x] = this._attributes[x];
        }
        return border
    }

}

class HSearchInput extends HComponent{


    /**
     *
     * @param id
     * @param name
     * @returns {EmailInput}
     */
    constructor(id, name=''){
        super('input',id);
        this._inputName = name;
        this.domElement.type="search";
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'search';
        component.addEventListener('input',(e)=>{this._value = e.target.value});
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}




class HSource extends HComponent{

    /**
     *
     * @param id
     * @param {String}src
     * @param {String}type
     * @returns {Source}
     */
    constructor(id, src = "",type){
        super('source',id);
        this._src = src;
        this._type = type;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.src = this._src;
        component.type = this._type;
        component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }


}
class HSubmitButton extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @param value
     * @returns {SubmitButton}
     */
    constructor(id, name='',value){
        super('input',id);
        this._inputName = name;
        this._value = value;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'submit';
        component.value= this._value;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}




class HTable extends HComponent{


    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('table',id);
        return this;
    }

}
class HTableBody extends HComponent{


    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('tbody',id);
        return this;
    }

}
class HTableData extends HComponent{

    /**
     *
     * @param {String}id
     * @param colSpan
     * @param rowSpan
     */
    constructor(id,colSpan=0,rowSpan){
        super('td',id);
        this._colSpan = colSpan;
        this._rowSpan = rowSpan;
        return this;
    }
    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.colSpan = this._colSpan;
        component.rowSpan = this._rowSpan;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }

}
class HTableFoot extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('tfoot',id);
        return this;
    }

}
class HTableHead extends HComponent{


    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('thead',id);
        return this;
    }

}
class HTableHeading extends HComponent{


    /**
     *
     * @param {String}id
     * @param colSpan
     * @param rowSpan
     */
    constructor(id,colSpan=0,rowSpan=0){
        super('th',id);
        this._colSpan = colSpan;
        this._rowSpan = rowSpan;
        return this;
    }
    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.colSpan = this._colSpan;
        component.rowSpan = this._rowSpan;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }

}
class HTableRow extends HComponent{


    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('tr',id);
        return this;
    }

}
class HText {
    constructor(text) {
        this._textContent = text;
    }

}class HTextAlignment extends HStyle {

    /**
     *
     * @param {String}alignment
     */
    constructor(alignment = TEXTALIGNMENT.LEFT) {
        super("text-align");
        this._attributes[0]=alignment;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setTextAlignment(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let alignment = [];
        for (let x = 0; x < 1; x++) {
            alignment[x] = this._attributes[x];
            //else  alignment[x] = this._attributes[x]
        }
        return alignment;
    }
}

class HTextArea extends HComponent{
    /**
     *
     * @param id
     * @param name
     * @param cols
     * @param rows
     * @returns {TextArea}
     */
    constructor(id, name='',cols,rows){
        super('textarea',id);
        this._inputName = name;
        this._cols = cols;
        this._rows = rows;
        this.domElement.name= this._inputName;
        this.domElement.cols= this._cols;
        this.domElement.rows= this._rows;
        this.domElement.name=name;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.cols= this._cols;
        component.rows= this._rows;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}class HTextDecoration extends HStyle {
    /**
     *
     * @param {String}decoration
     */
    constructor(decoration = TEXTDECORATION.NONE) {
        super("text-decoration");
        this._attributes[0]=decoration;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setDecoration(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let decoration = [];
        for (let x = 0; x < 1; x++) {
            decoration[x] = this._attributes[x];
            //else  decoration[x] = this._attributes[x]
        }
        return decoration;
    }
}
class HTextIndent extends HStyle {

    /**
     *
     * @param {Number} indent
     * @param {String}unit
     */
    constructor(indent = 3, unit = _UNITS.PERCENTILE) {
        super("text-indent");
        this._attributes[0]=indent;
        this._unit=unit;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setIndent(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let indent = [];
        for (let x = 0; x < 1; x++) {
            indent[x] = "" + this._attributes[x] + this._unit;
            //else  position[x] = this._attributes[x]
        }
        return indent;
    }
}

class HTextInput extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @param maxLength
     * @returns {TextInput}
     */
    constructor(id, name='',maxLength){
        super('input',id);
        this._inputName = name;
        this._maxLength = maxLength;
        this.domElement.type="text";
        this.domElement.maxLength=maxLength;
        this.domElement.name=name;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'text';
        component.addEventListener('input',(e)=>{this._value = e.target.value});
        if (this._maxLength)
            component.maxLength= this._maxLength;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}
class HInput extends HComponent{

    /**
     *
     * @param id
     * @param type
     * @param name
     * @param maxLength
     * @param placeholder
     * @returns {TextInput}
     */
    constructor(id,type, name='',maxLength,placeholder){
        super('input',id);
        this._inputName = name;
        this._maxLength = maxLength;
        this.domElement.type=type;
        this.domElement.name=name;
        this.domElement.placeholder=placeholder;
        return this;
    }
    clearField(){
        this.domElement.value="";
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'text';
        component.addEventListener('input',(e)=>{this._value = e.target.value});
        if (this._maxLength)
            component.maxLength= this._maxLength;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}



class HTextShadow extends HStyle {

    /**
     *
     * @param {Number}hDistance
     * @param {Number}vDistance
     * @param {Number}blur
     * @param {String}color
     * @param {String}unit
     */
    constructor(hDistance = 5,vDistance = 5, blur = 5, color = '#000000', unit = _UNITS.PX) {
        super("text-shadow");
        this._attributes[0] = hDistance;
        this._attributes[1] = vDistance;
        this._attributes[2] = blur;
        this._attributes[3] = color;
        this._unit = unit;
        return this;
    }

    /**
     *
     * @param {Number}value
     */
    setTextShadow(value) {
        let x = 0;
        for (x; x < 4; x++) {
            if (this._attributes[x] === 0)
                this._attributes[x] = value;
        }
        return this;
    }

    /**
     *
     * @param {Number}value
     */
    setHDistance(value) {
        this._attributes[0] = value;
        return this;
    }

    /**
     *
     * @param {Number}value
     */
    setVDistance(value) {
        this._attributes[1] = value;
        return this;
    }

    /**
     *
     * @param {Number}value
     */
    setBlur(value) {
        this._attributes[2] = value;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setColor(value) {
        this._attributes[3] = value;
        return this;
    }


    getAttributes(){
        let textShadow = [];
        for (let x = 0; x < 3; x++) {
            textShadow[x] = "" + this._attributes[x] + this._unit;
            //else  textShadow[x] = this._attributes[x]
        }
        textShadow[3] =this._attributes[3];
        return textShadow
    }
}
class HTransform extends HStyle {

    /**
     *
     * @param {String}transform
     */
    constructor(transform = "rotate(0deg)") {
        super("transform");
        this._attributes[0]=transform;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setTransform(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let transform = [];
        for (let x = 0; x < 1; x++) {
            transform[x] = this._attributes[x];
            //else  transform[x] = this._attributes[x]
        }
        return transform;
    }
}
class HTopBorder extends HStyle{


    /**
     *
     * @param {BorderWidth}width
     * @param {BorderStyle}style
     * @param {BorderColor}color
     */
    constructor(width = BORDERWIDTH.THICK,style =BORDERSTYLE.DOTTED,color="BLACK"){
        super();
        this._name = "top-order";
        this._attributes=[0,0,0];
        this._attributes[0]=width;
        this._attributes[1]=style;
        this._attributes[2]=color;
        return this;
    }

    /**
     *
     * @param width
     */
    setWidth(width) {
        this._attributes[0]=width;
        return this;
    }

    /**
     *
     * @param style
     */
    setStyle(style) {
        this._attributes[1]=style;
        return this;
    }

    /**
     *
     * @param color
     */
    setColor(color) {
        this._attributes[2]=color;
        return this;
    }

    setBorder(){


    }
    getAttributes(){
        // To implement Array Copy
        return this._attributes;
    }

}

class HUnorderedList extends HComponent{

    /**
     *
     * @param {String}id
     */
    constructor(id){
        super('ul',id);
        return this;
    }

}
class HUrlInput extends HComponent{

    /**
     *
     * @param id
     * @param name
     * @returns {UrlInput}
     */
    constructor(id, name=''){
        super('input',id);
        this._inputName = name;
        this.domElement.type="url";
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.name= this._inputName;
        component.type= 'url';
        component.addEventListener('input',(e)=>{this._value = e.target.value});
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}



class HVerticalAlignment extends HStyle {

    /**
     *
     * @param {String}alignment
     */
    constructor(alignment = VERTICALALIGNMENT.TEXTTOP) {
        super("vertical-alignment");
        this._attributes[0]=alignment;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setVerticalAlignment(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let alignment = [];
        for (let x = 0; x < 1; x++) {
            alignment[x] = this._attributes[x];
            //else  alignment[x] = this._attributes[x]
        }
        return alignment;
    }
}

class HVideo extends HComponent{

    /**
     *
     * @param id
     * @param src
     * @param poster
     * @param preload
     * @param {Boolean}controls
     * @param {Boolean}autoplay
     * @param {Boolean}loop
     * @returns {Video}
     */
    constructor(id, src = "",poster="",preload=PRELOAD.NONE,controls,autoplay,loop){
        super('video',id);
        this._src = src;
        this._poster = poster;
        this._preload = preload;
        this._controls = controls;
        this._autoplay = autoplay;
        this._loop = loop;
        return this;
    }

    setComponents(){
        let component = this.createElement();
        if(this._textContent !== "")
            component.appendChild(document.createTextNode(this._textContent));
        component.id=this._id;
        component.src = this._src;
        component.poster = this._poster;
        component.controls = this._controls;
        component.autoplay = this._autoplay;
        component.loop = this._loop;
        if(this._class !== '.')
            component.classList.add(this._class.replace('.',''));
        let node = this._head;
        if (this._length !== 0){
            while(node._next !== this._tail){
                if(node._next._element instanceof HText)
                    component.appendChild(document.createTextNode(node._next._element._textContent));
                else if(node._next._element instanceof HComponent)
                    component.appendChild(node._next._element.setComponents());
                node = node._next;
            }
        }
        return component;
    }






}class HWordSpacing extends HStyle {

    /**
     *
     * @param {String}spacing
     * @param unit
     */
    constructor(spacing = 1, unit = _UNITS.PERCENTILE) {
        super("word-spacing");
        this._attributes[0]=spacing;
        this._unit=unit;
        return this;
    }

    /**
     *
     * @param {String}value
     */
    setSpacing(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let spacing = [];
        for (let x = 0; x < 1; x++) {
            spacing[x] = "" + this._attributes[x] + this._unit;
            //else  spacing[x] = this._attributes[x]
        }
        return spacing;
    }
}
class HZIndex extends HStyle {

    /**
     *
     * @param {String}zIndex
     */
    constructor(zIndex = 0) {
        super("z-index");
        this._attributes[0]=zIndex;
        return this;
    }

    /**
     *
     * @param {Number}value
     */
    setZIndex(value) {
        this._attributes[0]=value;
        return this;
    }

    getAttributes(){
        let zIndex = [];
        for (let x = 0; x < 1; x++) {
            zIndex[x] = this._attributes[x];
            //else  zIndex[x] = this._attributes[x]
        }
        return zIndex;
    }
}

let Anchor = function (id, href = ""){ return new HAnchor(id, href)};
let Audio = function (id, src = "",preload=PRELOAD.NONE,controls,autoplay,loop){ return new HAudio(id, src ,preload,controls,autoplay,loop)};
let BackgroundColor = function (color){ return new HBackgroundColor(color)};
let BackgroundImage = function (url, isResource=true){ return new HBackgroundImage(url, isResource)};
let BaseColor = function (color){ return new HBaseColor(color)};
let Border = function (width = BORDERWIDTH.THICK,style =BORDERSTYLE.DOTTED,color="BLACK"){ return new HBorder(width ,style ,color)};
let BorderCollapse = function (collapse = BORDERCOLLAPSE.SEPARATE){ return new HBorderCollapse(collapse)};
let BorderColor = function (color = "#000000"){ return new HBorderColor(color)};
let BorderRadius = function (radius = 0,unit = _UNITS.PERCENTILE){ return new HBorderRadius(radius, unit)};
let BorderSpacing = function (horizontal =0, vertical =0,unit = _UNITS.PERCENTILE){ return new HBorderSpacing(horizontal, vertical,unit)};
let BorderStyle = function (style = BORDERSTYLE.SOLID){ return new HBorderStyle(style)};
let BorderWidth = function (width=5){ return new HBorderWidth(width)};
let BottomBorder = function (width = BORDERWIDTH.THICK,style =BORDERSTYLE.SOLID,color="GREY", unit= _UNITS.PERCENTILE){ return new HBottomBorder(width ,style ,color, unit)};
let Transition = function (property = "all",duration = "500ms",timingFunction="ease", delay= 0){ return new HTransition(property ,duration ,timingFunction, delay)};
let Button = function (id, name=''){ return new HButton(id)};
let CheckBox = function (id, name='',value,checked){ return new HCheckBox(id,value,checked)};
let Class = function (name){ return new HClass(name)};
let Class2 = function (name){ return new HClass2(name)};
let Clear = function (clear = CLEAR.NONE){ return new HClear(clear)};
let Color = function (color){ return new HColor(color)};
let DateInput = function (id, name=''){ return new HDateInput(id)};
let Definition = function (id){ return new HDefinition(id)};
let DefinitionList = function (id){ return new HDefinitionList(id)};
let DefinitionTerm = function (id){ return new HDefinitionTerm(id)};
let Display = function (display = "block"){ return new HDisplay(display)};
let Opacity = function (opacity){ return new HOpacity(opacity)};
let Division = function (id){ return new HDivision(id)};
let DropDown = function (id, name=''){ return new HDropDown(id)};
let DropDownOption = function (id, name='',value,selected){ return new HDropDownOption(id, name,value,selected)};
let EmailInput = function (id, name=''){ return new HEmailInput(id, name)};
let PhoneInput = function (id, name=''){ return new HPhoneInput(id, name)};
let EmptyCells = function (value = EMPTYCELLS.SHOW){ return new HEmptyCells(value)};
let Event = function (id,eventType,functionExp,target){ return new HEvent(id,eventType,functionExp,target)};
let Fieldset = function (id){ return new HFieldset(id)};
let FileInput = function (id, name=''){ return new HFileInput(id)};
let FlashPlayer = function (id,location,width,height,minVersion){ return new HFlashPlayer(id,location,width,height,minVersion)};
let Float = function (float = FLOAT.NONE){ return new HFloat(float)};
let FontFamily = function (font1 = FONT.SERIF  ,font2 = FONT.TIMES,font3 =FONT["TIMES NEW ROMAN"]){ return new HFontFamily(font1 ,font2 ,font3 )};
let FontSize = function (size = 3, unit = _UNITS.PT){ return new HFontSize(size , unit )};
let FontStyle = function (style = FONTSTYLE.NORMAL){ return new HFontStyle(style )};
let FontWeight = function (weight = FONTWEIGHT.NORMAL){ return new HFontWeight(weight )};
let Cursor = function (cursor = "default"){ return new HCursor(cursor )};
let Form = function (id, action = "",method=''){ return new HForm(id, action ,method)};
let Heading1 = function (id){ return new HHeading1(id)};
let Heading2 = function (id){ return new HHeading2(id)};
let Heading3 = function (id){ return new HHeading3(id)};
let Heading4 = function (id){ return new HHeading4(id)};
let Heading5 = function (id){ return new HHeading5(id)};
let Heading6 = function (id){ return new HHeading6(id)};
let HiddenInput = function (id, name='',value){ return new HHiddenInput(id, name,value)};
let Image = function (id, src = "",alt= ""){ return new HImage(id, src ,alt)};
let ImageButton = function (id, name='',src){ return new HImageButton(id, name,src)};
let Label = function (id, name='',){ return new HLabel(id, name)};
let LeftBorder = function (width = BORDERWIDTH.THICK,style =BORDERSTYLE.SOLID,color="BLACK", unit= _UNITS.PERCENTILE){ return new HLeftBorder(width ,style,color, unit)};
let Legend = function (id){ return new HLegend(id)};
let LetterSpacing = function (spacing = 1, unit = _UNITS.PERCENTILE){ return new HLetterSpacing(spacing , unit )};
let ListItem = function (id){ return new HListItem(id)};
let ListStyle = function (position = LISTSTYLEPOSITION.OUTSIDE){ return new HListStyle(position )};
let ListStyleImage = function (url){ return new HListStyleImage(url)};
let ListStylePosition = function (position = LISTSTYLEPOSITION.OUTSIDE){ return new HListStylePosition(position)};
let ListStyleType = function (styleType=LISTSTYLETYPE.NONE){ return new HListStyleType(styleType)};
let Margin = function (margin = 5, unit = _UNITS.PERCENTILE){ return new HMargin(margin , unit )};
let MinHeight = function (minHeight = 100, unit = _UNITS.PERCENTILE){ return new HMinHeight(minHeight, unit)};
let MultipleSelectDropDown = function (id, name='',size='3'){ return new HMultipleSelectDropDown(id, name,size)};
let OrderedList = function (id){ return new HOrderedList(id)};
let Overflow = function (overflow = OVERFLOW.SCROLL){ return new HOverflow(overflow )};
let BFVisibilty = function (visibilty = "hidden"){ return new HBFVisibility(visibilty )};
let OverflowY = function (overflow = OVERFLOW.SCROLL){ return new HOverflowY(overflow )};
let OverflowX = function (overflow = OVERFLOW.SCROLL){ return new HOverflowX(overflow )};
let Padding = function (padding = 5, unit = _UNITS.PERCENTILE){ return new HPadding(padding , unit )};
let Paragraph = function (id){ return new HParagraph(id)};
let PasswordInput = function (id, name='',maxLength){ return new HPasswordInput(id, name,maxLength)};
let Position = function (position = POSITION.RELATIVE){ return new HPosition(position)};
let PositionBottom = function (bottom = 0, unit=_UNITS.PX){ return new HPositionBottom(bottom, unit)};
let PositionLeft = function (left = 0, unit=_UNITS.PERCENTILE){ return new HPositionLeft(left, unit)};
let PositionRight = function (right = 0, unit=_UNITS.PX){ return new HPositionRight(right, unit)};
let PositionTop = function (top = 0, unit=_UNITS.PX){ return new HPositionTop(top , unit)};
let RadioButton = function (id, name='',value,checked){ return new HRadioButton(id, name,value,checked)};
let RightBorder = function (width = BORDERWIDTH.THICK,style =BORDERSTYLE.SOLID,color="BLACK", unit= _UNITS.PERCENTILE){ return new HRightBorder(width ,style ,color, unit)};
let SearchInput = function (id, name=''){ return new HSearchInput(id, name)};
let Source = function (id, src = "",type){ return new HSource(id, src ,type)};
let SubmitButton = function (id, name='',value){ return new HSubmitButton(id, name,value)};
let Table = function (id){ return new HTable(id)};
let TableBody = function (id){ return new HTableBody(id)};
let TableData = function (id,colSpan=0,rowSpan){ return new HTableData(id,colSpan,rowSpan)};
let TableFoot = function (id){ return new HTableFoot(id)};
let TableHead = function (id){ return new HTableHead(id)};
let TableHeading = function (id,colSpan=0,rowSpan=0){ return new HTableHeading(id,colSpan,rowSpan)};
let TableRow = function (id){ return new HTableRow(id)};
let Text = function (text){ return new HText(text)};
let TextAlignment = function (alignment = TEXTALIGNMENT.LEFT){ return new HTextAlignment(alignment)};
let TextArea = function (id, name='',cols,rows){ return new HTextArea(id, name='',cols,rows)};
let TextDecoration = function (decoration = TEXTDECORATION.NONE){ return new HTextDecoration(decoration )};
let TextIndent = function (indent = 3, unit = _UNITS.PERCENTILE){ return new HTextIndent(indent , unit )};
let TextInput = function (id, name='',maxLength=250){ return new HTextInput(id, name,maxLength)};
let Input = function (id,type, name='',maxLength,placeholder){ return new HInput(id,type,name,maxLength,placeholder)};
let TextShadow = function (hDistance = 5,vDistance = 5, blur = 5, color = '#000000', unit = _UNITS.PX){ return new HTextShadow(hDistance ,vDistance , blur , color , unit )};
let TextTransform = function (transform = TEXTTRANSFORM.LOWERCASE){ return new HTextTransform(transform)};
let Transform = function (transform = "rotate(7deg)"){ return new HTransform(transform)};
let TopBorder = function (width = BORDERWIDTH.THICK,style =BORDERSTYLE.SOLID,color="BLACK", unit= _UNITS.PERCENTILE){ return new HTopBorder(width ,style ,color, unit)};
let UnorderedList = function (id){ return new HUnorderedList(id)};
let UrlInput = function (id, name=''){ return new HUrlInput(id, name)};
let VerticalAlignment = function (alignment = VERTICALALIGNMENT.TEXTTOP){ return new HVerticalAlignment(alignment)};
let Video = function (id, src = "",poster="",preload=PRELOAD.NONE,controls,autoplay,loop){ return new HVideo(id, src ,poster,preload,controls,autoplay,loop)};
let WordSpacing = function (spacing = 1, unit = _UNITS.PERCENTILE){ return new HWordSpacing(spacing,unit)};
let ZIndex = function (zIndex = 0){ return new HZIndex(zIndex)};
let Height = function (height = 100, unit = _UNITS.PERCENTILE){ return new HHeight(height, unit)};
let Width = function (width = 100, unit = _UNITS.PERCENTILE){ return new HWidth(width, unit)};
let MaxHeight = function (maxHeight = 100, unit = _UNITS.PERCENTILE){ return new HMaxHeight(minHeight, unit)};
let MaxWidth = function (maxWidth = 100, unit = _UNITS.PERCENTILE){ return new HMaxWidth(maxWidth, unit)};
let MinWidth = function (minWidth = 100, unit = _UNITS.PERCENTILE){ return new HMinWidth(minWidth, unit)};
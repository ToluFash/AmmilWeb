(() => {
    class ColorScheme {
        _primaryColor;
        _secondaryColor;
        _tertiaryColor;
        _quaternaryColor;
        _quinaryColor;
        _senaryColor;
        _septenaryColor;
        _octonaryColor;
        _nonaryColor;
        _denaryColor;
        constructor() {
        }


        getPrimaryColor() {
            return this.primaryColor;
        }

        setPrimaryColor(value) {
            this.primaryColor = value;
        }

        getSecondaryColor() {
            return this.secondaryColor;
        }

        setSecondaryColor(value) {
            this.secondaryColor = value;
        }

        getTertiaryColor() {
            return this.tertiaryColor;
        }

        setTertiaryColor(value) {
            this.tertiaryColor = value;
        }

        getQuaternaryColor() {
            return this.quaternaryColor;
        }

        setQuaternaryColor(value) {
            this.quaternaryColor = value;
        }

        getQuinaryColor() {
            return this.quinaryColor;
        }

        setQuinaryColor(value) {
            this.quinaryColor = value;
        }

        getSenaryColor() {
            return this.senaryColor;
        }

        setSenaryColor(value) {
            this.senaryColor = value;
        }

        getSeptenaryColor() {
            return this.septenaryColor;
        }

        setSeptenaryColor(value) {
            this.septenaryColor = value;
        }

        getOctonaryColor() {
            return this.octonaryColor;
        }

        setOctonaryColor(value) {
            this.octonaryColor = value;
        }

        getNonaryColor() {
            return this.nonaryColor;
        }

        setNonaryColor(value) {
            this.nonaryColor = value;
        }

        getDenaryColor() {
            return this.denaryColor;
        }

        setDenaryColor(value) {
            this.denaryColor = value;
        }
        getBlackColor(){
            return "000000"
        }
    }
    let colorScheme = new ColorScheme();
    colorScheme.setPrimaryColor('FFFFFF');
    colorScheme.setSecondaryColor('407d80');
    colorScheme.setTertiaryColor('F0EBCD');
    colorScheme.setQuaternaryColor('F7F4E4');
    colorScheme.setQuinaryColor('564F33');
    colorScheme.setSenaryColor('898253');
    colorScheme.setSeptenaryColor('9B9462');
    colorScheme.setNonaryColor('AEA770');
    colorScheme.setDenaryColor('FFFFFF');


    class SSButton extends HButton{
        index;

        /**
         *
         * @param id
         * @param {Number}index
         * @param mouseListener
         */
        constructor(id,index, mouseListener) {
            super("ssButton_" + id);
            this.index = index;
            this.addCustomStyle(
                [
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Margin(2, 'px'),
                    Height(15, 'px'),
                    Width(15, 'px'),
                    BorderRadius(50),
                    Display("inline"),
                ]
            );
            this.addMouseListener(mouseListener)
        }
        getIndex(){
            return this.index;
        }
        setIndex(index){
            this.index = index;
        }

    }



    class Slide extends HDivision{
        index;
        image;
        constructor(id, src = "",alt= "", mouseListener){
            super("navLink_"+id);
            this.addCustomStyle(
                [
                    Margin(0, 'px').setTop(5),
                    Height(100),
                    Width(100),
                    Display("block")
                ]
            );
            this.image = new HImage("image_"+id, src,alt).addCustomStyle(
                Width(100),
                Height(100)
            )
            this.addComponent(this.image);
            this.addMouseListener(mouseListener)
        }


    }
    class SlideShow extends HDivision{
        screen;
        navigation;
        startScreen;
        items;
        topIndex;
        position;
        constructor(id, slides = []) {
            super("slideShow_"+ id);
            this.addCustomStyle([
                Width(100),
                Overflow(OVERFLOW.HIDDEN)
            ])
            this.screen = Division(this.id+'_screen').addCustomStyle([
                Width(100),
                Height(470,'px'),
                BackgroundColor(colorScheme.getQuaternaryColor())

            ]);
            this.navigation = Division(this.id+'_nav').addCustomStyle([
                Width(100),
                Height(8),
                BackgroundColor(colorScheme.getPrimaryColor()),
                Margin(0, 'px').setRight(350).setLeft(350)

            ]);
            this.position= 0;
            this.items = slides
            this.topIndex =slides.length-1;
            this.initTimer()
            this.addComponent([this.screen,this.navigation]);
        }

        addButton(){
            this.navigation.addComponent(new SSButton(this.topIndex, this.topIndex, this))
        }
        /**
         *
         * @param {HDivision}slide
         */
        addSlide(slide){
            this.items.push(slide);
            this.screen.addComponent(slide);
            this.topIndex++;
            this.addButton();
            slide.addCustomStyle(Display("none"))

        }
        removeSlide(slide){
            this.items.remove(this.findSlide(slide));
        }
        findSlide(slide){
            let found = false
            let index = 0
            while (!found){
                if (this.items[index] === slide)
                    return index
                else
                    if (index === this.topIndex)
                        return -1
            }
            return -1
        }
        initTimer(){
            this.interval = setInterval(()=>{
                console.log(this.items.length)
                if (this.topIndex > -1){
                    try{
                        this.items[this.position-1].addCustomStyle(Display("None"))
                    }
                    catch (e){

                        this.items[this.topIndex].addCustomStyle(Display("None"))
                    }
                    this.items[this.position].addCustomStyle(Display("Block"))
                    this.position === this.topIndex ? this.position= 0: this.position++;
                }

            }, 5000);
        }
        switchTo(button){
            clearInterval(this.interval);

            try{
                this.items[this.position-1].addCustomStyle(Display("None"))
            }
            catch (e){

                this.items[this.topIndex].addCustomStyle(Display("None"))
            }
            this.items[button.getIndex()].addCustomStyle(Display("Block"))
            this.initTimer();
        }

        mouseClicked(e){
            if (e instanceof  SSButton){
                this.switchTo(e.getSource());
            }

        }

    }
    class NavDropDown extends HDivision{
        constructor(id, links = [],mouseListener, width, height){
            super("navDropDown_"+id);
            this.addCustomStyle(
                [
                    Display("none"),
                    Color(colorScheme.getSecondaryColor()),
                    Height(height, 'px'),
                    Width(width, 'px'),
                ]
            );
            this.addComponent(links);
            this.addMouseListener(mouseListener)
        }

    }
    class NavLink extends HDivision{
        anchor;
        dropdown;
        constructor(id,alt= "",href, mouseListener, width, dropdown = null){
            super("navLink_"+id);
            this.dropdown =     dropdown;
            this.addCustomStyle(
                [
                    Color("FFFFFF"),
                    Height(30, 'px'),
                    Width(width, 'px'),
                    Float('left'),
                ]
            );
            this.anchor = new HAnchor("a_"+id, href).setTextContent(alt);
            this.anchor.addCustomStyle(
                [
                    Color("ffffff"),
                    Margin(0),
                    Padding(0).setTop(21).setBottom(26).setLeft(10).setRight(10),
                    Width(75, 'px'),
                    FontSize(10,'pt'),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE)
                ]
            );
            this.addSelectorRule("hover", Color("000000"))
            this.addComponent(this.anchor);
            this.addMouseListener(mouseListener)
        }

        getAnchor() {
            return this.anchor;
        }

    }
    class PButton extends HButton{
        constructor(id,alt= "", mouseListener){
            super("pButton_"+id);
            this.alt = alt;
            this.addCustomStyle(
                [
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Margin(0, 'px').setTop(5).setRight(10),
                    Height(30, 'px'),
                    Width(100, 'px'),
                    Transform('skew(20deg)'),
                    Display("inline-block"),
                ]
            );
            this.paragraph = new HSpan("p_"+id).setTextContent(alt);
            this.paragraph.addCustomStyle(
                [
                    Display("inline-block"),
                    Color("FFFFFF"),
                    Transform('skew(-20deg)'),
                    TextAlignment('center')
                ]
            );
            this.addComponent(this.paragraph);
            this.addMouseListener(mouseListener)
        }

    }
    class MainView extends HDivision{

        constructor() {
            super('mainView');
            WINDOW.addComponent(this);
            WINDOW.addCustomStyle([
                Height(100, 'vh'),
                Width(100,'vw'),
                Padding(0),
                Margin(0),
            ]);
            this.addCustomStyle([
                    Height(100, 'vh'),
                    Width(100,'vw'),
                    Padding(0),
                    Margin(0)
                ]
            );

            this.initTopPanels();
            this.initHeader();
            this.initCenter();
            this.addComponentListener(this)
        }

        initTopPanels(){
            this.header = Division('header')
                .addCustomStyle([
                    Height(90, 'px'),
                    Width(100,'%'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    Margin(0),
                    Padding(0)
                ]);

            this.center = Division('center')
                .addCustomStyle([
                    Height(this.getProperDimensions(), 'px'),
                    Width(100,'vw'),
                    Overflow("hidden"),
                    BackgroundColor(colorScheme.getQuaternaryColor()),
                    // Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    // Margin(2),
                    Padding(0)
                ]);
            this.footerPanel = Division('footerPanel')
                .addCustomStyle([
                    Height(80, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    // Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    // Margin(2),
                    Padding(0)
                ]);

            this.addComponent([this.header,this.center,this.footerPanel])
        }

        initHeader(){
            this.initLogo();
            this.initNav()
        }
        initLogo(){
            this.logoArea = Division('logoArea').addCustomStyle(
                [
                    Height(80, 'px'),
                    Width(80, 'px'),
                    Margin(5,'px'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN)
                ])
            this.header.addComponent(this.logoArea);


        }

        initNav(){
            this.navigation = Division('navigation').addCustomStyle(([
                Height(30, 'px'),
                Width(600, 'px'),
                Padding(0,"px").setTop(12).setLeft(0),
                Margin(0,'px').setRight(10).setTop(42),
                BackgroundColor(colorScheme.getSecondaryColor()),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Float('right'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.header.addComponent(this.navigation);

            let home = new NavLink("home", "Home","/ammilserver",this, 50);
            let services = new NavLink("services", "Services","/ammilserver",this, 70);
            let aboutUs = new NavLink("aboutUs", "About Us","/ammilserver",this, 70);
            let contactUs = new NavLink("contactUs","Contact","/ammilserver",this, 70);

            this.navigation.addComponent([home,services,aboutUs,contactUs])


        }

        initCenter(){

            this.setUpTitleArea();
            this.setUpInformationCenter();
        }
        setUpTitleArea(){
            this.titleArea =Division('titleArea').addCustomStyle(([
                Margin(150, 'px').setTop(100).setRight(30),
                Height(200, 'px'),
                Width(300, 'px'),
                Padding(10,"px"),
                BackgroundColor("FFFFFF"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.center.addComponent(this.titleArea)

            this.titleDiv = Division('titleDiv').addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(20, 'pt'),

            ]);
            this.title1 = Paragraph("title1").setTextContent("AVE MARIA")
            this.title2 = Paragraph("title2").setTextContent("MULTIPURPOSE")
            this.title3 = Paragraph("title3").setTextContent("INVESTMENT LIMITED")
            this.buttonsDiv = Division('buttonsDiv').addCustomStyle(Margin(0, 'px').setTop(10));
            this.loginBtn = new PButton('loginBtn', "Login", this);
            this.registerBtn = new PButton('registerBtn', "Register", this);
            this.buttonsDiv.addComponent([this.loginBtn, this.registerBtn]);
            this.titleDiv.addComponent(
                [
                    this.title1,
                    this.title2,
                    this.title3,
                    this.buttonsDiv
                ]
            );
            this.titleArea.addComponent(this.titleDiv);
        }
        setUpInformationCenter(){
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Height(500, 'px'),
                Width(800, 'px'),
                Margin(0, 'px').setTop(30).setRight(30),
                Padding(5,"px"),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.SOLID),
                BackgroundColor(colorScheme.getPrimaryColor()),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Float('right'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.center.addComponent(this.infoCenter)
            this.slideShow = new SlideShow('mainSlideShow',[

                ]);
            this.slideShow.addSlide(
                new Slide(1, "/ammilserver/get1stImage.jpg", this.slideShow));
            this.slideShow.addSlide(
                new Slide(1, "/ammilserver/get2ndImage.jpg", this.slideShow));
            this.slideShow.addSlide(
                new Slide(1, "/ammilserver/get3rdImage.jpg", this.slideShow));
            this.infoCenter.addComponent(this.slideShow)


        }

        getProperDimensions(){
            return window.innerHeight-170;
        }

        getNavWidth(){
            return window.innerWidth-450;
        }


        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                    console.log(e.getSource())


            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    BackgroundColor(colorScheme.getSecondaryColor())

                ])
            }

            if(e.getSource() instanceof PButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getSecondaryColor())

                ])
            }
        }
        mouseOver(e){

            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    BackgroundColor(colorScheme.getBlackColor())

                ])
            }

            if(e.getSource() instanceof PButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getBlackColor())

                ])
            }


        }
        mouseDown(e){

        }
        componentResized(e){
            this.center
                .addCustomStyle([
                    Height(this.getProperDimensions(), 'px')]);
        }
    }

let mainView = new MainView();













})();
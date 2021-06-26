(() => {
    class ColorScheme {
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
    colorScheme.setPrimaryColor('2f91ae');
    colorScheme.setSecondaryColor('FFFFFF');
    colorScheme.setTertiaryColor('6b91ae');
    colorScheme.setQuaternaryColor('F7F4E4');
    colorScheme.setQuinaryColor('564F33');
    colorScheme.setSenaryColor('898253');
    colorScheme.setSeptenaryColor('9B9462');
    colorScheme.setNonaryColor('AEA770');
    colorScheme.setDenaryColor('FFFFFF');

    class NLButton extends HDivision{


        constructor(id) {
            super(id);
            this.addCustomStyle(
                [
                    BackgroundColor("FFFFFF"),
                    Float('left'),
                    Margin(0, 'px').setTop(5),
                    Height(40,'px'),
                    Width(60,'px'),
                    Border("thin", "hidden"),
                    BorderRadius(40,"%"),
                    FontSize(20,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    TextAlignment("center")
                ]
            )
        }
    }


    class NewsLetterRegister extends HDivision{
        constructor(id, mouseListener) {
            super("nLReg_" +id);
            this.addCustomStyle([

            ])
            this.addComponent(
                Paragraph('title'+this.id).setTextContent("NewsLetter").addCustomStyle(
                    [
                        Color(colorScheme.getSecondaryColor()),
                        FontSize(25,'px'),
                        FontFamily("calibri"),
                        Margin(0,'px').setBottom(15)
                    ]
                )
            )
            this.input = EmailInput('tI_'+id,'tI_'+id, 200).addCustomStyle(
                [
                    Height(50,'px'),
                    Width(220,'px'),
                    BackgroundColor("FFFFFF"),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    BorderRadius(10,'px'),
                    Display("inline"),
                    FontSize(20,'px'),
                    Position("relative"),
                    Float("left"),
                    Margin(0, 'px').setRight(20)
                ]
            );
            this.sbmButton = new NLButton('btn_'+this.id)
            this.sbmButton.addComponent(
                Paragraph("sbmP").setTextContent("Send").addCustomStyle(
                        Margin('0','px').setTop(7)
                )
            )
            this.sbmButton.addMouseListener(mouseListener);
            this.addComponent([this.input, this.sbmButton])
        }

        /**
         *
         * @returns {String}
         */
        getEmail(){
            return this.input.getInputText();
        }
    }

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
                    Display("block"),

                ]
            );
            this.image = new HImage("image_"+id, src,alt).addCustomStyle(
                Width(100),
                Height(100),
                BorderRadius(20)

            )
            this.addComponent(this.image);
            //this.addMouseListener(mouseListener)
        }
    }
    class SlideShow extends HDivision{
        screen;
        navigation;
        startScreen;
        items;
        topIndex;
        position;
        current;
        buttons;
        constructor(id, slides = []) {
            super("slideShow_"+ id);
            this.addCustomStyle([
                Width(100),
                Overflow(OVERFLOW.HIDDEN)
            ])
            this.screen = Division(this.id+'_screen').addCustomStyle([
                Width(95),
                Margin('auto', ''),
                Height(230,'px'),
                BackgroundColor(colorScheme.getQuaternaryColor()),
            ]);
            this.navigation = Division(this.id+'_nav').addCustomStyle([
                Width(20),
                Height(8),
                Margin('auto', '')

            ]);
            this.buttons=[];
            this.position= -1;
            this.items = slides
            this.topIndex =slides.length-1;
            this.addComponent([this.screen,this.navigation]);
        }

        addButton(){
            let button = new SSButton(this.topIndex, this.topIndex, this);
            button.addCustomStyle(
                Border("thin","hidden")
            )
            this.buttons.push(button);
            this.navigation.addComponent(button)
        }
        onButton(button){

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
        start(){
            try{

                this.items[0].addCustomStyle(Display("Block"))
                this.buttons[0].addCustomStyle(BackgroundColor(colorScheme.getPrimaryColor()))
                this.position++;
                this.current= 0;
                this.initTimer();
            }
            catch (e){

            }

        }
        initTimer(){
            this.interval = setInterval(()=>{

                this.items.forEach(function (item){
                    item.addCustomStyle(Display("None"));

                })
                this.buttons.forEach(function (item){
                    item.addCustomStyle(BackgroundColor('FFFFFF'));

                })
                    this.items[this.position].addCustomStyle(Display("Block"))
                this.buttons[this.position].addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor())
                ])
                    this.current= this.position;
                    this.position === this.topIndex ? this.position= 0: this.position++;

            }, 2000);
        }

        switchTo(button){
            clearInterval(this.interval);
            this.items.forEach(function (item){
                item.addCustomStyle(Display("None"));

            })
            this.buttons.forEach(function (item){
                item.addCustomStyle(BackgroundColor('FFFFFF'));

            })
            button.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor())
            ])
            this.items[button.getIndex()].addCustomStyle(Display("Block"));
            this.position = button.getIndex();
            this.current= this.position;
            this.position === this.topIndex ? this.position= 0: this.position++;

            this.initTimer();
        }

        mouseClicked(e){
            if (e.getSource() instanceof  SSButton){
                this.switchTo(e.getSource());
            }

        }

        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

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
    class FooterSection extends HDivision{
        title;
        constructor(id, title = ""){
            super("footerSect_"+id);
            this.addCustomStyle(
                [
                    Margin('0','px'),
                    Width(25,'%'),
                    Display("block"),
                    FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                    Color(colorScheme.getSecondaryColor()),
                    Float('left')
                ]
            );
            this.title = new Paragraph('title'+this.id).addCustomStyle([

                FontSize(20,'px')
            ]);
            this.title.setTextContent(title)
            this.addComponent(this.title)
        }
        setTitle(string){
            this.title.setTextContent(string);
            return this;
        };

    }
    class Contact extends HDivision {
        title;
        address;
        phoneno;
        email;
        constructor(id, title = ""){
            super("contact_"+id);
            this.addCustomStyle(
                [
                    Height(120,'px'),
                    Width(250,'px'),
                    Display("block"),
                    Color(colorScheme.getSecondaryColor())
                ]
            );
            this.title = new Paragraph('title'+this.id).addCustomStyle([

            ]).setTextContent(title);
            this.address = new Paragraph('address'+this.id).addCustomStyle([

            ]);
            this.phone = new Paragraph('phone'+this.id).addCustomStyle([

            ]);
            this.email = new Paragraph('email'+this.id).addCustomStyle([

            ]);

            this.addComponent([this.title,this.address,this.phone,this.email])
        }

        setTitle(string){
            this.title.setTextContent(string);
            return this;
        };
        setAddress(string){
            this.address.setTextContent(string);
            return this;
        }
        setPhone(string){
            this.phone.setTextContent(string);
            return this;
        }
        setEmail(string){
            this.email.setTextContent(string);
            return this;
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
                    Color('000000'),
                    Height(30, 'px'),
                    Width(width, 'px'),
                    Float('left'),
                ]
            );
            this.anchor = new HAnchor("a_"+id, href).setTextContent(alt);
            this.anchor.addCustomStyle(
                [
                    Color('000000'),
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
                    BackgroundColor(colorScheme.getTertiaryColor()),
                    Border("thin",'hidden'),
                    Margin(0, 'px').setTop(5).setRight(10),
                    Height(60, 'px'),
                    Width(60, 'px'),
                    FontSize(12,'px'),
                    FontWeight("bold"),
                    TextDecoration(),
                    //Transform('skew(20deg)'),
                    BorderRadius(100,'px'),
                    Display("inline-block"),
                ]
            );
            this.paragraph = new HSpan("p_"+id).setTextContent(alt);
            this.paragraph.addCustomStyle(
                [
                    Display("inline-block"),
                    Color("FFFFFF"),
                    //Transform('skew(-20deg)'),
                    TextAlignment('center')
                ]
            );
            this.addComponent(this.paragraph);
            this.addMouseListener(mouseListener)
        }

    }
    class FooterPanel extends HDivision{

        constructor(id){
            super("footerPanel_"+id);
            this.addCustomStyle(
                [
                    Display("block"),
                    FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                    FontSize(12,'px'),
                    Padding(5,'px')
                ]
            );
            this.addComponent([
                Anchor('footerText1', "").setTextContent("Privacy Policy").addCustomStyle([
                    Margin(0,'px').setLeft(20),
                    Color('ffffff'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Display("block")
                ]),
                Anchor('footerText2', "").setTextContent("Facebook").addCustomStyle([
                    Margin(0,'px').setLeft(20),
                    Color('ffffff'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Display("block")
                ]),
                Anchor('footerText3', "").setTextContent("Instagram").addCustomStyle([
                    Margin(0,'px').setLeft(20),
                    Color('ffffff'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Display("block")
                ]),
                Anchor('footerText4', "").setTextContent("Twitter").addCustomStyle([
                    Margin(0,'px').setLeft(20),
                    Color('ffffff'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Display("block")
                ])
            ])

        }

    }
    class MainView extends HDivision{
        constructor() {
            super('mainView');
            WINDOW.addComponent(this);
            WINDOW.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Height(100, 'vh'),
                Width(100,'vw'),
                Padding(0),
                Margin(0),
                OverflowX('hidden')
            ]);
            this.addCustomStyle([
                    Height(100, 'vh'),
                    Width(100,'vw'),
                    Padding(0),
                    Margin(0)
                ]
            );

            this.start()
            this.addComponentListener(this)
        }

        start(){
            {
                this.initTopPanelsWS();
                this.initHeaderWS();
                this.initCenterWS();
                this.setUpFooterWS()
            }/*
            if (document.body.offsetWidth > 1290 )  {
                this.initTopPanelsWS();
                this.initHeaderWS();
                this.initCenterWS();
                this.setUpFooterWS()
            }
            else if (document.body.offsetWidth >450)  {
                this.initTopPanelsTB();
                this.initHeaderTB();
                this.initCenterTB();
            }
            else{
                this.initTopPanelsMB();
                this.initHeaderMB();
                this.initCenterMB();
                this.setUpFooterMB()
            }
            */
        }


        initTopPanelsWS(){
            this.header = Division('header')
                .addCustomStyle([
                    Height(130, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(2)
                ]);

            this.center = Division('center')
                .addCustomStyle([
                    Height(100, 'vh'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    // Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    // Margin(2),
                    Padding(0),
                    Position(),
                    ZIndex(0),
                    PositionTop(90,'px'),
                    BackgroundImage("/getBackground.jpg")
                ]);
            this.center2 = Division('center2')
                .addCustomStyle([
                    Height(60, 'vh'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getTertiaryColor()),
                    Position(),
                    Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                    ZIndex(0),
                    PositionTop(90,'px')
                ]);
            this.center3 = Division('center3')
                .addCustomStyle([
                    Height(65, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getTertiaryColor()),
                    Position(),
                    Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                    ZIndex(0),
                    PositionTop(90,'px')
                ]);
            this.footerPanel = Division('footerPanel')
                .addCustomStyle([
                    Height(65, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getTertiaryColor()),
                    // Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    // Margin(2),
                    Padding(0),
                    Position("fixed"),
                    PositionBottom(0,'px'),
                    ZIndex(1)
                ]);

            this.addComponent([this.header,this.center,this.center2,this.center3,this.footerPanel])
        }
        initHeaderWS(){
            this.initLogoWS();
            this.initNavWS()
        }
        initLogoWS(){
            this.logoArea = Division('logoArea').addCustomStyle(
                [
                    Height(50, 'px'),
                    Width(250, 'px'),
                    Margin(0, 'px').setTop(10).setLeft(20),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color("FFFFFF"),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN),
                    Display('block')
                ])
            this.logoText = Paragraph('logoText').setTextContent("AmmilMFI");
            this.logoImage= new HImage("image_"+this.id, "/get1stImage.jpg","").addCustomStyle(
                Width(120,'px'),
                Height(80,'px'),
                BorderRadius(20)

            )
            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px')

            ])
            this.logoArea.addComponent([this.logoText, this.logoImage]);
            this.header.addComponent(this.logoArea);


        }
        initNavWS(){
            this.navigation = Division('navigation').addCustomStyle(([
                Height(30, 'px'),
                Width(95, 'vw'),
                Padding(0,"px").setTop(12).setLeft(10),
                Margin(0,'px').setTop(10).setLeft(18).setRight(18),
                BackgroundColor(colorScheme.getSecondaryColor()),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.header.addComponent(this.navigation);

            let home = new NavLink("home", "Home","",this, 60);
            let services = new NavLink("services", "Services","",this, 70);
            let aboutUs = new NavLink("aboutUs", "About Us","",this, 70);
            let resourCnt = new NavLink("rsCtr", "Resource Centre","",this, 123);
            let contactUs = new NavLink("contactUs","Contact","",this, 70);

            this.navigation.addComponent([home,services,aboutUs,resourCnt,contactUs])


        }
        initCenterWS(){

            this.setUpTitleAreaWS();
            this.setUpInformationCenterWS();
        }
        setUpTitleAreaWS(){
            this.titleArea =Division('titleArea').addCustomStyle(([
                Height(200, 'px'),
                Width(300,'px'),
                Padding(10,"px"),
                Position("absolute"),
                PositionTop(150, 'px'),
                PositionLeft(100, 'px'),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.center.addComponent(this.titleArea)

            this.titleDiv = Division('titleDiv').addCustomStyle([

                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('left'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(200, '%'),
                Overflow("hidden")

            ]);
            this.title1 = Paragraph("title1").setTextContent("AVE MARIA MULTIPURPOSE INVESTMENT LIMITED").addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv = Division('buttonsDiv').addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
            ]);
            this.loginBtn = new PButton('loginBtn', "Start", this)
            this.buttonsDiv.addComponent([this.loginBtn])
            this.titleDiv.addComponent(
                [
                    this.title1,
                    this.buttonsDiv
                ]
            )
            this.titleArea.addComponent(this.titleDiv);
        }
        setUpInformationCenterWS(){
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(400, 'px'),
                Margin(20,'px'),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute "),
                PositionRight(100, 'px'),
                PositionTop(120, 'px'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.center.addComponent(this.infoCenter)
            this.slideShow = new SlideShow('mainSlideShow',[

                ]);
            this.slideShow.addSlide(
                new Slide(1, "/get1stImage.jpg", this));
            this.slideShow.addSlide(
                new Slide(2, "/get2ndImage.jpg", this));
            this.slideShow.addSlide(
                new Slide(3, "/get3rdImage.jpg", this));
            this.infoCenter.addComponent(this.slideShow)

            this.slideShow.start();


        }
        setUpFooterWS(){
            this.aboutUs = new FooterSection('fAboutUs', "About Us");
            this.aboutUs.addCustomStyle([
                Margin(0).setRight(5)
            ])
            this.covid19 = new FooterSection('fCovid19', "Covid 19")
            this.covid19.addCustomStyle([
                Margin(0).setRight(5)
            ]);
            this.contactUs = new FooterSection('fcontactUs', "Contact Us");

            this.contactHO = new Contact('contactHO', "Head Office")
            this.contactHO.setAddress("AMMIL Building, Opp. Labake Store, Owode, Oyo, Oyo State.")
            this.contactHO.setPhone("08134380797, 08077688333")
            this.contactHO.setEmail("info@ammilmfi.com")
            this.contactIW = new Contact('contactIW', "Iwere-Ile Branch")
            this.contactIW.setAddress("Oke Asunnara Area, Opp. Town Hall, Iwere Ile, Oyo State.")
            this.contactIW.setPhone("08137449872")
            this.contactIW.setEmail("")
            this.contactSK = new Contact('contactSK', "Saki Branch")
            this.contactSK.setAddress("26/27, James Koleoso Shopping Complex, Kolawole Area, Saki, Oyo State.")
            this.contactSK.setPhone("08067293082")
            this.contactSK.setEmail("")
            this.contactOG = new Contact('contactOG', "Ogbomoso Branch")
            this.contactOG.setAddress("St. Ferdinand Catholic Church Shopping Complex, Ogbomoso, Oyo State.")
            this.contactOG.setPhone("07040269641")
            this.contactOG.setEmail("")
            this.contactIG = new Contact('contactIG', "Igebeti Branch")
            this.contactIG.setAddress("AMMIL Office, Ibukun-Olu Hospital Compound, Ago-Are, Igbeti, Oyo State.")
            this.contactIG.setPhone("08137449473")
            this.contactIG.setEmail("")
            this.contactUs.addComponent([this.contactHO, this.contactIW ,this.contactSK,
            this.contactOG, this.contactIG])
            this.covid19.addComponent([
                Anchor('covid19WS', "").setTextContent("Resources").addCustomStyle([
                    Color('ffffff'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Display("block")
                ]),

            ])
            this.aboutUs.addComponent([
                Paragraph("abTextWS").setTextContent("We are a microfinance institution dedicated to the growth of all MSEs and SMEs in the community at large").addCustomStyle(
                    [
                        Width(150, "px"),
                        Margin(0,'px').setBottom(50)
                    ]
                ),
                new NewsLetterRegister("nLWS", this)
            ])

            this.center2.addComponent([this.aboutUs, this.covid19, this.contactUs]);
            this.footerPanel.addComponent(new FooterPanel("fWS"));
        }

        initTopPanelsTB(){
            this.header = Division('headerTB')
                .addCustomStyle([
                    Height(90, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    BottomBorder(BORDERWIDTH.THIN, BORDERSTYLE.SOLID,"#" + colorScheme.getSecondaryColor()),
                    // BorderRadius(0.5),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(2)
                ]);

            this.center = Division('centerTB')
                .addCustomStyle([
                    Height(1000, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Padding(0),
                    Position(),
                    ZIndex(0),
                    PositionTop(90,'px')
                ]);
            this.footerPanel = Division('footerPanelTB')
                .addCustomStyle([
                    Height(50, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    // Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    // Margin(2),
                    Padding(0),
                    Position("fixed"),
                    PositionBottom(0,'px'),
                    ZIndex(1)
                ]);

            this.addComponent([this.header,this.center,this.footerPanel])
        }
        initHeaderTB(){
            this.initLogoTB();
            this.initNavTB()
        }
        initLogoTB(){
            this.logoArea = Division('logoAreaTB').addCustomStyle(
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
        initNavTB(){
            this.navigation = Division('navigationTB').addCustomStyle(([
                Height(30, 'px'),
                Width(600, 'px'),
                Padding(0,"px").setTop(12).setLeft(0),
                Margin(0,'px').setRight(10).setTop(42),
                BackgroundColor(colorScheme.getSecondaryColor()),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute "),
                PositionRight(5, 'px'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.header.addComponent(this.navigation);

            let home = new NavLink("home", "Home","",this, 50);
            let services = new NavLink("services", "Services","",this, 70);
            let aboutUs = new NavLink("aboutUs", "About Us","",this, 70);
            let contactUs = new NavLink("contactUs","Contact","",this, 70);

            this.navigation.addComponent([home,services,aboutUs,contactUs])


        }
        initCenterTB(){

            this.setUpTitleAreaTB();
            this.setUpInformationCenterTB();
        }
        setUpTitleAreaTB(){
            this.titleArea =Division('titleAreaTB').addCustomStyle(([
                Height(330, 'px'),
                Width(100,'vw'),
                BackgroundColor("FFFFFF"),
                Display("block"),
                Position('relative')
            ]));
            this.center.addComponent(this.titleArea)

            this.titleDiv = Division('titleDivTB').addCustomStyle([

                Width(100),
                Position('relative'),
                PositionTop(150,'px'),
                TextAlignment('left'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(200, '%'),
                Overflow("hidden")

            ]);
            this.title1 = Paragraph("title1TB").setTextContent("AVE MARIA MULTIPURPOSE INVESTMENT LIMITED").addCustomStyle([
                TextAlignment("center")

            ]);
            this.buttonsDiv = Division('buttonsDivTB').addCustomStyle(
                [
                    Width(300,'px'),
                    Padding(10,'px'),
                    Margin('auto', ''),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.loginBtn = new PButton('loginBtnTB', "Login", this)
            this.registerBtn = new PButton('registerBtnTB', "Register", this)
            this.buttonsDiv.addComponent([this.loginBtn, this.registerBtn])
            this.titleDiv.addComponent(
                [
                    this.title1,
                    this.buttonsDiv
                ]
            )
            this.titleArea.addComponent(this.titleDiv);
        }
        setUpInformationCenterTB(){
            this.infoCenter = Division('infoCenterTB').addCustomStyle(([
                Height(500, 'px'),
                Width(800, 'px'),
                Margin('auto',''),
                Padding(5,"px"),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.SOLID),
                BackgroundColor(colorScheme.getPrimaryColor()),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display("block"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.center.addComponent(this.infoCenter)
            this.slideShow = new SlideShow('mainSlideShowTB',[

            ]);
            this.slideShow.addSlide(
                new Slide(1, "/get1stImage.jpg", this.slideShow));
            this.slideShow.addSlide(
                new Slide(1, "/get2ndImage.jpg", this.slideShow));
            this.slideShow.addSlide(
                new Slide(1, "/get3rdImage.jpg", this.slideShow));
            this.infoCenter.addComponent(this.slideShow)


        }

        initTopPanelsMB(){
            this.header = Division('headerMB')
                .addCustomStyle([
                    Height(90, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(2)
                ]);

            this.center = Division('centerMB')
                .addCustomStyle([
                    Height(500, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    // Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    // Margin(2),
                    Padding(0),
                    Position(),
                    ZIndex(0),
                    PositionTop(90,'px')
                ]);
            this.footerPanel = Division('footerPanelMB')
                .addCustomStyle([
                    Height(80, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    // Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    // Margin(2),
                    Padding(0),
                    Position("fixed"),
                    PositionBottom(0,'px'),
                    ZIndex(1)
                ]);

            this.addComponent([this.header,this.center,this.footerPanel])
        }
        initHeaderMB(){
            this.initLogoMB();
            this.initNavMB()
        }
        initLogoMB(){
            this.logoArea = Division('logoAreaMB').addCustomStyle(
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
        initNavMB(){
            this.navigation = Division('navigationMB').addCustomStyle(([
                Height(30, 'px'),
                Width(300, 'px'),
                Padding(0,"px").setTop(12).setLeft(0),
                Margin(0,'px').setRight(10).setTop(42),
                BackgroundColor(colorScheme.getSecondaryColor()),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute "),
                PositionRight(5, 'px'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.header.addComponent(this.navigation);

            let home = new NavLink("home", "Home","",this, 50);
            let services = new NavLink("services", "Services","",this, 70);
            let aboutUs = new NavLink("aboutUs", "About Us","",this, 70);
            let contactUs = new NavLink("contactUs","Contact","",this, 70);

            this.navigation.addComponent([home,services,aboutUs,contactUs])


        }
        initCenterMB(){

            this.setUpTitleAreaMB();
            this.setUpInformationCenterMB();
        }
        setUpTitleAreaMB(){
            this.titleArea =Division('titleAreaMB').addCustomStyle(([
                Height(150, 'px'),
                Width(95,'vw'),
                BackgroundColor("FFFFFF"),
                Position("relative"),
                Margin(0,'px').setTop(20),
                Padding(0,'px').setTop(50),
                Overflow(OVERFLOW.HIDDEN),
                Display("block"),
            ]));
            this.center.addComponent(this.titleArea)

            this.titleDiv = Division('titleDivMB').addCustomStyle([

                Width(80),
                Margin(0).setRight(10).setLeft(10),
                Position('relative'),
                TextAlignment('left'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(150, '%'),
                Overflow("hidden")

            ]);
            this.title1 = Paragraph("title1MB").setTextContent("AVE MARIA MULTIPURPOSE INVESTMENT LIMITED").addCustomStyle([
                TextAlignment("center")

            ]);
            this.buttonsDiv = Division('buttonsDivMB').addCustomStyle(
                [
                    Width(250,'px'),
                    Padding(10,'px').setLeft(50),
                    Margin('auto', ''),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.loginBtn = new PButton('loginBtnMB', "Login", this)
            this.registerBtn = new PButton('registerBtnMB', "Register", this)
            this.buttonsDiv.addComponent([this.loginBtn, this.registerBtn])
            this.titleDiv.addComponent(
                [
                    this.title1,
                    this.buttonsDiv
                ]
            )
            this.titleArea.addComponent(this.titleDiv);
        }
        setUpInformationCenterMB(){
            this.infoCenter = Division('infoCenterMB').addCustomStyle(([
                Height(200, 'px'),
                Width(300, 'px'),
                Margin('auto',''),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("relative "),
                Display("block"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.center.addComponent(this.infoCenter)
            this.slideShow = new SlideShow('mainSlideShowMB',[

            ]);
            this.slideShow.addSlide(
                new Slide(1, "/get1stImage.jpg", this.slideShow));
            this.slideShow.addSlide(
                new Slide(1, "/get2ndImage.jpg", this.slideShow));
            this.slideShow.addSlide(
                new Slide(1, "/get3rdImage.jpg", this.slideShow));
            this.infoCenter.addComponent(this.slideShow)


        }

        setUpFooterMB(){
            this.footerPanel.addComponent(new FooterPanel("fMB"))
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
                    BackgroundColor(colorScheme.getTertiaryColor())

                ])
            }
            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor())

                ])
            }
        }
        mouseOver(e){

            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    BackgroundColor(colorScheme.getTertiaryColor())

                ])
            }

            if(e.getSource() instanceof PButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getBlackColor())

                ])
            }
            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())

                ])
            }


        }
        mouseDown(e){

        }
        componentResized(e){
            console.log(this.center.domElement.offsetWidth)
            if (this.center.domElement.offsetWidth < 1295){
            }
        }
    }

let mainView = new MainView();













})();
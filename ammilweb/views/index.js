
function dpi(){
    return window.innerHeight/screen.height;
}
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

    let pages = {};
    let profiles ="";
    let colorScheme = new ColorScheme();
    colorScheme.setPrimaryColor('0058a3');
    colorScheme.setSecondaryColor('FFFFFF');
    colorScheme.setTertiaryColor('0058a3');
    colorScheme.setQuaternaryColor('F7F4E4');
    colorScheme.setQuinaryColor('564F33');
    colorScheme.setSenaryColor('898253');
    colorScheme.setSeptenaryColor('9B9462');
    colorScheme.setNonaryColor('f8f9fd');
    colorScheme.setDenaryColor('808080');


    class EventColorScheme{

        constructor() {
        }

        getPrimary(){
            return "4099ff"
        }
        getPrimaryLight(){
            return "4099ff"
        }
        getPrimaryDark(){
            return "003c82"
        }
        getSuccess(){
            return "2ed8b6"
        }
        getSuccessLight(){
            return "2ed8b6"
        }
        getSuccessDark(){
            return "105a4b"
        }
        getInfo(){
            return "00bcd4"
        }
        getInfoLight(){
            return "00bcd4"
        }
        getInfoDark(){
            return "004c56"
        }
        getWarning(){
            return "ffb64d"
        }
        getWarningLight(){
            return "ffb64d"
        }
        getWarningDark(){
            return "875000"
        }
        getDanger(){
            return "ff5370"
        }
        getDangerLight(){
            return "ff5370"
        }
        getDangerDark(){
            return "8a0017"
        }
        getDisabled(){
            return "EBEBE4"
        }
    }

    let ECS = new EventColorScheme();
    let serviceColors = new ColorScheme();
    serviceColors.setPrimaryColor('480032');
    serviceColors.setSecondaryColor('f16821');
    serviceColors.setTertiaryColor('7c144d');
    serviceColors.setQuaternaryColor('F7F4E4');
    serviceColors.setQuinaryColor('564F33');
    serviceColors.setSenaryColor('898253');
    serviceColors.setSeptenaryColor('9B9462');
    serviceColors.setNonaryColor('AEA770');
    serviceColors.setDenaryColor('808080');


    class Helper {
        static computeLPSArray(pat, M, lps = []) {
            let len = 0;
            let i = 1;
            lps[0] = 0;

            while (i < M) {
                if (pat.charAt(i) === pat.charAt(len)) {
                    len++;
                    lps[i] = len;
                    i++;
                }
                else
                {
                    if (len !== 0) {
                        len = lps[len - 1];

                    }
                    else
                    {
                        lps[i] = len;
                        i++;
                    }
                }
            }
        };

        static KMPSearch(pat, txt) {
            pat = pat.toLowerCase();
            txt = txt.toLowerCase();
            let M = pat.length;
            let N = txt.length;

            let lps = [];
            let j = 0;

            Helper.computeLPSArray(pat, M, lps);

            let i = 0;
            while (i < N) {
                if (pat.charAt(j) === txt.charAt(i)) {
                    j++;
                    i++;
                }
                if (j === M) {
                    return true;
                }

                else if (i < N && pat.charAt(j) !== txt.charAt(i)) {
                    if (j !== 0)
                        j = lps[j - 1];
                    else
                        i = i + 1;
                }
            }
            return false;
        }
        static numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    function elementInView(el, percentageScroll = 100){
        const elementTop = el.getBoundingClientRect().top;

        return (
            elementTop <=
            ((window.innerHeight || document.documentElement.clientHeight) * (percentageScroll/100))
        );
    }

    function getFont(name){
        return FontFamily("name")
    }


    class Loader extends HDivision{
        constructor(id="loader-wrapper") {
            super(id);
            this.addCustomStyle([Opacity(1),
                Transition("opacity","1000ms")]);
            this.loader = Division("loader").addCustomStyle([
                Opacity(1),
                Transition("opacity","1000ms")
            ]);
            this.loaderLeft = Division("section-left");
            this.loaderRight= Division("section-right");
            this.loaderLeft.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Transition("opacity","1000ms"),
                Opacity(1)
            ]);
            this.loaderRight.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Transition("opacity","1000ms"),
                Opacity(1)
            ]);
            this.addComponent([this.loader])
        }

        getLoader(){
            return this.loader;
        }
        getLoaderLeft(){
            return this.loaderLeft;
        }
        getLoaderRight(){
            return this.loaderRight;
        }

        fadeIn(){
            this.addCustomStyle(Display("block"));
            this.addCustomStyle(Opacity(1));
            this.loader.addCustomStyle(Opacity(1));
        }

        fadeOut(){
            this.addCustomStyle(Opacity(0));
            this.loader.addCustomStyle(Opacity(0));
            this.addCustomStyle(Display("none"))
        }
    }
    let loader = new Loader();
    loader.fadeIn();







    class LoaderSmall extends HDivision{
        constructor(id="loader-wrapperS") {
            super(id);
            this.addCustomStyle([Opacity(1),
                Transition("opacity","1000ms")]);
            this.loader = Division("loaderSmall").addCustomStyle([
                Opacity(1),
                Transition("opacity","1000ms")
            ]);
            this.addComponent([this.loader])
        }

        fadeIn(){
            this.addCustomStyle(Display("block"));
            this.addCustomStyle(Opacity(1));
            this.loader.addCustomStyle(Opacity(1));
        }

        fadeOut(){
            this.addCustomStyle(Opacity(0));
            this.loader.addCustomStyle(Opacity(0));
            this.addCustomStyle(Display("none"))
        }
    }
    class NoticeM extends HDivision{
        constructor(id, message,textWidth) {
            super(id);
            this.addCustomStyle(
                [
                    Width(600,'px'),
                    Height(50,'px'),
                    Overflow("hidden")
                ]
            )
            this.textWidth = textWidth;
            this.margin = 600;
            this.paragraph = Paragraph('noticeP'+id).setTextContent(message).addCustomStyle([
                FontSize(11,'pt'),
                FontFamily("calibri"),
                Color(colorScheme.getPrimaryColor()),
                Display("block"),
                Width(textWidth,'px'),
                Margin(0,'px').setLeft(this.margin),
            ])
            this.addComponent(this.paragraph);
            this.initTimer();
        }

        initTimer(){
            this.interval = setInterval(()=>{

                if(this.margin > -(this.textWidth-600))
                {
                    this.margin--;
                }
                else{

                    this.margin=600;
                }
                this.paragraph.addCustomStyle(
                    Margin(0,'px').setLeft(this.margin)
                )


            }, 15);
        }
    }
    class NoticeD extends HDivision{

        constructor(id, message) {
            super(id);
            this.addCustomStyle(
                Width(300,'px'),
                Height(50,'px')
            )
        }
    }

    class NLButton extends HDivision{
        constructor(id, href) {
            super(id);
            this.link = href;

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
                    TextAlignment("center"),
                    Transition("all","500ms","ease")
                ]
            )
        }
        getLink(){
            return this.link;
        }
    }


    class NewsLetterRegister extends HDivision{
        constructor(id, mouseListener) {
            super("nLReg_" +id);
            this.addCustomStyle([

            ]);
            this.addComponent(
                Paragraph('title'+this.id).setTextContent("NewsLetter").addCustomStyle(
                    [
                        Color(colorScheme.getSecondaryColor()),
                        FontSize(25,'px'),
                        FontFamily("calibri"),
                        Margin(0,'px').setBottom(15)
                    ]
                )
            );
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
            this.sbmButton = new NLButton('btn_'+this.id,"")
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

    /**
     * @param id
     */
    class ServiceBanner extends HDivision{
        constructor(id, width, height, image, alt) {
            super(id);
            this.addCustomStyle([
                Width(width, 'px'),
                Height(height,'px'),
                Display('inline'),
                Position(),
                PositionTop(10,'px'),
                BackgroundColor(colorScheme.getNonaryColor()),
                Float("left"),
                Overflow("hidden"),
                Transition(),
            ]);

            this.loaded = false;

            this.image = new HImage(this.id+"_image", image, alt).addCustomStyle([
                Width(width, 'px'),
                Height(height,'px'),
            ]);
            this.image.domElement.addEventListener("load", ()=>{
                this.loaded = true;
            });
            this.image.addCustomStyle([
                Width(width, 'px'),
                Height(height,'px')
            ]);
            this.addComponent(this.image)
        }
        isLoaded(){
            return this.loaded;
        }
    }

    class ServiceMessage extends HDivision{
        constructor(id, text="") {
            super(id);
            this.addCustomStyle([
                Color(colorScheme.getPrimaryColor()),
                FontFamily('calibri'),
                FontSize(11,'pt'),
                TextAlignment("justify"),
                Display("block"),
                Position('relative'),
                PositionLeft(10,'px'),
                PositionTop(10,'px')
            ]);
            this.paragraph = Paragraph(this.id+"_p").setTextContent(text).addCustomStyle([
                Width(95),
                Margin("auto",'')

            ]);
            this.addComponent(this.paragraph);
        }
        setTextContent(text){
            this.paragraph.setTextContent(text);
        }

    }
    class ServiceTag extends HDivision{
        constructor(id,text) {
            super(id);
            this.addCustomStyle([
                Width(350,'px'),
                Height(25,'px'),
                FontFamily("calibri"),
                FontWeight(500),
                FontSize(12,'pt'),
                Color(colorScheme.getPrimaryColor()),
                Overflow("hidden"),
                Transition()
            ]);

            this.icon = new HImage(this.id+"_img", tagIcon,"").addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Margin(0,'px').setLeft(15).setRight(10),
                Padding(0,'px').setTop(4),
                Display("inline"),
                Position("relative"),
                Float("left")

            ]);
            this.text = Paragraph(this.id+"_p").setTextContent(text).addCustomStyle([
                Width(300,'px'),
                FontSize(11,'pt'),
                Height(23,'px'),
                Display("inline"),
                Position("relative"),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ]);
            this.addComponent([
                this.icon,this.text
            ])
        }
    }
    class ServiceTagW extends HDivision{
        constructor(id,text) {
            super(id);
            this.addCustomStyle([
                Width(350,'px'),
                FontFamily("calibri"),
                FontWeight(500),
                Color(colorScheme.getSecondaryColor()),
                Overflow("hidden"),
                Transition()
            ]);

            this.icon = new HImage(this.id+"_img", tagIconW,"").addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Margin(0,'px').setLeft(15).setRight(10),
                Padding(0,'px').setTop(4),
                Display("inline"),
                Position("relative"),
                Float("left")

            ]);
            this.text = Paragraph(this.id+"_p").setTextContent(text).addCustomStyle([
                Width(300,'px'),
                Margin(0,'px').setBottom(5),
                FontSize(13,'pt'),
                Display("inline"),
                Position("relative"),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ]);
            this.addComponent([
                this.icon,this.text
            ])
        }
    }
    class ServiceTagW2 extends HDivision{
        constructor(id,text) {
            super(id);
            this.addCustomStyle([
                Width(350,'px'),
                FontFamily("calibri"),
                FontWeight(500),
                FontSize(12,'pt'),
                Color(colorScheme.getPrimaryColor()),
                Overflow("hidden"),
                Transition()
            ]);

            this.icon = new HImage(this.id+"_img", tagIconW,"").addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Margin(0,'px').setLeft(15).setRight(10),
                Padding(0,'px').setTop(4),
                Display("inline"),
                Position("relative"),
                Float("left")

            ]);
            this.text = Paragraph(this.id+"_p").setTextContent(text).addCustomStyle([
                Width(300,'px'),
                Margin(0,'px').setBottom(5),
                FontSize(13,'pt'),
                Display("inline"),
                Position("relative"),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ]);
            this.addComponent([
                this.icon,this.text
            ])
        }
    }
    class ServicePage extends HDivision{
        constructor(id,src,title,frame){
            super(id);
            pages["/services/"+title.toLowerCase().replace(/\s+/g,'')] = this;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000"),
                Width(100,'vw'),
                Height(1130,'px'),
            ]);
            try{

                frame.addToBody(this);
            }
            catch(e){

            }
            this.titleDiv = Division(this.id+"pDiv");
            this.title = Paragraph(this.id+"p").setTextContent(title).addCustomStyle(
                [
                    FontFamily("segoe UI"),
                    FontSize(25,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.titleDiv.addComponent(this.title);
            this.bannerDiv = Division(this.id+"-imgDiv", src).addCustomStyle([
                Width(100,'vw'),
                Height(500,'px'),
                Overflow("hidden"),

            ]);
            this.banner = new HImage(this.id+"-img", src).addCustomStyle([
                Width(100,'%'),
                Margin("auto",""),
                Display("block")
            ]);
            this.bannerDiv.addComponent(this.banner);
            this.introDiv = Division(this.id+"_iDiv").addCustomStyle([
                Width(100,'vw'),
                Height(250,'px'),
                Overflow("hidden"),
                BackgroundColor(colorScheme.getNonaryColor())

            ]);
            this.intro = new ServiceMessage(this.id+"_i").addCustomStyle([Width(100),
                Margin(0),
                PositionLeft(-5,'px'),
                FontFamily('calibri'),
                FontSize(14,'pt'),
            ]);

            this.box = Division(this.id +"_box").addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Width(100),
                Overflow("hidden")
            ]);
            this.innerBox = Division(this.id +"_inerBox").addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Width(1250,'px'),
                Overflow("hidden"),
                Margin("auto",'')
            ]);
            this.duration = Paragraph(this.id+"_duration").setTextContent("Duration:").addCustomStyle([
                Margin(0,'px').setLeft(33).setTop(15),
                FontWeight("bold"),
                Color(colorScheme.getPrimaryColor()),
                FontSize(13,'pt'),
                FontFamily("calibri")
            ]);
            this.pricing = new FeatureBox2(this.id+"_pricing","Pricing").addCustomStyle([
                Margin(0,'px').setLeft(25).setTop(15),Color(colorScheme.getPrimaryColor()), Display(), FontSize(14)]);
            this.fees =  new FeatureBox2(this.id+"_fees","Fees/Commission").addCustomStyle([Color(colorScheme.getPrimaryColor()),
                Display(), FontSize(14)]);
            this.introDiv.addComponent([this.intro,this.duration/*, this.pricing, this.fees*/]);

            this.features = new FeatureBox(this.id+"ft","PRECONDITIONS");
            this.requirements = new FeatureBox(this.id+"rt","REQUIREMENTS");
            this.benefits = new FeatureBox(this.id+"bt","DISBURSEMENT AND REPAYMENT CONDITIONS");
            this.applyB = new GenButton();
            this.box.addComponent([
                this.innerBox
            ]);
            this.innerBox.addComponent([
                this.features,
                this.requirements,
                this.benefits
            ]);
            this.addComponent([
                this.titleDiv,this.bannerDiv, this.introDiv,this.box
            ]);
        }
        setIntro(text){
            this.intro.setTextContent(text)
        }
        setDuration(text){
            this.duration.setTextContent("Duration: "+text);
            return this;
        }
        addPricing(text){
            this.pricing.addPrecondition(text);
            this.count++;
            return this;
        }
        addFee(text){
            this.fees.addPrecondition(text);
            this.count++;
            return this;
        }
        addPrecondition(text){
            this.features.addPrecondition(text);
            this.count++;
            return this;
        }
        addRPDBCondition(text){
            this.benefits.addPrecondition(text);
            this.count++;
            return this;
        }
        addRequirement(text){
            this.requirements.addPrecondition(text);
            this.count++;
            return this;
        }
    }
    class ServiceBN extends HDivision{
        constructor(id,title, image,image2, alt, text,color,frame) {
            super(id);
            this.addCustomStyle([
                Width(400,'px'),
                Height(350,'px'),
                Position("relative"),
                Float("left")
            ]);
            this.paragraph = Paragraph(id+'-p').setTextContent(title).addCustomStyle([
                FontFamily("segoe ui"),
                FontWeight(800),
                FontSize(14,'pt'),
                Height(20,'px'),
                Margin(0,'px').setLeft(9),
                Color("004480")
            ]);
            this.serviceS = new ServiceS(id+"_S",title, image,image2, alt, text,color,frame);
            this.addComponent([
                this.paragraph,
                this.serviceS
            ])

        }

        setDuration(text){

            this.serviceS.setDuration(text);
            return this;
        }
        addPricing(text){
            this.serviceS.addPricing(text);
            return this;
        }
        addFee(text){
            this.serviceS.addFee(text);
            return this;
        }
        addPrecondition(text){
            this.serviceS.addPrecondition(text);
            return this;
        }
        addRPDBCondition(text){
            this.serviceS.addRPDBCondition(text);
            return this;
        }
        addRequirement(text){
            this.serviceS.addRequirement(text);
            return this;
        }
    }

    class FeatureBox extends HDivision{

        constructor(id,title) {
            super(id);
            this.count =0;
            this.addCustomStyle([
                FontWeight(700),
                FontFamily("calibri"),
                FontSize(14),
                Color(colorScheme.getSecondaryColor()),
                Margin(0,'px').setTop(10).setLeft(10),
                Width(400,'px'),
                Position(),
                Float("left"),
                Height(350,'px')
            ]);
            this.title = Paragraph(this.id+"_FTT").setTextContent(title).addCustomStyle([
                FontWeight(700),
                FontFamily("calibri"),
                Margin(0,'px').setTop(10).setLeft(10),
                Width(380,'px'),
                Position(),
                Float("left"),
            ]);
            this.addComponent(this.title)
        }
        addPrecondition(text){
            this.addComponent(new ServiceTagW(this.id+"_tgS"+this.count,text));
            this.count++;
        }
    }
    class FeatureBox2 extends HDivision{
        constructor(id,title) {
            super(id);
            this.count =0;
            this.addCustomStyle([
                FontWeight(700),
                FontFamily("calibri"),
                Color(colorScheme.getSecondaryColor()),
                Margin(0,'px').setTop(10).setLeft(10),
                Width(400,'px'),
                Position(),
                Float("left"),
                Height(350,'px')
            ]);
            this.title = Paragraph(this.id+"_FTT").setTextContent(title).addCustomStyle([
                FontWeight(700),
                FontFamily("calibri"),
                Margin(0,'px').setTop(10).setLeft(10),
                Width(380,'px'),
                Position(),
                Float("left"),
            ]);
            this.addComponent(this.title)
        }
        addPrecondition(text){
            this.addComponent(new ServiceTagW2(this.id+"_tgS"+this.count,text));
            this.count++;
        }
    }
    class ServiceS extends HDivision {
        constructor(id,title, image,image2, alt, text,color,frame) {
            super(id);
            this.addCustomStyle([
                Width(380, 'px'),
                Height(300,'px'),
                Margin('0','px').setLeft(10).setTop(10),
                Display("block"),
                Overflow("hidden"),
                Position(),
                Float("left"),
                Border("thin","solid","rgba(0,88,163,0.08)"),
                BorderRadius(15,'px')
            ]);
            this.frame= frame;
            this.path = title.toLowerCase();
            this.domElement.style.boxShadow="0px 10px 20px -15px rgb(0 88 163 / 50%)";

            this.addMouseListener(this);
            this.items = [];

            this.wrapper = Division(this.id+"wrapper").addCustomStyle([
                Position("absolute"),
                PositionTop(0,'px'),
                Overflow("hidden"),
                Transition("all", "200ms"),
                ZIndex(1),
                Width(0),
                Height(100),
            ]);

            this.wrapper.addMouseListener(this);
            this.wrapper.domElement.style.backgroundColor ="rgba(0,88,163,0.8)";
            this.enter = new HImage(this.id+"_enter",openIcon).addCustomStyle([
                Width(40,'px'),
                Position("absolute"),
                PositionLeft(170,'px'),
                PositionTop(130,"px"),
                Transition("all", "300ms")
            ]);
            this.enter.addMouseListener(this);

            this.titled = Division(this.id+"_tD").addCustomStyle([
                Height(40,'px'),
                Width(100),
                Position("absolute"),
                PositionTop(40,"%"),
                TextAlignment("center"),
                Padding(0,'px').setLeft(8).setTop(5),
                Color("ffffff"),
                FontFamily("calibri"),
                FontSize(18,'pt'),
                FontWeight(600)

            ]);
            this.wrapper.addComponent([this.enter]);
            this.count = 0;
            this.title = Paragraph(this.id+"_tP").setTextContent(title);
            this.titled.addComponent(this.title);
            this.banner = new HImage(this.id+"_banner",image2).addCustomStyle([
                Width(380,'px'),
                Transition(),
                BackgroundColor(colorScheme.getNonaryColor())
            ]);

            this.paragraph = new ServiceMessage(this.id +"_p", text).addCustomStyle([
                Margin(0,'px').setBottom(5),
                Color(colorScheme.getSecondaryColor()),
            ]);
            this.featuresT = Paragraph(this.id+"_FTT").setTextContent("PRECONDITIONS").addCustomStyle([
                FontWeight(700),
                FontFamily("calibri"),
                Color(colorScheme.getPrimaryColor()),
                Margin(0,'px').setTop(10).setLeft(10),
                Width(40),
                Position(),
                Float("left"),
            ]);
            this.meritT = Paragraph(this.id+"_MTT").setTextContent("DISBURSEMENT/REPAYMENT CONDITIONS").addCustomStyle([
                FontWeight(700),
                FontFamily("calibri"),
                Color(colorScheme.getPrimaryColor()),
                Margin(0,'px').setTop(10).setLeft(10),
                Width(40),
                Position(),
                Float("left")
            ]);
            this.requireT = Paragraph(this.id+"_RTT").setTextContent("REQUIREMENTS").addCustomStyle([
                FontWeight(700),
                FontFamily("calibri"),
                Color(colorScheme.getPrimaryColor()),
                Margin(0,'px').setTop(10).setLeft(10),
                Width(40),
                Position(),
                Float("left")


            ]);
            this.features = Division(this.id+"_ft").addCustomStyle([
                Position("relative"),
                Float("left"),
                Width(0),
                Height(100),
                Transition(),
                BackgroundColor(colorScheme.getNonaryColor()),
                Overflow("hidden")

            ]);
            this.merits = Division(this.id+"_mt").addCustomStyle([
                Position("relative"),
                Float("left"),
                Width(0),
                Height(100),
                Transition(),
                BackgroundColor(colorScheme.getNonaryColor()),
                Overflow("hidden")


            ]);
            this.requirements = Division(this.id+"_rt").addCustomStyle([
                Position("relative"),
                Float("left"),
                Width(0),
                Height(100),
                Transition(),
                BackgroundColor(colorScheme.getNonaryColor()),
                Overflow("hidden")


            ]);
            this.features.addComponent(this.featuresT);
            this.merits.addComponent(this.meritT);
            this.requirements.addComponent(this.requireT);
            this.addComponent([
                this.wrapper,
                this.banner,
                this.features,
                this.requirements,
                this.merits
            ]);
            this.current= 0;
            this.position= -1;
            this.items= [this.banner,this.features,this.requirements,this.merits];
            this.topIndex =this.items.length-1;


            this.page = new ServicePage(this.id+"_page",image,title,frame);
            this.page.setIntro(text);

            this.start()
        }

        start(){
            try{
                this.items[0].addCustomStyle(Width(100));
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
                    item.addCustomStyle(Width(0));
                });
                this.items[this.position].addCustomStyle(Width(100, '%'));
                this.current= this.position;
                this.position === this.topIndex ? this.position= 0: this.position++;

            }, 5000);
        }


        setDuration(text){

            this.page.setDuration(text);
            return this;
        }

        addPricing(text){
            this.page.addPricing(text);
            return this;
        }
        addFee(text){
            this.page.addFee(text);
            return this;
        }
        addPrecondition(text){
            this.features.addComponent(new ServiceTag(this.id+"_tgS"+this.count,text));
            this.page.addPrecondition(text);
            this.count++;
            return this;
        }
        addRPDBCondition(text){
            this.merits.addComponent(new ServiceTag(this.id+"_tMr"+this.count,text));
            this.page.addRPDBCondition(text);
            this.count++;
            return this;
        }
        addRequirement(text){
            this.requirements.addComponent(new ServiceTag(this.id+"_tRr"+this.count,text));
            this.page.addRequirement(text);
            this.count++;
            return this;
        }

        isLoaded(){
            return this.banner.isLoaded();
        }

        mouseClicked(e){
            switch (e.getEvent()) {
                case"click": {
                    if(e.getSource()=== this.enter){
                        this.frame.switchToPage("/services/"+this.path.toLowerCase().replace(" ",""))
                    }

                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            this.wrapper.domElement.style.width ="0%";
            if (e.getSource() === this.enter){
                e.getSource().addCustomStyle([
                    Width(40,'px'),
                    Position("absolute"),
                    PositionLeft(170,'px'),
                    PositionTop(130,"px"),
                ]);
            }


        }
        mouseOver(e){
            this.wrapper.domElement.style.width ="100%";
            if (e.getSource() === this.enter){
                e.getSource().addCustomStyle([
                    Width(50,'px'),
                    Position("absolute"),
                    PositionLeft(165,'px'),
                    PositionTop(125,"px"),
                ]);
            }


        }
        mouseDown(e){

        }
        mouseUp(e){

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
                    BackgroundColor(colorScheme.getDenaryColor()),
                    Margin(2, 'px'),
                    Height(15, 'px'),
                    Width(15, 'px'),
                    BorderRadius(50),
                    Display("inline"),
                    Position(),
                    Float("left")
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
            super("slide_"+id);
            this.loaded = false;
            this.addCustomStyle(
                [
                    Height(100),
                    Width(100),
                    Display("block"),
                    Overflow("hidden")

                ]
            );
            this.image = new HImage("image_"+id, src,alt).addCustomStyle(
                Width(100),
                Height(100),
                BorderRadius(20)
            )
            this.image.domElement.addEventListener("load", ()=> {this.loaded =true} )

            this.addComponent(this.image);
        }

        isLoaded(){
            return this.loaded;
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
            ]);
            this.screen = Division(this.id+'_screen');
            this.navigation = Division(this.id+'_nav');
            this.buttons=[];
            this.position= -1;
            this.items = slides;
            this.topIndex =slides.length-1;
            this.addComponent([this.screen,this.navigation]);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){


                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){


                console.log("hello");
                this.d1366();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
        };



        d1920(){
            this.screen.addCustomStyle([
                Width(320*1.7,'px'),
                Margin('auto', ''),
                Height(320,'px'),
                BackgroundColor(colorScheme.getQuaternaryColor()),
            ]);
            this.navigation.addCustomStyle([
                Width(0),
                Height(12),
                Margin('auto', ''),
                Position(),
                PositionTop(-25,'px'),
                Overflow("hidden")
            ]);

        }
        d1566(){
            this.screen.addCustomStyle([
                Width(300*1.7,'px'),
                Margin('auto', ''),
                Height(300,'px'),
                BackgroundColor(colorScheme.getQuaternaryColor()),
            ]);
            this.navigation.addCustomStyle([
                Width(0),
                Height(12),
                Margin('auto', ''),
                Position(),
                PositionTop(-25,'px'),
                Overflow("hidden")
            ]);

        }
        d1536(){
            this.screen.addCustomStyle([
                Width(300*1.7,'px'),
                Margin('auto', ''),
                Height(300,'px'),
                BackgroundColor(colorScheme.getQuaternaryColor()),
            ]);
            this.navigation.addCustomStyle([
                Width(0),
                Height(12),
                Margin('auto', ''),
                Position(),
                PositionTop(-25,'px'),
                Overflow("hidden")
            ]);

        }
        d1366(){
            this.screen.addCustomStyle([
                Width(270*1.7,'px'),
                Margin('auto', ''),
                Height(270,'px'),
                BackgroundColor(colorScheme.getQuaternaryColor()),
            ]);
            this.navigation.addCustomStyle([
                Width(0),
                Height(12),
                Margin('auto', ''),
                Position(),
                PositionTop(-25,'px'),
                Overflow("hidden")
            ]);

        }
        d1024(){
            this.screen.addCustomStyle([
                Width(190*1.7,'px'),
                Margin('auto', ''),
                Height(190,'px'),
                BackgroundColor(colorScheme.getQuaternaryColor()),
                Overflow("hidden")
            ]);
            this.navigation.addCustomStyle([
                Width(0),
                Height(12),
                Margin('auto', ''),
                Position(),
                PositionTop(-25,'px'),
                Overflow("hidden")

            ]);

        }
        d768(){
            this.screen.addCustomStyle([
                Width(180*1.7,'px'),
                Margin('auto', ''),
                Height(180,'px'),
                BackgroundColor(colorScheme.getQuaternaryColor()),
                Overflow("hidden")
            ]);
            this.navigation.addCustomStyle([
                Width(0),
                Height(12),
                Margin('auto', ''),
                Position(),
                PositionTop(-25,'px'),
                Overflow("hidden")

            ]);

        }
        d540(){

        }
        d414(){

        }
        d375(){

        }
        d360(){

        }
        addButton(){
            let button = new SSButton(this.topIndex, this.topIndex, this);
            button.addCustomStyle(
                Border("thin","hidden")
            );
            this.buttons.push(button);
            this.navigation.addCustomStyle(Width(20*this.buttons.length,'px'));
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
            slide.addCustomStyle([
                    Display("block"),
                    Height(0),
                    Transition("all","500ms","ease")
                ]
            )

        }
        removeSlide(slide){
            this.items.remove(this.findSlide(slide));
        }
        findSlide(slide){
            let found = false;
            let index = 0;
            while (!found){
                if (this.items[index] === slide)
                    return index;
                else
                if (index === this.topIndex)
                    return -1
            }
            return -1
        }
        start(){
            try{

                this.items[0].addCustomStyle(Height(100));
                this.buttons[0].addCustomStyle(BackgroundColor(colorScheme.getPrimaryColor()));
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
                    item.addCustomStyle(Height(0));

                });
                this.buttons.forEach(function (item){
                    item.addCustomStyle(BackgroundColor('FFFFFF'));

                });
                this.items[this.position].addCustomStyle(Height(230, 'px'));
                this.buttons[this.position].addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor())
                ]);
                this.current= this.position;
                this.position === this.topIndex ? this.position= 0: this.position++;

            }, 5000);
        }

        switchTo(button){
            clearInterval(this.interval);
            this.items.forEach(function (item){
                item.addCustomStyle(Height(0));

            });
            this.buttons.forEach(function (item){
                item.addCustomStyle(BackgroundColor('FFFFFF'));

            });
            button.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor())
            ])
            this.items[button.getIndex()].addCustomStyle(Height(100));
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
        isLoaded(){

            let loaded = true;
            this.items.forEach(
                function (item){
                    loaded = loaded && item.isLoaded();
                }
            );

            return loaded;
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
    class Service extends HDivision{
        constructor(id, title, icon, href ) {
            super("services_"+id);
            this.addCustomStyle([
                Width(100,"px"),
                Height(150,"px"),
                Float('left'),
                FontFamily("calibri"),
                FontWeight("bold"),
                Margin(5,'px').setLeft(50)
            ]);
            this.href = href;
            this.image = new HImage(this.id+"_img",icon).addCustomStyle([
                BackgroundColor('e8f2ff'),
                Width(100,"px"),
                Height(100,"px"),
                BorderRadius(50,"%"),
                Display('block'),
                Transition("all","400ms"),
            ]);

            this.title = Paragraph(this.id+"_p").setTextContent(title).addCustomStyle(
                [
                    Width(100),
                    TextAlignment('center'),
                    Color(colorScheme.getPrimaryColor())
                ]
            );
            this.addComponent([
                this.image,
                this.title,
            ]),
                this.addMouseListener(this)
        }
        getLink(){
            return this.href;
        }
        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            this.image.addCustomStyle([
                Width(100,"px"),
                Height(100,"px"),
            ]);
            this.image.domElement.style.boxShadow="0px 0px 0px 0 rgba(0, 0, 0, 0.25)," +
                "0px 0px 0px 0 rgba(255, 255, 255, 0.3)";

        }
        mouseOver(e){
            this.image.addCustomStyle([
                Width(110,"px"),
                Height(110,"px"),
            ]);
            this.image.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";


        }
        mouseDown(e){

        }
    }
    class ProfileItem extends HTableData{
        constructor(id,term1,term2, binary=true) {
            super(id);
            if(binary && term2){
                this.term1 = new HTableDefinition(this.id+'p1').setTextContent(term1).addCustomStyle([
                    Width(60,'px'),
                    Display("inline"),
                    Float("left"),
                    Height("auto",""),
                    Margin(0,'px').setRight(5)

                ]);
                this.term2 =new HTableDefinition(this.id+'p2').setTextContent(term2).addCustomStyle([
                    Width(235,'px'),
                    Display("inline"),
                    Float("right"),
                    Height("auto",""),
                    Margin(0,'px').setRight(5)
                ]);
                this.addComponent([
                    this.term1,this.term2
                ])
            }
            else{
                this.term1 = new HTableDefinition(this.id+'p1').setTextContent(term1).addCustomStyle([
                    Width(295,'px'),
                    Display("inline"),
                    Float("left"),
                    Height("auto",""),
                    Margin(0,'px').setRight(5)

                ]);
                this.addComponent([
                    this.term1
                ])

            }
            this.addCustomStyle([
                Height("auto",""),
                FontFamily("calibri"),
                Margin(0,'px').setTop(5)
            ]);
        }
    }
    class ProfileItem2 extends HTableBody{
        constructor(id,term1,term2, binary=true) {
            super(id);
            if(binary && term2){
                this.term1 = new HTableDefinition(this.id+'p1').setTextContent(term1).addCustomStyle([
                    Width(60,'px'),
                    Display("inline"),
                    Float("left"),
                    Height("auto",""),
                    Margin(0,'px').setRight(5)

                ]);
                this.term2 =new HTableDefinition(this.id+'p2').setTextContent(term2).addCustomStyle([
                    Width(235,'px'),
                    Display("inline"),
                    Float("right"),
                    Height("auto",""),
                    Margin(0,'px').setRight(5)
                ]);
                this.addComponent([
                    this.term1,this.term2
                ])
            }
            else{
                this.term1 = new HTableDefinition(this.id+'p1').setTextContent(term1).addCustomStyle([
                    Width(295,'px'),
                    Display("inline"),
                    Float("left"),
                    Height("auto",""),
                    Margin(0,'px').setRight(5)

                ]);
                this.addComponent([
                    this.term1
                ])

            }
            this.addCustomStyle([
                Height("auto",""),
                FontFamily("calibri"),
                Margin(0,'px').setTop(5)
            ]);
        }
    }
    class Profile extends HDivision{
        constructor(id,firstname, lastname, position, pic,content,edu,exp,certs, frame) {
            super(id);
            this.frame=frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000"),
                Width(100,'vw'),
                Height(960,'px'),
            ]);
            pages["/profile/"+firstname.toLowerCase()+"-"+lastname.toLowerCase()]= this;
            try{

                frame.addToBody(this);
            }
            catch(e){

            }
            this.titleDiv = Division(this.id+'titleDiv');
            this.bodyDiv = Division(this.id+'bodyDiv');
            this.summaryDiv = Division(this.id+'summaryDiv');
            this.educationDiv = Division(this.id+'educationDiv');
            this.experienceDiv = Division(this.id+'experienceDiv');
            this.certDiv = Division(this.id+'certDiv');

            this.nameP = Paragraph(this.id+"nameP").setTextContent(firstname+", "+lastname);
            this.position = Paragraph(this.id+"positionP").setTextContent(position);
            this.content = Paragraph(this.id+"contentP").setTextContent(content);
            this.pic = new HImage(this.id+'picP', pic, "");
            this.eTitle = Paragraph(this.id+'eTitle').setTextContent("Education");
            this.exTitle = Paragraph(this.id+'exTitle').setTextContent("Experience");
            this.certTitle = Paragraph(this.id+'certTitle').setTextContent("Certifications");

            this.educationDiv.addComponent(this.eTitle);
            this.experienceDiv.addComponent(this.exTitle);
            this.certDiv.addComponent(this.certTitle);

            {
                edu.forEach((item,index) =>{
                    this.educationDiv.addComponent(new ProfileItem2(this.id+"edu"+index,item.dateobtained ,item.degree))
                });
                exp.forEach((item,index)=>{
                    this.experienceDiv.addComponent(new ProfileItem2(this.id+"exp"+index, item.experience,
                        item.fromdate +"-" + item.todate))

                });
                certs.forEach((item,index)=>{
                    this.certDiv.addComponent(new ProfileItem2(this.id+"cert"+index, item.certification,item.issuerA))

                })

            }

            this.titleDiv.addComponent([
                this.nameP,
                this.position
            ]);
            this.bodyDiv.addComponent(this.content);
            this.summaryDiv.addComponent([this.pic,this.educationDiv,this.experienceDiv,this.certDiv]);
            this.addComponent([this.titleDiv, this.summaryDiv, this.bodyDiv]);
            this.addComponentListener(this);
            this.componentResized()
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1366();
                return;
            }
            if (screen.width >= 1566){


                this.d1366();
                return;
            }
            if (screen.width >= 1536){


                this.d1366();
                return;
            }
            if (screen.width >= 1366){
                this.d1366();
                return;
            }
            if (screen.width >= 1280){


                this.d1280();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
            this.d320();
            return;
        };

        d1920(){

        }
        d1566(){

        }
        d1536(){

        }
        d1366(){
            this.addCustomStyle([
                Width(screen.width,'px')
            ]);
            this.titleDiv.addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                Color(colorScheme.getPrimaryColor()),
                BorderRadius(8,'px'),
                Margin(0,'px').setLeft(10),
                Padding(0,'px').setLeft(10),
                Width(screen.width-400,'px')
            ]);
            this.summaryDiv.addCustomStyle([
                Width(350,'px'),
                Display("inline"),
                Float("right"),
                Margin(0,'px').setRight(50),
                Border("thin","solid","rgba(56, 73, 255, 0.2)"),
                Padding(0,'px').setTop(10),
                Color(colorScheme.getPrimaryColor()),
            ]);
            this.bodyDiv.addCustomStyle([
                FontWeight(500),
                Display("inline"),
                Float("left")
            ]);
            this.content.addCustomStyle([
                WhiteSpace("pre-wrap"),
                FontFamily("Calibri"),
                FontSize(13),
                Color(colorScheme.getPrimaryColor()),
                Width(screen.width-500,'px'),
                TextAlignment("justify"),
                Margin(0,'px').setLeft(20),
            ]);
            this.pic.addCustomStyle([
                Width(150,'px'),
                Height(150,'px'),
                Margin("auto",""),
                Display("block"),
                BorderRadius(100)
            ]);
            this.educationDiv.addCustomStyle([
                Width(330,'px'),
                Margin(0,"px").setLeft(10).setTop(10),
                Height("auto","")
            ]);
            this.experienceDiv.addCustomStyle([
                Width(330,'px'),
                Margin(0,"px").setLeft(10).setTop(10),
                Height("auto","")
            ]);
            this.certDiv.addCustomStyle([
                Width(330,'px'),
                Margin(0,"px").setLeft(10).setTop(10),
                Height("auto","")
            ]);

            this.nameP.addCustomStyle([
                FontWeight(700),
                FontFamily("Calibri"),
                FontSize(18),
            ]);
            this.position.addCustomStyle([
                FontWeight(700),
                FontFamily("Calibri"),
                FontSize(15),
            ]);
            this.eTitle.addCustomStyle([
                FontWeight(700),
                Margin(0,'px').setBottom(5),
                FontFamily("Calibri"),
                FontSize(14),
            ]);
            this.exTitle.addCustomStyle([
                FontWeight(700),
                Margin(0,'px').setBottom(5),
                FontFamily("Calibri"),
                FontSize(14),
            ]);
            this.certTitle.addCustomStyle([
                FontWeight(700),
                Margin(0,'px').setBottom(5),
                FontFamily("Calibri"),
                FontSize(14),
            ]);

        }
        d1280(){

        }
        d1024(){

        }
        d768(){

        }
        d540(){

        }
        d414(){

        }
        d375(){

        }
        d360(){

        }
        d320(){

        }
    }
    class Profile2 extends HDivision{
        constructor(id,firstname, lastname, position, pic,content,edu,exp,certs, frame) {
            super(id);
            this.frame=frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000"),
                Width(100,'vw'),
                Height(960,'px'),
            ]);
            pages["/profile/"+firstname.toLowerCase()+"-"+lastname.toLowerCase()]= this;
            try{

                frame.addToBody(this);
            }
            catch(e){

            }
            this.titleDiv = Division(this.id+'titleDiv');
            this.bodyDiv = Division(this.id+'bodyDiv');
            this.summaryDiv = Division(this.id+'summaryDiv');
            this.educationDiv = Division(this.id+'educationDiv');
            this.experienceDiv = Division(this.id+'experienceDiv');
            this.certDiv = Division(this.id+'certDiv');

            this.nameP = Paragraph(this.id+"nameP").setTextContent(firstname+", "+lastname);
            this.position = Paragraph(this.id+"positionP").setTextContent(position);
            this.content = Paragraph(this.id+"contentP").setTextContent(content);
            this.pic = new HImage(this.id+'picP', pic, "");
            this.eTitle = Paragraph(this.id+'eTitle').setTextContent("Education");
            this.exTitle = Paragraph(this.id+'exTitle').setTextContent("Experience");
            this.certTitle = Paragraph(this.id+'certTitle').setTextContent("Certifications");

            this.educationDiv.addComponent(this.eTitle);
            this.experienceDiv.addComponent(this.exTitle);
            this.certDiv.addComponent(this.certTitle);

            {
                edu.forEach((item,index) =>{
                    this.educationDiv.addComponent(new ProfileItem2(this.id+"edu"+index,item.dateobtained ,item.degree))
                });
                exp.forEach((item,index)=>{
                    this.experienceDiv.addComponent(new ProfileItem2(this.id+"exp"+index, item.experience,
                        item.fromdate +"-" + item.todate))

                });
                certs.forEach((item,index)=>{
                    this.certDiv.addComponent(new ProfileItem2(this.id+"cert"+index, item.certification,item.issuerA))

                })

            }

            this.titleDiv.addComponent([
                this.nameP,
                this.position
            ]);
            this.bodyDiv.addComponent(this.content);
            this.summaryDiv.addComponent([this.pic,this.educationDiv,this.experienceDiv,this.certDiv]);
            this.addComponent([this.titleDiv, this.summaryDiv, this.bodyDiv]);
            this.addComponentListener(this);
            this.componentResized()
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1366();
                return;
            }
            if (screen.width >= 1566){


                this.d1366();
                return;
            }
            if (screen.width >= 1536){


                this.d1366();
                return;
            }
            if (screen.width >= 1366){
                this.d1366();
                return;
            }
            if (screen.width >= 1280){


                this.d1280();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
            this.d320();
            return;
        };

        d1920(){

        }
        d1566(){

        }
        d1536(){

        }
        d1366(){
            this.addCustomStyle([
                Width(screen.width,'px')
            ]);
            this.titleDiv.addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                Color(colorScheme.getPrimaryColor()),
                BorderRadius(8,'px'),
                Margin(0,'px').setLeft(10),
                Padding(0,'px').setLeft(10),
                Width(screen.width-400,'px')
            ]);
            this.summaryDiv.addCustomStyle([
                Width(350,'px'),
                Display("inline"),
                Float("right"),
                Margin(0,'px').setRight(50),
                Border("thin","solid","rgba(56, 73, 255, 0.2)"),
                Padding(0,'px').setTop(10),
                Color(colorScheme.getPrimaryColor()),
            ]);
            this.bodyDiv.addCustomStyle([
                FontWeight(500),
                Display("inline"),
                Float("left")
            ]);
            this.content.addCustomStyle([
                WhiteSpace("pre-wrap"),
                FontFamily("Calibri"),
                FontSize(13),
                Color(colorScheme.getPrimaryColor()),
                Width(screen.width-500,'px'),
                TextAlignment("justify"),
                Margin(0,'px').setLeft(20),
            ]);
            this.pic.addCustomStyle([
                Width(150,'px'),
                Height(150,'px'),
                Margin("auto",""),
                Display("block"),
                BorderRadius(100)
            ]);
            this.educationDiv.addCustomStyle([
                Width(330,'px'),
                Margin(0,"px").setLeft(10).setTop(10),
                Height("auto","")
            ]);
            this.experienceDiv.addCustomStyle([
                Width(330,'px'),
                Margin(0,"px").setLeft(10).setTop(10),
                Height("auto","")
            ]);
            this.certDiv.addCustomStyle([
                Width(330,'px'),
                Margin(0,"px").setLeft(10).setTop(10),
                Height("auto","")
            ]);

            this.nameP.addCustomStyle([
                FontWeight(700),
                FontFamily("Calibri"),
                FontSize(18),
            ]);
            this.position.addCustomStyle([
                FontWeight(700),
                FontFamily("Calibri"),
                FontSize(15),
            ]);
            this.eTitle.addCustomStyle([
                FontWeight(700),
                Margin(0,'px').setBottom(5),
                FontFamily("Calibri"),
                FontSize(14),
            ]);
            this.exTitle.addCustomStyle([
                FontWeight(700),
                Margin(0,'px').setBottom(5),
                FontFamily("Calibri"),
                FontSize(14),
            ]);
            this.certTitle.addCustomStyle([
                FontWeight(700),
                Margin(0,'px').setBottom(5),
                FontFamily("Calibri"),
                FontSize(14),
            ]);

        }
        d1280(){

        }
        d1024(){

        }
        d768(){

        }
        d540(){

        }
        d414(){

        }
        d375(){

        }
        d360(){

        }
        d320(){

        }
    }

    class SmallSection extends HDivision{
        constructor(id, title,text,buttonText,href, mouseListener) {
            super("section_"+id);
            this.href=href;
            this.addCustomStyle([
                Width(400,"px"),
                Height(300,"px"),
                Float('left'),
                FontFamily("calibri"),
            ]);
            this.title = Paragraph(this.id+"_pTitle").setTextContent(title);
            this.title.addCustomStyle([
                Color(colorScheme.getPrimaryColor())
            ]);
            this.text= Paragraph(this.id+"_p").setTextContent(text);
            this.text.addCustomStyle([
                Color(colorScheme.getPrimaryColor())
            ]);
            this.sbmButton = new NLButton('btn_'+this.id, href);
            this.paragraph = Paragraph("sbmP_"+this.id).setTextContent(buttonText);
            this.sbmButton.addComponent(
                this.paragraph
            );

            this.sbmButton.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
            this.sbmButton.addMouseListener(this);
            this.sbmButton.addMouseListener(mouseListener);
            this.addComponent([
                this.title,
                this.text,
                this.sbmButton
            ]);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){


                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){


                this.d1366();
                return;
            }
            if (screen.width >= 1280){


                this.d1280();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
            this.d320();
            return;
        };



        d1920(){
            this.d1366();

        }
        d1566(){
            this.d1366();

        }
        d1536(){
            this.d1366();

        }
        d1366(){
            this.title.addCustomStyle([
                FontWeight("bold"),
                FontSize(22,'pt'),
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.text.addCustomStyle([
                TextAlignment("justify"),
                Margin(0,'px').setBottom(10)
            ]);
            this.sbmButton.addCustomStyle(
                [
                    Padding(0),
                    FontSize(12,'pt'),
                    FontWeight("bold"),
                    Width(80,'px'),
                    Height(30,'px'),
                    BorderRadius(0,'px'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())
                ]
            );
            this.paragraph.addCustomStyle(
                Margin(0,'px').setTop(2.5)
            );


        }
        d1280(){
            this.d1366();

        }
        d1024(){
            this.d1366();

        }
        d768(){
            this.d1366();

        }
        d540(){
            this.title.addCustomStyle([
                FontWeight("bold"),
                FontSize(22,'pt'),
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.text.addCustomStyle([
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.sbmButton.addCustomStyle(
                [
                    Padding(0),
                    FontSize(12,'pt'),
                    FontWeight("bold"),
                    Width(80,'px'),
                    Height(25,'px'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())
                ]
            );
            this.paragraph.addCustomStyle(
                Margin(0,'px').setTop(2.5)
            );



        }
        d414(){
            this.title.addCustomStyle([
                FontWeight("bold"),
                FontSize(20,'pt'),
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.text.addCustomStyle([
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.sbmButton.addCustomStyle(
                [
                    Padding(0),
                    FontSize(12,'pt'),
                    Width(80,'px'),
                    Height(25,'px'),
                    BorderRadius(0,'px'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())
                ]
            );
            this.paragraph.addCustomStyle(
                Margin(0,'px').setTop(2.5)
            );



        }
        d375(){
            this.title.addCustomStyle([
                FontWeight("bold"),
                FontSize(20,'pt'),
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.text.addCustomStyle([
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.sbmButton.addCustomStyle(
                [
                    Padding(0),
                    FontSize(12,'pt'),
                    Width(80,'px'),
                    Height(25,'px'),
                    BorderRadius(0,'px'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())
                ]
            );
            this.paragraph.addCustomStyle(
                Margin(0,'px').setTop(2.5)
            );


        }
        d360(){
            this.title.addCustomStyle([
                FontWeight("bold"),
                FontSize(20,'pt'),
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.text.addCustomStyle([
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.sbmButton.addCustomStyle(
                [
                    Padding(0),
                    FontSize(12,'pt'),
                    Width(80,'px'),
                    Height(25,'px'),
                    BorderRadius(0,'px'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())
                ]
            );
            this.paragraph.addCustomStyle(
                Margin(0,'px').setTop(2.5)
            );

        }
        d320(){
            this.title.addCustomStyle([
                FontWeight("bold"),
                FontSize(16,'pt'),
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.text.addCustomStyle([
                TextAlignment("left"),
                Margin(0,'px').setBottom(10)
            ]);
            this.sbmButton.addCustomStyle(
                [
                    Padding(0),
                    FontSize(12,'pt'),
                    Width(80,'px'),
                    Height(25,'px'),
                    BorderRadius(0,'px'),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())
                ]
            );
            this.paragraph.addCustomStyle(
                Margin(0,'px').setTop(2.5)
            );


        }
        getButton(){
            return this.sbmButton
        }
        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())

                ])
            }
        }
        mouseOver(e){


            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor("000000"),
                    Color(colorScheme.getSecondaryColor())

                ])
            }
        }
        mouseDown(e){

        }
    }
    class FooterSection extends HDivision{
        title;
        constructor(id, title = ""){
            super("footerSect_"+id);
            this.title = new Paragraph('title'+this.id);
            this.title.setTextContent(title);
            this.addComponent(this.title);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){


                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){


                this.d1366();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
        };



        d1920(){
            this.d1366();

        }
        d1566(){

            this.d1366();
        }
        d1536(){
            this.d1366();
        }
        d1366(){
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
            this.title.addCustomStyle([
                FontSize(20,'px')
            ]);

        }
        d1024(){
            this.d1366();

        }
        d768(){
            this.d1366();

        }
        d540(){
            this.d1366();

        }
        d414(){

            this.addCustomStyle(
                [
                    Margin('0','px'),
                    Width(screen.width,'px'),
                    Display("none"),
                    FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                    Color(colorScheme.getSecondaryColor()),
                    Float('left')
                ]
            );
            this.title.addCustomStyle([

                FontSize(20,'px')
            ]);
        }
        d375(){
            this.d414();

        }
        d360(){
            this.d414();

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
    class Contact2 extends Contact{

        constructor(id, title) {
            super(id, title);
            this.addCustomStyle([
                Display("inline"),
                Position("relative"),
                Float("left"),
                Color(colorScheme.getPrimaryColor()),
                FontFamily("segoe ui"),
                FontWeight(600),
                Margin(0,'px').setRight(200).setTop(50),
                BottomBorder("thin","solid",'#'+colorScheme.getPrimaryColor())
            ])
        }
    }

    class NavLink extends HDivision{
        anchor;
        dropdown;
        constructor(id,alt= "",href, mouseListener, width, dropdown = null){
            super("navLink_"+id);
            this.width = width;
            this.dropdown = dropdown;

            this.anchor = new HAnchor("a_"+id, href).setTextContent(alt);
            this.addSelectorRule("hover", Color("000000"));
            this.addComponent(this.anchor);
            this.addMouseListener(mouseListener);
            this.anchor.addMouseListener(mouseListener);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){


                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){


                this.d1366();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
            this.d320();
            return;
        };

        d1920(){

            this.d1366()
        }
        d1566(){

            this.d1366()
        }
        d1536(){

            this.d1366()
        }
        d1366(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Margin(0),
                    Padding(0).setTop(21).setBottom(26).setLeft(10).setRight(10),
                    FontSize(12,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );

        }
        d1024(){

            this.d1366()
        }
        d768(){
            this.d1366()

        }
        d540(){
            this.d1366()

        }
        d414(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width*0.90, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Width(75, 'px'),
                    FontSize(12,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );

        }
        d375(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width*0.80, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Width(75, 'px'),
                    FontSize(11,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );
        }
        d360(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width*0.78, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Width(75, 'px'),
                    FontSize(11,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );

        }
        d320(){
            this.addCustomStyle(
                [
                    Height(25, 'px'),
                    Width(this.width*0.65, 'px'),
                    Float('left'),
                ]
            );
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getPrimaryColor()),
                    Width(75, 'px'),
                    FontSize(9,'pt'),
                    FontWeight("bold"),
                    TextAlignment('center'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );
        }

        getAnchor() {
            return this.anchor;
        }

    }
    class NavLinkDD extends HAnchor{
        dropdown;
        constructor(id,alt= "",href, mouseListener, width, dropdown = null){
            super("navLinkDD_"+id,href);
            this.addCustomStyle(
                [
                    Height(27, 'px'),
                    Width(100),
                    Display("block"),
                    FontSize(10,'pt'),
                    Margin(1,'px').setTop(0),
                    Padding(0,'px').setLeft(5).setTop(8).setBottom(4),
                    FontWeight("bold"),
                    TextDecoration(TEXTDECORATION.NONE),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Transition("all","300ms","ease")
                ]
            );
            this.setTextContent(alt);
            this.addSelectorRule("hover", Color("000000"));
            this.addMouseListener(mouseListener);
        }

        getAnchor() {
            return this;
        }

    }
    class NavLinkDD2 extends HDivision{
        anchor;
        dropdown;
        constructor(id,alt= "",href, mouseListener, width, dropdown = null){
            super("navLinkDD_"+id);
            this.addCustomStyle(
                [
                    Height(30, 'px'),
                    Width(width, 'px'),
                    Display("block"),
                    Padding(0,'px').setTop(5),
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor()),
                    Border("thin",BORDERSTYLE.SOLID),
                    BorderColor(colorScheme.getPrimaryColor()),
                    Transition("all","300ms","ease")
                ]
            );
            this.anchor = new HAnchor("a_"+id, href).setTextContent(alt);
            this.anchor.addCustomStyle(
                [
                    Color(colorScheme.getSecondaryColor()),
                    FontSize(10,'pt'),
                    TextAlignment('center'),
                    Padding(0,'px').setLeft(5),
                    TextDecoration(TEXTDECORATION.NONE),
                    Transition("all","300ms","ease")
                ]
            );
            this.addSelectorRule("hover", Color("000000"));
            this.addComponent(this.anchor);
            this.addMouseListener(mouseListener);
            this.anchor.addMouseListener(mouseListener)
        }

        getAnchor() {
            return this.anchor;
        }

    }

    class NavDropDown extends HDivision{
        constructor(id, links = [],mouseListener, width, height){
            super("navDropDown_"+id);
            this.height =height;
            this.addCustomStyle(
                [
                    Width(width, 'px'),
                    Height(0,'px'),
                    Padding(0,'px').setTop(0).setBottom(0),
                    Opacity(1),
                    Position("absolute"),
                    Margin(0,'px').setTop(10),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Transition("all","500ms","ease"),
                    Overflow("hidden"),
                ]
            );
            this.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
            this.addComponent(links);
            this.addMouseListener(mouseListener)
        }
        getHeight(){
            return this.height;
        }
    }
    class PButton extends HButton{
        constructor(id,alt= "", mouseListener){
            super("pButton_"+id);
            this.alt = alt;
            this.addCustomStyle(
                [
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Border("thin",'hidden'),
                    Margin(0, 'px').setTop(5).setRight(10),
                    Height(60, 'px'),
                    Width(60, 'px'),
                    FontSize(12,'px'),
                    FontWeight("bold"),
                    TextDecoration(),
                    BorderRadius(100,'px'),
                    Display("inline-block"),
                    Transition("all","500ms","ease")
                ]
            );
            this.paragraph = new HSpan("p_"+id).setTextContent(alt);
            this.paragraph.addCustomStyle(
                [
                    Display("inline-block"),
                    Color("FFFFFF"),
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
                Anchor('footerText2', "http://facebook.com/ammilmfi").setTextContent("Facebook").addCustomStyle([
                    Margin(0,'px').setLeft(20),
                    Color('ffffff'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Display("block")
                ]),
                Anchor('footerText3', "http://instagram.com/ammilmfi").setTextContent("Instagram").addCustomStyle([
                    Margin(0,'px').setLeft(20),
                    Color('ffffff'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Display("block")
                ]),
                /*Anchor('footerText4', "http://twitter.com/ammilmfi").setTextContent("Twitter").addCustomStyle([
                    Margin(0,'px').setLeft(20),
                    Color('ffffff'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Display("block")
                ])*/
            ])

        }

    }

    class Staff extends HDivision{
        constructor(id,src, firstName, lastName, position,content,edu,exp,certs,frame) {
            super(id);
            this.addCustomStyle(
                [
                    Width(400,'px'),
                    Height(150,'px'),
                    FontFamily("calibri"),
                    Display("inline"),
                    Margin(0,'px').setBottom(20),
                    Float("left")
                ]
            );
            this.frame=frame;
            this.href = (firstName+"-"+lastName).toLowerCase();
            this.imgDiv = Division(this.id+'_imge').addCustomStyle([
                BorderRadius(75,'px'),
                Display("inline"),
                Float("left"),
                Width(150,"px"),
                Height(150,'px'),
                Overflow("hidden")
            ]);

            this.img = new HImage(this.id+'_img', src,lastName);
            this.img.addCustomStyle([
                BorderRadius(75,'px'),
                Display("inline"),
                Width(150,"px"),
                Height(150,'px')
            ]);
            this.imgDiv.addComponent(this.img);

            this.nameS = Division(this.id+"_name").addCustomStyle([
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10),
                FontSize(14,'pt')

            ]);
            this.box = Division(this.id+"_div").addCustomStyle([
                Width(200,"px"),
                Height(150,'px'),
                Display("inline"),
                Float("left"),
            ]);
            let spacing = Paragraph(this.id+'sp').setTextContent(",  ").addCustomStyle([
                Display("inline")

            ]);
            this.firstName = Paragraph(this.id+'_pF').setTextContent(firstName).addCustomStyle([
                Display("inline")

            ]);
            this.lastName = Paragraph(this.id+'_pL').setTextContent(lastName).addCustomStyle([
                Display("inline")

            ]);
            this.nameS.addComponent([this.lastName,spacing,this.firstName]);

            this.profile = new Profile(this.id+'pf', firstName,lastName,position,src,content,edu,exp,certs,frame);
            this.position = Paragraph(this.id+"_pst").setTextContent(position).addCustomStyle([
                Position(),
                FontSize(18,'pt'),
                Float("left"),
                Margin(0,'px').setLeft(10)
            ]);
            this.box.addComponent([
                this.nameS,
                this.position
            ]);
            this.addComponent([
                this.imgDiv,
                this.box
            ]);
            this.addMouseListener(this)

        }

        getLink(){
            return this.href;
        }

        mouseClicked(e){
            switch (e.getEvent()) {
                case"click": {
                    this.frame.switchToPage("/profile/"+this.href.replace(" ",""))


                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            this.domElement.style.boxShadow="";
        }
        mouseOver(e){
            this.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";

        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class Staff2 extends HDivision{
        constructor(id,src, firstName, lastName, position,content,edu,exp,certs,frame) {
            super(id);
            this.addCustomStyle(
                [
                    Width(400,'px'),
                    Height(150,'px'),
                    FontFamily("calibri"),
                    Display("inline"),
                    Margin(0,'px').setBottom(20),
                    Float("left")
                ]
            );
            this.frame=frame;
            this.href = (firstName+"-"+lastName).toLowerCase();
            this.imgDiv = Division(this.id+'_imge').addCustomStyle([
                BorderRadius(75,'px'),
                Display("inline"),
                Float("left"),
                Width(150,"px"),
                Height(150,'px'),
                Overflow("hidden")
            ]);

            this.img = new HImage(this.id+'_img', src,lastName);
            this.img.addCustomStyle([
                BorderRadius(75,'px'),
                Display("inline"),
                Width(150,"px"),
                Height(150,'px')
            ]);
            this.imgDiv.addComponent(this.img);

            this.nameS = Division(this.id+"_name").addCustomStyle([
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10),
                FontSize(14,'pt')

            ]);
            this.box = Division(this.id+"_div").addCustomStyle([
                Width(200,"px"),
                Height(150,'px'),
                Display("inline"),
                Float("left"),
            ]);
            let spacing = Paragraph(this.id+'sp').setTextContent(",  ").addCustomStyle([
                Display("inline")

            ]);
            this.firstName = Paragraph(this.id+'_pF').setTextContent(firstName).addCustomStyle([
                Display("inline")

            ]);
            this.lastName = Paragraph(this.id+'_pL').setTextContent(lastName).addCustomStyle([
                Display("inline")

            ]);
            this.nameS.addComponent([this.lastName,spacing,this.firstName]);

            this.profile = new Profile(this.id+'pf', firstName,lastName,position,src,content,edu,exp,certs,frame);
            this.position = Paragraph(this.id+"_pst").setTextContent(position).addCustomStyle([
                Position(),
                FontSize(12,'pt'),
                FontWeight("bold"),
                Float("left"),
                Margin(0,'px').setLeft(10)
            ]);
            this.box.addComponent([
                this.nameS,
                this.position
            ]);
            this.addComponent([
                this.imgDiv,
                this.box
            ]);
            this.addMouseListener(this)

        }

        getLink(){
            return this.href;
        }

        mouseClicked(e){
            switch (e.getEvent()) {
                case"click": {
                    this.frame.switchToPage("/profile/"+this.href.replace(" ",""))


                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            this.domElement.style.boxShadow="";
        }
        mouseOver(e){
            this.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";

        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }

    class VM extends HDivision{
        constructor(id,title,msg) {
            super(id);
            this.addCustomStyle([
                Width(300,'px')
            ]);

            this.title = Paragraph(this.id+"_title").addCustomStyle([
                FontFamily("segoe ui"),
                FontWeight("bold"),
                FontSize(18,'pt'),
                Color(colorScheme.getDenaryColor())
            ]).setTextContent(title);
            this.vMessage = Paragraph(this.id+"_msg").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(13,'pt'),
                Color(colorScheme.getPrimaryColor())

            ]).setTextContent(msg);
            this.addComponent([this.title,this.vMessage])
        }
    }
    class Sticker extends HDivision{
        constructor(id,float,color1,color2,color3,title,textContent) {
            super(id);
            this.addCustomStyle([
                Width(800,'px'),
                Height(115,'px'),
                FontFamily("segoe ui"),
                FontSize(13,'pt'),
                Position('relative'),
                Float(float),
                BorderRadius(20,'px'),
                Overflow("hidden"),
                Transition("all","1500ms"),
            ]);
            this.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
                "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";
            this.move();
            title = title === ""? "" : title+":   ";
            this.float = float;
            let gradient = float.toLowerCase() === "left" ?
                "linear-gradient(to right, red , white)".replace("red",'#'+color1).replace("white",'#'+color2):
                "linear-gradient(to right, white , red )".replace("red",'#'+color1).replace("white",'#'+color2);

            this.side = Division(this.id+'_side').addCustomStyle([
                Float(float),
                Height(100),
                Width(20,'px'),
                BackgroundColor(colorScheme.getDenaryColor())
            ]);
            this.content = Division(this.id+"_content").addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Height(110,'px'),
                Padding(0,'px').setTop(5).setLeft(20),
            ]);
            this.title = Paragraph(this.id+'_title').addCustomStyle([
                FontSize(14,'pt'),
                Color(color3),
                FontWeight("bold")

            ]).setTextContent(title);
            this.txtContent = Paragraph(this.id+'_txtContent').addCustomStyle([
                Color(colorScheme.getSecondaryColor())
            ]).setTextContent(textContent);
            this.content.addComponent([
                this.title,
                this.txtContent,
            ]);
            this.addComponent([
                this.side,
                this.content
            ]);
        }
        restore(){
            this.addCustomStyle(Margin(0,'px').setTop(20))
        }
        move(){
            if(this.float === "left")
                this.addCustomStyle(Margin(0).setTop(20).setLeft(window.innerWidth/4));
            else
                this.addCustomStyle(Margin(0).setTop(20).setRight(window.innerWidth/4));
        }
    }
    class Home extends HDivision{
        constructor(frame) {
            super('homeP');
            this.frame = frame;
            this.loaded = false;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.initTopPanels();
            this.initCenterWS();
            this.initServices();
            window.addEventListener('scroll', () => {
                this.scrolled();
            });
            this.transition = false;
            this.componentResized();
            this.addComponentListener(this);
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){
                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){


                this.d1366();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){
                this.d768();
                return;
            }
            if (screen.width >= 540){
                this.d540();
                return;
            }
            if (screen.width >= 414){
                this.d414();
                return;
            }
            if (screen.width >= 375){
                this.d375();
                return;
            }
            if (screen.width >= 360){
                this.d360();
                return;
            }
            this.d320();
            return;
        };


        d1920(){
            this.d1366();


        }
        d1566(){

            this.d1366();
        }
        d1536(){

            this.d1366();
        }
        d1366(){
            this.transition = true;
            this.center.addCustomStyle([
                Height(screen.height-130-65, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                OverflowY("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(0,'px'),
                //BackgroundImage("/getBackground.jpg")
            ]);
            this.services.addCustomStyle(
                [
                    Margin(0,'px').setTop(15),
                    Height(400, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                    ZIndex(0),

                ]
            );
            this.titleArea.addCustomStyle(([
                Position("relative"),
                PositionTop(0,'px'),
                Float("left"),
                Height(250, 'px'),
                Width(300,'px'),
                Margin(0,'px').setLeft(90).setTop(100),
                Color("1a497a"),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('left'),
                FontWeight(700),
                FontFamily("montserrat",FONT["SANS-SERIF"]),
                FontSize(250, '%'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(400, 'px'),
                Margin(0,'px').setTop(100).setRight(50),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                PositionRight(100, 'px'),
                PositionTop(0, 'px'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.servicesMessage.addCustomStyle(
                [
                    Display("inline"),
                    Width(400,'px'),
                    Height(300,'px'),
                    Margin(0,'px').setRight(65),
                    Opacity(0),
                    Transition("all","1500ms","ease")
                ]
            );
            this.serDiv.addCustomStyle(
                [
                    Width(700,'px'),
                    Display("inline"),
                    Position("relative"),
                    Float("left"),
                    PositionRight(0,'px'),
                    Opacity(0),
                    Transition("all","1500ms","ease")
                ]
            );
        }
        d1024(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(400, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.services.addCustomStyle(
                [
                    Height(400, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Margin("auto",'px'),
                    Padding(0,'px').setLeft(25).setTop(20),
                    ZIndex(0),

                ]
            );
            this.titleArea.addCustomStyle(([
                Position("relative"),
                PositionTop(0,'px'),
                Height(200, 'px'),
                Width(300,'px'),
                Margin(0,'px').setLeft(50).setTop(100),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('left'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(200, '%'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(400, 'px'),
                Margin(0,'px').setTop(100).setRight(10),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute "),
                PositionRight(100, 'px'),
                PositionTop(0, 'px'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.servicesMessage.addCustomStyle(
                [
                    Display("inline"),
                    Width(400,'px'),
                    Height(300,'px'),
                    Position(),
                    PositionRight(0,'px'),
                    Margin(0,'px').setRight(65),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );
            this.serDiv.addCustomStyle(
                [
                    Width(400,'px'),
                    Display("inline"),
                    Position("relative"),
                    Float("left"),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );

        }
        d768(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(400, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.services.addCustomStyle(
                [
                    Height(450, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Margin("auto",'px'),
                    Padding(0,'px').setLeft(25).setTop(20),
                    ZIndex(0),

                ]
            );
            this.titleArea.addCustomStyle(([
                Position("relative"),
                PositionTop(0,'px'),
                Height(200, 'px'),
                Width(300,'px'),
                Margin(0,'px').setLeft(50).setTop(100),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('left'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(200, '%'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(300, 'px'),
                Height(200,'px'),
                Margin(0,'px').setTop(0).setRight(10),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute "),
                PositionTop(100,'px'),
                PositionRight(30, 'px'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.servicesMessage.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Height(165,'px'),
                    Margin(0,'px').setRight(65),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );
            this.serDiv.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Height(250,'px'),
                    Position(),
                    PositionRight(0,'px'),
                    Overflow("hidden"),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );

        }
        d540(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(250, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.services.addCustomStyle(
                [
                    Height(500, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Margin("auto",'px'),
                    Padding(0,'px').setLeft(10).setTop(20),
                    ZIndex(0),

                ]
            );
            this.titleArea.addCustomStyle(([
                Position("relative"),
                PositionTop(0,'px'),
                Height(220, 'px'),
                Width(200,'px'),
                Margin(0,'px').setLeft(25).setTop(0),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(15,'px'),
                TextAlignment('left'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(150, '%'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(120*1.7, 'px'),
                Height(120,'px'),
                Margin(0,'px').setTop(20).setRight(10),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute "),
                PositionRight(30, 'px'),
                PositionTop(0, 'px'),
                Display("inline"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.servicesMessage.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Height(200,'px'),
                    Margin(0,'px').setRight(65),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );
            this.serDiv.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Height(310,'px'),
                    Position(),
                    PositionRight(0,'px'),
                    Overflow("hidden"),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );

        }
        d414(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(250, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.services.addCustomStyle(
                [
                    Height(700, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Margin("auto",'px'),
                    Padding(0,'px').setLeft(10).setTop(20),
                    ZIndex(0),

                ]
            );
            this.titleArea.addCustomStyle(([
                Position("absolute"),
                Margin('auto',''),
                PositionTop(80,'px'),
                Height(200, 'px'),
                Width(screen.width-50,'px'),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('center'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily("Open Sans Condensed",FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(18, 'pt'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(220*1.7, 'px'),
                Height(220,'px'),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                ZIndex(2000),
                Display("none"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.servicesMessage.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Height(220,'px'),
                    Margin(0,'px').setRight(65),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );
            this.serDiv.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width,'px'),
                    Height(310,'px'),
                    Position(),
                    PositionRight(0,'px'),
                    Overflow("hidden"),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );

        }
        d375(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(250, 'px'),
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.services.addCustomStyle(
                [
                    Height(700, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Margin("auto",'px'),
                    Padding(0,'px').setLeft(10).setTop(20),
                    ZIndex(0),

                ]
            );
            this.titleArea.addCustomStyle(([
                Position("absolute"),
                PositionTop(80,'px'),
                Height(220, 'px'),
                Margin('auto',''),
                Width(screen.width-50,'px'),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('center'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily("Calibri",FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(18, 'pt'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(220*1.7, 'px'),
                Height(220,'px'),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                ZIndex(2000),
                Display("none"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.servicesMessage.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Height(220,'px'),
                    Margin(0,'px').setRight(65),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );
            this.serDiv.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Height(310,'px'),
                    Position(),
                    PositionRight(10,'px'),
                    Overflow("hidden"),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );

        }
        d360(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(250, 'px'),
                Margin('auto', ''),
                Width(screen.width,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                Padding(10,'px'),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.services.addCustomStyle(
                [
                    Height(700, 'px'),
                    Width(screen.width,'px'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Margin("auto",'px'),
                    Padding(0,'px').setLeft(10).setTop(20),
                    ZIndex(0),

                ]
            );
            this.titleArea.addCustomStyle(([
                Position("absolute"),
                PositionTop(40,'px'),
                Height(220, 'px'),
                Margin('auto',''),
                Width(screen.width-50,'px'),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('center'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily("Open Sans Condensed",FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(18, 'pt'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(220*1.7, 'px'),
                Height(220,'px'),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                ZIndex(2000),
                Display("none"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.servicesMessage.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Height(220,'px'),
                    Margin(0,'px').setRight(65),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );
            this.serDiv.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Position(),
                    PositionRight(10,'px'),
                    Height(310,'px'),
                    Overflow("hidden"),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );

        }
        d320(){
            this.transition = false;
            this.center.addCustomStyle([
                Height(200, 'px'),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Position("relative"),
                ZIndex(0),
                BackgroundImage("/getBackground.jpg")
            ]);
            this.services.addCustomStyle(
                [
                    Height(700, 'px'),
                    Width(100,'vw'),
                    OverflowY("scroll"),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Margin("auto",'px'),
                    Padding(0,'px').setLeft(10).setTop(20),
                    ZIndex(0),

                ]
            );
            this.titleArea.addCustomStyle(([
                Position("absolute"),
                PositionTop(40,'px'),
                Height(220, 'px'),
                Margin('auto',''),
                Width(screen.width,'px'),
                Color(colorScheme.getSecondaryColor()),
                Overflow(OVERFLOW.HIDDEN),
                Display("block")
            ]));
            this.titleDiv = Division('titleDiv').addCustomStyle([
                Position('relative'),
                PositionTop(0,'px'),
                TextAlignment('center'),
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily("Calibri",FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(16, 'pt'),
                Overflow("hidden")
            ]);

            this.title1.addCustomStyle([
                Overflow("hidden")

            ]);
            this.buttonsDiv.addCustomStyle(
                [
                    Margin(0, 'px').setTop(10),
                    Display("block"),
                    Overflow("hidden")
                ]);
            this.infoCenter = Division('infoCenter').addCustomStyle(([
                Width(220*1.7, 'px'),
                Height(220,'px'),
                Padding(5,"px"),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Position("absolute"),
                ZIndex(2000),
                Display("none"),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.servicesMessage.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Height(220,'px'),
                    Margin(0,'px').setRight(65),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );
            this.serDiv.addCustomStyle(
                [
                    Display("block"),
                    Width(screen.width*0.9,'px'),
                    Position(),
                    PositionRight(10,'px'),
                    Height(310,'px'),
                    Overflow("hidden"),
                    Opacity(1),
                    Transition("all","1500ms","ease")
                ]
            );

        }
        initTopPanels(){
            this.imagebuffer = new HImage('buffer', '/getBackground.jpg',"null");
            this.imagebuffer.domElement.onload = ()=>{this.loaded = true;};
            this.center = Division('center');

            this.services = Division('services');
            this.addComponent([this.center,
                this.services])
        }


        initCenterWS(){
            this.setUpTitleAreaWS();
            this.setUpInformationCenterWS();
        }
        setUpTitleAreaWS(){
            this.titleArea =Division('titleArea');
            this.image = new HImage(this.id+'bgc',"/getBackground.jpg","");
            this.image.addCustomStyle([
                    Width(100),
                    Position("absolute"),
                    PositionLeft(0,'px')
                ]
            );
            this.center.addComponent(this.image);
            this.center.addComponent(this.titleArea);


            this.titleDiv = Division('titleDiv');
            this.title1 = Paragraph("title1").setTextContent("AMMIL Microfinance Institution");
            this.buttonsDiv = Division('buttonsDiv');
            this.loginBtn = new PButton('loginBtn', "Start", this);
            this.buttonsDiv.addComponent([this.loginBtn]);
            this.titleDiv.addComponent(
                [
                    this.title1,
                    this.buttonsDiv
                ]
            );
            this.titleArea.addComponent(this.titleDiv);
        }
        setUpInformationCenterWS(){
            this.infoCenter = Division('infoCenter');
            this.center.addComponent(this.infoCenter);
            this.slideShow = new SlideShow('mainSlideShow',[

            ]);

            this.slideShow.addSlide(
                new Slide(1, "/get1stImage", this));
            this.slideShow.addSlide(
                new Slide(2, "/get2ndImage", this));
            this.slideShow.addSlide(
                new Slide(3, "/get1stImage", this));
            this.slideShow.addSlide(
                new Slide(4, "/get2ndImage", this));
            //this.infoCenter.addComponent(this.slideShow);

            this.slideShow.start();


        }
        initServices(){
            let text = "With a formidable team, qualified, honest staff and buoyant liquidity position" +
                " we be able to offer people quality banking services in simple and friendly manner." +
                " We provide prompt, dynamic and caring banking/financial advisory services to a variety" +
                " of our teeming customers in Oyo state and its environ.";

            this.servicesMessage = new SmallSection("serSS","Our Numerous Products & Services!",text,"Products","/services",this);
            this.serDiv = Division("serItems");
            this.dca = new Service("dca","DCA","/getKWIcon","/services/dca");
            this.stockFin = new Service("stockFin","Stock Finance","/getSFIcon","/services/stockfinance");
            this.assetFin = new Service("assetFin","Asset Finance","/getAFIcon","/services/assetfinancing");
            this.projectFinance = new Service("projectFinance","Project Finance","/getPFIcon","/services/projectfinancing");
            this.basiri = new Service("basiri","Basiri","/getBSIcon","/services/basiri");
            this.lpoFinance = new Service("lpoFinances","LPO Financing","/getLPOIcon","/services/lpo(localpurchaseorder)financing");
            this.agbajowo = new Service("agabjowo","Agbajowo","/getAJIcon","/services/agbajowo");
            this.agLoanScheme = new Service("agLoanscheme","Agricultural Loan Scheme","/getALIcon","/services/agriculturallending");
            this.dca.addMouseListener(this.frame);
            this.stockFin.addMouseListener(this.frame);
            this.assetFin.addMouseListener(this.frame);
            this.projectFinance.addMouseListener(this.frame);
            this.basiri.addMouseListener(this.frame);
            this.lpoFinance.addMouseListener(this.frame);
            this.agbajowo.addMouseListener(this.frame);
            this.agLoanScheme.addMouseListener(this.frame);
            this.serDiv.addComponent(
                [
                    this.dca,
                    this.stockFin,
                    this.assetFin,
                    this.projectFinance,
                    this.basiri,
                    this.lpoFinance,
                    this.agbajowo,
                    this.agLoanScheme
                ]
            );
            this.services.addComponent([
                this.servicesMessage,
                this.serDiv
            ]);
        }


        getServiceLink(){
            return this.servicesMessage;
        }
        isLoaded(){
            return (this.loaded && this.slideShow.isLoaded());
        }
        easeIn(el){
            console.log(this.transition);
            if (this.transition){
                if (elementInView(el.domElement, 80)) {
                    el.addCustomStyle(
                        Opacity(1)
                    )
                } else {
                    el.addCustomStyle(
                        Opacity(0)
                    )
                }
            }
        }
        scrolled(e){
            this.easeIn(this.servicesMessage);
            this.easeIn(this.serDiv);
        }


        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                    if (e.getSource() === this.servicesMessage.getButton()){
                        this.frame.mouseClicked(e)
                    }
                    if(e.getSource() === this.loginBtn){
                        this.frame.loginPage.addCustomStyle(
                            [
                                Height(100,'vh'),
                                ZIndex(10),
                                Opacity(1),
                            ]
                        );
                    }
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    Opacity(0)
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    Opacity(0)
                )
            }
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())
                ]);
                e.getSource().getAnchor().addCustomStyle(
                    Color(colorScheme.getSecondaryColor())
                )
            }
            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(13,'pt')
                ])
            }

            if(e.getSource() instanceof PButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getTertiaryColor())

                ])
            }
            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())

                ])
            }
        }

        mouseOver(e){
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]);
                e.getSource().getAnchor().addCustomStyle(
                    Color(colorScheme.getPrimaryColor())
                )
            }
            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    Opacity(1)
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    Opacity(1)
                )
            }

            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(14,'pt')

                ])
            }

            if(e.getSource() instanceof PButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getBlackColor())

                ])
            }
            if(e.getSource() instanceof NLButton){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor())

                ])
            }


        }
        mouseUp(e){

        }

        mouseDown(e){

        }
    }
    class FormInput extends HDivision{
        constructor(id,type,name,title,placeholder="",width,height) {
            super(id);
            this.addCustomStyle([
                FontFamily("segoe ui"),
                Width(width,'px'),
                Padding(0,'px').setRight(10).setLeft(10),
                FontWeight(400),
                FontSize(12,'pt'),
                Margin("auto",""),
                Color(colorScheme.getDenaryColor()),
                Display("inline"),
            ])
            this.label = Label(this.id+"_label",this.id+"_input").setTextContent(title).addCustomStyle([
                Display("block")
            ]);
            this.input = Input(this.id+"_input", type,name, 250,placeholder).addCustomStyle([
                Height(height,'px'),
                Width(width,'px'),
                FontSize(12,'pt'),
                Border("thin","hidden"),
                BottomBorder("2px", "solid", "#"+colorScheme.getDenaryColor()),
                Display("block")
            ]);
            this.addComponent([
                this.label,
                this.input
            ])
        }
    }
    class ContactForm extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                FontFamily("segoe ui"),
                Width(800,'px'),
                FontWeight(400),
                FontSize(12,'pt'),
                Margin("auto",""),
                Color(colorScheme.getDenaryColor())
            ])
            this.fN = new FormInput(this.id+"fN","text", "fullname",
                "Full Name:", "Please enter your name",400,40);

            this.email = new FormInput(this.id+"email","email", "email",
                "Email:", "Email",400,40);
            this.address = new FormInput(this.id+"address","text", "address",
                "Address:", "Address",400,40);
            this.phone = new FormInput(this.id+"phone","tel", "phone",
                "Phone No:", "Please enter your phone number",400,40);

            this.msgLabel = Label(this.id+"msgLabel",this.id+"msg").setTextContent("Message:").addCustomStyle([
                Display("block")
            ]);
            this.message = TextArea(this.id+"msg", "message").addCustomStyle([
                Height(150,'px'),
                FontSize(12,'pt'),
                Width(650,'px'),
                Border("thin","hidden"),
                BottomBorder("2px", "solid", "#"+colorScheme.getDenaryColor()),
            ]);
            this.messageC = Division(this.id+"msgC").addCustomStyle([
                Padding(0,'px').setBottom(15)

            ]).addComponent([
                this.msgLabel,
                this.message
            ])


            this.button = Button(this.id+"button","button", "submit",
                "", "Submit").addCustomStyle([
                Height(40,'px'),
                Width(80,'px'),
                FontSize(12,'pt'),
                BackgroundColor(colorScheme.getPrimaryColor()),
                Color(colorScheme.getSecondaryColor()),
                Border("thin","hidden"),
                Transition("all","500ms")
            ]).setTextContent("Submit");
            this.button.addMouseListener(this)

            this.addComponent([
                this.fN,
                this.email,
                this.address,
                this.phone,
                this.messageC,
                this.button
            ])
        }
        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            e.getSource().addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Color(colorScheme.getSecondaryColor()),
                Border("thin","hidden"),
            ])
        }
        mouseOver(e){
            e.getSource().addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                Color(colorScheme.getPrimaryColor()),
                Border("thin","solid","#"+colorScheme.getPrimaryColor()),

            ])

        }
        mouseDown(e){

            e.getSource().addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor()),
                Color(colorScheme.getSecondaryColor()),
                Border("thin","hidden"),
            ])
        }
        mouseUp(e){

            e.getSource().addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                Color(colorScheme.getPrimaryColor()),
                Border("thin","solid","#"+colorScheme.getPrimaryColor()),
            ])
        }
    }
    class Services extends HDivision{
        constructor(frame) {
            super('servicesP');
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.frame = frame;
            this.initTopPanels();
            this.initCentre();

            window.addEventListener('scroll', () => {
                this.scrolled();
            });
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(e){
            if (screen.width >= 1920){
                this.d1920();
                return;
            }
            if (screen.width >= 1566){
                this.d1566();
                return;
            }
            if (screen.width >= 1536){
                this.d1536();
                return;
            }
            if (screen.width >= 1366){
                this.d1366();
                return;
            }
            if (screen.width >= 1280){


                this.d1280();
                return;
            }
            if (screen.width >= 1024){
                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
        };



        d1920(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width-200,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);

        }
        d1566(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width-200,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);
        }
        d1536(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width-300,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);
        }
        d1366(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width-150,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);

        }
        d1280(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width-50,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);

        }
        d1024(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width-150,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);
        }
        d768(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width-5,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);
        }
        d540(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(200,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width-5,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);
        }
        d414(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(5),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(250,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);
        }
        d375(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(5),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(260,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width-20,'px'),
                Position('relative'),
                Margin('0','px'),
                Overflow("hidden")

            ]);
        }
        d360(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(20),
                    Width(screen.width*0.90,'px'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(screen.width,'px'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.90,'px'),
                Height(270,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.servicesCon.addCustomStyle([
                Width(screen.width,'px'),
                Position('relative'),
                Margin('auto',''),
                Overflow("hidden")

            ]);
        }
        initTopPanels(){
            this.title = Paragraph(this.id+"title").setTextContent("Products");
            this.center = Division('centerS');
            this.intro = new ServiceMessage(this.id+"_intro","With a formidable team, qualified, honest staff and buoyant liquidity position we be able to offer people quality banking services in simple and friendly manner. We provide prompt, dynamic and caring banking/financial advisory services to a variety of our teeming customers in Oyo state and its environ. " +
                "Our bank is prepared to go to the extra mile not only to meet people needs but also to surpass " +
                "their expectation through continued vale addition to their organization both generic " +
                "and customized products services to meet their identified needs."
            );
            this.servicesCon = Division("servicesConD");
            this.addComponent([this.title,this.center]);
        }

        initCentre(){
            this.overdrafts = new ServiceBN('overdrafts',"OVERDRAFTS","/get1stImage","Account Opening",
                "This is a credit facility that allows the customer to overdraw its current account up to a specified approved limit." +
                " Overdrafts are lending vehicles designed to finance working assets are in principle payable on demand." +
                " The customer is nonetheless expected to borrow, pay down and re-borrow throughout the currency of the line." +
                " In other words, an Overdraft account is expected to maintain a satisfactory swing at all times",
                colorScheme.getPrimaryColor(),this.frame).
            addPrecondition("Testing").
            addPrecondition("Testing").
            addPrecondition("Testing").
            addPrecondition("Testing").
            addPrecondition("testing");
            this.termLoans = new ServiceBN('termLoans',"TERM LOANS","","Term Loans",
                "Term Loans are lending vehicles aimed at financing specific fixed assets or investments" +
                " of which repayment is dependent largely on the cash flows generated either from" +
                " the use of the asset financed or from incremental flows in the case of business expansion." +
                "Term loans may be short-term, medium or long-term with structured repayment pattern agreed with the" +
                " customer at the point of loan processing. The scheduled repayment pattern may be equated or unequal" +
                " periodic instalment, say monthly, quarterly, semi-annually or annually. Repayment could be balloon" +
                " or bullet in nature.", colorScheme.getPrimaryColor(),this.frame);
            this.dca = new ServiceBN('dca',"DCA","/getServiceBannerKW1.jpg","/getServiceBannerKW2.jpg","DCA",
                "This is a monthly upfront loan given in anticipation of daily contribution which serves as the repayment for the loan. " +
                "The amount ranges between N6,000- N80,000.00 or exposure under this category not exceeding 80% of the monthly aggregate" +
                " daily contribution after consideration of overall net position with the bank in all personal accounts."
                ,colorScheme.getPrimaryColor(),this.frame).
            setDuration("Thirty days (30 days)").
            addPricing("•Delinquent: Zero tolerance").
            addPricing("•Interest Rate:  2 days payment per month").
            addFee("•CRC Search  N500").
            addFee("•Search will be conducted every six (6) month , also application fee for customer that is consistent").
            addPrecondition("Initial deposit of 4 days daily contribution.").
            addPrecondition("New customer cannot take more than 50% of his/her monthly contribution.").
            addPrecondition("Such customer can graduate to 70% after 3 months based on good performance.").
            addPrecondition("And finally to 80% if there is no default in the first 6 month.").
            addPrecondition("To open savings account for monthly gains.").
            addPrecondition("A properly completed KYC form.").
            addPrecondition("Current Identity card ( voter’s card, National ID, Driver License od data page of international passport).").
            addRequirement("value must be at least ≥ 120%.").
            addRequirement("1 good guarantor.").
            addRequirement("Inventory in shop of applicant/guarantor.").
            addRequirement("KYC to be done on the applicant/guarantor.").
            addRequirement("Mortgage on goods assets at home of applicant/guarantor.").
            addRequirement("Bank verification Number (BVN).").
            addRPDBCondition("Within 72 HOURS of submitting application for processing.").
            addRPDBCondition("Waiting  period  for repeat loans – 2 days.").
            addRPDBCondition("Daily payment.").
            addRPDBCondition("Default charge: Attracts high default charges.");
            this.stockFinance = new ServiceBN('stockFinance',"STOCK FINANCE","/getServiceBannerSF1.jpg","/getServiceBannerSF2.jpg","Stock Finance",
                "It is a merchandising loan to be given to a customer who deals in buying and selling of some selected good to build up or replenish their stock." +
                "This will be based on the customers’ capacity, the cash flow analysis and the transaction turnover." +
                "(either in the organization or with any other bank)"
                ,colorScheme.getPrimaryColor(),this.frame).
            addPricing("•Interest rate: 3% flat per month ").
            addPricing("Interest rate method: flat").
            addFee("•Processing fee : 4% payable upfront ( one off)").
            addFee("•CRC Search N500").
            addPrecondition("Maintain back up investment for minimum period of 4 weeks and build up minimal balance up to 15% of the expected loan.").
            addPrecondition("The loan is based on the existing line of goods not new product.").
            addRequirement("2 good guarantor with signed an undated cheque and personal properties as collateral.").
            addRequirement("KYC on applicant/ guarantor.").
            addRequirement("Lien on goods, and the assets at home of applicant/guarantor.").
            addRequirement("Lien on balance in the customers investment account.").
            addRequirement("At least 15% of the expected loan.").
            addRPDBCondition("Daily/Weekly payment/monthly payment.").
            addRPDBCondition("Default charge: Attracts high default charges.");
            this.assetFinance = new ServiceBN('assetF',"ASSET FINANCING","/getServiceBannerAF1.jpg","/getServiceBannerAF2.jpg","Asset Finance",
                "It is a short term loan to be given to customer to acquire new business/ home assets such as:" +
                "  school vehicle, generator, laptop, desktops computers etc." +
                " This will be based on customers’ capacity, the cash flow analysis, and the cost of the asset"
                ,colorScheme.getPrimaryColor(),this.frame).
            addPricing("•Interest rate: 3% flat per month ").
            addPricing("Interest rate method: flat").
            addFee("•Processing fee : 4% payable upfront ( one off)").
            addFee("•CRC Search N500").
            addPrecondition("Maintain back up investment for minimum period of 4 weeks to the minimum of 30% on the assets value to be maintained throughout the life of the loan.").
            addPrecondition("A properly completed KYC form").
            addPrecondition("Current Identity card ( voter’s card, National ID, Driver License od data page of international passport)").
            addRequirement("personal cheque of the obligor").
            addRequirement("2 good guarantor with cheque ").
            addRequirement("30% equity contribution of the total of the asset").
            addRequirement("Inventory in shop of applicant/guarantor").
            addRequirement("KYC on applicant/ guarantor").
            addRequirement("Mortgage on good assets at home of applicant/guarantor").
            addRequirement("All corporate customers should be introduced to savings with balance to the minimum of 10% on the assets value to be maintained throughout the life of the loan. ").
            addRequirement("The asset is purchase with the bank’s name and when loan is liquidate there will be transfer of ownership").
            addRequirement("Comprehensive Insurance for vehicle.").
            addRPDBCondition("Daily/Weekly payment/monthly payment").
            addRPDBCondition("Default charge:  Attracts high default charges.");
            this.projectFinance = new ServiceBN('stock',"PROJECT FINANCING","/getServiceBannerPF1.jpg","/getServiceBannerPF2.jpg","Asset Finance",
                "This product is a bridging loan to be given to the customer who wants to embark on a particular project" +
                " for a repayment period not more than 12months."
                ,colorScheme.getPrimaryColor(),this.frame).
            addPricing("•Interest Rate: 3% flat per month").
            addPricing("•Interest rate method: reducing balance").
            addFee("•Processing fee  4% payable upfront (one off )").
            addFee("•CRC Search  N1000( N500 for corporate and N500 for individual)").
            addPrecondition("•Maintain back up investment for minimum period of 4 weeks to the tune of 15% of the expected loam").
            addPrecondition("• A properly completed KYC form").
            addPrecondition("•Current Identity card ( voter’s card, National ID, Driver License od data page of international passport)").
            addRequirement("•2 good guarantors with cheque and personal cheque (signed but undated)").
            addRequirement("•Analysis of cash flow from the existing business and cash flow of the guarantor.").
            addRequirement("•Mortgage of Good assets at home of applicant/guarantor.").
            addRequirement("•KYC of the applicant/guarantor.").
            addRequirement("•All  customers should be introduced to investment").
            addRequirement("•15% investment").
            addRequirement("•5%-10% of monthly repayment must be investment on monthly bases.").
            addRPDBCondition("•Monthly payment/quarterly").
            addRPDBCondition("•Delinquent : 5.5% on installment").
            addRPDBCondition("•Default charge:  Attracts high default charges.");
            this.basiri = new ServiceBN('basiri',"BASIRI","/getServiceBannerBS1.jpg","/getServiceBannerBS2.jpg","Basiri",
                "This is advance against Salary. It is granted to customer with salary current account to enable the beneficiary" +
                " solve his/her immediate need. The beneficiary can withdraw up to 33.3%/ (50%)" +
                " of the monthly salary, for asset financing.",colorScheme.getPrimaryColor(), this.frame).
            addPrecondition("Domiciliation of Salary Account ").
            addPricing("Delinquent: Zero tolerance").
            addPricing("Interest Rate:  2 days payment per month").
            addFee("CRC Search  N500").
            addFee("Search will be conducted every six (6) month , also application fee for customer that is consistent").
            addRequirement("•The organization stand as guarantor by signing the indemnity form and stamping the loan form.").
            addRequirement("The borrower must provide a number of cheque for the period of repayment. ").
            addRequirement("•A guarantor with a signed but undated cheque.").
            addRequirement("•The organization ensures the salary comes to us till the loan is liquidated").
            addRequirement("•The salary advance is one off while the loan runs for maximum of 6 months/ (8) months.").
            addRequirement("•Both the advance and loan cannot be more than 33.3% /(50%) of the salary per month").
            addRPDBCondition("•Monthly payment/quarterly").
            addRPDBCondition("•Default charge:  Attracts high default charges.");
            this.lpo = new ServiceBN('lpo',"LPO (Local Purchase Order) Financing","/getServiceBannerLPO1.jpg","/getServiceBannerLPO2.jpg","LPO Financing",
                "The standard chunk of Lorem Ipsum used " +
                "since the 1500s is reproduced below for " +
                "those interested. Sections 1.10.32 and " +
                "1.10.33 from \"de Finibus Bonorum et " +
                "Malorum\" by Cicero are also reproduced " +
                "in their exact original form, accompanied " +
                "by English versions from the 1914 " +
                "translation by H. Rackham.",colorScheme.getPrimaryColor(),this.frame).
            addPricing("•Interest Rate: 3% flat rate  per month ").
            addPricing("Interest rate method: flat rate").
            addFee("•Processing fee  4% payable upfront (one off)").
            addFee("CRC Search  N500").
            addPrecondition("•The issuer of the LPO must be among the bank’s selected Company or MDAs").
            addPrecondition("•Maintain back up investment for minimum period of 4 weeks to the tune of 30% of the contract sum.").
            addRequirement("•2 good guarantor with cheque and personal cheque").
            addRequirement("•30% equity contribution of the total of the asset").
            addRequirement("• Inventory on applicant/guarantor shop").
            addRequirement("•Mortgage of good assets at home of applicant/guarantor").
            addRequirement("•KYC on the applicant and the contract awardee").
            addRequirement("•Verification of the authenticity of the LPO").
            addRPDBCondition("•Daily/Weekly payment/monthly payment/quarterly").
            addRPDBCondition("•Delinquent : 5.5% on installment").
            addRPDBCondition("•Default charge:  Attracts high default charges.");
            this.agbajowo = new ServiceBN('agbajowo',"AGBAJOWO","/getServiceBannerAG1.jpg","/getServiceBannerAG2.jpg","Agbajowo",
                "This is a group lending to the members of a registered/ coherent groups who have agreed to work together based " +
                "on their laid down procedures (successful members of trained empowerment scheme)." +
                " They must as well be meeting regularly and agree to be governed by the group rules and regulations.",
                colorScheme.getPrimaryColor(),this.frame).
            addPricing("•Interest Rate: 3% flat per month (repayment schedule will be amortized for them)").
            addPricing("Interest rate method: flat ").
            addFee("•Processing fee  4% payable upfront (one off)").
            addFee("CRC Search  N500").
            addPrecondition("•Maintains group and individual investment account for a minimum period of 4 weeks.").
            addPrecondition("•Group insurance.").
            addPrecondition("•Minimum of 5 members and maximum of 15 members in a group.").
            addPrecondition("•Where the members are more than 15, it can be batched. However, the subsequent batch will only be process at 3 months interval. ").
            addPrecondition("•The members of the group must have passed through an organized empowerment training scheme and pre-disbursement orientation.").
            addPrecondition("•A file must be opened for each group member").
            addPrecondition("•A letter of recommendation from the Trainer (Empowerment scheme trainer) and Group Head showing a list of the group members with their passport photographs attached.").
            addPrecondition("•2 passport photographs are required from each member – 1 on the customer’s card and the other on the KYC form.").
            addPrecondition("•All members must fill the KYC form and have BVN number").
            addPrecondition("•CRC search to be carried out on each member").
            addPrecondition("•The group must be encouraged to meet regularly").
            addPrecondition("•The group name will be used to open investment where their weekly contribution is paid and contribution will be invested.").
            addPrecondition("•The loan account will be opened in the name of the group.").
            addPrecondition("•There must be group executive, e.g. the president, vice president, secretary, treasury and PRO who must be people of integrity").
            addPrecondition("•All the Executive committee members signatures must appeared on the guarantee form.").
            addPrecondition("•Daily / collection weekly sheet and ledger ").
            addRequirement("•1 good additional guarantor with cheque (or a letter from the leader of the community) ").
            addRequirement("• Inventory in shop of the members /guarantor").
            addRequirement("•Mortgage over good assets at home of applicant/guarantor").
            addRequirement("•Group joint/several guarantee – peer group pressure").
            addRequirement("•8% initially investment upfront or 1% of the loan amount").
            addRPDBCondition("Daily/Weekly payment/monthly payment/quarterly").
            addRPDBCondition("Default charge:  Attracts high default charges.");
            this.agricLending = new ServiceBN('agricLending',"AGRICULTURAL LENDING","/getServiceBannerAGLS1.jpg","/getServiceBannerAGLS2.jpg","Others",
                "This will operate as a group loan to handle agricultural value chains, therefore it will be handled by an experience officer" +
                " who has fair knowledge of all process in agricultural value chain line," +
                " the beginner who want to enjoy this facility must passed through empowerment training scheme. The loan can either be Input Financing," +
                " Small Machinery Financing or Process Financing.", colorScheme.getPrimaryColor(),this.frame).
            addPricing("•Interest Rate: 3% flat per month (repayment schedule will be amortized for them)").
            addPricing("Interest rate method: flat").
            addFee("•Processing fee  2% payable upfront").
            addFee("•CRC Search  N500 and N1000 for corporate body").
            addPrecondition("•Maintains investment for a minimum period of 4 weeks").
            addPrecondition("•Maximum members in a group 10.").
            addPrecondition("•Empowerment training certificate for beginners").
            addPrecondition("•A file must be opened for each group").
            addPrecondition("•A letter of recommendation from the Community Head showing a list of the group members with their passport photographs attached.").
            addPrecondition("•2 passport photographs are required from each member – 1 on the customer’s card and the other on the KYC form.").
            addPrecondition("•All members must fill the KYC form and have BVN number.").
            addPrecondition("•The group name will be used to open investment account where their weekly contribution and other contribution will be invested.").
            addPrecondition("•Individual will also have investment of 5% which will be included in their group investment").
            addPrecondition("•The loan account will be opened in the name of the individual with group name attach to it.").
            addPrecondition("•There must be group executive, e.g. the president, vice president, secretary, treasury and PRO.").
            addPrecondition("•All their signatures must appear on the guarantee form. ").
            addPrecondition("•CRC search to be carried out on each member.").
            addPrecondition("•The group must be encouraged to meet regularly.").
            addRequirement("•2 good guarantor with cheque (or a letter from the leader of the community)").
            addRequirement("•Good assets at home of applicant/guarantor").
            addRequirement("•Group joint/several guarantee – peer group pressure").
            addRequirement("•5% initially investment").
            addRequirement("•N 10,000.00 Minimum investment yearly.").
            addRPDBCondition("•Daily/Weekly payment/monthly payment/quarterly").
            addRPDBCondition("•Default charge:  Attracts high default charges.");

            this.kajola = new ServiceBN('kajola',"KAJOLA LOAN SCHEME","","KAJOLA LOAN SCHEME",
                "This is loan to be given to churches to finance the purchase of operating assets, instrument and others" +
                " with maximum duration of one year.This will be based on the customers’ capacity through the" +
                " cash flow analysis and the transaction turnover from financial records.",colorScheme.getPrimaryColor(),this.frame).
            addPricing("•Interest Rate: 3% flat per month").
            addPricing("•Interest rate method: reducing balance").
            addFee("•Processing fee 2% payable upfront").
            addFee("•CRC Search  N1000").
            addPrecondition("•Maintain back up saving/investment for minimum period of 4 weeks").
            addRequirement("•All corporate customers should be introduced to investment").
            addRequirement("•Authority letter from the church executive cancel. ").
            addRequirement("•5% investment.").
            addRPDBCondition("Weekly/Monthly payment").
            addRPDBCondition("Default charge:  Attracts high default charges.");

            this.center.addComponent([
                this.intro,
                this.servicesCon
            ]);
            this.servicesCon.addComponent([
                this.dca,
                this.stockFinance,
                this.assetFinance,
                this.projectFinance,
                this.basiri,
                this.lpo,
                this.agbajowo,
                this.agricLending,
                this.kajola,

            ])

        }
        easeIn(el){
            if (elementInView(el.domElement, 80)) {
                el.addCustomStyle(
                    Opacity(1)
                )
            } else {
                el.addCustomStyle(
                    Opacity(0)
                )
            }
        }

        isLoaded(){
            return this.overdrafts.isLoaded() && this.termLoans.isLoaded() && this.dca.isLoaded() && this.others.isLoaded();
        }

        scrolled(e){
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
            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    Opacity(0)
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    Opacity(0)
                )
            }
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor()),
                    Color(colorScheme.getSecondaryColor())
                ])
                e.getSource().getAnchor().addCustomStyle(
                    Color(colorScheme.getSecondaryColor())
                )
            }
            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(13,'pt')
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
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getSecondaryColor())
                ]);
                e.getSource().getAnchor().addCustomStyle(
                    Color(colorScheme.getPrimaryColor())
                )
            }
            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    Opacity(1)
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    Opacity(1)
                )
            }

            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(14,'pt')
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
    }

    class DownloadRow extends HDivision{
        constructor(id,date,item,type,href) {
            super(id);
            this.addCustomStyle([
                Width(700,'px'),
                Height(20,'px'),
                FontFamily("segoe ui"),
                FontSize(10,'pt'),
                FontWeight(400),
                Padding(0,'px').setLeft(2).setTop(1),
                BorderRadius(10,'px'),
                FontSize(10,'pt'),
                Transition("border-color", "400ms"),
                Border("thin","solid","#"+colorScheme.getSecondaryColor())

            ]);
            this.date = Paragraph(this.id+"_date").addCustomStyle([
                Overflow("hidden"),
                Width(20),
                Position(),
                Float("left")

            ]).setTextContent(date);
            this.item = Paragraph(this.id+"_item").addCustomStyle([
                Overflow("hidden"),
                Width(50),
                Position(),
                Float("left")
            ]).setTextContent(item);
            this.type = Paragraph(this.id+"_type").addCustomStyle([
                Overflow("hidden"),
                Width(15),
                Position(),
                Float("left")


            ]).setTextContent(type);
            this.button = new NLButton(this.id+"_btn", href).addCustomStyle([
                Overflow("hidden"),
                Width(70,'px'),
                Height(15,'px'),
                Float("left"),
                FontSize(8,'pt'),
                BorderRadius(5,'px'),
                BackgroundColor(colorScheme.getDenaryColor()),
                Color(colorScheme.getSecondaryColor()),
                Margin(0,'px').setLeft(15)
            ]).setTextContent("Download");

            this.addComponent([this.date,this.item,this.type,this.button]);
            this.addMouseListener(this);
        }

        getItem(){
            return this.item.domElement.textContent;
        }
        getType(){
            return this.type.domElement.textContent;
        }

        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            this.addCustomStyle(
                Border("thin","solid","#"+colorScheme.getSecondaryColor())
            )

        }
        mouseOver(e){
            this.addCustomStyle(
                Border("thin","solid","#"+colorScheme.getDenaryColor())
            )
        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    let dfhi = arrowRightH.substring(arrowRightH.length-10, arrowRightH.length-2);
    class DownloadHeader extends HDivision{
        constructor(id,width) {
            super(id);
            this.addCustomStyle([
                Width(width,'px'),
                Height(20,'px'),
                FontFamily("segoe ui"),
                FontWeight(500),
                FontSize(10,'pt'),
                Padding(0,'px').setLeft(5).setTop(3),
                BackgroundColor(colorScheme.getDenaryColor()),
                Color(colorScheme.getSecondaryColor()),
                BorderRadius(5,'px'),

            ]);
            this.date = Paragraph(this.id+"_date").addCustomStyle([
                Overflow("hidden"),
                Width(20),
                Position(),
                Float("left")

            ]).setTextContent("Date");
            this.item = Paragraph(this.id+"_item").addCustomStyle([
                Overflow("hidden"),
                Width(50),
                Float("left")


            ]).setTextContent("Item");
            this.type = Paragraph(this.id+"_type").addCustomStyle([
                Overflow("hidden"),
                Width(15),
                Float("left")


            ]).setTextContent("Type");
            this.addComponent([this.date,this.item,this.type])
        }
    }

    class Encrypt {
        static encrypt(key, str) {
            var s = [], j = 0, x, res = '';
            for (var i = 0; i < 256; i++) {
                s[i] = i;
            }
            for (i = 0; i < 256; i++) {
                j = (j + s[i] + key.charCodeAt(i % key.length)) % 256;
                x = s[i];
                s[i] = s[j];
                s[j] = x;
            }
            i = 0;
            j = 0;
            for (var y = 0; y < str.length; y++) {
                i = (i + 1) % 256;
                j = (j + s[i]) % 256;
                x = s[i];
                s[i] = s[j];
                s[j] = x;
                res += String.fromCharCode(str.charCodeAt(y) ^ s[(s[i] + s[j]) % 256]);
            }
            return res;
        }


    }


    class Downloadables extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Height(560,'px'),
                Width(810,'px'),
                Overflow("hidden"),
                Margin('auto',''),
                Position("relative"),
                Border("thin","solid","#"+colorScheme.getDenaryColor()),
            ]);
            this.items=[];
            this.current=0;
            this.position =0;
            this.max = 0;
            this.center =Division(this.id+"_center").addCustomStyle([
                Width(715,'px'),
                Height(23*18,'px'),
                Position(),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ]);
            this.container = Division(this.id+"_con1").addCustomStyle([
                Width(715,'px'),
                Height(23*18*5,'px'),
                Position("absolute"),
                PositionTop(this.position,'px'),
                Overflow("hidden"),
                Transition()
            ]);
            this.center.addComponent(this.container);
            this.top = Division(this.id+"_top").addCustomStyle([
                Width(100),
                Height(80,'px')
            ]);
            this.header= new DownloadHeader(this.id+"_hdr",700).addCustomStyle([
                Position(),
                PositionLeft(50,'px'),
                PositionTop(40,'px'),
            ]);
            this.sInput =Input(this.id+"_searchBar","search","search",250,"Search").addCustomStyle([
                Width(150,'px'),
                Height(30,'px'),
                Border("thin","solid","#"+colorScheme.getDenaryColor()),
                BorderRadius(5,'px'),
                Position("absolute"),
                PositionRight(20,'px'),
                PositionTop(5,'px'),
            ]);
            this.sInput.addDocumentListener(this);
            this.top.addComponent([this.sInput,this.header]);
            this.bottom = Division(this.id+"_bottom").addCustomStyle([
                Width(100),
                Height(50,'px'),
                Position("absolute"),
                PositionBottom(0)
            ]);
            this.text1 = Paragraph(this.id+"t1").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent("Page");
            this.textP = Paragraph(this.id+"tP").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent(this.current+1);
            this.textof = Paragraph(this.id+"tof").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent("of");
            this.textM = Paragraph(this.id+"tM").addCustomStyle([
                Display("inline"),

            ]).setTextContent(this.max+1);
            this.pos = Division(this.id+"_posD").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Margin(0,'px').setLeft(650),
                Display("inline")
            ]);
            this.pos.addComponent([this.text1,this.textP,this.textof,this.textM]);

            this.textI = TextInput(this.id+"textI","",3).addCustomStyle([
                Height(10,'px'),
                Width(15,'px'),
                Margin(0,'px').setRight(2),
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Border("thin","solid","#"+colorScheme.getDenaryColor()),
                BorderRadius(5,'px'),
            ]);
            this.textI.addKeyListener(this);
            this.textDL = Paragraph(this.id+"tDL").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)
            ]).setTextContent("/");
            this.textM2 = Paragraph(this.id+"tM2").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)
            ]).setTextContent(this.max+1);
            this.go = new PButton(this.id+"_go","",this).addCustomStyle(
                [
                    Width(15,'px'),
                    Height(15,'px'),
                    Display("inline")
                ]
            );
            this.posS = Division(this.id+"_posDS").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Margin(0,'px').setLeft(10),
                Display("inline")
            ]);
            this.posS.addComponent([this.textI,this.textDL,this.textM2, this.go]);
            this.bottom.addComponent([this.pos,this.posS]);
            this.leftIcon = new HImage(this.id+"_lIcon", arrowLeftT).addCustomStyle([
                Height(30,'px'),
                Position(),
                PositionTop(185,'px'),
                PositionLeft(5,'px'),
            ]);
            this.rightIcon = new HImage(this.id+"_RIcon", arrowRightT).addCustomStyle([
                Height(30,'px'),
                Position(),
                PositionTop(185,'px'),
                PositionLeft(5,'px'),

            ]);

            this.leftIcon.domElement.addEventListener("click", (windowEvent) => {
                this.mouseClicked(new MouseEvent("click",this.leftIcon,windowEvent));
            });
            this.rightIcon.domElement.addEventListener("click", (windowEvent) => {
                this.mouseClicked(new MouseEvent("click",this.rightIcon,windowEvent));
            });
            this.go.domElement.addEventListener("click", (windowEvent)=>{
                this.mouseClicked(new MouseEvent("click",this.go,windowEvent));
            });
            this.left = Division(this.id+"_left").addCustomStyle([
                Width(40,'px'),
                Height(400,'px'),
                Position(),
                Float("left"),
            ]);
            this.left.addComponent(this.leftIcon);
            this.right = Division(this.id+"_right").addCustomStyle([
                Width(40,'px'),
                Height(400,'px'),
                Position("absolute"),
                PositionRight(10,'px')
            ]);
            this.right.addComponent(this.rightIcon);
            this.addComponent([
                this.top,this.left,this.center,this.right,this.bottom
            ])
        }

        search(pattern){
            let count = 0;
            let myFunction =(element, index ) =>{
                if(!this.check(pattern, element)){
                    element.setVisible(false);
                    count++;
                }
                else {
                    element.setVisible(true);
                }
            };
            this.items.forEach(myFunction);
            this.max = Math.trunc((this.items.length-count)/18) > 4 ? 4:Math.trunc((this.items.length-count)/18)
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
            this.position=0;
            this.current=0;
            this.container.addCustomStyle(PositionTop((this.position)));
            this.textP.setTextContent(this.current+1)
        }

        check(pattern,  item){
            if (pattern.length !== 0){
                if(Helper.KMPSearch(pattern,item.getItem()))
                    return true;
                if(Helper.KMPSearch(pattern,item.getType()))
                    return true;

                return false;
            }
            else return  true;
        }
        documentChanged(e){
            if(e.getSource() === this.sInput)
                this.search(e.getSource().getInputText());
        }
        keyPressed(e){
            if(e.getSource() === this.textI && e.getWindowEvent().keyCode === 13){
                try {
                    this.goto(parseInt(e.getSource().getInputText()))
                }
                catch (e){

                }
            }
        }
        goto(index){
            if( index-1 <= this.max && Number.isInteger(index) && index > 0){
                this.current = index-1;
                this.position = -(18*23) * (index-1);
                this.container.addCustomStyle(PositionTop(this.position));
                this.textP.setTextContent(this.current+1)
            }
        }

        addDownloadable(downloadable){
            try{
                downloadable.forEach((item)=>{
                    this.paginate(item);
                })
            }
            catch(e){
                this.paginate(downloadable);
            }
        }

        paginate(item){
            if(this.items.length < 90){
                this.container.addComponent(item);
                this.adjustValues(item);
            }
        }
        adjustValues(item){
            this.max = Math.trunc((this.items.length+1)/18) > 4 ? 4:Math.trunc((this.items.length+1)/18);
            this.items.push(item);
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
        }

        switch(button){
            if(button === this.leftIcon && this.current > 0){
                this.container.addCustomStyle(PositionTop((this.position +(18*23))));
                this.current--;
                this.position = this.position +(18*23);
                this.textP.setTextContent(this.current+1);
            }
            if(button === this.rightIcon && this.current < this.max){
                this.container.addCustomStyle(PositionTop((this.position -(18*23))));
                this.current++;
                this.position = this.position -(18*23);
                this.textP.setTextContent(this.current+1);
            }

        }


        mouseOut(e) {
            if (e.getSource() instanceof PButton) {
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getTertiaryColor())

                ])
            }
        }

        mouseOver(e) {
            if (e.getSource() instanceof PButton) {
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getBlackColor())

                ])
            }
        }

        mouseClicked(e){
            if(e.getSource() === this.leftIcon || e.getSource() === this.rightIcon)
                this.switch(e.getSource());

            if(e.getSource() === this.go){
                try {
                    this.goto(parseInt(this.textI.getInputText()))
                }
                catch (e){

                }
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){
        }
        mouseMoved(e){
        }
        mouseDown(e){
        }
        mouseUp(e){
        }

    }

    class NewsItem extends HDivision{
        constructor(id,text, headline) {
            super(id);
            this.addCustomStyle(
                [
                    Width(100),
                    Height(40,'px'),
                    FontFamily("calibri"),
                    Overflow("hidden"),
                    Margin(0,'px').setBottom(5).setLeft(5)
                ]
            )
            this.addMouseListener(this)
            this.item = Paragraph(this.id+"_item").addCustomStyle([
                FontWeight(600),
                FontSize(11,'pt'),
                Height(22,'px'),
                Overflow("hidden")

            ]).setTextContent(text)
            this.date = Paragraph(this.id+"_date").addCustomStyle([
                FontWeight(300),
                FontStyle("italic"),
                FontSize(9,'pt'),
            ]).setTextContent(headline)

            this.addComponent([
                this.item,this.date
            ])
        }

        getItem(){
            return this.item.getTextContent();
        }

        mouseClicked(e){
        }
        mouseEntered(e){
        }
        mouseLeave(e){
        }
        mouseMoved(e){
        }
        mouseOut(e){
            this.item.addCustomStyle([
                Color("000000")
            ])
            this.date.addCustomStyle([
                Color("000000")
            ])
        }
        mouseOver(e){
            this.item.addCustomStyle([
                Color(colorScheme.getPrimaryColor())
            ])
            this.date.addCustomStyle([
                Color(colorScheme.getPrimaryColor())
            ])
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class NewsHeadline extends HDivision{

        constructor(id) {
            super(id);
        }
    }
    class NewsSlide extends HDivision{
        constructor(id, src = "",alt= "", mouseListener){
            super("slide_"+id);
            this.loaded = false;
            this.addCustomStyle(
                [
                    Height(350,'px'),
                    Width(550,'px'),
                    Display("block"),
                    Overflow("hidden")
                ]
            );
            this.index = undefined;
            this.image = new HImage("image_"+id, src,alt).addCustomStyle(
                [
                    Width(550,'px'),
                    Height(350,'px')
                ]
            );
            this.image.domElement.addEventListener("load", ()=> {this.loaded =true} )

            this.addComponent(this.image);
        }

        isLoaded(){
            return this.loaded;
        }

    }
    class NewsSlideShow extends HDivision{
        constructor(id, slides = []) {
            super("slideShow_"+ id);
            this.addCustomStyle([
                Width(550,'px'),
                Height(345,'px'),
                Overflow(OVERFLOW.HIDDEN),
                Border("thin","solid","#"+colorScheme.getNonaryColor())
            ]);
            this.screen = Division(this.id+'_screen').addCustomStyle([
                Width(550,'px'),
                Margin('auto', ''),
                Height(350,'px'),
                BackgroundColor(colorScheme.getQuaternaryColor()),
            ]);
            this.navigation = Division(this.id+'_nav').addCustomStyle([
                Position("relative"),
                PositionTop(-25,'px'),
                Width(0),
                Height(12),
                Margin('auto', ''),
                Overflow("hidden"),
            ]);
            this.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 60%)";
            this.buttons=[];
            this.position= -1;
            this.items = slides;
            this.topIndex =slides.length-1;
            this.addComponent([this.screen,this.navigation]);
        }

        addButton(){
            let button = new SSButton(this.topIndex, this.topIndex, this);
            button.addCustomStyle(
                Border("thin","hidden")
            );
            this.buttons.push(button);
            this.navigation.addCustomStyle(Width(20*this.buttons.length,'px'));
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
            slide.addCustomStyle([
                    Display("block"),
                    Height(0),
                    Transition("all","500ms","ease")
                ]
            );
            return this;

        }
        removeSlide(slide){
            this.items.remove(this.findSlide(slide));
        }
        findSlide(slide){
            let found = false;
            let index = 0;
            while (!found){
                if (this.items[index] === slide)
                    return index;
                else
                if (index === this.topIndex)
                    return -1
            }
            return -1
        }
        start(){
            try{

                this.items[0].addCustomStyle(Height(100))
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
                    item.addCustomStyle(Height(0));

                })
                this.buttons.forEach(function (item){
                    item.addCustomStyle(BackgroundColor(colorScheme.getDenaryColor()));

                })
                this.items[this.position].addCustomStyle(Height(350, 'px'))
                this.buttons[this.position].addCustomStyle([
                    BackgroundColor(colorScheme.getPrimaryColor())
                ])
                this.current= this.position;
                this.position === this.topIndex ? this.position= 0: this.position++;

            }, 5000);
        }

        switchTo(button){
            clearInterval(this.interval);
            this.items.forEach(function (item){
                item.addCustomStyle(Height(0));

            })
            this.buttons.forEach(function (item){
                item.addCustomStyle(BackgroundColor(colorScheme.getDenaryColor()));

            })
            button.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor())
            ])
            this.items[button.getIndex()].addCustomStyle(Height(100));
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
        isLoaded(){

            let loaded = true;
            this.items.forEach(
                function (item){
                    loaded = loaded && item.isLoaded();
                }
            )

            return loaded;
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
    class NewsList extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Height(400,'px'),
                Width(350,'px'),
                Overflow("hidden"),
                Margin('auto',''),
                Position("relative"),
                Border("thin","solid","#"+colorScheme.getNonaryColor()),
            ]);
            this.items=[];
            this.current=0;
            this.position =0;
            this.max = 0;
            this.center =Division(this.id+"_center").addCustomStyle([
                Width(350,'px'),
                Height(40*8,'px'),
                Position(),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ]);
            this.container = Division(this.id+"_con1").addCustomStyle([
                Width(350,'px'),
                Height(40*8*20,'px'),
                Position("absolute"),
                PositionTop(this.position,'px'),
                Overflow("hidden"),
                Transition()
            ]);
            this.center.addComponent(this.container);
            this.top = Division(this.id+"_top").addCustomStyle([
                Width(100),
                Padding(0,'px').setLeft(5),
                Height(40,'px'),
                BackgroundColor(colorScheme.getPrimaryColor())
            ]);
            this.header= new DownloadHeader(this.id+"_hdr",700).addCustomStyle([
                Position(),
                PositionLeft(50,'px'),
                PositionTop(40,'px'),
            ]);
            this.sInput =Input(this.id+"_searchBar","search","search",250,"Search").addCustomStyle([
                Width(150,'px'),
                Height(25,'px'),
                Border("thin","solid","#"+colorScheme.getDenaryColor()),
                BorderRadius(2,'px'),
                Position("absolute"),
                PositionRight(5,'px'),
                PositionTop(10,'px'),
            ]);

            this.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 60%)";
            this.sInput.addDocumentListener(this);
            this.top.addComponent([this.sInput]);
            this.bottom = Division(this.id+"_bottom").addCustomStyle([
                Width(100),
                Height(30,'px'),
                Position("absolute"),
                PositionBottom(0)
            ]);
            this.text1 = Paragraph(this.id+"t1").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent("Page");
            this.textP = Paragraph(this.id+"tP").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent(this.current+1);
            this.textof = Paragraph(this.id+"tof").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent("of");
            this.textM = Paragraph(this.id+"tM").addCustomStyle([
                Display("inline"),

            ]).setTextContent(this.max+1);
            this.pos = Division(this.id+"_posD").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Margin(0,'px').setLeft(200),
                Display("inline")
            ]);
            this.pos.addComponent([this.text1,this.textP,this.textof,this.textM]);

            this.textI = TextInput(this.id+"textI","",3).addCustomStyle([
                Height(10,'px'),
                Width(15,'px'),
                Margin(0,'px').setRight(2),
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Border("thin","solid","#"+colorScheme.getDenaryColor()),
                BorderRadius(5,'px'),
            ]);
            this.textI.addKeyListener(this);
            this.textDL = Paragraph(this.id+"tDL").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)
            ]).setTextContent("/");
            this.textM2 = Paragraph(this.id+"tM2").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)
            ]).setTextContent(this.max+1);
            this.go = new PButton(this.id+"_go","",this).addCustomStyle(
                [
                    Width(15,'px'),
                    Height(15,'px'),
                    Display("inline")
                ]
            );
            this.posS = Division(this.id+"_posDS").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Margin(0,'px').setLeft(10),
                Display("inline")
            ]);
            this.posS.addComponent([this.textI,this.textDL,this.textM2, this.go]);
            this.bottom.addComponent([this.pos,this.posS]);

            this.addComponent([
                this.top,this.center,this.bottom
            ])
        }


        search(pattern){
            let count = 0;
            let myFunction =(element, index ) =>{
                if(!this.check(pattern, element)){
                    element.setVisible(false);
                    count++;
                }
                else {
                    element.setVisible(true);
                }
            };
            this.items.forEach(myFunction);
            this.max = Math.trunc((this.items.length-count)/8) > 19 ? 19:Math.trunc((this.items.length-count)/8)
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
            this.position=0;
            this.current=0;
            this.container.addCustomStyle(PositionTop((this.position)))
            this.textP.setTextContent(this.current+1)
        }

        check(pattern,  item){
            if (pattern.length !== 0){
                return Helper.KMPSearch(pattern, item.getItem());
            }
            else return  true;
        }
        documentChanged(e){
            if(e.getSource() === this.sInput)
                this.search(e.getSource().getInputText());
        }
        keyPressed(e){
            if(e.getSource() === this.textI && e.getWindowEvent().keyCode === 13){
                try {
                    this.goto(parseInt(e.getSource().getInputText()))
                }
                catch (e){

                }
            }
        }
        goto(index){
            if( index-1 <= this.max && Number.isInteger(index) && index > 0){
                this.current = index-1;
                this.position = -(18*23) * (index-1);
                this.container.addCustomStyle(PositionTop(this.position));
                this.textP.setTextContent(this.current+1)
            }
        }

        addItem(item){
            try{
                item.forEach((item)=>{
                    this.paginate(item);
                })
            }
            catch(e){
                this.paginate(item);
            }
        }

        paginate(item){
            if(this.items.length < 90){
                this.container.addComponent(item)
                this.adjustValues(item);
            }
        }
        adjustValues(item){
            this.max = Math.trunc((this.items.length+1)/8) > 19 ? 19:Math.trunc((this.items.length+1)/8)
            this.items.push(item)
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
        }

        switch(button){
            if(button === this.leftIcon && this.current > 0){
                this.container.addCustomStyle(PositionTop((this.position +(8*35))))
                this.current--
                this.position = this.position +(8*35)
                this.textP.setTextContent(this.current+1);
            }
            if(button === this.rightIcon && this.current < this.max){
                this.container.addCustomStyle(PositionTop((this.position -(8*35))))
                this.current++
                this.position = this.position -(8*35)
                this.textP.setTextContent(this.current+1);
            }

        }


        mouseOut(e) {
            if (e.getSource() instanceof PButton) {
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getTertiaryColor())

                ])
            }
        }

        mouseOver(e) {
            if (e.getSource() instanceof PButton) {
                e.getSource().addCustomStyle([
                    BackgroundColor(colorScheme.getBlackColor())

                ])
            }
        }

        mouseClicked(e){
            if(e.getSource() === this.leftIcon || e.getSource() === this.rightIcon)
                this.switch(e.getSource());

            if(e.getSource() === this.go){
                try {
                    this.goto(parseInt(this.textI.getInputText()))
                }
                catch (e){

                }
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){
        }
        mouseMoved(e){
        }
        mouseDown(e){
        }
        mouseUp(e){
        }

    }
    class NewsPanel extends HDivision{
        constructor(id,slides) {
            super(id);
            this.addCustomStyle([
                Width(1325,'px'),
                Height(550,'px'),
                Overflow("hidden"),
                Margin("auto",''),
            ]);
            this.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 60%),inset";
            this.newsList = new NewsList("newsList").addCustomStyle([
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(5).setTop(20)
            ]);
            this.mediaList = new NewsList("mediaList").addCustomStyle([
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(5).setTop(20)
            ]);
            this.slideShow = new NewsSlideShow(id,slides).addCustomStyle([
                Position(),
                Float("left"),
                Display("inline"),
                Margin(0,'px').setLeft(5).setTop(45)
            ]);

            this.addComponent([
                this.newsList,
                this.slideShow,
                this.mediaList
            ])
        }

        addSlide(slide){
            this.slideShow.addSlide(slide);
            return this;
        }

        start(){
            this.slideShow.start();
        }

        addNews(item){
            this.newsList.addItem(item)

        }
        addMedia(item){
            this.mediaList.addItem(item)

        }
    }
    class AboutUs extends HDivision{
        constructor(frame) {
            super('aboutUsP');
            this.loaded = false;
            this.frame =frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.initTopPanels();
            window.addEventListener('scroll', () => {
                this.scrolled();
            });
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){


                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){


                this.d1366();
                return;
            }
            if (screen.width >= 1280){


                this.d1280();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
            this.d320();
            return;
        };



        d1920(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-screen.width /12.8,'px'),
                Height(724,'px'),
                Width(724,'px')
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(50),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(90,'vw'),
                Height(900,'px'),
                Margin(0,'px').setLeft(60),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(90,'vw'),
                Margin(0,'px').setLeft(50),
            ]);
            this.board.addCustomStyle([
                Width(90,'vw'),
                Height(170*2,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);

            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);
        }
        d1566(){


            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-screen.width /12.8,'px'),
                Height(724,'px'),
                Width(724,'px')
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(50),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(90,'vw'),
                Height(900,'px'),
                Margin(0,'px').setLeft(60),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(90,'vw'),
                Margin(0,'px').setLeft(50),
            ]);
            this.board.addCustomStyle([
                Width(90,'vw'),
                Height(170*2,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);

            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);
        }
        d1536(){


            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-screen.width /12.8,'px'),
                Height(724,'px'),
                Width(724,'px')
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(50),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(90,'vw'),
                Height(900,'px'),
                Margin(0,'px').setLeft(60),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(90,'vw'),
                Margin(0,'px').setLeft(50),
            ]);
            this.board.addCustomStyle([
                Width(90,'vw'),
                Height(170*2,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);

            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);
        }
        d1366(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(150,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50).setTop(10),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-screen.width /11,'px'),
                Height(724,'px'),
                Width(724,'px')
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(50),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(90,'vw'),
                Height(900,'px'),
                Margin(0,'px').setLeft(60),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(90,'vw'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);
            this.board.addCustomStyle([
                Width(90,'vw'),
                Height(170*2,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);

            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);
        }
        d1280(){


            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(200,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.board.addCustomStyle([
                Width(90,'vw'),
                Height(170*2,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-screen.width /9,'px'),
                Height(724,'px'),
                Width(724,'px'),
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(50),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(90,'vw'),
                Height(900,'px'),
                Margin(0,'px').setLeft(60),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(95,'vw'),
                Margin(0,'px').setLeft(50),
            ]);

            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);
        }
        d1024(){


            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(230,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5 .addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(0,'px'),
                Height(724,'px'),
                Width(724,'px'),
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(50),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(90,'vw'),
                Height(900,'px'),
                Margin(0,'px').setLeft(60),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(95,'vw'),
                Margin(0,'px').setLeft(50),
            ]);

            this.board.addCustomStyle([
                Width(90,'vw'),
                Height(170*2,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);
            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);
        }
        d768(){
            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(270,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(0,'px'),
                Height(500,'px'),
                Width(500,'px'),
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(50),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(90,'vw'),
                Height(700,'px'),
                Margin(0,'px').setLeft(10),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(95,'vw'),
                Margin(0,'px').setLeft(50),
            ]);

            this.board.addCustomStyle([
                Width(90,'vw'),
                Height(170*6,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);
            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);
        }
        d540(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(380,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Height(500,'px'),
                Width(500,'px'),
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-15,'px')
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(0),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(95,'vw'),
                Height(700,'px'),
                Margin(0,'px').setLeft(10),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(95,'vw'),
                Margin(0,'px').setLeft(50),
            ]);

            this.board.addCustomStyle([
                Width(90,'vw'),
                Height(170*6,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);
            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);
        }
        d414(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px')
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(500,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Height(300,'px'),
                Width(300,'px'),
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-15,'px')
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(0),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(95,'vw'),
                Height(500,'px'),
                Margin(0,'px').setLeft(0),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(95,'vw'),
                Margin(0,'px').setLeft(50),
            ]);

            this.board.addCustomStyle([
                Width(95,'vw'),
                Height(170*6,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);
            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);

        }
        d375(){

            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(550,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Height(300,'px'),
                Width(300,'px'),
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-15,'px')
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(0),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(95,'vw'),
                Height(500,'px'),
                Margin(0,'px').setLeft(0),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(95,'vw'),
                Margin(0,'px').setLeft(50),
            ]);

            this.board.addCustomStyle([
                Width(95,'vw'),
                Height(170*6,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);
            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);

        }
        d360(){


            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width*0.95,'px'),
                Height(550,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Height(300,'px'),
                Width(300,'px'),
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-15,'px')
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(0),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(95,'vw'),
                Height(500,'px'),
                Margin(0,'px').setLeft(0),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(95,'vw'),
                Margin(0,'px').setLeft(50),
            ]);

            this.board.addCustomStyle([
                Width(95,'vw'),
                Height(170*6,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);
            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);

        }
        d320(){
            this.title.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.center.addCustomStyle([
                Margin('auto', ''),
                Width(100,'vw'),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Padding(10,'px'),
                PositionTop(90,'px'),
            ]);
            this.intro.addCustomStyle([
                Width(screen.width,'px'),
                Height(550,'px'),
                Position('relative'),
                PositionLeft(-20,'px'),
                Display("block"),
                FontSize(12,'pt'),
                Margin('auto','')
            ]);
            this.header1.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header2.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header3.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header4.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.header5.addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(0),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            this.image.addCustomStyle([
                Height(300,'px'),
                Width(300,'px'),
                Display("block"),
                Margin("auto",""),
                Position(),
                PositionLeft(-15,'px')
            ]);
            this.cValues.addCustomStyle([
                Margin(0,'px').setLeft(0),
                Padding(0,'px').setLeft(10),
            ]);
            this.mS.addCustomStyle([
                Width(95,'vw'),
                Height(500,'px'),
                Margin(0,'px').setLeft(0),

            ]);

            this.vision.addCustomStyle([
                Float("left")
            ]);
            this.mission.addCustomStyle([
                Float("right")
            ]);
            this.team.addCustomStyle([
                Width(95,'vw'),
                Margin(0,'px').setLeft(50),
            ]);

            this.board.addCustomStyle([
                Width(95,'vw'),
                Height(170*6,'px'),
                Margin(0,'px').setLeft(50).setTop(30),
            ]);
            this.wwD.addCustomStyle([
                Width(90,'vw'),
                Height(600,'px'),
                Margin(0,'px').setLeft(50),

            ]);

        }
        initTopPanels(){
            this.title = Paragraph(this.id+"title").setTextContent("ABOUT US");
            this.center = Division('centerAU');
            this.intro = new ServiceMessage(this.id+"_intro","Ave Maria Multipurpose Investment Limited(Ammil) of Catholic Diocese of Oyo is a faith- based, non- bank micro finance institution established by the Catholic Diocese of Oyo to cater for all people, with emphasis on the poor and the vulnerable irrespective of religion, race, age or gender that are financially excluded. Ammil promotes holistic human development and strategic actions against ills of the society towards the realization of a just and egalitarian community through animation, conscientization, awareness, training, advocacy, supports, mobilization networking and Entrepreneur Development and Micro- Credit Programme.\n" +
                "Ave Maria has been in existence since 2009 as a department under a Non Government Organization called   Justice Development & Peace Movement Oyo Diocese incorporated on 5th February, 2007 by the Corporate Affairs Commission, Abuja, with RC NO CAC/IT/NO 22933 as Non-Profit Organization.\n" +
                "However, AVE MARIA MULTIPURPOSE INVESTMENT LIMITED was officially incorporated subsequently as a non bank micro finance institution  by the Corporate Affair Commission with registration number RC 1518760, to carry out financial transaction like business advisory services and micro financing.",
                "AMMIL Microfinance Institution is a micro credit institution aimed at empowering and supporting the active poor, acting as an interface " +
                "institution to small and medium scale businesses (SMEs), helping them avoid complex bottleneck requirements obtainable in conventional banks." +
                "It is a metamorphosis of Entrepreneurship Development Programme (EDP) of the Justice Development and Peace Movement of the Catholic Diocese of Oyo"
            );
            this.addComponent([this.title,this.center]);
            this.header1 = Paragraph(this.id+"header1").setTextContent("MISSION AND VISION");
            this.header2 = Paragraph(this.id+"header2").setTextContent("WHAT WE DO");
            this.header3 = Paragraph(this.id+"header3").setTextContent("BOARD OF DIRECTORS");
            this.header4 = Paragraph(this.id+"header4").setTextContent("THE TEAM");
            this.header5 = Paragraph(this.id+"header5").setTextContent("OUR CORE VALUES");
            this.mS = Division(this.id +"_mS");

            this.vision = new VM('vision',"Vision","To Be The Foremost Financial Institution that Promotes and Protects Human Dignity");
            this.image= new HImage("vmImg","/getVm.png","Vision and Mission");
            this.cValues = new HImage("cValues","/getCValues.png","Core Values");
            this.cValues.domElement.addEventListener("load",()=>{
                this.loaded = true;
            });
            this.image.domElement.addEventListener("load",()=>{
                this.loaded = true;
            });
            this.mission = new VM('mission',"Mission", "Creation of Wealth through Ethical, Innovative and Business Advisory Services");
            this.team = Division(this.id +"_team");
            this.board = Division(this.id +"_board");
            this.mS.addComponent([
                this.vision,
                this.image,
                this.mission
            ]);

            this.wwD = Division(this.id +"_wwD");

            this.wwd1 = new Sticker("sticker1", "left", "fc9328","fca517","fc9328","",
                "AMMIL provides professional advisory and financial services to the people of Oyo and environs through different products and services.");
            this.wwd2 = new Sticker("sticker2", "right", "b0e6d8","00d400","b0e6d8","Expansion",
                "AMMIL assists farmers who have large expanse of land for farming, but financially incapacitated to fully cultivate and expand their business.");
            this.wwd3 = new Sticker("sticker3", "left", "17beee","17d5ee","17beee","Diversification",
                "AMMIL also provides access to funds to farmers who plant rarely produced crops of high market potential, but wishing to diversify. ");
            this.wwd4 = new Sticker("sticker4", "right", "00aa00","54e6d8","00aa00","Affiliation",
                "AMMIL assists farmers who also need funds to improve their agribusiness through the acquisition of farming equipment, processing and storage equipment with credit facilities.");
            this.wwD.addComponent([
                this.wwd1,
                this.wwd2,
                this.wwd3,
                this.wwd4,
            ]);


            JSON.parse(localStorage.getItem("profiles"))['profiles'].forEach(
                (profile)=>{
                    if(profile.type === "director") {


                        if(profile.position === "C.E.O") {
                            this.board.addComponent(
                                new Staff("staff" + profile.id, profile.image, profile.firstname,
                                    profile.lastname, profile.position, profile.content,profile.edu,profile.exp,profile.certs, this.frame)
                            );
                        }
                        else{
                            this.board.addComponent(
                                new Staff2("staff" + profile.id, profile.image, profile.firstname,
                                    profile.lastname, profile.position, profile.content,profile.edu,profile.exp,profile.certs, this.frame)
                            );
                        }
                    }
                }
            );
            JSON.parse(localStorage.getItem("profiles"))['profiles'].forEach(
                (profile)=>{
                    if(profile.type === "management"){
                        this.team.addComponent(
                            profile.position === "Managing Director"?
                                new Staff("staff"+profile.id, profile.image, profile.firstname, profile.lastname, profile.position,profile.content,profile.edu,profile.exp,profile.certs, this.frame).addCustomStyle([
                                    Display('block'),
                                    Width(100,'%'),
                                ]):  new Staff("staff"+profile.id, profile.image, profile.firstname, profile.lastname, profile.position,profile.content,profile.edu,profile.exp,profile.certs, this.frame)
                        );
                    }
                }
            );

            this.center.addComponent([
                this.intro,
                this.header5,
                this.cValues,
                this.header1,
                this.mS,
                this.header2,
                this.wwD,
                this.header3,
                this.board,
                this.header4,
                this.team,
            ]);

        }
        isLoaded(){
            return true;
        }


        easeIn(el){

            if (elementInView(el.domElement, 80)) {
                el.addCustomStyle(
                    Opacity(1)
                )
            } else {
                el.addCustomStyle(
                    Opacity(0)
                )
            }
        }

        move(el){
            if (elementInView(this.wwD.domElement, 100)) {
                el.restore();
            } else {
                el.move();
            }

        }
        scrolled(e){
            this.move(this.wwd1);
            this.move(this.wwd2);
            this.move(this.wwd3);
            this.move(this.wwd4);
        }

    }
    class ResourceCentre extends HDivision{
        constructor() {
            super('resourceCentreP');
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.initTopPanels();
        }

        initTopPanels(){
            this.title = Paragraph(this.id+"title").setTextContent("RESOURCE CENTRE").addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),
                ]
            );
            /*
       CENTER1
       NEWS AND MEDIA
             */
            this.title2 = Paragraph(this.id+"title3").setTextContent("News and Media").addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),

                ]
            );
            this.center = Division('newsandmedia')
                .addCustomStyle([
                    Margin('auto', ''),
                    Width(95,'vw'),
                    Height(500,'px'),
                    Overflow("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Padding(10,'px'),
                    PositionTop(90,'px'),
                ]);

            this.newsPanel = new NewsPanel(this.id+"_newsPP",[]);
            this.newsPanel.addNews([/*
                new NewsItem("news1","Disbursement of  three million Loans to 500 Farmers", "21-04-21"),
                new NewsItem("news2","Disbursement of Loans to 600 Farmers", "22-04-21"),
                new NewsItem("news3","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news4","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news5","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news6","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news7","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news8","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news9","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news10","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news11","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news12","Disbursement of Loans to 700 Farmers", "23-04-21"),
                new NewsItem("news13","Disbursement of Loans to 700 Farmers", "23-04-21")*/
            ]);
            //this.newsPanel.addSlide(new NewsSlide(6, "/get1stImage", this))
            this.newsPanel.start();

            this.center.addComponent(this.newsPanel);


            /*
       CENTER2
       DOWNLOADS
             */
            this.title3 = Paragraph(this.id+"title2").setTextContent("Documents and Downloadables").addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),

                ]
            );

            this.center2 = Division('centerRC')
                .addCustomStyle([
                    Margin('auto', ''),
                    Width(100,'vw'),
                    Height(600,'px'),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Padding(10,'px'),
                    PositionTop(90,'px'),
                ]);
            this.downloadables = new Downloadables(this.id+"_dds").addCustomStyle([

            ]);
            let testValues = [
                "Apple",
                "Ball",
                "Ball",
                "Ball",
                "Ball",
                "Ball",
                "Ball",
                "Ball",
                "Cat",
                "Dog",
                "Elephant",
                "Fish",
                "Goat",
                "House",
                "Ice",
                "Jug",
                "Kettle",
                "Lion",
                "Mouse",
            ];
            /*for (let x =1; x<102;x++ ){
                this.downloadables.addDownloadable(
                    new DownloadRow("download"+x, Date.now().toString(), "Loan" + testValues[Math.floor(Math.random() * (testValues.length))], "Document","/getResource/loan_disbursement_form"),
                )
            } */
            this.center2.addComponent([
                this.downloadables
            ]);

            /*
       CENTER3
       JDPM
             */
            this.title4 = Paragraph(this.id+"title4").setTextContent("Justice, Development & Peace Mission").addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(16,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),

                ]
            );
            this.center3 = Division('JDPM')
                .addCustomStyle([
                    Margin('auto', ''),
                    Width(100,'vw'),
                    Height(600,'px'),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Padding(10,'px'),
                    PositionTop(90,'px'),
                ]);
            this.addComponent([this.title,this.title2,this.center, this.title3,this.center2, this.title4,this.center3])
        }

        isLoaded(){
            return true;
        }



    }
    class ContactUs extends HDivision{


        constructor() {
            super('contactUsP');
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")])
            this.initTopPanels();
        }

        initTopPanels(){
            this.title = Paragraph(this.id+"title").setTextContent("CONTACT US").addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10),
                    BorderRadius(5,'px'),

                ]
            );
            this.center = Division('centerCU')
                .addCustomStyle([
                    Margin('auto', ''),
                    Height(650,'px'),
                    Width(100,'vw'),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Padding(10,'px'),
                    PositionTop(90,'px'),
                ]);
            this.locationsTitle = Paragraph(this.id+"locationsT").setTextContent("LOCATIONS").addCustomStyle(
                [
                    FontFamily("segoe ui"),
                    FontSize(20,'pt'),
                    FontWeight("bold"),
                    Margin(0,'px').setLeft(50),
                    Width(90,'vw'),
                    Color(colorScheme.getPrimaryColor()),
                    Padding(0,'px').setLeft(10).setBottom(10),
                    BorderRadius(5,'px'),

                ]
            );
            this.map = Division('map').addCustomStyle([
                Height(400,'px'),
                Width(75),
                Margin('auto','')
            ]);
            this.locations = Division('locations')
                .addCustomStyle([
                    Margin('auto', ''),
                    Height(500,'px'),
                    Width(100,'vw'),
                    OverflowX("hidden"),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Padding(10,'px').setLeft(100),
                    PositionTop(90,'px'),
                ]);
            this.contactHO = new Contact2('contactHO'+this.id, "Head Office");
            this.contactHO.setAddress("AMMIL Building, Opp. Labake Store, Owode, Oyo, Oyo State.")
            this.contactHO.setPhone("08134380797, 08077688333");
            this.contactHO.setEmail("info@ammilmfi.com");
            this.contactIW = new Contact2('contactIW'+this.id, "Iwere-Ile Branch").addCustomStyle([Display("inline"),
                Position("relative"),Float("left")]);
            this.contactIW.setAddress("Oke Asunnara Area, Opp. Town Hall, Iwere Ile, Oyo State.").addCustomStyle([Display("inline"),
                Position("relative"),Float("left")]);
            this.contactIW.setPhone("08137449872");
            this.contactIW.setEmail("");
            this.contactSK = new Contact2('contactSK'+this.id, "Saki Branch").addCustomStyle([Display("inline"),
                Position("relative"),Float("left")]);
            this.contactSK.setAddress("26/27, James Koleoso Shopping Complex, Kolawole Area, Saki, Oyo State.")
            this.contactSK.setPhone("08067293082");
            this.contactSK.setEmail("");
            this.contactOG = new Contact2('contactOG'+this.id, "Ogbomoso Branch").addCustomStyle([Display("inline"),
                Position("relative"),Float("left")]);
            this.contactOG.setAddress("St. Ferdinand Catholic Church Shopping Complex, Ogbomoso, Oyo State.")
            this.contactOG.setPhone("07040269641")
            this.contactOG.setEmail("");
            this.contactIG = new Contact2('contactIG'+this.id, "Igbeti Branch").addCustomStyle([Display("inline"),
                Position("relative"),Float("left")]);
            this.contactIG.setAddress("AMMIL Office, Ibukun-Olu Hospital Compound, Ago-Are, Igbeti, Oyo State.")
            this.contactIG.setPhone("08137449473");
            this.contactIG.setEmail("");
            this.addComponent([this.title,this.center,this.locationsTitle,this.map,this.locations])
            this.form = new ContactForm("contactForm");
            this.center.addComponent([
                this.form
            ]);
            this.locations.addComponent([
                this.contactHO, this.contactIW ,this.contactSK,
                this.contactOG, this.contactIG
            ])
        }




        isLoaded(){
            return true;
        }



    }

    class GenButton extends HDivision{
        constructor(id, text,width,color1,color2) {
            super(id);
            this.addCustomStyle([
                Width(width,'px'),
                Height(15,'px'),
                Padding(5,'px').setTop(15),
                BorderRadius(2,'px'),
                BackgroundColor(color1),
                Transition(),
                Border("thin",BORDERSTYLE.INSET,colorScheme.getDenaryColor()),
            ]);
            this.color1=color1;
            this.color2=color2;
            this.paragraph = Paragraph(this.id+'_p').addCustomStyle(
                [
                    FontFamily("calibri"),
                    Width(width,'px'),
                    FontWeight(500),
                    FontSize(11,'pt'),
                    Height(20,'px'),
                    TextAlignment("center"),
                    Color(colorScheme.getSecondaryColor()),
                    Cursor(),
                    Transition(),
                    Margin("auto",''),
                    Position("relative"),
                    PositionTop(-5,'px')

                ]
            ).setTextContent(text);
            this.addComponent([this.paragraph]);
            this.addMouseListener(this)
        }

        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            this.addCustomStyle([
                BackgroundColor(this.color1)
            ]);



        }
        mouseOver(e){
            this.addCustomStyle([
                BackgroundColor(this.color2)
            ]);

        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }

    class GenButtonRounded extends GenButton{


        constructor(id, text, width, color1, color2) {
            super(id, text, width, color1, color2);
            this.addCustomStyle(BorderRadius(15,'px'))
        }
    }
    class SubmitButton extends GenButtonRounded{
        constructor(id, text, width, color1, color2) {
            super(id, text, width, color1, color2);
            this.loader = new LoaderSmall(this.id+"loader");
            this.loader.fadeOut();
            this.addComponent(this.loader);
            this.turnOff();
        }

        turnOff(){
            this.addCustomStyle([
                BackgroundColor(ECS.getDisabled())
            ]);
            this.disabled=true;

        }
        turnOn(){
            this.addCustomStyle([
                BackgroundColor(this.color1)
            ]);
            this.disabled=false;
        }

        fadeIn(){
            this.loader.fadeIn();
        }

        fadeOut(){
            this.loader.fadeOut();
        }
        isDisabled(){
            return this.disabled;
        }

        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            if(!this.disabled)
                this.addCustomStyle([
                    BackgroundColor(this.color1)
                ]);



        }
        mouseOver(e){
            if(!this.disabled)
                this.addCustomStyle([
                    BackgroundColor(this.color2)
                ]);

        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class Login extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle(
                [
                    Width(100,'vw'),
                    Height(0,'vh'),
                    Position("fixed"),
                    PositionTop(130,'px'),
                    ZIndex(0),
                    Transition(),
                    Opacity(0),
                    BackgroundColor(colorScheme.getNonaryColor())
                ]
            );
            this.container = Division(this.id+"_con").addCustomStyle([
                Width(700,'px'),
                Height(400,'px'),
                Margin("auto",''),
                Overflow("hidden"),
                Position("relative"),
                PositionTop(25,'px'),
                BorderRadius(2,'px'),
                Overflow("hidden")
            ]);
            this.closeIcon = new HImage(this.id+"_close", closeIcon2).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("absolute"),
                PositionTop(2,'px'),
                PositionLeft(335,'px')
            ]);
            this.closeIcon.addMouseListener(this);
            this.closeIconR = new HImage(this.id+"_closeR", closeIcon2).addCustomStyle([
                Width(12,'px'),
                Height(12,'px'),
                Position("absolute"),
                PositionTop(2,'px'),
                PositionLeft(5,'px')
            ]);
            this.closeIconR.addMouseListener(this);

            this.container.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.image = Division(this.id+"_Idiv").addCustomStyle([
                    Position("relative"),
                    Width(350,'px'),
                    Height(400,'px'),
                    BackgroundImage("/getBackground2.jpg",true),
                    Display("inline"),
                    Float("left"),
                    Transition()
                ]
            );
            this.body = Division(this.id+"_body").addCustomStyle([
                Position("relative"),
                Width(350,'px'),
                Height(400,'px'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Overflow("hidden"),
                Display("inline"),
                Float("left"),
                Transition()
            ]);
            this.formBox = Division(this.id+"_formBox").addCustomStyle([
                Width(300,'px'),
                Height(300,'px'),
                BorderRadius(5,'px'),
                Overflow("hidden"),
                Margin("auto","")
            ]);
            this.formBox.domElement.style.marginTop="50px";
            this.header = Division(this.id+"_header").addCustomStyle([
                Height(50,'px'),
                Width(100),
                Overflow("hidden")
            ]);
            this.headerTxt = Paragraph(this.id+"_hTxt").addCustomStyle([
                FontFamily("calibri"),
                FontSize(18,'pt'),
                Margin(0,'px').setLeft(10).setTop(15)

            ]).setTextContent("Sign In");
            this.content = Division("content").addCustomStyle([
                Width(300,'px'),
                Height(200,'px')
            ]);
            this.labelUN = Label(this.id+"_usernameL",this.id+"_username").setTextContent("Username:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputUN= Input(this.id+"_username","text","username",50,"Username")
                .addCustomStyle([
                    Height(45,'px'),
                    FontFamily("calibri"),
                    Width(90),
                    Display("block"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelPW = Label(this.id+"_passwordL",this.id+"_password").setTextContent("Password:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputPW= Input(this.id+"_password","password","password",50,"Password")
                .addCustomStyle([
                    Height(45,'px'),
                    Width(90),
                    FontFamily("calibri"),
                    Display("block"),
                    Margin(0,'px').setLeft(10).setTop(5).setBottom(5),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);

            this.inputUN.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputPW.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputUN.addMouseListener(this);
            this.inputPW.addMouseListener(this);
            this.submit = new SubmitButton("btnLogin","Sign In", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submit.addMouseListener(this);

            this.noaccount= Division(this.id+"NAcc").addCustomStyle([
                Width(100),
                Height(120,'px'),
                FontFamily("calibri"),
                Color(colorScheme.getPrimaryColor())

            ]);
            this.forgotPassword = Paragraph(this.id+"_fP").addCustomStyle([
                Position(),
                Float("right"),
                Margin(0,'px').setRight(25)
            ]).setTextContent("Forgot Password?");

            this.nay = Paragraph(this.id+"_nay").addCustomStyle([
                Margin(0,'px').setLeft(25)
            ]).setTextContent("No Account Yet?");
            this.forgotPassword.addMouseListener(this);
            this.nay.addMouseListener(this);

            this.bodyR = Division(this.id+"_bodyR").addCustomStyle([
                Position("relative"),
                Width(0,'px'),
                Height(400,'px'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Overflow("hidden"),
                Display("inline"),
                Float("left"),
                Transition()
            ]);

            this.formBoxR = Division(this.id+"_formBoxR").addCustomStyle([
                Width(450,'px'),
                Height(350,'px'),
                BorderRadius(5,'px'),
                Overflow("hidden"),
                FontSize(12),
                Margin("auto","")
            ]);
            this.formBoxR.domElement.style.marginTop="5px";
            this.headerR = Division(this.id+"_headerR").addCustomStyle([
                Height(50,'px'),
                Width(100),
                Overflow("hidden")
            ]);
            this.headerTxtR = Paragraph(this.id+"_hTxtR").addCustomStyle([
                FontFamily("calibri"),
                FontSize(18,'pt'),
                Margin(0,'px').setLeft(10).setTop(15)

            ]).setTextContent("Register");
            this.contentR = Division("contentR").addCustomStyle([
                Width(450,'px'),
                Height(300,'px')
            ]);
            this.labelFNR = Label(this.id+"_firstnameLR",this.id+"_firstnameR").setTextContent("First Name:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5).setRight(12),
            ]);
            this.inputFNR= Input(this.id+"_firstnameR","text","firstname",50,"First Name")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelLNR = Label(this.id+"_lastnameLR",this.id+"_lastnameR").setTextContent("Last Name:").addCustomStyle([
                FontFamily("calibri"),
                Width(190,'px'),
                Margin(0,'px').setLeft(10).setTop(5),
                Display("inline"),
                Position(),
                Float("left"),
            ]);
            this.inputLNR= Input(this.id+"_lastnameR","text","lastname",50,"Last Name")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(20).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelUNR = Label(this.id+"_usernameLR",this.id+"_usernameR").setTextContent("Username:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5).setRight(12),
            ]);
            this.inputUNR= Input(this.id+"_usernameR","text","username",50,"Username")
                .addCustomStyle([
                    Height(34,'px'),
                    FontFamily("calibri"),
                    Width(196,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelEmail = Label(this.id+"_emailL",this.id+"_email").setTextContent("Email:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5),
            ]);
            this.inputEmail= Input(this.id+"_email","text","email",50,"Email")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(5).setTop(3).setBottom(0),
                    Position(),
                    PositionLeft(12,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelPhone = Label(this.id+"_phoneL",this.id+"_phone").setTextContent("Phone:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5).setRight(12),
            ]);
            this.inputPhone= Input(this.id+"_phone","phone","phone",11,"Phone")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelBVN = Label(this.id+"_BVNL",this.id+"_BVN").setTextContent("BVN:").addCustomStyle([
                FontFamily("calibri"),
                Width(125,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5),
            ]);
            this.inputBVN= Input(this.id+"_BVN","number","bvn",50,"BVN")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(20).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelPWR = Label(this.id+"_passwordLR",this.id+"_passwordR").setTextContent("Password:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5).setRight(12),
            ]);
            this.inputPWR= Input(this.id+"_passwordR","password","password",50,"Password")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(10).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);
            this.labelPWR2 = Label(this.id+"_passwordLR2",this.id+"_passwordR2").setTextContent(" Confirm Password:").addCustomStyle([
                FontFamily("calibri"),
                Width(195,'px'),
                Position(),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(5),
            ]);
            this.inputPWR2= Input(this.id+"_passwordR2","password","password2",50,"Confirm Password")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(190,'px'),
                    Display("inline"),
                    Margin(0,'px').setLeft(20).setTop(3).setBottom(0),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);

            this.inputUNR.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputPWR.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputUNR.addMouseListener(this);
            this.inputPWR.addMouseListener(this);
            this.submitR = new SubmitButton("btnLoginR","Register", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submitR.addMouseListener(this);

            this.noaccountR= Division(this.id+"NAcc").addCustomStyle([
                Width(100),
                Height(50,'px'),
                FontFamily("calibri"),
                Color(colorScheme.getPrimaryColor())

            ]);

            this.nayR = Paragraph(this.id+"_nayR").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setLeft(25)
            ]).setTextContent("Sign in Instead");

            this.toastPR = Paragraph(this.id+"_toastPR").addCustomStyle([
                Display("block"),
                Position(),
                FontSize(10,'pt'),
                Float("right"),
                Margin(0,'px').setRight(20),
                Color(ECS.getDanger())
            ]).setTextContent("");


            this.toastP = Paragraph(this.id+"_toastP").addCustomStyle([
                Display("block"),
                Position(),
                FontSize(10,'pt'),
                Float("right"),
                Margin(0,'px').setRight(20),
                Color(ECS.getDanger())
            ]).setTextContent("");

            this.nayR.addMouseListener(this);
            this.errFN = new HImage("errFN",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errLN = new HImage("errLN",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(416,'px'),
                Width(0,'px'),
            ]);
            this.errUN = new HImage("errUN",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errUNL = new HImage("errUNL",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errEm = new HImage("errEM",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(416,'px'),
                Width(0,'px'),
            ]);
            this.errPhone = new HImage("errPhone",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errBVN = new HImage("errBVN",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(416,'px'),
                Width(0,'px'),
            ]);
            this.errPs = new HImage("errPs",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errPsL = new HImage("errPsL",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(204,'px'),
                Width(0,'px'),
            ]);
            this.errPsC = new HImage("errPsC",errorC).addCustomStyle([
                Position("absolute"),
                Transition(),
                PositionLeft(416,'px'),
                Width(0,'px'),
            ]);



            this.body.addComponent([this.formBox, this.noaccount,this.closeIcon]);
            this.bodyR.addComponent([this.formBoxR, this.noaccountR,this.closeIconR]);
            this.headerR.addComponent(this.headerTxtR);
            this.formBoxR.addComponent([this.headerR,this.contentR]);
            this.contentR.addComponent([
                this.labelFNR, this.labelLNR,
                this.inputFNR,this.errFN, this.inputLNR,this.errLN,
                this.labelUNR,this.labelEmail,
                this.inputUNR,this.errUN,this.inputEmail,this.errEm,
                this.labelPhone,this.labelBVN,
                this.inputPhone,this.errPhone,this.inputBVN,this.errBVN,
                this.labelPWR,this.labelPWR2,
                this.inputPWR,this.errPs,this.inputPWR2,this.errPsC,
                this.submitR]);
            this.noaccountR.addComponent([this.nayR, this.toastPR]);
            this.header.addComponent(this.headerTxt);
            this.formBox.addComponent([this.header,this.content]);
            this.content.addComponent([this.labelUN,this.inputUN,this.labelPW,this.inputPW,this.submit]);
            this.noaccount.addComponent([this.forgotPassword,this.nay, this.toastP]);


            this.container.addComponent([this.bodyR,this.image,this.body]);
            this.addComponent(this.container);

            this.inputUN.addDocumentListener(this);
            this.inputPW.addDocumentListener(this);
            this.inputFNR.addDocumentListener(this);
            this.inputLNR.addDocumentListener(this);
            this.inputPhone.addDocumentListener(this);
            this.inputUNR.addDocumentListener(this);
            this.inputEmail.addDocumentListener(this);
            this.inputBVN.addDocumentListener(this);
            this.inputPWR.addDocumentListener(this);
            this.inputPWR2.addDocumentListener(this);

            this.unLValid= false;
            this.passLValid= false;
            this.fnValid= false;
            this.fnValid= false;
            this.lnValid= false;
            this.phoneValid= false;
            this.unValid= false;
            this.emailValid= false;
            this.passValid= false;
            this.bvnValid= false;

            this.checked =false;
        }

        toastR(text){
            this.toastPR.setTextContent(text);
        }
        toast(text){
            this.toastP.setTextContent(text);
        }
        enableSubmitR(){
            if(this.inputsValidR()){
                this.submitR.turnOn();
            }
            else{
                this.submitR.turnOff();
            }
        }
        enableSubmit(){
            if(this.inputsValid()){
                this.submit.turnOn();
            }
            else{
                this.submit.turnOff();
            }
        }
        inputsValidR(){
            return this.fnValid &&this.lnValid &&this.phoneValid &&this.unValid && this.emailValid && this.passValid && this.bvnValid;
        }
        inputsValid(){
            return this.unLValid && this.passLValid;
        }
        documentChanged(e){
            if (e.getSource() === this.inputUN){
                this.checkUsernameL();
            }
            if (e.getSource() === this.inputPW){
                this.checkPWL();
            }
            if (e.getSource() === this.inputFNR){
                this.checkFN();
            }
            if (e.getSource() === this.inputLNR){
                this.checkLN();
            }
            if (e.getSource() === this.inputPhone){
                this.checkPhone();
            }
            if (e.getSource() === this.inputUNR){
                this.checkUsername();
            }
            if (e.getSource() === this.inputEmail){
                this.checkEmail()
            }
            if (e.getSource() === this.inputBVN){
                this.checkBVN()
            }
            if (e.getSource() === this.inputPWR){
                this.checkPWR();
            }
            if (e.getSource() === this.inputPWR2){
                this.checkPWR2();
            }

        }

        packageR(){
            let json = {};
            json['firstName']=this.inputFNR.getInputText();
            json['lastName']=this.inputLNR.getInputText();
            json['email']=this.inputEmail.getInputText();
            json['phone']=this.inputPhone.getInputText();
            json['bvn']=this.inputBVN.getInputText();
            json['username']=this.inputUNR.getInputText();
            json['password']=this.inputPWR.getInputText();
            json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
            return encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json)));
        }
        packageL(){
            let json = {};
            json['username']=this.inputUN.getInputText();
            json['password']=this.inputPW.getInputText();
            json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
            return encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json)));

        }
        async sendR(parameters, func1,func2, type){
            let response = await fetch('/core', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: "type="+type+"&content="+parameters
            });

            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }
        async checkUsername(){
            if(this.inputUNR.getInputText().length < 4){
                this.errUN.addCustomStyle(Width(12,'px'));
                this.unValid = false;
                this.enableSubmitR();
            }
            else{
                this.errUN.addCustomStyle(Width(0,'px'));
                let json = {};
                json['username']=this.inputUNR.getInputText();
                json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
                await this.sendR(encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json))), ()=>{
                    this.errUN.addCustomStyle(Width(0,'px'));
                    this.unValid = true;
                    this.enableSubmitR();
                }, ()=>{
                    this.errUN.addCustomStyle(Width(12,'px'));
                    this.unValid = false;
                    this.enableSubmitR();
                },'checkUsername');
            }
        }
        async checkEmail(){
            if(this.inputEmail.getInputText().length < 3){
                this.errEm.addCustomStyle(Width(12,'px'));
                this.emailValid = false;
                this.enableSubmitR();
            }

            else{
                this.errEm.addCustomStyle(Width(0,'px'));
                let json = {};
                json['email']=this.inputEmail.getInputText();
                json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
                await this.sendR(encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json))), ()=>{
                    this.errEm.addCustomStyle(Width(0,'px'));
                    this.emailValid = true;
                    this.enableSubmitR();
                }, ()=>{
                    this.errEm.addCustomStyle(Width(12,'px'));
                    this.emailValid = false;
                    this.enableSubmitR();
                },'checkEmail');
            }
        }
        async checkBVN(){
            if(this.inputBVN.getInputText().length < 3){
                this.errBVN.addCustomStyle(Width(12,'px'));
                this.bvnValid = false;
                this.enableSubmitR();
            }
            else{
                this.errBVN.addCustomStyle(Width(0,'px'));
                let json = {};
                json['bvn']=this.inputBVN.getInputText();
                json[dfhi]=document.getElementsByTagName(dfhi)[0].textContent;
                await this.sendR(encodeURIComponent(Encrypt.encrypt(json[dfhi],JSON.stringify(json))), ()=>{
                    this.errBVN.addCustomStyle(Width(0,'px'));
                    this.bvnValid = true;
                    this.enableSubmitR();
                }, ()=>{
                    this.errBVN.addCustomStyle(Width(12,'px'));
                    this.bvnValid = false;
                    this.enableSubmitR();
                },'checkBVN');
            }
        }
        checkPWR(){
            if(this.inputPWR.getInputText().length < 8){
                this.passValid = false;
                this.errPs.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.errPs.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
            if(this.checked){
                if(this.inputPWR.getInputText() !== this.inputPWR2.getInputText()){
                    this.errPsC.addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmitR();
                }
                else{
                    this.errPsC.addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmitR();
                }
            }
        }
        checkPWR2(){
            if(!this.checked){
                this.checked = true;
            }
            if(this.inputPWR2.getInputText().length < 8){
                this.passValid = false;
                this.errPsC.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                if(this.inputPWR.getInputText() !== this.inputPWR2.getInputText()){
                    this.errPsC.addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmitR();
                }
                else{
                    this.errPsC.addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmitR();
                }
            }
        }
        checkFN(){
            if(this.inputFNR.getInputText().length < 1){
                this.fnValid = false;
                this.errFN.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.fnValid = true;
                this.errFN.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
        }
        checkLN(){
            if(this.inputLNR.getInputText().length < 1){
                this.lnValid = false;
                this.errLN.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.lnValid = true;
                this.errLN.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
        }
        checkPhone(){
            if(this.inputPhone.getInputText().length < 11){
                this.phoneValid = false;
                this.errPhone.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.phoneValid = true;
                this.errPhone.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
        }
        checkUsernameL(){
            if(this.inputUN.getInputText().length < 1){
                this.unLValid = false;
                this.errUNL.addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.unLValid = true;
                this.errUNL.addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        checkPWL(){
            if(this.inputPW.getInputText().length < 1){
                this.passLValid = false;
                this.errPsL.addCustomStyle(Width(12,'px'));
                this.enableSubmit();
            }
            else{
                this.passLValid = true;
                this.errPsL.addCustomStyle(Width(0,'px'));
                this.enableSubmit();
            }
        }
        clearInputFieldR(){
            this.inputFNR.clearField();
            this.inputLNR.clearField();
            this.inputPhone.clearField();
            this.inputUNR.clearField();
            this.inputEmail.clearField();
            this.inputBVN.clearField();
            this.inputPWR.clearField();
            this.inputPWR2.clearField();
            this.errUN.addCustomStyle(Width(0,'px'));
            this.errEm.addCustomStyle(Width(0,'px'));
            this.errBVN.addCustomStyle(Width(0,'px'));
            this.errPs.addCustomStyle(Width(0,'px'));
            this.errPsC.addCustomStyle(Width(0,'px'));
            this.errFN.addCustomStyle(Width(0,'px'));
            this.errLN.addCustomStyle(Width(0,'px'));
            this.errPhone.addCustomStyle(Width(0,'px'));
        }
        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    if (e.getSource()=== this.submitR){
                        if(!this.submitR.isDisabled()){
                            this.submitR.turnOff();
                            this.submitR.fadeIn();
                            this.sendR(this.packageR(), (e)=>{
                                this.submitR.fadeOut();
                                this.body.addCustomStyle(Width(350,'px'));
                                this.bodyR.addCustomStyle(Width(0));
                                this.image.addCustomStyle(Width(350,'px'));
                                this.clearInputFieldR();
                                this.toast("Registration Successful!")
                            }, (e)=>{
                                this.submitR.fadeOut();
                                this.toastR("Error registering User!")
                            },'register')
                        }
                    }
                    if (e.getSource()=== this.submit){
                        if(!this.submit.isDisabled()){
                            this.submit.turnOff();
                            this.submit.fadeIn();
                            this.sendR(this.packageL(), (e)=>{
                                this.submit.fadeOut();
                                document.cookie = "sk="+e['sk'];
                                window.location.href = "/webapp";

                            }, (e)=>{
                                this.submit.fadeOut();
                                this.toast("Error logging you in!")
                            },'login')
                        }
                    }
                    if(e.getSource() === this.closeIcon || e.getSource() === this.closeIconR){
                        this.addCustomStyle(
                            [
                                Height(0,'vh'),
                                ZIndex(0),
                                Opacity(0),
                            ]
                        );
                    }
                    if (e.getSource() === this.nay) {
                        this.body.addCustomStyle(Width(0));
                        this.bodyR.addCustomStyle(Width(450, 'px'));
                        this.image.addCustomStyle(Width(250, 'px'));
                    }
                    if (e.getSource() === this.nayR){
                        this.body.addCustomStyle(Width(350,'px'));
                        this.bodyR.addCustomStyle(Width(0));
                        this.image.addCustomStyle(Width(350,'px'));
                    }
                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() instanceof HInput){
                e.getSource().addCustomStyle(
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)"))
            }
            if(e.getSource() === this.closeIcon || e.getSource() === this.closeIconR){
                e.getSource().domElement.src = closeIcon2
            }
            if(e.getSource() === this.nay || e.getSource() === this.forgotPassword || e.getSource() === this.nayR || e.getSource() === this.forgotPasswordR){
                e.getSource().addCustomStyle(Color(colorScheme.getPrimaryColor()))
            }

        }
        mouseOver(e){
            if(e.getSource() instanceof HInput){
                e.getSource().addCustomStyle(
                    Border("1px","solid", "#"+colorScheme.getDenaryColor()))
            }
            if(e.getSource() === this.closeIcon || e.getSource() === this.closeIconR){
                e.getSource().domElement.src = closeIcon
            }
            if(e.getSource() === this.nay || e.getSource() === this.forgotPassword || e.getSource() === this.nayR || e.getSource() === this.forgotPasswordR){
                e.getSource().addCustomStyle(Color(colorScheme.getBlackColor()))
            }
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }

    class MainView extends HDivision{
        constructor() {
            super('mainView');
            WINDOW.addComponent(this);
            WINDOW.addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
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
            window.addEventListener('scroll', () => {
                this.scrolled();
            });
            window.addEventListener('popstate', () => {
                this.switchToPage2(window.location.pathname)
            });
            this.current = null;
            this.start();
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(e){
            if (screen.width >= 1920){

                this.d1920();
                return;
            }
            if (screen.width >= 1566){


                this.d1566();
                return;
            }
            if (screen.width >= 1536){


                this.d1536();
                return;
            }
            if (screen.width >= 1366){
                this.d1366();
                return;
            }
            if (screen.width >= 1024){


                this.d1024();
                return;
            }
            if (screen.width >= 768){


                this.d768();
                return;
            }
            if (screen.width >= 540){


                this.d540();
                return;
            }
            if (screen.width >= 414){


                this.d414();
                return;
            }
            if (screen.width >= 375){


                this.d375();
                return;
            }
            if (screen.width >= 360){


                this.d360();
                return;
            }
            this.d320();
        };
        d1920(){

            this.d1366()
        }
        d1566(){
            this.d1366()

        }
        d1536(){
            this.d1366()

        }
        d1366(){
            this.header
                .addCustomStyle([
                    Height(130, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(20),
                    Display('block')
                ]);
            this.header2.addCustomStyle([
                Height(130, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Margin(0),
                Padding(0),
                ZIndex(2),
                Display('block')
            ]);

            this.footer2.addCustomStyle([
                Display("block"),
                Margin(0,'px').setTop(15),
                Height(60, 'vh'),
                Width(100,'vw'),
                OverflowY("scroll"),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Position(),
                Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                ZIndex(0),
                Opacity(0),
                Transition("all","1500ms","ease")
            ]);

            this.footer3.addCustomStyle([
                Display("block"),
                Height(10, 'px'),
                Width(100,'vw'),
                OverflowY("scroll"),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Position(),
                Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                ZIndex(0),
            ]);
            this.footerPanel.addCustomStyle([
                Height(65, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Padding(0),
                Position("fixed"),
                PositionBottom(0,'px'),
                ZIndex(20)
            ]);
            this.logoArea.addCustomStyle(
                [
                    Height(50, 'px'),
                    Width(300, 'px'),
                    Margin(0, 'px').setTop(10).setLeft(20),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor()),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN),
                    Display('block')
                ]);
            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Margin(0, "px").setTop(5).setRight(5)
            ]);
            this.logoImage.addCustomStyle(
                Width(40,'px'),
                Height(40,'px'),
                BorderRadius(20),
                Display("inline"),
                Float("right")
            );
            this.navigation.addCustomStyle(([
                Height(30, 'px'),
                Width(95, 'vw'),
                Padding(0,"px").setTop(12).setLeft(10),
                Margin(0,'px').setTop(10).setLeft(100).setRight(18),
                BorderRadius(20, 'px'),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.notice.addCustomStyle([
                    Position("absolute"),
                    Display("inline"),
                    Float("right")
                ]
            );
            this.notice2.addCustomStyle([
                    Position("absolute"),
                    PositionTop(30,'px'),
                    PositionRight(30,'px'),
                    Display("inline"),
                    Float("right")
                ]
            );


        }

        d1024(){
            this.header
                .addCustomStyle([
                    Height(130, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(20),
                    Display('block')
                ]);
            this.header2.addCustomStyle([
                Height(130, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Margin(0),
                Padding(0),
                ZIndex(2),
                Display('block')
            ]);

            this.footer2.addCustomStyle([
                Display("block"),
                Margin(0,'px').setTop(15),
                Height(60, 'vh'),
                Width(100,'vw'),
                OverflowY("scroll"),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Position(),
                Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                ZIndex(0),
                Opacity(0),
                Transition("all","1500ms","ease")
            ]);

            this.footer3.addCustomStyle([
                Display("block"),
                Height(10, 'px'),
                Width(100,'vw'),
                OverflowY("scroll"),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Position(),
                Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                ZIndex(0),
            ]);
            this.footerPanel.addCustomStyle([
                Height(65, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Padding(0),
                Position("fixed"),
                PositionBottom(0,'px'),
                ZIndex(20)
            ]);
            this.logoArea.addCustomStyle(
                [
                    Height(50, 'px'),
                    Width(300, 'px'),
                    Margin(0, 'px').setTop(10).setLeft(20),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor()),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN),
                    Display('block')
                ]);
            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Margin(0, "px").setTop(5).setRight(5)
            ]);
            this.logoImage.addCustomStyle(
                Width(40,'px'),
                Height(40,'px'),
                BorderRadius(20),
                Display("inline"),
                Float("right")
            );
            this.navigation.addCustomStyle(([
                Height(30, 'px'),
                Width(95, 'vw'),
                Padding(0,"px").setTop(12).setLeft(10),
                Margin(0,'px').setTop(10).setLeft(100).setRight(18),
                BorderRadius(20, 'px'),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.notice.addCustomStyle([
                    Position("absolute"),
                    Display("inline"),
                    Float("right")
                ]
            );
            this.notice2.addCustomStyle([
                    Position("absolute"),
                    PositionTop(30,'px'),
                    PositionRight(30,'px'),
                    Display("inline"),
                    Float("right")
                ]
            );

        }
        d768(){

            this.d1366()
        }
        d540(){

            this.header
                .addCustomStyle([
                    Height(130, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(20),
                    Display('block')
                ]);
            this.header2.addCustomStyle([
                Height(130, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Margin(0),
                Padding(0),
                ZIndex(2),
                Display('block')
            ]);

            this.footer2.addCustomStyle([
                Display("block"),
                Margin(0,'px').setTop(15),
                Height(60, 'vh'),
                Width(100,'vw'),
                OverflowY("scroll"),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Position(),
                Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                ZIndex(0),
                Opacity(0),
                Transition("all","1500ms","ease")
            ]);

            this.footer3.addCustomStyle([
                Display("block"),
                Height(10, 'px'),
                Width(100,'vw'),
                OverflowY("scroll"),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Position(),
                Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                ZIndex(0),
            ]);
            this.footerPanel.addCustomStyle([
                Height(65, 'px'),
                Width(100,'vw'),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Padding(0),
                Position("fixed"),
                PositionBottom(0,'px'),
                ZIndex(20)
            ]);
            this.logoArea.addCustomStyle(
                [
                    Height(50, 'px'),
                    Width(300, 'px'),
                    Margin(0, 'px').setTop(10).setLeft(20),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor()),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN),
                    Display('block')
                ]);
            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Margin(0, "px").setTop(5).setRight(5)
            ]);
            this.logoImage.addCustomStyle(
                Width(40,'px'),
                Height(40,'px'),
                BorderRadius(20),
                Display("inline"),
                Float("right")
            );
            this.navigation.addCustomStyle(([
                Height(30, 'px'),
                Width(95, 'vw'),
                Padding(0,"px").setTop(12).setLeft(10),
                Margin(0,'px').setTop(10).setLeft(20),
                BorderRadius(20, 'px'),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.notice.addCustomStyle([
                    Position("absolute"),
                    Display("inline"),
                    Float("right")
                ]
            );
            this.notice2.addCustomStyle([
                    Position("absolute"),
                    PositionTop(30,'px'),
                    PositionRight(30,'px'),
                    Display("inline"),
                    Float("right")
                ]
            );
            this.loader.getLoader().addCustomStyle(
                PositionLeft(55,'vw')
            )
        }
        d414(){
            this.header
                .addCustomStyle([
                    Height(110, 'px'),
                    Width(screen.width,'px'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    Margin(0),
                    Padding(0),
                    Position("fixed"),
                    ZIndex(20),
                    Display('block')
                ]);
            this.header2.addCustomStyle([
                Height(100, 'px'),
                Width(screen.width,'px'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                Margin(0),
                Padding(0),
                ZIndex(2),
                Display('block')
            ]);

            this.footer2.addCustomStyle([
                Display("none"),
                Margin(0,'px').setTop(15),
                Height(60, 'vh'),
                Width(screen.width,'px'),
                OverflowY("scroll"),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Position(),
                Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                ZIndex(0),
                Opacity(0),
                Transition("all","1500ms","ease")
            ]);

            this.footer3.addCustomStyle([
                Display("none"),
                Height(10, 'px'),
                Width(100,'vw'),
                OverflowY("scroll"),
                OverflowX("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Position(),
                Padding(0,'%').setTop(5).setRight(15).setLeft(15),
                ZIndex(0),
            ]);
            this.footerPanel.addCustomStyle([
                Height(65, 'px'),
                Width(window.innerWidth,'px'),
                BFVisibilty(),
                BackgroundColor(colorScheme.getTertiaryColor()),
                Padding(0),
                Position("fixed"),
                PositionBottom(0,'px'),
                ZIndex(20)
            ]);
            this.logoArea.addCustomStyle(
                [
                    Height(50, 'px'),
                    Width(300, 'px'),
                    Margin(0, 'px').setTop(10).setLeft(20),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    Color(colorScheme.getPrimaryColor()),
                    Float('left'),
                    Overflow(OVERFLOW.HIDDEN),
                    Display('block')
                ]);
            this.logoText.addCustomStyle([
                FontWeight(FONTWEIGHT.BOLD),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(25,'px'),
                Display("inline"),
                Float("left"),
                Margin(0, "px").setTop(5).setRight(5)
            ]);
            this.logoImage.addCustomStyle(
                Width(40,'px'),
                BorderRadius(20),
                Display("inline"),
                Float("right")
            );
            this.navigation.addCustomStyle(([
                Height(30, 'px'),
                Width(screen.width-50, 'px'),
                Padding(0,"px").setTop(12),
                Margin(0,'px').setTop(10).setLeft(15),
                BorderRadius(20, 'px'),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Display('block'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            this.notice.addCustomStyle([
                    Position("absolute"),
                    Display("inline"),
                    Float("right")
                ]
            );
            this.notice2.addCustomStyle([
                    Position("absolute"),
                    PositionTop(30,'px'),
                    PositionRight(30,'px'),
                    Display("inline"),
                    Float("right")
                ]
            );
            this.loader.getLoader().addCustomStyle(
                PositionLeft(60,'vw')
            )

        }
        d375(){
            this.d414();

        }
        d360(){
            this.d414();

        }
        d320(){
            this.d414();
            this.loader.getLoader().addCustomStyle(
                PositionLeft(60,'vw'),
            )

        }


        start() {


            this.initTopPanelsWS();
            this.initHeaderWS();
            this.setUpFooterWS();
            this.initPagesWS();

            let path = window.location.pathname.toLowerCase();
            this.switchToPage(path);
        }
        initPagesWS(){
            this.homeP = new Home(this);
            this.servicesP = new Services(this);
            this.aboutUsP = new AboutUs(this);
            this.resourceCentreP = new ResourceCentre(this);
            this.contactUsP = new ContactUs(this);

            this.body.addComponent([
                this.homeP,
                this.servicesP,
                this.aboutUsP,
                this.resourceCentreP,
                this.contactUsP
            ])
        }

        addToBody(panel){
            this.body.addComponent(panel)
        }
        switchToPage(path){
            path.replace("localhost","");
            path = path.toLowerCase().replace(/\s+/g,'');
            switch (path){
                case "":
                {
                    this.refreshBody(this.homeP,"/");
                    break;
                }
                case "/services":
                {
                    this.refreshBody(this.servicesP,path);
                    break;
                }
                case "/newsandmedia":
                {
                    this.refreshBody(this.resourceCentreP,path);
                    break;
                }
                case "/jdpm":
                {
                    this.refreshBody(this.resourceCentreP,path);
                    break;
                }
                case "/services/overdrafts":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/agbajowo":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/agriculturallending":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/assetfinancing":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/basiri":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/kajolaloanscheme":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/dca":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/lpo(localpurchaseorder)financing":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/projectfinancing":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/stockfinance":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/services/termloans":
                {
                    this.refreshBody(pages[path],path);
                    break;
                }
                case "/aboutus":
                {
                    this.refreshBody(this.aboutUsP,path);
                    break;
                }
                case "/resourcecentre":
                {
                    this.refreshBody(this.resourceCentreP,path);
                    break;
                }
                case "/contactus":
                {
                    this.refreshBody(this.contactUsP,path);
                    break;
                }

                default:
                {
                    console.log(path)
                    if(path.substr(0,8) === "/profile"){
                        if (pages[path]){
                            this.refreshBody(pages[path],path);
                            break;
                        }
                    }
                    this.refreshBody(this.homeP,"/");
                    break;
                }
            }
        }
        switchToPage2(path){
            path.replace("localhost","");
            path = path.toLowerCase().replace(/\s+/g,'');
            switch (path){
                case "":
                {
                    this.refreshBody2(this.homeP,"/");
                    break;
                }
                case "/services":
                {
                    this.refreshBody2(this.servicesP,path);
                    break;
                }
                case "/services/overdrafts":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/agbajowo":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/agriculturallending":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/assetfinancing":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/basiri":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/kajolaloanscheme":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/dca":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/lpo(localpurchaseorder)financing":
                {
                    this.refreshBody2(pages[path.replace(/\s+/g,'')],path);
                    break;
                }
                case "/services/projectfinancing":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/stockfinance":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/services/termloans":
                {
                    this.refreshBody2(pages[path],path);
                    break;
                }
                case "/aboutus":
                {
                    this.refreshBody2(this.aboutUsP,path);
                    break;
                }
                case "/resourcecentre":
                {
                    this.refreshBody2(this.resourceCentreP,path);
                    break;
                }
                case "/contactus":
                {
                    this.refreshBody2(this.contactUsP,path);
                    break;
                }

                default:
                {
                    if(path.substr(0,8) === "/profile"){
                        if (pages[path]){
                            this.refreshBody(pages[path],path);
                            break;
                        }
                    }
                    this.refreshBody2(this.homeP,"/");
                    break;
                }
            }
        }

        /**
         *
         * @param page
         * @param path
         * @param title
         */
        refreshBody(page,path,title) {
            if (this.current != null || this.current !== page) {
                try{
                    this.current.addCustomStyle(Display('none'));
                    window.clearInterval(this.interval);
                    window.clearTimeout(this.timeout);
                    loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, path.replace(/\s+/g,''));
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)
                }
                catch (e){
                    loader.fadeIn();
                    window.scrollTo(0, 0)
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, path.replace(/\s+/g,''));
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)

                }
            }
        }

        /**
         *
         * @param page
         * @param path
         * @param title
         */
        refreshBody2(page,path,title) {
            if (this.current != null || this.current !== page) {
                try{
                    this.current.addCustomStyle(Display('none'));
                    window.clearInterval(this.interval);
                    window.clearTimeout(this.timeout);
                    loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)
                }
                catch (e){
                    loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, "http://ammilmfi.com"+path.replace(/\s+/g,''));
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)

                }
            }
        }

        initTopPanelsWS(){
            this.header = Division('header');
            this.header2 = Division('header2');
            this.body = Division('bodyP');
            this.footer2 = Division('footer2');

            this.footer3 = Division('footer3');
            this.footerPanel = Division('footerPanel');

            this.loginPage = new Login("login");
            this.addComponent([this.loginPage,this.header, this.header2, this.body, this.footer2,this.footer3,this.footerPanel])
        }
        initHeaderWS(){
            this.initLogoWS();
            this.initNavWS()
        }
        initLogoWS(){
            this.logoArea = Division('logoArea');
            this.logoText = Paragraph('logoText').setTextContent("AmmilMFI");
            this.logoImage= new HImage("image_"+this.id, "/getLogo","");

            this.logoArea.addComponent([this.logoText, this.logoImage]);
            this.header.addComponent(this.logoArea);


        }
        initNavWS(){
            this.navigation = Division('navigation');
            this.notice = new NoticeM('notice', "Loan made easy with AMMIL Microfinance Institution.     " +
                "At AMMIL Microfinance Institution, getting loan is very easy with low interest rates and affordable collateral.    " +
                "Subscribe to the Fixed Deposit Accounts with AMMIL Microfinance Institution and earn high interest rates.     " +
                "Sieze the opportunity to save funds that you do not need immediately and in addition, generate high interest on it.  "
                ,2720);
            this.notice2 = new NoticeM('notice2', "Please note that this website is under construction, our IT team are working tirelessly to build the best for you. Thank you."
                ,1000);
            this.header.addComponent([this.navigation/*, this.notice*/, this.notice2]);

            let home = new NavLink("home", "Home","/",this, 60);
            this.servicesN = new NavLink("servicesN", "Products","/services",this, 80);
            this.servicesDD = new NavDropDown('servicesDrop',
                [
                    new NavLinkDD("dcaNL", "DCA","/services/dca",this, 140),
                    new NavLinkDD("stfinNL", "Stock Finance","/services/stockfinance",this, 140),
                    new NavLinkDD("asfinNL", "Asset Financing","/services/assetfinancing",this, 140),
                    new NavLinkDD("profinNL", "Project Financing","/services/projectfinancing",this, 140),
                    new NavLinkDD("basiriNL", "Basiri","/services/basiri",this, 140),
                    new NavLinkDD("lpoNL", "LPO Financing","/services/lpo(localpurchaseorder)financing",this, 140),
                    new NavLinkDD("agbajowoNL", "Agbajowo","/services/agbajowo",this, 140),
                    new NavLinkDD("agricLendNL", "Agricultural Lending","/services/agriculturallending",this, 140),
                    new NavLinkDD("kajolaNL", "Kajola Loan Scheme","/services/kajolaloanscheme",this, 140),

                ],this,180,320);
            let aboutUs = new NavLink("aboutUs", "About Us","/aboutus",this, 90);
            this.resourceCnt = new NavLink("rsCtr", "Resource Centre","/resourcecentre",this, 160);
            this.resourceCntDD = new NavDropDown('resourceCntDrop',
                [
                    new NavLinkDD("newsandmediaNl", "News and Media","/resourcecentre",this, 140),
                    new NavLinkDD("jdpmNL", "JDPM","/resourcecentre",this, 140),

                ],this,180,77);
            let contactUs = new NavLink("contactUs","Contact","/contactus",this, 70);
            this.collaterals = new NavLink("collaterals","Staff Portal","http://collaterals.ammilmfi.com",this, 120);
            this.servicesN.addComponent(this.servicesDD);
            this.resourceCnt.addComponent(this.resourceCntDD);

            this.navigation.addComponent([home,this.servicesN,aboutUs,this.resourceCnt,contactUs,this.collaterals])


        }
        setUpFooterWS(){
            this.aboutUs = new FooterSection('fAboutUs', "About Us");
            this.aboutUs.addCustomStyle([
                Margin(0).setRight(5)
            ]);
            this.covid19 = new FooterSection('fCovid19', "Covid 19")
            this.covid19.addCustomStyle([
                Margin(0).setRight(5)
            ]);
            this.contactUs = new FooterSection('fcontactUs', "Contact Us");

            this.contactHO = new Contact('contactHO', "Head Office");
            this.contactHO.setAddress("AMMIL Building, Opp. Labake Store, Owode, Oyo, Oyo State.")
            this.contactHO.setPhone("08134380797, 08077688333");
            this.contactHO.setEmail("info@ammilmfi.com");
            this.contactIW = new Contact('contactIW', "Iwere-Ile Branch")
            this.contactIW.setAddress("Oke Asunnara Area, Opp. Town Hall, Iwere Ile, Oyo State.")
            this.contactIW.setPhone("08137449872");
            this.contactIW.setEmail("");
            this.contactSK = new Contact('contactSK', "Saki Branch")
            this.contactSK.setAddress("26/27, James Koleoso Shopping Complex, Kolawole Area, Saki, Oyo State.")
            this.contactSK.setPhone("08067293082");
            this.contactSK.setEmail("");
            this.contactOG = new Contact('contactOG', "Ogbomoso Branch")
            this.contactOG.setAddress("St. Ferdinand Catholic Church Shopping Complex, Ogbomoso, Oyo State.")
            this.contactOG.setPhone("07040269641");
            this.contactOG.setEmail("");
            this.contactIG = new Contact('contactIG', "Igbeti Branch")
            this.contactIG.setAddress("AMMIL Office, Ibukun-Olu Hospital Compound, Ago-Are, Igbeti, Oyo State.")
            this.contactIG.setPhone("08137449473");
            this.contactIG.setEmail("");
            this.contactUs.addComponent([this.contactHO, this.contactIW ,this.contactSK,
                this.contactOG, this.contactIG]);
            this.covid19.addComponent([
                Anchor('covid19WS', "").setTextContent("Resources").addCustomStyle([
                    Color('ffffff'),
                    TextDecoration(TEXTDECORATION.NONE),
                    Display("block")
                ]),

            ]);
            this.aboutUs.addComponent([
                Paragraph("abTextWS").setTextContent("We are a microfinance institution dedicated to the growth of all MSEs and SMEs in the community at large").addCustomStyle(
                    [
                        Width(150, "px"),
                        Margin(0,'px').setBottom(50)
                    ]
                ),
                new NewsLetterRegister("nLWS", this)
            ]);

            this.footer2.addComponent([this.aboutUs, this.covid19, this.contactUs]);

            this.easeIn(this.footer2);
            this.footerPanel.addComponent(new FooterPanel("fWS"));
        }

        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    try{
                        if(e.getSource() !== this.collaterals.anchor){
                            e.getWindowEvent().preventDefault();
                            this.switchToPage(e.getSource().getLink());
                        }else{
                            window.open(e.getSource().getLink());
                        }

                    }
                    catch(ex){

                    }
                }
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    [
                        Height(0,'px'),
                        Padding(0,'px').setTop(0).setBottom(0),
                    ]
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    [
                        Height(0,'px'),
                        Padding(0,'px').setTop(0).setBottom(0),
                    ]
                )
            }
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    Color(colorScheme.getPrimaryColor())
                ]);
                e.getSource().domElement.style.boxShadow="0px 0px 0px 0 rgba(0, 0, 0, 0.25)," +
                    "0px 0px 0px 0 rgba(255, 255, 255, 0.3)";
            }
            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(13,'pt')
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
            if(e.getSource() instanceof NavLinkDD){
                e.getSource().addCustomStyle([
                    Color(colorScheme.getDenaryColor())
                ]);
                e.getSource().domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                    "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
            }
            if(e.getSource() === this.servicesN){
                this.servicesDD.addCustomStyle(
                    [
                        Height(this.servicesDD.getHeight(),'px'),
                        Padding(0,'px').setTop(1).setBottom(0),
                    ]
                )
            }
            if(e.getSource() === this.resourceCnt){
                this.resourceCntDD.addCustomStyle(
                    [
                        Height(this.resourceCntDD.getHeight(),'px'),
                        Padding(0,'px').setTop(1).setBottom(0),
                    ]
                )
            }

            if(e.getSource() instanceof NavLink){
                e.getSource().getAnchor().addCustomStyle([
                    FontSize(14,'pt')

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
        mouseUp(e){

        }
        easeIn(el){

            if (elementInView(el.domElement, 80)) {
                el.addCustomStyle(
                    Opacity(1)
                )
            } else {
                el.addCustomStyle(
                    Opacity(0)
                )
            }
        }
        scrolled(e){
            this.easeIn(this.footer2);

        }
    }
    (
        async () => {
            let p = await fetch("/getProfiles",{
                method: 'POST',
                headers:{
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body:''
            })
                .then(
                    response => response.json()
                )
                .then(
                    profiles => {
                        localStorage.setItem('profiles',JSON.stringify(profiles));
                        let mainView = new MainView();
                    })
                .catch(
                    error => {
                        console.error('',error)
                    }
                )
        })();













})();

function initMap(){
    const headOffice = {lat: 7.833214,lng: 3.933085}
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: headOffice,
    });
    const marker = new google.maps.Marker({
        position: headOffice,
        map: map,
    });
}
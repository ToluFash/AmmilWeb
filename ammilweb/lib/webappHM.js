


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
    }

    let colorScheme = new ColorScheme();
    let ECS = new EventColorScheme();
    colorScheme.setPrimaryColor('ff9b4d');
    colorScheme.setSecondaryColor('FFFFFF');
    colorScheme.setTertiaryColor('f2f7fb');
    colorScheme.setQuaternaryColor('dadcd5');
    colorScheme.setQuinaryColor('564F33');
    colorScheme.setSenaryColor('898253');
    colorScheme.setSeptenaryColor('9B9462');
    colorScheme.setNonaryColor('98e2f7');
    colorScheme.setDenaryColor('808080');
    class NavButton extends HDivision{
        constructor(id, text,icon,menu) {
            super(id);
            this.addCustomStyle([
                Width(250,'px'),
                Height(20,'px'),
                Padding(10,'px'),
                BorderRadius(10,'px'),
                Transition(),
                Position("relative")
            ])
            this.icon = new HImage(this.id+"icon",icon).addCustomStyle(
                [
                    Height(15,'px'),
                    Transition(),
                    Margin(0,'px').setRight(10),
                ]
            )
            this.paragraph = Paragraph(this.id+'_p').addCustomStyle(
                [
                    FontFamily("calibri"),
                    FontWeight(700),
                    FontSize(11,'pt'),
                    Height(20,'px'),
                    Color(colorScheme.getSecondaryColor()),
                    Cursor(),
                    Display("inline"),
                    Transition(),
                    Position("relative"),
                    PositionTop(-5,'px')

                ]
            ).setTextContent(text);
            this.addComponent([this.icon,this.paragraph])
            this.addMouseListener(this)
            this.menu = menu;
            try{
                this.addComponent(menu)
            }
            catch (e){

            }
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
            this.paragraph.addCustomStyle([
                FontSize(11,'pt'),
                Color(colorScheme.getSecondaryColor()),
            ]);
            this.icon.addCustomStyle(
                [
                    Height(15,'px'),
                    Margin(0,'px').setRight(10),


                ]
            );
            try{
                this.menu.addCustomStyle(
                    Height(0)
                )
            }
            catch (e){

            }

        }
        mouseOver(e){
            this.paragraph.addCustomStyle([
                FontSize(13,'pt'),
                Color(colorScheme.getDenaryColor())
            ])
            this.icon.addCustomStyle(
                [
                    Height(22,'px'),
                    Margin(0,'px').setRight(10),


                ]
            )
            try{
                this.menu.addCustomStyle(
                    Height(this.menu.getHeight())
                )
            }
            catch (e){

            }
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class GenButton extends HDivision{
        constructor(id, text,width,color1,color2) {
            super(id);
            this.addCustomStyle([
                Width(width,'px'),
                Height(15,'px'),
                Padding(5,'px').setTop(8),
                BorderRadius(2,'px'),
                BackgroundColor(color1),
                Transition(),
                Border("thin",BORDERSTYLE.INSET,colorScheme.getDenaryColor())
            ])
            this.color1=color1;
            this.color2=color2;
            this.paragraph = Paragraph(this.id+'_p').addCustomStyle(
                [
                    FontFamily("calibri"),
                    Width(width),
                    TextAlignment("center"),
                    FontWeight(500),
                    FontSize(10,'pt'),
                    Height(20,'px'),
                    Color(colorScheme.getSecondaryColor()),
                    Cursor(),
                    Display("inline"),
                    Transition(),
                    Position("relative"),
                    PositionTop(-5,'px')

                ]
            ).setTextContent(text);
            this.addComponent([this.paragraph])
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
    class BalanceBox extends HDivision{

        constructor(id) {
            super(id);
            this.addCustomStyle([
                Width(400,'px'),
                Height(80,'px'),
                FontFamily("calibri"),
                FontWeight(600)
            ]);
            this.sBal = Paragraph(this.id+"sBal").setTextContent("Savings:").addCustomStyle([
                TextAlignment("right"),
                Height(20,'px'),
                Margin(0,'px').setTop(5),
                Transition()
            ])
            this.cBal = Paragraph(this.id+"cBal").setTextContent("Current:").addCustomStyle([
                TextAlignment("right"),
                Height(20,'px'),
                Margin(0,'px').setTop(5),
                Transition()
            ])
            this.fBal = Paragraph(this.id+"fBal").setTextContent("Fixed Deposit:").addCustomStyle([
                TextAlignment("right"),
                Height(20,'px'),
                Margin(0,'px').setTop(5),
                Transition()
            ])
            this.addComponent([
                this.sBal,this.cBal,this.fBal
            ])
        }

        setSavingsBalance(bal){
            this.sBal.setTextContent("Savings: "+bal)
        }
        setCurrentBalance(bal){
            this.cBal.setTextContent("Current: "+bal)
        }
        setFixedDepositBalance(bal){
            this.fBal.setTextContent("Fixed Deposit: "+bal)
        }
    }

    class ListItem extends HDivision{
        constructor(id,title, bal) {
            super(id);
            this.addCustomStyle(
                [
                    Width(100),
                    Height(40,'px'),
                    FontFamily("calibri"),
                    Overflow("hidden"),
                    Margin(0,'px').setBottom(5).setLeft(20)
                ]
            )
            this.addMouseListener(this)
            this.item = Paragraph(this.id+"_item").addCustomStyle([
                FontWeight(500),
                Margin(0,'px').setTop(5),
                FontSize(10,'pt'),
                Height(20,'px'),
                Overflow("hidden")

            ]).setTextContent(title)
            this.date = Paragraph(this.id+"_date").addCustomStyle([
                FontWeight(300),
                Margin(0,'px'),
                FontStyle("italic"),
                FontSize(9,'pt'),
            ]).setTextContent(bal)

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
    class ListBox extends HDivision{
        constructor(id,title="Loans") {
            super(id);
            this.addCustomStyle([
                Height(250,'px'),
                Width(300,'px'),
                Overflow("hidden"),
                Margin(0,'px').setLeft(30).setTop(20),
                Float("left"),
                Position("relative"),
                Border("thin","solid","#"+colorScheme.getQuaternaryColor()),
                BorderRadius(5,'px')
            ])
            this.center =Division(this.id+"_center").addCustomStyle([
                Width(300,'px'),
                Height(40*8,'px'),
                Position(),
                Float("left"),
                Overflow("hidden"),
                Transition()
            ])
            this.container = Division(this.id+"_con1").addCustomStyle([
                Width(300,'px'),
                Height(180,'px'),
                Position("absolute"),
                PositionTop(this.position,'px'),
                Overflow("hidden"),
                Transition()
            ])
            this.center.addComponent(this.container)
            this.top = Division(this.id+"_top").addCustomStyle([
                Width(100),
                Height(40,'px'),
            ]);
            this.title =Paragraph(this.id+"_title").setTextContent(title).addCustomStyle(
                [
                    Position(),
                    PositionTop(10,'px'),
                    Display("inline"),
                    FontFamily("calibri"),
                    FontSize(14,'pt'),
                    Padding(0,'px').setLeft(15).setRight(15),
                ]
            )
            this.top.addComponent([this.title]);
            this.bottom = Division(this.id+"_bottom").addCustomStyle([
                Width(100),
                Height(30,'px'),
                Position("absolute"),
                PositionBottom(0)
            ]);
            this.text1 = Paragraph(this.id+"t1").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(10),
                Float("right")

            ]).setTextContent("More...")
            this.pos = Division(this.id+"_posD").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Margin(0,'px').setLeft(200),
                Display("inline")
            ])
            this.pos.addComponent([this.text1])

            this.bottom.addComponent([this.pos])

            this.addComponent([
                this.top,this.center,this.bottom
            ])
        }

        addItem(item){
            this.container.addComponent(item)
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


    class WebApp  extends HDivision{
        constructor() {
            super('app');
            WINDOW.addComponent(this);
            WINDOW.addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                Height(100, 'vh'),
                Width(100,'vw'),
                Padding(0),
                Margin(0),
                Overflow('hidden')
            ]);
            this.addCustomStyle([
                Width(100,'vw'),
                Height(100,'vh'),
                Overflow("hidden")
            ])
            //Top Panels
            this.navPanel = Division('navPanel').addCustomStyle([
                Width(20,'vw'),
                Height(100,'%'),
                BackgroundColor(colorScheme.getPrimaryColor()),
                BackgroundImage("/getWebAppBG"),
                Display("inline"),
                Position(),
                Float("left")
            ])
            this.mainPanel=Division("mainPanel").addCustomStyle([
                Width(80),
                Height(100,'vw'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Position(),
                Float("left")
            ])
            //Nav Panel
            this.companyBar = Division("cBar").addCustomStyle([
                Width(300,'px'),
                Height(100,'px'),
                Overflow("hidden"),
                Margin(0,'px').setTop(10)
            ])
            this.cLogo = Division("cLogo").addCustomStyle([
                Width(80,'px'),
                Height(80,'px'),
                BorderRadius(50),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setRight(5)
            ])
            this.cName = Paragraph("cName").addCustomStyle([
                Width(180,'px'),
                Height(100,'px'),
                Display("inline"),
                Float("left"),
                FontFamily("calibri"),
                FontWeight(700),
                FontSize(13),
                Color(colorScheme.getSecondaryColor())
            ]).setTextContent("AMMIL Microfinance Bank");

            this.navBar= Division('navBar').addCustomStyle([
                Float("right")

            ]);
            this.navCreditOfficers = new NavButton('navCrOff','Credit Officers',accIcon);
            this.navLoans = new NavButton('navLoans','Loans',loanIcon);
            this.navApp = new NavButton('navApp','Applications',loanIcon);
            this.navClients = new NavButton('navClients','Clients',loanIcon);

            this.navBar.addComponent([
                this.navLoans,this.navApp,this.navCreditOfficers,this.navClients
            ])

            this.companyBar.addComponent([
                this.cLogo,this.cName
            ])

            this.navPanel.addComponent([
                this.companyBar, this.navBar])



            //Main Panel
            this.header = Division("header").addCustomStyle([
                Width(100),
                Height(90,'px'),
                Overflow("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor())
            ]);
            this.profileBar = Division("pBar").addCustomStyle([
                Width(260,'px'),
                Height(100,'px'),
                Overflow("hidden"),
                Margin(0,'px').setTop(10),
                Position("relative"),
                Float("right"),
                Color(colorScheme.getDenaryColor())
            ]);
            this.userPic = Division("userPic").addCustomStyle([
                Width(70,'px'),
                Height(70,'px'),
                BorderRadius(50),
                BackgroundColor(colorScheme.getDenaryColor()),
                Display("inline"),
                Position(),
                Float('left')
            ]);
            this.userInfo = Division("userInfo").addCustomStyle([
                Height(50,'px'),
                Width(130, 'px'),
                FontFamily("calibri"),
                Display("inline"),
                FontWeight(FONTWEIGHT.BOLD),
                FontSize(11,'pt'),
                Position(),
                Float('left')
            ]);

            this.userName = Paragraph('userName').addCustomStyle([
                Margin(0),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()


            ]).setTextContent("Fasugba Tolulope");
            this.setP = Paragraph('setP').addCustomStyle([
                Margin(0,'px').setTop(2),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()

            ]).setTextContent("Settings");
            this.logOut = Paragraph('logOut').addCustomStyle([
                Margin(0),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()
            ]).setTextContent("Log Out");
            this.userInfo.addComponent([this.userName,this.setP,this.logOut]);
            this.profileBar.addComponent([this.userPic, this.userInfo]);

            this.buttonsBar = Division("bBar").addCustomStyle(
                [
                    Width(500,'px'),
                    Height(100,'px'),
                    Overflow("hidden"),
                    Margin(0,'px'),
                    Position("relative"),
                    Float("left"),
                ]
            )
            this.btnApplyLoan = new GenButtonRounded("btnApplyLoan","Apply for a Loan", 90,ECS.getSuccess(),ECS.getSuccessDark()).addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(40)
            ])
            this.btnApplyContract = new GenButtonRounded("btnApplyContract","Apply for a Contract", 110,ECS.getDanger(),ECS.getDangerDark()).addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(40)
            ])

            this.buttonsBar.addComponent([
                this.btnApplyLoan,this.btnApplyContract
            ])

            this.header.addComponent([
                this.buttonsBar,this.profileBar
            ])
            //Body
            this.loanList = new ListBox("loanList","Active Loans");
            this.corP = new ListBox("corPList","Correspondences");
            this.servicedLoans = new ListBox("sLList","Serviced Loans");
                this.body = Division('bodyM').addCustomStyle([
                Width(100),
                Height(800,'px')
            ])
            this.loanList.addItem([
                new ListItem("l1","Kowope Loan @ 5% per annum", "$50,000")
            ])
            this.body.addComponent([
                this.loanList,
                this.corP,
                this.servicedLoans
            ])




            //Footer
            this.footer = Division("footer").addCustomStyle([
                Width(100),
                Height(80,'px'),
                Overflow("hidden"),
                Position("fixed"),
                PositionBottom(0,'px'),
            ])

            this.mainPanel.addComponent([
                this.header,this.body,this.footer
            ])

            this.addComponent([
                this.navPanel,this.mainPanel
            ])
        }
    }
    new WebApp();

})();
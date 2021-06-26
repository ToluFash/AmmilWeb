
(() => {

    let backgroundColors= [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(180, 159, 64, 0.2)',
        'rgba(180, 129, 64, 0.2)',
        'rgba(180, 129, 158, 0.2)',
        'rgba(180, 129, 255, 0.2)'
    ];

     let borderColors =  [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
         'rgba(180, 159, 64, 1)',
         'rgba(180, 129, 64, 1)',
         'rgba(180, 129, 158, 1)',
         'rgba(180, 129, 255, 1)'
    ];

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
    colorScheme.setPrimaryColor('2fa9ea');
    colorScheme.setSecondaryColor('FFFFFF');
    colorScheme.setTertiaryColor('f2f7fb');
    colorScheme.setQuaternaryColor('dadcd5');
    colorScheme.setQuinaryColor('564F33');
    colorScheme.setSenaryColor('898253');
    colorScheme.setSeptenaryColor('9B9462');
    colorScheme.setNonaryColor('98e2f7');
    colorScheme.setDenaryColor('808080');

    class User {
        $firstName;
        $lastName;
        $middleName;
        $userName;
        $email;
        $phoneNo;
        $bvn;

        constructor($firstName, $lastName, $middleName, $userName, $email, $phoneNo, $bvn) {
            this.$firstName = $firstName;
            this.$lastName = $lastName;
            this.$middleName = $middleName;
            this.$userName = $userName;
            this.$email = $email;
            this.$phoneNo = $phoneNo;
            this.$bvn = $bvn;
            console.log(this.$phoneNo)
        }


    }

    class BarChart extends HDivision{
        constructor(id,width,height, title="", labels=[], values=[], borderWidth=1) {
            super(id);
            this.canvas = new HCanvas(this.id+"_cvs");
            this.addComponent(this.canvas);
            this.addCustomStyle([
                Display("inline"),
                Float("left"),
                Margin(0,'px').setTop(10)
            ]);
            this.canvas.addCustomStyle([
                Display("block")
            ]);
            this.chart = new Chart(this.canvas.get2DContext(),
                {
                    type: 'bar',
                    data: {},
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: title
                            }
                        }
                    }
                }
                    );
            this.chart.render();
            this.set(title,labels,values,borderWidth);
            //this.setDimensions(width,height);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(){
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
            this.addCustomStyle([
                Width((screen.width-260)/2,'px'),
                Height((screen.width-260)/4,'px'),
            ]);

        }
        d1566(){

            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);

        }
        d1536(){
            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);


        }
        d1366(){
            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);

        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d1024(){
            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);

        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        setDimensions(width, height){
            this.canvas.width=width;
            this.canvas.height=height;
            this.chart.resize(width,height);
            this.repaint();
        }
        set(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                this.chart.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                this.chart.data.datasets=datasets;
                this.revalidate();
            }
            else throw new Error("Object not of type Array")
        }
        formDataSet(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                let data = {
                    type: 'bar',

                    data:{


                        },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        },
                        plugins: {
                            title: {
                                display: true,
                                text: title
                            }
                        },
                    }};
                data.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                data.data.datasets = datasets;
                return data;
            }
            else throw new Error("Object not of type Array")
        }

        revalidate(){
            this.chart.update('active');
        }
        repaint(){
            this.chart.render();
        }
        stop(){
            this.chart.stop()
        }
        clear(){
            this.chart.clear();
        }
        getImage(){
            this.chart.toBase64Image();
        }
        setVisibility(index, visibility){
            this.chart.setDatasetVisibility(index, visibility);
            this.chart.update();
        }
    }
    class LineChart extends HDivision{
        constructor(id,width,height, title="", labels=[], values=[], borderWidth=1) {
            super(id);
            this.canvas = new HCanvas(this.id+"_cvs");
            this.addCustomStyle([
                Display("inline"),
                Float("left"),
                Margin(0,'px').setTop(10)
            ]);
            this.addComponent(this.canvas);
            this.canvas.addCustomStyle([
                Display("block")
            ]);
            this.chart = new Chart(this.canvas.get2DContext(),
                {
                    type: 'line',
                    data: {},
                    options: {
                        responsive: true,
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        },
                        stacked: false,
                        plugins: {
                            title: {
                                display: true,
                                text: title
                            }
                        },
                        scales: {
                            y: {
                                type: 'linear',
                                display: true,
                                position: 'left',
                            },
                            y1: {
                                type: 'linear',
                                display: true,
                                position: 'right',

                                // grid line settings
                                grid: {
                                    drawOnChartArea: false, // only want the grid lines for one axis to show up
                                },
                            },
                        }
                    }
                }
                    );
            this.chart.render();
            this.set(title,labels,values,borderWidth);
            //this.setDimensions(width,height);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(){
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
            this.addCustomStyle([
                Width((screen.width-260)/2,'px'),
                Height((screen.width-260)/4,'px'),
            ]);

        }
        d1566(){

            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);

        }
        d1536(){
            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);


        }
        d1366(){
            this.addCustomStyle([
                Width((screen.width-250)/2,'px'),
                Height((screen.width-250)/4,'px'),
            ]);

        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d1024(){
            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);

        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        setDimensions(width, height){
            this.canvas.width=width;
            this.canvas.height=height;
            this.chart.resize(width,height);
            this.repaint();
        }
        set(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                this.chart.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                this.chart.data.datasets=datasets;
                this.revalidate();
            }
            else throw new Error("Object not of type Array")
        }
        formDataSet(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                let data = {
                    type: 'bar',

                    data:{


                        },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }};
                data.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                data.data.datasets = datasets;
                return data;
            }
            else throw new Error("Object not of type Array")
        }

        revalidate(){
            this.chart.update('active');
        }
        repaint(){
            this.chart.render();
        }
        stop(){
            this.chart.stop()
        }
        clear(){
            this.chart.clear();
        }
        getImage(){
            this.chart.toBase64Image();
        }
        setVisibility(index, visibility){
            this.chart.setDatasetVisibility(index, visibility);
            this.chart.update();
        }
    }
    class PieChart extends HDivision{

        constructor(id,width,height, title="", labels=[], values=[], borderWidth=1) {
            super(id);
            this.canvas = new HCanvas(this.id+"_cvs");
            this.addCustomStyle([
                Display("inline"),
                Float("left"),
                Margin(0,'px').setTop(15)
            ]);
            this.addComponent(this.canvas);
            this.canvas.addCustomStyle([
                Display("block")
            ]);
            this.chart = new Chart(this.canvas.get2DContext(),
                {
                    type: 'polarArea',
                    data: {},
                    options: {
                        responsive: true,
                        plugins: {
                            legend: {
                                position: 'top',
                            },
                            title: {
                                display: true,
                                text: title
                            }
                        }
                    }
                }
            );
            this.chart.render();
            this.set(title,labels,values,borderWidth);
            //this.setDimensions(width,height);
            this.componentResized();
            this.addComponentListener(this)
        }
        componentResized(){
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
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width((screen.width-250)/4,'px'),
                Height((screen.width-250)/8,'px'),
            ]);

        }
        d1566(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width((screen.width-250)/4,'px'),
                Height((screen.width-250)/8,'px'),
            ]);

        }
        d1536(){
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width((screen.width-250)/4,'px'),
                Height((screen.width-250)/8,'px'),
            ]);


        }
        d1366(){
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width((screen.width-250)/4,'px'),
                Height((screen.width-250)/8,'px'),
            ]);

        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d1024(){
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);

        }
        d768(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d540(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d414(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d375(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d360(){
            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        d320(){

            this.addCustomStyle([
                Padding(0,'px').setLeft((screen.width-250)/8)
                    .setRight((screen.width-250)/8),
                Width(screen.width-400,'px'),
                Height((screen.width-400)/2,'px'),
            ]);
        }
        setDimensions(width, height){
            this.canvas.width=width;
            this.canvas.height=height;
            this.chart.resize(width,height);
            this.repaint();
        }
        set(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                this.chart.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                this.chart.data.datasets=datasets;
                this.revalidate();
            }
            else throw new Error("Object not of type Array")
        }
        formDataSet(title,labels, values, borderWidth=1){
            if (labels instanceof Array && values instanceof Array && labels.length === values.length){
                let data = {
                    type: 'bar',

                    data:{


                    },
                    options: {
                        scales: {
                            y: {
                                beginAtZero: true
                            }
                        }
                    }};
                data.data.labels= labels;
                let datasets = [{}];
                datasets[0]['label']= title;
                datasets[0]['data']= values;
                datasets[0]['backgroundColor']=[];
                datasets[0]['borderColor']=[];
                datasets[0]['borderWidth']=borderWidth;
                let x = 0;
                while(x < labels.length){
                    datasets[0]['backgroundColor'].push(backgroundColors[x%backgroundColors.length]);
                    datasets[0]['borderColor'].push(borderColors[x%borderColors.length]);
                    x++;
                }
                data.data.datasets = datasets;
                return data;
            }
            else throw new Error("Object not of type Array")
        }

        revalidate(){
            this.chart.update('active');
        }
        repaint(){
            this.chart.render();
        }
        stop(){
            this.chart.stop()
        }
        clear(){
            this.chart.clear();
        }
        getImage(){
            this.chart.toBase64Image();
        }
        setVisibility(index, visibility){
            this.chart.setDatasetVisibility(index, visibility);
            this.chart.update();
        }
    }
    class NavButton extends HDivision{
        constructor(id, text,icon,menu,href,mouseListener) {
            super(id);
            this.addCustomStyle([
                Width(250,'px'),
                Height(20,'px'),
                Padding(10,'px'),
                BorderRadius(10,'px'),
                Transition(),
                Position("relative")
            ]);
            this.addMouseListener(mouseListener);
            this.href = href;
            this.icon = new HImage(this.id+"icon",icon).addCustomStyle(
                [
                    Height(15,'px'),
                    Transition(),
                    Margin(0,'px').setRight(10),
                ]
            );
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
            this.addComponent([this.icon,this.paragraph]);
            this.addMouseListener(this);
            this.menu = menu;
            try{
                this.addComponent(menu)
            }
            catch (e){

            }
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
            ]);
            this.icon.addCustomStyle(
                [
                    Height(22,'px'),
                    Margin(0,'px').setRight(10),


                ]
            );
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
            this.addCustomStyle(BorderRadius(20,'%'));

            this.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
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
            ]);
            this.cBal = Paragraph(this.id+"cBal").setTextContent("Current:").addCustomStyle([
                TextAlignment("right"),
                Height(20,'px'),
                Margin(0,'px').setTop(5),
                Transition()
            ]);
            this.fBal = Paragraph(this.id+"fBal").setTextContent("Fixed Deposit:").addCustomStyle([
                TextAlignment("right"),
                Height(20,'px'),
                Margin(0,'px').setTop(5),
                Transition()
            ]);
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
            );
            this.addMouseListener(this);
            this.item = Paragraph(this.id+"_item").addCustomStyle([
                FontWeight(500),
                Margin(0,'px').setTop(5),
                FontSize(10,'pt'),
                Height(20,'px'),
                Overflow("hidden")

            ]).setTextContent(title);
            this.date = Paragraph(this.id+"_date").addCustomStyle([
                FontWeight(300),
                Margin(0,'px'),
                FontStyle("italic"),
                FontSize(9,'pt'),
            ]).setTextContent(bal);

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
    class Transfers extends HDivision{

        constructor(frame) {
            super("transfers");
            this.frame = frame;

        }
    }

    class MyAccounts extends HDivision{

        constructor(frame) {
            super("myAccounts");
            this.frame = frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

        }
    }

    class PayBillsAirtime extends HDivision{

        constructor(frame) {
            super("payBillsAirtime");
            this.frame = frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

        }
    }

    class MyLoans extends HDivision{

        constructor(frame) {
            super("myLoans");
            this.frame = frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

        }
    }

    class Settings extends HDivision {

        constructor(frame) {
            super("settings");
            this.frame = frame;
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

        }
    }

    class Index extends HDivision{
        constructor(frame) {
            super("index");
            this.myAccountsList = new ListBox("cMyAccount","My Accounts");
            this.loanList = new ListBox("loanList","Loans");
            this.transactionsList = new ListBox("tranList","Transactions");
            this.myAccountsChart = new BarChart('myAccountsChart',558,600,
             "My Accounts",
                ["Savings Account", "Current Account", "Loan Account"],
                [100000, 250000,698452],
                1);
            this.myTransactionsChart = new LineChart('myTransactionsChart',558,600,
             "Transactions",
                ["Kowope", "Agbajowo", "Term Loan"],
                [100000, 250000,698452],
                1);
            this.myLoansChart = new LineChart('myLoansChart',558,600,
                "Repayment Schedule",
                ["Kowope", "Agbajowo", "Term Loan"],
                [100000, 250000,698452],
                1);
            this.myLoansChart2 = new PieChart('myLoansChart2',558,600,
                "My Loans",
                ["Kowope", "Agbajowo", "Term Loan"],
                [100000, 250000,698452],
                1);
            this.loanList.addItem([
                new ListItem("l1","Kowope Loan @ 5% per annum", "$50,000")
            ]);
            this.addCustomStyle([
                Display('none'),
                Transition("opacity", "1000")]);
            this.addComponent([
                this.myAccountsList, this.loanList, this.transactionsList, this.myAccountsChart,this.myTransactionsChart, this.myLoansChart, this.myLoansChart2
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
            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1566(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1536(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1366(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1280(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d1024(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d768(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d540(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d414(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d375(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d360(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
        d320(){

            this.addCustomStyle([
                Width(screen.width-250,'px'),
                Height(1200,'px')
            ]);
        }
    }

    class WebApp  extends HDivision{
        constructor() {
            super('app');
            WINDOW.addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                Height(100, 'vh'),
                Width(100,'vw'),
                Padding(0),
                Margin (0),
                Overflow('hidden')
            ]);
            this.addCustomStyle([
                Width(100,'vw'),
                Height(100,'vh'),
                Overflow("hidden")
            ]);
            WINDOW.addComponent(this);
            this.retrieveUser();
            window.addEventListener('popstate', () => {
                this.switchToPage2(window.location.pathname)
            });
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
            this.addCustomStyle([
                Width(screen.width,'px'),
                Height(screen.height,'px'),
                Overflow("hidden")
            ]);
            this.navPanel.addCustomStyle([
                Width(230,'px'),
                Height(100,'%'),
                BackgroundColor(colorScheme.getPrimaryColor()),
                //BackgroundImage("/getWebAppBG"),
                Display("inline"),
                Position(),
                Float("left")
            ]);
            this.mainPanel.addCustomStyle([
                Width(screen.width-230,'px'),
                Height(100,'vw'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Position(),
                Float("left")
            ]);
            //Nav Panel
            this.companyBar.addCustomStyle([
                Width(250,'px'),
                Height(100,'px'),
                Overflow("hidden"),
                Margin(0,'px').setTop(10)
            ]);
            this.cLogo.addCustomStyle([
                Width(80,'px'),
                Height(80,'px'),
                BorderRadius(50),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setRight(5).setLeft(5)
            ]);
            this.cName.addCustomStyle([
                Width(16,'px'),
                Height(100,'px'),
                Display("inline"),
                Float("left"),
                FontFamily("calibri"),
                FontWeight(700),
                FontSize(13),
                Color(colorScheme.getSecondaryColor())
            ]);

            this.navBar.addCustomStyle([
                Width(250,'px')
            ]);

            //Main Panel
            this.header.addCustomStyle([
                Width(100),
                Height(90,'px'),
                Overflow("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor())
            ]);
            this.profileBar.addCustomStyle([
                Width(260,'px'),
                Height(100,'px'),
                Overflow("hidden"),
                Margin(0,'px').setTop(10),
                Position("relative"),
                Float("right"),
                Color(colorScheme.getDenaryColor())
            ]);
            this.userPic.addCustomStyle([
                Width(70,'px'),
                Height(70,'px'),
                BorderRadius(50),
                BackgroundColor(colorScheme.getDenaryColor()),
                Display("inline"),
                Position(),
                Float('left')
            ]);
            this.userInfo.addCustomStyle([
                Height(50,'px'),
                Width(130, 'px'),
                FontFamily("calibri"),
                Display("inline"),
                FontWeight(FONTWEIGHT.BOLD),
                FontSize(11,'pt'),
                Position(),
                Float('left')
            ]);

            this.userName.addCustomStyle([
                Margin(0),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()
            ]);
            this.setP.addCustomStyle([
                Margin(0,'px').setTop(2),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()

            ]);
            this.logOut.addCustomStyle([
                Margin(0),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()
            ]);
            this.buttonsBar.addCustomStyle(
                [
                    Width(500,'px'),
                    Height(100,'px'),
                    Overflow("hidden"),
                    Margin(0,'px'),
                    Position("relative"),
                    Float("left"),
                ]
            );
            this.btnCreateAcc.addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(40)
            ]);
            this.btnApplyLoan.addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(40)
            ]);
            this.btnApplyContract.addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(40)
            ]);

            //Body
            this.body.addCustomStyle([
                Width(100),
                Height(920,'px')
            ]);

            //Footer
            this.footer.addCustomStyle([
                Width(100),
                Height(80,'px'),
                Overflow("hidden"),
                Position("fixed"),
                PositionBottom(0,'px'),
            ]);
            this.balBox.addCustomStyle([
                Position("absolute"),
                PositionRight(500,'px'),
                PositionBottom(0)

            ]);

        }
        d1566(){
            this.d1366()

        }
        d1536(){
            this.d1366()

        }
        d1366(){
            this.navPanel.addCustomStyle([
                Width(220,'px'),
                Height(100,'%'),
                BackgroundColor(colorScheme.getPrimaryColor()),
                //BackgroundImage("/getWebAppBG"),
                Display("inline"),
                Position(),
                Float("left")
            ]);
            this.mainPanel.addCustomStyle([
                Width(screen.width-220,'px'),
                Height(800,'px'),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Position(),
                Float("left")
            ]);
            //Nav Panel
            this.companyBar.addCustomStyle([
                Width(200,'px'),
                Height(100,'px'),
                Overflow("hidden"),
                Margin(0,'px').setTop(10)
            ]);
            this.cLogo.addCustomStyle([
                Width(80,'px'),
                Height(80,'px'),
                BorderRadius(50),
                BackgroundColor(colorScheme.getSecondaryColor()),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setRight(5)
            ]);
            this.cName.addCustomStyle([
                Width(100,'px'),
                Display("inline"),
                Float("left"),
                FontFamily("calibri"),
                FontWeight(700),
                FontSize(11),
                Color(colorScheme.getSecondaryColor())
            ]);

            this.navBar.addCustomStyle([
                Width(190,'px'),
            ]);

            //Main Panel
            this.header.addCustomStyle([
                Width(100),
                Height(90,'px'),
                Overflow("hidden"),
                BackgroundColor(colorScheme.getTertiaryColor())
            ]);
            this.profileBar.addCustomStyle([
                Width(260,'px'),
                Height(100,'px'),
                Overflow("hidden"),
                Margin(0,'px').setTop(10),
                Position("relative"),
                Float("right"),
                Color(colorScheme.getDenaryColor())
            ]);
            this.userPic.addCustomStyle([
                Width(70,'px'),
                Height(70,'px'),
                BorderRadius(50),
                BackgroundColor(colorScheme.getDenaryColor()),
                Display("inline"),
                Position(),
                Float('left')
            ]);
            this.userInfo.addCustomStyle([
                Height(50,'px'),
                Width(130, 'px'),
                FontFamily("calibri"),
                Display("inline"),
                FontWeight(FONTWEIGHT.BOLD),
                FontSize(11,'pt'),
                Position(),
                Float('left')
            ]);

            this.userName.addCustomStyle([
                Margin(0),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()
            ]);
            this.setP.addCustomStyle([
                Margin(0,'px').setTop(2),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()

            ]);
            this.logOut.addCustomStyle([
                Margin(0),
                Padding(0),
                Width(130, 'px'),
                TextAlignment('right'),
                Overflow("hidden"),
                Cursor()
            ]);
            this.buttonsBar.addCustomStyle(
                [
                    Width(500,'px'),
                    Height(100,'px'),
                    Overflow("hidden"),
                    Margin(0,'px'),
                    Position("relative"),
                    Float("left"),
                ]
            );
            this.btnCreateAcc.addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(40)
            ]);
            this.btnApplyLoan.addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(40)
            ]);
            this.btnApplyContract.addCustomStyle([
                Position(),
                Float("left"),
                Margin(10,'px').setTop(40)
            ]);

            //Body
            this.body.addCustomStyle([
                Width(100),
                Height(800,'px')
            ]);

            //Footer
            this.footer.addCustomStyle([
                Width(100),
                Height(80,'px'),
                Overflow("hidden"),
                Position("fixed"),
                PositionBottom(0,'px'),
            ]);
            this.balBox.addCustomStyle([
                Position("absolute"),
                PositionRight(500,'px'),
                PositionBottom(0)

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

         init(){
            //Top Panels
             this.loader = new Loader();

             this.navPanel = Division('navPanel');
             this.mainPanel=Division("mainPanel");
             //Nav Panel
             this.companyBar = Division("cBar");
             this.cLogo = Division("cLogo");
             this.cName = Paragraph("cName").setTextContent("AMMIL Microfinance Bank");

             this.navBar= Division('navBar');

             this.navHome= new NavButton('navHome','Home',accIcon,null, "/webapp",this);
             this.navTransfers = new NavButton('navTransfers','Transfers',accIcon,null, "/webapp/transfers",this);
             this.navMyAccounts = new NavButton('navMyAccounts','My Accounts',loanIcon,null, "/webapp/myaccounts",this);
             this.navPayBillsAirtime = new NavButton('navPayBills','Pay Bills/Buy Airtime',rfqIcon,null, "/webapp/paybillsairtime",this);
             this.navLoans = new NavButton('navLoans','My Loans',cAwardIcon,null, "/webapp/myloans",this);
             this.navSettings = new NavButton('navSettings','Settings',cAwardIcon,null, "/webapp/settings",this);

             this.navBar.addComponent([
                 this.navHome,this.navTransfers,this.navMyAccounts,this.navPayBillsAirtime,this.navLoans,this.navSettings
             ]);

             this.companyBar.addComponent([
                 this.cLogo,this.cName
             ]);

             this.navPanel.addComponent([
                 this.companyBar, this.navBar]);

             //Main Panel
             this.header = Division("header");
             this.profileBar = Division("pBar");
             this.userPic = Division("userPic");
             this.userInfo = Division("userInfo");

             this.userName = Paragraph('userName').setTextContent(this.user.$lastName+" "+this.user.$firstName);
             this.setP = Paragraph('setP').setTextContent("Settings");
             this.logOut = Paragraph('logOut').setTextContent("Log Out");
             this.userInfo.addComponent([this.userName,this.setP,this.logOut]);
             this.profileBar.addComponent([this.userPic, this.userInfo]);

             this.buttonsBar = Division("bBar");
             this.btnCreateAcc = new GenButtonRounded("btnCreateAcc","Create an Account", 100,ECS.getPrimary(),
                 ECS.getPrimaryDark());
             this.btnApplyLoan = new GenButtonRounded("btnApplyLoan","Apply for a Loan", 90,ECS.getSuccess(),
                 ECS.getSuccessDark());
             this.btnApplyContract = new GenButtonRounded("btnApplyContract","Apply for a Contract",
                 110,ECS.getDanger(),ECS.getDangerDark());

             this.buttonsBar.addComponent([
                 this.btnCreateAcc,this.btnApplyLoan,this.btnApplyContract
             ]);

             this.header.addComponent([
                 this.buttonsBar,this.profileBar
             ]);
             //Body
             this.body = Division('bodyM').addCustomStyle(OverflowY());

             //Footer
             this.footer = Division("footer").addCustomStyle([ZIndex(1000),
                 BackgroundColor(colorScheme.getTertiaryColor()
                 )]);
             this.navPanel.domElement.style.boxShadow="20px -1px 50px 0 rgba(255, 255, 255, 0.3)";
             this.header.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
                 "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";
             this.footer.domElement.style.boxShadow="0px -1px 16px 0 rgba(0, 0, 0, 0.25)," +
                 "-8px -8px 12px 0 rgba(255, 255, 255, 0.3)";
             this.balBox = new BalanceBox("bBox");
             this.footer.addComponent(this.balBox);

             this.mainPanel.addComponent([
                 this.loader,this.header,this.body,this.footer
             ]);

             this.addComponent([
                 this.navPanel,this.mainPanel
             ]);
             this.initPagesWS();
        }

        initPagesWS(){
            this.index = new Index(this);
            this.transfersP = new Transfers(this);
            this.myAccountsP = new MyAccounts(this);
            this.payBillsAirtimeP = new PayBillsAirtime(this);
            this.myLoansP = new MyLoans(this);
            this.settingsP = new Settings(this);

            this.body.addComponent([
                this.index,
                this.transfersP,
                this.myAccountsP,
                this.payBillsAirtimeP,
                this.myLoansP,
                this.settingsP
            ]);

        }

        async retrieveUser(){
            await this.send({'sk': this.getCookie('sk')},
                (e)=>{
                let content = JSON.parse(e['content']);
                this.user = new User(
                    content['firstName'],
                    content['lastName'],
                    content['middleName'],
                    content['userName'],
                    content['email'],
                    content['phoneNo'],
                    content['bvn'],
                );
                this.init();
                    let path = window.location.pathname.toLowerCase();
                    this.switchToPage(path);
                this.componentResized();
                this.addComponentListener(this);
                },
                (e)=>{
                //window.close();
                    this.addComponent(Paragraph('fdf').setTextContent("HTTP Error 403 – Forbidden"));
                    window.location.href = "/";
                },'retrieveUser');
        }

        async send(parameters, func1,func2, type){
            let response = await fetch('/core', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/x-www-form-urlencoded"
                },
                body: "type="+type+"&content="+JSON.stringify(parameters)
            });
            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }
        getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
                var c = ca[i];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1);
                }
                if (c.indexOf(name) == 0) {
                    return c.substring(name.length, c.length);
                }
            }
            return "";
        }


        switchToPage(path){
            path.replace("localhost","");
            switch (path.toLowerCase().replace(" ","")){
                case "/webapp":
                {
                    this.refreshBody(this.index,path);
                    break;
                }
                case "/webapp/transfers":
                {
                    this.refreshBody(this.transfersP,path);
                    break;
                }
                case "/webapp/myaccounts":
                {
                    this.refreshBody(this.myAccountsP,path);
                    break;
                }
                case "/webapp/paybillsairtime":
                {
                    this.refreshBody(this.payBillsAirtimeP,path);
                    break;
                }
                case "/webapp/myloans":
                {
                    this.refreshBody(this.myLoansP,path);
                    break;
                }
                case "/webapp/settings":
                {
                    this.refreshBody(this.settingsP,path);
                    break;
                }

                default:
                {
                    this.refreshBody(this.homeP,"/webapp");
                    break;
                }
            }
        }
        switchToPage2(path){
            path.replace("localhost","");
            switch (path){
                case "/webapp":
                {
                    this.refreshBody2(this.index,path);
                    break;
                }
                case "/webapp/transfers":
                {
                    this.refreshBody2(this.transfersP,path);
                    break;
                }
                case "/webapp/myaccounts":
                {
                    this.refreshBody2(this.myAccountsP,path);
                    break;
                }
                case "/webapp/paybillsairtime":
                {
                    this.refreshBody2(this.payBillsAirtimeP,path);
                    break;
                }
                case "/webapp/myloans":
                {
                    this.refreshBody2(this.myLoansP,path);
                    break;
                }
                case "/webapp/settings":
                {
                    this.refreshBody2(this.settingsP,path);
                    break;
                }

                default:
                {
                    this.refreshBody2(this.homeP,"/webapp");
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
                    this.loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    this.loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, path);
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        this.loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            this.loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)
                }
                catch (e){
                    this.loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    this.loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, path);
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        this.loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            this.loader.fadeOut();
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
                    this.loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    this.loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    //history.pushState({}, title, path);
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        this.loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            this.loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)
                }
                catch (e){
                    this.loader.fadeIn();
                    window.scrollTo(0, 0);
                    page.addCustomStyle(Opacity(0));
                    page.addCustomStyle(Display('block'));
                    this.loader.getLoaderLeft().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    this.loader.getLoaderRight().addCustomStyle(Height(page.domElement.offsetHeight+16,'px'));
                    history.pushState({}, title, "http://ammilbank.com"+path);
                    this.current = page;
                    this.timeout =setTimeout(()=>{
                        page.addCustomStyle(Opacity(1));
                        window.clearInterval(this.interval);
                        this.loader.fadeOut();
                    }, 500);
                    this.interval =setInterval(()=>{
                        if(page.isLoaded()){
                            page.addCustomStyle(Opacity(1));
                            this.loader.fadeOut();
                            window.clearInterval(this.interval);
                            window.clearTimeout(this.timeout)
                        }
                    }, 500)

                }
            }
        }

        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    try{
                        this.switchToPage(e.getSource().getLink())
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

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    new WebApp();

})();
let header =  Division('header')
    .addCustomStyle([
         Height(50,'px'),
         Width(90),
         BackgroundColor('#c69b4f'),
         Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
         BorderRadius(0.5),
         Margin(2),
         Padding(2)
    ]);
let navBar =  Division('navBar').addCustomStyle(
    [
         Height(40),
         Width(40),
         BackgroundColor('#d67d74'),
         Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
         BorderRadius(0.5),
         Padding(1.5),
         Float('right')
  ]
);
let adiv =  Division('adiv')
    .addCustomStyle(
        [
             Width(50),
             Float('right')
        ]
    );
let a1 =  Anchor('a1','#footer').setTextContent('Home');
let a2 =  Anchor('a2').setTextContent('Content');
let a3 =  Anchor('a3').setTextContent('Details');
let a4 =  Anchor('a4').setTextContent('About');
let a5 =  Anchor('a5').setTextContent('About');

let aclass =  Class('anchors')
    .addCustomStyle([
         Height(100),
         BackgroundColor('#6b77d6'),
         Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
         BorderRadius(5),
         Padding(0).setTop(4).setBottom(4),
         Margin(0.5),
    ])
    .addComponent([a1,a2,a3,a4]);



adiv.addComponent([a1,a2,a3,a4]);
navBar.addComponent([adiv]);
header.addComponent([navBar]);



// Content Panel
let content =  Division('content')
    .addCustomStyle([
         Height(600,'px'),
         Width(90),
         BackgroundColor('#c398c6'),
         Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
         BorderRadius(0.1),
         Margin(2),
         Padding(2)
    ]);

let input =  Division('input')
    .addCustomStyle([
         BackgroundColor('#858894'),
         Height(100),
         Width(49.9),
         Float('left')
    ]);


let formgroup =  Division('formgroup')
    .addCustomStyle([
         BackgroundColor('#947e5e'),
         Height(68),
         Width(75),
         Margin(6),
         Padding(6),
    ]);
input.addComponent(formgroup);


let firstNameDiv =  Division('firstNameDiv');
let firstNameInput =  TextInput('firstNameInput','firstName').addCustomStyle([ Width(80),  Float('right')]);
let firstNameLabel =  Label('firstNameLabel','','firstNameInput').setTextContent('First Name:');

firstNameDiv
    .addComponent([firstNameLabel, firstNameInput]);


let lastNameDiv =  Division('lastNameDiv');
let lastNameInput =  TextInput('lastNameInput','lastName').addCustomStyle([ Width(80),  Float('right')]);
let lastNameLabel =  Label('lastNameLabel','','lastNameInput').setTextContent('Last Name:');

lastNameDiv
    .addComponent([lastNameLabel, lastNameInput]);



let dobDiv =  Division('dobDiv');
let dobInput =  DateInput('dobInput','dob').addCustomStyle([ Width(78),  Float('right')]);
let dobLabel =  Label('dobLabel','','dobInput').setTextContent('Date of Birth:');

dobDiv
    .addComponent([dobLabel, dobInput]);



let incomeDiv =  Division('incomeDiv');
let incomeInput =  TextInput('incomeInput','income').addCustomStyle([ Width(78),  Float('right')]);
let incomeLabel =  Label('incomeLabel','','incomeInput').setTextContent('Income:');
incomeDiv
    .addComponent([incomeLabel, incomeInput]);



let detailsDiv =  Division('detailsDiv').addCustomStyle( Height(20));
let detailsInput =  TextArea('detailsInput','details',5,4).addCustomStyle([ Width(100)]);
let detailsLabel =  Label('detailsLabel','','detailsInput').setTextContent('Tell us About Yourself:');

detailsDiv
    .addComponent([detailsLabel, detailsInput]);


let passwordDiv =  Division('passwordDiv');
let passwordInput =  PasswordInput('passwordInput','password').addCustomStyle([ Width(78),  Float('right')]);
let passwordLabel =  Label('passwordLabel','','passwordInput').setTextContent('Password:');

passwordDiv
    .addComponent([passwordLabel, passwordInput]);


let sexDiv =  Division('sexDiv').setTextContent('Sex: ');
let sexMInput =  RadioButton('sexInputM','sex','Male').addCustomStyle([]);
let sexMLabel =  Label('','','sexInputM').setTextContent('Male:');
let sexFInput =  RadioButton('sexInputF','sex','Female').addCustomStyle([]);
let sexFLabel =  Label('','','sexInputF').setTextContent('Female:');

sexDiv
    .addComponent([sexMLabel, sexMInput, sexFLabel, sexFInput])
    .addCustomStyle(
        Height(5),
        Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
        BorderRadius(3),);


let partyDiv =  Division('partyDiv').setTextContent('Political Party: ');
let partyMInput =  CheckBox('partyInputM','party','Republican').addCustomStyle([]);
let partyMLabel =  Label('','','partyInputM').setTextContent('Republican:');
let partyFInput =  CheckBox('partyInputF','party','Democratic').addCustomStyle([]);
let partyFLabel =  Label('','','partyInputF').setTextContent('Democratic:');

partyDiv
    .addComponent([partyMLabel, partyMInput, partyFLabel, partyFInput]) .addCustomStyle(
    Height(5),
    Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
    BorderRadius(3),);

let raceDiv = Division('raceDiv').setTextContent('What race do you belong to? ');
let raceSelect = DropDown('raceSelect', 'race')
    .addComponent([
        DropDownOption('select','','None',true).setTextContent('None'),
        DropDownOption('select','','Caucasian').setTextContent('Caucasian'),
        DropDownOption('select','','Hispanic').setTextContent('Hispanic'),
        DropDownOption('select','','Negro').setTextContent('Negro'),
        DropDownOption('select','','Asian').setTextContent('Asian'),
    ]);
raceDiv.addComponent(raceSelect);


let fileDiv =  Division('fileDiv');
let fileInput =  FileInput('fileInput','file').addCustomStyle([ Width(78),  Float('right')]);
let fileLabel =  Label('','','fileInput').setTextContent('File:');

fileDiv
    .addComponent([fileLabel, fileInput]);

let submitDiv =  Division('submitDiv');
let submitInput =  SubmitButton('submitInput','submit','SUBMIT')
    .addCustomStyle([
        Float('right'),
        Padding(1.5),
        BackgroundColor('#73ddff'),
        Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
        BorderRadius(5)
    ]).addEvent('event1','click',()=>{
        output.addComponent([
            Paragraph('oup1').setTextContent(detailsInput.getValue())
        ])


    });

submitDiv
    .addComponent([submitInput]);
let inputel =  Class('inputel')
    .addCustomStyle([
         Height(5),
         Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
         BorderRadius(5),
         Padding(0).setTop(1).setBottom(1),
    ])
    .addComponent([firstNameDiv,lastNameDiv,dobDiv,incomeDiv,detailsDiv,passwordDiv,raceDiv,fileDiv]);



formgroup.addComponent([firstNameDiv,lastNameDiv,dobDiv,incomeDiv,detailsDiv,passwordDiv,sexDiv,partyDiv,raceDiv,fileDiv,submitDiv]);



let output =  Division('output')
    .addCustomStyle([
         BackgroundColor('#94384c'),
         Height(100),
         Width(49.9),
         Float('right')
    ]);

content.addComponent([input,output]);
// Footer Panel
let footer =  Division('footer')
    .addCustomStyle([
         Height(10,'px'),
         Width(90),
         BackgroundColor('#599bc6'),
         Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
         BorderRadius(0.5),
         Margin(2),
         Padding(2)
    ]);

WINDOW.addComponent([header,content,footer]);
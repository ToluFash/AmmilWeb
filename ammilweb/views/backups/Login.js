let a = async function (){
// Models
    class Entity{
        id;
        name;
        password;


        constructor(name, password) {
            this.name = name;
            this.password = password;
        }
        setName(name){
            this.name = name;

        }
        getName(){
            return this.name;

        }
        setPassword(password){
            this.password = password;

        }
        getPassword(){

            return this.password;
        }

    }
    class User{

        id;
        name;
        type;
        password;

        constructor(name, password) {
            this.name = name;
            this.password = password;
        }

        setName(name){
            this.name = name;

        }
        getName(){
            return this.name;

        }
        setPassword(password){
            this.password = password;

        }
        getPassword(){

            return this.password;
        }
    }

    class Helper {
        static computeLPSArray(pat, M, lps = []) {
            // length of the previous longest prefix suffix
            let len = 0;
            let i = 1;
            lps[0] = 0; // lps[0] is always 0

            // the loop calculates lps[i] for i = 1 to M-1
            while (i < M) {
                if (pat.charAt(i) === pat.charAt(len)) {
                    len++;
                    lps[i] = len;
                    i++;
                }
                else // (pat[i] != pat[len])
                {
                    // This is tricky. Consider the example.
                    // AAACAAAA and i = 7. The idea is similar
                    // to search step.
                    if (len !== 0) {
                        len = lps[len - 1];

                        // Also, note that we do not increment
                        // i here
                    }
                    else // if (len == 0)
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

            // create lps[] that will hold the longest
            // prefix suffix values for pattern
            let lps = [];
            let j = 0; // index for pat[]

            // Preprocess the pattern (calculate lps[]
            // array)
            Helper.computeLPSArray(pat, M, lps);

            let i = 0; // index for txt[]
            while (i < N) {
                if (pat.charAt(j) === txt.charAt(i)) {
                    j++;
                    i++;
                }
                if (j === M) {
                    return true;
                }

                // mismatch after j matches
                else if (i < N && pat.charAt(j) !== txt.charAt(i)) {
                    // Do not match lps[0..lps[j-1]] characters,
                    // they will match anyway
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


    class HDate extends Date{
        constructor() {
            super();
        }

        addMilliseconds(value){
            this.setMilliseconds(this.getMilliseconds()+value)

        }
        addSeconds(value){
            this.setSeconds(this.getSeconds()+value)

        }
        addMinutes(value){
            this.setMinutes(this.getMinutes()+value)

        }
        addHours(value){
            this.setHours(this.getHours()+value)

        }
        addDays(value){

            this.setDate(this.getDate()+value)
        }
        addMonths(value){
            this.setMonth(this.getMonth()+value)

        }
        addYears(value){
            this.setFullYear(this.getFullYear()+value)
        }
        compareTo(date){
            return this.getTime() - date.getTime();

        }

    }

    class Encrypt {

        static encrypt(key, msg){
            let encrypted = "";
            for(let i =0; i < msg.length; i++){
                let keyC =  key.codePointAt(i % key.length);
                let msgC = msg.codePointAt(i);
                encrypted += (String.fromCodePoint((msgC+keyC) % 127));
            }
            return encrypted;
        }
    }

    class Global{


        static products;
        static thumbColors  = [
            new Color(0x356A90),
            new Color(0xFF9E39),
            new Color(0x317A16),
            new Color(0x0762E7),
            new Color(0x0D8B78),
            new Color(0x6465A5),
            new Color(0x00743F),
            new Color(0xF4B210),
            new Color(0xED6450),
            new Color(0x0ABDA0),
            new Color(0x024029)]
    }

    let user = new User("ToluFash", "0709");
    let entity = new Entity("StockKeeper Inc","0709");
    class Category{
        title;
        description;


        constructor(title, description) {
            this.title = title;
            this.description = description;
        }


        getTitle() {
            return this.title;
        }

        setTitle(value) {
            this.title = value;
        }

        getDescription() {
            return this.description;
        }

        setDescription(value) {
            this.description = value;
        }
    }

    class Product{

        id;
        name;
        category;
        quantity;
        unitCost;
        taxRate;
        isPercent;


        constructor(name, category, unitCost, taxRate="", isPercent="") {
            this.name = name;
            this.category = category;
            this.unitCost = unitCost;
            this.taxRate = taxRate;
            this.isPercent = isPercent;
        }


        getId() {
            return this.id;
        }

        setId(value) {
            this.id = value;
        }

        getName() {
            return this.name;
        }

        setName(value) {
            this.name = value;
        }

        getCategory() {
            return this.category;
        }

        setCategory(value) {
            this.category = value;
        }

        getQuantity() {
            return this.quantity;
        }

        setQuantity(value) {
            this.quantity = value;
        }

        getUnitCost() {
            return this.unitCost;
        }

        setUnitCost(value) {
            this.unitCost = value;
        }

        getTaxRate() {
            return this.taxRate;
        }

        setTaxRate(value) {
            this.taxRate = value;
        }

        getIsPercent() {
            return this.isPercent;
        }

        setIsPercent(value) {
            this.isPercent = value;
        }

        static constructFromJson(obj){

            let products = [];
            for(let y = 0; y < obj['entryLength']; y++){
                let ticket = obj["entry"+y];
                let product = new Product(
                    ticket['name'],
                    new Category(ticket['category'],""),
                    ticket['unitCost'],
                    ticket['taxRate'],
                    ticket['isPercent']
                );
                product.setId(ticket['id']);
                products.push(product);
            }
            return products;
        }
    }

    class API{

        static endpoint = "http://127.0.0.1:8000/api/stockkeeper/";

        static key = "hallo";

        static  async getProducts(entity, user){

            let username = user.getName();
            let password = user.getPassword();
            let dataSend = "{"+"\"entity\":\""+entity.getName()+"\", \"username\":\"" + username +"\", \"password\":\"" + password +"\"}";
            dataSend =Encrypt.encrypt(API.key, dataSend);
            let request = new Request(API.endpoint+"getProducts/", {method: 'POST', body: dataSend});
            let response = await fetch(request);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                let json = await response.json();
                return Product.constructFromJson(json);

            }
            /*
            fetch(request)
                .then(response =>{
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    else{
                        return response.json()
                    }
                })
                .then(json => {
                    return Product.constructFromJson(json);
                })
                .catch(error => {
                console.error(error);
            });
            */
        }
        static async getStock(entity, user){

            let username = user.getName();
            let password = user.getPassword();
            let date = new Date();
            let dataSend = "{"+
                "\"entity\":\""+entity.getName()+
                "\", \"username\":\"" + username +
                "\", \"password\":\"" + password +
                "\", \"year\":\"" + date.getFullYear() +
                "\", \"month\":\"" + date.getMonth() +
                "\", \"day\":\"" + date.getDate() +
                "\", \"hours\":\"" + date.getHours() +
                "\", \"minutes\":\"" + date.getMinutes() +
                "\", \"seconds\":\"" + date.getSeconds() +
                "\"}";
            dataSend = Encrypt.encrypt(API.key,dataSend);
            let request = new Request(API.endpoint+"getStock/", {method: 'POST', body: dataSend});
            let response = await fetch(request);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                let json = await response.json();
                return new Stock().constructFromJson(json);

            }
        }
    }
    class EntryTotal{

        grossTotal;
        discountTotal;
        taxTotal;
        shippingTotal;
        isRateDiscount;
        isRateTax;
        isRateShipping;
        defaultTax;


        constructor() {
        }

        getGrossTotal() {
            return this.grossTotal;
        }
        setGrossTotal(grossTotal) {
            this.grossTotal = grossTotal;
        }

        getTaxTotal() {
            return this.taxTotal;
        }

        setTaxTotal(taxTotal) {
            this.taxTotal = taxTotal;
        }

        getShippingTotal() {
            return this.shippingTotal;
        }

        setShippingTotal(shippingTotal) {
            this.shippingTotal = shippingTotal;
        }

        getDiscountTotal() {
            return this.discountTotal;
        }

        setDiscountTotal(discountTotal) {
            this.discountTotal = discountTotal;
        }

        isRateDiscountF() {
            return this.isRateDiscount;
        }

        setRateDiscount(rateDiscount) {
            this. isRateDiscount = rateDiscount;
        }

        isRateTaxF() {
            return this.isRateTax;
        }

        setRateTax(rateTax) {
            this.isRateTax = rateTax;
        }

        isRateShippingF() {
            return this.isRateShipping;
        }

        setRateShipping(rateShipping) {
            this.isRateShipping = rateShipping;
        }

        isDefaultTaxF() {
            return this.defaultTax;
        }

        setDefaultTax(defaultTax) {
            this.defaultTax = defaultTax;
        }


    }
    class ProductsModel{

        entries;
        product;
        netTotal;
        summedQty;
        grossTax;


        constructor(entries = [], product= null) {
            this.entries = entries;
            this.product = product;
            this.netTotal = this.calculateEntriesTotal();
            this.summedQty = this.calculateEntriesQty();
            this.grossTax = this.calculateEntriesTaxes();
        }
        calculateEntriesTotal(){
            let total = 0;

            this.entries.forEach(function (entry, index) {
                total += entry.getTotal().getGrossTotal();
            });
            return total;
        }
        calculateEntriesQty(){
            let qty = 0;
            this.entries.forEach(function(entry, index){
                qty+= entry.getQty();
            });
            return qty;

        }
        calculateEntriesTaxes(){

            let tax = 0;
            this.entries.forEach(function(entry, index){
                tax+= entry.getTotal().getTaxTotal();
            });
            return tax;
        }


        getGrossTax() {
            return this.grossTax;
        }

        getEntries() {
            return this.entries;
        }

        getProduct() {
            return this.product;
        }

        setProduct(product) {
            this.product = product;
        }

        setEntries( entries) {
            this.entries = entries;
        }

        getNetTotal() {
            return this.netTotal;
        }

        setNetTotal(netTotal) {
            this.netTotal = netTotal;
        }

        getSummedQty() {
            return this.summedQty;
        }

        setSummedQty(summedQty) {
            this.summedQty = summedQty;
        }

    }

    class Account {
        id;
        title;
        tickets;
        type;
        largest =0;

        //to delete
        graphData;
        constructor() {
        }


        getTitle() {
            return this.title;
        }

        setTitle(title) {
            this.title = title;
        }

        getType() {
            return this.type;
        }

        setType(type) {
            this.type = type;
        }
        getId() {
            return this.id;
        }

        setId(id) {
            this.id = id;
        }

        getGraphData() {
            return this.graphData;
        }

        getLargest() {
            return this.largest;
        }

        getTotal(date){
            let total = 0;
            let arrayList = this.getTickets(date);
            let myFunction = (ticketModel, index)=>{
                total += ticketModel.getTotal();
            };
            arrayList.forEach(myFunction);
            return total;

        }
        getTaxesPayablebyDay(date){
            let taxPayable = 0;
            let arrayList = this.getTickets(date);
            let myFunction = (ticketModel, index)=>{
                taxPayable += ticketModel.getTaxPayable();
            };
            arrayList.forEach(myFunction);
            return taxPayable;

        }

        getEntriesbyProductsModel(date){
            let hashMap = new Map();
            let myFunction = (product, index)=>{
                let productsModel =new ProductsModel(product,this.getEntriesPD(product,date));
                hashMap.set(product.getName(), productsModel);
            };
            Global.products.forEach(myFunction);
            return new Array.from(hashMap.values());
        }

        getEntriesbyProductsModelGraph(date){
            let graphProducts = new Map();
            let myFunction = (product, index)=>{
                let productsModel =new ProductsModel(product,this.getEntriesPD(product,date));
                graphProducts.set(product.getName(), productsModel.getSummedQty());
            };
            Global.products.forEach(myFunction);
            return graphProducts;
        }

        getTaxesbyProductsModelGraph(date){
            let graphProducts = new Map();
            let myFunction = (product, index)=>{
                let productsModel =new ProductsModel(product,this.getEntriesPD(product,date));
                graphProducts.set(product.getName(), productsModel.getGrossTax());
            };
            Global.products.forEach(myFunction);
            return graphProducts;
        }

        getHighestGrossingonTax(date){
            let highestGrossing = 0;
            let  product1 = new Product("");
            let myFunction =(product, index) =>{
                let productsModel =new ProductsModel(product,this.getEntriesPD(product,date));
                if (productsModel.getGrossTax() > highestGrossing){
                    highestGrossing = productsModel.getGrossTax();
                    product1 = product;
                }
            };
            Global.products.forEach(myFunction);
            return product1;
        }

        getEntriesbyProductsModelDistribution(product, date){
            let  hash= new Map();
            let buffer = new HDate();
            buffer.setMinutes(0);
            buffer.setSeconds(0);
            buffer.setMilliseconds(0);

            function myFunction2(entry, index, ticketModel){
                if(entry.getProduct().getName()=== product.getName())
                    try{
                        let before = hash.get(ticketModel.getDate().getHours());
                        hash.replace(ticketModel.getDate().getHours(), before+ entry.getTotal().getGrossTotal());
                    }
                    catch (e){
                        hash.set(ticketModel.getDate().getHours(),entry.getTotal().getGrossTotal());
                    }
            }
            function myFunction(ticketModel, index){
                ticketModel.forEach(function (entry, index) {
                    myFunction2(entry, index, ticketModel)
                })
            }
            this.getTickets(date).forEach(myFunction);

            function myFunction3(value, key,map){
                buffer.setHours(key);
                hashMap.set(buffer, hash.get(key));
            }
            let hashMap = new Map();

            hashMap.forEach(myFunction3);
            return hashMap;
        }

        getGraphDataD(date) {
            let ticketModels = this.getTickets(date);
            let hashMap =new Map();
            function myFunction(ticketModel, index){
                hashMap.set(ticketModel.getDate().toString(), ticketModel.getTotal());
            }
            ticketModels.forEach(myFunction);
            return hashMap;
        }

        getDistribution(date) {
            let reference = new HDate();
            let end = new HDate();
            reference.setTime(date);
            end.setTime(date);
            reference.setHours(0);
            reference.setMinutes(0);
            reference.setSeconds(0);
            reference.setMilliseconds(0);
            end.setHours(0);
            end.setMinutes(0);
            end.setSeconds(0);
            end.setMilliseconds(0);
            end.addHours( 1);
            end.addMilliseconds(-1);
            let buffer = new Map();
            let start = false;

            function myFunction(ticketModel, index){
                if(ticketModel.getTotal() > 0){
                    start = true;
                }
                if(start){
                    try{
                        buffer.set(reference,
                            buffer.get(reference)+ ticketModel.getTotal());
                    }
                    catch (e){
                        buffer.set(reference,ticketModel.getTotal());
                    }
                }
            }

            for(let count = 1; count < 25; count++){
                let ticketModels = this.getTickets(reference,end);
                ticketModels.forEach(myFunction);
                reference.addHours( 1);
                end.addHours( 1);
            }
            return buffer;
        }

        getTickets(){
            return this.tickets;
        }

        getTicket(id){
            return this.tickets.get(id);
        }

        getTickets(start, end){

            let ticketModels = [];

            function myFunction(ticketModel, key,map){
                if(ticketModel.getDate().compareTo(start) >= 0 &&  ticketModel.getDate().compareTo(end) <= 0)
                    ticketModels.add(ticketModel);

            }
            this.tickets.forEach(myFunction);
            return ticketModels;
        }

        getEntriesPSE(product, start, end){
            let entries = [];
            function myFunction(value, index){
                if(value.getProduct().getName()=== product.getName())
                    entries.add(value);

            }
            function myFunction2(value, index){
                if(value.getDate().compareTo(start) >= 0 &&  value.getDate().compareTo(end) <= 0){
                    value.getEntries().forEach(myFunction)
                }
            }
            this.tickets.forEach(myFunction2);

            return entries;
        }

        getEntriesPD(product, date){
            let g = new HDate();
            g.setTime(date);
            g.setHours(0);
            g.setMinutes(0);
            g.setSeconds(0);
            g.setMilliseconds(0);
            let g2 = g.clone();
            g2.addDays(1);
            g2.addMilliseconds(-1);
            return this.getEntries(product, g, g2);
        }


        getTicketsD(date){
            let g = new HDate();
            g.setTime(date);
            g.setHours(0);
            g.setMinutes(0);
            g.setSeconds(0);
            g.setMilliseconds(0);
            let g2 = g.clone();
            g2.addDays(1);
            g2.addMilliseconds(-1);
            return this.getTickets(g, g2);
        }


        getTicketsDSE(date,startHour,endHour){
            let g = new HDate();
            g.setTime(date);
            g.setHours( startHour);
            g.setMinutes(0);
            g.setSeconds(0);
            g.setMilliseconds(0);
            let g2 =g.clone();
            g.setHours( endHour);
            g.setMinutes(0);
            g.setSeconds(0);
            g.setMilliseconds(0);
            return this.getTickets(g, g2);
        }


        getEntriesTotal(product, date){

            let  entries = this.getEntries(product, date);
            let total = 0;
            function myFunction2(entry, index){

                total += entry.getTotal().getGrossTotal();

            }
            entries.forEach(myFunction2);
            return total;
        }

        getEntriesQuantityTotal(product, date){

            let  entries = this.getEntries(product, date);
            let  total = 0;
            function myFunction2(entry, index){
                total += entry.getQty();
            }
            entries.forEach(myFunction2);
            return total;
        }

        getGraphDataPSE(product, start, end){
            let  g = new HDate();
            g.setTime(start);
            g.setHours(0);
            g.setMinutes(0);
            g.setSeconds(0);
            g.setMilliseconds(0);
            start = g;
            let  g2 = new HDate();
            g2.setTime(end);
            g2.setHours(0);
            g2.setMinutes(0);
            g2.setSeconds(0);
            g2.setMilliseconds(0);
            end = g2;
            let  start2 = false;
            let hashMap = new Map();

            while(end.compareTo(start) >= 0) {
                if (this.getEntriesQuantityTotal(product, start) > 0) {
                    start2 = true;
                }
                if (start2) {
                    hashMap.set(start, this.getEntriesQuantityTotal(product, start));
                }
                g.addDays(1);
                start = g;
            }
            return hashMap;
        }
    }

    class Stock{

        id;
        title;
        tickets;
        type;
        largest;
        graphData;


        constructor() {
            this.tickets = new Map();
        }


        constructFromJson(obj){

            this.id = obj["id"].toString();

            let graphData = new Map();
            for (let y = 0; y  <obj["entryLength"]; y++){
                let ticket = obj["entry" + y];
                let product = ticket["product"].toString();
                let quantity = ticket["qty"];
                graphData.set(product,quantity);
                this.largest = this.largest < quantity ? quantity: this.largest;
                let product1 = new Product(product,
                    new Category(ticket["category"]),
                    ticket["unitCost"],
                    ticket["taxRate"],
                    Boolean(ticket["isPercent"])
                );
                let entry = new Entry(
                    product1,quantity);
                entry.setId(ticket["id"].toString());
                this.tickets.set(product1.getName(), entry);
            }
            return this;
        }

        getTickets(){
            return this.tickets;
        }
        setTickets(tickets){
            this.tickets = tickets;
        }
        clone(){
            let stock = new Stock();
            stock.tickets = this.tickets;
            stock.largest = this.largest;
            return stock;

        }
    }
    class TicketModel {
        //Event
        id;
        account;
        eventText;
        progressBar;
        rButton;
        eventRow;
        entries;
        expenses;
        staff;


        comments;
        note;
        customer;
        reference;
        date;
        entries2;

        constructor(expenses, staff, note, customer, reference, date, entries) {
            this.expenses = expenses;
            this.staff = staff;
            this.note = note;
            this.customer = customer;
            this.reference = reference;
            this.date = date;
            this.entries = entries;
        }

        getId() {
            return this.id;
        }

        setId(id) {
            this.id = id;
        }

        getAccount() {
            return this.account;
        }

        setAccount(account) {
            this.account = account;
            switch (account){
                case "Sales":
                    this.eventText = eventText + " " + account + date + " to Cloud";
                case "Purchases":
                    this.eventText = eventText + " " + account + date + " to Cloud";
                case "Returns Inward":
                    this.eventText = eventText + " " + account + date  + " to Cloud";
                case "Returns Outward":
                    this.eventText = eventText + " " + account + date  + " to Cloud";
                case "Damages":
                    this.eventText = eventText + " " + account + date + " to Cloud";
                case "Debtors":
                    this.eventText = eventText + " " + account + date + " to Cloud";
                case "Creditors":
                    this.eventText = eventText + " " + account + date + " to Cloud";
                case "expense":
                    this.eventText = eventText + " " + account + date + " to Cloud";
            }
        }

        getEntries() {
            return this.entries;
        }

        setEntries(entries) {
            this.entries = entries;
        }

        getComments() {
            return this.comments;
        }

        setComments(comments) {
            this.comments = comments;
        }

        getNote() {
            return this.note;
        }

        setNote(note) {
            this.note = note;
        }

        getCustomer() {
            return this.customer;
        }

        setCustomer(customer) {
            this.customer = customer;
        }

        getReference() {
            return this.reference;
        }

        setReference(reference) {
            this.reference = reference;
        }

        getTotal(){
            let total = 0;
            this.entries.forEach(function(entry, index){
                total += entry.getTotal().getGrossTotal();
            });
            return total;
        }

        getTaxPayable(){
            let total = 0;
            this.entries.forEach(function(entry, index){
                total += entry.getTotal().getTaxTotal();
            });
            return total;
        }

        getAverageTaxRate(){
            let total = 0;
            this.entries.forEach(function(entry, index){
                if(entry.isDefaultTax()){
                    if(entry.getProduct().isPercent()){
                        total += entry.getProduct().getTaxRate();
                    }
                    else{
                        let rate = (100*entry.getProduct().getTaxRate()) / (entry.getTotal().getGrossTotal() - entry.getProduct().getTaxRate());
                    }
                }
                else{
                    total+= entry.getTaxOverride();
                }
            });
            return total;
        };

        getDateString() {
            return this.date.toString();
        }

        getExpenses() {
            return this.expenses;
        }

        setExpenses( expenses) {
            this.expenses = expenses;
        }

        getStaff() {
            return this.staff;
        }

        setStaff(staff) {
            this.staff = staff;
        }

        getDate() {
            return this.date;
        }

        setDate(date) {
            this.date = date;
        }



        getEventText() {
            return this.eventText;
        }


        getProgressBar() {
            return this.progressBar;
        }


        getButton() {
            return this.rButton;
        }

        getEventRow() {
            return this.eventRow;
        }


        setEventRow(eventRow) {

            this.eventRow = eventRow;
        }

        getEntries2() {
            return entries2;
        }

        setEntries2(entries2) {
            this.entries2 = entries2;
        }

        run() {
            try{
                EventPanel.available.acquire();
                let object = {};
                object["entity"] = Global.entity.getName();
                object["user"] = Global.user.getName();
                object["password"] = Global.user.getPassword();
                object["id"] = account + ""+ date ;
                object["comments"] = this.comments;
                object["customer"] = this.customer;
                let entries = {};
                this.progressBar.setValue(10);
                let val = 80 / this.entries.size();

                let count = 0;

                this.entries.forEach(function (entry, index) {
                    let entryJ = {};
                    entryJ["product"]=entry.getProduct().getName();
                    entryJ["qty"]=entry.getQty();
                    entryJ["discount"]=entry.getDiscount();
                    entryJ["shipping"]=entry.getShipping();
                    entryJ["tax"]=entry.getTaxOverride();
                    entryJ["isPercentDiscount"]=entry.isPercentDiscount();
                    entryJ["isPercentShipping"]=entry.isPercentShipping();
                    entryJ["isDefaultTax"]=entry.isDefaultTax();
                    entryJ["isPercentTaxOverride"]= entry.isPercentTaxOverride();
                    entries["entry" + count]=  entryJ;
                    count++;
                    this.progressBar.setValue( val * count);

                });
                object["entries"]= entries;
                object["entryLength"]= count;
                switch (this.account){
                    case "Sales":
                        API.putSale(Global.entity, Global.user, object.toJSONString());
                        Global.eventPanel.moveFromPendingtoCompleted(this);
                        progressBar.setValue(100);
                        break;
                    case "Purchases":
                        API.putPurchase(Global.entity, Global.user, object.toJSONString());
                        Global.eventPanel.moveFromPendingtoCompleted(this);
                        progressBar.setValue(100);
                        break;
                    case "Returns Inward":
                        API.putReturnInward(Global.entity, Global.user, object.toJSONString());
                        Global.eventPanel.moveFromPendingtoCompleted(this);
                        progressBar.setValue(100);
                        break;
                    case "Returns Outward":
                        API.putReturnOutward(Global.entity, Global.user, object.toJSONString());
                        Global.eventPanel.moveFromPendingtoCompleted(this);
                        progressBar.setValue(100);
                        break;
                    case "Damages":
                        API.putDamages(Global.entity, Global.user, object.toJSONString());
                        Global.eventPanel.moveFromPendingtoCompleted(this);
                        progressBar.setValue(100);
                        break;
                    case "Debtors":
                        API.putDebtors(Global.entity, Global.user, object.toJSONString());
                        Global.eventPanel.moveFromPendingtoCompleted(this);
                        progressBar.setValue(100);
                        break;
                    case "Creditors":
                        API.putCreditors(Global.entity, Global.user, object.toJSONString());
                        Global.eventPanel.moveFromPendingtoCompleted(this);
                        progressBar.setValue(100);
                        break;
                    case "expense":
                }
            }
            catch (e){
                Global.eventPanel.moveFromPendingtoFailed(this);
            }

            finally {
                EventPanel.available.release();
            }
        }

        getGraphData(){
            let buffer = new Map();
            let graphData = [];

            this.entries.forEach(function(entry, index){
                let key = entry.getProduct().getName();
                let value = entry.getQty();
                if(buffer.containsKey(key)){
                    buffer.set(key, buffer.get(key) + value);
                }
                else{
                    buffer.set(key, value);
                }
            });
            return buffer;
        }

        initTask(account){
            this.eventText = "Commit";
            this.setAccount(account);
            Global.eventPanel.addtoPending(this);
        }

    }

    class Entry {

        id;
        product;
        qty;
        discount;
        shipping;
        taxOverride;
        isPercentDiscount;
        isPercentShipping;
        isDefaultTax;
        isPercentTaxOverride;


        constructor(product, qty=0, discount=0, shipping=0, taxOverride=0, isPercentDiscount=0, isPercentShipping=0, isDefaultTax=0, isPercentTaxOverride=0) {
            this.product = product;
            this.qty = qty;
            this.discount = discount;
            this.shipping = shipping;
            this.taxOverride = taxOverride;
            this.isPercentDiscount = isPercentDiscount;
            this.isPercentShipping = isPercentShipping;
            this.isDefaultTax = isDefaultTax;
            this.isPercentTaxOverride = isPercentTaxOverride;
        }

        getId() {
            return this.id;
        }

        setId(id) {
            this.id = id;
        }

        getProduct() {
            return this.product;
        }

        setProduct( product) {
            this.product = product;
        }

        getQty() {
            return this.qty;
        }

        setQty(qty) {
            this.qty = qty;
        }


        getDiscount() {
            return this.discount;
        }

        setDiscount(discount) {
            this.discount = discount;
        }

        getShipping() {
            return this.shipping;
        }

        setShipping(shipping) {
            this.shipping = shipping;
        }

        getTaxOverride() {
            return this.taxOverride;
        }

        setTaxOverride(taxOverride) {
            this.taxOverride = taxOverride;
        }

        isPercentDiscountF() {
            return this.isPercentDiscount;
        }

        setPercentDiscount(percentDiscount) {
            this.isPercentDiscount = percentDiscount;
        }

        isPercentShippingF() {
            return this.isPercentShipping;
        }

        setPercentShipping(percentShipping) {
            this.isPercentShipping = percentShipping;
        }

        isDefaultTaxF() {
            return this.isDefaultTax;
        }

        setDefaultTax(defaultTax) {
            this.isDefaultTax = defaultTax;
        }

        isPercentTaxOverrideF() {
            return this.isPercentTaxOverride;
        }

        setPercentTaxOverride(percentTaxOverride) {
            this.isPercentTaxOverride = percentTaxOverride;
        }

        getTotal(){


            //let defaultTaxRate = this.product.getTaxRate();
            let defaultTax = this.product.getTaxRate();
            let defaultTaxMultiplier = (1+(defaultTax/100));
            //let defaultTaxisPercent = this.product.isPercent();
            let discountMultiplier = (1-(this.discount/100));
            let shippingMultiplier = (1+(this.shipping/100));
            let taxOverrideMultiplier = (1+(this.taxOverride/100));



            let entryTotal = new EntryTotal();


            if (!this.isDefaultTax)
            {
                if(this.isPercentDiscount)
                    if (this.isPercentShipping){
                        entryTotal.setGrossTotal(this.isPercentTaxOverride ? taxOverrideMultiplier * ( shippingMultiplier * (this.product.getUnitCost() * this.qty * discountMultiplier )): (shippingMultiplier * (this.product.getUnitCost() * this.qty * discountMultiplier )) + this.taxOverride);
                        entryTotal.setDiscountTotal((this.discount/100)  * this.product.getUnitCost() * this.qty );
                        entryTotal.setShippingTotal((this.shipping/100) * this.product.getUnitCost() * this.qty * discountMultiplier);
                        entryTotal.setTaxTotal(this.isPercentTaxOverride ? (this.taxOverride/100) * ( shippingMultiplier * (this.product.getUnitCost() * this.qty * discountMultiplier )): this.taxOverride);
                        entryTotal.setRateDiscount(true);
                        entryTotal.setRateShipping(true);
                        entryTotal.setRateTax(this.isPercentTaxOverride);
                        entryTotal.setDefaultTax(false);
                    }
                    else{
                        entryTotal.setGrossTotal(this.isPercentTaxOverride ?  taxOverrideMultiplier *( this.shipping + (this.product.getUnitCost() * this.qty * discountMultiplier )): this.taxOverride + (this.product.getUnitCost() * this.qty * this.discount ) + this.shipping);
                        entryTotal.setDiscountTotal((this.discount/100)  * this.product.getUnitCost() * this.qty );
                        entryTotal.setShippingTotal(this.shipping);
                        entryTotal.setTaxTotal(this.isPercentTaxOverride ? (this.taxOverride/100) * ( this.shipping + (this.product.getUnitCost() * this.qty * discountMultiplier )): this.taxOverride);
                        entryTotal.setRateDiscount(true);
                        entryTotal.setRateShipping(false);
                        entryTotal.setRateTax(this.isPercentTaxOverride);
                        entryTotal.setDefaultTax(false);
                    }

                else
                {
                    if (this.isPercentShipping){
                        entryTotal.setGrossTotal(this.isPercentTaxOverride ? taxOverrideMultiplier * ( shippingMultiplier * (this.product.getUnitCost() * this.qty - this.discount )): (shippingMultiplier * (this.product.getUnitCost() * this.qty - this.discount )) + this.taxOverride);
                        entryTotal.setDiscountTotal(this.discount);
                        entryTotal.setShippingTotal((this.shipping/100) * (this.product.getUnitCost() * this.qty - this.discount));
                        entryTotal.setTaxTotal(this.isPercentTaxOverride ? (this.taxOverride/100) * ( shippingMultiplier * (this.product.getUnitCost() * this.qty - this.discount)): this.taxOverride);
                        entryTotal.setRateDiscount(false);
                        entryTotal.setRateShipping(true);
                        entryTotal.setRateTax(this.isPercentTaxOverride);
                        entryTotal.setDefaultTax(false);
                    }
                    else{
                        entryTotal.setGrossTotal(this.isPercentTaxOverride ? this.shipping +(taxOverrideMultiplier * (this.product.getUnitCost() * this.qty - this.discount)): this.shipping + (this.product.getUnitCost() * this.qty - this.discount ) + this.taxOverride);
                        entryTotal.setDiscountTotal(this.discount);
                        entryTotal.setShippingTotal(this.shipping);
                        entryTotal.setTaxTotal(this.isPercentTaxOverride ? (this.taxOverride/100) * ( this.shipping + (this.product.getUnitCost() * this.qty - this.discount)): this.taxOverride);
                        entryTotal.setRateDiscount(false);
                        entryTotal.setRateShipping(false);
                        entryTotal.setRateTax(this.isPercentTaxOverride);
                        entryTotal.setDefaultTax(false);
                    }

                }
            }

            else{
                if(this.isPercentDiscount)
                    if (this.isPercentShipping){
                        entryTotal.setGrossTotal(this.product.isPercent()? defaultTaxMultiplier *
                            ( shippingMultiplier * (this.product.getUnitCost() * this.qty * discountMultiplier )): (shippingMultiplier * (this.product.getUnitCost() * this.qty * discountMultiplier )) + defaultTax );
                        entryTotal.setDiscountTotal((this.discount/100)  * this.product.getUnitCost() * this.qty );
                        entryTotal.setShippingTotal((this.shipping/100) * this.product.getUnitCost() * this.qty * discountMultiplier);
                        entryTotal.setTaxTotal(this.product.isPercent() ? (defaultTax/100) * ( shippingMultiplier * (this.product.getUnitCost() * this.qty * discountMultiplier )): defaultTax);
                        entryTotal.setRateDiscount(true);
                        entryTotal.setRateShipping(true);
                        entryTotal.setRateTax(this.product.isPercent());
                        entryTotal.setDefaultTax(true);
                    }
                    else{
                        entryTotal.setGrossTotal((this.product.isPercent()) ?  defaultTaxMultiplier *( this.shipping + (this.product.getUnitCost() * this.qty * discountMultiplier )): defaultTax + (this.product.getUnitCost() * this.qty * this.discount ) + this.shipping);
                        entryTotal.setDiscountTotal((this.discount/100)  * this.product.getUnitCost() * this.qty );
                        entryTotal.setShippingTotal(this.shipping);
                        entryTotal.setTaxTotal(this.product.isPercent() ? (defaultTax/100) * ( this.shipping + (this.product.getUnitCost() * this.qty * discountMultiplier )): defaultTax);
                        entryTotal.setRateDiscount(true);
                        entryTotal.setRateShipping(false);
                        entryTotal.setRateTax(this.product.isPercent());
                        entryTotal.setDefaultTax(true);
                    }

                else
                {
                    if (this.isPercentShipping){
                        entryTotal.setGrossTotal(this.product.isPercent() ? defaultTaxMultiplier * ( shippingMultiplier * (this.product.getUnitCost() * this.qty - this.discount )): (shippingMultiplier * (this.product.getUnitCost() * this.qty - this.discount )) + defaultTax);
                        entryTotal.setDiscountTotal(this.discount);
                        entryTotal.setShippingTotal((this.shipping/100) * (this.product.getUnitCost() * this.qty - this.discount));
                        entryTotal.setTaxTotal(this.product.isPercent() ? (defaultTax/100) * ( shippingMultiplier * (this.product.getUnitCost() * this.qty - this.discount)): defaultTax);
                        entryTotal.setRateDiscount(false);
                        entryTotal.setRateShipping(true);
                        entryTotal.setRateTax(this.product.isPercent());
                        entryTotal.setDefaultTax(true);
                    }
                    else{
                        entryTotal.setGrossTotal(this.product.isPercent() ? this.shipping +(defaultTaxMultiplier * (this.product.getUnitCost() * this.qty - this.discount)): this.shipping + (this.product.getUnitCost() * this.qty - this.discount ) + defaultTax);
                        entryTotal.setDiscountTotal(this.discount);
                        entryTotal.setShippingTotal(this.shipping);
                        entryTotal.setTaxTotal(this.product.isPercent() ? (defaultTax/100) * ( this.shipping + (this.product.getUnitCost() * this.qty - this.discount)): defaultTax);
                        entryTotal.setRateDiscount(false);
                        entryTotal.setRateShipping(false);
                        entryTotal.setRateTax(this.product.isPercent());
                        entryTotal.setDefaultTax(true);
                    }

                }

            }
            return entryTotal;

            
        }











    }




    class NavLink extends HDivision{

        image;
        paragraph;
        constructor(id, src = "",alt= "", mouseListener){
            super("navLink_"+id);
            this.addCustomStyle(
                [
                    Margin(0, 'px').setTop(5),
                    Height(70, 'px'),
                    Width(75, 'px'),
                    Float('left'),
                ]
            );
            this.image = new HImage("image_"+id, src,alt)
                .addCustomStyle(
                    [
                        Margin(0,'px').setLeft(15),
                    ]
                );
            this.paragraph = new HParagraph("p_"+id).setTextContent(alt);
            this.paragraph.addCustomStyle(
                [
                    Margin(0),
                    Padding(0),
                    Width(75, 'px'),
                    FontSize(10,'pt'),
                    TextAlignment('center')
                ]
            );
            this.addComponent(this.image);
            this.addComponent(this.paragraph);
            this.addMouseListener(mouseListener)
        }


        getImage() {
            return this.image;
        }

        getParagraph() {
            return this.paragraph;
        }

    }

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
    }
    let colorScheme = new ColorScheme();
    colorScheme.setPrimaryColor('DDCD85');
    colorScheme.setSecondaryColor('EAE3B9');
    colorScheme.setTertiaryColor('F0EBCD');
    colorScheme.setQuaternaryColor('F7F4E4');
    colorScheme.setQuinaryColor('564F33');
    colorScheme.setSenaryColor('898253');
    colorScheme.setSeptenaryColor('9B9462');
    colorScheme.setNonaryColor('AEA770');
    colorScheme.setDenaryColor('FFFFFF');

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
            this.initNav();
            this.addComponentListener(this)
        }

        initTopPanels(){
            this.navPanel = Division('navPanel')
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
                    BackgroundColor(colorScheme.getQuaternaryColor()),
                    // Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    // Margin(2),
                    Padding(0)
                ]);
            this.footerPanel = Division('footerPanel')
                .addCustomStyle([
                    Height(30, 'px'),
                    Width(100,'vw'),
                    BackgroundColor(colorScheme.getSecondaryColor()),
                    // Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN),
                    // BorderRadius(0.5),
                    // Margin(2),
                    Padding(0)
                ]);

            this.addComponent([this.navPanel,this.center,this.footerPanel])
        }

        initNav(){
            this.navigation = Division('navigation').addCustomStyle(([
                Height(75, 'px'),
                Width(this.getNavWidth(), 'px'),
                Padding(0,"px").setTop(12).setLeft(10),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontSize(10, 'pt'),
                Float('left'),
                Overflow(OVERFLOW.HIDDEN)
            ]));
            //this.currentRule = navigation.domCssRule;
            let profileBar = Division('profileBar').addCustomStyle([
                Height(90, 'px'),
                Width(300, 'px'),
                BackgroundColor(colorScheme.getPrimaryColor()),
                Float('right'),
                Padding(0)

            ]);
            let paddingPPic = new HMargin(5,'px');
            paddingPPic.setTop(5);
            paddingPPic.setRight(0);
            paddingPPic.setBottom(0);
            paddingPPic.setLeft(0);

            let profilePic = Division('profilePic').addCustomStyle([
                BackgroundColor(colorScheme.getQuinaryColor()),
                BorderRadius(45,'px'),
                Height(80, 'px'),
                Width(80, 'px'),
                Float('left'),
                paddingPPic


            ]);
            let userInfo = Division('userInfo').addCustomStyle([
                Margin(0,'px').setTop(15),
                Height(50,'px'),
                Width(200, 'px'),
                //FontFamily(),
                BackgroundColor(colorScheme.getPrimaryColor()),
                FontFamily(FONT["CALIBRI"],FONT["SITKA BANNER"],FONT["SANS-SERIF"]),
                FontWeight(FONTWEIGHT.BOLD),
                FontSize(11,'pt'),
                Float('right')

            ]);
            let orgName = Paragraph('orgName').addCustomStyle([
                Margin(0,'px').setTop(2),
                Padding(0),
                Width(150, 'px'),
                TextAlignment('right')


            ]).setTextContent("StockKeeper Inc");
            let userName = Paragraph('userName').addCustomStyle([
                Margin(0),
                Padding(0),
                Width(150, 'px'),
                TextAlignment('right')


            ]).setTextContent("Fasugba Tolulope");
            let logOut = Paragraph('logOut').addCustomStyle([
                Margin(0),
                Padding(0),
                Width(150, 'px'),
                TextAlignment('right')


            ]).setTextContent("Log Out");
            userInfo.addComponent([orgName,userName,logOut]);
            profileBar.addComponent([profilePic, userInfo]);

            let stock = new NavLink("stock", stockIcon, "Stock",this);
            let sales = new NavLink("sales", salesIcon, "Sales",this);
            let purchases = new NavLink("purchases", purchasesIcon, "Purchases",this);
            let returnsIn = new NavLink("returnsIn", returnsInIcon, "Returns In.",this);
            let returnsOut = new NavLink("returnsOut", returnsOutIcon, "Returns Out.",this);
            let damages = new NavLink("damages", damagesIcon, "Damages",this);
            let debtors = new NavLink("debtors", debtorsIcon, "Debtors",this);
            let creditors = new NavLink("creditors", creditorsIcon, "Creditors",this);
            let taxes = new NavLink("taxes", taxesIcon, "Taxes",this);
            let expenses = new NavLink("expenses",expensesIcon, "Expenses",this);
            let reports = new NavLink("reports", reportsIcon, "Reports",this);

            this.navigation.addComponent([stock,sales,purchases,returnsIn,
                returnsOut,damages,debtors,creditors,taxes,expenses,reports]);

            this.navPanel.addComponent(this.navigation);
            this.navPanel.addComponent(profileBar);
        }

        getProperDimensions(){
            return window.innerHeight-120;
        }

        getNavWidth(){
            return window.innerWidth-310;
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
            if(e.getSource() instanceof NavLink){
                e.getSource().getParagraph().setColor("000000");
                e.getSource().getImage().addCustomStyle(
                    [
                        Margin(0,'px').setLeft(15),
                        Height(50, 'px'),
                        Width(45, 'px'),
                    ]);
            }

        }
        mouseOver(e){
            if(e.getSource() instanceof NavLink){
                e.getSource().getParagraph().setColor("ffffff");
                e.getSource().getImage().addCustomStyle(
                    [
                        Margin(0,'px').setLeft(13),
                        Height(52, 'px'),
                        Width(47, 'px'),
                    ]);
            }


        }
        mouseDown(e){

        }
        componentResized(e){
            this.center
                .addCustomStyle([
                    Height(this.getProperDimensions(), 'px')]);
            this.navigation.addCustomStyle([
                Width(this.getNavWidth(), 'px'),
            ]);
        }
    }



    class OneByTwoRow extends HDivision{
        component1;
        component2;


        constructor(id, component1, component2) {
            super(id);
            this.addComponent([component1,component2]);
            this.addCustomStyle(Padding(0, 'px'));
            this.addCustomStyle([
                Width(400, 'px'),
                Height(25, 'px'),

            ]);
            this.component1 = component1;
            this.component2 = component2;
        }


        getComponent1() {
            return this.component1;
        }

        setComponent1(value) {
            this.component1 = value;
        }

        getComponent2() {
            return this.component2;
        }

        setComponent2(value) {
            this.component2 = value;
        }
    }
    class Banner2 extends HDivision{
        title;
        bannerText;

        constructor(id) {
            super(id);
            this.addCustomStyle([
                Width(400,'px'),
                Height(80,'px')

            ]);
            this.title = new HParagraph('bannerTitle'+id, "Total");
            this.bannerText = new HParagraph('bannerText'+id, "");
            this.title.addCustomStyle([

                Padding(0,'px').setLeft(5),
                FontSize(12,'px'),
                FontWeight("bold"),
                FontFamily("Sitka Banner")
            ]);
            this.bannerText.addCustomStyle([
                FontSize(24,'px'),
                FontWeight("bold"),
                FontFamily("Helvetica"),
                TextAlignment("center")
            ]);
            this.addComponent([this.title, this.bannerText])

        }

        setText(text){
            this.bannerText.setTextContent(Helper.numberWithCommas(text));
        }

    }
    class Rectangle{
        x;
        y;
        width;
        height;

        constructor(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }


        getX(){

            return this.x;
        }
        getY(){
            return this.y;
        }
        getWidth(){
            return this.width;
        }
        getHeight(){
            return this.height;
        }

    }
    class Line{
        startX;
        startY;
        endX;
        endY;

        constructor(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }


        getStartX(){

            return this.startX;
        }
        getStartY(){
            return this.startY;
        }

        getEndX(){

            return this.endX;
        }
        getEndY(){
            return this.endY;
        }


    }

    class MapEntry{

        key;
        value;


        constructor(key, value) {
            this.key = key;
            this.value = value;
        }

        getKey(){
            return this.key;

        }
        setKey(key){
            this.key = key;

        }
        getValue(){
            return this.value;

        }
        setValue(){
            this.value = value;

        }
    }

    class PopUp extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Display("none"),
                Position(POSITION.FIXED),
                ZIndex(1),
            ])
        }

        setPosition(x, y){
            this.addCustomStyle([
                PositionLeft(x,'px'),
                PositionTop(y,'px')
                ]
            );
        }

        show(){
            this.addCustomStyle(Display("inherit"))
        }
        hide(){
            this.addCustomStyle(Display("none"))
        }
    }

    class GraphItemDetail extends PopUp{
        constructor(id) {
            super(id);
        }
    }
    class ExpandIcon extends HImage{


        constructor(id, src, alt) {
            super(id, src, alt);
            this.addCustomStyle([
                Display("inherit"),
                Position(POSITION.FIXED),
                ZIndex(1),
            ])
        }
    }

    class Dimension{
        width;
        height;


        constructor(width,height) {
            this.width = width;
            this.height = height;
        }

        getWidth(){
            return this.width;

        }
        setWidth(){
            this.width = width;

        }

        getHeight(){
            return this.height;

        }
        setHeight(height){
            this.height = height;

        }
        
    }

    class Sheet extends HCanvas{

        //JScrollPane
        jScrollPane;
        //VerticalBarChart Data
        //ArrayList<Map.Entry<String,Long>>
        graphData;
        //HashMap<String,Double>
        graphDataDouble;
        //HashMap<Date,Double>
        graphDataDateDouble;
        //TreeMap<String, Double>
        displayData;
        //TreeMap<Date, Double>
        displayDataDate;
        largest;
        largestDouble;
        graph = new Map();
        //VerticalBarChart Helpers
        scale;
        //Bar Details Pop Up
        barDetails;
        titleLabel;
        quantityLabel;
        // Lines
        lines;
        abcissaPanel;
        abcissaValue;
        // Bar Colors
        colors;
        // Dimensions
        dimension;
        isDouble;
        //Sorter
        sortType = 0;


        constructor(id) {
            super(id);
            this.addCustomStyle([
                BackgroundColor('ffffff'),
            ]);
            this.initBarDetails();
            this.initLineDetails();
            this.setScale(1);
        }

        getWidth(){
            return this.domElement.width;
        }
        getHeight(){
            return this.domElement.height;
        }
        initBarDetails(){

            this.barDetails = new GraphItemDetail();
            this.titleLabel = new HParagraph("titleLabel"+this.id);
            this.quantityLabel = new HParagraph("titleLabel"+this.id);
            //this.barDetails.setLayout(new GridLayout(2,1));
            this.barDetails.addComponent([
                this.titleLabel,
                this.quantityLabel
            ]);
            this.titleLabel.setFont("Helvetica");
            this.quantityLabel.setFont("Helvetica");
            this.titleLabel.setColor(new Color(0xffffff));
            this.quantityLabel.setColor(new Color(0xffffff));
            this.barDetails.addCustomStyle([
                BackgroundColor('ffffff')
            ]);
            this.barDetails.setVisible(false);

        }

        initLineDetails(){
            this.lines = new Map();
            this.abcissaPanel = new PopUp();
            this.abcissaValue = new HParagraph("abcissaValue"+this.id);
            this.abcissaValue.setFont("Sitka Banner");
            this.abcissaPanel.addComponent(this.abcissaValue);
            this.abcissaPanel.setVisible(false);
        }

        getSortType() {
            return this.sortType;
        }
        setSortType(sortType) {
        this.sortType = sortType;
        }
        addB(entry, buffer){
            this.graphDataDouble.set(entry.getKey(), entry.getValue());
            this.displayData.set(entry.getKey(), entry.getValue());
            this.largest= this.getLargest(0.0);
        }
        add(entry){
            this.graphDataDouble.set(entry.getKey(), entry.getValue());
            this.displayData.set(entry.getKey(), entry.getValue());
            this.largest= this.getLargest(0.0);
            /*
            this.graphDataDateDouble.set(entry.getKey(), entry.getValue());
            this.displayDataDate.set(entry.getKey(), entry.getValue());
            this.largest= this.getLargest();
            */
        }
        modifyB(entry, buffer){
            try{
                this.graphDataDouble.get(entry.getKey());
                this.graphDataDouble.replace(entry.getKey(), entry.getValue());
                this.displayData.get(entry.getKey());
                this.displayData.replace(entry.getKey(), entry.getValue());
            }
            catch (e){
                this.graphDataDouble.set(entry.getKey(),entry.getValue());
                this.displayData.set(entry.getKey(),entry.getValue());
            }
        }
        modify(entry){
            try{
                this.graphDataDateDouble.get(entry.getKey());
                this.graphDataDateDouble.replace(entry.getKey(), entry.getValue());
                this.displayDataDate.get(entry.getKey());
                this.displayDataDate.replace(entry.getKey(), entry.getValue());
            }
            catch (e){
                this.graphDataDateDouble.set(entry.getKey(),entry.getValue());
                this.displayDataDate.set(entry.getKey(),entry.getValue());
            }
        }

        setScale(scale) {
            this.scale = scale;
        }

        getGraphData() {
            return this.graphData;
        }

       getGraphDataDouble() {
            return this.graphDataDouble;
        }

        getLargestD(buffer){
            let largest = 0;
            this.graphDataDouble.forEach((value, key)=>{
                if(value > largest)
                    largest = value;
            });
            return largest;
        }

        getLargest(){
            let largest = 0;
            //to modify
            this.graphDataDouble.forEach((value, key)=>{
                if(value > largest)
                    largest = value;
            });
            return largest;
        }

        roundLargest(){
            //top Modify
            let digits = this.largest.toString().length();
            let power = Math.pow(10, digits);
            let nines = power -1;
            let powered = ((this.largest + nines) / power) * power;
            if (powered !== 0)
            {
                while(powered/2 > this.largest)
                    powered /= 2;
                return powered;
            }
            else{
                return 10;
            }
        }

        roundLargestB(buffer){
        let largest = Math.ceil(this.largestDouble);
        let digits = Math.ceil(this.largestDouble).toString().length;
        let power =  Math.pow(10, digits);
        let nines = power -1;
        let powered = ((largest + nines) / power) * power;
            if (powered !== 0)
            {
                while(powered/2 > largest)
                    powered /= 2;
                return powered;
            }
            else{
                return 10;
            }
}

        drawInitialLinesandStrings(g, max) {
            this.lines.clear();
            let width = this.domElement.width;
            let height = this.domElement.height;
            let interval = 10;
            let yPosition;
            yPosition = (height - 10);
            //g2d.setFont(FontsList.getSansSerif(Font.BOLD ,10));
            g.fillStyle = colorScheme.getDenaryColor();
            g.strokeStyle= colorScheme.getDenaryColor();
            //g2d.setStroke(new BasicStroke(1));
            for (let x = 0; x < max + 1; x += max / 4) {
                let line2D = new Line(5, yPosition, width - 7, yPosition);
                let rectangle2D = new Rectangle(5, yPosition - 4, width - 7, 8);
                this.lines.set(rectangle2D, x);
                g.beginPath();
                g.moveTo(5,yPosition);
                g.lineTo(width-7, yPosition);
                yPosition -= interval * 5;
            }
        }


        drawInitialLinesandStringsI(g,max,increment){
            this.lines.clear();
            let width = this.domElement.width;
            let height = this.domElement.height;
            let interval = 10;
            let yPosition;
            yPosition = (height - 10 +increment);
            //g2d.setFont(FontsList.getSansSerif(Font.BOLD ,10));
            g.fillStyle = colorScheme.getDenaryColor();
            g.strokeStyle= colorScheme.getDenaryColor();
            //g2d.setStroke(new BasicStroke(1));
            for (let x = 0; x < max + 1; x += max / 4) {
                let line2D = new Line(5, yPosition, width - 7, yPosition);
                let rectangle2D = new Rectangle(5, yPosition - 4, width - 7, 8);
                this.lines.set(rectangle2D, x);
                g.beginPath();
                g.moveTo(5,yPosition);
                g.lineTo(width-7, yPosition);
                yPosition -= interval * 5;
        }

}

        getFormattedString(string) {
            let optimal = 30;
            let newString = "";
            if (string.length >6) {
                for (let x = 0; x < 4; x++) {
                    let c = string[x];
                    newString +=c ;
                }
                newString+= "...";
                return newString;
            }
            else
                return string;


        }
    }

    class BarChart extends Sheet{


        expandIcon;
        background;
        enlarged;
        //HashMap<Rectangle2D, Map.Entry<String, Map.Entry<Long, Color>>>
        graphBars = new Map();
        //HashMap<Rectangle2D, Map.Entry<String, Map.Entry<Double, Color>>>
        graphBarsDouble = new Map();
        constructor(id, graphData) {
            super(id);
            this.setGraphData(graphData)
        }

        add(entry, buffer){
        this.graphDataDouble.set(entry.getKey(), entry.getValue());
        this.displayData.set(entry.getKey(), entry.getValue());
        let width = this.graphDataDouble.size * 55 + 10;
        this.setPreferredSize(new Dimension(width ,190));
        this.largestDouble = this.getLargest(0.0);
        this.paintComponent(this.domElement.getContext('2d'))
    }


    initExpandIcon(){
        this.expandIcon = new ExpandIcon("expandIcon" +this.id);
        this.expandIcon.addMouseListener(this);
        this.addComponent(this.expandIcon);
        //let insets = getInsets();
        //let size = expandIcon.getPreferredSize();
        //expandIcon.setBounds(320 + insets.left, 10 + insets.top,
          //  size.width, size.height);
    }

    setGraphData(graphData){
        this.graphDataDouble = graphData;
        this.displayData = new Map([...this.graphDataDouble.entries()].sort());
        this.largestDouble = this.getLargest(0.0);
        //this.enlarged.refreshGraph(graphData, 0.0);
        let width = graphData.size * 55 + 10;
        this.setPreferredSize(new Dimension(width ,200));
        this.isDouble = true;
    }

    setPreferredSize(dimension){
            this.domElement.width = dimension.width;
            this.domElement.height = dimension.height;

    }
    sort(comparator, sortType){
        this.setSortType(sortType);
        this.enlarged.sort(comparator, sortType);
        this.displayData = new Map([...this.graphDataDouble.entries()].sort());
    }

    initListeners(){
        this.addMouseListener(this);
       // this.addMouseMotionListener(this);
        //this.addMouseWheelListener(this);
       // jScrollPane.getHorizontalScrollBar().addAdjustmentListener(this);
    }
    paintComponent(g2d) {
        let width = this.getWidth();
        let height = this.getHeight();
        let  max;
        if(this.isDouble){
            max = this.roundLargestB(0.0);
        }
        else {
            max = this.roundLargest();
        }
        g2d.fillStyle ="rgb(255,255,255)";

        g2d.fillRect(0,0,this.getWidth(),this.getHeight());
        this.drawInitialLinesandStrings(g2d, max,10);
        if( this.graphDataDouble.size !== 0)
            this.drawGraphBars(g2d, max);

        }
    drawGraphBars(g2d, max){
        let width = this.getWidth();
        let height = this.getHeight();
        let  ratio;
        if (max !== 0){
            ratio = (200 / max);
        }
        else { ratio = 1;
        }
        let xPosition = 20;
        let count = 0;
        this.graphBarsDouble.clear();
        if(this.sortType === 0)
            if(this.isDouble){
                this.displayData.forEach((item, key)=>{
                    let barColor = Global.thumbColors[count % Global.thumbColors.length]._color.getHex();
                    console.log(barColor);
                    g2d.fillStyle = (barColor);
                    let bar = new Rectangle(xPosition, (height-20) -(item * ratio),40, (item * ratio));
                    g2d.fillRect(xPosition, (height-20) -(item * ratio),40, (item * ratio));
                    g2d.fillText(this.getFormattedString(key, g2d), xPosition, this.getHeight()-12);
                    this.graphBarsDouble.set(bar, new MapEntry(key, new MapEntry(item, barColor)));
                    this.graphBarsDouble.set(bar, new MapEntry(key, new MapEntry(item, barColor)));
                    xPosition += 50;
                    count++;
                });
            }
            else{
                this.graphData.forEach((item, key)=>
                {
                    let barColor = Global.thumbColors[count % Global.thumbColors.length];
                    g2d.setColor(barColor);
                    let bar = new Rectangle(xPosition, (height-20) -(item * ratio),40, (item * ratio));
                    g2d.fillRect(xPosition, (height-20) -(item * ratio),40, (item * ratio));
                    g2d.fillText(this.getFormattedString(key, g2d), xPosition, this.getHeight()-12);
                    this.graphBars.set(bar, new MapEntry(key, new MapEntry(item, barColor)));
                    xPosition += 50;
                    count++;
                });
            }
        else
        if(this.isDouble){
            this.displayData.forEach((item, key)=>{
                let barColor = Global.thumbColors[count % Global.thumbColors.length];
                g2d.setColor(barColor);
                let bar = new Rectangle(xPosition, (height-20) -(item * ratio),40, (item * ratio));
                g2d.fillRect(xPosition, (height-20) -(item * ratio),40, (item * ratio));
                g2d.fillText(this.getFormattedString(key, g2d), xPosition, this.getHeight()-12);
                this.graphBarsDouble.set(bar, new MapEntry(key, new MapEntry(item, barColor)));
                this.graphBarsDouble.set(bar, new MapEntry(key, new MapEntry(item, barColor)));
                xPosition += 50;
                count++;
            });
        }
        else{
            this.graphData.forEach((item, key)=>
            {
                let barColor = Global.thumbColors[count % Global.thumbColors.length];
                g2d.setColor(barColor);
                let bar = new Rectangle(xPosition, (height-20) -(item * ratio),40, (item * ratio));
                g2d.fillRect(this.getFormattedString(key, g2d), xPosition, this.getHeight()-12);
                g2d.fillText(this.getFormattedString(key, g2d), xPosition, this.getHeight()-12);
                this.graphBars.set(bar, new MapEntry(key, new MapEntry(item, barColor)));
                xPosition += 50;
                count++;
            });
        }


    }
    getEnlarged() {
        return this.enlarged;
    }
    mouseClicked(e) {
        if (e.getSource() === this.expandIcon){

           // this.enlarged.getGraphSheetEnlarged().getFilterScrollPane().setVisible(false);
            //this.enlarged.getGraphSheetEnlarged().refreshGraph();
            //this.enlarged.show(this, e.getX()-500,e.getY()-50);

        }

    }
    }

    class DisplayLabel extends HParagraph{
        constructor(id, text) {
            super(id,text);
            this.addCustomStyle([
                Width(50, 'px'),
                Height(20, 'px'),
                FontSize(12,'px'),
                FontFamily("Helvetica"),
                Padding(0),

            ])

        }
    }
    class DetailsTitle extends HParagraph{

        constructor(id, text) {
            super(id,text);
            this.addCustomStyle([
                Width(370, 'px'),
                Height(30, 'px'),
                FontWeight("Bold"),
                FontFamily("Calibri"),
            ])
        }
    }
    class DetailsPanel extends HDivision{
        product;
        stockLevel;
        price;
        sales;
        details;
        graphPanel;


        constructor(id, product, stockLevel, price, sales) {
            super(id);
            this.product = product;
            this.stockLevel = stockLevel;
            this.price = price;
            this.sales = sales;
            this.stockLevel.addCustomStyle(
                [
                    Padding(0,'px').setLeft(5),
                    Float('left'),
                    Width(300, 'px'),
                    Height(20, 'px'),
                ]);
            this.price.addCustomStyle(
                [
                    Padding(0,'px').setLeft(5),
                    Float('left'),
                    Width(300, 'px'),
                    Height(20, 'px'),
                ]);
            this.sales.addCustomStyle(
                [
                    Padding(0,'px').setLeft(5),
                    Float('left'),
                    Width(300, 'px'),
                    Height(20, 'px'),
                ]);
            this.product.addCustomStyle(
                [
                    Padding(0,'px').setLeft(5),
                    Float('left'),
                    Width(300, 'px'),
                    Height(20, 'px'),
                ]);

            this.addCustomStyle([
                BackgroundColor(colorScheme.getTertiaryColor()),
                Width(400, 'px'),
                Height(this.getProperDimensions(), 'px'),
                Padding(5,'px')
            ]);
            this.addComponentListener(this);
            this.details = new HDivision('detailsDP');
            this.details.addCustomStyle([
                Width(400, 'px'),
                Height(150, 'px'),
            ]);

            let productDP =new DisplayLabel('productDP', "Product:");
            let stockLevelDP =new DisplayLabel('levelDP', "Level:");
            let priceDP =new DisplayLabel('priceDP', "Price:");
            let salesDP =new DisplayLabel('salesDP', "Sales:");

            productDP.addCustomStyle(
                [
                    Float('left'),
                    Width(60, 'px'),
                    Height(20, 'px'),
                    TextAlignment(TEXTALIGNMENT.RIGHT)
                ]);
            stockLevelDP.addCustomStyle(
                [
                    Float('left'),
                    Width(60, 'px'),
                    Height(20, 'px'),
                    TextAlignment(TEXTALIGNMENT.RIGHT)
                ]);
            priceDP.addCustomStyle(
                [
                    Float('left'),
                    Width(60, 'px'),
                    Height(20, 'px'),
                    TextAlignment(TEXTALIGNMENT.RIGHT)
                ]);
            salesDP.addCustomStyle(
                [
                    Padding(0,'px').setTop(3),
                    Float('left'),
                    Width(60, 'px'),
                    Height(20, 'px'),
                    TextAlignment(TEXTALIGNMENT.RIGHT)
                ]);

            this.graphPanel = new HDivision('graphPanelDP');
            this.graphPanel.addCustomStyle([
                Width(300,'px'),
                Height(200,'px'),
                OverflowX("scroll"),
                BorderRadius(5,'px')
            ]);
            new HClass("graphPanelDP" +"::-webkit-scrollbar").addCustomStyle([
                Height(5,'px'),


            ]);
            new HClass("graphPanelDP" +"::-webkit-scrollbar-track").addCustomStyle([


            ]);
            new HClass("graphPanelDP" +"::-webkit-scrollbar-thumb").addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor())


            ]);

            this.details.addComponent(new DetailsTitle('dTDP', "Details"));
            this.details.addComponent(new OneByTwoRow("dTDPORproductDP",productDP, this.product));
            this.details.addComponent(new OneByTwoRow("dTDPORlevelDP",stockLevelDP, this.stockLevel));
            this.details.addComponent(new OneByTwoRow("dTDPORpriceDP",priceDP, this.price));
            this.details.addComponent(new OneByTwoRow("dTDPOsalesDP",salesDP, this.sales));
            this.addComponent([this.details, this.graphPanel]);
        }


        getProperDimensions(){
            let height = window.innerHeight;
            return window.innerHeight-216;
        }
        setDetailsVisible(visible){
            this.details.setVisible(visible);
        }
        getProduct() {
            return this.product;
        }

        setProduct(value) {
            this.product = value;
        }

        getStockLevel() {
            return this.stockLevel;
        }

        setStockLevel(value) {
            this.stockLevel = value;
        }

        getPrice() {
            return this.price;
        }

        setPrice(value) {
            this.price = value;
        }

        getSales() {
            return this.sales;
        }

        setSales(value) {
            this.sales = value;
        }

        getDetails() {
            return this.details;
        }

        setDetails(value) {
            this.details = value;
        }

        getGraphPanel() {
            return this.graphPanel;
        }

        setGraphPanel(value) {
            this.graphPanel = value;
        }

        componentResized(e){
            this.addCustomStyle([
                Height(this.getProperDimensions(), 'px')]);
        }
    }
    class StockHeaderLabel extends HParagraph{
        background;
        selected;
        sortImage;
        sortType;
        type;


        constructor(id, text, color= colorScheme.getSecondaryColor()) {
            super(id, text);
            this.selected= false;
            this.background = color;
            this.addCustomStyle([
                    BackgroundColor(this.background),
                    FontSize(12, 'px'),
                    FontWeight(FONTWEIGHT.BOLD),
                    FontFamily("Helvetica"),
                    Margin(1,'px'),
                    Padding(0, 'px').setTop(12).setLeft(8),
                    Width(31),
                    Height(28,'px'),
                    BorderRadius(2,'px'),
                    Float(FLOAT.LEFT),
                    Overflow(OVERFLOW.HIDDEN)
                ]
            );
            this.sortImage = new HImage(id+"sISHL");
            this.sortImage.addCustomStyle([

                Display("inline"),

            ]);
            this.addComponent(this.sortImage);
            this.id = id;
        }

        repaint(){
            this.addCustomStyle(
                BackgroundColor(this.background)
            );
            if(this.selected){

                if(this.sortType === 0)
                {
                    this.sortImage.domElement.src = sortAscIcon;
                }
                else
                    this.sortImage.domElement.src = sortAscIcon;

            }
        }

        getSortType() {
            return this.sortType;
        }

        setSortType(value) {
            this.sortType = value;
        }

        getType() {
            return this.type;
        }

        setType(value) {
            this.type = value;
        }

        getId() {
            return this.id;
        }

        setId(value) {
            this.id = value;
        }

        getText() {
            return this._textContent;
        }

        setText(value) {
            super.setTextContent(value)
        }

        getSelected() {
            return this.selected;
        }

        setSelected(value) {
            this.selected = value;
        }

        getBackground() {
            return this.background;
        }

        setBackground(value) {
            this.background = value;
        }

        getSortImage() {
            return this.sortImage;
        }

        setSortImage(value) {
            this.sortImage = value;
        }
    }
    class StockHeader extends HDivision{

        product;
        stockLevel;
        stockValue;


        constructor(id) {
            super(id);
            this.setUpRow();
            this.addCustomStyle(Width(100));
            this.addComponentListener(this)

        }

        setUpRow(){
            this.product = new StockHeaderLabel(this.id+ "productHeaderSH","Product", colorScheme.getPrimaryColor());
            this.stockLevel = new StockHeaderLabel(this.id+ "stockLevelHeaderSH","Stock Level", colorScheme.getPrimaryColor());
            this.stockValue = new StockHeaderLabel(this.id+ "stockValueHeaderSH","Stock Value", colorScheme.getPrimaryColor());
            this.product.addCustomStyle(Width(this.getSHLWidth(),'px'));
            this.stockLevel.addCustomStyle(Width(this.getSHLWidth(),'px'));
            this.stockValue.addCustomStyle(Width(this.getSHLWidth(),'px'));

            //set sizes of labels

            this.addComponent(this.product);
            this.addComponent(this.stockLevel);
            this.addComponent(this.stockValue);
        }

        addMouseListener(l) {
            this.product.addMouseListener(l);
            this.stockLevel.addMouseListener(l);
            this. stockValue.addMouseListener(l);
        }

        componentResized(e){
            this.product.addCustomStyle(Width(this.getSHLWidth(),'px'));
            this.stockLevel.addCustomStyle(Width(this.getSHLWidth(),'px'));
            this.stockValue.addCustomStyle(Width(this.getSHLWidth(),'px'));

        }

        getSHLWidth(){
            return ((window.innerWidth -565)/3) -10;
        }

        getProduct(){
            return this.product;
        }
        getStockLevel(){
            return this.stockLevel;
        }
        getStockValue(){
            return this.stockValue
        }

    }
    class StockDisplayItem extends HDivision{

        selected;
        stockItem;


        constructor(id) {
            super(id);
        }

        isSelected() {
            return this.selected;
        }

        setSelected(selected) {
            this.selected = selected;
        }
        getStockItem() {
            return this.stockItem;
        }

        setStockItem(stockItem) {
            this.stockItem = stockItem;
        }

        turnOn(){
        }

        turnOff(){
        }




    }
    class StockRow extends StockDisplayItem{

        product;
        stockLevel;
        stockValue;


        constructor(id, entry) {
            super(id);
            this.domElement.stockItem = entry;
            this.stockItem = entry;
            this.setUpRow();

        }

        setUpRow(){
            this.product = new StockHeaderLabel(this.id+ "productRowSH",this.stockItem.getProduct().getName(), colorScheme.getTertiaryColor());
            this.stockLevel = new StockHeaderLabel(this.id+ "stockLevelRowSH",this.stockItem.getQty() + "", colorScheme.getTertiaryColor());
            this.stockValue = new StockHeaderLabel(this.id+ "stockValueRowSH","$"+ this.stockItem.getQty() * this.stockItem.getProduct().getUnitCost() +"", colorScheme.getTertiaryColor());
            this.addCustomStyle([
                Width(100,'%'),
                Margin(0,'px').setLeft(1)
            ]);
            this.product.addCustomStyle(Width(this.getSHLWidth(),'px'));
            this.stockLevel.addCustomStyle(Width(this.getSHLWidth(),'px'));
            this.stockValue.addCustomStyle(Width(this.getSHLWidth(),'px'));
            this.product.addCustomStyle(Margin(0,'px').setTop(1));
            this.stockLevel.addCustomStyle(Margin(0,'px').setTop(1));
            this.stockValue.addCustomStyle(Margin(0,'px').setTop(1));
            this.addComponentListener(this);
            this.product.addMouseListener(this);
            this.stockLevel.addMouseListener(this);
            this. stockValue.addMouseListener(this);

            //set sizes of labels

            this.addComponent(this.product);
            this.addComponent(this.stockLevel);
            this.addComponent(this.stockValue);
        }

        addMouseListener(l) {
            this.product.addMouseListener(l);
            this.stockLevel.addMouseListener(l);
            this. stockValue.addMouseListener(l);
            super.addMouseListener(l);
        }


        refresh(entry){
            this.stockItem = entry;
            this.product.setText(this.stockItem.getProduct().getName());
            this.stockLevel.setText(this.stockItem.getQty() + "");
            this.stockValue.setText("$"+ this.stockItem.getQty() * this.stockItem.getProduct().getUnitCost() +"");
        }


        turnOn(){
            this.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor())
            ]);
            this.product.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor())
            ]);
            this.stockLevel.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor())
            ]);
            this.stockValue.addCustomStyle([
                BackgroundColor(colorScheme.getPrimaryColor())
            ]);
        }
        turnOff(){
            this.addCustomStyle([
                BackgroundColor(colorScheme.getTertiaryColor())
            ]);
            this.product.addCustomStyle([
                BackgroundColor(colorScheme.getTertiaryColor())
            ]);
            this.stockLevel.addCustomStyle([
                BackgroundColor(colorScheme.getTertiaryColor())
            ]);
            this.stockValue.addCustomStyle([
                BackgroundColor(colorScheme.getTertiaryColor())
            ]);
        }

        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }

        mouseOver(e){
            this.turnOn();
        }

        mouseOut(e){
            if (!this.selected){
                this.turnOff();
            }
        }
        mouseDown(e){

        }

        componentResized(e){
            this.product.addCustomStyle(Width(this.getSHLWidth(),'px'));
            this.stockLevel.addCustomStyle(Width(this.getSHLWidth(),'px'));
            this.stockValue.addCustomStyle(Width(this.getSHLWidth(),'px'));

        }

        getSHLWidth(){
            return ((window.innerWidth -565)/3) -9;
        }
    }

    class ViewChangePanel extends HDivision{

        listLabel;
        tilesLabel;
        selected;

        constructor(id) {
            super(id);
            this.addCustomStyle([
                Height(30,'px'),
                Width(55,'px'),
            ]);
            this.listLabel = new HImage("listL_"+id, listIcon,"ListView");
            this.tilesLabel = new HImage("tilesL_"+id, tilesIcon,"TilesView");
            this.listLabel.addMouseListener(this);
            this.tilesLabel.addMouseListener(this);
            this.addComponent([this.listLabel,this.tilesLabel])
        }
        getListLabel() {
            return this.listLabel;
        }
        getSelected(){
            return this.selected;
        }


        getTilesLabel() {
            return this.tilesLabel;
        }
        setSelection(label){
            if (label === this.listLabel){
                this.listLabel.domElement.src =listIcon2;
                this.selected = this.listLabel;
            }
            else{
                this.tilesLabel.domElement.src = tilesIcon2;
                this.selected = this.tilesLabel;
            }
        }


        mouseClicked(e){

            if (e.getSource() === this.listLabel) {
                if(e.getSource() !== this.selected){
                    this.setSelection(this.listLabel);
                    this.tilesLabel.domElement.src = tilesIcon;
                }
            }
            else{
                if(e.getSource() !== this.selected){
                    this.setSelection(this.tilesLabel);
                    this.listLabel.domElement.src =listIcon;
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

            if (e.getSource() === this.listLabel) {
                if(e.getSource() !== this.selected)
                    this.listLabel.domElement.src =listIcon;
            }
            else{
                if(e.getSource() !== this.selected)
                    this.tilesLabel.domElement.src = tilesIcon;
            }
        }
        mouseOver(e){
            if (e.getSource() === this.listLabel) {
                if(e.getSource() !== this.selected)
                    this.listLabel.domElement.src =listIcon2;
            }
            else{
                if(e.getSource() !== this.selected)
                    this.tilesLabel.domElement.src = tilesIcon2;
            }


        }
        mouseDown(e){

        }
    }

    class SearchBarAndViewPanel extends HDivision{

        searchBar;
        viewChangePanel;

        constructor(id) {
            super(id);
            this.addCustomStyle([
                Height(30,'px'),
                Width(265,'px'),
                Padding(0, 'px').setTop(15),
            ]);
            this.searchBar = TextInput(id+"SB");
            this.searchBar.addCustomStyle([
                BackgroundColor(colorScheme.getTertiaryColor()),
                Height(25,'px'),
                Width(200,'px'),
                Border(BORDERWIDTH.THIN, BORDERSTYLE.HIDDEN)
            ]);
            this.viewChangePanel = new ViewChangePanel(id+"VCP");
            this.viewChangePanel.addCustomStyle([
                Float(FLOAT.RIGHT),
                Padding(0,'px').setTop(3)
            ]);
            this.addComponent([this.searchBar,this.viewChangePanel])
        }
        addMouseListener(l){
            this.viewChangePanel.getListLabel().addMouseListener(l);
            this.viewChangePanel.getTilesLabel().addMouseListener(l);

        }
        addDocumentListener(d){
            this.searchBar.addDocumentListener(d);

        }
        getSearchBar() {
            return this.searchBar;
        }

        getViewChangePanel() {
            return this.viewChangePanel;
        }
    }

    class StockView extends HDivision{

        stockModel1;
        stockModel2;
        grossTotal;
        grossTotalT;

        //Top Panels


        contentPanel;
        detailsPanel;
        tableCon;
        tableConSPane;
        tableConSPaneThumb;
        stockHeader;

        productSort;
        levelSort;
        valueSort;
        selected;


        //Sorters
        productSortDirection = 0;
        stockLevelSortDirection = 0;
        stockValueSortDirection = 0;


        //StockItems
        stockContainer;
        stockContainerHeight;
        stockContainerThumb;
        searchBarandViewChange;
        detailsCon;
        lastSelected;

        //Graphs
        lineGraphPanel;
        barChartPanel;


        //Details
        totalLabel;
        productLabel;
        stockLevelLabel;
        priceLabel;
        salesPanel;
        constructor() {
            super('stockView');
            this.initModels();
            this.initTopPanels();
            this.initGraphs();
            this.initContentPanel();
            this.initDetailsPanel();
            this.addComponentListener(this);
            //this.setUpTimer();
            this.displayModel();
            this.sortRowsAsc(1, this.stockContainer)
            //this.sortRowsAsc(1, stockContainer);
            //this.addComponentListener(this);
        }


        initModels(){

            this.stockModel1 = Global.stock.getTickets();
            this.stockModel2 = this.stockModel1;


        }
        initTopPanels(){
            this.contentPanel = new HDivision("contentPanel");
            this.contentPanel.addCustomStyle([
                BackgroundColor(colorScheme.getQuaternaryColor()),
                Width(this.getContentWidth(), "px"),
                Height(this.getProperDimensions(),"px"),
                Float(FLOAT.LEFT)

            ]);
            this.detailsPanel = new HDivision("detailsPanelStock");
            this.detailsPanel.addCustomStyle([
                Width(400, 'px'),
                Height(this.getProperDimensions(), 'px'),
                Overflow(OVERFLOW.HIDDEN),
                Float('right')
            ]);

            this.addComponent([this.contentPanel,this.detailsPanel])

        }


        initContentPanel() {
            let container = new HDivision('containerContent');
            container.addCustomStyle([
                BackgroundColor(colorScheme.getQuaternaryColor()),
                Height(100,"%"),
                Width(100,"%")
            ]);
            container.addMouseListener(this);

            this.initHeaderSearchViewPanel(container);
            this.initItemsView(container);
            this.contentPanel.addComponent(container);
        }

        initDetailsPanel() {
            this.grossTotal = 0;
            let infoBar = new HDivision('infoBar');
            infoBar.addCustomStyle([
                BackgroundColor(colorScheme.getSecondaryColor()),
                BorderRadius(5, 'px'),
                Height(50, 'px'),
                Width(400, 'px'),
                Padding(0,'px').setTop(15).setBottom(15)
            ]);

            this.totalLabel = new Banner2("totalLabelStock","totalLabel");

            infoBar.addComponent(this.totalLabel);

            this.productLabel = new DisplayLabel("productLabelSt","productLabel");
            this.stockLevelLabel = new DisplayLabel("stockLevelLabelSt","stockLevelLabel");
            this.priceLabel = new DisplayLabel("priceLabelst","priceLabel");
            this.productLabel.addCustomStyle([
                FontSize(12,'px'),
                FontFamily("Helvetica")

            ]);
            this.stockLevelLabel.addCustomStyle([
                FontSize(12,'px'),
                FontFamily("Helvetica")

            ]);
            this.priceLabel.addCustomStyle([
                FontSize(12,'px'),
                FontFamily("Helvetica")

            ]);
            this.dateInput1 = DateInput('salesPDate1');
            this.dateInput2 = DateInput('salesPDate2');
            this.dateInput1.addCustomStyle([
                Width(120,'px'),
                Height(15,'px'),
                Padding(0,'px').setLeft(5)
            ]);
            this.dateInput2.addCustomStyle([
                Width(120,'px'),
                Height(15,'px')
            ]);

            this.salesPanel = new OneByTwoRow('salesPanelStock', this.dateInput1, this.dateInput2);
            this.detailsCon = new DetailsPanel("detailsConStock",this.productLabel,this.stockLevelLabel,this.priceLabel,this.salesPanel);
            this.detailsCon.setDetailsVisible(false);
            this.detailsPanel.addComponent([infoBar, this.detailsCon]);
            this.setChartViewBar();

        }

        initHeaderSearchViewPanel(container) {
            let headerBar = new HDivision('headerBarStock');
            headerBar.addCustomStyle([
                Height(60,'px'),
                Width(100),
                Overflow(OVERFLOW.HIDDEN)
            ]);
            let accountTitle = new HParagraph('hbStockaT', "Inventory");
            accountTitle.addCustomStyle([
                Height(40,'px'),
                FontFamily("Sitka Banner"),
                FontSize(20,'px'),
                Margin(0, 'px').setTop(10),
                Padding(0, 'px').setLeft(15),
                Float(FLOAT.LEFT)
            ]);
            this.searchBarandViewChange = new SearchBarAndViewPanel("sBBChbStock");
            this.searchBarandViewChange.addCustomStyle([
                Float(FLOAT.RIGHT),
                Margin(0,'px').setRight(20),
            ]);
            this.searchBarandViewChange.addMouseListener(this);
            this.searchBarandViewChange.addDocumentListener(this);
            headerBar.addComponent([accountTitle,this.searchBarandViewChange]);
            container.addComponent(headerBar);

        }

        initItemsView(container) {

            this.tableCon = new HDivision("tableConsStock");
            this.tableCon.addCustomStyle([
                Height(80, "%"),
                Width(this.getTableConWidth(), "px"),
                Padding(0,'px').setLeft(80).setRight(80),
            ]);
            container.addComponent(this.tableCon);

            //Stock Container
            this.stockHeader = new StockHeader('stockHeader');
            this.stockHeader.addMouseListener(this);
            this.stockContainer = new HDivision('stockContainer');
            this.stockContainer.addCustomStyle([
                Height(this.getProperDimensions()-136,'px'),
                Width(100),
                OverflowY("auto"),
                OverflowX(OVERFLOW.HIDDEN),

            ]);
            this.stockContainer.addMouseListener(this);
            this.stockContainerThumb = new HDivision("tableConStockThumb");
            this.stockContainerThumb.addCustomStyle(
                [
                    Height(80),
                    Width(100),
                ]
            );
            this.tableCon.addComponent([this.stockHeader,this.stockContainer])


        }

        setChartViewBar(){
            try{
                //this.detailsCon.getGraphPanel().remove(lineGraphPanel);
                this.detailsCon.getGraphPanel().addComponent(this.barChartPanel);
            }
            catch (e){
                this.detailsCon.getGraphPanel().add(this.barChartPanel);
            }
        }
        getProperDimensions(){
            return window.innerHeight-120;
        }
        getContentWidth(){
            return window.innerWidth-400;
        }
        getTableConWidth(){
            return window.innerWidth-560;
        }
        getContentHeight(){
            return window.innerHeight-120;
        }

      search(pattern){
        let myFunction =(element, index ) =>{
            let stockRow = element._element;
            stockRow.setVisible(true);
            let found = false;
            if(!this.check(pattern, stockRow.getStockItem())){
            stockRow.setVisible(false);
            }
        };
        this.stockContainer.returnAll().forEach(myFunction);
        this.stockContainerThumb.returnAll().forEach(myFunction)
    }


     check(pattern,  entry){
        if (pattern.length !== 0){
            let  found = false;
            if(Helper.KMPSearch(pattern,entry.getProduct().getName()))
                found = true;
            if(Helper.KMPSearch(pattern,entry.getQty() +""))
                found = true;
            if(Helper.KMPSearch(pattern,entry.getProduct().getUnitCost()*entry.getQty() +""))
                found = true;
            return found;
        }
        else return  true;
    }


        sortRowsAsc(type, container) {
            switch (type) {
                case 1:
                    for (let index = 1; index < container.domElement.children.length; index++) {

                        let position = index;
                        let stockRow = container.domElement.children[index];

                        while (position > 0 && container.domElement.children[position - 1].stockItem.getProduct().getName().localeCompare(stockRow.stockItem.getProduct().getName()) > 0) {

                            try {
                                container.domElement.insertBefore(container.domElement.children[position - 1], container.domElement.children[position + 1]);
                            }
                            catch (e) {
                                container.domElement.appendChild(container.domElement.children[position - 1])

                            }
                            position = position - 1;
                        }
                        container.domElement.insertBefore(stockRow, container.domElement.children[position]);
                    }
                    break;
                case 2:
                    for (let index = 1; index < container.domElement.children.length; index++) {

                        let position = index;
                        let stockRow = container.domElement.children[index];

                        console.log(typeof stockRow.stockItem.getQty(), stockRow.stockItem.getQty() );
                        while (position > 0 && container.domElement.children[position - 1].stockItem.getQty() >  stockRow.stockItem.getQty()) {

                            try {
                                container.domElement.insertBefore(container.domElement.children[position - 1], container.domElement.children[position + 1]);
                            }
                            catch (e) {
                                container.domElement.appendChild(container.domElement.children[position - 1])

                            }
                            position = position - 1;
                        }
                        container.domElement.insertBefore(stockRow, container.domElement.children[position]);
                    }
                    break;
                    case 3:
                        for (let index = 1; index < container.domElement.children.length; index++) {

                            let position = index;
                            let stockRow = container.domElement.children[index];

                            while (position > 0 && container.domElement.children[position - 1].stockItem.getTotal().getGrossTotal() >  stockRow.stockItem.getTotal().getGrossTotal()) {

                                try {
                                    container.domElement.insertBefore(container.domElement.children[position - 1], container.domElement.children[position + 1]);
                                }
                                catch (e) {
                                    container.domElement.appendChild(container.domElement.children[position - 1])

                                }
                                position = position - 1;
                            }
                            container.domElement.insertBefore(stockRow, container.domElement.children[position]);
                        }
                }
            }

        sortRowsDesc(type, container){
            switch (type) {
                case 1:
                    for (let index = 1; index < container.domElement.children.length; index++) {

                        let position = index;
                        let stockRow = container.domElement.children[index];

                        while (position > 0 && container.domElement.children[position - 1].stockItem.getProduct().getName().localeCompare(stockRow.stockItem.getProduct().getName()) < 0) {

                            try {
                                container.domElement.insertBefore(container.domElement.children[position - 1], container.domElement.children[position + 1]);
                            }
                            catch (e) {
                                container.domElement.appendChild(container.domElement.children[position - 1])

                            }
                            position = position - 1;
                        }
                        container.domElement.insertBefore(stockRow, container.domElement.children[position]);
                    }
                    break;
                case 2:
                    for (let index = 1; index < container.domElement.children.length; index++) {

                        let position = index;
                        let stockRow = container.domElement.children[index];

                        while (position > 0 && container.domElement.children[position - 1].stockItem.getQty() <  stockRow.stockItem.getQty()) {

                            try {
                                container.domElement.insertBefore(container.domElement.children[position - 1], container.domElement.children[position + 1]);
                            }
                            catch (e) {
                                container.domElement.appendChild(container.domElement.children[position - 1])

                            }
                            position = position - 1;
                        }
                        container.domElement.insertBefore(stockRow, container.domElement.children[position]);
                    }
                    break;
                case 3:
                    for (let index = 1; index < container.domElement.children.length; index++) {

                        let position = index;
                        let stockRow = container.domElement.children[index];

                        while (position > 0 && container.domElement.children[position - 1].stockItem.getTotal().getGrossTotal() <  stockRow.stockItem.getTotal().getGrossTotal()) {

                            try {
                                container.domElement.insertBefore(container.domElement.children[position - 1], container.domElement.children[position + 1]);
                            }
                            catch (e) {
                                container.domElement.appendChild(container.domElement.children[position - 1])

                            }
                            position = position - 1;
                        }
                        container.domElement.insertBefore(stockRow, container.domElement.children[position]);
                    }
            }
        }

        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                    if (e.getSource() instanceof  StockHeaderLabel) {
                        this.mouseClickedStockHeaderLabel(e);
                        break;
                    }
                    if (e.getSource() instanceof  StockRow) {
                        this.mouseClickedStockRow(e);
                        break;
                    }
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

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        documentChanged(e){
            this.search(e.getSource().getInputText());
        }
        mouseClickedStockHeaderLabel(e){

            if (e.getSource() === this.stockHeader.getProduct() || e.getSource() === this.stockHeader.getStockLevel() || e.getSource() === this.stockHeader.getStockValue()) {

                if (e.getSource() === this.stockHeader.getProduct()) {
                    if(this.productSortDirection === 0)
                    {
                        this.sortRowsDesc(1, this.stockContainer);
                        ///this.barChartPanel.sort(this.productSort, 1);
                        this. productSortDirection = 1;
                    }
                    else{
                        this.sortRowsAsc(1, this.stockContainer);
                        //this.barChartPanel.setSortType(0);
                        //this.barChartPanel.sort(this.productSort, 0);
                        this.productSortDirection = 0;
                    }
                }
                if (e.getSource() === this.stockHeader.getStockLevel()) {
                    if(this.stockLevelSortDirection === 0)
                    {
                        this.sortRowsDesc(2, this.stockContainer);
                        //this.barChartPanel.sort(this.levelSort, 1);
                        this.stockLevelSortDirection = 1;
                    }
                    else{
                        this.sortRowsAsc(2, this.stockContainer);
                        // this.barChartPanel.sort(this.levelSort, 0);
                        this.stockLevelSortDirection = 0;
                    }

                }
                if (e.getSource() === this.stockHeader.getStockValue()) {
                    if(this.stockValueSortDirection === 0)
                    {
                        this.sortRowsDesc(3, this.stockContainer);
                        // this.barChartPanel.sort(this.valueSort, 1);
                        this.stockValueSortDirection = 1;
                    }
                    else{
                        this.sortRowsAsc(3, this.stockContainer);
                        //this.barChartPanel.sort(this.valueSort, 0);
                        this.stockValueSortDirection = 0;
                    }
                }
            }


        }
        mouseClickedStockRow(e){
            let stockRow = e.getSource();
            this.productLabel.setText(stockRow.getStockItem().getProduct().getName());
            this.stockLevelLabel.setText(stockRow.getStockItem().getQty() + "");
            this.priceLabel.setText("$" + stockRow.getStockItem().getProduct().getUnitCost());
           // this.setChartViewLine(stockRow.getStockItem().getProduct());
            if (this.lastSelected != null) {
                if (!stockRow.isSelected()) {
                    this.lastSelected.turnOff();
                    this.lastSelected.setSelected(false);
                    stockRow.setSelected(true);
                    stockRow.turnOn();
                    this.lastSelected = stockRow;
                    this.selected = stockRow;
                }
            }
            else {
                stockRow.setSelected(true);
                stockRow.turnOn();
                this.lastSelected = stockRow;
                this.selected = stockRow;
            }

            this.detailsCon.setDetailsVisible(true);
        }



        displayModel(){
            //if (this.searchBarandViewChange.getViewChangePanel().getSelected() === this.searchBarandViewChange.getViewChangePanel().getListLabel()){
                let myFunction =(value, key, map)=>{
                    let stockRow = this.modelRowFound(value);
                    if(stockRow == null){
                        let stockRow1 = new StockRow("stockRow"+key.replace(/\s+/g, "").trim(),value);
                        stockRow1.addMouseListener(this);
                        this.stockContainer.add(stockRow1);
                        this.barChartPanel.add(new MapEntry(value.getProduct().getName(), value.getQty()));
                        this.grossTotal += value.getTotal().getGrossTotal();
                    }
                    else{
                        let before = stockRow.getStockItem().getTotal().getGrossTotal();
                        stockRow.refresh(value);
                        //this.barChartPanel.modify(Map.entry(value.getProduct().getName(), value.getQty()));
                        this.grossTotal += value.getTotal().getGrossTotal() - before;
                    }
                };

                this.stockModel2.forEach(myFunction);
                this.totalLabel.setText("$" + this.grossTotal);

            //}
            /**
             else{
            for(Map.Entry <String,Entry> entry: stockModel2.entrySet()){
                FolderThumbNail folderThumbNail = modelThumbFound(value);
                if(folderThumbNail == null){
                    FolderThumbNail folderThumbNail1 = new FolderThumbNail(value);
                    folderThumbNail1.addMouseListener(this);
                    grossTotalT += value.getTotal().getGrossTotal();
                    stockContainerThumb.add(folderThumbNail1);
                    colorsCount++;
                }
                else{
                    before = folderThumbNail.getStockItem().getTotal().getGrossTotal();
                    grossTotalT += value.getTotal().getGrossTotal() - before;
                    folderThumbNail.refresh(value);
                }
            }
            totalLabel.setText("$" + grossTotalT);
            stockContainerThumb.revalidate();
            stockContainerThumb.repaint();
            componentResized(new ComponentEvent(stockContainerThumb, 2));
        }
             */
        }


        componentResized(){
            this.contentPanel.addCustomStyle([
                Width(this.getContentWidth(), "px"),
                Height(this.getProperDimensions(),"px"),
            ]);
            this.detailsPanel.addCustomStyle(
                Height(this.getProperDimensions(),"px"));
            this.tableCon.addCustomStyle([
                Width(this.getTableConWidth(), "px"),
            ]);
            this.stockContainer.addCustomStyle(
                Height(this.getProperDimensions()-136,"px"))
        }

        modelRowFound(entry) {
            this.stockContainer.returnAll().forEach((stockRow, index,array)=>{
                if(entry.getId() === stockRow._element.getStockItem().getId())
                    return stockRow;
            });
            return null;
        }

        initGraphs() {
            this.barChartPanel = new BarChart("barChartStock",new Map());
        }
    }


    try{

        Global.products =  await API.getProducts(entity, user);
        Global.stock = await API.getStock(entity, user);
    }
    catch (e) {
        console.log(e);
        Global.products = [];
    }


    let mainView = new MainView();
    let stockView = new StockView();



    mainView.center.addComponent(stockView);
}();

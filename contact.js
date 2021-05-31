class Contact {
 firstName;
 lastName;
addess;
 city;
 state;
 zip;
 phoneNumber;
 email;

constructor(firstName,lastName,addess,city,state,zip,phoneNumber,email) {
 this.firstName = firstName;
 this.lastName = lastName;
 this.addess = addess;
 this.city = city;
 this.state = state;
 this.zip = zip;
 this.phoneNumber = phoneNumber;
 this.email = email;
}
/* @Description - to validate first name should start with captital character
     * to used throw keyword for the invalid first name */

    get firstName() { return this.firstName; }
    set firstName(firstName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(firstName))
            this.firstName = firstName;
        else
            throw "Invalid first Name";
    }

    /* @Description - to validate last name should start with captital character
    * to used throw keyword for the invalid last name */

    get lastName() { return this.lastName; }
    set lastName(lastName) {
        let nameRegex = RegExp("^[A-Z]{1}[A-Za-z]{2,}$");
        if (nameRegex.test(lastName))
        this.lastName = lastName;
        else
            throw "Invalid  last Name";
    }

    /* @Description - to validate address should start with captital letters or small letters
    * to used throw keyword for the invalid address */

    get address() { return this.address; }
    set address(address) {
        let addressRegex = RegExp("^[A-Za-z]{4,}$");
        if (addressRegex.test(address))
            this.address = address;
        else
            throw "Invalid address ";
    }

    /* @Description - to validate city should start with captital letters or small letters
    * to used throw keyword for the invalid city  */

    get city() { return this.city; }
    set city(city) {
        let cityRegex = RegExp("^[A-Za-z]{4,}$");
        if (cityRegex.test(city))
            this.city = city;
        else
            throw "Invalid city ";
    }

    /* @Description - to validate state should start with captital letters or small letters
    * to used throw keyword for the invalid state  */

    get state() { return this.state; }
    set state(state) {
        let stateRegex = RegExp("^[A-Za-z0-9]{4,}$");
        if (stateRegex.test(state))
            this.state = state;
        else
            throw "Invalid state";
    }
/** ToString Method for Printing Result */

    /* @Description - to validate zip  should start with numbers 
    * to used throw keyword for the invalid state  */

    get zip() { return this.zip; }
    set zip(zip) {
        let zipRegex = RegExp("^[1-9]{3}[ ]?[0-9]{3}$");
        if (zipRegex.test(zip))
        this.zip = zip;
        else
            throw "Invalid zip ";
    }

    /* @Description - to validate phone number should start with numbers to allow max 10 digit
    * to used throw keyword for the invalid phone number  */

    get mobileNumber() { return this.mobileNumber; }
    set mobileNumber(mobileNumber) {
        let phoneRegex = RegExp("^[1-9]{2}[ ]{1}[0-9]{10}$");
        if (phoneRegex.test(mobileNumber))
            this.mobileNumber = mobileNumber;
        else
            throw "Invalid phone number";
    }

    /* @Description - to validate email id  should start with small letter to allow one number and one
    * special character. 
    * to used throw keyword for the invalid phone number  */

    get email() { return this.email; }
    set email(email) {
        let emailRegex = RegExp("^([a-z0-9A-Z])+([.]?[a-z0-9A-Z]+)*[@]{1}[a-z0-9A-Z]+[.]{1}[a-zA-Z]{2,}([.]{1}[a-z]{2,})?$");
        if (emailRegex.test(email))
            this.email = email;
        else
            throw "Invalid email";
    }  
toString() {
        return "\nFirst Name    : " + this.firstName +
        "\nLast Name     : " + this.lastName +
        "\nAddress       : " + this.address +
        "\nCity          : " + this.city +
        "\nState         : " + this.state +
        "\nZip           : " + this.zip +
        "\nMobile Number : " + this.mobileNumber +
        "\nEmail         : " + this.email;
    }
    display() {
        console.log(lastName);
    }

}
/* @Description - to create a new address book array and add new contacts  */
    try {        
        var addressBook = new Array();
        console.log("<<<<<Welcome to AddressBook Application>>>>>");
        addressBook.push(new constructor("ashok","mane","jalna","jalna","Maharashtra",431514,4545454,"ashok.mit@gmail.com")); 
        addressBook.push(new constructor("joe","bidden","pune","pune","Maharashtra",431514,8788594431,"aaasa@gmail.com")); 
        addressBook.push(new constructor("Rohit","Sharma","Dadar","Mumbai","Maharashtra",400144,8000000431,"Rohit@Yahoo.com"));             
        addressBook.forEach((constructor) => console.log(constructor.toString()));
        }
        catch (e) {
            console.log('Regex test is fail \n' + e);
        }
console.log("welcome to Addressbook System in javaScript");
/** 
ability to create contact into addressbook
 */
 let contact = new constructor("ashok","mane","401jalna","jalna","maharashtra",431212,8459214148,"ashok@gmail.com");
 console.log(contact.toString());
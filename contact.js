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
console.log("welcome to Addressbook System in javaScript");
/** 
ability to create contact into addressbook
 */
 let contact = new constructor("ashok","mane","401jalna","jalna","maharashtra",431212,8459214148,"ashok@gmail.com");
 console.log(contact.toString());
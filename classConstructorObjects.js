class Person {
  constructor(fname, lname, contact, address) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
    this.adddress = address;
  }
  getName() {
    console.log(this.fname, this.lname);
  }
  getContact() {
    console.log(this.contact);
  }
}
p1 = new Person('Zakir', 'ansari', 99999, 'Hargisa');
p2 = new Person('Ali', 'Ahmed', 8888, 'Sakrdu');
p3 = new Person('sajid', 'Hussain', 776767, 'Lahore');

p1.getName, p1.getContact();
p2.getName();
p3.getContact(), p3.getName();

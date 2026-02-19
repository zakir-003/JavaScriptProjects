class Person {
  constructor(fname, lname, contact) {
    this.fname = fname;
    this.lname = lname;
    this.contact = contact;
  }
  getName() {
    console.log(this.fname, this.lname);
  }
  getContact() {
    console.log(this.contact);
  }
}
p1 = new Person('Zakir', 'ansari', 99999);
p2 = new Person('Ali', 'Ahmed', 8888);
p3 = new Person('sajid', 'Hussain', 776767);

p1.getName, p1.getContact();
p2.getName();
p3.getContact(), p3.getName();

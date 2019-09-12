public with sharing class test {
    public test() {
        List<Contact> con = new List<Contact>();
    }
    public void testscript(List<Contact> contacts){
        this.con = contacts;
        system.debug('test');
       
    }
}

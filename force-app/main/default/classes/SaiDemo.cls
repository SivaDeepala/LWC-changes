public with sharing class SaiDemo {
    List<Account> acc = new List<Account>();
    static string name = 'Siva Deepala';
    public SaiDemo() {
        
    }
    public static void testme(List<Account> acclist){
   this.acc = acclist;
   System.debug('testme' +acclist.size());
    }

}

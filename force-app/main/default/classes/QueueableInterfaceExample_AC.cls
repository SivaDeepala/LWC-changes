public class QueueableInterfaceExample_AC implements Queueable { 

    List<Lead> leadList = new List<Lead>(); 

    public QueueableInterfaceExample_AC(List<Lead> leadRecords) { 

        this.leadList = leadRecords; 

    } 

    public void execute(QueueableContext context) { 

        for (Lead leadRec : leadList) { 

                leadRec.Status = 'NON–RESPONSIVE'; 

                //leadRec.No_Interest_Status__c = 'Non-responsive'; 
                leadRec.title = 'mechanical';

                leadList.add(leadRec); 

        } 

        if(leadList.size() > 0){ 

                 update leadList; 

        } 

    } 

}


//This is a comment to check commits.

public with sharing class getAccountDetailsController {
    public getAccountDetailsController() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> accountDetails(){

        List<Account> lstAcc = [Select Id, Name, AccountNumber, Type, Industry from Account limit 20];

        return lstAcc;
    }

    @AuraEnabled
    public static List<Case> acctest(){
        List<Contact> lstcon = new List<Contact>();
         
        lstcon = [Select id, accountId, Department, Name from Contact limit 50];
        List<Account> lstacc = [Select id, name from accoutn limit 10];
        List<Case> lstCase = [Select id, casenumber from Case];
        List<Account> lstacc1 = [Select id, name from account];
        //comment added
        return lstCase;
    }
}
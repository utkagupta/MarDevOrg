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
        
        List<Case> lstCase = [Select id, casenumber from Case];

        return lstCase;
    }
}
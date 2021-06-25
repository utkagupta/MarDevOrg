import { LightningElement, wire } from 'lwc';
import accountDetails from '@salesforce/apex/getAccountDetailsController.accountDetails';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class GetAccountDetails extends LightningElement {
    lstAcc;
    errorAcc;
    columns = [{
        label: 'Account Name',
            fieldName: 'Name',
            sortable: true
    },
    {
        label: 'Account Number',
            fieldName: 'AccountNumber',
            sortable: true
    },
    {
        label: 'Account Type',
            fieldName: 'Type',
            sortable: true
    },
    {
        label: 'Industry',
            fieldName: 'Industry',
            sortable: true
    }]
    
    
    @wire(accountDetails) wiredAccounts({error, data}){
        if(data){
            this.lstAcc = data;
            console.log('return accounts ->', data);
            this.errorAcc = undefined;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Accounts retrieved successfully!',
                    variant: 'Success'
                })
            );
        }
        else if (error){
            this.errorAcc = error;
            console.log('eerror', error);
            this.lstAcc = undefined;
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Error',
                    message: 'Error while retrieving accounts!',
                    variant: 'Error'
                })
            );
        }
    }
    

}
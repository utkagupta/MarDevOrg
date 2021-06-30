import { LightningElement , api, wire} from 'lwc';
import getManagedContentByContentKeys from '@salesforce/apex/displayDataFromCMS.getManagedContentByContentKeys';

export default class DisplayDataFromCMS extends LightningElement {

    @api contentId = '';

    @wire(getManagedContentByContentKeys, { communityId: Id, managedContentIds: this.contentId, pageParam: 0, pageSize: 1, language: 'en_US', managedContentType: 'news', showAbsoluteUrl: false })
    managedContent({ error, data }) {
      if (data) {
  
        // Assign data to a variable which you can use in your HTML.
        
      } else if (error) {
        
       // Handle the error. 
      }
    }
}
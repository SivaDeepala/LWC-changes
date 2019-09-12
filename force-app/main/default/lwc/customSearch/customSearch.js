import { LightningElement,track} from 'lwc';
// import server side apex class method 
import getContactList from '@salesforce/apex/customSearchController.getContactList';
// import standard toast event 
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
 /* eslint-disable no-console*/
 /* eslint-disable no-alert*/

export default class customSearch extends LightningElement {
   
    //@track: Marks a property for internal monitoring. A template or function using- 
    //this property forces a component to rerender when the property’s value changes.
    @track contacts;
    sVal = '';
    @track msg ='';
    @track namefield ;
   
    // update sVal var when input field value change
    updateSeachKey(event) {
        this.sVal = event.target.value;
        console.log('select key' , this.sVal);
    }
 
    // call apex method on button click 
    handleSearch() {
        // if search input value is not blank then call apex method, else display error msg 
        if (this.sVal !== '') {
            getContactList({
                    searchKey: this.sVal
                })
                .then(result => {
                    // set @track contacts variable with return contact list from server  
                    this.contacts = result;
                    console.log('results---', result);
                })
                .catch(error => {
                    // display server exception in toast msg 
                    const event = new ShowToastEvent({
                        title: 'Error',
                        variant: 'error',
                        message: error.body.message,
                    });
                    this.dispatchEvent(event);
                    // reset contacts var with null   
                    this.contacts = null;
                });
        } else {
            // fire toast event if input field is blank
            const event = new ShowToastEvent({
                variant: 'error',
                message: 'Search text missing..',
            });
            this.dispatchEvent(event);
        }
    }
    // eslint-disable-next-line no-useless-constructor
    // eslint-disable-next-line no-unused-vars
    constructor(namefield) {
        alert('constructor');
        // eslint-disable-next-line no-this-before-super
        
        super();
        this.namefield = 'siva deepla';
        this.classList.add('new-class');
        //
        //this.msg = 'this is from constructor';
    }
}
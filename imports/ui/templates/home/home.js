import './home.html'
import { Tasks } from '../../../../lib/collections/collections'
import { Template } from 'meteor/templating';

AutoForm.addHooks(['taskInsert'], {
    onSuccess: function(formType, result) {
        // this.resetForm()
    },
    onError: function (formType, error) {
        if (error && error.message) {
            alert(error.message);
        }
    },
}) ;


Template.home.helpers({
    formCollection() {
        return Tasks;
    }
});

Template.list.helpers({
   task : function(){
       return Tasks.find().fetch();
   }
});

Template.list.events({
    'click #edit' : function(){
        Router.go('/edit/'+this._id);
    }
});
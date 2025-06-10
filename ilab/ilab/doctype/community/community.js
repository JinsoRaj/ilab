// Copyright (c) 2025, JinsoRaj and contributors
// For license information, please see license.txt

// frappe.ui.form.on("Community", {
// 	refresh(frm) {

// 	},
// });

frappe.ui.form.on('Community', {
   refresh: function(frm) {
       frm.add_custom_button(__('Create Student'), function() {
           frappe.new_doc('Student', {
               // Map Community fields to Student fields
               full_name: frm.doc.full_name,
               gender: frm.doc.gender,
               year_of_birth: frm.doc.year_of_birth,
               phone_number: frm.doc.phone_number,
               blood_group: frm.doc.blood_group,
               // Link back to Community
               community: frm.doc.name
           });
       }, __('Create profiles'));
       // Create Fellow button
       frm.add_custom_button(__('Create Fellow'), function() {
         frappe.new_doc('Fellow', {
             // Map fields as needed
             community: frm.doc.name
         });
     }, __('Create profiles'));
   }
});



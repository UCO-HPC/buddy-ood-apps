const checkbox_no_default = $('#batch_connect_session_context_no_default');
const textbox_modules = $('#batch_connect_session_context_modules');

function set_visibility_of_form_group(form_element, show) {
  let parent = form_element.parent();

  // kick out if you didn't find what you're looking for
  if(parent.length <= 0) {
    return;
  }

  if(show) {
    parent.show();
  } else {
    parent.hide();
  }
}

function checkbox_no_default_change_handler(event) {
  set_visibility_of_form_group(textbox_modules, checkbox_no_default.get(0).checked);
}

checkbox_no_default.change((event) => checkbox_no_default_change_handler(event));

checkbox_no_default_change_handler(null);

var form = new hx.Form('#form')
  .addText('Text', {required: true, placeholder: 'Name'})
  .addEmail('Email', {required: true, placeholder: 'your.name@ocado.com'})
  .addUrl('Url', {placeholder: 'http://www.example.co.uk/'}) // Allows blank or valid URL (with http:// prefix)
  .addNumber('Number', {required: true})
  .addSelect('Select', ['red', 'green', 'blue'])
  .addCheckbox('Checkbox')
  .addPassword('Password')
  .addRadio('Radio', ['One', 'Two', 'Three'])
  .addTagInput('Tag Input')
  .addDatePicker('Date Picker')
  .addTimePicker('Time Picker')
  .addDateTimePicker('Date Time Picker')
  .addSubmit('Submit', 'fa fa-check')
  .on('submit', function (data) {console.log(data)})

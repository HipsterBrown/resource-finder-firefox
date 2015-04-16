var { ToggleButton } = require('sdk/ui/button/toggle');
var panels = require('sdk/panel');
var self = require('sdk/self');

var button = ToggleButton({
  id: 'resource-finder-button',
  label: 'Resource Finder',
  icon: {
    '16': self.data.url('icons/Icon16.png')
  },
  onChange: handleChange
});

var panel = panels.Panel({
  contentURL: self.data.url('index.html'),
  onHide: handleHide
});

function handleChange(state) {
  if(state.checked) {
    panel.show({
      position: button
    });
  }
}

function handleHide() {
  button.state('window', {checked: false});
}

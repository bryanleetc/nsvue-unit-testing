import { config } from '@vue/test-utils';

const NSElements = [
  'ActionBar',
  'ActionItem',
  'FormattedString',
  'GridLayout',
  'HtmlView',
  'NavigationButton',
  'Page',
  'StackLayout',
  'TabView',
  'TabViewItem',
  'TextField',
];

NSElements.forEach((ele) => {
  config.stubs[ele] = true;
});

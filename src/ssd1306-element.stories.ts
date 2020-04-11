import { withKnobs, boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/web-components';
import { html } from 'lit-html';
import './ssd1306-element';

storiesOf('Ssd1306 Element', module)
  .addParameters({ component: 'wokwi-ssd1306-element' })
  .addDecorator(withKnobs)
  .add('Default', () => html` <wokwi-ssd1306-element></wokwi-ssd1306-element> `)
  .add(
    'Request new image data',
    () =>
      html`
        <wokwi-ssd1306-element
          updateImage="${boolean('updateImage', false)}"
        ></wokwi-ssd1306-element>
      `
  );

import { $ } from '@wdio/globals'
import Page from './page.js';

class CareerPage extends Page {

    public get openPositions() {
        return $('a[data-event-label="OtevrenePozice"]');
    }
}

export default new CareerPage();

import { Main } from '../../src/app.js';

const main = new Main();

describe('App Test', () => {
    it("ce qui est attendu", function() {
        expect(main.fonction('parametre')).toBe('parametre');
    })});
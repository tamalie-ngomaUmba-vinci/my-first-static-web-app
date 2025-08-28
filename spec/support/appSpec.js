import { Main } from '../../src/app.js';

const main = new Main();

describe('App Test', () => {
    it("ce qui est attendu", function() {
        expect(main.fonction('parametre')).toBe('parametre');
    });

    it("test pour l'addition", function() {
        expect(main.add(2, 3)).toBe(5);
    });

    it("test pour la multiplication", function() {
        expect(main.multiply(2, 3)).toBe(6);
    });
    
});
import { expect } from 'chai';
import * as scepters from './';

/** Module */
describe('Scepters Module', () => {
    /** initial state */
    describe('initial state', () => {
        it('should contain the right number of items', () => {
            expect(Object.keys(scepters.initialState)).to.have.lengthOf(98);
        });

        it('should have the hero id equal to the key', () => {
            Object.keys(scepters.initialState).forEach((id: string) => {
                expect(scepters.initialState[id].id).to.be.equal(id);
            });
        });
    });
});

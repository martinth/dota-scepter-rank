import { expect } from 'chai';
import * as scepters from './';

describe('sceptersReducer', () => {

    describe('initial data', () => {
        it('should have the correct scepter list', () => {
            const initalState = scepters.sceptersReducer();
            expect(initalState.allScepters).to.have.lengthOf(98);
        });

        it('should have two random selections', () => {
            const initalState = scepters.sceptersReducer();
            const scepterIds = initalState.allScepters.map((s) => s.id);
            expect(initalState.currentCompare.scepterA).to.be.oneOf(scepterIds);
            expect(initalState.currentCompare.scepterB).to.be.oneOf(scepterIds);
            expect(initalState.currentCompare.scepterA).to.not.equal(initalState.currentCompare.scepterB);
        });
    });

    describe('chooseNewCompare action', () => {
        it('should choose a new random pair', () => {
            const initalState = scepters.sceptersReducer();
            const resultState = scepters.sceptersReducer(initalState, scepters.chooseNewCompare());
            const previousCompare = [initalState.currentCompare.scepterA, initalState.currentCompare.scepterB];
            expect(resultState.currentCompare.scepterA).to.not.be.oneOf(previousCompare);
            expect(resultState.currentCompare.scepterB).to.not.be.oneOf(previousCompare);
        });
    });

    describe('voteCompare action', () => {
        it('should choose a new random pair', () => {
            const initalState = scepters.sceptersReducer();
            const resultState = scepters.sceptersReducer(
                initalState,
                scepters.voteCompare(initalState.currentCompare.scepterA),
            );
            const previousCompare = [initalState.currentCompare.scepterA, initalState.currentCompare.scepterB];
            expect(resultState.currentCompare.scepterA).to.not.be.oneOf(previousCompare);
            expect(resultState.currentCompare.scepterB).to.not.be.oneOf(previousCompare);
        });
    });
});

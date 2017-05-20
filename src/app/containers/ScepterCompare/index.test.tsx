import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { ScepterCompare } from './index';
import { HeroScepter } from 'components';

describe('<ScepterCompare />', () => {

  const component = renderComponent(ScepterCompare);

  it('Shows two scepters', () => {
    expect(component.find(HeroScepter).length).to.be.equal(2);
  });

});

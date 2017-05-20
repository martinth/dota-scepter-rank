import { expect } from 'chai';
import { renderComponent } from 'helpers/TestHelper';
import { ScepterList } from './index';
import { HeroScepter } from 'components';

describe('<ScepterList />', () => {

  const component = renderComponent(ScepterList);

  it('Renders a list of scepters', () => {
    expect(component.find(HeroScepter).length).to.be.above(0);
  });

});

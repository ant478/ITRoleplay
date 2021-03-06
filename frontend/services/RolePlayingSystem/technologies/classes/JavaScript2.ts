import Character from '../../Character';
import Technology from './Technology';
import JavaScript1 from './JavaScript1';
import { TechnologyGroup, TechnologyKey, TechnologyTag } from '../index';
import expect from '../../helpers/requirementsHelper';

export default class JavaScript2 extends Technology {
  public static id = 2;
  public static key: TechnologyKey = 'JavaScript2';
  public static tags: TechnologyTag[] = ['JavaScript', 'Frontend'];
  public static basePrice = 2;
  public static complexityLevel = 1;
  public static group: TechnologyGroup = 'Frontend';
  public static parent = JavaScript1;

  public static isCharacterMatchRequirements(character: Character): boolean {
    return expect(character)
      .toHaveMinLevel(3)
      .toHaveTechnology(this.parent.key)
      .isMatch();
  }
}

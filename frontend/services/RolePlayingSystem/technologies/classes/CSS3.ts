import Character from '../../Character';
import Technology from './Technology';
import CSS2 from './CSS2';
import { TechnologyGroup, TechnologyKey, TechnologyTag } from '../index';
import expect from '../../helpers/requirementsHelper';

export default class CSS3 extends Technology {
  public static id = 11;
  public static key: TechnologyKey = 'CSS3';
  public static tags: TechnologyTag[] = ['CSS', 'Frontend'];
  public static basePrice = 3;
  public static complexityLevel = 2;
  public static group: TechnologyGroup = 'Frontend';
  public static parent = CSS2;

  public static isCharacterMatchRequirements(character: Character): boolean {
    return expect(character)
      .toHaveMinLevel(5)
      .toHaveTechnology(this.parent.key)
      .isMatch();
  }
}

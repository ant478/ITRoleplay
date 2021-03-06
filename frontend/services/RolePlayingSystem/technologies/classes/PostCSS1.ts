import Character from '../../Character';
import Technology from './Technology';
import { TechnologyGroup, TechnologyKey, TechnologyTag } from '../index';
import expect from '../../helpers/requirementsHelper';
import CSS2 from './CSS2';

export default class PostCSS1 extends Technology {
  public static id = 34;
  public static key: TechnologyKey = 'PostCSS1';
  public static tags: TechnologyTag[] = ['CSS', 'PostCSS', 'Frontend'];
  public static basePrice = 1;
  public static complexityLevel = 1;
  public static group: TechnologyGroup = 'Frontend';
  public static parent = null;

  public static isCharacterMatchRequirements(character: Character): boolean {
    return expect(character)
      .toHaveTechnology(CSS2.key)
      .isMatch();
  }
}

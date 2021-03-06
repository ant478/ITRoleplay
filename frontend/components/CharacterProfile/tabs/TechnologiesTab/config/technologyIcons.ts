import { ComponentType } from 'react';
import { TechnologyKey } from '../../../../../services/RolePlayingSystem';
import { JavaScript, Dart, ScalaJS, TypeScript, HTML, CSS, CoffeeScript, Handlebars, SASS, LESS, Stylus,
  PostCSS, HAML, VueJS, AngularJS, React, EmberJS, BackboneJS, KnockoutJS, Rails, NodeJS, Java, Python,
  CPlusPlus, PHP, CSharp, MySQL, PostgreSQL, MongoDB, SQLite, OracleDatabase, Git, SVN, Mercurial } from '../icons';

type TechnologyIconsConfig = {
  [key in TechnologyKey]: ComponentType;
};

const technologyIcons: TechnologyIconsConfig = {
  HTML1: HTML,
  HTML2: HTML,
  HTML3: HTML,
  HTML4: HTML,
  Handlebars1: Handlebars,
  Handlebars2: Handlebars,
  HAML1: HAML,
  HAML2: HAML,
  JavaScript1: JavaScript,
  JavaScript2: JavaScript,
  JavaScript3: JavaScript,
  JavaScript4: JavaScript,
  JavaScript5: JavaScript,
  Dart1: Dart,
  Dart2: Dart,
  Dart3: Dart,
  TypeScript1: TypeScript,
  TypeScript2: TypeScript,
  TypeScript3: TypeScript,
  ScalaJS1: ScalaJS,
  ScalaJS2: ScalaJS,
  ScalaJS3: ScalaJS,
  CoffeeScript1: CoffeeScript,
  CoffeeScript2: CoffeeScript,
  CoffeeScript3: CoffeeScript,
  CSS1: CSS,
  CSS2: CSS,
  CSS3: CSS,
  CSS4: CSS,
  SASS1: SASS,
  SASS2: SASS,
  LESS1: LESS,
  LESS2: LESS,
  Stylus1: Stylus,
  Stylus2: Stylus,
  PostCSS1: PostCSS,
  PostCSS2: PostCSS,
  VueJS1: VueJS,
  VueJS2: VueJS,
  VueJS3: VueJS,
  AngularJS1: AngularJS,
  AngularJS2: AngularJS,
  AngularJS3: AngularJS,
  React1: React,
  React2: React,
  React3: React,
  EmberJS1: EmberJS,
  EmberJS2: EmberJS,
  EmberJS3: EmberJS,
  BackboneJS1: BackboneJS,
  BackboneJS2: BackboneJS,
  BackboneJS3: BackboneJS,
  KnockoutJS1: KnockoutJS,
  KnockoutJS2: KnockoutJS,
  KnockoutJS3: KnockoutJS,
  Rails1: Rails,
  Rails2: Rails,
  Rails3: Rails,
  Rails4: Rails,
  Rails5: Rails,
  NodeJS1: NodeJS,
  NodeJS2: NodeJS,
  NodeJS3: NodeJS,
  Java1: Java,
  Java2: Java,
  Java3: Java,
  Java4: Java,
  Java5: Java,
  Python1: Python,
  Python2: Python,
  Python3: Python,
  Python4: Python,
  Python5: Python,
  PHP1: PHP,
  PHP2: PHP,
  PHP3: PHP,
  PHP4: PHP,
  PHP5: PHP,
  CPlusPlus1: CPlusPlus,
  CPlusPlus2: CPlusPlus,
  CPlusPlus3: CPlusPlus,
  CPlusPlus4: CPlusPlus,
  CPlusPlus5: CPlusPlus,
  CSharp1: CSharp,
  CSharp2: CSharp,
  CSharp3: CSharp,
  CSharp4: CSharp,
  CSharp5: CSharp,
  MySQL1: MySQL,
  MySQL2: MySQL,
  MySQL3: MySQL,
  MySQL4: MySQL,
  PostgreSQL1: PostgreSQL,
  PostgreSQL2: PostgreSQL,
  PostgreSQL3: PostgreSQL,
  PostgreSQL4: PostgreSQL,
  MongoDB1: MongoDB,
  MongoDB2: MongoDB,
  MongoDB3: MongoDB,
  SQLite1: SQLite,
  SQLite2: SQLite,
  SQLite3: SQLite,
  OracleDatabase1: OracleDatabase,
  OracleDatabase2: OracleDatabase,
  OracleDatabase3: OracleDatabase,
  OracleDatabase4: OracleDatabase,
  Git1: Git,
  Git2: Git,
  Git3: Git,
  SVN1: SVN,
  SVN2: SVN,
  SVN3: SVN,
  Mercurial1: Mercurial,
  Mercurial2: Mercurial,
  Mercurial3: Mercurial,
};

export default technologyIcons;

const webpackConfig = require('./config/webpack.config.js');
const apiConfig = require('./config/api');

const tmpApiDocPath = 'documentation/tmp_swagger_2.json';

module.exports = function init(grunt) {
  grunt.initConfig({
    eslint: {
      options: {
        fix: !!grunt.option('fix'),
      },
      src: [
        '**/*.js', '**/*.json', '**/*.jsx',
        '!frontend/**/build/**/*', '!node_modules/**/*',
      ],
    },

    tslint: {
      options: {
        fix: !!grunt.option('fix'),
        project: './config/tsconfig.json',
      },
      src: [
        '**/*.ts', '**/*.tsx',
        '!frontend/**/build/**/*', '!node_modules/**/*',
      ],
    },

    webpack: {
      myConfig: Object.assign(webpackConfig, {
        watch: !!grunt.option('watch'),
      }),
    },

    nodemon: {
      dev: {
        script: 'app.js',
        options: {
          env: {
            NODE_ENV: process.env.NODE_ENV || 'development',
          },
          watch: [
            './app.js',
            './src/**/*',
            './config/**/*',
            './frontend/**/build/**/*',
          ],
          delay: 1000,
        },
      },
    },

    exec: {
      convertApi: `api-spec-converter
        --from=openapi_3
        --to=swagger_2
        --syntax==json
        documentation/openapi_3.json > ${tmpApiDocPath}`, // TODO: remove when dredd will fully support OpenAPI 3

      testApi: {
        cmd: () => {
          const apiLocation = `http://127.0.0.1:${apiConfig.port}${apiConfig.path}`;
          const names = grunt.option('names') ? '--names=true' : '';
          const only = grunt.option('only') ? `--only="${grunt.option('only')}"` : '';
          const hooks = '--hookfiles="test/api/dreddHooks.js"';

          return `dredd ${tmpApiDocPath} ${apiLocation} ${names} ${only} ${hooks}`;
        },
      },

      db: {
        cmd: () => {
          const environment = process.env.NODE_ENV || 'development';
          const command = grunt.option('cmd');
          const seedersPath = grunt.option('seeders-path') || `seeders/${environment}`;

          return `sequelize db:${command}
            --config=config/db.json
            --seeders-path=${seedersPath}`;
        },
      },

      migrateDb: 'grunt db --cmd=migrate',

      populateTestDb: {
        cmd: () => `cross-env NODE_ENV=test grunt db --cmd=seed:undo:all
          && cross-env NODE_ENV=test grunt db --cmd=seed:all`,
      },
    },

    clean: {
      swagger2Api: tmpApiDocPath,
    },
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-continue');
  grunt.loadNpmTasks('grunt-eslint');
  grunt.loadNpmTasks('grunt-tslint');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('lint', [
    'continue:on',
    'tslint',
    'eslint',
    'continue:off',
  ]);
  grunt.registerTask('build-for-dev', ['webpack']);
  grunt.registerTask('build', [
    'exec:migrateDb',
    'lint',
    'webpack',
  ]);
  grunt.registerTask('db', ['exec:db']);
  grunt.registerTask('test-api', [
    'exec:populateTestDb',
    'exec:convertApi',
    'continue:on',
    'exec:testApi',
    'continue:off',
    'clean:swagger2Api',
  ]);
};

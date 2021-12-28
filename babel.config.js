module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['react-native-reanimated/plugin', [
      'module-resolver',
      {
        root: ['.'],
        extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
        alias: {
          '@assets/images': './src/assets/images',
          '@assets/css': './src/assets/css',
          '@assets/scss': './src/assets/scss',
          '@assets/svg': './src/assets/svg',
          '@assets/font': './src/assets/font',
          '@components/atoms': './src/components/atoms',
          '@components/molecules': './src/components/molecules',
          '@components/organisms': './src/components/organisms',
          '@components/templates': './src/components/templates',
          '@network': './src/network',
          '@features': './src/redux-state/features',
          '@redux-state': './src/redux-state',
          '@styles': './src/styles',
          '@screens': './src/screens',
          '@utils/configs': './src/utils/configs',
          '@utils/constants': './src/utils/constants',
          '@utils/contexts': './src/utils/contexts',
          '@utils/libs': './src/utils/libs',
          '@utils/helpers': './src/utils/helpers',
          '@utils/hoc': './src/utils/hoc',
          '@utils/mocks': './src/utils/mocks',
          '@utils/hooks': './src/utils/hooks',
          '@utils/types': './src/utils/types',
          '@utils/interfaces': './src/utils/interfaces',
          '@screen':'./src/screens',
          '@app': './src',
          '@base': '.',
        },
      }
    ]]
  };
};

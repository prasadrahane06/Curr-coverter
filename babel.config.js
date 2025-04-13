module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@content': './src/content',
          '@data': './src/data',
          '@helpers': './src/helpers',
          '@hooks': './src/hooks',
          '@localization': './src/localization',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@services': './src/services',
          '@store': './src/store',
          '@styles': './src/styles',
          '@types': './src/types',
          '@utility': './src/utility',
          '@vendor': './src/vendor',
        },
      },
    ],
  ],
};

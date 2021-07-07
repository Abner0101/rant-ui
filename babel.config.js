const pkg = require('./package.json')

module.exports = {
  presets: ['@vue/cli-plugin-babel/preset'],
  plugins: [
    ['import', {
      libraryName: 'rant-ui',
      libraryDirectory: 'packages',
      style: (name) => {
        return `${name}/${name.split('/').pop()}.scss`;
      },
    }, 'rant-ui']
  ]
}
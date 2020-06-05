module.exports = {
  name: 'setagla-bank',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/setagla-bank',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

export default {
  initIconFont() {
    let domModule = weex.requireModule('dom');
    domModule.addRule('fontFace', {
      'fontFamily': "iconfont1",
      'src': "url('http://at.alicdn.com/t/font_562191_fyhx8bsoirnyu8fr.ttf')"
    });
  },
}
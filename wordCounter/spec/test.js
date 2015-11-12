var expect = chai.expect;
var should = chai.should;
var html = [].slice.call(document.getElementById('fakeHTML').children);

describe('When visiting a web page', function() {

  it('the readTime object should exist', function () {
    expect(readTime).to.not.eq(undefined);
    expect(typeof readTime).to.eq('object');
  });

  it('readdTime should be able to set words per minute with function configWPM, and get words per minute with getWPM', function() {
    expect(typeof readTime.configWPM).to.eq('function');
    var wordPM = readTime.configWPM(300);
    expect(typeof readTime.getWPM).to.eq('function');
    expect(readTime.getWPM()).to.eql(300);
    wordPM = readTime.configWPM(5000);
    expect(readTime.getWPM()).to.eql(5000);
  });

  it('should be able to get the body of an html document and convert it to an array ', function() {
    var arr = readTime.convertToArray(html);
    expect(arr.length).to.eql(22);
  });

  it('should be able to extract textContent from each node', function() {
    var pageText = readTime.getTextFromNodes(readTime.convertToArray(html));
    expect(pageText.length).to.eql(8428);
  });

  it('should remove punctuation and replace with "" from all text content to avoid weird counting', function() {
    var fakeString = "?.!?hello";
    var otherFakeString = "Natha?n is!!! ..... wondering"
    expect(readTime.removePunctuation(fakeString)).to.eq('hello');
    expect(readTime.removePunctuation(otherFakeString)).to.eq('Nathan is  wondering');
  });

  it('should count all the words by trimming each one individually and removing punctuation', function() {
    var string = "this is a string of words that will hopefully get counted correctly";
    expect(readTime.countWords(string)).to.eql(12);
    var anotherString = "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    expect(readTime.countWords(anotherString)).to.eql(69)
  });

  it('should be able to calculate words per minute by dividing the number of words by the configured words per minute', function() {
    var wordsOnPage = readTime.countWords(readTime.getTextFromNodes(readTime.convertToArray(html)));
    readTime.configWPM(600);
    expect(readTime.calcWPM(6000)).to.eql('10 minute read');
    readTime.configWPM(230);
    expect(readTime.calcWPM(2070)).to.eql('9 minute read');
    readTime.configWPM(500);
    expect(readTime.calcWPM(wordsOnPage)).to.eql('3 minute read');
  });

});

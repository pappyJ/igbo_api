import chai from 'chai';
import { getLocalUrlRoute } from './shared/commands';
import { SITE_TITLE, DOCS_SITE_TITLE } from './shared/constants';

const { expect } = chai;

describe('API Homepage', () => {
  it('should render the built site', (done) => {
    getLocalUrlRoute()
      .end((_, res) => {
        expect(res.status).to.equal(200);
        expect(res.type).to.equal('text/html');
        expect(res.charset.toLowerCase()).to.equal('utf-8');
        expect(res.body).to.be.an('object');
        expect(res.text).to.not.contain('An unexpected error has occurred.');
        expect(res.text).to.contain('Igbo API');
        expect(res.text).to.contain(SITE_TITLE);
        done();
      });
  });

  it('should render the docs site', (done) => {
    getLocalUrlRoute('/docs')
      .end((_, res) => {
        expect(res.status).to.equal(200);
        expect(res.type).to.equal('text/html');
        expect(res.charset.toLowerCase()).to.equal('utf-8');
        expect(res.body).to.be.an('object');
        expect(res.text).to.not.contain('An unexpected error has occurred.');
        expect(res.text).to.contain(DOCS_SITE_TITLE);
        done();
      });
  });
});

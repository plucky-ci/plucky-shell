const Code = require('code');
const Lab = require('lab');
const lab = exports.lab = Lab.script();

const describe = lab.describe;
const it = lab.it;
const before = lab.before;
const after = lab.after;
const expect = Code.expect;

const {
	PluckyShell,
} = require('../src/pluckyshell');

const noop = ()=>{};

describe('PluckyShell', ()=>{
	it('should return return 0 and a result string', (done) => {
		const shell = new PluckyShell();	

		shell.handler({params: {command: 'ls'}}, (code, val) => {
			expect(code).to.equal(0);
			expect(val.result).to.not.be.undefined();
			expect(val.result).to.be.a.string();
			done();
		});
	});

	it('should execute a file and return 0 and result string', (done) => {
		const shell = new PluckyShell();	

		shell.handler({params: {command: './test.sh', execFile: true}}, (code, val) => {
			expect(code).to.equal(0);
			expect(val.result).to.not.be.undefined();
			expect(val.result).to.be.a.string();
			done();
		});
	});

	it('should try and run command but return a 1 and a ', (done) => {
		const shell = new PluckyShell();	

		shell.handler({params: {command: 'asdf'}}, (code, val) => {
			expect(code).to.equal(1);
			expect(val.status).to.be.a.string();
			done();
		});
	});

	it('should try and run file and return a 1 and a ', (done) => {
		const shell = new PluckyShell();	

		shell.handler({params: {command: './asdf.sh', execFile: true}}, (code, val) => {
			expect(code).to.equal(1);
			expect(val.status).to.be.a.string();
			done();
		});
	});
});

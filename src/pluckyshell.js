const {Task} = require('plucky-pipeliner');
const exec = require('child_process').exec;
const execFile = require('child_process').execFile;

class PluckyShell extends Task {
	handler(state, next) {
		const {
			params = {},
		} = state;
		if(!params.command) {
			return next(1, {status: 'No url configured'});
		}

		const cb = (error, stdout, stderr) => {
			if(error) {
				return next(1, {status: stdout});
			}
			return next(0, {result: stdout});
		};

		if(params.execFile) {
			execFile(params.command, params.arguments, {cwd: '/Users/vchenhu/Projects/Tinder/plucky-ci/plucky-shell'}, cb);
		} else {
			exec(params.command, {cwd: params.cwd}, cb);
		}
	}
}

module.exports = { PluckyShell };
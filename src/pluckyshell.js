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
				return next(1, {status: error.toString()});
			}
			return next(0, {stdout, stderr});
		};

		if(params.execFile) {
			execFile(params.command, params.arguments, {cwd: params.cwd}, cb);
		} else {
			exec(params.command, {cwd: params.cwd}, cb);
		}
	}
}

module.exports = { PluckyShell };
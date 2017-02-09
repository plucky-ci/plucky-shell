const {Task} = require('plucky-pipeliner');
const exec = require('child_process').exec;
const execFile = require('child_process').execFile;
const path = require('path');

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

		const fileLoc = path.join(process.cwd(), params.cwd || '');

		if(params.execFile) {
			execFile(params.command, params.arguments, {cwd: fileLoc}, cb);
		} else {
			exec(params.command, {cwd: fileLoc}, cb);
		}
	}
}

module.exports = { PluckyShell };
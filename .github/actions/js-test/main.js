const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');

const run = () => {
  // Get values
  const path = core.getInput('path', {
    required: true,
    trimWhitespace: true,
  });

  exec.exec(`echo "Testing js actions where path is ${path}"`)
};

run();

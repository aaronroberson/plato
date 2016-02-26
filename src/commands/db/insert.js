
import { Command } from 'clapi';

import initdb from './_initdb';

const command = Command.init((input, output, done) => {
  output.data.documents = output.data.documents || [];
  input.args.db.insert(input.args.document, (err, newDoc) => {
    if (err) return done(err.message ? new Error(err.message) : err);
    if (Array.isArray(newDoc)) output.data.documents.push(...newDoc);
    else output.data.documents.push(newDoc);
    done();
  });
});

command.pre(initdb);

export default command;
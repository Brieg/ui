import base from './config/base.mjs';
import ignores from './config/ignores.mjs';
import nx from './config/nx.mjs';
import angular from './rules/angular.mjs';
import quality from './rules/quality.mjs';
import typescript from './rules/typescript.mjs';

export default [...base, ignores, nx, quality, typescript, angular];

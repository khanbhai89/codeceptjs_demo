// in this file you can append custom step methods to 'I' object

import ILocator = CodeceptJS.ILocator;

export = function (): any {
  return actor({
    // Define custom steps here, use 'this' to access default methods of I.
  });
};

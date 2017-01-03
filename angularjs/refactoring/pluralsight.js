var _ = require('underscore');

var names = ['Craig', 'John', 'Dan', 'Elijah'];
m = _.map(names, function(name) {
    return name + ' is mapped from an array.';
});
console.log(m)

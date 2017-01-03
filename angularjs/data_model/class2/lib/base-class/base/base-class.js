Function.prototype.inherits = function(baseclass) {
    var _constructor = this;
    _constructor = baseclass.apply(_constructor);
}
angular.module('BaseClass', [])
.factory('BaseClass', ['BCBase', function(Base) {
    BaseClass = {};
    BaseClass.Base = Base;
    return BaseClass;
}]);

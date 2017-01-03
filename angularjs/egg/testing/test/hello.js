describe('Hello world', function(){
    var element;
    var $scope;
    beforeEach(module('app'))
    beforeEach(inject(function($compile, $rootScope){
        $scope = $rootScope;
        $scope.data = {message: 'Hello'}
        element = angular.element('<div eh-simple="data">{{2+2}}</div>');
        $compile(element)($rootScope);
    }))

    it ('should equal 4', function(){
        $scope.$digest();
        expect(element.html()).toBe('4');
    })

    describe('ehSimple', function(){
        it('should add a class of plain', function(){
            expect(element.hasClass('plain')).toBe(true)
        })

        xit('should respond to a click', function() {
            browserTrigger(element, 'click');
            expect(element.scope().clicked).toBe(true);
        })

        xit('should update both scopes on click', function(){
            browserTrigger(element, 'click');
            expect(element.scope().ehSimple.message).toBe('Hello world');
            expect($scope.data.message).toBe('Hello world');
        })
    })
})

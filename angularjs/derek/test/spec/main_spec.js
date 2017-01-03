'use strict';

describe('An AngularJS test suite', function(){
    beforeEach(module('ngResource', function($provide, $controllerProvider){
        $provide.value('fooVal', 5)
            $controllerProvider.register('MainCtrl', function($scope){
                $scope.hello = 'world';
                this.reverse = function(input){
                    return input.split('').reverse().join('');
                };
            });
    }));

    it('should have tests', function(){
        expect(true).toBe(true);
    });

    it('should inject dependencies', inject(function($resource, fooVal){
        expect($resource).toBeDefined();
        expect(fooVal).toBe(5)
    }));

    it('should compile angular expressions', inject(function($rootScope){
        $rootScope.sum = 4;

        var expression = '<p>2 + 2 == {{sum}}</p>';
        var element = $compile(expression($rootScope));

        expect(element.html()).not.toContain('2 + 2 == 4');

        $rootScope.$digest();

        expect(element.html()).toContain('2 + 2 == 4')
    }));

    it('should provide controllers', inject(function($rootScope, $controller){
        var $scope = $rootScope.$new(),
            ctrl = $controller('MainCtrl', { $scope: $scope });

        expect($scope.hello).toBe('world');
        expect('ctrl.reverse('foo')).toBe('oof');
    }));

});

describe('TestApp', function(){
    var $httpBackend;

    beforeEach(module('TodoApp'));

    beforeEach(inject(function($rootScope){
        $scope = $rootScope.new();
    }));

    beforeEach(inject(function(_$httpBackend){
        $httpBackend = _$httpBackend_;
    }));

    afterEach(function(){
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return a list of todos from the server', inject(function(Todo){
         $httpBackend.expectGET('/api/todos').respond(200, [use
                 { name: 'Something to do', complete: false },
                 { name: 'Another thing to do', complete: true }]);
    }));
    
    var todos = Todo.query();
    
    expect(todos.length).toBe(0);

    $httpBackend.flush();

    expect(todos.length).toBe(2);

    it('should query for todos from the controller', inject(function($rootScope, $controller){
         $httpBackend.expectGET('/api/todos').respond(200, [use
                 { name: 'Something to do', complete: false },
                 { name: 'Another thing to do', complete: true }
         ]);
    var $scope = $rootScope.$new(),
        mainCtrl = $controller('MainCtrl', { $scope: $scope });

    expect($scope.todos.length).toBe(0);

    $httpBackend.flush();

    expect($scope.todos.length).toBe(2);

    }));

    it('should compile directives', inject(function() {
        gg
    }))

});

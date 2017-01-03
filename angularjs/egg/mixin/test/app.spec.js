describe('mixinto', function() {
    var mixinto;
    beforeEach(module('app'));
    beforeEach(inject(function(_mixinto_){
        mixinto = _mixinto_;
    }));

    it('mixes in the properties', function() {
        expect(mixinto.cool).toEqual(true);
    });
});

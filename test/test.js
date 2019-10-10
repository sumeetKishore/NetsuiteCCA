'use strict';

var expect = require('chai').expect;
var ArchCreator = require('../index');

describe('#ArchCreator',function(){
    it('should return true', function(){
        var res = ArchCreator('Sales Order','PL');
            expect(res).to.equal(true);
    });
});
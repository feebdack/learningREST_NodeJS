'use strict';

var app = require('../server');
var chai = require('chai');
var request = require('supertest');

var expect = chai.expect;

describe('Project List API Integration Tests', function(){
    describe('#GET /projects tasks', function(){
        it('should get all projects', function(done){
            request(app).get('/projects')
                .end(function(err,res){
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body).to.be.empty;
                    done();
                });
        });
    });
});
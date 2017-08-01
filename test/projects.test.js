'use strict';

var app = require('../server');
var chai = require('chai');
var request = require('supertest');
var controller = require('../api/controllers/projectListController');

var expect = chai.expect;

describe('\n\nProject List API Integration Tests', function(){

    var project = {
        name: 'Integration Test Project Name-1',
        description: 'Integration Test Project Description 1',
        Created_date: Date.now
    };

    describe('#GET /projects', function(){
        it('Should get all projects', function(done){
            request(app).get('/projects').end(function(err,res){
                    expect(res.statusCode).to.equal(200);
                    expect(res.body).to.be.an('array');
                    expect(res.body).to.be.empty;
                    done();
                });
        });
    });

    describe('#POST /projects', function(){
        it('Should create a project', function(){
            request(app).post('/projects').send(project).end(function(err,res){
                expect(res.statusCode).to.equal(200);
                expect(res.body.name).to.equal(project.name);
                expect(res.body.description).to.equal(project.description);
                expect(res.body.Created_date).to.equal(project.Created_date);
                project = res.body;
                done();
            });
        });
    });

    describe('#DELETE /projects/$id', function(){
        it('Should delete a project', function(){
            request(app).delete('/projects/'+project._id).end(function(err,res){
                expect(res.statusCode).to.equal(200);
                expect(res.body.message).to.equal(controller.delete_project_message);
                done();
            });
        });
    });
});
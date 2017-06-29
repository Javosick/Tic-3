'use strict';

describe('Controller: ResultadosCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyDevApp'));

  var ResultadosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ResultadosCtrl = $controller('ResultadosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ResultadosCtrl.awesomeThings.length).toBe(3);
  });
});

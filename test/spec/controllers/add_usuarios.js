'use strict';

describe('Controller: AddUsuariosCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyDevApp'));

  var AddUsuariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddUsuariosCtrl = $controller('AddUsuariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddUsuariosCtrl.awesomeThings.length).toBe(3);
  });
});

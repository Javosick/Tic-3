'use strict';

describe('Controller: EditUsuariosCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyDevApp'));

  var EditUsuariosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditUsuariosCtrl = $controller('EditUsuariosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditUsuariosCtrl.awesomeThings.length).toBe(3);
  });
});

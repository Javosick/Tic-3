'use strict';

describe('Controller: AddOrganizacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyDevApp'));

  var AddOrganizacionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddOrganizacionesCtrl = $controller('AddOrganizacionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AddOrganizacionesCtrl.awesomeThings.length).toBe(3);
  });
});

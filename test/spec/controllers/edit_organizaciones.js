'use strict';

describe('Controller: EditOrganizacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyDevApp'));

  var EditOrganizacionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditOrganizacionesCtrl = $controller('EditOrganizacionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EditOrganizacionesCtrl.awesomeThings.length).toBe(3);
  });
});

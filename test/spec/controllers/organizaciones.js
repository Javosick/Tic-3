'use strict';

describe('Controller: OrganizacionesCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyDevApp'));

  var OrganizacionesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrganizacionesCtrl = $controller('OrganizacionesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(OrganizacionesCtrl.awesomeThings.length).toBe(3);
  });
});

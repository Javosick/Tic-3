'use strict';

describe('Controller: EncuestasCtrl', function () {

  // load the controller's module
  beforeEach(module('surveyDevApp'));

  var EncuestasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EncuestasCtrl = $controller('EncuestasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EncuestasCtrl.awesomeThings.length).toBe(3);
  });
});

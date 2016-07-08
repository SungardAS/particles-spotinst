var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("iam", function() {
    describe("account_role", function() {
      it("produces an account role", function() {
        cTests.testParticle(
          "resource",
          "iam_account_role",
          require("./fixtures/resource_iam_account_role_output_1"),
          {logicalId: "AccountRole", hArgs: {spotinstManagedPolicy:"arn::1234"}}
        );
      });
      it("produces an account role with managed policy ref", function() {
        cTests.testParticle(
          "resource",
          "iam_account_role",
          require("./fixtures/resource_iam_account_role_output_2"),
          {logicalId: "AccountRole", hArgs: {spotinstManagedPolicy:'{"Ref": "ManagedPolicy"}'}}
        );
      });
      it("produces an account role with managed policy and externalId", function() {
        cTests.testParticle(
          "resource",
          "iam_account_role",
          require("./fixtures/resource_iam_account_role_output_3"),
          {logicalId: "AccountRole", hArgs: {spotinstManagedPolicy:'{"Ref": "ManagedPolicy"}', externalId:"11111"}}
        );
      });
    });
  });
});

var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("resources", function() {
  describe("iam", function() {
    describe("managed_policy", function() {
      it("produces an account role", function() {
        cTests.testParticle(
          "resource",
          "iam_managed_policy",
          require("./fixtures/resource_iam_managed_policy_output_1"),
          {logicalId: "ManagedPolicy", hArgs: {}}
        );
      });
    });
  });
});

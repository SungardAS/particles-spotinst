var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("iam", function() {
    describe("assume_role_policy", function() {
      it("produces an assume role policy", function() {
        cTests.testParticle(
          "partial",
          "iam_assume_role_policy",
          require("./fixtures/partial_iam_assume_role_policy_output_1"),
          {logicalId: null, hArgs: {}}
        );
      });
      it("produces an assume role policy with an externalId", function() {
        cTests.testParticle(
          "partial",
          "iam_assume_role_policy",
          require("./fixtures/partial_iam_assume_role_policy_output_2"),
          {logicalId: null, hArgs: {externalId: "externalId"}}
        );
      });
    });
  });
});

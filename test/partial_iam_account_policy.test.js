var assert = require("assert");
var CondensationTests = require("condensation-particle-tests");

var cTests = new CondensationTests();

describe("parameters", function() {
  describe("iam", function() {
    describe("account_policy", function() {
      it("produces an account policy", function() {
        cTests.testParticle(
          "partial",
          "iam_account_policy",
          require("./fixtures/partial_iam_account_policy_output_1"),
          {logicalId: null, hArgs: {}}
        );
      });
    });
  });
});

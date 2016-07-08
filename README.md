# particles-spotinst

[![condensation-image][condensation-image]][condensation-url]

[![NPM][npm-image]][npm-url]
[![Gitter][gitter-image]][gitter-url]
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]


## Summary

[Condensation][condensation-url] particles that create AWS CloudFormation templates for Spotinst.

## Ready To Launch

Ready to Launch community available templates created from condensation particles

### Account Setup

Creates a ManagedPolicy and Role for Spotinst to assume and operate in an AWS Account.  You will need the randomally generated External ID from Spotinst to run this stack.

The output will containt the ARN of the role to give back to Spotinst.

|region|Stack|
|------|------------|---------|
|us-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-east-1#/stacks/new?stackName=particles-spotinst&templateURL=https://s3.amazonaws.com/condensation-particles.us-east-1/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|
|us-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-1#/stacks/new?stackName=particles-spotinst&templateURL=https://s3-us-west-1.amazonaws.com/condensation-particles.us-west-1/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|
|us-west-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=us-west-2#/stacks/new?stackName=particles-spotinst&templateURL=https://s3-us-west-2.amazonaws.com/condensation-particles.us-west-2/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|
|eu-west-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-west-1#/stacks/new?stackName=particles-spotinst&templateURL=https://s3-eu-west-1.amazonaws.com/condensation-particles.eu-west-1/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|
|eu-central-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=eu-central-1#/stacks/new?stackName=particles-spotinst&templateURL=https://s3-eu-central-1.amazonaws.com/condensation-particles.eu-central-1/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|
|ap-northeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-1#/stacks/new?stackName=particles-spotinst&templateURL=https://s3-ap-northeast-1.amazonaws.com/condensation-particles.ap-northeast-1/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|
|ap-northeast-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-northeast-2#/stacks/new?stackName=particles-spotinst&templateURL=https://s3-ap-northeast-2.amazonaws.com/condensation-particles.ap-northeast-2/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|
|ap-southeast-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-1#/stacks/new?stackName=particles-spotinst&templateURL=https://s3-ap-southeast-1.amazonaws.com/condensation-particles.ap-southeast-1/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|
|ap-southeast-2|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=ap-southeast-2#/stacks/new?stackName=particles-spotinst&templateURL=https://s3-ap-southeast-2.amazonaws.com/condensation-particles.ap-southeast-2/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|
|sa-east-1|[![Launch Stack](https://s3.amazonaws.com/cloudformation-examples/cloudformation-launch-stack.png)](https://console.aws.amazon.com/cloudformation/home?region=sa-east-1#/stacks/new?stackName=particles-spotinst&templateURL=https://s3-sa-east-1.amazonaws.com/condensation-particles.sa-east-1/particles-spotinst/master/particles/cftemplates/account_setup.template.json)|

## License
Apache-2.0 ©

[condensation-image]: https://raw.githubusercontent.com/SungardAS/condensation/master/docs/images/condensation_logo.png
[condensation-url]: https://github.com/SungardAS/condensation
[npm-image]: https://badge.fury.io/js/particles-spotinst.svg
[npm-url]: https://npmjs.org/package/particles-spotinst
[gitter-image]: https://badges.gitter.im/Join%20Chat.svg
[gitter-url]: https://gitter.im/SungardAS/condensation?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge
[travis-image]: https://travis-ci.org/SungardAS/particles-spotinst.svg?branch=master
[travis-url]: https://travis-ci.org/SungardAS/particles-spotinst
[daviddm-image]: https://david-dm.org/SungardAS/particles-spotinst.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/SungardAS/particles-spotinst

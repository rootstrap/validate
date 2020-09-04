<p align="center"><img src="resources/logo.png" /></p>

# @rootstrap/validate

[![Maintainability](https://api.codeclimate.com/v1/badges/a878b4be647cd2a9582c/maintainability)](https://codeclimate.com/github/rootstrap/validate/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/a878b4be647cd2a9582c/test_coverage)](https://codeclimate.com/github/rootstrap/validate/test_coverage)

[Description]
Have you ever had to write your own custom validations? It can be a bit confusing, specially if you have never done it before. Don't worry, we are here to help.

This library extends the popular library [validate.js](https://validatejs.org) and adds some custom validations that have proven to be very useful and quite commonly needed. Don't reinvent the wheel, next time you need to write a custom validation, check if someone hasn't implemented that custom validation already.

Aside form common custom validations, this library will also serve as a gallery of all the custom validations that we have had to implement at Rootstrap, although some might not be included out of the box, we intend to showcase them in case you need them. [Here is a link]() to said gallery

If you need a validation that is not in this library you might be wondering, where do I even start? I've never written a custom validation. Don't worry, we got you covered! We have made available a [tutorial]() so it's easier to understand how to create a custom validation. Don't forget to check out other custom validations in the gallery, they can be really helpful when implementing your own as well.

## Demo

[In this section, you should include some images/gifs of how the library looks like.
Also if the library has some demo you can add the steps for emulating this.]

## Installation

```
yarn add @rootstrap/validate
```

or

```
npm install @rootstrap/validate --save
```

## Usage of custom validators

Just in case, if you are just trying to figure out how a validate.js validator works, [here is a link](https://validatejs.org/) to their docs. This library only explains the validators it adds.

### conditionalConstraints

This validators allows you to validate certain constraints on a field, given that other fields meet certain validations.

As an example, it would be useful when trying to validate that a field is present only if a checkbox is checked or not checked. Sounds like a very common use case right? Here is how you can use the validator `conditionalConstraints` to achieve that.

```js
// createNewElement is a checkbox
// If createNewElement is true:
// then validate checks the constraints assigned to new element
// else
// validate skips the assigned constraints inside conditional constraints.
const myFancyFormConstraints = {
  newElementName: {
    conditionalConstraints: {
      dependencies: [
        { attribute: 'createNewElement', constraints: { presence: true } },
      ],
      constraints: {
        presence: true,
      },
    },
  },
};
```

### noPresence

This constraint is more of a helper to `conditionalConstraints` than anything else. When checking a field with some conditionalConstraints you might want to have as a dependency a field actually not being present.

Let's take the same example that `conditionalConstraints` has but now let's change the checkbox to `useCurrentElement`. With that change, now the new element field would only be required if `useCurrentElement` is not present.

In case you want to check that a field is not present, the constraint inside the constraints of the dependency should look like:

```js
noPresence: true;
```

Optionally, if you want to include false values in the check, you can do so by setting this in the options like this:

```js
presence: {
  includeFalse: true;
}
```

Full example:

```js
// useCurrentElement is a checkbox
// If useCurrentElement is not present or false:
// then validate checks the constraints assigned to new element
// else
// validate skips the assigned constraints inside conditional constraints.
const myFancyFormConstraints = {
  newElementName: {
    conditionalConstraints: {
      dependencies: [
        {
          attribute: 'useCurrentElement',
          constraints: { noPresence: { includeFalse: true } },
        },
      ],
      constraints: {
        presence: true,
      },
    },
  },
};
```

## Contributing

If you have an idea that could make this library better we would love to hear it. Please take a look at our [Contributing Guidelines](CONTRIBUTING.md) to get to know the rules and how to get started with your contribution.

## License

**@rootstrap/validate** is available under the MIT license. See [LICENSE](LICENSE.md) file for more info.

## Credits

**@rootstrap/validate** is maintained by [Rootstrap](http://www.rootstrap.com) with the help of our [contributors](https://github.com/rootstrap/validate/contributors).

[<img src="https://s3-us-west-1.amazonaws.com/rootstrap.com/img/rs.png" width="100"/>](http://www.rootstrap.com)

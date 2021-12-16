# consumer-app

> React Native app for Consumer's side app of Retailo.

**Build Status**

| Branch    | Status                                                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| `stage`   | [![Build status](https://build.appcenter.ms/v0.1/apps/f9e52a1b-e140-4869-ae5c-9afbd7b4553f/branches/stage/badge)](https://appcenter.ms)   |
| `qa`      | [![Build status](https://build.appcenter.ms/v0.1/apps/f9e52a1b-e140-4869-ae5c-9afbd7b4553f/branches/qa/badge)](https://appcenter.ms)      |
| `develop` | [![Build status](https://build.appcenter.ms/v0.1/apps/f9e52a1b-e140-4869-ae5c-9afbd7b4553f/branches/develop/badge)](https://appcenter.ms) |

## Project Setup
<details>
  <summary>Click to expand!</summary>

> Note: We use yarn as default package manager for this repository.

- Clone this repo `git clone git@gitlab.com:development-team20/app-consumer.git`
- Create your [personal access token](https://docs.gitlab.com/ee/user/profile/personal_access_tokens.html) with allowed scope(s) of `api`.
- In your shell, run this command: `export GL_NPM_TOKEN=<your-personal-access-token>`
- Install dependencies `yarn install`
- Ensure `google-services.json` file is placed under `android/app/` directory
- Ensure `RetailerApp.keystore` file is placed under `android/app/` directory
- Create environment variable file as explained [here](#static-variables)

</details>

## Running the App

### Android

<details>
  <summary>Click to expand!</summary>

Android's build-type is categorized by the following types:

| Build Type | Description                                                                                                 |
| ---------- | ----------------------------------------------------------------------------------------------------------- |
| `debug`    | Debug build is used for development and debugging the source-code of the app.                               |
| `release`  | Release build is minified, obfuscated code meant to be used in testing / staging / production environments. |

#### Pre-requisite Steps

1. Ensure `GL_NPM_TOKEN` is exported from your shell
2. Make sure dependencies / node_modules are installed (`yarn install`)
3. Ensure your devices or simulators (real-device or Android AVD) are set up and running


#### Debug/Development Build

<details>
  <summary>Click to expand!</summary>

- Ensure all [pre-requisite](#pre-requisite-steps) steps are complete
- Setup `.env.development` as per [.env.template](./.env.template) in project root
- Ensure `GL_NPM_TOKEN` is exported from your shell
- Make sure dependencies / node_modules are installed (`yarn install`)
- Ensure your devices or simulators (iOS or Android AVD) are set up and running
- Note that the scripts will be slightly different on Windows machine, for example, `dev:android` will be `SET APP_ENV=development && react-native run-android` instead of `APP_ENV=development react-native run-android`
- For windows machines, ensure Virtualization Technology is enabled in your BIOS.
- Run the app with: `yarn dev:android`

</details>

#### Release Variant Build

<details>
  <summary>Click to expand!</summary>

- Ensure all [pre-requisite](#pre-requisite-steps) steps are complete
- According to your target environment (`staging` | `production`) create `.env.<env-name>` file as per [.env.template](./.env.template) in project root
- Run the app with any of the following scripts:

| Script                     | Description                                              |
| -------------------------- | -------------------------------------------------------- |
| `yarn prod:android`        | Release variant built against `production` environment.  |
| `yarn stage:android`       | Release variant built against `staging` environment.     |
| `yarn qa:android`          | Release variant built against `qa` environment.          |
| `yarn development:android` | Release variant built against `development` environment. |

</details>

</details>

## Project Structure

TBA

## Development Notes

Read our [Contribution Guide](https://docs.google.com/document/u/0/d/1Q-LC3A_kmsMiRmhBwEPAKIlPnk4nQaVyEMIM4fsVnbw/edit) here.

### Development Setup

- We use `.editorconfig` to ensure everyone uses SPACES (instead of tabs) with a width of 2. Please ensure your IDE \
  supports .editorconfig.


### Environment Variables

<details>
  <summary>Click to expand!</summary>

#### Dynamic Variables

Several variables such as `BASE_URL` are dynamic, i.e., fetched from an API so that they can be upgraded later on,
without the need for generating a release build. These variables are of two types:

| Type  | Description                                                                                |
|-------|--------------------------------------------------------------------------------------------|
| keys  | Credential keys required for 3rd-party integration services (such as Maps) used in the app |
| flags | Feature flags to enable/disable certain features in the app                                |

#### Static Variables

We are using Dotenv, A module that loads environment variables from a selected file.

- For first time project setup, please create an `.env.*` file at root directory according to [.env.template](.env.template)
- Environment variables from multiple files, (i.e. `.env`, `.env.development`, `.env.staging`, `.env.production`, \
  and `.env.qa`) can be loaded according to your target environment.
- env file can be modified for introducing new variables.
  Please note that after modification in the environment file follow the instruction that are mentioned
  in the FAQ of the below-mentioned link.
  https://nicedoc.io/zetachang/react-native-dotenv


**Additional Note:**

We are using two different libraries to handle environment variables.
1. `react-native-dotenv` this library is used to access the `.env` variables from the JSX code.

2. `react-native-config` this library is used to access the `.env` variables from the native android and native ios
  code it helps to secure your API keys you are using directly in the native code.

</details>

### Styling Best Practices

<details>
  <summary>Click to expand!</summary>


- We should sort all CSS properties alphabetically for increased readability
- We need to write responsive CSS using wp/hp utilities provided by [react-native-responsive-screen](https://www.npmjs.com/package/react-native-responsive-screen)
- Keeping the parameter name either short or destructuring it right away. Here the same rules as for function components in React apply, because props are almost never used directly, instead we want to use their content

```javascript
// without destructuring
export const ScreenWrapper = styled.View `
  background-color: ${props => props.theme.colors.grey7};
`;
// destructured props
export const ScreenWrapper = styled.View `
  background-color: ${({ theme }) => theme.colors.grey7};
`;
```

</details>

### Coding/Optimization Practices

<details>
  <summary>Click to expand!</summary>

#### Avoid Passing Inline Functions

If we are using the inline functions, every time the “render” function is called, a new instance of the function is created.

When React does the virtual DOM diffing, it finds a new function instance each time, so during the rendering phase, it binds the new function and leaves the old instance for garbage collection.

So, directly binding the inline function leads to extra work on the garbage collector and new function binding to the DOM.

```javascript
export default function Products() {
  return (
    <Item
      onPress={()=> console.log('add item in cart')}
    />
  );
}
```
Instead of defining the inline function for props, you can define the arrow function.
```javascript
export default function Products() {
  const handleAddToCart = () => {
    console.log('add item in cart')
  }
  return (
    <Item
      onPress={handleAddToCart}
    />
  );
}

```

#### Memoize React Components

React introduced the `memo` HOC (Higher Order Component) for preventing unnecessary re-rendering and the `useMemo` hook for optimizing expensive computations.

However, it is also possible to use the `useCallback` hook to do that. The major difference between `useMemo` and `useCallback` is that `useMemo` returns a memoized value but `useCallback` returns a memoized callback.

**React.memo():**

`React.memo()` is used to handle memoization, meaning if any component receives the same set of properties more than once, it will use the previously cached properties and render the JSX view returned by the functional component only once, saving rendering overhead. 

Let's consider below simple stateless `ProductItem` React component.
```javascript
const ProductItem = ({item}) => {
    const {title, price, productImage} = item;

    return (
        <View>
            <Image source={productImage} />
            <Text>{title}</Text>
            <Text>{price}</Text>
        </View>
    )
}
```
Here, all the children in `ProductItem` are based on props. This stateless component will re-render whenever props changes. If the `ProductItem` component attribute is less likely to change, then it's a good candidate for using the memoize version of the component:
```javascript
const ProductItem = ({item}) => {
    const {title, price, productImage} = item;

    return (
        <View>
            <Image source={productImage} />
            <Text>{title}</Text>
            <Text>{price}</Text>
        </View>
    )
}
export default React.memo(ProductItem)
```
This method will do a shallow equal comparison of both props and context of the component based on strict equality.

**useMemo Hook:**

`useMemo` returns a memoized value of a function. However, it should be used only when performing expensive computations.

For instance, suppose we want to filter some data coming from our API by their status. We could memoize the computation to recalculate the results only when the values change.

If we wish to filter the data based on the rating (without memoization), we may use up a lot of memory. For such, we don’t want to unnecessarily recalculate the values when other components re-render. We want to re-render or re-calculate only when the dependent rating changes.

Let’s see how we can achieve this with `useMemo`.
```javascript
const App = () =>{
    const rateCompare = 3;

    const computedValue = useMemo(() => {
        const result = data.filter((d) => d.rating > rateCompare);
        return result;
    }, [rateCompare]);

    const renderItem = ({ item }) => (
      <View>
        <Text>{item.state}</Text>
      </View>
    );
    return (
      <FlatList
        data={computedValue}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
}
```
We assumed that we have huge data coming from our API and needed to perform a computationally intensive calculation. Although we’ve used a simple filter operation, we could be doing series of calculations here. This is a good use case for the `useMemo` hook.
By using `useMemo`, we can cache (memoize) the results for the value specified in the dependency array. For instance, if the rateCompare constant was 3 the first time it is run, the function will not recalculate anytime the value of rateCompare is 3 even if the entire components re-render. It will only recalculate when the value changes.

**useCallback Hook:**

`useCallback` hook is similar to `useMemo` but it returns a memoized callback.
```javascript
const App = () =>{
    const [values, setValues] = useState([]);
    const rateCompare = 3;

    const valuesCallback = useCallback(() => {
        const result = data.filter((d) => d.rating > rateCompare);
        setValues(result);
    }, [rateCompare, setValues]);

    useEffect(() => {
        valuesCallback();
    }, [valuesCallback]);

    const renderItem = ({ item }) => (
      <View>
        <Text>{item.state}</Text>
      </View>
    );
    return (
      <FlatList
        data={values}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    )
}
```
This does the same thing as the `useMemo` example. However, because `useCallback` returns a function, we need to call that function to get the value. Here, we have called the function in a `useEffect` hook and then rendered the values in a `FlatList` component.

While `React.memo` can optimize an entire component, `useMemo` and `useCallback` can optimize a calculation or process. However, each of these should be used only when they are necessary, otherwise, they could even compound the performance issue.

Related Article: [When to useMemo and useCallback](https://kentcdodds.com/blog/usememo-and-usecallback)

#### Make Use of InteractionManager

[InteractionManager](https://reactnative.dev/docs/interactionmanager) allows you to schedule the execution of tasks on the JavaScript thread after any interactions or animations have been completed. In particular, `InteractionManager` allows JavaScript animations to run smoothly.

Tasks can be scheduled to run after interactions using the following code:
```javascript
InteractionManager.runAfterInteractions(() => {
  // ...long-running synchronous task...
});
```
#### Make Use of requestAnimationFrame

Sometimes, if we do an action in the same frame that we are adjusting the opacity or highlight of a component that is responding to a touch, we won't see that effect until after the onPress function has returned. If onPress does a setState that results in a lot of work and a few frames dropped, this may occur. A solution to this is to wrap any action inside of your onPress handler in `requestAnimationFrame`:
```javascript
handleOnPress() {
  requestAnimationFrame(() => {
    this.doExpensiveAction();
  });
}
```

</details>

---


## Release the App

See [RELEASE](./RELEASE.md) docs for step-by-step instructions to build the app

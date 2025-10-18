import { registerApplication, start, LifeCycles } from 'single-spa'

registerApplication({
    name: '@homehub/react-navbar',
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            '@homehub/react-navbar'
        ),
    activeWhen: ['/'],
})

registerApplication({
    name: '@homehub/react-dashboard',
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            '@homehub/react-dashboard'
        ),
    activeWhen: ['/'],
})

registerApplication({
    name: '@homehub/react-login',
    app: () =>
        import(
            /* webpackIgnore: true */ // @ts-ignore-next
            '@homehub/react-login'
        ),
    activeWhen: ['/'],
})

start({
    urlRerouteOnly: true,
})

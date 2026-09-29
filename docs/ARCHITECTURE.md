# Architecture and publication boundary

The original application separates WeChat pages and components, a frontend service layer, cloud functions, and persistent storage. The public tree preserves those boundaries without providing their connections.

| Layer | Public material | Withheld implementation |
| --- | --- | --- |
| App shell | Empty route list and inert entry file | Startup, cloud initialization, navigation |
| Pages | Original directory layout; one presentation excerpt | Full screens, course content, business behavior |
| Components | Generic completion banner | Original design system and other assets |
| Services | Generic read cache and rejecting adapter | Production calls, identity, persistence, policies |
| Types and utilities | Presentation shapes and generic helpers | Domain model and API contracts |
| Cloud functions | Directory names and omission notes | Every handler, database query, and authorization rule |

## Why these examples were selected

The cache illustrates asynchronous coordination, including invalidation while a request is pending. The page excerpt illustrates lifecycle cleanup and protecting new state from stale responses. The component illustrates WeChat's separation of properties, markup, and styles. The smaller utilities illustrate deterministic behavior and explicit validation.

These examples are independent. They do not connect into a user journey. The public directory names disclose broad feature categories but neither reconstruct the implementation nor supply the curriculum.

## Limitations of the examples

The cache represents one read slot; it is not a multi-user cache, persistence layer, or authorization mechanism. It returns the stored value directly, so callers must avoid mutating cached objects. Invalidating it prevents stale caching but does not cancel an already-running request.

The page's loader is an explicit dependency boundary. No real transport or server is provided. WXML and WXSS are source excerpts; visual rendering has not been verified in WeChat Developer Tools for this export.

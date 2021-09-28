# micro-frontend-demo-page

Link demo: [demo](https://thahlam-mfe-dashboard.s3.eu-west-1.amazonaws.com/container/latest/index.html)

A simple demo page apply micro frontend service that accept these requirements:

### Inflexible Requirement #1

Zero coupling between child project

- No importing of functions/objects/classes/etc
- No shared state (no redux)
- Share libraries through Micro frontend Function is ok

### Inflexible Requirement #2

Near-zero coupling between container and child apps

- Container should't assume that a child is using a particular framework
- Any necessary communication done with callbacks or simple events

### Inflexible Requirement #3

- CSS from one project shouldn't affect another

### Inflexible Requirement #4

Version control (monorepo vs separate) shouldn't have any impact on the overall project

- Some people want to use monorepos
- Some people want to keep every in a separate repo

<!--
Copyright 2017 Adobe Systems Incorporated

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
-->
Core Title Component - v1
====
Core Title component written in HTL that features:

* In-place editing
* HTML element configuration (`h1` - `h6`)
* Styles

## Use Object
The Title component uses the `com.adobe.cq.wcm.core.components.models.Title` Sling model as its Use-object.

## Component policy configuration properties
The following configuration properties are used:

1. `./type` - defines the default HTML heading element type (`h1` - `h6`) this component will use for its rendering

## Edit dialog properties
The following properties are written to JCR for this Title component and are expected to be available as `Resource` properties:

1. `./jcr:title` - will store the text of the title to be rendered
2. `./type` - will store the HTML heading element type which will be used for rendering; if no value is defined, the component will fallback
to the value defined by the component's policy
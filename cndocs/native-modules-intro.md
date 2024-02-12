---
id: native-modules-intro
title: 原生模块简介
---

import NativeDeprecated from './the-new-architecture/\_markdown_native_deprecation.mdx'

<NativeDeprecated />

有时候 App 需要访问平台 API，但 React Native 可能还没有相应的模块包装；或者你需要复用一些 Java 代码，而不是用 Javascript 重新实现一遍；又或者你需要实现某些高性能的、多线程的代码，譬如图片处理、数据库、或者各种高级扩展等等。

我们把 React Native 设计为可以在其基础上编写真正的原生代码，并且可以访问平台所有的能力。这是一个相对高级的特性，我们并不认为它应当在日常开发的过程中经常出现，但具备这样的能力是很重要的。如果 React Native 还不支持某个你需要的原生特性，你应当可以自己实现该特性的封装。

## 创建原生模块

There are different ways to write a native module for your React Native application:

1. Creating a local library that can be imported in your React Native application. Read [Creating local libraries](local-library-setup) guide to learn more.
2. Directly within your React Native application's iOS/Android projects
3. As a NPM package that can be installed as a dependency by your/other React Native applications.

This guide will first walk you through implementing a native module directly within a React Native application. However the native module you build in the following guide can be distributed as an NPM package. Check out the [Setting Up a Native Module as a NPM Package](native-modules-setup) guide if you are interested in doing so.

## 教程

In the following sections we will walk you through guides on how to build a native module directly within a React Native application. As a prerequisite, you will need a React Native application to work within. You can follow the steps [here](getting-started) to setup a React Native application if you do not already have one.

Imagine that you want to access the iOS/Android native calendar APIs from JavaScript within a React Native application in order to create calendar events. React Native does not expose a JavaScript API to communicate with the native calendar libraries. However, through native modules, you can write native code that communicates with native calendar APIs. Then you can invoke that native code through JavaScript in your React Native application.

In the following sections you will create such a Calendar native module for both [Android](native-modules-android) and [iOS](native-modules-ios).
